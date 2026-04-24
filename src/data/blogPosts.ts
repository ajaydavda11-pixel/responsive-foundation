import blogActiveSerums from "@/assets/blog-active-serums.jpg";
import blogHyaluronicAcid from "@/assets/blog-hyaluronic-acid.jpg";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "next-gen-active-serums",
    title: "The Science Behind Next-Gen Active Serums",
    excerpt:
      "Advanced delivery systems and stabilized actives reshaping skincare formulation.",
    category: "Formulation",
    date: "Apr 12, 2026",
    readTime: "8 min",
    image: blogActiveSerums,
    author: "Dr. Elena Marchetti",
    content: [
      "Active serums have evolved far beyond simple aqueous solutions. Today's next-generation formulations rely on sophisticated delivery systems — liposomes, niosomes, and polymeric nanoparticles — that protect fragile actives until they reach their target in the skin.",
      "Encapsulated retinoids, for example, dramatically reduce irritation while improving photostability. Bio-fermented peptides offer a sustainable alternative to synthetic equivalents and often exhibit superior bioavailability.",
      "At CosmetIQ_lab, our R&D team focuses on three pillars: stability, penetration, and sensorial experience. The goal is not just efficacy on paper but a serum that performs measurably on the skin and feels luxurious to apply.",
      "In the coming years, expect to see more time-release actives, microbiome-friendly preservation, and AI-assisted formulation pairing — all converging to deliver smarter, gentler, more effective serums.",
    ],
  },
  {
    slug: "hyaluronic-acid-molecular-weights",
    title: "Mastering Hyaluronic Acid: Molecular Weights",
    excerpt:
      "How different molecular weights of HA penetrate the skin and why blending matters.",
    category: "Skin Care",
    date: "Apr 08, 2026",
    readTime: "6 min",
    image: blogHyaluronicAcid,
    author: "Dr. Marcus Chen",
    content: [
      "Hyaluronic acid is one of skincare's most beloved ingredients — but not all HA is created equal. Molecular weight dictates how deeply it penetrates and what kind of hydration it provides.",
      "High molecular weight HA (>1,000 kDa) sits on the surface, forming a moisture-locking film. Medium weight (100–1,000 kDa) provides plumping in the upper epidermis. Low molecular weight (<100 kDa) penetrates deeper, supporting longer-term hydration.",
      "The most effective serums blend multiple weights to deliver hydration at every layer simultaneously. This multi-weight approach is now standard in premium formulations.",
      "When formulating, also consider crosslinked HA for sustained release and sodium hyaluronate for improved stability. The right combination depends on the claim, the texture, and the target consumer.",
    ],
  },
];

export const getPostBySlug = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);
