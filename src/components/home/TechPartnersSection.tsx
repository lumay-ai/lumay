import nvidiaLogo from "@/assets/partners/nvidia.webp";
import microsoftLogo from "@/assets/partners/microsoft.webp";

const partners = [
  { name: "NVIDIA", logo: nvidiaLogo },
  { name: "Microsoft", logo: microsoftLogo },
];

export function TechPartnersSection() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Our Technology Partners
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Powered by industry-leading technology partnerships to deliver enterprise-grade AI solutions.
          </p>
        </div>
        
        <div className="flex items-center justify-center gap-12 sm:gap-16 lg:gap-24 flex-wrap">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex items-center justify-center p-6 rounded-xl transition-all duration-300 hover:bg-background/50"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-10 sm:h-12 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
