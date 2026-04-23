import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import ProcessSection from "@/components/ProcessSection";
import IndustriesSection from "@/components/IndustriesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import RevealOnScroll from "@/components/RevealOnScroll";

const Index = () => (
  <>
    <Header />
    <HeroSection />
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
  </>
);

export default Index;

