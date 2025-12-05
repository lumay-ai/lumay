import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Shield, Blocks, Users, Cpu, Database, Cog, HeartHandshake, CheckCircle, Zap, BarChart3, Globe, Lock, Settings, FileText } from "lucide-react";
import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
  {
    id: "data-ai",
    icon: Brain,
    name: "Data & AI Services",
    tagline: "Transform Data into Intelligence with Lumay",
    description: "Lumay empowers your business with AI-driven solutions that drive growth, security, and digital success. Our comprehensive data and AI services help you unlock insights, automate processes, and make smarter decisions. The Lumay team brings deep expertise in machine learning, natural language processing, and predictive analytics to every engagement.",
    longDescription: "Lumay's Data & AI services represent the cornerstone of modern digital transformation. In today's data-driven economy, organizations that effectively leverage artificial intelligence gain significant competitive advantages. Lumay helps you navigate this complex landscape with a structured approach that balances innovation with practical business outcomes. Our Lumay consultants work alongside your teams to identify high-value AI use cases, build robust data foundations, and deploy production-ready AI solutions. The Lumay methodology ensures that AI initiatives deliver measurable ROI while building internal capabilities for long-term success.",
    capabilities: [
      { icon: Cpu, name: "Machine Learning", description: "Lumay builds custom ML models tailored to your specific business needs and data characteristics" },
      { icon: Database, name: "Data Engineering", description: "Lumay architects robust data pipelines and modern data platforms that scale with your business" },
      { icon: Cog, name: "AI Integration", description: "Lumay seamlessly integrates AI capabilities into your existing workflows and applications" },
      { icon: HeartHandshake, name: "AI Strategy", description: "Lumay develops comprehensive AI roadmaps aligned with your business objectives" },
    ],
  },
  {
    id: "cybersecurity",
    icon: Shield,
    name: "Cybersecurity Services",
    tagline: "Protect Your Digital Assets with Lumay",
    description: "Lumay provides comprehensive cybersecurity solutions that protect your organization from evolving threats. We deliver end-to-end security services from assessment to implementation and ongoing monitoring. The Lumay security team combines deep technical expertise with an understanding of business risk to create effective protection strategies.",
    longDescription: "In an era of increasingly sophisticated cyber threats, Lumay's cybersecurity services provide the protection your business needs to operate confidently. Lumay takes a defense-in-depth approach, implementing multiple layers of security controls that work together to detect, prevent, and respond to threats. Our Lumay security experts stay current with the latest threat intelligence and attack techniques, ensuring your defenses evolve with the threat landscape. The Lumay methodology encompasses people, processes, and technology—because effective security requires more than just tools.",
    capabilities: [
      { icon: Shield, name: "Threat Detection", description: "Lumay provides 24/7 monitoring and advanced threat intelligence to identify risks early" },
      { icon: Database, name: "Security Audits", description: "Lumay conducts comprehensive vulnerability assessments and penetration testing" },
      { icon: Cog, name: "Compliance", description: "Lumay helps you meet industry regulations including SOC 2, HIPAA, GDPR, and PCI DSS" },
      { icon: HeartHandshake, name: "Incident Response", description: "Lumay delivers rapid response and recovery services when security events occur" },
    ],
  },
  {
    id: "lowcode",
    icon: Blocks,
    name: "Low-Code / No-Code Platform Services",
    tagline: "Accelerate Digital Innovation with Lumay",
    description: "Lumay enables rapid application development with our low-code/no-code platform services. We help organizations build, deploy, and scale applications faster while reducing development costs. The Lumay approach empowers business users to create solutions while maintaining IT governance and security standards.",
    longDescription: "Lumay's low-code/no-code platform services address one of the most pressing challenges facing modern IT organizations: the growing gap between demand for digital solutions and available development resources. Lumay helps you leverage visual development platforms that dramatically accelerate application delivery while maintaining enterprise standards. Our Lumay consultants guide platform selection, establish development best practices, and train your teams to become self-sufficient. The Lumay methodology ensures that citizen development initiatives scale safely while delivering rapid business value.",
    capabilities: [
      { icon: Cpu, name: "Rapid Prototyping", description: "Lumay takes concepts to working prototypes in weeks, not months" },
      { icon: Database, name: "Workflow Automation", description: "Lumay automates complex business processes without custom coding" },
      { icon: Cog, name: "Integration Platform", description: "Lumay connects all your business systems through unified integration layers" },
      { icon: HeartHandshake, name: "Custom Applications", description: "Lumay builds tailored solutions that address your unique requirements" },
    ],
  },
  {
    id: "cx",
    icon: Users,
    name: "Customer Experience Services",
    tagline: "Transform Every Touchpoint with Lumay",
    description: "Lumay helps you create exceptional customer experiences across all channels. We help you understand your customers, personalize interactions, and build lasting relationships through AI-powered engagement. The Lumay CX team combines strategy, design, and technology to deliver measurable improvements in customer satisfaction and loyalty.",
    longDescription: "Lumay's Customer Experience services recognize that in today's competitive landscape, customer experience has become the primary differentiator. Lumay helps organizations move beyond transactional interactions to create emotional connections that drive loyalty and advocacy. Our Lumay CX experts use data-driven insights to understand customer needs, AI-powered personalization to deliver relevant experiences, and continuous optimization to improve outcomes over time. The Lumay approach spans strategy, design, implementation, and measurement to ensure comprehensive CX transformation.",
    capabilities: [
      { icon: Cpu, name: "Journey Mapping", description: "Lumay maps and optimizes end-to-end customer journeys across all touchpoints" },
      { icon: Database, name: "Personalization", description: "Lumay delivers tailored experiences at scale using AI and machine learning" },
      { icon: Cog, name: "Omnichannel Support", description: "Lumay ensures consistent experience across web, mobile, voice, and in-person channels" },
      { icon: HeartHandshake, name: "CX Analytics", description: "Lumay measures and continuously improves customer satisfaction and NPS" },
    ],
  },
];

