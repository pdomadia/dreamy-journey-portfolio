
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { caseStudies } from '@/data/caseStudies';
import NotFoundState from '@/components/case-study/NotFoundState';
import CaseStudyHeader from '@/components/case-study/CaseStudyHeader';
import CaseStudyContent from '@/components/case-study/CaseStudyContent';
import CaseStudyNavigation from '@/components/case-study/CaseStudyNavigation';

const CaseStudyPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const caseStudy = caseStudies.find(study => study.slug === id);
  
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
  
  // Handle scroll behavior
  useEffect(() => {
    // Scroll to top when navigating to a case study
    window.scrollTo(0, 0);
  }, [id]);

  if (!caseStudy) {
    return (
      <Layout>
        <NotFoundState />
      </Layout>
    );
  }

  const handleBackClick = () => {
    // Save scroll position before navigating
    sessionStorage.setItem('scrollPosition', '1000'); // Approximate position of case studies section
    navigate('/');
    
    // Add a small delay to ensure navigation completes before scrolling
    setTimeout(() => {
      const caseStudiesSection = document.getElementById('case-studies');
      if (caseStudiesSection) {
        caseStudiesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <Layout>
      <div className="container-custom pt-24 pb-20 max-w-7xl mx-auto">
        <CaseStudyHeader caseStudy={caseStudy} onBackClick={handleBackClick} />

        <div className="flex flex-col md:flex-row gap-6 mt-8">
          {/* Side Navigation - visible on all screens */}
          <div className="md:w-56">
            <CaseStudyNavigation sections={sections} position="side" className="mb-6 md:mb-0" />
          </div>
          
          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8 mb-12">
              <CaseStudyContent caseStudy={caseStudy} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CaseStudyPage;
