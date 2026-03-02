import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import { useState } from "react";

/**
 * Design System: Sculptural Minimalism with Dark Hero
 * - Full-bleed hero image with dark overlay
 * - White text on dark background for hero section
 * - Transparent navigation bar overlaying hero
 * - Monochromatic palette (black, white, stone gray) with warm ochre accents
 * - Playfair Display serif for headings, Lato sans-serif for body
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
    <div className="min-h-screen bg-black">
      {/* Hero Section with Full-Bleed Image */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/storm-landscaping-hero.jpeg"
            alt="Storm Landscaping - Garden Design"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Navigation - Transparent */}
        <nav className="absolute top-0 left-0 right-0 z-50">
          <div className="container flex items-center justify-between py-6">
            <div />
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm text-white hover:text-amber-300 transition-colors">Services</a>
              <a href="/gallery" className="text-sm text-white hover:text-amber-300 transition-colors">Gallery</a>
              <a href="/contact" className="text-sm text-white hover:text-amber-300 transition-colors">Contact</a>
            </div>
            <a href="/contact">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white text-sm">Get Quote</Button>
            </a>
          </div>
        </nav>



        {/* Hero Content - Far Left */}
        <div className="absolute inset-0 flex items-center z-10">
          <div className="text-white px-6 md:px-12 max-w-2xl">
            <div className="flex flex-col items-start">
              <h1 className="text-6xl md:text-7xl font-bold tracking-wider">STORM</h1>
              <div className="h-1 bg-white mb-2" style={{width: '320px'}} />
            </div>
            <p className="text-xl md:text-2xl font-light text-white mb-12">The Art of Landscaping</p>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Bespoke landscaping and building services for domestic and premium residential clients across London, Bedfordshire, and Cambridgeshire.
            </p>
            <p className="text-lg text-white/80 mb-12">
              We combine quality craftsmanship with attention to detail to create outdoor spaces that endure.
            </p>
            <div className="flex gap-4">
              <a href="/contact">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white text-base px-8 py-6">Request a Quote</Button>
              </a>
              <a href="/gallery">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 text-base px-8 py-6">
                  View Portfolio
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <div className="w-16 h-1 bg-amber-600" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group cursor-pointer p-8 border border-gray-200 hover:border-amber-600 hover:shadow-lg transition-all duration-300"
                onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center text-amber-600 text-sm font-medium group-hover:gap-2 transition-all">
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Recent Projects
            </h2>
            <div className="w-16 h-1 bg-amber-600" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className={`group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {item.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href="/gallery">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white text-base px-8 py-6">View Full Gallery</Button>
            </a>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-3">20+</div>
              <p className="text-gray-600">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-3">500+</div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-3">100%</div>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-gray-50">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Ready to transform your outdoor space? Contact us today for a free consultation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Phone className="w-8 h-8 text-amber-600 mx-auto mb-4" />
                <p className="text-sm text-gray-600 mb-2">Phone</p>
                <p className="font-semibold text-gray-900">+44 (0) 123 456 7890</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-amber-600 mx-auto mb-4" />
                <p className="text-sm text-gray-600 mb-2">Email</p>
                <p className="font-semibold text-gray-900">hello@stormlandscaping.co.uk</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-amber-600 mx-auto mb-4" />
                <p className="text-sm text-gray-600 mb-2">Service Areas</p>
                <p className="font-semibold text-gray-900">London, Bedfordshire, Cambridgeshire</p>
              </div>
            </div>

            <a href="/contact" className="block">
              <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white text-base py-6">
                Send Inquiry
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
