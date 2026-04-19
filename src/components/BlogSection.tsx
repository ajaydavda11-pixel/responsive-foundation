import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const previews = [
  {
    title: "The Science Behind Next-Gen Active Serums",
    excerpt: "Advanced delivery systems and stabilized actives reshaping skincare formulation.",
    category: "Formulation",
    date: "Apr 12, 2026",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Mastering Hyaluronic Acid: Molecular Weights",
    excerpt: "How different molecular weights of HA penetrate the skin and why blending matters.",
    category: "Skin Care",
    date: "Apr 08, 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Sustainable Cosmetic Packaging: 2026 Trends",
    excerpt: "Refillable systems, mono-materials, and bio-based plastics defining a new era.",
    category: "Sustainability",
    date: "Apr 02, 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=80",
  },
];

const BlogSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="section-padding relative noise-overlay overflow-hidden">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">Insights</span>
            <h2 className="section-title mt-3">From Our Blog</h2>
            <p className="section-subtitle mt-4 max-w-2xl">
              Research, formulation insights, and industry trends from the CosmetIQ_lab team.
            </p>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-emerald hover:text-emerald-light transition-colors btn-press"
          >
            View all articles <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previews.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-emerald/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Link to="/blog" className="block">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[11px] uppercase tracking-wider text-accent font-medium">
                    {post.category}
                  </span>
                  <h3 className="font-display text-lg font-semibold mt-2 text-foreground group-hover:text-emerald transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><Clock size={12} /> {post.readTime}</span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
