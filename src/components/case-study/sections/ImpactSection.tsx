
import React from 'react';
import { ChartBar, ArrowUpSquare, ArrowDownSquare } from 'lucide-react';
import SectionTitle from '../SectionTitle';

interface ImpactSectionProps {
  impact: string;
}

const ImpactSection: React.FC<ImpactSectionProps> = ({ impact }) => {
  return (
    <section>
      <SectionTitle 
        number={6} 
        title="Impact and Reflections" 
        className="flex items-center gap-2"
      />
      
      <div className="pl-7">
        <p className="mb-6 text-base leading-relaxed">
          {impact}
        </p>

        {/* New, simplified visualization using comparison cards */}
        <div className="bg-white p-5 rounded-lg my-6 border border-gray-200">
          <h3 className="text-base font-medium mb-4 text-gray-700 flex items-center gap-2">
            <ChartBar className="text-forest-dark" size={18} />
            Results After Implementation
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Before & After: Administrative Burden */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-gray-600">Administrative Burden</h4>
              
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex-shrink-0 p-1.5 bg-red-100 rounded-md">
                  <ArrowUpSquare size={20} className="text-red-500" />
                </div>
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl font-bold text-gray-800">100%</span>
                    <span className="text-xs text-gray-500">BEFORE</span>
                  </div>
                  <p className="text-xs text-gray-500">High administrative overhead</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex-shrink-0 p-1.5 bg-green-100 rounded-md">
                  <ArrowDownSquare size={20} className="text-green-500" />
                </div>
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl font-bold text-gray-800">70%</span>
                    <span className="text-xs text-gray-500">AFTER</span>
                  </div>
                  <p className="text-xs text-gray-500">30% reduction in burden</p>
                </div>
              </div>
            </div>
            
            {/* Before & After: Meeting Relevance */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-gray-600">Meeting Relevance</h4>
              
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex-shrink-0 p-1.5 bg-red-100 rounded-md">
                  <ArrowDownSquare size={20} className="text-red-500" />
                </div>
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl font-bold text-gray-800">75%</span>
                    <span className="text-xs text-gray-500">BEFORE</span>
                  </div>
                  <p className="text-xs text-gray-500">Low meeting relevance score</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex-shrink-0 p-1.5 bg-green-100 rounded-md">
                  <ArrowUpSquare size={20} className="text-green-500" />
                </div>
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl font-bold text-gray-800">95%</span>
                    <span className="text-xs text-gray-500">AFTER</span>
                  </div>
                  <p className="text-xs text-gray-500">20% improvement in relevance</p>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-xs text-gray-500 mt-5 text-center border-t border-gray-100 pt-4">
            Administrative burden decreased by 30% while meeting relevance improved by 20%
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
