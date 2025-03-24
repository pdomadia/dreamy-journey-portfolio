
import React from 'react';
import { cn } from '@/lib/utils';

interface CaseStudyNavigationProps {
  sections: {
    id: string;
    label: string;
  }[];
  className?: string;
  position?: 'top' | 'side';
}

const CaseStudyNavigation: React.FC<CaseStudyNavigationProps> = ({ 
  sections, 
  className,
  position = 'top'
}) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Add offset for header height
      const yOffset = -100; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  if (position === 'side') {
    return (
      <div className={cn(
        "sticky top-24 self-start bg-white rounded-xl border border-gray-200 shadow-sm p-4",
        className
      )}>
        <h3 className="font-medium text-gray-800 mb-3 px-3">Jump to section</h3>
        <nav className="flex flex-col gap-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary text-left hover:bg-primary/10 rounded-md whitespace-nowrap transition-colors"
            >
              {section.label}
            </button>
          ))}
        </nav>
      </div>
    );
  }

  return (
    <div className={cn("mb-6 py-3 border-y border-gray-200 sticky top-0 bg-white/95 backdrop-blur-sm z-10", className)}>
      <nav className="flex items-center gap-1 overflow-x-auto pb-2 hide-scrollbar">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-primary hover:bg-primary/10 rounded-md whitespace-nowrap transition-colors"
          >
            {section.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default CaseStudyNavigation;
