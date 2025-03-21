
import React from 'react';
import { Lightbulb } from 'lucide-react';
import SectionTitle from '../SectionTitle';

interface SolutionSectionProps {
  solution: string;
}

const SolutionSection: React.FC<SolutionSectionProps> = ({ solution }) => {
  return (
    <section>
      <SectionTitle 
        number={5} 
        title="Solution Implementation" 
        className="flex items-center gap-2"
      />
      
      <div className="pl-7">
        <p className="mb-6 text-base leading-relaxed">
          {solution}
        </p>

        {/* Solution visual */}
        <div className="grid md:grid-cols-2 gap-6 my-6 p-5 bg-gray-50 rounded-lg border border-gray-200">
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <div className="text-gray-800 font-medium mb-2">Before Solution</div>
            <div className="bg-gray-100 p-3 rounded">
              <div className="h-6 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Old interface with limited categorization options
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <div className="text-forest-DEFAULT font-medium mb-2">After Solution</div>
            <div className="bg-gray-100 p-3 rounded">
              <div className="h-6 bg-forest-light rounded mb-2"></div>
              <div className="h-4 bg-forest-light rounded w-3/4 mb-2"></div>
              <div className="flex gap-2 mb-2">
                <div className="h-4 w-1/4 bg-blue-200 rounded"></div>
                <div className="h-4 w-1/4 bg-green-200 rounded"></div>
                <div className="h-4 w-1/4 bg-amber-200 rounded"></div>
              </div>
              <div className="h-4 bg-forest-light rounded w-1/2"></div>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              New interface with categorization by information needs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
