import { useState, useMemo } from "react";
import { Search, MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Design System: Sculptural Minimalism
 * Gallery page with searchable and filterable portfolio items
 * - Centered banner title (far left on banner)
 * - Balanced navbar with centered nav items
 * - Playfair Display serif fonts
 * - Orange accent colors
 */

export default function Gallery() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const portfolioItems = [
    {
      id: 1,
      title: "Contemporary Patio Design",
      location: "London",
      service: "resin-bound",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/vwr6BCQuPHDSND715HipyW/sandbox/2VwBh9ik0RRy3qnIEMKLnk-img-3_1770658183000_na1fn_cG9ydGZvbGlvLXBsYWNlaG9sZGVyLTE.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80",
      description: "Modern patio with geometric stone paving and minimalist plantings",
    },
    {
      id: 2,
      title: "Garden Pathway & Landscaping",
      location: "Bedfordshire",
      service: "tree-planting",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/vwr6BCQuPHDSND715HipyW/sandbox/2VwBh9ik0RRy3qnIEMKLnk-img-4_1770658174000_na1fn_cG9ydGZvbGlvLXBsYWNlaG9sZGVyLTI.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80",
      description: "Elegant natural stone pathway with architectural landscaping",
    },
    {
      id: 3,
      title: "Premium Driveway Installation",
      location: "Cambridgeshire",
      service: "resin-bound",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/vwr6BCQuPHDSND715HipyW/sandbox/2VwBh9ik0RRy3qnIEMKLnk-img-3_1770658183000_na1fn_cG9ydGZvbGlvLXBsYWNlaG9sZGVyLTE.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80",
      description: "Professional block paving driveway with premium finishes",
    },
  ];

  const services = [
    { id: "resin-bound", name: "Resin Bound" },
    { id: "artificial-grass", name: "Artificial Grass" },
    { id: "tree-planting", name: "Tree Planting" },
    { id: "water-features", name: "Water Features" },
    { id: "stonework", name: "Stonework" },
    { id: "groundwork", name: "Groundwork" },
  ];

  const locations = ["London", "Bedfordshire", "Cambridgeshire"];

  const filteredItems = useMemo(() => {
    return portfolioItems.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesService = !selectedService || item.service === selectedService;
      const matchesLocation = !selectedLocation || item.location === selectedLocation;

      return matchesSearch && matchesService && matchesLocation;
    });
  }, [searchQuery, selectedService, selectedLocation]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black border-b border-black">
        <div className="container flex items-center py-4">
          <div className="flex-1" />
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-sm text-white hover:text-amber-600 transition-colors">Home</a>
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

      {/* Banner Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Portfolio Gallery
          </h1>
          <div className="w-16 h-1 bg-amber-600" />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          {/* Search and Filters */}
          <div className="mb-12">
            <div className="relative mb-8">
              <Search className="absolute left-4 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
              />
            </div>

            {/* Service Filters */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-700 mb-3">Services</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedService(null)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    !selectedService
                      ? "bg-amber-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  All
                </button>
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedService === service.id
                        ? "bg-amber-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {service.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Location Filters */}
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3">Locations</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedLocation(null)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    !selectedLocation
                      ? "bg-amber-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  All
                </button>
                {locations.map((location) => (
                  <button
                    key={location}
                    onClick={() => setSelectedLocation(location)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedLocation === location
                        ? "bg-amber-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {location}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden bg-gray-200 aspect-square">
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
                  <p className="text-sm text-gray-600 flex items-center gap-2 mb-4">
                    <MapPin className="w-4 h-4 text-amber-600" />
                    {item.location}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">No projects found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your landscaping project and receive a free consultation.
          </p>
          <a href="/contact">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white text-base px-8 py-6">Get in Touch</Button>
          </a>
        </div>
      </section>
    </div>
  );
}
