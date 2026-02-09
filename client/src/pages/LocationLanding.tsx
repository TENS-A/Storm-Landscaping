import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";

/**
 * Design System: Sculptural Minimalism
 * Location-specific landing pages for SEO and local targeting
 */

const locationData: Record<string, any> = {
  london: {
    name: "London",
    title: "Professional Landscaping Services in London",
    description: "Bespoke landscaping and building services for London homeowners. From contemporary patios to elegant garden transformations, we deliver quality craftsmanship.",
    areas: ["Central London", "North London", "South London", "East London", "West London"],
    services: ["Patios & Terraces", "Driveways", "Fencing", "Garden Landscaping", "Brickwork"],
    stats: {
      projects: "150+",
      experience: "20+ years",
      clients: "Satisfied homeowners across London",
    },
  },
  bedfordshire: {
    name: "Bedfordshire",
    title: "Expert Landscaping Services in Bedfordshire",
    description: "Trusted landscaping and building services throughout Bedfordshire. We specialize in creating beautiful outdoor spaces for domestic and premium residential clients.",
    areas: ["Bedford", "Luton", "Dunstable", "Leighton Buzzard", "Ampthill"],
    services: ["Patios & Terraces", "Driveways", "Fencing", "Garden Landscaping", "Maintenance"],
    stats: {
      projects: "120+",
      experience: "20+ years",
      clients: "Trusted by Bedfordshire families",
    },
  },
  cambridgeshire: {
    name: "Cambridgeshire",
    title: "Quality Landscaping Services in Cambridgeshire",
    description: "Professional landscaping and building services in Cambridgeshire. We combine traditional craftsmanship with modern design to create timeless outdoor spaces.",
    areas: ["Cambridge", "Peterborough", "Huntingdon", "Ely", "Wisbech"],
    services: ["Patios & Terraces", "Driveways", "Fencing", "Garden Landscaping", "Brickwork"],
    stats: {
      projects: "100+",
      experience: "20+ years",
      clients: "Premium residential clients",
    },
  },
};

export default function LocationLanding() {
  const [location] = useLocation();
  const locationKey = location.split("/").pop()?.toLowerCase() || "london";
  const data = locationData[locationKey] || locationData.london;

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-foreground">Storm</div>
            <div className="text-sm text-muted-foreground">The Art of Landscaping</div>
          </div>
          <Button className="btn-accent text-sm">Get Quote</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="w-5 h-5 text-accent" />
              <span className="font-body text-sm font-medium text-accent">Service Area</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              {data.title}
            </h1>
            <p className="font-body text-lg text-foreground/70 mb-8 leading-relaxed">
              {data.description}
            </p>
            <Button className="btn-accent">Request Free Consultation</Button>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
            Areas We Serve in {data.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.areas.map((area: string, idx: number) => (
              <div key={idx} className="p-6 border border-gray-200 hover:border-accent hover:shadow-md transition-all">
                <MapPin className="w-5 h-5 text-accent mb-3" />
                <h3 className="font-display text-lg font-bold text-foreground">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
            Services in {data.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.services.map((service: string, idx: number) => (
              <div key={idx} className="p-8 bg-white border border-gray-200 hover:shadow-md transition-all">
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{service}</h3>
                <p className="font-body text-foreground/70">
                  Professional {service.toLowerCase()} services tailored to {data.name} homeowners.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
            Why Choose Storm Landscaping in {data.name}?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-4">{data.stats.projects}</div>
              <p className="font-body text-foreground/70">{data.stats.projects} projects completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-4">{data.stats.experience}</div>
              <p className="font-body text-foreground/70">of professional experience</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-4">✓</div>
              <p className="font-body text-foreground/70">{data.stats.clients}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How much does a landscaping project cost in " + data.name + "?",
                a: "Costs vary depending on project scope, materials, and complexity. We provide free quotes tailored to your specific needs and budget.",
              },
              {
                q: "How long does a typical project take?",
                a: "Project timelines depend on size and complexity. Small projects may take 1-2 weeks, while larger transformations can take several months.",
              },
              {
                q: "Do you handle planning permissions?",
                a: "We advise on planning requirements and can guide you through the process, though we recommend consulting local authorities for specific projects.",
              },
              {
                q: "Are you fully insured?",
                a: "Yes, we carry full public liability insurance and all necessary certifications for professional landscaping work.",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-white border border-gray-200">
                <h3 className="font-display font-bold text-foreground mb-3">{item.q}</h3>
                <p className="font-body text-foreground/70">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="text-center">
              <Phone className="w-8 h-8 text-accent mx-auto mb-4" />
              <p className="font-body font-medium text-foreground mb-2">Phone</p>
              <p className="font-body text-foreground/70">+44 (0) 123 456 7890</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-accent mx-auto mb-4" />
              <p className="font-body font-medium text-foreground mb-2">Email</p>
              <p className="font-body text-foreground/70">hello@stormlandscaping.co.uk</p>
            </div>
          </div>
          <Button className="w-full btn-accent">Request Free Quote for {data.name}</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container text-center">
          <p className="font-body text-sm text-white/60">
            © 2026 Storm Landscaping. Professional landscaping services across London, Bedfordshire, and Cambridgeshire.
          </p>
        </div>
      </footer>
    </div>
  );
}
