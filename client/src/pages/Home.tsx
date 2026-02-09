import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import { useState } from "react";

/**
 * Design System: Sculptural Minimalism
 * - Monochromatic palette (black, white, stone gray) with warm ochre accents
 * - Playfair Display serif for headings, Lato sans-serif for body
 * - Generous whitespace, asymmetric layouts, subtle shadows
 * - Gallery-inspired masonry layout for portfolio images
 */

export default function Home() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      id: "patios",
      name: "Patios & Terraces",
      description: "Bespoke patio design and installation using premium materials. From intimate garden spaces to expansive entertaining areas, we create outdoor rooms that extend your home.",
      icon: "🏛️",
    },
    {
      id: "driveways",
      name: "Driveways & Pathways",
      description: "Professional driveway installation and repair. We work with natural stone, block paving, and asphalt to create durable, beautiful entry points to your property.",
      icon: "🛣️",
    },
    {
      id: "fencing",
      name: "Fencing & Boundaries",
      description: "Custom fencing solutions that combine privacy, security, and aesthetic appeal. From contemporary screens to traditional timber fencing, we deliver quality craftsmanship.",
      icon: "🌳",
    },
    {
      id: "landscaping",
      name: "Garden Landscaping",
      description: "Complete garden transformation and design. We handle grading, planting, water features, and hardscaping to create cohesive outdoor environments.",
      icon: "🌿",
    },
    {
      id: "extensions",
      name: "Brickwork & Extensions",
      description: "Expert brickwork for extensions, walls, and structural features. Quality masonry that stands the test of time with attention to detail and craftsmanship.",
      icon: "🧱",
    },
    {
      id: "maintenance",
      name: "Garden Maintenance",
      description: "Ongoing care and maintenance to keep your garden looking its best. Regular services tailored to your property's needs and seasonal requirements.",
      icon: "✨",
    },
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Contemporary Patio Design",
      location: "London",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/vwr6BCQuPHDSND715HipyW/sandbox/2VwBh9ik0RRy3qnIEMKLnk-img-3_1770658183000_na1fn_cG9ydGZvbGlvLXBsYWNlaG9sZGVyLTE.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdndyNkJDUXVQSERTTkQ3MTVIaXB5Vy9zYW5kYm94LzJWd0JoOWlrMFJSeTNxbklFTUtMbmstaW1nLTNfMTc3MDY1ODE4MzAwMF9uYTFmbl9jRzl5ZEdadmJHbHZMWEJzWVdObGFHOXNaR1Z5TFRFLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=wE2H5NwNPGuQG85wBrmxZKYzWHob8qiDrgOazTR~30i9Q8Z~4W4Lp5kyMoAUrjHg6xsY9Ry~bus7jazFw6iQa57nCzLtoqLJ8OnaVi-Z58UzNZ5QExJPe4ERqA3sYh6cFjsQ52Jttrf-3IV3up3wkINJY1AtBgk~rwfj1U9JIA8c0DmFbipFL57iTsrTN-0mSM~dilDackXZ9TEvr73eXbUyn0uCMEbg7Q9dVkdIXISqJi-rgDLM1h9cwobxPipJxGpzzJJbEJZPCpCaXxzQt5joYQypKXYOMhxXd3oLhdg0CF6vg4yPm547clXU1IUun9D0lfgLqgxzif~mbJVG1Q__",
      aspect: "square",
    },
    {
      id: 2,
      title: "Garden Pathway & Landscaping",
      location: "Bedfordshire",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/vwr6BCQuPHDSND715HipyW/sandbox/2VwBh9ik0RRy3qnIEMKLnk-img-4_1770658174000_na1fn_cG9ydGZvbGlvLXBsYWNlaG9sZGVyLTI.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdndyNkJDUXVQSERTTkQ3MTVIaXB5Vy9zYW5kYm94LzJWd0JoOWlrMFJSeTNxbklFTUtMbmstaW1nLTRfMTc3MDY1ODE3NDAwMF9uYTFmbl9jRzl5ZEdadmJHbHZMWEJzWVdObGFHOXNaR1Z5TFRJLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=HJedAsjQ7-iF85Wo7Iobry0twEuxp2Cu118XArVv9f9X~QGKYOykAmRRCtUinAwS7FJQzWM48Vgt-305AV~oCFTnQ1gOdtIsP82-Z30rWUv8JOee1zPsxfHMhS4B5zbgOwxfRWF3D3yD671~cqPItv6SYbOaROkbX7zzWummgLM8-qx5dzkVpsaTALiUBB7E1YfYiQXWKRRWor~go8OhPStqgaATU5Ci6OjS13-XdJdvAPy9nyMyiS1OVfANeTTjB1ehxNkkPAN-tlC6svLstPOP5vrO6ESsp56ptv8OoV0IAd0pL1iBgtAsKmg-fj8Uz4IhmDAqieXyr6DWGeqeDQ__",
      aspect: "landscape",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-foreground">Storm</div>
            <div className="text-sm text-muted-foreground">The Art of Landscaping</div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm text-foreground hover:text-accent transition-colors">Services</a>
            <a href="/gallery" className="text-sm text-foreground hover:text-accent transition-colors">Gallery</a>
            <a href="/contact" className="text-sm text-foreground hover:text-accent transition-colors">Contact</a>
          </div>
          <a href="/contact">
            <Button className="btn-accent text-sm">Get Quote</Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center min-h-screen">
          {/* Left: Text Content */}
          <div className="p-8 md:p-16 flex flex-col justify-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              The Art of Landscaping
            </h1>
            <p className="font-body text-lg text-foreground/80 mb-8 max-w-md leading-relaxed">
              Bespoke landscaping and building services for domestic and premium residential clients across London, Bedfordshire, and Cambridgeshire.
            </p>
            <p className="font-body text-base text-foreground/70 mb-12 max-w-md">
              We combine quality craftsmanship with attention to detail to create outdoor spaces that endure.
            </p>
            <div className="flex gap-4">
              <Button className="btn-accent">Request a Quote</Button>
              <Button variant="outline" className="border-foreground text-foreground hover:bg-foreground/5">
                View Portfolio
              </Button>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="relative h-full min-h-screen bg-gray-100 overflow-hidden">
            <img
              src="/storm-landscaping-hero.jpeg"
              alt="Storm Landscaping - Garden Design"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h2>
            <div className="w-16 h-1 bg-accent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group cursor-pointer p-8 border border-gray-200 hover:border-accent hover:shadow-lg transition-all duration-300"
                onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {service.name}
                </h3>
                <p className="font-body text-sm text-foreground/70 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center text-accent text-sm font-medium group-hover:gap-2 transition-all">
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 md:py-32 bg-gray-50">
        <div className="container">
          <div className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Recent Projects
            </h2>
            <div className="w-16 h-1 bg-accent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className={`group overflow-hidden shadow-gallery hover:shadow-xl transition-all duration-300 ${
                  item.aspect === "landscape" ? "md:col-span-2" : ""
                }`}
              >
                <div className="relative overflow-hidden bg-gray-200 aspect-square md:aspect-video">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-foreground/60 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {item.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

            <div className="mt-12 text-center">
            <a href="/gallery">
              <Button className="btn-accent">View Full Gallery</Button>
            </a>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-3">20+</div>
              <p className="font-body text-foreground/70">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-3">500+</div>
              <p className="font-body text-foreground/70">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-3">100%</div>
              <p className="font-body text-foreground/70">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-gray-50">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
              Get in Touch
            </h2>
            <p className="font-body text-lg text-foreground/70 text-center mb-12">
              Ready to transform your outdoor space? Contact us today for a free consultation and quote.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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
              <div className="text-center">
                <MapPin className="w-8 h-8 text-accent mx-auto mb-4" />
                <p className="font-body font-medium text-foreground mb-2">Service Areas</p>
                <p className="font-body text-foreground/70">London, Bedfordshire, Cambridgeshire</p>
              </div>
            </div>

            <form className="space-y-6 bg-white p-8 border border-gray-200">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-accent focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-accent focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-accent focus:outline-none transition-colors"
                  placeholder="Tell us about your project..."
                />
              </div>
              <Button className="w-full btn-accent">Send Message</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-display font-bold mb-4">Storm Landscaping</h4>
              <p className="font-body text-sm text-white/70">The Art of Landscaping</p>
            </div>
            <div>
              <h5 className="font-body font-medium text-sm mb-4">Services</h5>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Patios</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Driveways</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fencing</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-body font-medium text-sm mb-4">Company</h5>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gallery</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-body font-medium text-sm mb-4">Contact</h5>
              <p className="font-body text-sm text-white/70">+44 (0) 123 456 7890</p>
              <p className="font-body text-sm text-white/70">hello@stormlandscaping.co.uk</p>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="font-body text-sm text-white/60">
              © 2026 Storm Landscaping. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
