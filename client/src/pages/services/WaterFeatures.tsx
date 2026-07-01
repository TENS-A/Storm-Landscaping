import React from "react";
import ServicePage, { ServiceData } from "@/pages/ServicePage";

const service: ServiceData = {
  name: "Water Courses, Ponds & Lakes",
  tagline: "Bespoke water features that transform your landscape.",
  heroImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&h=800&fit=crop",
  intro: "Water has a unique ability to bring a landscape to life. The sound of moving water, the reflections on a still pond, the wildlife drawn to a natural lake \u2014 these are the elements that elevate a garden from beautiful to extraordinary. Storm Landscaping designs and constructs bespoke water features of all scales.",
  sections: [
    { heading: "Garden Ponds & Wildlife Ponds", body: "A well-designed garden pond is one of the most rewarding features you can add to your outdoor space. We design and construct ponds of all sizes, from small intimate water gardens to larger feature ponds with planting shelves, marginal planting, and fish.", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop" },
    { heading: "Ornamental Lakes & Large Water Features", body: "For larger properties, we design and construct ornamental lakes, natural swimming ponds, and large-scale water features. These projects require careful planning, specialist groundwork, and expert knowledge of water management." },
    { heading: "Water Courses & Streams", body: "A naturalistic water course or stream adds movement, sound, and a sense of life to any landscape. We design and construct water courses using natural stone, boulders, and marginal planting to create a convincing, sustainable feature.", image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800&h=600&fit=crop" },
  ],
  benefits: [
    "Bespoke design for every project",
    "Wildlife-friendly options to support biodiversity",
    "Natural stone and planting for an authentic finish",
    "Pumped recirculating systems for efficient water management",
    "Fish-friendly pond construction available",
    "Natural swimming ponds designed and built",
    "Ongoing maintenance packages available",
  ],
  cta: "Thinking about adding a water feature to your garden? Get in touch for a free consultation and site visit.",
};

export default function WaterFeatures() {
  return <ServicePage service={service} />;
}
