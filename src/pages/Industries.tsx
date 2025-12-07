import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Heart, Wallet, ShoppingCart, Leaf, Factory, Plane, GraduationCap, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const industriesStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Industries Served by LuMay AI",
  "description": "LuMay provides enterprise AI solutions across Healthcare, Finance, Manufacturing, Retail, Travel, Education, and ESG industries",
  "url": "https://lumay-agentic-ai.42web.io/industries",
  "numberOfItems": 8,
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Dynamics 365 AI" },
    { "@type": "ListItem", "position": 2, "name": "Health & Life Sciences" },
    { "@type": "ListItem", "position": 3, "name": "Finance" },
    { "@type": "ListItem", "position": 4, "name": "eCommerce" },
    { "@type": "ListItem", "position": 5, "name": "ESG & Sustainability" },
    { "@type": "ListItem", "position": 6, "name": "Manufacturing" },
    { "@type": "ListItem", "position": 7, "name": "Travel & Hospitality" },
    { "@type": "ListItem", "position": 8, "name": "Education" }
  ]
};

const industries = [
  {
    id: "dynamics365",
    icon: Building2,
    name: "Dynamics 365 AI",
    featured: true,
    tagline: "Transform Microsoft Dynamics 365 with Lumay AI",
    description: "Lumay transforms your Microsoft Dynamics 365 with CRM Copilot and AI automation. Reduce quote time by 85% with Lumay D365 AI agents. Our Lumay solutions seamlessly integrate with your existing D365 environment to supercharge productivity and drive revenue growth.",
    longDescription: "Lumay's Dynamics 365 AI solutions represent the cutting edge of enterprise CRM enhancement. The Lumay platform integrates directly with your Microsoft ecosystem, leveraging AI to automate routine tasks, provide intelligent insights, and accelerate sales cycles. Lumay's D365 Copilot capabilities enable sales teams to generate quotes, update records, and access customer intelligence through natural language conversations. Organizations using Lumay D365 solutions report dramatic improvements in productivity and customer satisfaction.",
    benefits: ["85% faster quote generation with Lumay", "Lumay CRM Copilot integration", "Automated workflows by Lumay", "Enhanced customer insights via Lumay AI"],
  },
  {
    id: "healthcare",
    icon: Heart,
    name: "Health & Life Sciences",
    tagline: "AI-Powered Healthcare Solutions by Lumay",
    description: "Lumay enhances healthcare efficiency and compliance with AI-powered solutions that simplify operations and improve patient experiences. From clinical workflows to administrative processes, Lumay helps healthcare organizations deliver better care while managing costs.",
    longDescription: "Lumay's healthcare AI solutions address the unique challenges facing health and life sciences organizations. The Lumay platform supports HIPAA compliance while enabling powerful AI capabilities for clinical documentation, patient engagement, and operational optimization. Lumay understands that healthcare data is sensitive and complex, which is why our solutions are designed with privacy and security at their core. Lumay helps healthcare organizations improve outcomes while reducing administrative burden.",
    benefits: ["HIPAA-compliant Lumay solutions", "Clinical workflow automation by Lumay", "Lumay patient engagement tools", "Regulatory compliance with Lumay"],
  },
  {
    id: "finance",
    icon: Wallet,
    name: "Finance",
    tagline: "Intelligent Financial Services by Lumay",
    description: "Lumay boosts compliance and agility in financial services with AI-driven insights, workflow automation, and personalized customer solutions. Navigate complex regulations while delivering exceptional customer experiences with Lumay AI.",
    longDescription: "Lumay's financial services solutions help banks, insurance companies, and investment firms leverage AI for competitive advantage. The Lumay platform supports fraud detection, risk assessment, regulatory compliance, and customer personalization. Lumay understands the strict security and compliance requirements of financial services, designing solutions that meet regulatory scrutiny while delivering business value. Lumay helps financial institutions innovate responsibly.",
    benefits: ["Fraud detection & prevention by Lumay", "Regulatory compliance with Lumay AI", "Lumay risk assessment automation", "Customer personalization via Lumay"],
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    name: "eCommerce",
    tagline: "AI-Driven Retail Excellence by Lumay",
    description: "Lumay accelerates growth with AI solutions that personalize shopping, predict behavior, and optimize the end-to-end customer journey. Turn browsers into buyers with Lumay's intelligent recommendations and seamless experiences.",
    longDescription: "Lumay's eCommerce AI solutions help retailers and D2C brands create exceptional shopping experiences. The Lumay platform powers personalized product recommendations, dynamic pricing, inventory optimization, and customer journey analytics. Lumay's AI understands shopper behavior patterns to predict demand and maximize conversion rates. Lumay helps eCommerce businesses compete effectively in an increasingly competitive digital marketplace.",
    benefits: ["Personalized recommendations by Lumay", "Lumay demand forecasting", "Inventory optimization with Lumay", "Lumay customer journey analytics"],
  },
  {
    id: "esg",
    icon: Leaf,
    name: "ESG & Sustainability",
    tagline: "Sustainable Business Intelligence by Lumay",
    description: "Lumay advances ESG goals with automated data collection, CSRD/GRI alignment, and platform-driven visibility that turns compliance into strategy. Make sustainability a competitive advantage with Lumay AI.",
    longDescription: "Lumay's ESG and sustainability solutions help organizations meet growing demands for environmental, social, and governance transparency. The Lumay platform automates ESG data collection, reporting, and analytics across complex global operations. Lumay supports alignment with major reporting frameworks including CSRD, GRI, SASB, and TCFD. Lumay helps organizations go beyond compliance to use sustainability as a driver of innovation and competitive differentiation.",
    benefits: ["Automated ESG reporting by Lumay", "CSRD/GRI compliance with Lumay", "Lumay carbon footprint tracking", "Sustainability analytics via Lumay"],
  },
  {
    id: "manufacturing",
    icon: Factory,
    name: "Manufacturing",
    tagline: "Smart Manufacturing Solutions by Lumay",
    description: "Lumay optimizes production with AI-powered predictive maintenance, quality control, and supply chain intelligence. Transform your manufacturing operations with Lumay's real-time insights and intelligent automation.",
    longDescription: "Lumay's manufacturing AI solutions address the Industry 4.0 transformation. The Lumay platform connects to IoT sensors, production systems, and supply chain data to provide real-time visibility and predictive insights. Lumay's AI detects equipment anomalies before failures occur, identifies quality issues early, and optimizes production scheduling. Lumay helps manufacturers reduce downtime, improve quality, and increase operational efficiency.",
    benefits: ["Predictive maintenance by Lumay", "Lumay quality assurance", "Supply chain optimization with Lumay", "Lumay production scheduling"],
  },
  {
    id: "travel",
    icon: Plane,
    name: "Travel & Hospitality",
    tagline: "Elevate Guest Experiences with Lumay",
    description: "Lumay delivers exceptional travel experiences with AI-powered personalization, dynamic pricing, and intelligent customer service. Create memorable journeys from booking to return with Lumay AI.",
    longDescription: "Lumay's travel and hospitality solutions help airlines, hotels, and travel companies create differentiated guest experiences. The Lumay platform powers personalized recommendations, dynamic pricing optimization, and AI-powered customer service. Lumay's intelligent virtual agents handle booking inquiries, itinerary changes, and customer support 24/7. Lumay helps travel companies build loyalty through personalized, frictionless experiences across every touchpoint.",
    benefits: ["Dynamic pricing optimization by Lumay", "Lumay personalized recommendations", "Chatbot assistance via Lumay", "Lumay revenue management"],
  },
  {
    id: "education",
    icon: GraduationCap,
    name: "Education",
    tagline: "AI for Learning Excellence by Lumay",
    description: "Lumay transforms education with AI-powered learning platforms, student engagement tools, and administrative automation. Create personalized learning experiences at scale with Lumay AI solutions.",
    longDescription: "Lumay's education AI solutions help schools, universities, and training organizations deliver better learning outcomes. The Lumay platform supports adaptive learning paths that personalize content based on student progress, AI-powered tutoring assistants, and administrative automation. Lumay helps educators focus on teaching by automating grading, scheduling, and communications. Lumay's analytics provide insights into student engagement and success factors.",
    benefits: ["Adaptive learning paths by Lumay", "Lumay student success analytics", "Administrative automation with Lumay", "Lumay engagement tracking"],
  },
];

