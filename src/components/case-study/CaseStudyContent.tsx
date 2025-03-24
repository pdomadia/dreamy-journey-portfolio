
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { CaseStudy, caseStudies } from '@/data/caseStudies';
import CaseStudyNavigation from './CaseStudyNavigation';
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
  const navigate = useNavigate();
  
  // Find the current case study index
  const currentIndex = caseStudies.findIndex(study => study.id === caseStudy.id);
  
  // Determine previous and next case studies
  const prevCaseStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextCaseStudy = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;
  
  const handleNavigation = (slug: string) => {
    // Save current scroll position
    sessionStorage.setItem('scrollPosition', '0'); // Reset to top for new case study
    navigate(`/case-study/${slug}`);
  };

  // Define sections for navigation
  const sections = [
    { id: "introduction", label: "Introduction" },
    { id: "project-overview", label: "Project Overview" },
    { id: "challenge", label: "Challenge" },
    { id: "research", label: "Research" },
    { id: "solution", label: "Solution" },
    { id: "impact", label: "Impact" },
    { id: "conclusion", label: "Conclusion" }
  ];

  const renderContent = () => {
    if (caseStudy.fullContent) {
      return (
        <div className="space-y-8 text-gray-700">
          <div id="introduction">
            <IntroductionSection introduction={caseStudy.fullContent.introduction || ''} />
          </div>

          <Separator className="my-6" />

          <div id="project-overview">
            <ProjectOverviewSection 
              projectOverview={caseStudy.fullContent.projectOverview || ''} 
              role={caseStudy.fullContent.role}
            />
          </div>

          <Separator className="my-6" />
          
          <div id="challenge">
            <ChallengeSection challenge={caseStudy.fullContent.challenge || ''} />
          </div>

          <Separator className="my-6" />
          
          <div id="research">
            <ResearchSection 
              methodologies={caseStudy.fullContent.research?.methodologies} 
              insights={caseStudy.fullContent.research?.insights}
            />
          </div>

          <Separator className="my-6" />
          
          <div id="solution">
            <SolutionSection solution={caseStudy.fullContent.solution || ''} />
          </div>

          <Separator className="my-6" />
          
          <div id="impact">
            <ImpactSection impact={caseStudy.fullContent.impact || ''} />
          </div>

          <Separator className="my-6" />
          
          <div id="conclusion">
            <ConclusionSection conclusion={caseStudy.fullContent.conclusion || ''} />
          </div>
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

  return (
    <div>
      <CaseStudyNavigation sections={sections} />
      
      {renderContent()}
      
      {/* Case Study Navigation */}
      <div className="mt-16 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          {/* Previous Case Study Link */}
          {prevCaseStudy && (
            <div 
              onClick={() => handleNavigation(prevCaseStudy.slug)}
              className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors cursor-pointer"
            >
              <ArrowLeft size={16} />
              <div className="flex flex-col items-start">
                <span className="text-xs text-gray-500">Previous Case Study</span>
                <span className="text-sm font-medium">{prevCaseStudy.title}</span>
              </div>
            </div>
          )}
          
          {/* Spacer when only next link is shown */}
          {!prevCaseStudy && nextCaseStudy && <div></div>}
          
          {/* Next Case Study Link */}
          {nextCaseStudy && (
            <div 
              onClick={() => handleNavigation(nextCaseStudy.slug)}
              className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors cursor-pointer ml-auto"
            >
              <div className="flex flex-col items-end">
                <span className="text-xs text-gray-500">Next Case Study</span>
                <span className="text-sm font-medium">{nextCaseStudy.title}</span>
              </div>
              <ArrowRight size={16} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyContent;
