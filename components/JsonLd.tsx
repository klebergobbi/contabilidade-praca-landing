import { business, seo } from "@/content/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";

/**
 * Dados estruturados schema.org AccountingService para rich results.
 */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: business.name,
    description: seo.description,
    url: siteUrl || undefined,
    telephone: business.phone.landline,
    foundingDate: String(business.foundedYear),
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: "BR",
    },
    sameAs: [business.instagram.url],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.google.rating.replace(",", "."),
      reviewCount: business.google.reviews,
      bestRating: "5",
    },
    areaServed: {
      "@type": "City",
      name: `${business.address.city} - ${business.address.state}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      // dados estáticos e controlados — sem entrada de usuário
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
