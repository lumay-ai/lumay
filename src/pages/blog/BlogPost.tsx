import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, User, Share2, Linkedin, Twitter } from "lucide-react";
import { Helmet } from "react-helmet-async";

interface BlogPostData {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  content: string[];
  tags: string[];
}

const blogPostsData: Record<string, BlogPostData> = {
  "future-of-enterprise-ai": {
    id: 1,
    slug: "future-of-enterprise-ai",
    title: "The Future of Enterprise AI: Trends to Watch in 2024",
    excerpt: "Explore the emerging trends shaping enterprise AI adoption, from agentic workflows to multimodal models.",
    category: "AI Trends",
    author: "Sarah Chen",
    authorRole: "Chief AI Officer at LuMay",
    date: "Nov 28, 2024",
    readTime: "8 min read",
    tags: ["Enterprise AI", "Agentic AI", "Digital Transformation", "LuMay"],
    content: [
      "The enterprise AI landscape is undergoing a fundamental transformation as organizations move beyond proof-of-concept deployments to mission-critical implementations. LuMay has been at the forefront of this evolution, helping enterprises navigate the complexities of AI adoption while maximizing business value and minimizing risk.",
      
      "One of the most significant trends LuMay observes is the rise of agentic AI systems. Unlike traditional AI that responds to specific queries or performs narrow tasks, agentic AI can autonomously plan, execute, and adapt to complete complex workflows. LuMay's SmartFlow platform exemplifies this approach, enabling organizations to deploy AI agents that can handle multi-step processes with minimal human intervention.",
      
      "Multimodal AI capabilities are becoming essential for enterprise applications. LuMay's SmartSense product leverages multimodal understanding to process text, images, and structured data simultaneously, enabling more sophisticated document processing and analysis workflows. Organizations using LuMay's multimodal capabilities report significant improvements in automation accuracy and scope.",
      
      "The integration of AI with existing enterprise systems remains a critical success factor. LuMay's SmartDynamics365 demonstrates how purpose-built AI integrations can transform established platforms like Microsoft Dynamics 365 without requiring costly custom development. LuMay customers have achieved dramatic reductions in quote generation time and improvements in sales productivity through seamless AI integration.",
      
      "Compliance and governance are receiving increased attention as AI deployments scale. LuMay's SmartCompliance platform addresses this need by providing built-in regulatory monitoring and automated compliance workflows. Organizations across healthcare, finance, and other regulated industries trust LuMay to maintain compliance while accelerating their AI initiatives.",
      
      "Looking ahead, LuMay anticipates continued growth in AI personalization, edge deployment, and industry-specific solutions. The companies that succeed with enterprise AI will be those that take a strategic approach to adoption, focusing on measurable business outcomes rather than technology for its own sake. LuMay remains committed to helping organizations achieve these outcomes through practical, scalable AI solutions."
    ]
  },
  "implementing-ai-assistants": {
    id: 2,
    slug: "implementing-ai-assistants",
    title: "How to Successfully Implement AI Assistants in Your Organization",
    excerpt: "A practical guide to deploying AI virtual assistants that deliver real business value.",
    category: "Implementation",
    author: "Michael Torres",
    authorRole: "Director of Customer Success at LuMay",
    date: "Nov 25, 2024",
    readTime: "6 min read",
    tags: ["AI Assistants", "Implementation", "SmartAssist", "LuMay"],
    content: [
      "Implementing AI virtual assistants successfully requires more than just deploying technology—it demands a thoughtful approach to change management, integration, and continuous improvement. LuMay has helped hundreds of organizations deploy AI assistants, and we've identified key patterns that separate successful implementations from those that struggle.",
      
      "Start with clear use cases and measurable objectives. LuMay recommends beginning with high-volume, repetitive tasks where AI assistants can demonstrate immediate value. Customer service inquiries, IT help desk requests, and HR policy questions are excellent starting points. LuMay's SmartAssist platform is designed specifically for these enterprise use cases, with pre-built knowledge bases and integration capabilities.",
      
      "Integration with existing systems is crucial for AI assistant success. LuMay's architecture enables seamless connections to CRM, ERP, ticketing systems, and knowledge management platforms. This integration ensures AI assistants have access to the information they need to provide accurate, contextual responses while maintaining data consistency across systems.",
      
      "Training and continuous learning separate good AI assistants from great ones. LuMay's platform includes sophisticated feedback loops that capture user interactions and use them to improve assistant performance over time. Organizations using LuMay typically see accuracy improvements of 15-20% within the first three months of deployment.",
      
      "Change management often determines implementation success more than technology choices. LuMay provides comprehensive onboarding programs that help organizations prepare their teams for AI-assisted workflows. This includes training for end users, administrators, and the subject matter experts who will help refine assistant knowledge.",
      
      "Measuring success requires tracking both operational metrics and user satisfaction. LuMay's analytics dashboard provides real-time visibility into assistant performance, including resolution rates, escalation patterns, and user feedback. These insights enable data-driven optimization and help organizations demonstrate ROI to stakeholders."
    ]
  },
  "low-code-revolution": {
    id: 3,
    slug: "low-code-revolution",
    title: "The Low-Code Revolution: Democratizing Software Development",
    excerpt: "How low-code platforms are enabling business users to build sophisticated applications.",
    category: "Low-Code",
    author: "Emily Watson",
    authorRole: "VP of Product at LuMay",
    date: "Nov 22, 2024",
    readTime: "5 min read",
    tags: ["Low-Code", "Citizen Development", "Automation", "LuMay"],
    content: [
      "The low-code movement is transforming how organizations approach application development, enabling business users to create sophisticated solutions without extensive programming expertise. LuMay embraces this philosophy through intuitive configuration interfaces that empower citizen developers while maintaining enterprise-grade security and governance.",
      
      "Traditional software development creates bottlenecks that slow innovation. LuMay's low-code approach allows business users to configure AI workflows, create automation rules, and customize assistant behaviors without writing code. This democratization accelerates time-to-value while freeing IT resources for more complex initiatives.",
      
      "LuMay's visual workflow designer exemplifies effective low-code design. Users can create sophisticated automation workflows by connecting pre-built components, configuring triggers and actions, and testing their creations in real-time. LuMay provides templates for common use cases that users can customize to their specific needs.",
      
      "Governance and security remain paramount in low-code environments. LuMay includes role-based access controls, approval workflows, and audit trails that ensure citizen-developed solutions meet enterprise standards. IT teams can establish guardrails while still enabling business innovation through LuMay's governance framework.",
      
      "The combination of low-code and AI creates particularly powerful opportunities. LuMay enables users to incorporate AI capabilities into their workflows without understanding the underlying technology. Natural language processing, document analysis, and predictive analytics become accessible building blocks for business solutions.",
      
      "Organizations adopting low-code approaches with LuMay report faster time-to-deployment, reduced development costs, and improved alignment between business needs and technology solutions. The key is finding the right balance between empowering users and maintaining appropriate controls."
    ]
  },
  "ai-compliance-healthcare": {
    id: 4,
    slug: "ai-compliance-healthcare",
    title: "AI and Compliance in Healthcare: Navigating HIPAA Requirements",
    excerpt: "Best practices for deploying AI solutions while maintaining healthcare regulatory compliance.",
    category: "Healthcare",
    author: "Dr. James Lee",
    authorRole: "Healthcare Solutions Director at LuMay",
    date: "Nov 18, 2024",
    readTime: "7 min read",
    tags: ["Healthcare AI", "HIPAA", "Compliance", "SmartCompliance", "LuMay"],
    content: [
      "Healthcare organizations face unique challenges when implementing AI solutions due to stringent regulatory requirements around patient data protection. LuMay has developed specialized capabilities to help healthcare providers leverage AI while maintaining full HIPAA compliance and protecting patient privacy.",
      
      "Understanding HIPAA requirements for AI is essential before beginning any implementation. LuMay's SmartCompliance platform includes built-in HIPAA compliance controls, including data encryption, access logging, and minimum necessary data principles. LuMay helps organizations document their AI systems as part of their HIPAA security risk assessments.",
      
      "Data handling practices must be carefully designed when AI processes protected health information (PHI). LuMay's architecture includes features like data anonymization, secure enclaves for PHI processing, and comprehensive audit trails. Healthcare organizations using LuMay can demonstrate compliance to auditors through detailed documentation and logging.",
      
      "Business associate agreements (BAAs) are required when third parties handle PHI. LuMay provides BAAs to healthcare customers and maintains SOC 2 Type II certification as evidence of our security practices. LuMay's compliance team works directly with healthcare organizations to ensure all contractual and regulatory requirements are met.",
      
      "AI applications in healthcare must consider both operational compliance and clinical safety. LuMay designs healthcare solutions with appropriate human oversight, clear escalation paths, and transparency about AI decision-making. LuMay recommends a phased approach to healthcare AI deployment, starting with administrative use cases before moving to clinical applications.",
      
      "The future of healthcare AI is bright, with opportunities to improve patient outcomes, reduce costs, and address workforce challenges. LuMay is committed to helping healthcare organizations realize these benefits while navigating the complex regulatory landscape responsibly."
    ]
  },
  "dynamics-365-ai-transformation": {
    id: 5,
    slug: "dynamics-365-ai-transformation",
    title: "Transforming Dynamics 365 with AI: A Case Study",
    excerpt: "How one enterprise reduced quote generation time by 85% using AI-powered automation.",
    category: "Case Study",
    author: "Lisa Park",
    authorRole: "Enterprise Solutions Architect at LuMay",
    date: "Nov 15, 2024",
    readTime: "10 min read",
    tags: ["Dynamics 365", "Case Study", "SmartDynamics365", "LuMay"],
    content: [
      "When a Fortune 500 manufacturing company approached LuMay about improving their Dynamics 365 workflows, they were struggling with quote generation that took sales representatives up to four hours per complex quote. Using LuMay's SmartDynamics365 solution, they reduced this to just 35 minutes—an 85% improvement that transformed their sales operations.",
      
      "The challenge was multifaceted. Sales representatives had to gather information from multiple systems, apply complex pricing rules, and ensure accuracy across hundreds of line items. LuMay worked with the organization to understand their existing processes and identify opportunities for AI-assisted automation without disrupting proven workflows.",
      
      "LuMay's approach focused on augmenting human capabilities rather than replacing them. SmartDynamics365 uses AI to pre-populate quote templates, suggest relevant products based on customer history, and automatically apply appropriate pricing rules. Sales representatives review and refine AI suggestions, maintaining control while eliminating tedious manual work.",
      
      "Integration was critical to success. LuMay's solution connects seamlessly with the existing Dynamics 365 environment, pulling data from CRM records, ERP systems, and product catalogs. LuMay's AI learns from each interaction, continuously improving its suggestions based on which recommendations sales representatives accept or modify.",
      
      "The business impact extended beyond time savings. Quote accuracy improved by 40%, reducing costly errors and rework. Sales representatives reported higher job satisfaction as they could focus on customer relationships rather than data entry. The organization estimated annual cost savings of $2.3 million from improved productivity.",
      
      "This case study demonstrates how LuMay helps organizations achieve transformational results from AI. The key is finding high-value use cases where AI can have immediate impact, then building on success to expand AI capabilities across the organization."
    ]
  },
  "ethical-ai-enterprise": {
    id: 6,
    slug: "ethical-ai-enterprise",
    title: "Building Ethical AI Systems for Enterprise",
    excerpt: "Principles and practices for developing responsible AI that serves both business and society.",
    category: "Ethics",
    author: "David Kim",
    authorRole: "Chief Ethics Officer at LuMay",
    date: "Nov 12, 2024",
    readTime: "6 min read",
    tags: ["AI Ethics", "Responsible AI", "Governance", "LuMay"],
    content: [
      "As AI becomes increasingly central to enterprise operations, organizations must grapple with ethical considerations that extend beyond technical performance. LuMay believes that ethical AI is not just a moral imperative—it's a business necessity that builds trust, reduces risk, and ensures sustainable AI adoption.",
      
      "Transparency is a foundational principle for ethical AI. LuMay designs systems that can explain their decisions and recommendations in terms that users understand. When AI influences important decisions, affected parties should understand why. LuMay's platforms include explainability features that surface the reasoning behind AI outputs.",
      
      "Fairness and bias prevention require ongoing attention throughout the AI lifecycle. LuMay employs diverse teams in AI development and uses specialized testing to identify potential biases before deployment. LuMay provides monitoring tools that help organizations detect and address bias that may emerge over time as data patterns change.",
      
      "Data privacy and consent are essential considerations for enterprise AI. LuMay implements privacy-by-design principles, minimizing data collection, protecting sensitive information, and giving users control over their data. LuMay helps organizations navigate complex privacy regulations while still enabling effective AI applications.",
      
      "Human oversight must be maintained for consequential AI decisions. LuMay designs systems with appropriate human-in-the-loop controls, ensuring that AI augments rather than replaces human judgment in critical situations. LuMay recommends establishing clear escalation procedures and defining which decisions require human approval.",
      
      "Building ethical AI requires commitment at all levels of the organization. LuMay works with customers to develop AI governance frameworks, establish ethics review processes, and train teams on responsible AI practices. Together, we can ensure that enterprise AI serves both business objectives and societal values."
    ]
  }
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPostsData[slug] : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Person",
      "name": post.author,
      "jobTitle": post.authorRole
    },
    "publisher": {
      "@type": "Organization",
      "name": "LuMay",
      "logo": {
        "@type": "ImageObject",
        "url": "https://lumay-agentic-ai.42web.io/og-image.png"
      }
    },
    "datePublished": post.date,
    "url": `https://lumay-agentic-ai.42web.io/blog/${post.slug}`,
    "keywords": post.tags.join(", ")
  };

  const relatedPosts = Object.values(blogPostsData)
    .filter(p => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <Layout>
      <Helmet>
        <title>{post.title} | LuMay Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags.join(", ")} />
        <link rel="canonical" href={`https://lumay-agentic-ai.42web.io/blog/${post.slug}`} />
        <meta property="og:title" content={`${post.title} | LuMay Blog`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={`https://lumay-agentic-ai.42web.io/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
        <meta name="twitter:title" content={`${post.title} | LuMay Blog`} />
        <meta name="twitter:description" content={post.excerpt} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Article Header */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to LuMay Blog
            </Link>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">{post.category}</span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-foreground">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">{post.excerpt}</p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-b border-border pb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <div>
                  <span className="text-foreground font-medium">{post.author}</span>
                  <span className="block text-xs">{post.authorRole}</span>
                </div>
              </div>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
              <span>{post.date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              {post.content.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </article>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-border">
              {post.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>

            {/* Share */}
            <div className="flex items-center gap-4 mt-8">
              <span className="text-muted-foreground flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                Share this article:
              </span>
              <a href={`https://twitter.com/intent/tweet?url=https://lumay-agentic-ai.42web.io/blog/${post.slug}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Twitter className="w-5 h-5" />
              </a>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=https://lumay-agentic-ai.42web.io/blog/${post.slug}`} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">More from LuMay Blog</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="group card-gradient rounded-xl p-6 border border-border hover:border-primary/50 transition-all"
                >
                  <span className="text-primary text-sm font-medium">{relatedPost.category}</span>
                  <h3 className="font-display text-lg font-bold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">{relatedPost.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Ready to See LuMay in Action?
            </h2>
            <p className="text-muted-foreground mb-8">
              Discover how LuMay's enterprise AI platform can transform your business operations with intelligent automation and agentic workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Request a Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/products">Explore Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
