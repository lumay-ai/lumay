import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
export default function Contact() {
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const company = formData.get('company');
    const phone = formData.get('phone');
    const interest = formData.get('interest');
    const message = formData.get('message');

    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact Request from ${firstName} ${lastName} - ${company}`);
    const body = encodeURIComponent(
      `Name: ${firstName} ${lastName}\n` +
      `Email: ${email}\n` +
      `Company: ${company}\n` +
      `Phone: ${phone || 'Not provided'}\n` +
      `Area of Interest: ${interest}\n\n` +
      `Message:\n${message}`
    );
    
    window.location.href = `mailto:sales@lumay.ai?subject=${subject}&body=${body}`;
    
    toast({
      title: "Opening email client...",
      description: "Your default email application will open with the message."
    });
    setIsSubmitting(false);
  };
  return <Layout>
      <Helmet>
        <title>Contact LuMay - Request Demo & Get in Touch</title>
        <meta name="description" content="Contact LuMay for AI solutions and enterprise automation. Request a demo, get pricing, or speak with our experts. Phone: +1 (310) 810-1745" />
        <meta name="keywords" content="contact LuMay, request demo, AI consultation, enterprise AI pricing" />
        <link rel="canonical" href="https://lumay.ai/contact" />
      </Helmet>

      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Contact</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-foreground">
              Let's Talk
            </h1>
            <p className="text-lg text-muted-foreground">
              Ready to transform your business with AI? Get in touch with our team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card-gradient rounded-2xl p-8 border border-border">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Request Info & Demo
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" name="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" name="lastName" placeholder="Doe" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Work Email</Label>
                  <Input id="email" name="email" type="email" placeholder="john@company.com" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" name="company" placeholder="Your Company" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone (Optional)</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="interest">Area of Interest</Label>
                  <select id="interest" name="interest" className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" required>
                    <option value="">Select an option</option>
                    <option value="SmartAssist">SmartAssist</option>
                    <option value="SmartFlow">SmartFlow</option>
                    <option value="SmartSense">SmartSense</option>
                    <option value="SmartTrends">SmartTrends</option>
                    <option value="SmartDynamics365">SmartDynamics365</option>
                    <option value="SmartCompliance">SmartOCG Compliance</option>
                    <option value="SmartCall">SmartCall</option>
                    <option value="SmartTranslation">SmartTranslation</option>
                    <option value="Consulting Services">Consulting Services</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Tell us about your project and goals..." className="min-h-[120px]" required />
                </div>
                
                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground mb-8">
                  Our team is here to help. Reach out through any of the channels below, 
                  or fill out the form and we'll get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <a href="tel:+13108101745" className="text-muted-foreground hover:text-primary transition-colors">
                      +1 (310) 810-1745
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a className="text-muted-foreground hover:text-primary transition-colors" href="mailto:sales@lumay.ai">
                      sales@lumay.ai
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      Lumay INC, 8 The Green #20160,<br />
                      Dover, DE 19901, United States.
                    </p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="aspect-video rounded-2xl card-gradient border border-border flex items-center justify-center">
                <MapPin className="w-16 h-16 text-primary/20" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
}