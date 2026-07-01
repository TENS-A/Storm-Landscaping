import React from "react";
import ServicePage, { ServiceData } from "@/pages/ServicePage";

const service: ServiceData = {
  name: "Porcelain & Natural Stone Paving",
  tagline: "Elegant, durable paving for patios, paths, and outdoor living spaces.",
  heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&h=800&fit=crop",
  intro: "Paving sets the tone for your entire outdoor space. Whether you are looking for the clean, contemporary lines of large-format porcelain or the warmth and character of natural stone, Storm Landscaping installs premium paving to the highest standard across London, Bedfordshire, and Cambridgeshire.",
  sections: [
    { heading: "Porcelain Paving", body: "Large-format porcelain paving has become one of the most sought-after choices for contemporary outdoor spaces. Exceptionally hard-wearing, frost-resistant, and virtually maintenance-free, porcelain tiles offer a sleek, modern aesthetic that works beautifully in both urban and rural settings.", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop" },
    { heading: "Natural Stone Paving", body: "For those who prefer the timeless appeal of natural materials, we install a wide range of natural stone paving including Indian sandstone, limestone, granite, slate, and York stone. Each stone type has its own unique character." },
    { heading: "Preparation & Installation", body: "The longevity of any paving installation depends entirely on the quality of the preparation beneath it. We excavate to the correct depth, install a compacted sub-base, and lay paving on a full bed of mortar. All joints are pointed to the appropriate specification.", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop" },
    { heading: "Design & Pattern Options", body: "We offer a range of laying patterns including stretcher bond, stack bond, herringbone, random coursed, and bespoke designs. We can incorporate contrasting borders, insets, and feature panels to create a truly individual result." },
  ],
  benefits: [
    "Premium porcelain and natural stone supplied and installed",
    "Full mortar bed installation \u2014 no spot-bedding",
    "Frost-resistant materials suitable for the UK climate",
    "Wide range of sizes, colours, and finishes",
    "Correct falls for drainage designed into every installation",
    "Bespoke laying patterns and feature details available",
    "Natural stone sourced from reputable suppliers",
    "Low-maintenance finishes available",
  ],
  cta: "Ready to transform your patio or outdoor living space? Contact us for a free site visit and detailed quotation.",
};

export default function PorcelainPaving() {
  return <ServicePage service={service} />;
}
