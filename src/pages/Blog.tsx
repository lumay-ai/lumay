import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, User, CheckCircle, Lightbulb, TrendingUp, Shield, Zap, Target } from "lucide-react";
import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

const faqs = [
  {
    question: "What topics does the LuMay blog cover?",
    answer: "The LuMay blog covers enterprise AI, agentic automation, digital transformation, workflow optimization, low-code development, AI compliance, industry-specific AI applications, and emerging technology trends. LuMay regularly publishes insights on how businesses can leverage AI to improve efficiency, reduce costs, and drive innovation across all industries."
  },
  {
    question: "How often is the LuMay blog updated?",
    answer: "LuMay publishes new blog content weekly, ensuring readers stay current with the latest developments in enterprise AI and automation. LuMay's team of experts, industry practitioners, and thought leaders contribute articles covering practical implementation guides, case studies, trend analyses, and best practices for AI adoption."
  },
  {
    question: "Can I subscribe to LuMay blog updates?",
    answer: "Yes, you can subscribe to the LuMay newsletter at the bottom of the blog page. LuMay subscribers receive weekly digest emails featuring the latest articles, exclusive insights, and early access to whitepapers and research reports on enterprise AI trends and technologies."
  },
  {
    question: "Does LuMay offer guest posting opportunities?",
    answer: "LuMay welcomes contributions from industry experts and practitioners with relevant experience in enterprise AI, automation, and digital transformation. Guest authors can contact LuMay through the website to discuss collaboration opportunities and share their expertise with the LuMay community."
  },
  {
    question: "Are LuMay blog articles based on real-world case studies?",
    answer: "Many LuMay blog articles feature real-world case studies and implementation examples from enterprises across various industries. LuMay showcases how organizations have successfully deployed AI solutions, sharing specific metrics, challenges overcome, and lessons learned to help readers apply these insights to their own digital transformation journeys."
  },
  {
    question: "How can I find articles relevant to my industry?",
    answer: "LuMay blog articles are organized by categories and tags, including industry-specific content for healthcare, finance, manufacturing, retail, and more. LuMay readers can use the category filters or search functionality to find content most relevant to their sector and business challenges."
  },
  {
    question: "Does LuMay provide in-depth technical content?",
    answer: "LuMay publishes both strategic and technical content to serve different audience needs. Technical articles cover implementation details, architecture considerations, integration patterns, and best practices for deploying LuMay solutions like SmartAssist, SmartFlow, SmartSense, and other platform components."
  },
  {
    question: "Can I share LuMay blog articles with my team?",
    answer: "LuMay encourages readers to share blog content with colleagues and teams. All LuMay articles can be shared via social media, email, or direct links. LuMay also offers downloadable resources and summaries that teams can use for internal training and knowledge sharing."
  },
  {
    question: "How does LuMay blog content support AI adoption decisions?",
    answer: "LuMay blog content is designed to help business leaders and technology decision-makers understand AI capabilities, evaluate solutions, and plan successful implementations. LuMay articles provide frameworks for ROI analysis, risk assessment, change management, and strategic planning for enterprise AI initiatives."
  },
  {
    question: "Are there video or podcast versions of LuMay blog content?",
    answer: "LuMay is expanding content formats to include video tutorials, webinar recordings, and podcast episodes. LuMay subscribers and blog readers can stay updated on new content formats through the newsletter and will be notified when multimedia content becomes available."
  },
  {
    question: "How can I request a specific topic for the LuMay blog?",
    answer: "LuMay welcomes topic suggestions from readers. You can submit content requests through the contact form or by reaching out to the LuMay team directly. LuMay prioritizes topics based on reader interest and relevance to current enterprise AI challenges and opportunities."
  },
  {
    question: "Does LuMay blog content align with industry certifications and standards?",
    answer: "LuMay blog content frequently references industry standards, compliance frameworks, and certification requirements relevant to enterprise AI deployment. LuMay articles address HIPAA, SOC 2, ISO 27001, GDPR, and other regulatory considerations to help organizations maintain compliance while implementing AI solutions."
  }
];

