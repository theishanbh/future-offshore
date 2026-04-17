export interface Project {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  description: string;
  scope: string[];
  image: string;
}

export const projects: Project[] = [
  {
    slug: 'advanced-pipelay-system',
    title: 'Advanced Pipelay System Design',
    client: 'Major Offshore Contractor',
    category: 'Pipelay Equipment',
    year: '2023',
    description: 'Complete design and engineering delivery of an advanced S-lay pipelay system for a major offshore contractor. The project encompassed tensioner design, stinger optimisation, and full system integration for deep-water pipeline installation operations.',
    scope: ['Concept through detailed design', 'Structural and fatigue analysis', 'System integration engineering', 'Manufacturing support', 'FAT and commissioning support'],
    image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=800&q=80'
  },
  {
    slug: 'cable-carousel-system',
    title: 'Cable Carousel System',
    client: 'Offshore Wind Developer',
    category: 'Cable Lay Equipment',
    year: '2023',
    description: 'Engineering and project delivery of a large-capacity cable carousel system for offshore wind inter-array cable installation. Delivered from concept design through to operational testing and deployment.',
    scope: ['FEED study and concept selection', 'Detailed design engineering', 'FEA and structural verification', 'Factory acceptance testing', 'Offshore commissioning support'],
    image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=800&q=80'
  },
  {
    slug: 'subsea-trencher-engineering',
    title: 'Subsea Trencher Engineering',
    client: 'Subsea Services Provider',
    category: 'Subsea Tools',
    year: '2022',
    description: 'Technical lead for the engineering of a next-generation subsea trenching vehicle, incorporating innovative design methods for improved performance and reliability in challenging seabed conditions.',
    scope: ['Concept development', 'Innovative structural analysis methods', 'Component design optimisation', 'Prototype testing support', 'Operational procedure development'],
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80'
  },
  {
    slug: 'project-oversight-fpso',
    title: 'FPSO Equipment Project Oversight',
    client: 'International Energy Company',
    category: 'Project Support',
    year: '2022',
    description: 'Independent client representation and project management oversight for the fabrication and delivery of critical equipment packages for an FPSO project. Provided unbiased progress updates, quality assessments, and technical reviews.',
    scope: ['Client representation on-site', 'Progress and schedule monitoring', 'Quality surveillance and auditing', 'Technical specification review', 'Cost and change order management'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
  },
  {
    slug: 'cable-repair-spread',
    title: 'Cable Repair Spread Design',
    client: 'Telecom Cable Operator',
    category: 'Cable Lay Equipment',
    year: '2021',
    description: 'Design and engineering of a dedicated cable repair spread for submarine telecommunications cable maintenance operations. The system was optimised for rapid mobilisation and efficient repair operations.',
    scope: ['System concept and layout design', 'Cable handling equipment design', 'Structural analysis and verification', 'Integration with vessel systems', 'Operational testing'],
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80'
  },
  {
    slug: 'quality-system-implementation',
    title: 'Quality Management System Implementation',
    client: 'Marine Equipment Manufacturer',
    category: 'Quality Management',
    year: '2021',
    description: 'Comprehensive quality management system implementation and ISO 9001 certification support for a marine equipment manufacturer, including procedure development, staff training, and audit preparation.',
    scope: ['QMS gap analysis', 'Procedure and documentation development', 'Staff training and awareness', 'Internal audit programme', 'Certification audit preparation'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80'
  }
];
