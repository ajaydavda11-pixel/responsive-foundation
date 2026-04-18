import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const tabs = [
  { label: "Skin Care", items: ["Moisturizer", "Serums", "Brightening Gels", "Night Repair Treatments", "Eye Contour Creams", "Exfoliator", "Hydrating Mists", "Lotions", "Facial Care", "Cleanser & Face Wash"] },
  { label: "Active Serums", items: ["Vitamin C Serum", "Retinol Serum", "Hyaluronic Acid Serum", "Niacinamide Serum", "Peptide Complex", "AHA/BHA Serum", "Antioxidant Blend", "Anti Aging Serums", "Exfoliating Serums", "Hydrating Serums", "Skin Brightening Serums", "Anti Acne / Acne Control Serums", "Barrier Repair", "Peeling Solutions"] },
  { label: "BB & CC Creams", items: ["BB Cream with SPF", "CC Cream", "Tinted Moisturizer", "Light Coverage Foundation", "Multi-Benefit Base", "Make-up Primers", "Skin Gloss", "Korean Glass Skin"] },
  { label: "Sun Care", items: ["Various SPF Range", "Mineral Sunscreen", "After-Sun Gel", "Tinted Sun Protection", "Water-Resistant SPF", "Kids Sunscreen", "Hair Sunscreen"] },
  { label: "Hair Care", items: ["Anti-Dandruff Shampoo", "Keratin Conditioner", "Hair Repair Mask", "Scalp Treatment Oil", "Leave-On Conditioner", "Growth Serum", "Hair Growth Treatment", "Leave-on Cream", "Hair Serum", "Shampoo", "Conditioner"] },
  { label: "Perfume Types", items: ["Alcohol-Based Perfume", "Oil-Based Perfume", "Solid Perfume", "Body Mist", "Hair Perfume", "Attar / Ittar"] },
];

const ProductsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="products" className="section-padding bg-ivory-warm relative noise-overlay overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="bubble bubble-emerald w-[220px] h-[220px] top-[12%] right-[5%] opacity-30" />
        <div className="bubble bubble-gold w-[180px] h-[180px] bottom-[8%] left-[10%] opacity-25" />
      </div>

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-accent mb-3 sm:mb-4">Formulation Capabilities</p>
          <h2 className="section-title">Products & Expertise</h2>
          <p className="section-subtitle">
            An extensive portfolio of formulation types across every major cosmetic category.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex overflow-x-auto scrollbar-hide gap-1 mb-8 sm:mb-10 sm:flex-wrap sm:justify-center pb-2 sm:pb-0 -mx-5 px-5 sm:mx-0 sm:px-0 relative">
            {tabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(i)}
                className={`relative z-0 flex-shrink-0 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium btn-press cursor-pointer transition-all duration-300 ${
                  activeTab === i
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-primary-foreground"
                }`}
              >
                {activeTab === i && (
                  <motion.span
                    layoutId="product-tab-active"
                    className="absolute inset-0 rounded-full z-[-1]"
                    style={{
                      background: 'linear-gradient(135deg, hsl(var(--emerald)), hsl(var(--emerald-light)))',
                      boxShadow: '0 6px 22px hsl(155 40% 22% / 0.35)',
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {activeTab !== i && (
                  <span className="absolute inset-0 rounded-full z-[-1] opacity-0 hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(135deg, hsl(var(--emerald) / 0.8), hsl(var(--emerald-light) / 0.8))',
                      boxShadow: '0 4px 14px hsl(155 40% 22% / 0.2)',
                    }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="glass-card p-6 sm:p-8 md:p-10"
            >
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6">{tabs[activeTab].label}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                {tabs[activeTab].items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 p-3 rounded-xl border btn-press cursor-default transition-all duration-300 hover:shadow-sm"
                    style={{
                      background: 'hsl(var(--background) / 0.5)',
                      borderColor: 'hsl(var(--border) / 0.3)',
                    }}
                  >
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
