import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  { num: "01", title: "Concept Development", desc: "Define product vision and market positioning." },
  { num: "02", title: "Ingredient Selection", desc: "Source optimal actives and raw materials." },
  { num: "03", title: "Formulation & Testing", desc: "Develop and iterate prototype formulas." },
  { num: "04", title: "Stability & Compliance", desc: "Ensure shelf-life and regulatory adherence." },
  { num: "05", title: "Pilot Batches", desc: "Small-scale production for validation." },
  { num: "06", title: "Scale-Up & Launch", desc: "Full production support and market launch." },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="section-padding relative noise-overlay overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="bubble bubble-gold w-[260px] h-[260px] top-[5%] left-[15%] opacity-30" />
        <div className="bubble bubble-emerald w-[180px] h-[180px] bottom-[10%] right-[10%] opacity-25" />
      </div>

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-accent mb-3 sm:mb-4">How We Work</p>
          <h2 className="section-title">Our Process</h2>
          <p className="section-subtitle">
            A structured, scientific approach from ideation to market launch.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-border" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-4">
            {steps.map(({ num, title, desc }, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-center relative group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-full emerald-gradient flex items-center justify-center text-primary-foreground text-xs sm:text-sm font-semibold mb-3 sm:mb-4 relative z-10 icon-bubble">
                  {num}
                </div>
                <h3 className="font-display text-sm sm:text-base font-semibold text-foreground mb-1 sm:mb-2">{title}</h3>
                <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
