
import React from 'react';
import { Target, UserCircle2 } from 'lucide-react';
import SectionTitle from '../SectionTitle';
import { Card, CardContent } from '@/components/ui/card';

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
      
      <div className="pl-7 space-y-6">
        <Card className="border-blue-200 shadow-sm">
          <CardContent className="p-0">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
              <div className="flex items-start">
                <div className="bg-white p-2 rounded-full shadow-sm mr-4">
                  <Target className="text-blue-500" size={20} />
                </div>
                <div>
                  <p className="font-medium text-blue-800 mb-1">Objective:</p>
                  <p className="text-blue-800">
                    This project aimed to overhaul the inefficient scheduling system at multiple oncology clinics, ensuring that every meeting between office managers and pharmaceutical representatives was as productive as possible.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {role && (
          <Card className="border-purple-200 shadow-sm">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg">
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full shadow-sm mr-4">
                    <UserCircle2 className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-purple-900 mb-1">My Role:</p>
                    <p className="text-purple-900">
                      {role}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default ProjectOverviewSection;