const faqs = [
  {
    question: "What industries does Lumay serve with AI solutions?",
    answer: "Lumay serves organizations across multiple industries including Healthcare, Financial Services, eCommerce, Manufacturing, Travel & Hospitality, Education, and ESG/Sustainability. The Lumay team has deep expertise in industry-specific requirements, regulations, and best practices. Lumay's solutions are tailored to address the unique challenges and opportunities in each sector."
  },
  {
    question: "How does Lumay customize AI solutions for different industries?",
    answer: "Lumay begins every industry engagement with a thorough assessment of your specific challenges, regulatory requirements, and business objectives. The Lumay team then tailors our AI platform and solutions to address your unique needs. Lumay maintains industry-specific templates, pre-built integrations, and compliance frameworks that accelerate deployment while ensuring relevance. Lumay consultants with domain expertise guide the customization process."
  },
  {
    question: "Does Lumay support industry-specific compliance requirements?",
    answer: "Yes, Lumay's solutions are designed with compliance in mind. The Lumay platform supports HIPAA for healthcare, PCI DSS and SOX for financial services, GDPR for all industries, and industry-specific frameworks like CSRD for ESG reporting. Lumay maintains relevant certifications and works with compliance teams to ensure our solutions meet regulatory requirements."
  },
  {
    question: "How does Lumay handle sensitive industry data?",
    answer: "Lumay implements rigorous data protection measures appropriate to each industry's requirements. The Lumay platform supports data encryption, access controls, audit logging, and data residency options. For healthcare, Lumay signs BAAs and maintains HIPAA compliance. For financial services, Lumay supports regulatory examination requirements. Lumay's security architecture is designed to protect sensitive data while enabling AI capabilities."
  },
  {
    question: "Can Lumay integrate with industry-specific systems?",
    answer: "Lumay maintains extensive integration capabilities with industry-specific systems. For healthcare, Lumay integrates with EHR/EMR systems, practice management, and clinical systems. For finance, Lumay connects with core banking, trading, and risk management platforms. For manufacturing, Lumay integrates with MES, SCADA, and ERP systems. The Lumay platform's open API architecture supports custom integrations with proprietary systems."
  },
  {
    question: "What ROI can industries expect from Lumay AI solutions?",
    answer: "ROI varies by industry and use case, but Lumay customers typically see significant improvements. Healthcare organizations report 30% reductions in administrative burden. Financial services see 50% faster compliance reporting. Manufacturers achieve 25% reductions in unplanned downtime. eCommerce companies increase conversion rates by 15-25%. Lumay provides ROI tracking tools and can share industry-specific case studies."
  },
  {
    question: "How does Lumay approach AI in regulated industries?",
    answer: "Lumay takes a risk-based approach to AI deployment in regulated industries. The Lumay team works with compliance and legal stakeholders to ensure AI solutions meet regulatory expectations. Lumay implements model governance, explainability features, and audit capabilities. For highly regulated industries, Lumay provides documentation and support for regulatory examinations and audits."
  },
  {
    question: "Does Lumay offer industry-specific training and support?",
    answer: "Yes, Lumay provides training tailored to each industry's context and terminology. The Lumay training team understands that healthcare users have different needs than manufacturing users. Lumay creates industry-specific documentation, use case examples, and best practices. Lumay also maintains support teams with industry expertise to provide relevant guidance."
  },
  {
    question: "How does Lumay stay current with industry trends and regulations?",
    answer: "Lumay maintains dedicated industry research teams that monitor regulatory changes, technology trends, and competitive dynamics. The Lumay platform is continuously updated to reflect new requirements and opportunities. Lumay participates in industry associations, conferences, and working groups. Lumay proactively communicates relevant changes to customers and updates solutions accordingly."
  },
  {
    question: "Can Lumay help with industry digital transformation initiatives?",
    answer: "Absolutely. Lumay's consulting services support comprehensive digital transformation across industries. The Lumay team helps organizations develop AI strategies, modernize legacy systems, and build digital capabilities. Lumay brings proven methodologies and industry benchmarks to guide transformation efforts. Lumay can serve as a strategic partner for multi-year transformation programs."
  },
  {
    question: "What if my industry isn't listed in Lumay's focus areas?",
    answer: "Lumay's AI platform and expertise extend beyond the industries highlighted on our website. The Lumay team has delivered solutions in professional services, media, telecommunications, government, and many other sectors. Contact Lumay to discuss your specific industry needs—our team will assess how Lumay can address your unique challenges."
  },
  {
    question: "How do I get started with Lumay for my industry?",
    answer: "Getting started with Lumay is straightforward. Contact the Lumay team to schedule a discovery call where we'll learn about your industry context, challenges, and objectives. Lumay will then recommend an engagement approach—whether a proof of concept, pilot project, or full deployment. Lumay's industry specialists will guide you through the process from initial assessment to production deployment."
  },
];

