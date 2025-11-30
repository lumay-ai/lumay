import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Shield, Blocks, Users, Cpu, Database, Cog, HeartHandshake } from "lucide-react";
import { Helmet } from "react-helmet-async";

const services = [
  {
    id: "data-ai",
    icon: Brain,
    name: "Data & AI",
    tagline: "Transform Data into Intelligence",
    description: "We empower your business with AI-driven solutions that drive growth, security, and digital success. Our comprehensive data and AI services help you unlock insights, automate processes, and make smarter decisions.",
    capabilities: [
      { icon: Cpu, name: "Machine Learning", description: "Custom ML models tailored to your business needs" },
      { icon: Database, name: "Data Engineering", description: "Build robust data pipelines and architectures" },
      { icon: Cog, name: "AI Integration", description: "Seamlessly integrate AI into existing workflows" },
      { icon: HeartHandshake, name: "AI Strategy", description: "Develop comprehensive AI roadmaps" },
    ],
  },
  {
    id: "cybersecurity",
    icon: Shield,
    name: "Cybersecurity",
    tagline: "Protect Your Digital Assets",
    description: "Comprehensive cybersecurity solutions that protect your organization from evolving threats. We provide end-to-end security services from assessment to implementation and ongoing monitoring.",
    capabilities: [
      { icon: Shield, name: "Threat Detection", description: "24/7 monitoring and threat intelligence" },
      { icon: Database, name: "Security Audits", description: "Comprehensive vulnerability assessments" },
      { icon: Cog, name: "Compliance", description: "Meet industry regulations and standards" },
      { icon: HeartHandshake, name: "Incident Response", description: "Rapid response and recovery services" },
    ],
  },
  {
    id: "lowcode",
    icon: Blocks,
    name: "Low-Code / No-Code Platform",
    tagline: "Accelerate Digital Innovation",
    description: "Enable rapid application development with our low-code/no-code platform services. We help organizations build, deploy, and scale applications faster while reducing development costs.",
    capabilities: [
      { icon: Cpu, name: "Rapid Prototyping", description: "From concept to working prototype in weeks" },
      { icon: Database, name: "Workflow Automation", description: "Automate complex business processes" },
      { icon: Cog, name: "Integration Platform", description: "Connect all your business systems" },
      { icon: HeartHandshake, name: "Custom Applications", description: "Build tailored solutions without coding" },
    ],
  },
  {
    id: "cx",
    icon: Users,
    name: "Customer Experience",
    tagline: "Transform Every Touchpoint",
    description: "Create exceptional customer experiences across all channels. We help you understand your customers, personalize interactions, and build lasting relationships through AI-powered engagement.",
    capabilities: [
      { icon: Cpu, name: "Journey Mapping", description: "Understand and optimize customer journeys" },
      { icon: Database, name: "Personalization", description: "Deliver tailored experiences at scale" },
      { icon: Cog, name: "Omnichannel Support", description: "Consistent experience across all channels" },
      { icon: HeartHandshake, name: "CX Analytics", description: "Measure and improve customer satisfaction" },
    ],
  },
];

export default function Services() {
  return (
    <Layout>
      <Helmet>
        <title>Services - LuMay AI Consulting & Implementation</title>
        <meta name="description" content="LuMay provides Data & AI, Cybersecurity, Low-Code platforms, and Customer Experience services. Expert consulting and implementation for digital transformation." />
        <meta name="keywords" content="AI consulting, cybersecurity services, low-code development, customer experience, digital transformation" />
        <link rel="canonical" href="https://lumay.ai/services" />
      </Helmet>

      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Services</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-foreground">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground">
              We empower your business with AI-driven solutions that drive growth, security, and digital success.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div key={service.id} id={service.id}>
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                      {service.name}
                    </h2>
                    <p className="text-primary font-medium mb-4">{service.tagline}</p>
                    <p className="text-muted-foreground text-lg mb-8">{service.description}</p>
                    
                    <Button variant="hero" asChild>
                      <Link to="/contact">
                        Get Started
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
                        <h3 className="font-display font-semibold text-foreground mb-2">{capability.name}</h3>
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

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Let's discuss your needs
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Our experts are ready to help you identify the right services for your organization
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
