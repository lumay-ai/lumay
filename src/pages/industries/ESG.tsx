import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Leaf, 
  CheckCircle, 
  TrendingUp, 
  Shield, 
  BarChart3,
  FileText,
  Globe,
  Target,
  Recycle,
  Building2,
  Users
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  {
    icon: BarChart3,
    title: "ESG Data Collection & Analysis",
    description: "LuMay AI agents automatically collect, validate, and analyze ESG data from across your organization, ensuring accuracy and completeness for reporting."
  },
  {
    icon: FileText,
    title: "Automated Sustainability Reporting",
    description: "SmartFlow automates the creation of sustainability reports aligned with GRI, SASB, TCFD, and other reporting frameworks, reducing manual effort and errors."
  },
  {
    icon: Target,
    title: "Carbon Footprint Tracking",
    description: "Real-time monitoring and calculation of Scope 1, 2, and 3 emissions with AI-powered recommendations for reduction strategies and offset opportunities."
  },
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description: "SmartOCG Compliance monitors evolving ESG regulations and ensures your organization meets disclosure requirements across jurisdictions."
  },
  {
    icon: TrendingUp,
    title: "ESG Performance Analytics",
    description: "SmartTrends delivers predictive analytics and benchmarking to track ESG performance, identify trends, and optimize sustainability strategies."
  },
  {
    icon: Globe,
    title: "Supply Chain Sustainability",
    description: "AI-powered supply chain monitoring tracks supplier ESG performance, identifies risks, and ensures alignment with your sustainability commitments."
  }
];

const benefits = [
  "70% reduction in ESG data collection time",
  "Automated compliance with 10+ reporting frameworks",
  "Real-time visibility into carbon emissions",
  "40% faster sustainability report generation",
  "Comprehensive supply chain ESG monitoring",
  "Audit-ready documentation and data trails"
];

const useCases = [
  {
    title: "Integrated ESG Data Management",
    description: "LuMay automatically collects ESG metrics from ERP systems, facility management, HR platforms, and supply chain systems, creating a single source of truth for sustainability data."
  },
  {
    title: "Climate Risk Assessment",
    description: "SmartTrends analyzes climate-related risks to your operations and supply chain, providing scenario modeling for TCFD disclosures and strategic planning."
  },
  {
    title: "Supplier Sustainability Scoring",
    description: "AI agents continuously monitor supplier ESG performance, generate risk scores, and identify opportunities for sustainable procurement improvements."
  },
  {
    title: "Stakeholder ESG Engagement",
    description: "SmartAssist handles ESG inquiries from investors, customers, and rating agencies, providing accurate, consistent responses about your sustainability initiatives."
  }
];

const faqs = [
  {
    question: "What ESG reporting frameworks does LuMay support?",
    answer: "LuMay supports all major ESG reporting frameworks including GRI Standards, SASB, TCFD, CDP, UN SDGs, EU Taxonomy, CSRD, and SEC climate disclosure requirements. Our platform automatically maps your data to multiple frameworks, enabling efficient multi-framework reporting from a single data set. We continuously update our framework support as standards evolve."
  },
  {
    question: "How does LuMay collect ESG data from across the organization?",
    answer: "LuMay integrates with your existing systems including ERP, HR, facilities management, procurement, and supply chain platforms to automatically collect ESG-relevant data. Our AI agents validate data quality, identify gaps, and request missing information from appropriate stakeholders. We support both automated data feeds and manual data entry with validation."
  },
  {
    question: "Can LuMay calculate Scope 1, 2, and 3 emissions?",
    answer: "Yes, LuMay provides comprehensive emissions calculation capabilities. We calculate Scope 1 direct emissions from owned sources, Scope 2 emissions from purchased energy, and Scope 3 value chain emissions across all 15 categories. Our calculations use current emission factors and methodologies aligned with the GHG Protocol. We support location-based and market-based approaches."
  },
  {
    question: "How does LuMay help with supply chain sustainability?",
    answer: "LuMay provides end-to-end supply chain sustainability management. AI agents monitor supplier ESG performance using public data, questionnaire responses, and third-party ratings. We generate supplier sustainability scores, identify high-risk suppliers, and track improvement over time. SmartFlow automates supplier engagement workflows for sustainability assessments."
  },
  {
    question: "What audit capabilities does LuMay provide for ESG data?",
    answer: "LuMay maintains complete audit trails for all ESG data including source systems, calculation methodologies, changes, and approvals. Our platform provides auditor access with appropriate controls, generates audit-ready documentation, and supports internal and external assurance processes. Data lineage tracking ensures transparency in all reported metrics."
  },
  {
    question: "How does LuMay handle evolving ESG regulations?",
    answer: "SmartOCG Compliance continuously monitors ESG regulatory developments globally and assesses their impact on your organization. We provide alerts for new requirements, gap analyses against current practices, and implementation guidance. Our platform updates automatically to support new disclosure requirements as they become effective."
  },
  {
    question: "Can LuMay benchmark our ESG performance against peers?",
    answer: "Yes, SmartTrends provides ESG benchmarking against industry peers, best practices, and target trajectories. We analyze publicly available ESG data from competitors and industry leaders to contextualize your performance. Benchmarking insights help identify areas for improvement and communicate relative performance to stakeholders."
  },
  {
    question: "How does LuMay support climate scenario analysis?",
    answer: "LuMay provides climate scenario modeling aligned with TCFD recommendations. We support analysis of physical and transition risks under different climate scenarios (1.5°C, 2°C, 4°C pathways). The platform models financial impacts, identifies resilience gaps, and supports strategic planning for climate-related risks and opportunities."
  },
  {
    question: "What integration capabilities does LuMay offer for ESG?",
    answer: "LuMay integrates with enterprise systems including SAP, Oracle, Microsoft Dynamics, Salesforce, and major facilities management platforms. We provide APIs for custom integrations and support data imports from spreadsheets for transitioning organizations. Our integration layer ensures data flows automatically into ESG reporting workflows."
  },
  {
    question: "How does LuMay help with biodiversity and nature-related disclosures?",
    answer: "LuMay supports emerging biodiversity and nature-related disclosure frameworks including TNFD. Our platform helps organizations assess nature-related dependencies and impacts, identify material risks, and prepare disclosures. We integrate location-specific biodiversity data and provide tools for nature-positive strategy development."
  },
  {
    question: "Can LuMay manage ESG goals and targets?",
    answer: "Yes, LuMay provides comprehensive goal and target management. Organizations can set science-based targets, net-zero commitments, and other ESG goals within the platform. AI agents track progress, project trajectories, and alert stakeholders when goals are at risk. We support goal setting aligned with SBTi and other standard-setting bodies."
  },
  {
    question: "What training and support does LuMay provide for ESG teams?",
    answer: "LuMay provides comprehensive training including platform certification, ESG reporting best practices, and framework-specific guidance. We offer dedicated customer success managers, ongoing technical support, and access to our ESG expertise. Regular webinars and knowledge resources keep teams current on evolving requirements."
  }
];

