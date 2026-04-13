import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  { quote: "CosmetIQ_lab transformed our concept into a bestselling serum line. Their scientific rigor is unmatched.", author: "Sarah M.", role: "Founder, GlowVita Skincare" },
  { quote: "Their regulatory expertise saved us months of delays. A truly professional and innovative partner.", author: "James L.", role: "Director, PureForm Cosmetics" },
  { quote: "From fragrance development to stability testing, they delivered beyond our expectations every time.", author: "Aisha R.", role: "CEO, Maison Éclat" },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-ivory-warm relative noise-overlay overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="bubble bubble-gold w-[220px] h-[220px] top-[10%] left-[10%] opacity-30" />
        <div className="bubble bubble-emerald w-[180px] h-[180px] bottom-[8%] right-[5%] opacity-25" />
      </div>

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-accent mb-3 sm:mb-4">Trust & Credibility</p>
          <h2 className="section-title">What Our Clients Say</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map(({ quote, author, role }, i) => (
            <motion.div
              key={author}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="glass-card p-6 sm:p-8 group cursor-default"
            >
              <Quote size={20} className="text-accent mb-3 sm:mb-4 sm:w-6 sm:h-6" />
              <p className="text-sm sm:text-base text-foreground leading-relaxed mb-4 sm:mb-6 italic">{quote}</p>
              <div>
                <p className="font-display font-semibold text-sm sm:text-base text-foreground">{author}</p>
                <p className="text-[11px] sm:text-xs text-muted-foreground">{role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