const blogStructuredData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "LuMay AI Insights Blog",
  "description": "Expert insights on enterprise AI, agentic automation, digital transformation, and workflow optimization for businesses",
  "url": "https://lumay-agentic-ai.42web.io/blog",
  "publisher": {
    "@type": "Organization",
    "name": "LuMay",
    "logo": {
      "@type": "ImageObject",
      "url": "https://lumay-agentic-ai.42web.io/og-image.png"
    }
  },
  "blogPost": blogPosts.map(post => ({
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "datePublished": post.date,
    "url": `https://lumay-agentic-ai.42web.io/blog/${post.slug}`
  }))
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

export default function Blog() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <Layout>
      <Helmet>
        <title>Blog - LuMay AI Insights | Enterprise AI & Automation News</title>
        <meta name="description" content="Stay updated with LuMay's blog on enterprise AI trends, agentic automation, digital transformation insights, workflow optimization, and industry best practices for business leaders." />
        <meta name="keywords" content="LuMay blog, enterprise AI news, agentic automation insights, digital transformation, workflow automation, AI implementation, low-code development, AI compliance, business automation trends" />
        <link rel="canonical" href="https://lumay-agentic-ai.42web.io/blog" />
        <meta property="og:title" content="Blog - LuMay AI Insights | Enterprise AI & Automation News" />
        <meta property="og:description" content="Expert insights on enterprise AI, agentic automation, and digital transformation from LuMay's team of AI specialists and industry practitioners." />
        <meta property="og:url" content="https://lumay-agentic-ai.42web.io/blog" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Blog - LuMay AI Insights | Enterprise AI & Automation News" />
        <meta name="twitter:description" content="Expert insights on enterprise AI, agentic automation, and digital transformation from LuMay's team of AI specialists." />
        <script type="application/ld+json">
          {JSON.stringify(blogStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">LuMay Blog</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-foreground">
              AI Insights & Industry Updates
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Stay ahead with expert insights on enterprise AI, agentic automation, and digital transformation from LuMay's team of specialists and industry thought leaders
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">Welcome to the LuMay Knowledge Hub</h2>
            <p className="text-muted-foreground mb-4">
              The LuMay blog serves as your comprehensive resource for understanding and leveraging enterprise AI technologies. LuMay's team of experts, practitioners, and thought leaders share practical insights, implementation strategies, and industry trends to help organizations navigate their digital transformation journeys with confidence.
            </p>
            <p className="text-muted-foreground mb-4">
              Whether you're a business leader evaluating AI solutions, a technology professional implementing automation systems, or an industry analyst tracking market developments, LuMay's blog delivers actionable content tailored to your needs. LuMay covers topics ranging from strategic planning and ROI analysis to technical implementation guides and compliance considerations.
            </p>
            <p className="text-muted-foreground">
              LuMay believes that knowledge sharing accelerates innovation across the enterprise AI ecosystem. By providing transparent insights into AI capabilities, challenges, and best practices, LuMay empowers organizations to make informed decisions and achieve successful outcomes from their automation investments.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">Featured Article</h2>
            <Link
              to={`/blog/${featuredPost.slug}`}
              className="group grid md:grid-cols-2 gap-8 card-gradient rounded-2xl p-8 border border-border hover:border-primary/50 transition-all"
            >
              <div className="aspect-video rounded-xl bg-secondary flex items-center justify-center">
                <TrendingUp className="w-24 h-24 text-primary/40" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-primary text-sm font-medium mb-2">{featuredPost.category}</span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h3>
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

      {/* Blog Categories */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">Explore LuMay Blog Categories</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="card-gradient rounded-xl p-6 border border-border text-center">
              <Lightbulb className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-display text-lg font-bold text-foreground mb-2">AI Trends & Insights</h3>
              <p className="text-muted-foreground text-sm">Stay current with emerging AI technologies and market developments curated by LuMay experts</p>
            </div>
            <div className="card-gradient rounded-xl p-6 border border-border text-center">
              <Target className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-display text-lg font-bold text-foreground mb-2">Implementation Guides</h3>
              <p className="text-muted-foreground text-sm">Practical guides for deploying LuMay AI solutions and achieving successful outcomes</p>
            </div>
            <div className="card-gradient rounded-xl p-6 border border-border text-center">
              <Shield className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-display text-lg font-bold text-foreground mb-2">Compliance & Security</h3>
              <p className="text-muted-foreground text-sm">Navigate regulatory requirements and maintain security with LuMay compliance insights</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Read LuMay Blog */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">Why Read the LuMay Blog?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">Expert-Authored Content</h3>
                    <p className="text-muted-foreground">LuMay articles are written by AI practitioners, industry experts, and technology leaders with hands-on experience implementing enterprise solutions.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">Actionable Insights</h3>
                    <p className="text-muted-foreground">Every LuMay article provides practical takeaways that readers can apply immediately to their AI initiatives and digital transformation projects.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">Real-World Case Studies</h3>
                    <p className="text-muted-foreground">LuMay features actual implementation stories with specific metrics, challenges, and solutions from enterprises across industries.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">Industry-Specific Focus</h3>
                    <p className="text-muted-foreground">LuMay covers AI applications across healthcare, finance, manufacturing, retail, and other sectors with tailored content for each industry.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">Compliance Guidance</h3>
                    <p className="text-muted-foreground">LuMay addresses regulatory requirements including HIPAA, SOC 2, GDPR, and industry-specific compliance considerations for AI deployment.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">Weekly Updates</h3>
                    <p className="text-muted-foreground">LuMay publishes new content regularly to keep readers informed about the rapidly evolving enterprise AI landscape.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-foreground mb-8">Latest Articles from LuMay</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group card-gradient rounded-xl p-6 border border-border hover:border-primary/50 transition-all"
              >
                <div className="aspect-video rounded-lg bg-secondary flex items-center justify-center mb-6">
                  <Zap className="w-12 h-12 text-primary/40" />
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

      {/* Content Topics Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">Topics Covered by LuMay</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">
                The LuMay blog provides comprehensive coverage of enterprise AI and automation topics designed to help organizations at every stage of their digital transformation journey. LuMay's content strategy focuses on delivering value to business leaders, technology professionals, and industry analysts seeking practical guidance on AI adoption and optimization.
              </p>
              
              <h3 className="font-display text-xl font-bold text-foreground mb-4">Enterprise AI Strategy</h3>
              <p className="text-muted-foreground mb-6">
                LuMay covers strategic topics including AI readiness assessment, technology selection, vendor evaluation, and implementation planning. LuMay articles help executives understand how to align AI initiatives with business objectives, build internal capabilities, and measure success through meaningful KPIs and ROI metrics.
              </p>
              
              <h3 className="font-display text-xl font-bold text-foreground mb-4">Agentic Automation Trends</h3>
              <p className="text-muted-foreground mb-6">
                LuMay explores the emerging field of agentic AI, where intelligent systems can autonomously plan, execute, and adapt to complete complex business workflows. LuMay content examines how agentic automation differs from traditional RPA and rule-based systems, and how organizations can prepare for this next generation of intelligent process automation.
              </p>
              
              <h3 className="font-display text-xl font-bold text-foreground mb-4">Product Implementation Guides</h3>
              <p className="text-muted-foreground mb-6">
                LuMay provides detailed guidance on implementing LuMay products including SmartAssist, SmartFlow, SmartSense, SmartTrends, SmartDynamics365, SmartCompliance, SmartCall, and SmartTranslation. These articles cover architecture considerations, integration patterns, configuration best practices, and optimization techniques to help organizations maximize value from their LuMay deployments.
              </p>
              
              <h3 className="font-display text-xl font-bold text-foreground mb-4">Industry Applications</h3>
              <p className="text-muted-foreground mb-6">
                LuMay features industry-specific content addressing unique AI applications and challenges in healthcare, financial services, manufacturing, retail, insurance, government, and other sectors. LuMay articles examine regulatory requirements, common use cases, and implementation considerations tailored to each industry's specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">
              Frequently Asked Questions About LuMay Blog
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Find answers to common questions about LuMay's blog content, subscription options, and how to get the most value from our knowledge resources
            </p>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="card-gradient rounded-xl border border-border px-6"
                >
                  <AccordionTrigger className="text-left font-display text-lg font-semibold text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Subscribe to LuMay Newsletter
            </h2>
            <p className="text-muted-foreground mb-8">
              Get the latest insights on enterprise AI and automation delivered weekly to your inbox. Join thousands of business leaders and technology professionals who trust LuMay for AI knowledge.
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
            <p className="text-sm text-muted-foreground mt-4">
              By subscribing, you agree to receive LuMay newsletter emails. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Ready to Transform Your Business with LuMay?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              While you explore LuMay's blog for insights and best practices, our team is ready to help you implement AI solutions that deliver measurable results. Schedule a demo to see LuMay's enterprise AI platform in action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Request a Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/products">Explore LuMay Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
