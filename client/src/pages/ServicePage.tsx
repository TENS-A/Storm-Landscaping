import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export interface ServiceSection {
  heading: string;
  body: string;
  image?: string;
}

export interface ServiceData {
  name: string;
  tagline: string;
  heroImage: string;
  intro: string;
  sections: ServiceSection[];
  benefits: string[];
  cta: string;
}

interface ServicePageProps {
  service: ServiceData;
}

export default function ServicePage({ service }: ServicePageProps) {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Lato', sans-serif" }}>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <span className="text-white font-bold text-xl tracking-widest cursor-pointer" style={{ fontFamily: "'Playfair Display', serif" }}>
              STORM
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#services"><span className="text-white/80 hover:text-white text-sm tracking-wide cursor-pointer transition-colors">Services</span></Link>
            <Link href="/gallery"><span className="text-white/80 hover:text-white text-sm tracking-wide cursor-pointer transition-colors">Gallery</span></Link>
            <Link href="/contact"><span className="text-white/80 hover:text-white text-sm tracking-wide cursor-pointer transition-colors">Contact</span></Link>
          </div>
          <Link href="/contact">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white text-sm px-5 py-2 rounded-none font-semibold tracking-wide">
              Get Quote
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px] flex items-end pb-16 pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.heroImage})` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <Link href="/">
            <span className="text-amber-500 text-sm tracking-widest uppercase cursor-pointer hover:text-amber-400 transition-colors">
              ← Back to Home
            </span>
          </Link>
          <h1
            className="text-5xl md:text-6xl font-bold text-white mt-4 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {service.name}
          </h1>
          <p className="text-white/80 text-xl max-w-2xl">{service.tagline}</p>
        </div>
      </div>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-gray-700 text-lg leading-relaxed">{service.intro}</p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {service.sections.map((section, i) => (
            <div
              key={i}
              className={`flex flex-col ${section.image ? "lg:flex-row" : ""} gap-12 items-start ${i % 2 === 1 && section.image ? "lg:flex-row-reverse" : ""}`}
            >
              <div className={section.image ? "lg:w-1/2" : "w-full max-w-4xl mx-auto"}>
                <h2
                  className="text-3xl font-bold text-gray-900 mb-6"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {section.heading}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">{section.body}</p>
              </div>
              {section.image && (
                <div className="lg:w-1/2">
                  <img
                    src={section.image}
                    alt={section.heading}
                    className="w-full h-72 object-cover rounded-lg shadow-md"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-4xl font-bold text-gray-900 mb-12"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Why Choose Storm
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3 p-4 border border-gray-100 rounded-lg">
                <span className="text-amber-600 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-4xl font-bold text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Get Started?
          </h2>
          <p className="text-white/70 text-lg mb-10">{service.cta}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-none font-semibold tracking-wide text-base">
                Request a Quote
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 rounded-none font-semibold tracking-wide text-base">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Storm Landscaping. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
