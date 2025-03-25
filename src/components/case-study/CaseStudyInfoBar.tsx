
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { ExternalLink } from 'lucide-react';

// Define interface for Tool type
interface Tool {
  name: string;
  iconSrc: string;
}

interface CaseStudyInfoBarProps {
  client?: string;
  website?: string;
  tools?: Tool[];
}

const CaseStudyInfoBar = ({
  client = "RxVantage",
  website = "rxvantage.com",
  tools = [
    { 
      name: "User Interviews", 
      iconSrc: "/lovable-uploads/e1d76ca1-5c5c-402d-8ff0-e8b37cab26a0.png" 
    },
    { 
      name: "Figma", 
      iconSrc: "/lovable-uploads/f4b2905e-c5b9-4fb3-bb5f-d316cfae6db5.png" 
    },
    { 
      name: "Heap", 
      iconSrc: "/lovable-uploads/47771f7c-3d67-4ad6-a474-09a6d5d303ab.png" 
    },
    { 
      name: "Jira", 
      iconSrc: "/lovable-uploads/85fcfc11-3a56-4ebc-9e1f-13803ccf84cf.png" 
    },
  ]
}: CaseStudyInfoBarProps) => {
  return (
    <div className="w-full flex justify-center mb-10">
      <div className="bg-gray-50 border border-gray-100 rounded-lg py-3 px-4 flex flex-wrap items-center justify-center gap-3 text-gray-500 text-sm">
        {/* Client Section */}
        <div className="flex items-center">
          <span className="font-medium mr-1">Client:</span>
          <span>{client}</span>
        </div>
        
        <Separator orientation="vertical" className="h-4 mx-1 bg-gray-300" />
        
        {/* Website Section */}
        <div className="flex items-center">
          <span className="font-medium mr-1">Website:</span>
          <a 
            href={`https://${website}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center hover:text-gray-700 hover:underline transition-colors"
          >
            {website}
            <ExternalLink size={14} className="ml-1" />
          </a>
        </div>
        
        <Separator orientation="vertical" className="h-4 mx-1 bg-gray-300" />
        
        {/* Tools Section */}
        <div className="flex items-center flex-wrap gap-2">
          <span className="font-medium mr-1">Tools:</span>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, index) => (
              <div 
                key={index} 
                className="flex items-center gap-1.5"
              >
                <img 
                  src={tool.iconSrc} 
                  alt={`${tool.name} icon`} 
                  className="w-4 h-4 object-contain" 
                />
                <span>{tool.name}</span>
                {/* Add a separator after each tool except the last one */}
                {index < tools.length - 1 && (
                  <span className="text-gray-300">•</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyInfoBar;