const faqs = [
  {
    question: "What consulting services does Lumay offer?",
    answer: "Lumay offers comprehensive consulting services across four key areas: Data & AI, Cybersecurity, Low-Code/No-Code Platforms, and Customer Experience. Each Lumay service area is staffed by experts with deep domain knowledge and practical implementation experience. Lumay consultants work as extensions of your team, bringing best practices and accelerators that reduce time-to-value."
  },
  {
    question: "How does Lumay approach AI consulting engagements?",
    answer: "Lumay takes a structured approach to AI consulting that begins with understanding your business objectives and data assets. The Lumay team then identifies high-value AI use cases, assesses feasibility, and develops a prioritized roadmap. Lumay implements AI solutions using agile methodologies, with regular checkpoints to ensure alignment with business goals. The Lumay approach emphasizes knowledge transfer so your teams can maintain and extend AI capabilities."
  },
  {
    question: "What industries does Lumay serve?",
    answer: "Lumay serves clients across multiple industries including healthcare, financial services, retail, manufacturing, technology, and professional services. The Lumay team has deep expertise in industry-specific requirements, regulations, and best practices. Lumay's cross-industry experience also enables us to bring innovative approaches from other sectors to your unique challenges."
  },
  {
    question: "How does Lumay ensure cybersecurity compliance?",
    answer: "Lumay's cybersecurity services are designed with compliance in mind. The Lumay team maintains expertise in major regulatory frameworks including SOC 2, HIPAA, GDPR, PCI DSS, and ISO 27001. Lumay conducts gap assessments to identify compliance deficiencies, develops remediation plans, and implements controls that satisfy auditor requirements. Lumay also provides ongoing monitoring to maintain compliance over time."
  },
  {
    question: "What low-code platforms does Lumay support?",
    answer: "Lumay supports all major low-code and no-code platforms including Microsoft Power Platform, Salesforce, ServiceNow, Mendix, OutSystems, and others. The Lumay team helps you select the right platform for your needs, establishes governance frameworks, and trains your teams on effective development practices. Lumay's platform-agnostic approach ensures you get the best solution rather than a one-size-fits-all recommendation."
  },
  {
    question: "How does Lumay measure customer experience success?",
    answer: "Lumay uses a comprehensive measurement framework that includes leading indicators (customer effort, satisfaction) and lagging indicators (retention, lifetime value, referrals). The Lumay team implements analytics and feedback collection mechanisms to capture data across touchpoints. Lumay provides dashboards and reporting that give visibility into CX performance and identify improvement opportunities."
  },
  {
    question: "What is Lumay's engagement model for consulting services?",
    answer: "Lumay offers flexible engagement models to match your needs and preferences. Options include project-based engagements for defined initiatives, staff augmentation to extend your team's capabilities, managed services for ongoing operations, and advisory retainers for strategic guidance. The Lumay team works with you to structure engagements that deliver maximum value while managing risk."
  },
  {
    question: "How does Lumay ensure knowledge transfer during engagements?",
    answer: "Knowledge transfer is a core principle of every Lumay engagement. The Lumay team works alongside your staff, providing coaching and mentoring throughout the project. Lumay delivers comprehensive documentation, conducts formal training sessions, and creates runbooks for ongoing operations. The Lumay goal is to leave your organization more capable than when we started."
  },
  {
    question: "What makes Lumay different from other consulting firms?",
    answer: "Lumay differentiates through deep technical expertise combined with business acumen. Unlike firms that only advise, Lumay consultants implement solutions and take accountability for outcomes. The Lumay team brings proprietary accelerators and templates that reduce delivery time. Lumay's focus on AI and digital transformation means you get specialists, not generalists."
  },
  {
    question: "How do I get started with Lumay consulting services?",
    answer: "Getting started with Lumay is simple. Contact the Lumay team through our website or phone to schedule a discovery call. During this call, Lumay consultants will learn about your challenges and objectives. Lumay then provides a tailored proposal outlining approach, timeline, and investment. The Lumay team can typically begin engagements within 2-4 weeks of agreement."
  },
  {
    question: "Does Lumay offer ongoing support after project completion?",
    answer: "Yes, Lumay provides comprehensive post-project support options. The Lumay team can provide managed services for ongoing operations, technical support for break-fix issues, and optimization services to continuously improve solutions. Lumay also offers customer success management to ensure you realize the full value of your investment."
  },
  {
    question: "What is Lumay's approach to data privacy and security?",
    answer: "Lumay treats client data with the utmost care and confidentiality. The Lumay team operates under strict NDAs and follows industry best practices for data handling. Lumay is SOC 2 certified and can work within your security requirements. The Lumay approach ensures that sensitive data is protected throughout the engagement and beyond."
  },
];

