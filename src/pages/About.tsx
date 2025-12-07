import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Gem, Award, Rocket, Target, Users, Globe, Lightbulb } from "lucide-react";
import { Helmet } from "react-helmet-async";

const values = [
  {
    icon: Target,
    title: "Customer Success",
    description: "We measure our success by the success of our clients. Every solution we build is designed to deliver measurable business outcomes.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay at the forefront of AI and technology, continuously exploring new approaches to solve complex business challenges.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work as partners, not vendors. Our teams integrate with yours to ensure knowledge transfer and sustainable success.",
  },
  {
    icon: Globe,
    title: "Responsibility",
    description: "We build ethical, secure, and sustainable AI systems. Responsible innovation is not optional—it's fundamental to our approach.",
  },
];

const stats = [
  { value: "85%", label: "Efficiency Improvement" },
  { value: "100+", label: "Enterprise Clients" },
  { value: "50+", label: "AI Experts" },
  { value: "24/7", label: "Support" },
];

export default function About() {
  return (
    <Layout>
      <Helmet>
        <title>About LuMay - Our Mission, Vision & Values | Enterprise AI Company</title>
        <meta name="description" content="Learn about LuMay's mission to build intelligent, scalable, and ethical AI ecosystems. Meet our team of 50+ AI experts and discover our customer-first approach." />
        <meta name="keywords" content="about LuMay, AI company, enterprise AI, digital transformation, AI experts, LuMay team, AI innovation" />
        <link rel="canonical" href="https://lumay-agentic-ai.42web.io/about" />
        <meta property="og:title" content="About LuMay - Our Mission, Vision & Values" />
        <meta property="og:description" content="Learn about LuMay's mission to build intelligent, scalable, and ethical AI ecosystems for enterprises worldwide." />
        <meta property="og:url" content="https://lumay-agentic-ai.42web.io/about" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About LuMay",
            "description": "Learn about LuMay's mission to build intelligent, scalable, and ethical AI ecosystems",
            "url": "https://lumay-agentic-ai.42web.io/about",
            "mainEntity": {
              "@type": "Organization",
              "name": "LuMay",
              "description": "Enterprise Agentic AI Platform",
              "numberOfEmployees": "50+",
              "foundingDate": "2020"
            }
          }
        `}</script>
      </Helmet>

      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">About Us</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-foreground">
              Where Innovation Meets Intelligence
            </h1>
            <p className="text-lg text-muted-foreground">
              At LuMay, we help enterprises build intelligent, scalable, and ethical digital ecosystems.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                We exist to build AI-native systems that create measurable impact. Our mission is to 
                democratize advanced AI capabilities, making them accessible to enterprises of all sizes.
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                With expertise in AI, automation, and software engineering, we design solutions that turn 
                data into action and technology into lasting impact. We believe that the future belongs 
                to organizations that can harness the power of intelligent automation.
              </p>
              <Button variant="hero" asChild>
                <Link to="/contact">
                  Work with us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="card-gradient rounded-xl p-6 border border-border text-center">
                  <div className="font-display text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The LuMay Way */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              The LuMay Way
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our approach combines essence, expertise, and execution to deliver transformative results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Gem className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-4">Essence</h3>
              <p className="text-muted-foreground">
                We exist to build AI-native systems that create measurable impact. Our essence lies in 
                turning intelligence into action — and strategy into outcomes that evolve with your business.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-4">Expertise</h3>
              <p className="text-muted-foreground">
                LuMay's strength comes from multidisciplinary expertise — spanning engineering, AI, 
                automation, and experience design. Our teams don't just implement; they enable, mentor, and elevate.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-4">Execution</h3>
              <p className="text-muted-foreground">
                We deliver through a modular, agile, and outcome-led execution model — ensuring scalable 
                transformation from pilot to enterprise rollout, with speed, clarity, and governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="card-gradient rounded-xl p-6 border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Join our journey
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Whether you're looking to partner, join our team, or transform your business, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/products">View Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
