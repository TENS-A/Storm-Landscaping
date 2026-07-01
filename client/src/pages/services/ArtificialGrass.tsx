import React from "react";
import ServicePage, { ServiceData } from "@/pages/ServicePage";

const service: ServiceData = {
  name: "Artificial Grass Specialists",
  tagline: "Year-round green spaces with zero maintenance.",
  heroImage: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1400&h=800&fit=crop",
  intro: "Modern artificial grass has come a long way from the bright green carpet of the past. Today's premium artificial turf looks and feels remarkably like the real thing \u2014 and Storm Landscaping only installs the highest quality products, properly prepared and fitted to last.",
  sections: [
    { heading: "Premium Artificial Turf", body: "We supply and install premium artificial grass products from leading manufacturers. Our range includes a variety of pile heights, blade shapes, and colour combinations to suit every application \u2014 from realistic lawn replacements to sports and play surfaces. All our products are UV-stabilised, pet-friendly, and designed to withstand the UK climate.", image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop" },
    { heading: "Preparation & Installation", body: "A quality artificial grass installation starts with proper preparation. We excavate the existing lawn, install a compacted sub-base, and lay a weed membrane before fitting the turf. Edges are secured and joins are carefully seamed and glued to be virtually invisible." },
    { heading: "Children's Play Areas", body: "Artificial grass is an excellent choice for children's play areas. It provides a soft, safe surface that stays green and clean year-round, with no mud, no mowing, and no bare patches. We can install artificial grass with additional shock-pad underlay for extra safety.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop" },
  ],
  benefits: [
    "Premium quality turf \u2014 realistic look and feel",
    "UV-stabilised and pet-friendly",
    "Proper sub-base preparation included",
    "Invisible seaming for a natural finish",
    "Suitable for lawns, play areas, and commercial spaces",
    "Shock-pad underlay available for play areas",
    "Minimal maintenance required",
    "Manufacturer warranties on all products",
  ],
  cta: "Ready to say goodbye to lawn maintenance? Contact us for a free site visit and quotation.",
};

export default function ArtificialGrass() {
  return <ServicePage service={service} />;
}
