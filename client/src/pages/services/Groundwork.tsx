import React from "react";
import ServicePage, { ServiceData } from "@/pages/ServicePage";

const service: ServiceData = {
  name: "Groundwork & Specialists",
  tagline: "The foundations of every great landscape \u2014 done properly.",
  heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&h=800&fit=crop",
  intro: "Great landscaping starts below the surface. Without proper groundwork, correct drainage, solid foundations, and well-prepared ground, even the most beautiful surface finishes will fail over time. Storm Landscaping's groundwork team provides the professional site preparation and specialist groundwork services that underpin every project we undertake.",
  sections: [
    { heading: "Land Drainage", body: "Poor drainage is one of the most common problems in residential gardens. We design and install land drainage systems tailored to your site, including French drains, soakaways, channel drainage, and surface water management solutions.", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop" },
    { heading: "Retaining Walls & Earthworks", body: "We undertake earthworks to reshape and level ground, construct retaining walls to hold back soil and create terraced levels, and install the drainage and structural elements needed to make sloped gardens safe, stable, and beautiful." },
    { heading: "Site Preparation & Clearance", body: "Before any landscaping can begin, the site needs to be properly prepared. We undertake full site clearance, removing existing vegetation, structures, and debris, followed by ground preparation including topsoil stripping, sub-base installation, and levelling.", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop" },
  ],
  benefits: [
    "Proper drainage design and installation",
    "French drains, soakaways, and channel drainage",
    "Retaining walls engineered to specification",
    "Full site clearance and preparation",
    "Earthworks and ground levelling",
    "Sub-base installation for all surface types",
    "Coordination with other trades on complex projects",
  ],
  cta: "Good groundwork is the foundation of everything we do. Contact us to discuss your project and get a detailed, no-obligation quotation.",
};

export default function Groundwork() {
  return <ServicePage service={service} />;
}