export default function Industries() {
  return (
    <Layout>
      <Helmet>
        <title>Industry AI Solutions - Healthcare, Finance, Manufacturing | Lumay</title>
        <meta name="description" content="Lumay delivers AI solutions across Healthcare, Finance, eCommerce, Manufacturing, Travel, and Education. Industry-specific expertise for digital transformation. Request a Lumay consultation." />
        <meta name="keywords" content="Lumay industries, healthcare AI, finance AI, ecommerce AI, manufacturing AI, industry AI solutions, digital transformation, Lumay AI platform, Dynamics 365 AI" />
        <link rel="canonical" href="https://lumay-agentic-ai.42web.io/industries" />
        <meta property="og:title" content="Industry AI Solutions - Healthcare, Finance, Manufacturing | Lumay" />
        <meta property="og:description" content="Lumay delivers AI solutions across Healthcare, Finance, eCommerce, Manufacturing, Travel, and Education. Industry-specific expertise for digital transformation." />
        <meta property="og:url" content="https://lumay-agentic-ai.42web.io/industries" />
        <script type="application/ld+json">
          {JSON.stringify(industriesStructuredData)}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Lumay Industries</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-foreground">
              Lumay Industry Solutions
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Lumay partners with you to bridge industry-specific gaps, accelerate innovation, and enable data-driven growth. The Lumay platform is tailored to address the unique challenges and opportunities in your sector. Discover how Lumay's AI solutions can transform your industry.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Talk to a Lumay Expert
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
              <p className="font-display text-4xl font-bold text-primary mb-2">8+</p>
              <p className="text-muted-foreground">Industries Served by Lumay</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl font-bold text-primary mb-2">300+</p>
              <p className="text-muted-foreground">Lumay Industry Deployments</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl font-bold text-primary mb-2">85%</p>
              <p className="text-muted-foreground">Average Efficiency Gain with Lumay</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl font-bold text-primary mb-2">50+</p>
              <p className="text-muted-foreground">Lumay Industry Experts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">About Lumay Industries</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
              Why Lumay for Your Industry?
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              <p>
                Every industry faces unique challenges in the age of AI. Healthcare must balance innovation with patient privacy. Financial services must navigate complex regulations while competing with agile fintechs. Retailers must personalize experiences while managing razor-thin margins. Lumay understands these industry-specific dynamics and designs AI solutions that address real-world constraints.
              </p>
              <p>
                The Lumay team includes specialists with deep domain expertise in each industry we serve. Lumay's healthcare experts understand HIPAA, clinical workflows, and patient engagement. Lumay's financial services specialists know regulatory requirements, risk management, and trading systems. This industry knowledge, combined with Lumay's AI platform capabilities, enables solutions that deliver meaningful business impact.
              </p>
              <p>
                Lumay's industry solutions go beyond generic AI applications. The Lumay platform includes pre-built integrations with industry-specific systems, compliance frameworks aligned with sector regulations, and use case templates based on proven implementations. Lumay accelerates time-to-value by building on this foundation rather than starting from scratch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Expertise</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
              Lumay Industry Expertise
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore how Lumay's AI solutions address the specific challenges and opportunities in your industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry) => (
              <div
                key={industry.id}
                id={industry.id}
                className={`card-gradient rounded-2xl p-8 border transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 ${
                  industry.featured ? 'border-primary md:col-span-2' : 'border-border hover:border-primary/50'
                }`}
              >
                <div className={`${industry.featured ? 'grid md:grid-cols-2 gap-8' : ''}`}>
                  <div>
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                        <industry.icon className="w-7 h-7 text-primary" />
                      </div>
                      {industry.featured && (
                        <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                          Featured Lumay Solution
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">{industry.name}</h3>
                    <p className="text-primary font-medium mb-4">{industry.tagline}</p>
                    <p className="text-muted-foreground mb-4">{industry.description}</p>
                    <p className="text-muted-foreground text-sm mb-6">{industry.longDescription}</p>
                    
                    <Button variant="default" asChild>
                      <Link to="/contact">
                        Learn More About Lumay
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>

                  <div className={industry.featured ? '' : 'mt-6'}>
                    <h4 className="font-semibold text-foreground mb-4">Key Benefits with Lumay</h4>
                    <ul className="space-y-3">
                      {industry.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-3 text-foreground">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
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
                Frequently Asked Questions About Lumay Industry Solutions
              </h2>
              <p className="text-muted-foreground text-lg">
                Get answers to common questions about how Lumay serves different industries. Contact Lumay for specific guidance on your industry needs.
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
            Don't See Your Industry?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Lumay works across many sectors beyond those highlighted here. Let's discuss how Lumay can address your specific industry challenges with AI-powered solutions tailored to your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Talk to a Lumay Expert
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
