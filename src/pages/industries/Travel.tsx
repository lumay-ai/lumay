import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Plane, 
  CheckCircle, 
  TrendingUp, 
  MessageSquare, 
  Calendar,
  Users,
  Globe,
  Clock,
  MapPin,
  CreditCard,
  Phone
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  {
    icon: MessageSquare,
    title: "24/7 AI Travel Concierge",
    description: "SmartAssist provides round-the-clock booking assistance, itinerary changes, and travel support in multiple languages for seamless guest experiences."
  },
  {
    icon: TrendingUp,
    title: "Dynamic Pricing Optimization",
    description: "SmartTrends analyzes demand patterns, competitor rates, and market conditions to optimize pricing and maximize revenue across properties and routes."
  },
  {
    icon: Calendar,
    title: "Intelligent Booking Management",
    description: "SmartFlow automates reservation processing, modifications, and cancellations while maintaining inventory accuracy across all distribution channels."
  },
  {
    icon: Globe,
    title: "Multilingual Guest Support",
    description: "SmartTranslation enables seamless communication with international travelers in 100+ languages, breaking down language barriers."
  },
  {
    icon: Phone,
    title: "Voice-Enabled Assistance",
    description: "SmartCall provides AI-powered voice support for reservations, inquiries, and guest services, handling high call volumes efficiently."
  },
  {
    icon: Users,
    title: "Personalized Experiences",
    description: "AI-driven personalization delivers tailored recommendations, upgrades, and services based on guest preferences and history."
  }
];

const benefits = [
  "45% reduction in booking support costs",
  "30% improvement in revenue per available room",
  "24/7 multilingual guest support",
  "50% faster response times for guest inquiries",
  "Real-time inventory synchronization",
  "Seamless integration with major GDS and OTA platforms"
];

const useCases = [
  {
    title: "Automated Booking & Modifications",
    description: "LuMay AI agents handle flight bookings, hotel reservations, and itinerary changes automatically, reducing agent workload while improving guest satisfaction."
  },
  {
    title: "Revenue Management Optimization",
    description: "SmartTrends analyzes demand signals, competitive rates, and historical patterns to recommend optimal pricing strategies that maximize revenue."
  },
  {
    title: "Disruption Management",
    description: "When travel disruptions occur, AI agents automatically rebook affected travelers, coordinate alternatives, and communicate updates in real-time."
  },
  {
    title: "Loyalty Program Enhancement",
    description: "AI personalizes loyalty program engagement, identifying opportunities for member upgrades, targeted offers, and experience enhancements that drive loyalty."
  }
];

const faqs = [
  {
    question: "How does LuMay integrate with travel booking systems?",
    answer: "LuMay integrates with major travel technology systems including Amadeus, Sabre, Travelport, and hospitality platforms like Oracle OPERA, Protel, and Mews. We support GDS connectivity, OTA channel management, and direct booking integrations. Our APIs enable seamless data flow for reservations, availability, and pricing."
  },
  {
    question: "Can LuMay handle booking modifications and cancellations automatically?",
    answer: "Yes, LuMay AI agents process booking modifications, cancellations, and rebookings automatically within defined business rules. The system handles name changes, date modifications, room/seat upgrades, and complex itinerary changes. For modifications outside policy, agents escalate to human staff with full context and recommendations."
  },
  {
    question: "How does LuMay support revenue management?",
    answer: "SmartTrends provides AI-powered revenue management with demand forecasting, competitive rate monitoring, and dynamic pricing recommendations. The system analyzes historical booking patterns, market events, and real-time demand signals to optimize pricing across channels. We support both rule-based and AI-driven pricing strategies."
  },
  {
    question: "What languages does LuMay support for guest communications?",
    answer: "LuMay SmartTranslation supports over 100 languages for guest communications. AI agents can converse naturally in guests' preferred languages, handling bookings, inquiries, and support requests. We maintain travel-specific terminology and cultural sensitivity across all supported languages."
  },
  {
    question: "How does LuMay handle travel disruptions?",
    answer: "LuMay provides automated disruption management that monitors flight statuses, weather impacts, and other disruption triggers. When disruptions occur, AI agents automatically identify affected travelers, locate alternatives, process rebookings, and communicate updates. This capability significantly reduces the burden on service teams during irregular operations."
  },
  {
    question: "Can LuMay personalize guest experiences?",
    answer: "Yes, LuMay leverages guest history, preferences, and behavioral data to personalize every interaction. AI agents recommend relevant upgrades, amenities, and experiences. We support personalized communications, targeted offers, and loyalty program engagement. All personalization respects guest privacy preferences."
  },
  {
    question: "How does LuMay support hotel operations?",
    answer: "LuMay provides comprehensive hotel support including reservation management, guest messaging, concierge services, and operations coordination. SmartAssist handles pre-arrival communication, in-stay requests, and post-stay follow-up. SmartFlow automates operational workflows from housekeeping to maintenance requests."
  },
  {
    question: "What reporting and analytics does LuMay provide for travel?",
    answer: "LuMay provides comprehensive travel analytics including booking performance, guest satisfaction metrics, channel analysis, and revenue optimization insights. SmartTrends delivers forecasting for demand planning and strategic decisions. Dashboards can be customized to your specific KPIs and reporting needs."
  },
  {
    question: "How does LuMay handle group and corporate bookings?",
    answer: "LuMay supports complex group and corporate booking scenarios including RFP management, contract rate application, and group block management. AI agents assist with group coordinator communications, rooming list updates, and billing coordination. We integrate with corporate booking tools and travel management companies."
  },
  {
    question: "Can LuMay support travel agency operations?",
    answer: "Yes, LuMay provides AI capabilities for travel agencies including automated booking assistance, client communications, and supplier management. SmartAssist can handle client inquiries while SmartFlow automates back-office operations. We support B2B2C models where agencies use LuMay to enhance their service offerings."
  },
  {
    question: "How does LuMay ensure data security for traveler information?",
    answer: "LuMay maintains PCI-DSS compliance for payment data and implements comprehensive security for personal traveler information. We support data residency requirements, provide role-based access controls, and maintain complete audit trails. Our platform complies with GDPR, CCPA, and other privacy regulations."
  },
  {
    question: "What is the implementation timeline for travel organizations?",
    answer: "LuMay travel implementations typically span 6-12 weeks depending on scope and integration complexity. Guest-facing AI assistants can often go live within 4 weeks, with revenue management and advanced integrations following. We provide dedicated implementation support and training for travel operations teams."
  }
];

