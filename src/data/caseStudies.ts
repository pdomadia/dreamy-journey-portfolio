
export interface CaseStudy {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  slug: string;
  fullContent?: {
    introduction?: string;
    projectOverview?: string;
    challenge?: string;
    research?: {
      methodologies?: string[];
      insights?: string[];
    };
    solution?: string;
    impact?: string;
    conclusion?: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'Transforming Oncology Clinic Scheduling',
    subtitle: 'UX & UI Design',
    description: 'Overhauling inefficient scheduling systems in oncology clinics to align appointments with informational needs, enhancing operational efficiency and patient care quality.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'health-tech',
    fullContent: {
      introduction: "Every morning, Sarah Johnson, an office manager at an oncology clinic, faces a critical task: coordinating meetings between her medical staff and pharmaceutical representatives. The stakes are high—each meeting must provide value, delivering crucial updates on cancer treatments that could influence patient care decisions. Yet, the existing scheduling system often leads to mismatches, wasting precious time and resources. This case study details our journey to develop a solution that not only addresses these mismatches but revolutionizes the way appointments are scheduled to prioritize efficiency and relevance.",
      projectOverview: "To overhaul the inefficient scheduling system used in multiple oncology clinics, ensuring that appointments align perfectly with the clinic's immediate informational needs, enhancing both operational efficiency and patient care quality.",
      challenge: "Office managers like Sarah were constantly struggling with an outdated system that failed to adequately match pharmaceutical representatives with the clinic's urgent needs, leading to unproductive appointments and direct negative impacts on patient care.",
      research: {
        methodologies: [
          "Stakeholder Interviews: Deep dives with clinic staff and pharmaceutical reps to understand their experiences.",
          "Observational Studies: Direct observation of the scheduling challenges within the clinic environment.",
          "Surveys: Broad data collection across clinic staff to identify common pain points."
        ],
        insights: [
          "Mismatched Expertise: Critical information often missed due to poor appointment alignment.",
          "Time Wastage: Excessive administrative effort devoted to scheduling logistics.",
          "Communication Gaps: Frequent delays in updates led to missed opportunities."
        ]
      },
      solution: "A new feature was integrated into the scheduling software, allowing office managers to categorize appointments based on the specific information needs, aligning pharmaceutical representatives' expertise directly with the clinic's requirements.",
      impact: "The implementation of the new system led to a 30% reduction in administrative overhead and significantly improved the relevance of meetings, enhancing patient care effectiveness.",
      conclusion: "The redesigned scheduling system has fundamentally improved how Sarah and her colleagues manage their daily responsibilities, ensuring every appointment is both timely and pertinent. This case study demonstrates the crucial role of targeted UX research and adaptive design solutions in addressing specific healthcare operational challenges."
    }
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
