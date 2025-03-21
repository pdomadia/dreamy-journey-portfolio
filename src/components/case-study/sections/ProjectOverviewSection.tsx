
import React from 'react';
import { Target } from 'lucide-react';
import SectionTitle from '../SectionTitle';

interface ProjectOverviewSectionProps {
  projectOverview: string;
  role?: string;
}

const ProjectOverviewSection: React.FC<ProjectOverviewSectionProps> = ({ 
  projectOverview,
  role
}) => {
  return (
    <section>
      <SectionTitle number={2} title="Project Overview" />
      
      <div className="pl-7">
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-200 mb-6">
          <div className="flex items-start">
            <Target className="text-blue-500 mt-1 mr-3 flex-shrink-0" size={20} />
            <div>
              <p className="font-medium text-blue-800 mb-1">Objective:</p>
              <p className="text-blue-800">
                {projectOverview}
              </p>
            </div>
          </div>
        </div>
        
        {role && (
          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-200">
            <p className="text-purple-900 font-medium mb-2">My Role:</p>
            <p className="text-purple-900">
              {role}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectOverviewSection;
