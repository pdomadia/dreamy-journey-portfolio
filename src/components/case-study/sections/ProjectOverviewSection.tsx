
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
            <div className="bg-cream p-6 rounded-lg" style={{ 
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23e0e0dd' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E\")",
              backgroundSize: '200px'
            }}>
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
          <Card className="border border-mustard-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-cream to-earthy-light p-6 rounded-lg" style={{ 
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23e0e0dd' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E\")",
                backgroundSize: '200px'
              }}>
                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-full shadow-sm mr-4 border border-mustard-100 transform transition-transform hover:scale-105 duration-300">
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
