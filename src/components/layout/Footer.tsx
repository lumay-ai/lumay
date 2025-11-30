import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  platform: [
    { name: "SmartAssist", href: "/products#smartassist" },
    { name: "SmartFlow", href: "/products#smartflow" },
    { name: "SmartSense", href: "/products#smartsense" },
    { name: "SmartTrends", href: "/products#smarttrends" },
  ],
  business: [
    { name: "SmartTranslation", href: "/products#translation" },
    { name: "SmartDynamics365", href: "/products#smartdynamics" },
    { name: "SmartCall", href: "/products#smartcall" },
  ],
  services: [
    { name: "Data & AI", href: "/services#data-ai" },
    { name: "LLM Solutions", href: "/services#llm" },
    { name: "AI Infrastructure", href: "/services#infrastructure" },
    { name: "Data Strategy", href: "/services#strategy" },
    { name: "Low-Code Platform", href: "/services#lowcode" },
    { name: "Customer Experience", href: "/services#cx" },
  ],
  company: [
    { name: "About LuMay", href: "/about" },
    { name: "Technology Partners", href: "/about#partners" },
    { name: "Success Stories", href: "/about#stories" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="font-display font-bold text-primary-foreground text-xl">L</span>
              </div>
              <span className="font-display font-bold text-xl text-foreground">LuMay.ai</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Where Innovation Meets Intelligence. Enterprise Agentic AI Platform for Intelligent Workflow Automation.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+13108101745"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +1 (310) 810-1745
              </a>
              <a
                href="mailto:info@lumay.ai"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@lumay.ai
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Lumay INC, 8 The Green #20160,<br />Dover, DE 19901, United States.</span>
              </div>
            </div>
          </div>

          {/* Smart AI Platform */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Smart AI Platform</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Agentic AI */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Business Agentic AI</h4>
            <ul className="space-y-3">
              {footerLinks.business.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} LuMay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
