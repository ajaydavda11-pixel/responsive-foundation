import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Tag, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { getPostBySlug, blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [slug]);

  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts.filter((p) => p.slug !== post.slug);

  return (
    <>
      <Header />
      <main>
        <article className="relative pt-28 sm:pt-32 md:pt-40 pb-16 sm:pb-24 noise-overlay overflow-hidden">
          <div className="section-container relative z-10 max-w-3xl">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-6 sm:mb-8"
            >
              <ArrowLeft size={16} /> Back to Blog
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-4">
                <span className="inline-flex items-center gap-1.5 text-accent font-medium">
                  <Tag size={12} /> {post.category}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={12} /> {post.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={12} /> {post.readTime}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <User size={12} /> {post.author}
                </span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-foreground mb-6">
                {post.title}
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
                {post.excerpt}
              </p>

              <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/9]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-5 text-base sm:text-lg leading-relaxed text-foreground/90">
                {post.content.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </motion.div>

            {related.length > 0 && (
              <section className="mt-16 sm:mt-20 pt-10 sm:pt-12 border-t border-border/50">
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-6 sm:mb-8">
                  Related articles
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  {related.map((rp) => (
                    <Link
                      key={rp.slug}
                      to={`/blog/${rp.slug}`}
                      className="group block rounded-2xl overflow-hidden border border-border/50 bg-card/40 hover:border-accent/50 transition-all duration-300"
                    >
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={rp.image}
                          alt={rp.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4 sm:p-5">
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent mb-2">
                          <Tag size={12} /> {rp.category}
                        </span>
                        <h3 className="font-display text-base sm:text-lg font-semibold text-foreground group-hover:text-accent transition-colors leading-snug">
                          {rp.title}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </article>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default BlogPost;
