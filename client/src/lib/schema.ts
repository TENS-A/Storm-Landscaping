/**
 * Schema markup utilities for SEO
 * Generates structured data for LocalBusiness and Services
 */

export const generateLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://stormlandscap-cpk7vryb.manus.space",
    name: "Storm Landscaping",
    image: "https://stormlandscap-cpk7vryb.manus.space/StormLandscapingImage(8xUpscaled).webp",
    description: "Professional landscaping and building services for domestic and premium residential clients across London, Bedfordshire, and Cambridgeshire.",
    url: "https://stormlandscap-cpk7vryb.manus.space",
    telephone: "+44",
    priceRange: "£££",
    areaServed: [
      {
        "@type": "City",
        name: "London"
      },
      {
        "@type": "AdministrativeArea",
        name: "Bedfordshire"
      },
      {
        "@type": "AdministrativeArea",
        name: "Cambridgeshire"
      }
    ],
    sameAs: [],
    knowsAbout: [
      "Landscaping",
      "Horticulture",
      "Garden Design",
      "Resin Bound Surfaces",
      "Artificial Grass",
      "Tree Planting",
      "Water Features",
      "Stonework",
      "Groundwork"
    ]
  };
};

export const generateServiceSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://stormlandscap-cpk7vryb.manus.space",
    name: "Storm Landscaping",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Landscaping Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Resin Bound Surfaces",
            description: "Durable, permeable resin bound driveways and patios with natural stone aggregates. Ideal for modern landscaping projects requiring sustainable drainage solutions."
          },
          areaServed: ["London", "Bedfordshire", "Cambridgeshire"]
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Artificial Grass Specialists",
            description: "Premium artificial grass installation with expert drainage systems. Perfect for low-maintenance gardens that maintain year-round aesthetics."
          },
          areaServed: ["London", "Bedfordshire", "Cambridgeshire"]
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tree Planting & Soft Planting",
            description: "Professional tree and soft planting services using premium specimens. Enhances garden structure, privacy, and environmental value."
          },
          areaServed: ["London", "Bedfordshire", "Cambridgeshire"]
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Water Courses, Ponds & Lakes",
            description: "Bespoke water feature design and installation. Creates focal points and wildlife habitats in residential and premium landscapes."
          },
          areaServed: ["London", "Bedfordshire", "Cambridgeshire"]
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Specialist Stonework",
            description: "Precision stonework including retaining walls, raised beds, and architectural features. Adds structure and elegance to any garden."
          },
          areaServed: ["London", "Bedfordshire", "Cambridgeshire"]
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Groundwork & Specialists",
            description: "Comprehensive groundwork and specialist services. Foundation for all landscaping projects, executed with precision and expertise."
          },
          areaServed: ["London", "Bedfordshire", "Cambridgeshire"]
        }
      ]
    }
  };
};

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
};
