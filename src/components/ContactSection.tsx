import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, Instagram } from "lucide-react";
import logoSvg from "@/assets/logo.svg";

const projectTypes = [
  "Skin Care Formulation", "Hair Care Development", "Perfume Creation",
  "Sun Care Products", "Cleansing Products", "Lip Care",
  "Full Product Line", "Regulatory Consultation", "Other",
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-padding bg-ivory-warm relative noise-overlay overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="bubble bubble-emerald w-[250px] h-[250px] top-[8%] left-[5%] opacity-30" />
        <div className="bubble bubble-gold w-[200px] h-[200px] bottom-[5%] right-[10%] opacity-25" />
      </div>

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-accent mb-3 sm:mb-4">Let's Connect</p>
          <h2 className="section-title">Start Your Project</h2>
          <p className="section-subtitle">
            Ready to transform your beauty vision? Get in touch with our team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-3 sm:space-y-4 lg:space-y-6"
          >
            <div className="flex justify-center pt-2 sm:pt-4 pb-1 sm:pb-2">
              {/* Single SVG, recolored per theme via currentColor — true opacity crossfade, zero layout shift */}
              <div
                className="relative w-[80px] sm:w-[110px] lg:w-[140px] aspect-square"
                aria-label="CosmetIQ_lab — Empowering Beautycare"
                role="img"
              >
                {/* Light mode: black logo */}
                <img
                  src={logoSvg}
                  alt=""
                  width={140}
                  height={140}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full text-foreground opacity-100 dark:opacity-0 transition-opacity duration-500 ease-out"
                  style={{ color: "hsl(var(--foreground))" }}
                />
                {/* Dark mode: gold logo with subtle glow */}
                <img
                  src={logoSvg}
                  alt=""
                  width={140}
                  height={140}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full opacity-0 dark:opacity-100 transition-opacity duration-500 ease-out"
                  style={{
                    color: "hsl(var(--accent))",
                    filter: "drop-shadow(0 0 18px hsl(var(--accent) / 0.35))",
                  }}
                />
              </div>
            </div>
            {[
              { icon: Phone, label: "Phone", value: "+91 8980176442" },
              { icon: Mail, label: "Email", value: "cosmetiq.labs@gmail.com" },
              { icon: Instagram, label: "Instagram", value: "cosmetiq.labs", href: "https://www.instagram.com/cosmetiq.labs?igsh=ZjhlY3ozcXF5MTE0&utm_source=ig_contact_invite" },
              { icon: MapPin, label: "Location", value: "Nashik, Maharastra, India." },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="glass-card p-4 sm:p-6 flex items-center gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-emerald-muted flex items-center justify-center flex-shrink-0 icon-bubble">
                  <Icon size={16} className="text-primary sm:w-[18px] sm:h-[18px]" />
                </div>
                <div>
                  <p className="text-[11px] sm:text-xs text-muted-foreground">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-medium text-foreground hover:text-primary transition-colors no-underline"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-xs sm:text-sm font-medium text-foreground">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-2 glass-card-elevated p-6 sm:p-8 md:p-10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5">
              {[
                { label: "Full Name", type: "text", placeholder: "Your name", required: true },
                { label: "Email", type: "email", placeholder: "you@company.com", required: true },
                { label: "Phone", type: "tel", placeholder: "+1 (555) 000-0000" },
                { label: "Company / Brand", type: "text", placeholder: "Your brand name" },
              ].map((field) => (
                <div key={field.label}>
                  <label className="block text-[11px] sm:text-xs font-medium text-muted-foreground mb-1.5 sm:mb-2">{field.label}</label>
                  <input
                    type={field.type}
                    required={field.required}
                    className="input-ios"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
            </div>
            <div className="mb-4 sm:mb-5">
              <label className="block text-[11px] sm:text-xs font-medium text-muted-foreground mb-1.5 sm:mb-2">Project Type</label>
              <select required className="input-ios appearance-none">
                <option value="">Select project type</option>
                {projectTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div className="mb-5 sm:mb-6">
              <label className="block text-[11px] sm:text-xs font-medium text-muted-foreground mb-1.5 sm:mb-2">Message</label>
              <textarea
                rows={4}
                className="input-ios resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="btn-premium w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full emerald-gradient text-primary-foreground font-medium text-sm sm:text-base"
            >
              {submitted ? "Thank you!" : (
                <>Schedule Consultation <Send size={16} /></>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
