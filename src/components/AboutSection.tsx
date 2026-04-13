import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FlaskConical, Globe, Lightbulb, Settings } from "lucide-react";

const differentiators = [
  { icon: FlaskConical, title: "Scientific Formulation", desc: "Precision-driven approach with deep ingredient science." },
  { icon: Globe, title: "Global Standards", desc: "Aligned with international regulatory frameworks." },
  { icon: Lightbulb, title: "Innovation-Focused", desc: "Cutting-edge actives and delivery systems." },
  { icon: Settings, title: "Customized Solutions", desc: "Tailored formulations for every brand vision." },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-padding bg-ivory-warm relative noise-overlay overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="bubble bubble-emerald w-[250px] h-[250px] top-[5%] right-[10%] opacity-40" />
        <div className="bubble bubble-gold w-[200px] h-[200px] bottom-[10%] left-[5%] opacity-35" />
      </div>

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20"
        >
          <p className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-accent mb-3 sm:mb-4">Who We Are</p>
          <h2 className="section-title">Precision. Safety. Innovation.</h2>
          <p className="section-subtitle">
            CosmetIQ_lab specializes in developing advanced cosmetic formulations with precision, safety, and innovation — from concept development and ingredient selection to stability guidance, claim support, and technical documentation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="glass-card p-6 sm:p-8"
          >
            <p className="text-xs sm:text-sm font-medium tracking-[0.15em] uppercase text-accent mb-2 sm:mb-3">Our Mission</p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              To empower beauty brands with scientifically-backed formulations that are safe, effective, and market-ready — helping transform visionary ideas into trusted products.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="glass-card p-6 sm:p-8"
          >
            <p className="text-xs sm:text-sm font-medium tracking-[0.15em] uppercase text-accent mb-2 sm:mb-3">Our Vision</p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              To be the global benchmark in cosmetic formulation consulting — where science meets beauty, and innovation meets responsibility.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {differentiators.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="glass-card p-4 sm:p-6 text-center group cursor-default"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-xl bg-emerald-muted flex items-center justify-center mb-3 sm:mb-4 icon-bubble">
                <Icon size={18} className="text-primary sm:w-[22px] sm:h-[22px]" />
              </div>
              <h3 className="font-display text-sm sm:text-lg font-semibold text-foreground mb-1 sm:mb-2">{title}</h3>
              <p className="text-[11px] sm:text-sm text-muted-foreground">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
