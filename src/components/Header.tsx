import { useState, useEffect, useCallback, useMemo, useRef, useLayoutEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Process", href: "#process" },
  { label: "Blog", href: "#blog" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

// Matches the fixed header height (h-20 on >= sm, h-16 on mobile) plus a small gap
// so anchored sections always land cleanly below the navbar.
const getHeaderOffset = () => {
  if (typeof window === "undefined") return 96;
  return window.innerWidth < 640 ? 76 : 96;
};
const HEADER_OFFSET = 96;
const OBSERVER_THRESHOLDS = [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isBlogRoute = location.pathname.startsWith("/blog");
  const sectionLinks = useMemo(() => navLinks.map((link) => link.href), []);
  const initialActiveSection = isBlogRoute
    ? "#blog"
    : sectionLinks.includes(location.hash)
      ? location.hash
      : "#home";
  const [activeSection, setActiveSection] = useState(initialActiveSection);
  const syncFrameRef = useRef<number | null>(null);
  const pendingSectionRef = useRef<string | null>(
    isBlogRoute ? "#blog" : sectionLinks.includes(location.hash) ? location.hash : null,
  );

  const setSingleActive = useCallback((href: string) => {
    setActiveSection((current) => (current === href ? current : href));
  }, []);

  const replaceHash = useCallback((href: string) => {
    if (location.pathname !== "/") return;
    window.history.replaceState(window.history.state, "", href);
  }, [location.pathname]);

  const syncHashIfIdle = useCallback((href: string) => {
    if (location.pathname !== "/" || location.hash === href || pendingSectionRef.current) return;
    window.history.replaceState(window.history.state, "", href);
  }, [location.hash, location.pathname]);

  const scrollToSection = useCallback((href: string, behavior: ScrollBehavior = "smooth") => {
    const target = document.getElementById(href.replace("#", ""));
    if (!target) return false;

    const offset = getHeaderOffset();
    const top = Math.max(target.getBoundingClientRect().top + window.scrollY - offset, 0);
    window.scrollTo({ top, behavior });
    return true;
  }, []);

  const syncActiveSection = useCallback(() => {
    if (isBlogRoute) {
      pendingSectionRef.current = null;
      setSingleActive("#blog");
      return;
    }

    const sections = sectionLinks
      .map((href) => {
        const element = document.getElementById(href.replace("#", ""));
        if (!element) return null;
        const rect = element.getBoundingClientRect();
        return { href, rect };
      })
      .filter((section): section is { href: string; rect: DOMRect } => Boolean(section));

    if (!sections.length) return;

    // Use the viewport center (offset by header) as the probe line so the active
    // nav item changes exactly when each section is centered in view.
    const offset = getHeaderOffset();
    const probeY = offset + (window.innerHeight - offset) * 0.5;

    const closest = sections.reduce((best, section) => {
      const distance = probeY < section.rect.top
        ? section.rect.top - probeY
        : probeY > section.rect.bottom
          ? probeY - section.rect.bottom
          : 0;

      if (!best || distance < best.distance) {
        return { href: section.href, distance };
      }

      return best;
    }, null as { href: string; distance: number } | null);

    if (!closest) return;

    const pendingHref = pendingSectionRef.current;
    if (pendingHref) {
      const pendingSection = sections.find((section) => section.href === pendingHref);
      const pendingReached = pendingSection
        ? probeY >= pendingSection.rect.top && probeY <= pendingSection.rect.bottom
        : false;

      if (!pendingReached) {
        setSingleActive(pendingHref);
        return;
      }

      pendingSectionRef.current = null;
      setSingleActive(pendingHref);
      syncHashIfIdle(pendingHref);
      return;
    }

    setSingleActive(closest.href);
    syncHashIfIdle(closest.href);
  }, [isBlogRoute, sectionLinks, setSingleActive, syncHashIfIdle]);

  const scheduleSync = useCallback(() => {
    if (syncFrameRef.current !== null) {
      cancelAnimationFrame(syncFrameRef.current);
    }

    syncFrameRef.current = requestAnimationFrame(() => {
      syncFrameRef.current = null;
      syncActiveSection();
    });
  }, [syncActiveSection]);

  useEffect(() => {
    setSingleActive(initialActiveSection);
  }, [initialActiveSection, setSingleActive]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      scheduleSync();
    };

    setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", scheduleSync);
    scheduleSync();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", scheduleSync);
      if (syncFrameRef.current !== null) {
        cancelAnimationFrame(syncFrameRef.current);
      }
    };
  }, [scheduleSync]);

  useEffect(() => {
    if (isBlogRoute) {
      pendingSectionRef.current = null;
      setSingleActive("#blog");
      return;
    }

    const observer = new IntersectionObserver(
      () => scheduleSync(),
      {
        rootMargin: `-${HEADER_OFFSET}px 0px -20% 0px`,
        threshold: OBSERVER_THRESHOLDS,
      },
    );

    sectionLinks.forEach((href) => {
      const element = document.getElementById(href.replace("#", ""));
      if (element) observer.observe(element);
    });

    scheduleSync();

    return () => observer.disconnect();
  }, [isBlogRoute, scheduleSync, sectionLinks, setSingleActive]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useLayoutEffect(() => {
    if (isBlogRoute) {
      pendingSectionRef.current = null;
      setSingleActive("#blog");
      return;
    }

    if (!location.hash) return;

    const targetHref = sectionLinks.includes(location.hash) ? location.hash : "#home";
    pendingSectionRef.current = targetHref;
    setSingleActive(targetHref);
    scrollToSection(targetHref, "smooth");
  }, [isBlogRoute, location.hash, scrollToSection, sectionLinks, setSingleActive]);

  const handleNavClick = useCallback((e: React.MouseEvent, link: { href: string }) => {
    e.preventDefault();
    setMobileOpen(false);
    pendingSectionRef.current = link.href;
    setSingleActive(link.href);

    if (isBlogRoute) {
      navigate(`/${link.href}`);
      return;
    }

    replaceHash(link.href);
    scrollToSection(link.href, "smooth");
  }, [isBlogRoute, navigate, replaceHash, scrollToSection, setSingleActive]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "shadow-sm border-b" : "bg-transparent"
        }`}
        style={scrolled ? {
          background: "hsl(var(--glass-bg))",
          borderColor: "hsl(var(--glass-border))",
          backdropFilter: "blur(12px) saturate(150%)",
          WebkitBackdropFilter: "blur(12px) saturate(150%)",
          boxShadow: "inset 0 1px 0 hsl(var(--glass-highlight)), 0 4px 20px hsl(var(--neu-shadow-dark))",
        } : undefined}
      >
        <div className="max-w-[1360px] mx-auto w-full flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 md:px-4 lg:px-10 xl:px-16">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, { href: "#home" })}
            className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-foreground btn-press shrink-0 mr-2 md:mr-2 lg:mr-10 xl:mr-20"
          >
            CosmetIQ<span className="text-accent">_</span>lab
          </a>

          <nav
            className="hidden md:flex items-center gap-0 md:gap-0 lg:gap-1.5 ml-auto"
            onMouseLeave={() => setHoveredNav(null)}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              const isHovered = hoveredNav === link.href;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  aria-current={isActive ? "page" : undefined}
                  className="relative px-2 md:px-2 lg:px-4 py-2 text-[12px] md:text-[12px] lg:text-sm font-medium transition-all duration-300 rounded-full cursor-pointer btn-press whitespace-nowrap focus:outline-none focus-visible:outline-none focus:ring-0"
                  onMouseEnter={() => setHoveredNav(link.href)}
                  style={{
                    color: isActive
                      ? "hsl(var(--primary-foreground))"
                      : isHovered
                        ? "hsl(var(--emerald))"
                        : "hsl(var(--muted-foreground))",
                    transition: "color 200ms ease",
                  }}
                >
                  <AnimatePresence>
                    {isHovered && !isActive && (
                      <motion.span
                        layoutId="nav-hover-pill"
                        className="absolute inset-0 rounded-full z-[-1]"
                        style={{
                          background: "hsl(var(--emerald) / 0.15)",
                        }}
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.92 }}
                        transition={{ type: "spring", stiffness: 400, damping: 28 }}
                      />
                    )}
                  </AnimatePresence>

                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full z-[-1] nav-active-pill"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}

                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 ml-2 md:ml-2 lg:ml-4">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 text-foreground btn-press"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50"
              style={{ background: "hsl(var(--foreground) / 0.15)", backdropFilter: "blur(8px)" }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-[min(320px,85vw)] z-50 p-6 sm:p-8 flex flex-col"
              style={{
                background: "hsl(var(--glass-bg))",
                backdropFilter: "blur(24px) saturate(150%)",
                WebkitBackdropFilter: "blur(24px) saturate(150%)",
                boxShadow: "-20px 0 60px hsl(var(--foreground) / 0.08)",
                borderLeft: "1px solid hsl(var(--glass-border))",
              }}
            >
              <div className="flex justify-between items-center mb-10">
                <span className="font-display text-lg sm:text-xl font-semibold">
                  CosmetIQ<span className="text-accent">_</span>lab
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="btn-press p-1"
                >
                  <X size={22} />
                </button>
              </div>
              <nav className="flex flex-col gap-1 flex-1">
                {navLinks.map((link, i) => {
                  const isActive = activeSection === link.href;
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link)}
                      aria-current={isActive ? "page" : undefined}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className={`text-base font-medium px-4 py-3 rounded-xl transition-all duration-200 btn-press ${
                        isActive
                          ? "text-primary-foreground nav-active-mobile"
                          : "text-muted-foreground hover:text-emerald hover:bg-emerald/15"
                      }`}
                    >
                      {link.label}
                    </motion.a>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
