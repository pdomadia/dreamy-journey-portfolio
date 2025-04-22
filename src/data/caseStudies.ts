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
    role?: string;
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
      role: "I led UX research initiatives, gathering insights through stakeholder interviews and surveys to identify inefficiencies. Collaborated with a product manager and developer to ensure feasible, user-centric integration of design solutions.",
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
    title: 'Jewelry Design Platform UX',
    subtitle: 'Product Design',
    description: 'Crafting an intuitive digital experience for high-end jewelry designers to showcase and customize luxury accessories.',
    imageUrl: '/lovable-uploads/51e86a4b-a8a8-4739-b440-63120f244218.png',
    slug: 'jewelry-design',
    fullContent: {
      introduction: "In the world of luxury jewelry, digital platforms must seamlessly blend aesthetic elegance with user-friendly design. This case study explores the development of a comprehensive UX strategy for a high-end jewelry design platform, focusing on creating an intuitive interface that appeals to both designers and discerning clients.",
      projectOverview: "Design a digital platform that allows jewelry designers to showcase, customize, and sell their intricate pieces while providing an immersive and elegant user experience.",
      role: "Lead UX Designer responsible for user research, interface design, and creating a cohesive digital experience that reflects the sophistication of luxury jewelry.",
      challenge: "Develop a platform that captures the intricate details and craftsmanship of high-end jewelry while providing an intuitive, user-friendly interface for both designers and potential buyers.",
      research: {
        methodologies: [
          "User interviews with jewelry designers and collectors",
          "Competitive analysis of luxury product platforms",
          "Usability testing of initial prototypes"
        ],
        insights: [
          "Designers need flexible showcase options",
          "High-resolution image display is crucial",
          "Customization tools must be intuitive"
        ]
      },
      solution: "Created a modular design platform with advanced image rendering, intuitive customization tools, and a clean, sophisticated interface that highlights the intricate details of each piece.",
      impact: "Increased designer engagement by 40% and improved user interaction time on the platform",
      conclusion: "The redesigned platform successfully bridged the gap between technological functionality and the refined world of luxury jewelry design, creating a digital experience that matches the elegance of the physical products."
    }
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
