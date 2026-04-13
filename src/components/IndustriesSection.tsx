import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Rocket, Building, Factory, Stethoscope, Crown, Package } from "lucide-react";

const industries = [
  { icon: Rocket, title: "Beauty Startups", desc: "Turning fresh ideas into market-ready brands." },
  { icon: Building, title: "Cosmetic Brands", desc: "R&D support for established product lines." },
  { icon: Factory, title: "Private Label Manufacturers", desc: "White-label formulation development." },
  { icon: Stethoscope, title: "Dermatology Brands", desc: "Clinically-oriented skincare solutions." },
  { icon: Crown, title: "Luxury Fragrance Houses", desc: "Bespoke scent creation and refinement." },
  { icon: Package, title: "Personal Care Companies", desc: "Mass-market and premium personal care." },
];

const IndustriesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="industries" className="section-padding bg-ivory-warm relative noise-overlay overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="bubble bubble-gold w-[240px] h-[240px] bottom-[5%] right-[8%] opacity-30" />
        <div className="bubble bubble-emerald w-[180px] h-[180px] top-[10%] left-[5%] opacity-25" />
      </div>

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-accent mb-3 sm:mb-4">Who We Serve</p>
          <h2 className="section-title">Industries & Clients</h2>
          <p className="section-subtitle">
            Partnering with diverse players across the global beauty ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {industries.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="glass-card p-5 sm:p-6 flex items-start gap-3 sm:gap-4 group cursor-default"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-emerald-muted flex items-center justify-center flex-shrink-0 icon-bubble">
                <Icon size={18} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mb-1">{title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
