import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";

/**
 * Design System: Sculptural Minimalism
 * Contact page with Netlify Forms integration
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
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              Storm
            </div>
            <div className="text-sm text-muted-foreground">The Art of Landscaping</div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-sm text-foreground hover:text-accent transition-colors">
              Home
            </a>
            <a href="/gallery" className="text-sm text-foreground hover:text-accent transition-colors">
              Gallery
            </a>
            <a href="/contact" className="text-sm text-foreground hover:text-accent transition-colors">
              Contact
            </a>
          </div>
          <Button className="btn-accent text-sm">Get Quote</Button>
        </div>
      </nav>

      {/* Page Header */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Get in Touch
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Have a project in mind? We'd love to hear from you. Contact us today for a free consultation and quote.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
              <Phone className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Phone
              </h3>
              <p className="text-foreground/70">+44 (0) 123 456 7890</p>
            </div>
            <div>
              <Mail className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Email
              </h3>
              <p className="text-foreground/70">hello@stormlandscaping.co.uk</p>
            </div>
            <div>
              <MapPin className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Service Areas
              </h3>
              <p className="text-foreground/70">London, Bedfordshire, Cambridgeshire</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Request a Quote
          </h2>
          <form
            name="contact"
            method="POST"
            onSubmit={handleSubmit}
            className="bg-white p-8 md:p-12 border border-gray-200"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />

            {/* Name Field */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 focus:border-accent focus:outline-none transition-colors text-foreground placeholder-muted-foreground"
                placeholder="Your name"
              />
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 focus:border-accent focus:outline-none transition-colors text-foreground placeholder-muted-foreground"
                placeholder="your@email.com"
              />
            </div>

            {/* Phone Field */}
            <div className="mb-6">
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 focus:border-accent focus:outline-none transition-colors text-foreground placeholder-muted-foreground"
                placeholder="+44 (0) 123 456 7890"
              />
            </div>

            {/* Service Field */}
            <div className="mb-6">
              <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                Service Type *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 focus:border-accent focus:outline-none transition-colors text-foreground"
              >
                <option value="">Select a service...</option>
                <option value="patios">Patios & Terraces</option>
                <option value="driveways">Driveways</option>
                <option value="fencing">Fencing</option>
                <option value="landscaping">Garden Landscaping</option>
                <option value="brickwork">Brickwork & Extensions</option>
                <option value="maintenance">Maintenance & Other</option>
              </select>
            </div>

            {/* Message Field */}
            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Project Details *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 focus:border-accent focus:outline-none transition-colors text-foreground placeholder-muted-foreground"
                placeholder="Tell us about your project..."
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-accent"
            >
              {isSubmitting ? "Sending..." : "Request Quote"}
            </Button>

            <p className="text-xs text-foreground/60 mt-4 text-center">
              We'll respond to your inquiry within 24 hours.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container text-center">
          <p className="text-sm text-white/60">
            © 2026 Storm Landscaping. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
