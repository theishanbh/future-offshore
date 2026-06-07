export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Future Offshore",
    url: "https://futureoffshore.co.uk",
    logo: "https://futureoffshore.co.uk/images/logos/primary-logo-colour-white-no-tag.svg",
    description:
      "Future Offshore is a leading offshore engineering company providing innovative project support, technical expertise, and quality management services to the energy industry.",
    email: "info@futureoffshore.co.uk",
    telephone: "+447899860529",
    address: {
      "@type": "PostalAddress",
      addressCountry: "GB",
    },
    sameAs: ["https://www.linkedin.com/company/future-offshore/"],
    knowsAbout: [
      "Offshore Engineering",
      "Pipelay Equipment",
      "Cable Lay Systems",
      "Subsea Tools",
      "Project Management",
      "Quality Management",
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; href: string }[]
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://futureoffshore.co.uk${item.href}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ServiceSchema({
  name,
  description,
  url,
}: {
  name: string
  description: string
  url: string
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `https://futureoffshore.co.uk${url}`,
    provider: {
      "@type": "ProfessionalService",
      name: "Future Offshore",
      url: "https://futureoffshore.co.uk",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
