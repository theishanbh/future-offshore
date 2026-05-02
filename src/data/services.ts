export interface Service {
  slug: string
  title: string
  category: "project-support" | "technical-support"
  categoryLabel: string
  shortDescription: string
  fullDescription: string
  features: string[]
  image: string
}

export const services: Service[] = [
  {
    slug: "client-representation",
    title: "Client Representation",
    category: "project-support",
    categoryLabel: "Project Support",
    shortDescription:
      "Acting on your behalf to safeguard project interests, ensure compliance, and maintain clear communication with stakeholders.",
    fullDescription:
      "Future Offshore provides dedicated client representation services, acting as your trusted partner on-site and remotely. We safeguard your project interests by ensuring compliance with specifications, maintaining clear and transparent communication with all stakeholders, and providing independent oversight throughout the project lifecycle. Our experienced team brings deep offshore engineering knowledge to protect your investment and ensure delivery meets your expectations.",
    features: [
      "Independent project oversight",
      "Stakeholder communication management",
      "Compliance monitoring and reporting",
      "Risk identification and mitigation",
      "Regular progress reporting",
      "Specification adherence verification",
    ],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "project-management",
    title: "Project Management Support",
    category: "project-support",
    categoryLabel: "Project Support",
    shortDescription:
      "Strengthening your project delivery team with planning, coordination, reporting, and risk management capabilities.",
    fullDescription:
      "Our project management support services strengthen your delivery team with experienced offshore project professionals. We provide comprehensive planning, coordination, reporting, and risk management capabilities that integrate seamlessly with your existing workflows. From schedule development to cost control, we ensure your projects stay on track and within budget.",
    features: [
      "Project planning and scheduling",
      "Cost estimation and budget control",
      "Risk management and mitigation",
      "Progress reporting and dashboards",
      "Resource coordination",
      "Change management processes",
    ],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "quality-management",
    title: "Quality Management Support",
    category: "project-support",
    categoryLabel: "Project Support",
    shortDescription:
      "QMS Lead Auditor ISO9001 training to support client or supplier readiness and audit requirements.",
    fullDescription:
      "Future Offshore provides quality management support with ISO 9001 Lead Auditor qualified professionals. We help clients and suppliers achieve and maintain quality management system readiness, conduct internal and external audits, and implement continuous improvement processes. Our approach ensures your operations meet the highest industry standards.",
    features: [
      "ISO 9001 QMS implementation support",
      "Internal and supplier audits",
      "Quality documentation and procedures",
      "Continuous improvement programmes",
      "Non-conformance management",
      "Audit readiness preparation",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "engineering-services",
    title: "Engineering Services",
    category: "project-support",
    categoryLabel: "Project Support",
    shortDescription:
      "Delivering high-quality engineering support, from concept development to detailed design and operational engineering.",
    fullDescription:
      "Our engineering services span the full project lifecycle, from initial concept development through detailed design to operational support. Future Offshore delivers high-quality engineering solutions tailored to your specific requirements. We combine deep technical knowledge with practical experience to ensure designs are not only technically excellent but also practical for manufacturing, installation, and operation.",
    features: [
      "Concept and FEED studies",
      "Detailed design engineering",
      "Structural and fatigue analysis",
      "Finite element analysis (FEA)",
      "Design verification and validation",
      "Operational engineering support",
    ],
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "pipelay-equipment",
    title: "Pipelay Equipment",
    category: "technical-support",
    categoryLabel: "Technical Support",
    shortDescription:
      "Experience with all methods of pipelay, from full systems to individual packages and upgrades.",
    fullDescription:
      "Future Offshore brings unparalleled expertise in pipelay equipment engineering, covering all installation methods including S-lay, J-lay, and reel-lay systems. Our team has led the design, delivery, and commissioning of some of the most advanced pipelay systems in operation today for major contractors including Saipem, Technip, McDermott, Subsea 7, Boskalis, and Sapura. From complete system designs to targeted upgrades and modifications, we deliver solutions that perform.",
    features: [
      "S-lay, J-lay, and reel-lay systems",
      "Tensioner design and analysis",
      "Stinger design and optimisation",
      "Pipeline handling equipment",
      "System upgrades and modifications",
      "Commissioning and operational support",
    ],
    image:
      "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "cable-lay-equipment",
    title: "Cable Lay Equipment",
    category: "technical-support",
    categoryLabel: "Technical Support",
    shortDescription:
      "Technical lead for carousels and cable lay and repair spreads.",
    fullDescription:
      "As technical leaders in cable lay equipment engineering, Future Offshore provides comprehensive design and engineering services for carousel systems, cable lay spreads, and cable repair systems. Our experience spans the full range of cable handling equipment used in offshore wind, telecommunications, and power cable installation. We deliver innovative solutions that improve operational efficiency and reliability.",
    features: [
      "Carousel design and engineering",
      "Cable lay spread design",
      "Cable repair system engineering",
      "Cable handling equipment",
      "Offshore wind cable systems",
      "Route engineering support",
    ],
    image:
      "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "subsea-trenchers",
    title: "Subsea Trenchers",
    category: "technical-support",
    categoryLabel: "Technical Support",
    shortDescription:
      "Industry-leading engineering of subsea equipment and trenching vehicles.",
    fullDescription:
      "Our team has developed innovative solutions for subsea intervention, trenching, and installation tooling used by major offshore contractors worldwide including development and delivery of the 4 track self-levelling Hi-Traq system developed at Royal IHC ltd.",
    features: [
      "Trencher design and engineering",
      "Equipment qualification testing",
      "Operational procedure development",
    ],
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "project-delivery",
    title: "Project Delivery",
    category: "technical-support",
    categoryLabel: "Technical Support",
    shortDescription:
      "Delivering projects from concept to detailed design and operational testing with 20+ years of experience.",
    fullDescription:
      "With over 20 years of experience delivering offshore projects through the complete lifecycle, Future Offshore turns ideas into reality. From initial concept through design, manufacture, construction, testing, delivery, and field support, we provide independent technical and project management oversight. We give clients unbiased updates on progress, schedule compliance, specification adherence, quality assessments, and cost reviews, ensuring equipment is delivered on time and to the highest standards.",
    features: [
      "Full lifecycle project delivery",
      "Independent technical oversight",
      "Manufacturing and construction support",
      "Factory acceptance testing (FAT)",
      "Site integration testing (SIT)",
      "Field support and commissioning",
    ],
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80",
  },
]

export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug)
export const getServicesByCategory = (category: string) =>
  services.filter((s) => s.category === category)
