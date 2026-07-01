import React from "react";
import ServicePage, { ServiceData } from "@/pages/ServicePage";

const service: ServiceData = {
  name: "Tree Planting & Soft Planting",
  tagline: "Strategic planting design for beauty, privacy, and year-round interest.",
  heroImage: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1400&h=800&fit=crop",
  intro: "Planting is the soul of any great landscape. At Storm Landscaping, our horticulturalists bring deep knowledge of plants, soils, and seasonal change to every project. Whether you are looking to create a structured formal garden, a naturalistic wildflower meadow, a private screening hedge, or a statement specimen tree, we design and install planting schemes that thrive in your specific conditions.",
  sections: [
    { heading: "Bespoke Planting Design", body: "Every planting scheme we create is tailored to your site, your soil, your aspect, and your vision. We take time to understand how you use your outdoor space and what you want it to feel like before selecting plants that will deliver colour, texture, and interest across all four seasons.", image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop" },
    { heading: "Tree Planting & Establishment", body: "Trees are long-term investments in your landscape. We source and plant trees of all sizes, from semi-mature specimens for instant impact to younger trees for long-term growth. All our tree planting includes proper soil preparation, staking, and aftercare guidance to ensure successful establishment." },
    { heading: "Hedging & Screening", body: "A well-planted hedge provides privacy, reduces noise, supports wildlife, and adds year-round structure to your garden. We install hedging in a wide range of species, from formal box and yew to informal mixed native hedgerows.", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop" },
  ],
  benefits: [
    "Bespoke planting designs tailored to your site and vision",
    "Expert knowledge of native and ornamental species",
    "Soil preparation and improvement included",
    "Semi-mature trees available for instant impact",
    "Seasonal interest planned across all four seasons",
    "Wildlife-friendly planting options available",
    "Aftercare guidance provided with every installation",
  ],
  cta: "Contact us to discuss your planting project. We offer free consultations and can visit your site to assess conditions.",
};

export default function TreePlanting() {
  return <ServicePage service={service} />;
}
