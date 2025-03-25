
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
        {/* Project Overview Card with the new color palette */}
        <Card className="border border-teal-200 shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardContent className="p-0">
            <div className="bg-cream p-6 rounded-lg">
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full shadow-sm mr-4 border border-teal-100 transform transition-transform hover:scale-105 duration-300">
                  <Target className="text-teal-600" size={22} />
                </div>
                <div>
                  <p className="font-medium text-charcoal mb-2 text-lg">Objective:</p>
                  <p className="text-stone leading-relaxed">
                    This project aimed to overhaul the inefficient scheduling system at multiple oncology clinics, ensuring that every meeting between office managers and pharmaceutical representatives was as productive as possible.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* My Role Card with the new color palette */}
        {role && (
          <Card className="border border-amber-400 shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-cream to-earthy-light p-6 rounded-lg">
                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-full shadow-sm mr-4 border border-amber-200 transform transition-transform hover:scale-105 duration-300">
                    <UserCircle2 className="text-amber-600" size={22} />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal mb-2 text-lg">My Role:</p>
                    <p className="text-stone leading-relaxed">
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
