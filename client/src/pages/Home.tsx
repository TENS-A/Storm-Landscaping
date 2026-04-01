import { Button } from "@/components/ui/button";
import { Link } from "wouter";

/**
 * Design System: Sculptural Minimalism
 * Home page with centered STORM branding
 * - Playfair Display serif fonts
 * - Orange accent colors (amber-600)
 * - Black and white hero image with parallax
 * - 2-column portfolio grid
 */

export default function Home() {
  const services = [
    { name: "Resin Bound Surfaces", desc: "Durable, permeable resin driveways and patios. Perfect for London, Bedfordshire, and Cambridgeshire properties." },
    { name: "Artificial Grass Specialists", desc: "Low-maintenance artificial turf installation. Year-round green spaces without the upkeep." },
    { name: "Tree Planting & Soft Planting", desc: "Strategic planting design for shade, privacy, and year-round interest. Native and ornamental species." },
    { name: "Water Courses, Ponds & Lakes", desc: "Bespoke water features and pond construction. Enhance your landscape with professional water design." },
    { name: "Specialist Stonework", desc: "Precision stonework for walls, features, and hardscaping. Timeless materials, expert craftsmanship." },
    { name: "Groundwork & Specialists", desc: "Land drainage, retaining walls, and site preparation. Professional groundworks for residential projects." },
  ];

  const portfolioItems = [
    {
      title: "Contemporary Patio Design",
      location: "London",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop",
    },
    {
      title: "Garden Pathway & Landscaping",
      location: "Bedfordshire",
      image: "https://images.unsplash.com/photo-1585314062340-f4863cd63cb8?w=600&h=600&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black border-b border-black">
        <div className="container flex items-center py-4">
          <div className="flex-1" />
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm text-white hover:text-amber-600 transition-colors">Services</a>
            <a href="/gallery" className="text-sm text-white hover:text-amber-600 transition-colors">Gallery</a>
            <a href="/contact" className="text-sm text-white hover:text-amber-600 transition-colors">Contact</a>
          </div>
          <div className="flex-1 flex justify-end">
            <a href="/contact">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white text-sm">Get Quote</Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Parallax Background */}
      <section className="relative bg-black overflow-hidden">
        {/* Fixed parallax background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://files.manuscdn.com/user_upload_by_module/session_file/310519663222859436/WDZRcMHrCrscEciJ.webp')",
            backgroundAttachment: "fixed",
            height: "100vh",
          }}
        />
        
        {/* Scrolling content with semi-transparent background */}
        <div className="relative z-10 min-h-screen flex items-center justify-center bg-black/40">
          <div className="text-center text-white px-6 max-w-3xl">
            <div className="flex flex-col items-center mb-4">
              <h1 className="text-6xl md:text-7xl font-bold tracking-wider" style={{ fontFamily: "'Playfair Display', serif", textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}>STORM</h1>
              <div className="h-1 bg-white mt-4 mb-4" style={{width: '320px'}} />
            </div>
            <p className="text-xl md:text-2xl font-light text-white mb-8" style={{ fontFamily: "'Playfair Display', serif", textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}>The Art of Landscaping</p>
            <p className="text-lg md:text-xl text-white mb-8 leading-relaxed" style={{ textShadow: "0 2px 6px rgba(0,0,0,0.6)" }}>
              Bespoke landscaping and building services for domestic and premium residential clients across London, Bedfordshire, and Cambridgeshire.
            </p>
            <p className="text-lg text-white mb-6" style={{ textShadow: "0 2px 6px rgba(0,0,0,0.6)" }}>
              Professional Landscapers and Horticulturists
            </p>
            <p className="text-lg text-white mb-12" style={{ textShadow: "0 2px 6px rgba(0,0,0,0.6)" }}>
              Dream, design, deliver.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="/contact">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white text-base px-8 py-6">Request a Quote</Button>
              </a>
              <a href="/gallery">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white text-base px-8 py-6">
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
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Our Services</h2>
          <div className="w-16 h-1 bg-amber-600 mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.name} className="p-8 border border-gray-200 rounded-lg hover:border-amber-600 transition-colors">
                <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {service.name}
                </h3>
                <p className="text-gray-600">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Recent Projects</h2>
          <div className="w-16 h-1 bg-amber-600 mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {portfolioItems.map((item) => (
              <div key={item.title} className="group overflow-hidden rounded-lg">
                <div className="relative aspect-square overflow-hidden bg-gray-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="bg-white p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 flex items-center gap-2">
                    <span>📍</span> {item.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="/gallery">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white text-base px-8 py-3">
                View Full Gallery
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>Get in Touch</h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to transform your outdoor space? Contact us today for a free consultation.
            </p>
            <a href="/contact">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white text-base px-8 py-3">
                Send Inquiry
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