export default function Travel() {
  return (
    <Layout>
      <Helmet>
        <title>Travel & Hospitality AI | LuMay Enterprise Agentic AI Platform</title>
        <meta name="description" content="Transform travel and hospitality with LuMay's AI agents. Deliver exceptional guest experiences, optimize revenue, and automate operations with intelligent automation." />
        <meta name="keywords" content="travel AI, hospitality AI, hotel AI, airline AI, guest experience, revenue management, LuMay travel, booking automation" />
        <link rel="canonical" href="https://lumay-agentic-ai.42web.io/industries/travel" />
        <meta property="og:title" content="Travel & Hospitality AI | LuMay Enterprise Agentic AI Platform" />
        <meta property="og:description" content="Transform travel and hospitality with LuMay's AI agents. Deliver exceptional guest experiences and optimize revenue." />
        <meta property="og:url" content="https://lumay-agentic-ai.42web.io/industries/travel" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "LuMay Travel & Hospitality AI Solutions",
            "description": "Enterprise AI platform for travel and hospitality including guest experience automation, revenue management, and operational optimization.",
            "provider": {
              "@type": "Organization",
              "name": "LuMay",
              "url": "https://lumay-agentic-ai.42web.io"
            },
            "serviceType": "Travel AI",
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
              <Plane className="w-4 h-4" />
              Industry Solutions
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Travel & Hospitality <span className="text-gradient">AI Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Elevate guest experiences and optimize operations with LuMay's autonomous AI agents. Deliver personalized service, maximize revenue, and streamline operations across hotels, airlines, and travel companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg" asChild>
                <Link to="/contact">
                  Schedule Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg" asChild>
                <Link to="/products/smartassist">
                  Explore SmartAssist
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
              Intelligent Travel Transformation with LuMay
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                The travel and hospitality industry is defined by guest experience. In a world of digital alternatives and rising expectations, delivering exceptional, personalized service at every touchpoint is essential for success. LuMay's enterprise agentic AI platform empowers travel organizations to meet these expectations through intelligent automation that enhances rather than replaces the human touch.
              </p>
              <p>
                LuMay understands the unique dynamics of travel and hospitality. Our AI agents operate around the clock, in every language, handling the routine interactions that occupy service teams while ensuring guests receive immediate, accurate assistance. Whether it's booking a flight, modifying a hotel reservation, or navigating a travel disruption, LuMay provides the intelligent support that keeps travelers moving.
              </p>
              <p>
                Beyond guest service, LuMay brings AI intelligence to revenue optimization and operations. SmartTrends analyzes demand patterns, competitive positioning, and market dynamics to optimize pricing and maximize revenue. SmartFlow automates operational workflows from reservation processing to disruption management. The result is improved profitability alongside enhanced guest satisfaction.
              </p>
              <p>
                Travel organizations implementing LuMay typically see dramatic improvements in service efficiency and guest satisfaction. Response times decrease from hours to seconds. Booking costs decline significantly. Revenue per available room and seat improves through AI-optimized pricing. Staff can focus on high-touch interactions that create memorable experiences.
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
              AI-Powered Travel Capabilities
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              LuMay delivers comprehensive AI solutions for modern travel and hospitality operations.
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
              Measurable Travel Impact
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
              Travel & Hospitality Use Cases
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover how LuMay AI agents transform travel operations and guest experiences.
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
              The Future of Travel AI with LuMay
            </h2>
            
            <h3 className="text-foreground">Redefining Guest Experience</h3>
            <p>
              Travel is fundamentally about experience—the anticipation before a trip, the journey itself, and the memories that follow. LuMay's AI platform enhances every phase of this journey. From the first booking inquiry through post-trip engagement, our autonomous agents provide intelligent, personalized support that makes travel seamless and enjoyable. This isn't about replacing human hospitality; it's about amplifying it.
            </p>
            
            <h3 className="text-foreground">Always-On Global Support</h3>
            <p>
              Travel happens around the clock, across time zones, and in every language. LuMay SmartAssist provides the always-on support that modern travelers expect. AI agents handle booking inquiries, itinerary questions, and service requests instantly, in over 100 languages, at any hour. When guests need human assistance, they're connected to the right team member with full context, ensuring seamless handoffs.
            </p>
            
            <h3 className="text-foreground">Revenue Optimization Intelligence</h3>
            <p>
              Pricing in travel is a complex, dynamic challenge. LuMay SmartTrends brings AI-powered revenue management that optimizes pricing in real-time. Our models analyze demand patterns, competitive positioning, market events, and booking pace to recommend optimal rates. Whether you're managing hotel room inventory, airline seats, or tour packages, SmartTrends helps maximize revenue while maintaining rate integrity.
            </p>
            
            <h3 className="text-foreground">Disruption Resilience</h3>
            <p>
              When travel disruptions occur—weather delays, cancellations, overbookings—the guest experience is on the line. LuMay provides disruption management capabilities that protect both guests and operations. AI agents monitor for disruptions, automatically identify affected travelers, locate alternatives, and process rebookings. Proactive communication keeps guests informed throughout. This automation dramatically reduces the operational burden during irregular operations.
            </p>
            
            <h3 className="text-foreground">Personalization at Scale</h3>
            <p>
              The most memorable travel experiences are personalized. LuMay leverages guest data to deliver personalization at scale. AI agents understand guest preferences, loyalty status, and history to provide relevant recommendations and offers. From room upgrades to dining suggestions to activity bookings, personalization enhances revenue while delighting guests.
            </p>
            
            <h3 className="text-foreground">Operational Excellence</h3>
            <p>
              Behind great guest experiences are smooth operations. LuMay SmartFlow automates operational workflows that keep properties and airlines running efficiently. From housekeeping coordination to maintenance requests, from crew scheduling to ground operations, AI agents handle routine processes while alerting teams to issues requiring attention. This automation improves reliability while reducing operational costs.
            </p>
            
            <h3 className="text-foreground">Loyalty and Engagement</h3>
            <p>
              Loyal guests are the foundation of sustainable travel business. LuMay enhances loyalty programs through personalized engagement, targeted offers, and recognition that makes members feel valued. AI agents identify opportunities for member upgrades, point-earning promotions, and experiences that drive engagement. Analytics reveal insights into member behavior that inform program optimization.
            </p>
            
            <h3 className="text-foreground">Voice-Enabled Service</h3>
            <p>
              Many travelers prefer voice interaction, whether calling a hotel or using in-room voice assistants. LuMay SmartCall enables AI-powered voice experiences that handle common requests and inquiries naturally. Guests can make reservations, request services, and get information through conversational voice interfaces. This capability extends service reach while reducing call center costs.
            </p>
            
            <h3 className="text-foreground">Implementation Excellence</h3>
            <p>
              LuMay understands the complexity of travel technology ecosystems. Our platform integrates with major GDS systems, property management systems, airline operations systems, and distribution channels. We work closely with your technology and operations teams to ensure smooth implementation and adoption. Our travel industry expertise ensures solutions aligned with your specific operational needs.
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
              Transform Your Travel Business with AI
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Discover how LuMay's AI platform can enhance guest experiences, optimize revenue, and streamline operations across your travel organization.
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
