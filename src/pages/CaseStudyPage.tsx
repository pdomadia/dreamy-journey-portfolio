
import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import { caseStudies } from '@/data/caseStudies';
import NotFoundState from '@/components/case-study/NotFoundState';
import CaseStudyHeader from '@/components/case-study/CaseStudyHeader';
import CaseStudyContent from '@/components/case-study/CaseStudyContent';

const CaseStudyPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const caseStudy = caseStudies.find(study => study.slug === id);

  if (!caseStudy) {
    return (
      <Layout>
        <NotFoundState />
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container-custom pt-24 pb-20 max-w-4xl mx-auto">
        <CaseStudyHeader caseStudy={caseStudy} />

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-12">
          <CaseStudyContent caseStudy={caseStudy} />
        </div>
      </div>
    </Layout>
  );
};

export default CaseStudyPage;
