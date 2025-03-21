
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  const location = useLocation();

  const handleBreadcrumbClick = (e: React.MouseEvent) => {
    // When not on homepage, save scroll position for returning to case studies section
    if (location.pathname !== '/') {
      e.preventDefault();
      sessionStorage.setItem('scrollPosition', '1000'); // Approximate position of case studies section
      window.location.href = '/#case-studies';
    }
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
          asChild
        >
          <Link to="/#case-studies">
            <ArrowLeft size={16} />
            Back to All Case Studies
          </Link>
        </Button>
      </div>

      {/* Title & Subtitle */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 text-gray-500 mb-4">
          <FileText size={16} />
          <span className="text-sm font-medium">{caseStudy?.subtitle}</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-4">
          Case Study: {caseStudy?.title}
        </h1>
        
        <div className="h-1 w-16 bg-forest-DEFAULT rounded mt-2 mb-6"></div>
      </div>
    </>
  );
};

export default CaseStudyHeader;
