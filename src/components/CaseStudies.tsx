
import React from 'react';
import CaseStudyCard from './CaseStudyCard';
import { caseStudies } from '@/data/caseStudies';

const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="py-20 md:py-28 relative bg-earthy-DEFAULT/30">
      <div className="container-custom">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-sm md:text-base font-medium text-forest-dark bg-forest-light/40 px-3 py-1 rounded-full mb-4">
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
              key={study.id}
              title={study.title}
              subtitle={study.subtitle}
              description={study.description}
              imageUrl={study.imageUrl}
              index={index}
              link={`/case-study/${study.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
