import { motion } from "framer-motion";
import { ArrowRight, FlaskConical, ShieldCheck, Rocket } from "lucide-react";
import heroImg from "@/assets/hero-lab.jpg";

const badges = [
  { icon: FlaskConical, label: "Research-Driven" },
  { icon: ShieldCheck, label: "Regulatory-Aware" },
  { icon: Rocket, label: "Market-Ready Solutions" },
];

const HeroSection = () => (
  <section id="home" className="relative min-h-[100svh] flex items-center section-padding pt-24 sm:pt-28 md:pt-32 noise-overlay overflow-hidden">
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div className="bubble bubble-gold w-[400px] h-[400px] -top-[10%] -right-[10%] opacity-50" />
      <div className="bubble bubble-emerald w-[300px] h-[300px] bottom-[5%] -left-[8%] opacity-40" />
      <div className="bubble bubble-ivory w-[250px] h-[250px] top-[40%] right-[30%] opacity-30" />
    </div>

    <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-ivory-warm pointer-events-none" />

    <div className="section-container w-full relative z-10">
      <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4 sm:mb-6">
            Empowering Beautycare
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.08] text-balance text-shadow-hero text-gradient-brand">
            Advanced Cosmetic Formulation Consulting
          </h1>
          <p className="mt-3 sm:mt-4 font-display text-lg sm:text-xl md:text-2xl text-muted-foreground font-light italic">
            From Concept to Market-Ready Innovation
          </p>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg">
            Scientific expertise to transform your beauty ideas into safe, effective, high-performance products.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#contact"
              className="btn-premium inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full emerald-gradient text-primary-foreground font-medium text-sm sm:text-base whitespace-nowrap"
            >
              Start Your Project <ArrowRight size={18} />
            </a>
            <a
              href="#services"
              className="btn-outline-premium inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full border border-border text-foreground font-medium text-sm sm:text-base btn-press whitespace-nowrap"
            >
              View Services
            </a>
          </div>
          <div className="mt-8 sm:mt-12 flex flex-wrap gap-4 sm:gap-6">
            {badges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-muted flex items-center justify-center icon-bubble">
                  <Icon size={14} className="text-primary sm:w-4 sm:h-4" />
                </div>
                {label}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative"
        >
          <div className="relative rounded-[24px] overflow-hidden animate-float img-premium">
            <img
              src={heroImg}
              alt="CosmetIQ_lab luxury cosmetic laboratory"
              className="w-full h-auto rounded-[24px]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent rounded-[24px]" />
          </div>
          <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 glass-card-elevated p-4 sm:p-6 max-w-[200px] sm:max-w-xs">
            <p className="text-[10px] sm:text-xs font-medium tracking-[0.15em] uppercase text-accent mb-1">Trusted Globally</p>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Premium formulation consulting for leading beauty brands worldwide.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
