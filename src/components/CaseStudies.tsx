
import React from 'react';
import CaseStudyCard from './CaseStudyCard';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      title: 'Product Design in Health Tech',
      subtitle: 'UX & UI Design',
      description: 'Streamlining the scheduling experience for doctors\' offices to reduce administrative burden and improve patient access to care.',
      imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/case-study/health-tech',
    },
    {
      title: 'Customer Success & Accessibility',
      subtitle: 'UX Research',
      description: 'Tackling the challenge of technology adoption among senior citizens through empathetic design and simplified user interfaces.',
      imageUrl: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/case-study/accessibility',
    },
    {
      title: 'Assistive Technology',
      subtitle: 'Product Development',
      description: 'Bridging occupational therapy principles with modern technology to create assistive tools that enhance independence and quality of life.',
      imageUrl: 'https://images.unsplash.com/photo-1573496546038-82f9c39f6365?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/case-study/assistive-tech',
    }
  ];

  return (
    <section id="case-studies" className="py-20 md:py-28 relative">
      <div className="container-custom">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-sm md:text-base font-medium text-[#9A7AA0] bg-[#DDD1E9]/20 px-3 py-1 rounded-full mb-4">
            Featured Work
          </span>
          <h2 className="section-title mx-auto">Case Studies</h2>
          <p className="section-subtitle mx-auto">
            Explore selected projects that showcase my approach to solving complex problems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard 
              key={index}
              title={study.title}
              subtitle={study.subtitle}
              description={study.description}
              imageUrl={study.imageUrl}
              index={index}
              link={study.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
