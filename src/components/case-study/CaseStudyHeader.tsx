
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { CaseStudy } from '@/data/caseStudies';

interface CaseStudyHeaderProps {
  caseStudy: CaseStudy;
  onBackClick?: () => void;
}

const CaseStudyHeader: React.FC<CaseStudyHeaderProps> = ({ caseStudy, onBackClick }) => {
  const navigate = useNavigate();

  const handleBreadcrumbClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Save current scroll position
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
    <>
      {/* Breadcrumbs */}
      <Breadcrumb className="mb-6 text-gray-500 text-sm">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/#case-studies" onClick={handleBreadcrumbClick}>Case Studies</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{caseStudy?.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Back Button */}
      <div className="mb-10">
        <Button 
          variant="outline" 
          className="border-gray-300 hover:bg-gray-100"
          onClick={onBackClick}
        >
          <ArrowLeft size={16} />
          Back to All Case Studies
        </Button>
      </div>

      {/* Title & Subtitle */}
      <div className="mb-8 text-center">
        <div className="inline-flex items-center gap-2 text-gray-500 mb-4">
          <FileText size={16} />
          <span className="text-sm font-medium">{caseStudy?.subtitle}</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-4">
          {caseStudy?.title}
        </h1>
        
        <div className="h-1 w-16 bg-forest-DEFAULT rounded mt-2 mb-6 mx-auto"></div>
      </div>
    </>
  );
};

export default CaseStudyHeader;
