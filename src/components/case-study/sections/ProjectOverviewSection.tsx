
import React from 'react';
import { Calendar, Clock, Stethoscope } from 'lucide-react';
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
              <div className="space-y-4">
                <h3 className="font-medium text-blue-800 mb-1 flex items-center gap-2">
                  <Calendar className="text-blue-500" size={20} />
                  Scheduling System Enhancement
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-white p-2 rounded-full shadow-sm">
                      <Calendar className="text-blue-500" size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-blue-800">Appointment Optimization</p>
                      <p className="text-xs text-blue-700">Streamlining patient scheduling workflow</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-white p-2 rounded-full shadow-sm">
                      <Clock className="text-blue-500" size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-blue-800">Time Efficiency</p>
                      <p className="text-xs text-blue-700">Reducing administrative burden</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-white p-2 rounded-full shadow-sm">
                      <Stethoscope className="text-blue-500" size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-blue-800">Clinical Alignment</p>
                      <p className="text-xs text-blue-700">Meeting specialized oncology needs</p>
                    </div>
                  </div>
                </div>
                <p className="text-blue-800 mt-4">
                  {projectOverview}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {role && (
          <Card className="border-purple-200 shadow-sm">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg">
                <h3 className="font-medium text-purple-900 mb-4">UX Research and Product Design</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-white p-2 rounded-full shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-purple-900">Research</p>
                      <p className="text-xs text-purple-800">Stakeholder interviews</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-white p-2 rounded-full shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-purple-900">Design</p>
                      <p className="text-xs text-purple-800">User-centric solutions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-white p-2 rounded-full shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                        <path d="M18 21a8 8 0 0 0-16 0"></path>
                        <circle cx="10" cy="8" r="5"></circle>
                        <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-purple-900">Collaboration</p>
                      <p className="text-xs text-purple-800">Cross-functional teams</p>
                    </div>
                  </div>
                </div>
                <p className="text-purple-900">
                  {role}
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default ProjectOverviewSection;
