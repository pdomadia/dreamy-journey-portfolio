
import React from 'react';
import { ArrowRight, XCircle, Clock, MessageSquare } from 'lucide-react';
import SectionTitle from '../SectionTitle';
import { Card, CardContent } from '@/components/ui/card';

interface ResearchSectionProps {
  methodologies?: string[];
  insights?: string[];
}

const ResearchSection: React.FC<ResearchSectionProps> = ({ 
  methodologies = [],
  insights = [] 
}) => {
  // Key research insights that inform the design
  const keyResearchInsights = [
    {
      title: "Mismatched Expertise",
      description: "Scheduling systems didn't align with clinical specialties",
      icon: <XCircle size={20} className="text-red-500" />
    },
    {
      title: "Time Wastage",
      description: "Staff spent excessive time on administrative tasks",
      icon: <Clock size={20} className="text-amber-500" />
    },
    {
      title: "Communication Gaps",
      description: "Information didn't flow efficiently between departments",
      icon: <MessageSquare size={20} className="text-blue-500" />
    }
  ];

  return (
    <section>
      <SectionTitle 
        number={4} 
        title="Research Insights" 
        className="flex items-center gap-2"
      />
      
      <div className="pl-7">
        <div className="mb-8">
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
        
        {/* Flow diagram for key insights */}
        <Card className="border-gray-200 shadow-sm mb-8">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-6 text-gray-800">Key Research Findings:</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              {keyResearchInsights.map((insight, index) => (
                <React.Fragment key={index}>
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-white p-3 rounded-full border border-gray-200 shadow-sm mb-3">
                      {insight.icon}
                    </div>
                    <h4 className="font-medium text-gray-800 mb-2">{insight.title}</h4>
                    <p className="text-sm text-gray-600">{insight.description}</p>
                  </div>
                  
                  {index < keyResearchInsights.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 transform -translate-y-1/2 left-0 right-0" style={{ left: `${(100 / keyResearchInsights.length) * (index + 1) - 5}%` }}>
                      <ArrowRight className="text-gray-400" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-base font-medium mb-3 text-gray-700">Detailed Insights:</h3>
              <ul className="space-y-2.5">
                {insights.map((insight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-forest-lightest flex items-center justify-center mt-0.5">
                      <span className="text-forest-DEFAULT text-xs">{index + 1}</span>
                    </div>
                    <span className="text-gray-600">{insight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ResearchSection;