export default function ESG() {
  return (
    <Layout>
      <Helmet>
        <title>ESG & Sustainability AI | LuMay Enterprise Agentic AI Platform</title>
        <meta name="description" content="Accelerate ESG reporting and sustainability initiatives with LuMay's AI platform. Automate data collection, carbon tracking, and compliance across GRI, SASB, TCFD, and more." />
        <meta name="keywords" content="ESG AI, sustainability AI, carbon tracking, ESG reporting, GRI SASB TCFD, climate disclosure, LuMay ESG, sustainability automation" />
        <link rel="canonical" href="https://lumay-agentic-ai.42web.io/industries/esg" />
        <meta property="og:title" content="ESG & Sustainability AI | LuMay Enterprise Agentic AI Platform" />
        <meta property="og:description" content="Accelerate ESG reporting and sustainability initiatives with LuMay's AI platform. Automate data collection, carbon tracking, and compliance." />
        <meta property="og:url" content="https://lumay-agentic-ai.42web.io/industries/esg" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "LuMay ESG & Sustainability AI Solutions",
            "description": "Enterprise AI platform for ESG reporting, sustainability management, carbon tracking, and regulatory compliance.",
            "provider": {
              "@type": "Organization",
              "name": "LuMay",
              "url": "https://lumay-agentic-ai.42web.io"
            },
            "serviceType": "ESG AI",
            "areaServed": "Global"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
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
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Leaf className="w-4 h-4" />
              Industry Solutions
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              ESG & Sustainability <span className="text-gradient">AI Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Accelerate your sustainability journey with LuMay's AI-powered ESG platform. Automate data collection, streamline reporting, and drive measurable environmental and social impact with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg" asChild>
                <Link to="/contact">
                  Schedule Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg" asChild>
                <Link to="/products/smartcompliance">
                  Explore SmartOCG Compliance
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6 text-foreground text-center">
              Intelligent ESG Management with LuMay
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Environmental, Social, and Governance (ESG) has moved from the periphery to the center of corporate strategy. Investors, regulators, customers, and employees increasingly demand transparency and action on sustainability. LuMay's enterprise agentic AI platform empowers organizations to meet these demands through intelligent automation that transforms ESG from a compliance burden into a strategic advantage.
              </p>
              <p>
                LuMay recognizes that ESG success requires accurate data, efficient processes, and actionable insights. Our platform addresses all three by deploying AI agents that automate data collection from across your organization, ensure data quality and completeness, and generate reports aligned with major frameworks including GRI, SASB, TCFD, and emerging regulations like CSRD and SEC climate disclosures.
              </p>
              <p>
                Beyond reporting, LuMay helps organizations drive real sustainability progress. SmartTrends provides analytics that identify opportunities for emissions reduction, resource efficiency, and supply chain improvement. Our AI agents monitor ESG performance continuously, alert stakeholders to issues, and track progress against targets. SmartOCG Compliance ensures you stay ahead of evolving ESG regulations across all jurisdictions where you operate.
              </p>
              <p>
                Whether you're beginning your ESG journey or advancing mature sustainability programs, LuMay provides the intelligent automation needed to scale your efforts. Our clients typically reduce ESG data collection time by 70%, accelerate report generation by 40%, and achieve greater confidence in the accuracy and auditability of their ESG disclosures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              AI-Powered ESG Capabilities
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              LuMay delivers comprehensive AI solutions for ESG and sustainability management.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8 text-foreground text-center">
              Measurable Sustainability Impact
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              ESG & Sustainability Use Cases
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover how LuMay AI agents transform ESG management and sustainability initiatives.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-3 text-foreground">{useCase.title}</h3>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg text-muted-foreground">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6 text-foreground">
              The Future of ESG with LuMay AI
            </h2>
            
            <h3 className="text-foreground">The ESG Imperative</h3>
            <p>
              ESG has evolved from a nice-to-have to a business imperative. Investors managing trillions of dollars now incorporate ESG factors into investment decisions. Regulators worldwide are mandating climate and sustainability disclosures. Customers increasingly choose brands that align with their values. Employees want to work for organizations making positive impact. LuMay's AI platform helps organizations respond to these demands efficiently and effectively.
            </p>
            
            <h3 className="text-foreground">Data: The Foundation of ESG Success</h3>
            <p>
              Accurate, comprehensive ESG data is the foundation of meaningful sustainability progress. Yet many organizations struggle with data scattered across systems, inconsistent methodologies, and manual collection processes. LuMay transforms ESG data management by deploying AI agents that automatically collect data from source systems, validate quality, identify gaps, and maintain continuous data flows. This automation ensures the data integrity that stakeholders and auditors require.
            </p>
            
            <h3 className="text-foreground">Carbon and Climate Intelligence</h3>
            <p>
              Climate change is the defining issue of our time, and organizations face growing pressure to measure and reduce their carbon footprint. LuMay provides comprehensive carbon management capabilities, calculating emissions across Scope 1, 2, and 3 using methodologies aligned with the GHG Protocol. Our AI analyzes emissions data to identify reduction opportunities, model decarbonization pathways, and track progress against science-based targets.
            </p>
            
            <h3 className="text-foreground">Streamlined Sustainability Reporting</h3>
            <p>
              Sustainability reporting has become increasingly complex as frameworks proliferate and disclosure requirements expand. LuMay SmartFlow automates report generation aligned with GRI, SASB, TCFD, CDP, and regulatory requirements. Our platform maps data to multiple frameworks, generates disclosure content, and maintains version control through the review and approval process. This automation reduces report preparation time by 40% or more while improving accuracy.
            </p>
            
            <h3 className="text-foreground">Supply Chain Sustainability</h3>
            <p>
              For most organizations, the majority of environmental and social impact occurs in the supply chain. LuMay provides comprehensive supply chain sustainability management, monitoring supplier ESG performance, identifying risks, and tracking improvement over time. AI agents automate supplier assessments, analyze responses, and generate sustainability scores that inform procurement decisions. This visibility is essential for addressing Scope 3 emissions and meeting stakeholder expectations.
            </p>
            
            <h3 className="text-foreground">Regulatory Compliance Excellence</h3>
            <p>
              The ESG regulatory landscape is evolving rapidly. The EU's Corporate Sustainability Reporting Directive (CSRD), SEC climate disclosures, and other regulations are creating new compliance obligations. LuMay SmartOCG Compliance monitors regulatory developments, assesses applicability, and ensures your organization meets disclosure requirements. Our platform updates automatically as regulations take effect, reducing compliance risk and effort.
            </p>
            
            <h3 className="text-foreground">ESG Analytics and Insights</h3>
            <p>
              Data without insight is just numbers. LuMay SmartTrends transforms ESG data into actionable intelligence. Our analytics reveal performance trends, benchmark against peers, identify improvement opportunities, and project trajectories toward goals. Predictive models help organizations anticipate ESG risks and opportunities, enabling proactive rather than reactive management.
            </p>
            
            <h3 className="text-foreground">Stakeholder Engagement</h3>
            <p>
              ESG success requires engaging stakeholders across the organization and beyond. LuMay SmartAssist handles ESG inquiries from investors, customers, employees, and rating agencies, providing accurate, consistent information about your sustainability initiatives. Automated communications keep stakeholders informed of progress while reducing burden on sustainability teams.
            </p>
            
            <h3 className="text-foreground">Building a Sustainable Future</h3>
            <p>
              LuMay is committed to helping organizations build a more sustainable future. Our AI platform provides the automation and intelligence needed to accelerate sustainability progress while managing the complexity of modern ESG requirements. We partner with clients to ensure our solutions deliver measurable environmental and social impact alongside business value.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8 text-foreground text-center">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="bg-card border border-border rounded-lg px-6">
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

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6 text-foreground">
              Accelerate Your Sustainability Journey
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Discover how LuMay's AI platform can transform your ESG reporting, drive sustainability progress, and create lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg" asChild>
                <Link to="/contact">
                  Request Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg" asChild>
                <Link to="/products">
                  Explore Products
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
