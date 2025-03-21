
import React from 'react';
import { Search, CheckSquare } from 'lucide-react';
import SectionTitle from '../SectionTitle';

interface ResearchSectionProps {
  methodologies?: string[];
  insights?: string[];
}

const ResearchSection: React.FC<ResearchSectionProps> = ({ 
  methodologies = [],
  insights = [] 
}) => {
  return (
    <section>
      <SectionTitle 
        number={4} 
        title="Research Insights" 
        className="flex items-center gap-2"
      />
      
      <div className="pl-7">
        <div className="mb-6">
          <h3 className="text-base font-medium mb-3 text-gray-700">Methodologies Employed:</h3>
          <ul className="space-y-2.5 ml-2">
            {methodologies.map((methodology, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-gray-100 flex items-center justify-center mt-0.5">
                  <span className="text-gray-500 text-xs">{index + 1}</span>
                </div>
                <span className="text-gray-600">{methodology}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-base font-medium mb-3 text-gray-700">Key Insights:</h3>
          <ul className="space-y-2.5 ml-2">
            {insights.map((insight, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckSquare size={16} className="text-forest-DEFAULT mt-1 flex-shrink-0" />
                <span className="text-gray-600">{insight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
