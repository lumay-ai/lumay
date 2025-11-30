import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What products does LuMay offer?",
    answer: "LuMay offers a comprehensive suite of AI-powered products including SmartAssist (AI virtual assistant), SmartFlow (low-code orchestration), SmartSense (anomaly detection), SmartTrends (predictive analytics), SmartDynamics365 (business automation), SmartOCG Compliance (risk management), and SmartCall (AI voice agent)."
  },
  {
    question: "How can LuMay improve business operations?",
    answer: "LuMay improves business operations through intelligent automation, data-driven insights, and AI-powered decision making. Our solutions reduce manual tasks by up to 85%, enhance customer experiences, ensure compliance, and provide real-time analytics for informed strategic decisions."
  },
  {
    question: "What services does LuMay provide?",
    answer: "We provide Data & AI services, Cybersecurity solutions, Low-Code/No-Code platform development, and Customer Experience transformation. Each service is tailored to your industry needs and organizational goals."
  },
  {
    question: "How does LuMay approach AI implementation?",
    answer: "We follow the LuMay Way - a structured approach combining Essence (measurable impact), Expertise (multidisciplinary teams), and Execution (modular, agile delivery). We start with pilot programs and scale to enterprise-wide deployments with full governance."
  },
  {
    question: "What is the LuMay Way?",
    answer: "The LuMay Way is our unique approach to digital transformation. It focuses on building intelligent, scalable, and ethical digital ecosystems. We combine AI, automation, and software engineering expertise to turn data into action and technology into lasting business impact."
  },
  {
    question: "How does LuMay ensure data security and compliance?",
    answer: "Security and compliance are built into every solution. We implement enterprise-grade security protocols, follow industry regulations (GDPR, HIPAA, SOC2), and provide transparent AI governance. Our SmartOCG Compliance product specifically addresses regulatory requirements."
  },
  {
    question: "What is SmartAssist and how can it help?",
    answer: "SmartAssist is an AI-native virtual assistant that connects to all your internal tools, knowledge bases, and repositories. It instantly answers questions, solves problems, and executes workflows using your company's data - delivering accurate, context-rich responses at scale."
  },
  {
    question: "What is SmartFlow and who can use it?",
    answer: "SmartFlow is a low-code/no-code orchestration platform that enables anyone - from business analysts to IT teams - to build and automate complex workflows without extensive coding. It accelerates digital transformation and reduces development time significantly."
  },
  {
    question: "Which industries does LuMay serve?",
    answer: "LuMay serves multiple industries including Healthcare & Life Sciences, Finance, eCommerce, ESG & Sustainability, and enterprises using Microsoft Dynamics 365. Our solutions are customized to address industry-specific challenges and compliance requirements."
  },
  {
    question: "Can LuMay solutions scale with growing organizations?",
    answer: "Absolutely. Our modular platform architecture is designed for scalability. We start with focused pilot implementations and seamlessly scale to enterprise-wide deployments as your organization grows, ensuring consistent performance and governance at every stage."
  },
];

export function FAQSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about LuMay's AI-powered solutions and services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-gradient rounded-xl border border-border px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
