import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";

/**
 * Design System: Sculptural Minimalism
 * Contact page with Netlify Forms integration
 * - Centered banner title (far left on banner)
 * - Balanced navbar with centered nav items
 * - Playfair Display serif fonts
 * - Orange accent colors
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          ...formData,
        }).toString(),
      });

      if (response.ok) {
        toast.success("Thank you! We'll be in touch soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    "Resin Bound Surfaces",
    "Artificial Grass Specialists",
    "Tree Planting & Soft Planting",
    "Water Courses, Ponds & Lakes",
    "Specialist Stonework",
    "Groundwork & Specialists",
  ];

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
            Get in Touch
          </h1>
          <div className="w-16 h-1 bg-amber-600" />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                Contact Information
              </h2>

              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <Phone className="w-6 h-6 text-amber-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                  </div>
                  <p className="text-gray-600 ml-10">+44 (0) 123 456 7890</p>
                </div>

                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <Mail className="w-6 h-6 text-amber-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  </div>
                  <p className="text-gray-600 ml-10">hello@stormlandscaping.co.uk</p>
                </div>

                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <MapPin className="w-6 h-6 text-amber-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Service Areas</h3>
                  </div>
                  <p className="text-gray-600 ml-10">London, Bedfordshire, Cambridgeshire</p>
                </div>
              </div>

              <div className="mt-12 p-8 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Professional Landscapers</h3>
                <p className="text-gray-600 leading-relaxed">
                  With professional horticulturists in our team, we bring expertise and creativity to every project. Dream, design, deliver.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} name="contact" method="POST" className="space-y-6">
                <input type="hidden" name="form-name" value="contact" />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
                    placeholder="+44 (0) 123 456 7890"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 rounded-lg transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
