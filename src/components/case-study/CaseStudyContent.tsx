
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { CaseStudy } from '@/data/caseStudies';
import IntroductionSection from './sections/IntroductionSection';
import ProjectOverviewSection from './sections/ProjectOverviewSection';
import ChallengeSection from './sections/ChallengeSection';
import ResearchSection from './sections/ResearchSection';
import SolutionSection from './sections/SolutionSection';
import ImpactSection from './sections/ImpactSection';
import ConclusionSection from './sections/ConclusionSection';

interface CaseStudyContentProps {
  caseStudy: CaseStudy;
}

const CaseStudyContent: React.FC<CaseStudyContentProps> = ({ caseStudy }) => {
  if (caseStudy.fullContent) {
    return (
      <div className="space-y-8 text-gray-700">
        <IntroductionSection introduction={caseStudy.fullContent.introduction || ''} />

        <Separator className="my-6" />

        <ProjectOverviewSection 
          projectOverview={caseStudy.fullContent.projectOverview || ''} 
          role={caseStudy.fullContent.role}
        />

        <Separator className="my-6" />
        
        <ChallengeSection challenge={caseStudy.fullContent.challenge || ''} />

        <Separator className="my-6" />
        
        <ResearchSection 
          methodologies={caseStudy.fullContent.research?.methodologies} 
          insights={caseStudy.fullContent.research?.insights}
        />

        <Separator className="my-6" />
        
        <SolutionSection solution={caseStudy.fullContent.solution || ''} />

        <Separator className="my-6" />
        
        <ImpactSection impact={caseStudy.fullContent.impact || ''} />

        <Separator className="my-6" />
        
        <ConclusionSection conclusion={caseStudy.fullContent.conclusion || ''} />
      </div>
    );
  }

  return (
    <>
      <p className="text-xl text-charcoal/80 leading-relaxed mb-6">
        {caseStudy.description}
      </p>
      
      <h2 className="text-2xl font-medium mt-10 mb-4">Challenge</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
        Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
      </p>
      
      <h2 className="text-2xl font-medium mt-10 mb-4">Solution</h2>
      <p>
        Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel.
      </p>
      
      <h2 className="text-2xl font-medium mt-10 mb-4">Results</h2>
      <p>
        Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo.
        Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.
      </p>
    </>
  );
};

export default CaseStudyContent;
