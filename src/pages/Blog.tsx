import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { Calendar, Clock, ArrowRight, ArrowLeft, Search, Tag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const categories = ["All", "Skin Care", "Hair Care", "Formulation", "Sustainability", "Industry"];

const featured = {
  title: "The Science Behind Next-Gen Active Serums",
  excerpt:
    "Discover how advanced delivery systems and stabilized actives are reshaping the future of skincare formulation — from encapsulated retinoids to bio-fermented peptides.",
  category: "Formulation",
  date: "Apr 12, 2026",
  readTime: "8 min read",
  image:
    "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1600&q=80",
};

const posts = [
  {
    title: "Mastering Hyaluronic Acid: Molecular Weights Explained",
    excerpt: "How different molecular weights of HA penetrate the skin and why blending them matters.",
    category: "Skin Care",
    date: "Apr 08, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Sustainable Cosmetic Packaging: Trends for 2026",
    excerpt: "Refillable systems, mono-materials, and bio-based plastics defining the new packaging era.",
    category: "Sustainability",
    date: "Apr 02, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Scalp Microbiome: The New Frontier in Hair Care",
    excerpt: "Why prebiotics and postbiotics are becoming essential in modern shampoo formulations.",
    category: "Hair Care",
    date: "Mar 28, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Clean Beauty Regulations Across Global Markets",
    excerpt: "A practical guide to navigating EU, US, and APAC compliance for indie cosmetic brands.",
    category: "Industry",
    date: "Mar 21, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1631730486572-226d1f595b68?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Formulating with Vitamin C: Stability Solutions",
    excerpt: "From L-ascorbic acid to ethylated derivatives — choosing the right form for your serum.",
    category: "Formulation",
    date: "Mar 15, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Korean Glass Skin: The Formulator's Playbook",
    excerpt: "Layering humectants, occlusives, and light-reflecting actives for that signature dewy finish.",
    category: "Skin Care",
    date: "Mar 09, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80",
  },
];

const Blog = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-28 sm:pt-32 md:pt-40 pb-12 sm:pb-16 noise-overlay overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="bubble bubble-emerald w-[320px] h-[320px] top-[10%] -left-[5%] opacity-30" />
            <div className="bubble bubble-gold w-[260px] h-[260px] bottom-[5%] right-[5%] opacity-25" />
          </div>
          <div className="section-container relative z-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-6 sm:mb-8"
            >
              <ArrowLeft size={16} /> Back to Home
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center max-w-3xl mx-auto"
            >
              <p className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-accent mb-3 sm:mb-4">
                Insights & Stories
              </p>
              <h1 className="section-title">The CosmetIQ Journal</h1>
              <p className="section-subtitle">
                Formulation insights, market trends, and behind-the-scenes stories from our laboratory
                — written for founders, formulators, and beauty enthusiasts.
              </p>

              {/* Search */}
              <div className="mt-8 sm:mt-10 max-w-md mx-auto relative">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-12 pr-4 py-3 sm:py-3.5 rounded-full border bg-background/60 backdrop-blur text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  style={{ borderColor: "hsl(var(--border) / 0.5)" }}
                />
              </div>

              {/* Categories */}
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {categories.map((cat, i) => (
                  <button
                    key={cat}
                    className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 btn-press ${
                      i === 0
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "bg-background/60 text-muted-foreground border hover:text-primary hover:border-primary/40"
                    }`}
                    style={i !== 0 ? { borderColor: "hsl(var(--border) / 0.5)" } : undefined}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="pb-12 sm:pb-16">
          <div className="section-container">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="glass-card-elevated overflow-hidden grid md:grid-cols-2 gap-0 group cursor-pointer"
            >
              <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider bg-primary text-primary-foreground">
                  Featured
                </span>
              </div>
              <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="inline-flex items-center gap-1.5 text-accent font-medium">
                    <Tag size={12} /> {featured.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={12} /> {featured.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={12} /> {featured.readTime}
                  </span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-3 sm:mb-4 leading-tight group-hover:text-primary transition-colors">
                  {featured.title}
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-5 sm:mb-6">
                  {featured.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                  Read Article <ArrowRight size={16} />
                </span>
              </div>
            </motion.article>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="pb-16 sm:pb-24" ref={ref}>
          <div className="section-container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {posts.map((post, i) => (
                <motion.article
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="group glass-card overflow-hidden cursor-pointer flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/40"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-background/80 backdrop-blur text-primary border" style={{ borderColor: "hsl(var(--border) / 0.5)" }}>
                      {post.category}
                    </span>
                  </div>
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-[11px] text-muted-foreground mb-2.5">
                      <span className="inline-flex items-center gap-1">
                        <Calendar size={11} /> {post.date}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock size={11} /> {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-primary group-hover:gap-2.5 transition-all">
                      Read More <ArrowRight size={14} />
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="pb-20 sm:pb-28">
          <div className="section-container">
            <div className="glass-card-elevated p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className="bubble bubble-emerald w-[240px] h-[240px] -top-[20%] -right-[10%] opacity-25" />
                <div className="bubble bubble-gold w-[180px] h-[180px] -bottom-[20%] -left-[10%] opacity-20" />
              </div>
              <div className="relative z-10 max-w-2xl mx-auto">
                <p className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-accent mb-3">
                  Stay Inspired
                </p>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4">
                  Subscribe to The CosmetIQ Journal
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
                  Monthly insights on cosmetic formulation, industry trends, and exclusive lab stories.
                  No spam — unsubscribe anytime.
                </p>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                >
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="flex-1 px-4 py-3 rounded-full border bg-background/60 backdrop-blur text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                    style={{ borderColor: "hsl(var(--border) / 0.5)" }}
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold btn-press hover:opacity-90 transition-opacity whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Blog;
