import React from "react";
import ServicePage, { ServiceData } from "@/pages/ServicePage";

const service: ServiceData = {
  name: "Specialist Stonework",
  tagline: "Precision craftsmanship in natural stone \u2014 timeless materials, expert hands.",
  heroImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1400&h=800&fit=crop",
  intro: "Natural stone is one of the most enduring and beautiful materials in landscaping. When worked by skilled hands, it creates features that improve with age \u2014 walls that weather gracefully, steps that develop character, and structures that feel as though they have always belonged in the landscape.",
  sections: [
    { heading: "Dry Stone & Mortared Walls", body: "We construct both dry stone and mortared stone walls to the highest standard. Dry stone walls are a traditional craft requiring skill, patience, and an eye for selecting and placing stone. Mortared walls offer greater rigidity and are ideal for retaining walls, raised beds, and boundary structures.", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop" },
    { heading: "Steps, Terracing & Retaining Structures", body: "Stone steps and terracing transform sloped gardens into usable, beautiful spaces. We design and build stone steps that are safe, proportioned correctly, and sympathetic to the surrounding landscape." },
    { heading: "Stone Edging, Copings & Details", body: "The details matter in any great landscape. Stone edging defines beds and borders with precision; stone copings finish walls and structures with a professional touch. We work with limestone, sandstone, granite, and slate.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop" },
  ],
  benefits: [
    "Skilled craftsmen with decades of combined experience",
    "Dry stone and mortared wall construction",
    "Wide range of natural stone types available",
    "Restoration and repair of existing stonework",
    "Structurally engineered retaining walls",
    "Stone sourced from reputable UK quarries",
  ],
  cta: "Whether you have a specific stonework project in mind or would like to explore the possibilities, get in touch for a free consultation.",
};

export default function SpecialistStonework() {
  return <ServicePage service={service} />;
}
