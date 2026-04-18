import { Mail, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer
    className="relative overflow-hidden border-t border-border"
    style={{ background: "hsl(var(--foreground))", color: "hsl(var(--background))" }}
  >
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

    <div className="section-container px-5 sm:px-6 md:px-8 py-5 sm:py-4 relative z-10">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
        {/* Logo */}
        <Link
          to="/"
          aria-label="CosmetIQ_lab home"
          className="font-display text-base sm:text-lg font-semibold tracking-tight order-1 sm:order-1 hover:opacity-80 transition-opacity"
        >
          CosmetIQ<span className="text-accent">_</span>lab
        </Link>

        {/* Copyright (center on desktop) */}
        <p className="text-[10px] sm:text-xs opacity-40 order-3 sm:order-2 text-center">
          © {new Date().getFullYear()} CosmetIQ_lab. All rights reserved.
        </p>

        {/* Design & Manage By */}
        <div className="flex flex-col items-center sm:items-end gap-0.5 order-2 sm:order-3">
          <p className="text-[10px] sm:text-xs opacity-60">Design & Manage By</p>
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-xs sm:text-sm font-semibold text-accent">EPIVOR Studio</span>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <a
                href="mailto:epivorstudio@gmail.com"
                aria-label="Email EPIVOR Studio"
                className="social-icon opacity-50 hover:opacity-100 transition-opacity"
              >
                <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </a>
              <a
                href="https://www.instagram.com/epivor_studio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="EPIVOR Studio Instagram"
                className="social-icon opacity-50 hover:opacity-100 transition-opacity"
              >
                <Instagram className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
