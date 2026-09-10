import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { blogPostsData } from "@/lib/blogPosts";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { organizationSchema } from "@/lib/seo";
import { getImageDimensions } from "@/lib/imageDimensions";

const SITE = "https://metawurks.com";

// Posts store dates as "14 July, 2026". article:published_time must be ISO 8601,
// and a malformed value is worse than no tag, so an unparseable date is dropped.
//
// Emitted date-only (YYYY-MM-DD), which ISO 8601 allows: the post records carry
// no time, and a full timestamp would shift the date by a day once serialised to
// UTC from a machine east of Greenwich.
function isoDate(date: string): string | undefined {
  const parsed = Date.parse(date.replace(",", ""));
  if (Number.isNaN(parsed)) return undefined;
  const d = new Date(parsed);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

// Without this, every post inherits the site-wide tags from app/layout.tsx and
// all 27 articles produce an identical, generic link preview.
export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const { id } = await params;
  const post = blogPostsData[id];

  if (!post) {
    return { title: "Post Not Found | MetaWurks" };
  }

  const url = `${SITE}/blog/${id}`;
  // Seven of the oldest posts have no image in the body. Better no og:image
  // than a wrong one - the title and description are still per-post.
  const images = post.image
    ? [{ url: post.image, width: 1200, height: 800, alt: post.title }]
    : undefined;

  return {
    title: `${post.title} | MetaWurks`,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: "MetaWurks",
      title: post.title,
      description: post.excerpt,
      publishedTime: isoDate(post.date),
      images,
    },
    twitter: {
      card: images ? "summary_large_image" : "summary",
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : undefined,
    },
  };
}

// 27 posts, all static content. No reason to render them on demand.
export function generateStaticParams() {
  return Object.keys(blogPostsData).map((id) => ({ id }));
}

// BlogPosting + BreadcrumbList for every post. One template change covers all of them.
//
// Every field is read from the post record or derived from it — nothing is invented.
// Two deliberate omissions:
//
//   author       Posts carry no author field (see the record type in lib/blogPosts.tsx),
//                and no byline is rendered on the page. The Organization is therefore the
//                author of record, which is accurate and verifiable. If a real Person
//                should be credited, replace this with a Person node — do not guess a name.
//   dateModified No modification date is stored anywhere. Emitting datePublished as
//                dateModified would assert a fact the repository does not hold, so the
//                property is omitted rather than fabricated.
//
// image is conditional: seven of the oldest posts have none, and a wrong image URL is
// worse than an absent property. Same rule generateMetadata already applies above.
function buildPostSchema(id: string, post: (typeof blogPostsData)[string]) {
  const url = `${SITE}/blog/${id}`;
  const published = isoDate(post.date);

  // Prefer an ImageObject carrying real intrinsic dimensions, read from the file at build
  // time. Falls back to a plain URL string when the file cannot be measured — still valid.
  // 30 of the 37 posts declare an image; the other 7 emit no image property at all.
  const dimensions = post.image ? getImageDimensions(post.image) : null;
  const imageNode = post.image
    ? dimensions
      ? {
          "@type": "ImageObject",
          url: `${SITE}${post.image}`,
          width: dimensions.width,
          height: dimensions.height,
        }
      : `${SITE}${post.image}`
    : null;

  return {
    "@context": "https://schema.org",
    "@graph": [
      // Emitted so the author/publisher @id references below resolve on this page.
      // Same @id as every other page, so consumers treat it as one entity, not many.
      // Once Organization moves into the root layout (Phase 1.2) this can be dropped.
      organizationSchema,
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.excerpt,
        url,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        ...(published ? { datePublished: published } : {}),
        ...(imageNode ? { image: imageNode } : {}),
        articleSection: post.category,
        author: { "@id": `${SITE}/#organization` },
        publisher: { "@id": `${SITE}/#organization` },
        isPartOf: { "@type": "Blog", "@id": `${SITE}/blog#blog`, name: "MetaWurks Blog" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  };
}

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = blogPostsData[id];

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <JsonLd data={buildPostSchema(id, post)} />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-8 overflow-hidden">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, hsl(270, 80%, 60%, 0.3), transparent 60%)",
            filter: "blur(100px)",
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 bg-gradient-to-r ${post.gradient} text-primary-foreground`}>
              {post.category}
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-tight mb-4">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-8 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <article className="max-w-4xl mx-auto prose prose-lg prose-invert">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              {post.content}
            </div>
          </article>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 relative overflow-hidden">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, hsl(270, 80%, 60%, 0.3), transparent 60%)",
            filter: "blur(100px)",
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center p-12 rounded-3xl backdrop-blur-xl bg-card/60 border border-border/50">
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight leading-tight mb-4">
              Subscribe now to Our Newsletter and get the Coupon code.
            </h2>
            <p className="text-muted-foreground mb-8">
              All your information is completely confidential
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-2xl bg-background border border-border/50 focus:outline-none focus:ring-2 focus:ring-ai-violet"
              />
              <button className="group relative inline-flex items-center justify-center gap-2 h-11 px-6 rounded-2xl text-sm font-semibold overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg">
                <div 
                  className="absolute inset-0 rounded-2xl transition-all duration-500"
                  style={{
                    background: 'linear-gradient(135deg, hsl(220, 70%, 55%), hsl(220, 70%, 50%), hsl(210, 50%, 70%))',
                  }}
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-ai-blue/0 via-ai-violet/0 to-ai-peach/0 group-hover:from-ai-blue/10 group-hover:via-ai-violet/10 group-hover:to-ai-peach/10 transition-all duration-300" />
                <span className="relative z-10 text-white font-semibold">
                  Sign Up
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

