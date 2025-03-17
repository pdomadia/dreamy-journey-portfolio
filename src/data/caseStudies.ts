
export interface CaseStudy {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  slug: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'Product Design in Health Tech',
    subtitle: 'UX & UI Design',
    description: 'Streamlining the scheduling experience for doctors\' offices to reduce administrative burden and improve patient access to care.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'health-tech',
  },
  {
    id: 2,
    title: 'Customer Success & Accessibility',
    subtitle: 'UX Research',
    description: 'Tackling the challenge of technology adoption among senior citizens through empathetic design and simplified user interfaces.',
    imageUrl: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'accessibility',
  },
  {
    id: 3,
    title: 'Assistive Technology',
    subtitle: 'Product Development',
    description: 'Bridging occupational therapy principles with modern technology to create assistive tools that enhance independence and quality of life.',
    imageUrl: 'https://images.unsplash.com/photo-1573496546038-82f9c39f6365?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'assistive-tech',
  }
];
