import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FlaskConical, Shield, Target, Award, Globe, Factory, Package, Calendar } from "lucide-react";

const strengths = [
  { icon: FlaskConical, title: "Advanced R&D Expertise", desc: "Deep scientific knowledge across cosmetic chemistry." },
  { icon: Target, title: "Customized Formulations", desc: "Tailored to your brand DNA and market requirements." },
  { icon: Shield, title: "Regulatory Guidance", desc: "Navigate global compliance with confidence." },
  { icon: Award, title: "Market-Ready Outcomes", desc: "Production-ready formulas, not just lab experiments." },
  { icon: Globe, title: "Global Standards", desc: "Formulations aligned with international quality benchmarks." },
];

const stats = [
  { icon: Factory, value: "900+", label: "Production" },
  { icon: Package, value: "100+", label: "Formulations Developed" },
  { icon: Calendar, value: "5+ Years", label: "Industry Experience" },
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding relative noise-overlay section-glow overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="bubble bubble-gold w-[300px] h-[300px] top-[15%] right-[5%] opacity-30" />
        <div className="bubble bubble-emerald w-[200px] h-[200px] bottom-[15%] left-[8%] opacity-25" />
      </div>

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-accent mb-3 sm:mb-4">Our Advantage</p>
          <h2 className="section-title">Why Choose CosmetIQ_lab</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20">
          {strengths.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center p-4 sm:p-6 group cursor-default"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-full bg-emerald-muted flex items-center justify-center mb-3 sm:mb-4 icon-bubble">
                <Icon size={18} className="text-primary sm:w-5 sm:h-5" />
              </div>
              <h3 className="font-display text-xs sm:text-base font-semibold text-foreground mb-1 sm:mb-2">{title}</h3>
              <p className="text-[10px] sm:text-xs text-muted-foreground">{desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="glass-card-elevated p-8 sm:p-10 md:p-14"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-emerald-muted flex items-center justify-center mb-3 sm:mb-4 icon-bubble">
                  <Icon size={22} className="text-primary" />
                </div>
                <p className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-primary">{value}</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
