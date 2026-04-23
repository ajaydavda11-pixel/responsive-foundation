import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import RevealOnScroll from "@/components/RevealOnScroll";

// Eagerly load above-the-fold (Header + Hero). Defer everything else so the
// initial bundle stays small and the hero paints faster.
const AboutSection = lazy(() => import("@/components/AboutSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const ProductsSection = lazy(() => import("@/components/ProductsSection"));
const ProcessSection = lazy(() => import("@/components/ProcessSection"));
const IndustriesSection = lazy(() => import("@/components/IndustriesSection"));
const WhyChooseSection = lazy(() => import("@/components/WhyChooseSection"));
const BlogSection = lazy(() => import("@/components/BlogSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));
const ScrollToTop = lazy(() => import("@/components/ScrollToTop"));

const SectionFallback = () => <div style={{ minHeight: 480 }} aria-hidden />;

const Index = () => (
  <>
    <Header />
    <HeroSection />
    <Suspense fallback={<SectionFallback />}>
      <RevealOnScroll><AboutSection /></RevealOnScroll>
      <RevealOnScroll><ServicesSection /></RevealOnScroll>
      <RevealOnScroll><ProductsSection /></RevealOnScroll>
      <RevealOnScroll><ProcessSection /></RevealOnScroll>
      <RevealOnScroll><IndustriesSection /></RevealOnScroll>
      <RevealOnScroll><WhyChooseSection /></RevealOnScroll>
      <RevealOnScroll><BlogSection /></RevealOnScroll>
      <RevealOnScroll><FAQSection /></RevealOnScroll>
      <RevealOnScroll><ContactSection /></RevealOnScroll>
      <Footer />
      <ScrollToTop />
    </Suspense>
  </>
);

export default Index;
