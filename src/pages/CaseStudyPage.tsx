
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { caseStudies } from '@/data/caseStudies';
import NotFoundState from '@/components/case-study/NotFoundState';
import CaseStudyHeader from '@/components/case-study/CaseStudyHeader';
import CaseStudyContent from '@/components/case-study/CaseStudyContent';

const CaseStudyPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const caseStudy = caseStudies.find(study => study.slug === id);
  
  // Handle scroll behavior
  useEffect(() => {
    // Scroll to top when navigating to a case study
    window.scrollTo(0, 0);
    
    // Clean up function to handle navigation back to home
    return () => {
      const savedPosition = sessionStorage.getItem('scrollPosition');
      if (savedPosition && window.location.pathname === '/') {
        setTimeout(() => {
          window.scrollTo(0, parseInt(savedPosition));
        }, 100);
      }
    };
  }, [id]);

  if (!caseStudy) {
    return (
      <Layout>
        <NotFoundState />
      </Layout>
    );
  }

  const handleBackClick = () => {
    navigate('/#case-studies');
  };

  return (
    <Layout>
      <div className="container-custom pt-24 pb-20 max-w-4xl mx-auto">
        <CaseStudyHeader caseStudy={caseStudy} onBackClick={handleBackClick} />

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-12">
          <CaseStudyContent caseStudy={caseStudy} />
        </div>
      </div>
    </Layout>
  );
};

export default CaseStudyPage;
