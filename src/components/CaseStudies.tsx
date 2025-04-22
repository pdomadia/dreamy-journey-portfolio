
import React from 'react';
import CaseStudyCard from './CaseStudyCard';
import { caseStudies } from '@/data/caseStudies';

const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="py-20 md:py-28 relative bg-[#ede9e4]">
      <div className="container-custom py-0 px-4 md:px-0">
        <div className="text-center mb-14 md:mb-16">
          <span className="inline-block text-base md:text-lg font-medium text-[#31433a] bg-transparent tracking-wide mb-2 md:mb-3">
            Featured Work
          </span>
          <h2 className="text-[2.3rem] md:text-[2.7rem] leading-tight font-serif text-[#2C3A31] font-medium mb-3">
            Case Studies
          </h2>
          <p className="text-lg md:text-2xl text-[#31433a] font-sans leading-snug font-normal mb-0">
            Explore selected projects that showcase my approach to solving<br className="hidden md:inline" />
            complex problems.
          </p>
        </div>
        <div className="grid gap-6 md:gap-7 grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
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