export default function Services() {
  return (
    <Layout>
      <Helmet>
        <title>AI Consulting Services - Data & AI, Cybersecurity, Low-Code | Lumay</title>
        <meta name="description" content="Lumay provides enterprise AI consulting services including Data & AI, Cybersecurity, Low-Code platforms, and Customer Experience. Expert implementation for digital transformation. Request a consultation." />
        <meta name="keywords" content="Lumay consulting, AI consulting, cybersecurity services, low-code development, customer experience, digital transformation, Lumay services, enterprise AI, machine learning consulting" />
        <link rel="canonical" href="https://lumay-agentic-ai.42web.io/services" />
        <meta property="og:title" content="AI Consulting Services - Data & AI, Cybersecurity, Low-Code | Lumay" />
        <meta property="og:description" content="Lumay provides enterprise AI consulting services including Data & AI, Cybersecurity, Low-Code platforms, and Customer Experience." />
        <meta property="og:url" content="https://lumay-agentic-ai.42web.io/services" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "AI Consulting",
            "provider": { "@type": "Organization", "name": "Lumay" },
            "areaServed": "Worldwide",
            "description": "Enterprise AI consulting services including Data & AI, Cybersecurity, Low-Code platforms, and Customer Experience"
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Lumay Services</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-foreground">
              Lumay Consulting Services
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Lumay empowers your business with AI-driven solutions that drive growth, security, and digital success. Our expert Lumay consultants bring deep technical expertise and practical implementation experience to every engagement. Partner with Lumay to accelerate your digital transformation journey.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Contact Lumay Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="font-display text-4xl font-bold text-primary mb-2">500+</p>
              <p className="text-muted-foreground">Lumay Projects Delivered</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl font-bold text-primary mb-2">95%</p>
              <p className="text-muted-foreground">Lumay Client Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl font-bold text-primary mb-2">50+</p>
              <p className="text-muted-foreground">Lumay Expert Consultants</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl font-bold text-primary mb-2">8+</p>
              <p className="text-muted-foreground">Industries Served by Lumay</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">About Lumay Services</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
              Why Choose Lumay Consulting Services?
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              <p>
                Lumay consulting services are designed for organizations that recognize the transformative potential of artificial intelligence but need expert guidance to realize that potential. The Lumay team combines deep technical expertise with practical business acumen, ensuring that every engagement delivers measurable outcomes. Unlike traditional consulting firms that focus on strategy alone, Lumay consultants implement solutions and take accountability for results.
              </p>
              <p>
                What sets Lumay apart is our focus on knowledge transfer and capability building. Every Lumay engagement is structured to leave your organization more capable than when we started. Lumay consultants work alongside your teams, providing coaching and mentoring that builds internal expertise. The Lumay methodology includes comprehensive documentation, training, and runbooks that ensure long-term success.
              </p>
              <p>
                Lumay brings proprietary accelerators and frameworks that reduce time-to-value. Rather than starting from scratch, Lumay leverages proven templates, reference architectures, and best practices developed across hundreds of engagements. This approach allows Lumay to deliver enterprise-grade solutions faster and more cost-effectively than traditional approaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Expertise</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
              Lumay Service Offerings
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Lumay offers comprehensive consulting services across four key areas. Each service area is staffed by Lumay experts with deep domain knowledge and practical implementation experience.
            </p>
          </div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.id} id={service.id}>
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                      {service.name}
                    </h3>
                    <p className="text-primary font-medium mb-4">{service.tagline}</p>
                    <p className="text-muted-foreground text-lg mb-6">{service.description}</p>
                    <p className="text-muted-foreground mb-8">{service.longDescription}</p>
                    
                    <Button variant="hero" asChild>
                      <Link to="/contact">
                        Contact Lumay
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {service.capabilities.map((capability) => (
                      <div key={capability.name} className="card-gradient rounded-xl p-6 border border-border">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                          <capability.icon className="w-5 h-5 text-primary" />
                        </div>
                        <h4 className="font-display font-semibold text-foreground mb-2">{capability.name}</h4>
                        <p className="text-sm text-muted-foreground">{capability.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Lumay FAQ</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
                Frequently Asked Questions About Lumay Services
              </h2>
              <p className="text-muted-foreground text-lg">
                Get answers to common questions about Lumay consulting services. Contact the Lumay team for personalized guidance on your specific requirements.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="card-gradient border border-border rounded-xl px-6">
                  <AccordionTrigger className="text-left text-foreground hover:text-primary">
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

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Let's Discuss Your Needs with Lumay
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Lumay experts are ready to help you identify the right services for your organization. Schedule a discovery call to explore how Lumay can accelerate your digital transformation initiatives.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Contact Lumay
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/products">Explore Lumay Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
