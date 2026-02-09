import { useState, useMemo } from "react";
import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Design System: Sculptural Minimalism
 * Gallery page with searchable and filterable portfolio items
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
      service: "patios",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/vwr6BCQuPHDSND715HipyW/sandbox/2VwBh9ik0RRy3qnIEMKLnk-img-3_1770658183000_na1fn_cG9ydGZvbGlvLXBsYWNlaG9sZGVyLTE.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdndyNkJDUXVQSERTTkQ3MTVIaXB5Vy9zYW5kYm94LzJWd0JoOWlrMFJSeTNxbklFTUtMbmstaW1nLTNfMTc3MDY1ODE4MzAwMF9uYTFmbl9jRzl5ZEdadmJHbHZMWEJzWVdObGFHOXNaR1Z5TFRFLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=wE2H5NwNPGuQG85wBrmxZKYzWHob8qiDrgOazTR~30i9Q8Z~4W4Lp5kyMoAUrjHg6xsY9Ry~bus7jazFw6iQa57nCzLtoqLJ8OnaVi-Z58UzNZ5QExJPe4ERqA3sYh6cFjsQ52Jttrf-3IV3up3wkINJY1AtBgk~rwfj1U9JIA8c0DmFbipFL57iTsrTN-0mSM~dilDackXZ9TEvr73eXbUyn0uCMEbg7Q9dVkdIXISqJi-rgDLM1h9cwobxPipJxGpzzJJbEJZPCpCaXxzQt5joYQypKXYOMhxXd3oLhdg0CF6vg4yPm547clXU1IUun9D0lfgLqgxzif~mbJVG1Q__",
      description: "Modern patio with geometric stone paving and minimalist plantings",
    },
    {
      id: 2,
      title: "Garden Pathway & Landscaping",
      location: "Bedfordshire",
      service: "landscaping",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/vwr6BCQuPHDSND715HipyW/sandbox/2VwBh9ik0RRy3qnIEMKLnk-img-4_1770658174000_na1fn_cG9ydGZvbGlvLXBsYWNlaG9sZGVyLTI.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdndyNkJDUXVQSERTTkQ3MTVIaXB5Vy9zYW5kYm94LzJWd0JoOWlrMFJSeTNxbklFTUtMbmstaW1nLTRfMTc3MDY1ODE3NDAwMF9uYTFmbl9jRzl5ZEdadmJHbHZMWEJzWVdObGFHOXNaR1Z5TFRJLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=HJedAsjQ7-iF85Wo7Iobry0twEuxp2Cu118XArVv9f9X~QGKYOykAmRRCtUinAwS7FJQzWM48Vgt-305AV~oCFTnQ1gOdtIsP82-Z30rWUv8JOee1zPsxfHMhS4B5zbgOwxfRWF3D3yD671~cqPItv6SYbOaROkbX7zzWummgLM8-qx5dzkVpsaTALiUBB7E1YfYiQXWKRRWor~go8OhPStqgaATU5Ci6OjS13-XdJdvAPy9nyMyiS1OVfANeTTjB1ehxNkkPAN-tlC6svLstPOP5vrO6ESsp56ptv8OoV0IAd0pL1iBgtAsKmg-fj8Uz4IhmDAqieXyr6DWGeqeDQ__",
      description: "Elegant natural stone pathway with architectural landscaping",
    },
    {
      id: 3,
      title: "Premium Driveway Installation",
      location: "Cambridgeshire",
      service: "driveways",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/vwr6BCQuPHDSND715HipyW/sandbox/2VwBh9ik0RRy3qnIEMKLnk-img-3_1770658183000_na1fn_cG9ydGZvbGlvLXBsYWNlaG9sZGVyLTE.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdndyNkJDUXVQSERTTkQ3MTVIaXB5Vy9zYW5kYm94LzJWd0JoOWlrMFJSeTNxbklFTUtMbmstaW1nLTNfMTc3MDY1ODE4MzAwMF9uYTFmbl9jRzl5ZEdadmJHbHZMWEJzWVdObGFHOXNaR1Z5TFRFLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=wE2H5NwNPGuQG85wBrmxZKYzWHob8qiDrgOazTR~30i9Q8Z~4W4Lp5kyMoAUrjHg6xsY9Ry~bus7jazFw6iQa57nCzLtoqLJ8OnaVi-Z58UzNZ5QExJPe4ERqA3sYh6cFjsQ52Jttrf-3IV3up3wkINJY1AtBgk~rwfj1U9JIA8c0DmFbipFL57iTsrTN-0mSM~dilDackXZ9TEvr73eXbUyn0uCMEbg7Q9dVkdIXISqJi-rgDLM1h9cwobxPipJxGpzzJJbEJZPCpCaXxzQt5joYQypKXYOMhxXd3oLhdg0CF6vg4yPm547clXU1IUun9D0lfgLqgxzif~mbJVG1Q__",
      description: "Professional block paving driveway with premium finishes",
    },
  ];

  const services = [
    { id: "patios", name: "Patios" },
    { id: "driveways", name: "Driveways" },
    { id: "fencing", name: "Fencing" },
    { id: "landscaping", name: "Landscaping" },
    { id: "extensions", name: "Extensions" },
    { id: "maintenance", name: "Maintenance" },
  ];

  const locations = [
    "London",
    "Bedfordshire",
    "Cambridgeshire",
  ];

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
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-foreground">Storm</div>
            <div className="text-sm text-muted-foreground">The Art of Landscaping</div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-sm text-foreground hover:text-accent transition-colors">Home</a>
            <a href="#gallery" className="text-sm text-foreground hover:text-accent transition-colors">Gallery</a>
            <a href="#contact" className="text-sm text-foreground hover:text-accent transition-colors">Contact</a>
          </div>
          <Button className="btn-accent text-sm">Get Quote</Button>
        </div>
      </nav>

      {/* Page Header */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Portfolio Gallery
          </h1>
          <p className="font-body text-lg text-foreground/70 max-w-2xl">
            Explore our recent projects showcasing quality craftsmanship and attention to detail across all service areas.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 focus:border-accent focus:outline-none transition-colors text-foreground placeholder-muted-foreground"
              />
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="space-y-4">
            <div>
              <p className="font-body text-sm font-medium text-foreground mb-3">Service Type</p>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedService === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedService(null)}
                  className="font-body text-sm"
                >
                  All Services
                </Button>
                {services.map((service) => (
                  <Button
                    key={service.id}
                    variant={selectedService === service.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedService(service.id)}
                    className="font-body text-sm"
                  >
                    {service.name}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <p className="font-body text-sm font-medium text-foreground mb-3">Location</p>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedLocation === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedLocation(null)}
                  className="font-body text-sm"
                >
                  All Locations
                </Button>
                {locations.map((location) => (
                  <Button
                    key={location}
                    variant={selectedLocation === location ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedLocation(location)}
                    className="font-body text-sm"
                  >
                    {location}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section id="gallery" className="py-16 md:py-24 bg-white">
        <div className="container">
          {filteredItems.length > 0 ? (
            <>
              <p className="font-body text-sm text-muted-foreground mb-8">
                Showing {filteredItems.length} project{filteredItems.length !== 1 ? "s" : ""}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="group overflow-hidden shadow-gallery hover:shadow-xl transition-all duration-300"
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
                      <h3 className="font-display text-lg font-bold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="font-body text-sm text-foreground/70 mb-4">
                        {item.description}
                      </p>
                      <p className="font-body text-sm text-foreground/60 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {item.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="font-body text-lg text-foreground/70 mb-4">
                No projects found matching your filters.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedService(null);
                  setSelectedLocation(null);
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="font-body text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote on your project.
          </p>
          <Button className="btn-accent">Request a Quote</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container text-center">
          <p className="font-body text-sm text-white/60">
            © 2026 Storm Landscaping. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
