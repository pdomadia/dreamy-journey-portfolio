
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { User, ExternalLink, FileStack, Trello, BarChart4 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Define interface for Tool type
interface Tool {
  name: string;
  icon: React.ReactNode;
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
    { name: "User Interviews", icon: <User size={16} /> },
    { name: "Figma", icon: <FileStack size={16} className="text-[#F24E1E]" /> },
    { name: "FigJam", icon: <FileStack size={16} className="text-[#A259FF]" /> },
    { name: "Heap", icon: <BarChart4 size={16} className="text-[#3EAAAF]" /> },
    { name: "Jira", icon: <Trello size={16} className="text-[#0052CC]" /> },
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
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, index) => (
              <Badge 
                key={index} 
                variant="outline"
                className="flex items-center gap-1 bg-white text-gray-600 hover:bg-gray-100 transition-colors"
              >
                {tool.icon}
                <span>{tool.name}</span>
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyInfoBar;
