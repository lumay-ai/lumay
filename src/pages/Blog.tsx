import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, User } from "lucide-react";
import { Helmet } from "react-helmet-async";

const blogPosts = [
  {
    id: 1,
    slug: "future-of-enterprise-ai",
    title: "The Future of Enterprise AI: Trends to Watch in 2024",
    excerpt: "Explore the emerging trends shaping enterprise AI adoption, from agentic workflows to multimodal models.",
    category: "AI Trends",
    author: "Sarah Chen",
    date: "Nov 28, 2024",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 2,
    slug: "implementing-ai-assistants",
    title: "How to Successfully Implement AI Assistants in Your Organization",
    excerpt: "A practical guide to deploying AI virtual assistants that deliver real business value.",
    category: "Implementation",
    author: "Michael Torres",
    date: "Nov 25, 2024",
    readTime: "6 min read",
  },
  {
    id: 3,
    slug: "low-code-revolution",
    title: "The Low-Code Revolution: Democratizing Software Development",
    excerpt: "How low-code platforms are enabling business users to build sophisticated applications.",
    category: "Low-Code",
    author: "Emily Watson",
    date: "Nov 22, 2024",
    readTime: "5 min read",
  },
  {
    id: 4,
    slug: "ai-compliance-healthcare",
    title: "AI and Compliance in Healthcare: Navigating HIPAA Requirements",
    excerpt: "Best practices for deploying AI solutions while maintaining healthcare regulatory compliance.",
    category: "Healthcare",
    author: "Dr. James Lee",
    date: "Nov 18, 2024",
    readTime: "7 min read",
  },
  {
    id: 5,
    slug: "dynamics-365-ai-transformation",
    title: "Transforming Dynamics 365 with AI: A Case Study",
    excerpt: "How one enterprise reduced quote generation time by 85% using AI-powered automation.",
    category: "Case Study",
    author: "Lisa Park",
    date: "Nov 15, 2024",
    readTime: "10 min read",
  },
  {
    id: 6,
    slug: "ethical-ai-enterprise",
    title: "Building Ethical AI Systems for Enterprise",
    excerpt: "Principles and practices for developing responsible AI that serves both business and society.",
    category: "Ethics",
    author: "David Kim",
    date: "Nov 12, 2024",
    readTime: "6 min read",
  },
];

export default function Blog() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <Layout>
      <Helmet>
        <title>Blog - LuMay AI Insights & Industry News</title>
        <meta name="description" content="Stay updated with LuMay's blog on AI trends, enterprise automation, digital transformation insights, and industry best practices." />
        <meta name="keywords" content="AI blog, enterprise AI news, digital transformation, automation insights, LuMay blog" />
        <link rel="canonical" href="https://lumay.ai/blog" />
      </Helmet>

      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Blog</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-foreground">
              Insights & Updates
            </h1>
            <p className="text-lg text-muted-foreground">
              Stay ahead with the latest in AI, automation, and digital transformation
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to={`/blog/${featuredPost.slug}`}
              className="group grid md:grid-cols-2 gap-8 card-gradient rounded-2xl p-8 border border-border hover:border-primary/50 transition-all"
            >
              <div className="aspect-video rounded-xl bg-secondary flex items-center justify-center">
                <span className="text-6xl">📊</span>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-primary text-sm font-medium mb-2">{featuredPost.category}</span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group card-gradient rounded-xl p-6 border border-border hover:border-primary/50 transition-all"
              >
                <div className="aspect-video rounded-lg bg-secondary flex items-center justify-center mb-6">
                  <span className="text-4xl">📝</span>
                </div>
                <span className="text-primary text-sm font-medium">{post.category}</span>
                <h3 className="font-display text-xl font-bold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Subscribe to our newsletter
            </h2>
            <p className="text-muted-foreground mb-8">
              Get the latest insights on AI and automation delivered to your inbox
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12 rounded-lg border border-input bg-background px-4 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                required
              />
              <Button variant="hero" size="lg" type="submit">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
