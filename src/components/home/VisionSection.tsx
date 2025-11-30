import { Gem, Award, Rocket } from "lucide-react";
import { ParallaxIcons } from "@/components/shared/ParallaxIcons";

const visionItems = [
  {
    icon: Gem,
    title: "Essence",
    description: "We exist to build AI-native systems that create measurable impact. Our essence lies in turning intelligence into action — and strategy into outcomes that evolve with your business.",
  },
  {
    icon: Award,
    title: "Expertise",
    description: "LuMay's strength comes from multidisciplinary expertise — spanning engineering, AI, automation, and experience design. Our teams don't just implement; they enable, mentor, and elevate.",
  },
  {
    icon: Rocket,
    title: "Execution",
    description: "We deliver through a modular, agile, and outcome-led execution model — ensuring scalable transformation from pilot to enterprise rollout, with speed, clarity, and governance.",
  },
];

export function VisionSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/20 to-background relative overflow-hidden">
      <ParallaxIcons sectionOffset={2400} density="low" direction="down" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Vision & Approach</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-foreground">
            The LuMay Way
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Our team is built with a strong background in Software and Services, united by a shared sense of purpose.
          </p>
        </div>

        {/* Vision Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {visionItems.map((item, index) => (
            <div
              key={item.title}
              className="text-center p-8 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-16 card-gradient rounded-2xl p-8 md:p-12 border border-border text-center">
          <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-4xl mx-auto">
            At LuMay, we help enterprises build intelligent, scalable, and ethical digital ecosystems. 
            With expertise in AI, automation, and software engineering, we design solutions that turn 
            data into action and technology into lasting impact.
          </p>
        </div>
      </div>
    </section>
  );
}
