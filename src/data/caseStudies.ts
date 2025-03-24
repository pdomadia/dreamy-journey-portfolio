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
    title: 'Navigating the Gap: Building a User-Centric Digital Platform for Home Exercise Plans',
    subtitle: 'UX Research',
    description: 'Tackling the challenge of technology adoption among senior citizens through empathetic design and simplified user interfaces.',
    imageUrl: '/lovable-uploads/8eb53358-90d2-4e1b-b644-9c471e7d3431.png',
    slug: 'accessibility',
    fullContent: {
      introduction: "In healthcare settings, home exercise programs are crucial for patient recovery, yet their traditional paper-based delivery presents significant challenges. Patients, particularly seniors, frequently misplace instructions or misinterpret exercises, while healthcare providers struggle with tracking adherence and managing treatment plans effectively.\n\nThis case study explores how Salaso aimed to transform this process through digitization, providing clear video demonstrations, efficient treatment templates, customizable plans, and robust progress tracking.",
      projectOverview: "Salaso sought to replace traditional paper handouts with a digital platform that would solve key problems: patients losing or misunderstanding instructions, lack of adherence tracking, and inefficient treatment plan management. The solution aimed to offer video demonstrations for clarity, pre-made templates for efficiency, customizable treatment plans, and patient feedback tracking for measurable outcomes.",
      role: "While titled 'Clinical Liaison & Product Specialist', I functioned as the UX Researcher in this startup environment. I conducted user research through interviews and shadowing sessions, identified workflow inefficiencies, communicated findings to stakeholders, and advocated for accessibility improvements to drive adoption among healthcare providers and senior patients.",
      challenge: "The project faced several challenges: low adoption rates among both healthcare providers and patients, difficulty transitioning users from paper-based methods to digital solutions, and creating an interface accessible to senior citizens with limited technology experience. The primary goals were to increase adoption and retention, improve usability and efficiency, and identify and address barriers preventing widespread adoption.",
      research: {
        methodologies: [
          "User Interviews & Shadowing – Direct observation of physicians and therapists using the platform in their workflow",
          "Competitive Analysis – Evaluation of similar healthcare solutions to gather usability insights",
          "Weekly Feedback Calls – Regular collection of insights from healthcare providers using the system"
        ],
        insights: [
          "Limited provider engagement directly led to low patient adoption, as patients weren't properly introduced to the platform",
          "Initial enthusiasm among healthcare providers didn't translate to long-term adoption due to time constraints",
          "The platform incorrectly focused on physicians when therapists were more involved in rehabilitation",
          "Many senior patients lacked email addresses, creating barriers to platform access"
        ]
      },
      solution: "Based on research findings, we influenced product and design decisions to reconsider user flows, explore alternative login options (phone numbers instead of emails), and introduce usability improvements like better template access and simplified onboarding. I presented usability reports to leadership and developed personas, journey maps, and process improvement guides to influence the product roadmap. Eventually, this led to the development of Version 2, which incorporated many research-driven design improvements.",
      impact: "The research findings shaped long-term platform improvements, though immediate adoption metrics were affected by business decisions to restructure client relationships. The lead designer took ownership of UI/UX changes, incorporating research insights into a significant platform revision. While the impact wasn't immediately measurable in adoption metrics, the research fundamentally influenced the platform's evolution.",
      conclusion: "This project reinforced several critical lessons: tech adoption in healthcare is inherently slow as behavior change takes time, senior citizens require highly accessible and simple solutions, and UX research must influence business strategy to drive adoption. The experience highlighted the complexity of introducing technology into traditional healthcare settings and demonstrated the need for both behavioral and technological solutions to drive meaningful change in digital healthcare."
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
