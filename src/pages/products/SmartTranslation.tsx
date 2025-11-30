import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, CheckCircle, BookOpen, Shield, Layers, Zap, Users, FileText } from "lucide-react";
import { Helmet } from "react-helmet-async";

const features = [
  { icon: Zap, title: "Neural Translation", description: "State-of-the-art neural networks for natural, fluent translations." },
  { icon: BookOpen, title: "Industry Glossaries", description: "Custom terminology databases for your specific industry and brand." },
  { icon: Shield, title: "Quality Assurance", description: "Multi-step validation to ensure accuracy and consistency." },
  { icon: Layers, title: "Batch Processing", description: "Translate thousands of documents efficiently at scale." },
  { icon: FileText, title: "API Access", description: "Integrate translation capabilities directly into your workflows." },
  { icon: Users, title: "Human Review Option", description: "Optional expert review for mission-critical content." },
];

const languages = [
  "English", "Spanish", "French", "German", "Chinese", "Japanese",
  "Korean", "Portuguese", "Italian", "Dutch", "Russian", "Arabic"
];

export default function SmartTranslation() {
  return (
    <Layout>
      <Helmet>
        <title>SmartTranslation - AI-Powered Language Services | LuMay</title>
        <meta name="description" content="Break language barriers with context-aware translation. SmartTranslation delivers accurate, industry-specific translations while preserving tone and intent." />
        <meta name="keywords" content="AI translation, neural translation, language services, localization, multilingual" />
        <link rel="canonical" href="https://lumay.ai/products/smarttranslation" />
      </Helmet>

      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Product</span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-2 mb-6 text-foreground">
                SmartTranslation
              </h1>
              <p className="text-xl text-primary font-medium mb-4">AI-Powered Language Services</p>
              <p className="text-lg text-muted-foreground mb-8">
                Break language barriers with context-aware translation. SmartTranslation delivers accurate, industry-specific translations while preserving tone and intent.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Request Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <Link to="/products">View All Products</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl card-gradient border border-border flex items-center justify-center">
                <Globe className="w-32 h-32 text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="py-16 bg-background border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-muted-foreground mb-8">100+ Languages Supported</p>
          <div className="flex flex-wrap justify-center gap-3">
            {languages.map((lang) => (
              <div key={lang} className="px-4 py-2 bg-secondary/50 rounded-full border border-border">
                <span className="text-foreground text-sm">{lang}</span>
              </div>
            ))}
            <div className="px-4 py-2 bg-primary/20 rounded-full border border-primary/30">
              <span className="text-primary text-sm">+88 more</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Features</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
              Enterprise Translation
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              SmartTranslation goes beyond word-for-word translation to deliver natural, contextually accurate content.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="card-gradient rounded-xl p-6 border border-border animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Demo</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
                Context-Aware Translation
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                SmartTranslation understands context, preserves meaning, and adapts to your brand voice.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  Preserves technical terminology
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  Maintains brand voice and tone
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  Handles idioms and cultural nuances
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  Consistent terminology across documents
                </li>
              </ul>
            </div>
            <div className="card-gradient rounded-2xl p-6 border border-border">
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">English (Original)</p>
                  <div className="bg-background/50 rounded-lg p-4 border border-border">
                    <p className="text-foreground">"Our cutting-edge AI platform delivers enterprise-grade security while maintaining seamless user experiences."</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">German (Translation)</p>
                  <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                    <p className="text-foreground">"Unsere hochmoderne KI-Plattform bietet Sicherheit auf Unternehmensebene bei gleichzeitig nahtloser Benutzererfahrung."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to go global?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            See how SmartTranslation can break down language barriers
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
