import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Droplets, Scissors, Wind, Sparkles, Sun, Heart } from "lucide-react";

const services = [
  { icon: Droplets, title: "Skin Care", desc: "Serums, creams, gels, and treatment products with active optimization, stability, and regulatory support." },
  { icon: Scissors, title: "Hair Care", desc: "Shampoos, conditioners, masks, and scalp treatments crafted with performance-driven ingredients." },
  { icon: Wind, title: "Perfumes", desc: "Bespoke accords, longevity optimization, projection tuning, and distinctive fragrance identity." },
  { icon: Sparkles, title: "Cleansing Products", desc: "Face wash, micellar water, body cleansers designed for efficacy and gentle performance." },
  { icon: Sun, title: "Sun Care", desc: "SPF creams, mineral sunscreens, and photostability testing for complete solar protection." },
  { icon: Heart, title: "Lip Care", desc: "Balms, glosses, and tinted treatments with premium textures and nourishing formulations." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="section-padding relative noise-overlay section-glow overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="bubble bubble-gold w-[280px] h-[280px] top-[8%] -left-[5%] opacity-35" />
        <div className="bubble bubble-emerald w-[200px] h-[200px] bottom-[5%] right-[8%] opacity-30" />
      </div>

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-accent mb-3 sm:mb-4">Our Expertise</p>
          <h2 className="section-title">Core Services</h2>
          <p className="section-subtitle">
            Comprehensive formulation consulting across all major cosmetic categories.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group glass-card p-6 sm:p-8 cursor-pointer"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-muted flex items-center justify-center mb-4 sm:mb-5 icon-bubble group-hover:bg-primary transition-colors duration-400">
                <Icon size={20} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">{title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4">{desc}</p>
              <span className="link-premium text-xs sm:text-sm font-medium text-primary">Learn More →</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
