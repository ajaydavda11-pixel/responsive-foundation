import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "How long does formulation development take?", a: "Typical formulation projects range from 4–12 weeks depending on complexity, number of iterations, and regulatory requirements. We provide detailed timelines at project initiation." },
  { q: "Do you support regulatory compliance?", a: "Yes. We offer comprehensive regulatory guidance across major markets including EU, US (FDA), and ASEAN — covering ingredient restrictions, labeling, safety assessments, and documentation." },
  { q: "Can you help startups with limited budgets?", a: "Absolutely. We offer flexible engagement models tailored for startups, including phased development, minimum viable formulations, and cost-optimized ingredient selection." },
  { q: "Do you provide pilot batches?", a: "Yes. We support pilot batch manufacturing to validate formulations before full-scale production, ensuring quality and consistency." },
  { q: "What makes your approach different?", a: "We combine deep scientific expertise with a brand-centric approach — every formulation is designed not just for efficacy, but for market success, regulatory compliance, and consumer appeal." },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="section-padding relative noise-overlay overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="bubble bubble-gold w-[200px] h-[200px] top-[15%] right-[10%] opacity-25" />
      </div>

      <div className="section-container max-w-3xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-accent mb-3 sm:mb-4">Common Questions</p>
          <h2 className="section-title">FAQ</h2>
        </motion.div>

        <div className="space-y-2 sm:space-y-3">
          {faqs.map(({ q, a }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="glass-card overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="faq-btn-premium w-full flex items-center justify-between p-4 sm:p-6 text-left btn-press"
              >
                <span className="font-display text-sm sm:text-base font-medium text-foreground pr-4">{q}</span>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <ChevronDown size={18} className="text-muted-foreground flex-shrink-0 sm:w-5 sm:h-5" />
                </motion.div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="overflow-hidden"
                  >
                    <p className="px-4 sm:px-6 pb-4 sm:pb-6 text-xs sm:text-sm text-muted-foreground leading-relaxed">{a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
