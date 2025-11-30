import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Heart, Wallet, ShoppingCart, Leaf, Factory, Plane, GraduationCap } from "lucide-react";
import { Helmet } from "react-helmet-async";

const industries = [
  {
    id: "dynamics365",
    icon: Building2,
    name: "Dynamics 365 AI",
    featured: true,
    tagline: "Transform Microsoft Dynamics 365 with AI",
    description: "Transform your Microsoft Dynamics 365 with CRM Copilot and AI automation. Reduce quote time by 85% with D365 AI agents. Our solutions seamlessly integrate with your existing D365 environment to supercharge productivity.",
    benefits: ["85% faster quote generation", "CRM Copilot integration", "Automated workflows", "Enhanced customer insights"],
  },
  {
    id: "healthcare",
    icon: Heart,
    name: "Health & Life Sciences",
    tagline: "AI-Powered Healthcare Solutions",
    description: "Enhance healthcare efficiency and compliance with AI-powered solutions that simplify operations and improve patient experiences. From clinical workflows to administrative processes, we help healthcare organizations deliver better care.",
    benefits: ["HIPAA-compliant solutions", "Clinical workflow automation", "Patient engagement tools", "Regulatory compliance"],
  },
  {
    id: "finance",
    icon: Wallet,
    name: "Finance",
    tagline: "Intelligent Financial Services",
    description: "Boost compliance and agility in financial services with AI-driven insights, workflow automation, and personalized customer solutions. Navigate complex regulations while delivering exceptional customer experiences.",
    benefits: ["Fraud detection & prevention", "Regulatory compliance", "Risk assessment automation", "Customer personalization"],
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    name: "eCommerce",
    tagline: "AI-Driven Retail Excellence",
    description: "Accelerate growth with AI solutions that personalize shopping, predict behavior, and optimize the end-to-end customer journey. Turn browsers into buyers with intelligent recommendations and seamless experiences.",
    benefits: ["Personalized recommendations", "Demand forecasting", "Inventory optimization", "Customer journey analytics"],
  },
  {
    id: "esg",
    icon: Leaf,
    name: "ESG & Sustainability",
    tagline: "Sustainable Business Intelligence",
    description: "Advance ESG goals with automated data collection, CSRD/GRI alignment, and platform-driven visibility that turns compliance into strategy. Make sustainability a competitive advantage.",
    benefits: ["Automated ESG reporting", "CSRD/GRI compliance", "Carbon footprint tracking", "Sustainability analytics"],
  },
  {
    id: "manufacturing",
    icon: Factory,
    name: "Manufacturing",
    tagline: "Smart Manufacturing Solutions",
    description: "Optimize production with AI-powered predictive maintenance, quality control, and supply chain intelligence. Transform your manufacturing operations with real-time insights and automation.",
    benefits: ["Predictive maintenance", "Quality assurance", "Supply chain optimization", "Production scheduling"],
  },
  {
    id: "travel",
    icon: Plane,
    name: "Travel & Hospitality",
    tagline: "Elevate Guest Experiences",
    description: "Deliver exceptional travel experiences with AI-powered personalization, dynamic pricing, and intelligent customer service. Create memorable journeys from booking to return.",
    benefits: ["Dynamic pricing optimization", "Personalized recommendations", "Chatbot assistance", "Revenue management"],
  },
  {
    id: "education",
    icon: GraduationCap,
    name: "Education",
    tagline: "AI for Learning Excellence",
    description: "Transform education with AI-powered learning platforms, student engagement tools, and administrative automation. Create personalized learning experiences at scale.",
    benefits: ["Adaptive learning paths", "Student success analytics", "Administrative automation", "Engagement tracking"],
  },
];

export default function Industries() {
  return (
    <Layout>
      <Helmet>
        <title>Industries - LuMay AI Solutions by Sector</title>
        <meta name="description" content="LuMay delivers AI solutions across Healthcare, Finance, eCommerce, Manufacturing, and more. Industry-specific expertise for digital transformation." />
        <meta name="keywords" content="healthcare AI, finance AI, ecommerce AI, manufacturing AI, industry solutions, digital transformation" />
        <link rel="canonical" href="https://lumay.ai/industries" />
      </Helmet>

      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Industries</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-foreground">
              Industry Solutions
            </h1>
            <p className="text-lg text-muted-foreground">
              We partner with you to bridge industry-specific gaps, accelerate innovation, and enable data-driven growth
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                          Featured
                        </span>
                      )}
                    </div>
                    <h2 className="font-display text-2xl font-bold text-foreground mb-2">{industry.name}</h2>
                    <p className="text-primary font-medium mb-4">{industry.tagline}</p>
                    <p className="text-muted-foreground mb-6">{industry.description}</p>
                    
                    <Button variant="default" asChild>
                      <Link to="/contact">
                        Learn more
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>

                  <div className={industry.featured ? '' : 'mt-6'}>
                    <h3 className="font-semibold text-foreground mb-4">Key Benefits</h3>
                    <ul className="space-y-3">
                      {industry.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-3 text-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
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

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Don't see your industry?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            We work across many sectors. Let's discuss how LuMay can address your specific industry challenges.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Talk to an Expert
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
