import React from "react";
import ServicePage, { ServiceData } from "@/pages/ServicePage";

const service: ServiceData = {
  name: "Resin Bound Surfaces",
  tagline: "Durable, permeable, and beautiful resin driveways and patios.",
  heroImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1400&h=800&fit=crop",
  intro: "Resin bound surfacing is one of the most popular choices for driveways, patios, and pathways in the UK. At Storm Landscaping, we install premium resin bound systems that are SUDS-compliant, highly durable, and available in a wide range of aggregate colours and blends. Every installation is carried out by our experienced team to the highest standard.",
  sections: [
    { heading: "What is Resin Bound Surfacing?", body: "Resin bound surfacing is created by mixing natural aggregates with a UV-stable polyurethane resin, then trowelling the mixture onto a prepared base. The result is a smooth, porous surface that allows water to drain through \u2014 making it SUDS-compliant and suitable for front driveways under permitted development rules.", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop" },
    { heading: "Driveways", body: "A resin bound driveway transforms the kerb appeal of any property. We install resin driveways on both new and existing bases, using a range of aggregate blends to complement your home's exterior. All our driveway installations include proper edging, drainage consideration, and a full preparation process to ensure a long-lasting result." },
    { heading: "Patios & Pathways", body: "Resin bound surfacing is equally at home in garden settings. A resin patio offers a clean, contemporary alternative to traditional paving, while resin pathways provide a neat, low-maintenance route through any garden. We can incorporate decorative borders, contrasting colours, and bespoke patterns to create a truly individual result.", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop" },
  ],
  benefits: [
    "SUDS-compliant \u2014 no planning permission required for most driveways",
    "Wide range of aggregate colours and blends",
    "Smooth, weed-resistant surface",
    "UV-stable resin \u2014 no yellowing over time",
    "Durable and long-lasting with minimal maintenance",
    "Installed on a proper prepared base for longevity",
  ],
  cta: "Interested in a resin bound driveway or patio? Contact us for a free site visit and no-obligation quotation.",
};

export default function ResinBoundSurfaces() {
  return <ServicePage service={service} />;
}
