import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const previews = blogPosts.slice(0, 2);

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
          className="mb-12"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">Insights</span>
          <h2 className="section-title mt-3">From Our Blog</h2>
          <p className="section-subtitle mt-4 max-w-2xl">
            Research, formulation insights, and industry trends from the CosmetIQ_lab team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {previews.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-emerald/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={post.image}
                    alt={`${post.title} — ${post.category} article cover`}
                    loading="lazy"
                    onError={(e) => {
                      const img = e.currentTarget;
                      img.src =
                        "https://images.unsplash.com/photo-1522335789203-aaa3aad24a55?auto=format&fit=crop&w=1600&q=80";
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
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

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex justify-center mt-8"
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-emerald hover:text-emerald-light transition-colors btn-press"
          >
            View all articles <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
