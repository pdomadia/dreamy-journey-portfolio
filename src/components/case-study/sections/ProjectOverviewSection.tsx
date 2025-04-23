
import React from 'react';
import { Target, Clock, UserCircle2, Users } from 'lucide-react';
import SectionTitle from '../SectionTitle';
import { Card, CardContent } from '@/components/ui/card';

interface ProjectOverviewSectionProps {
  projectOverview: string;
  role?: {
    timeline: string;
    position: string;
    team: string;
  };
}

const ProjectOverviewSection: React.FC<ProjectOverviewSectionProps> = ({ 
  projectOverview,
  role
}) => {
  return (
    <section>
      <SectionTitle number={2} title="Project Overview" />
      
      <div className="pl-7 space-y-6">
        {/* Project Overview Card */}
        <Card className="border border-teal-200 shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardContent className="p-0">
            <div className="bg-gradient-to-r from-rose-50 to-yellow-50 p-6 rounded-lg">
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full shadow-sm mr-4 border border-teal-100 transform transition-transform hover:scale-105 duration-300">
                  <Target className="text-teal-600" size={22} />
                </div>
                <div>
                  <p className="font-medium text-charcoal mb-2 text-lg">Objective:</p>
                  <p className="text-stone leading-relaxed">
                    {projectOverview}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Role Information Cards */}
        {role && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Timeline Card */}
            <Card className="border border-amber-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
                  <div className="flex items-start">
                    <div className="bg-white p-3 rounded-full shadow-sm mr-4 border border-amber-200 transform transition-transform hover:scale-105 duration-300">
                      <Clock className="text-amber-600" size={22} />
                    </div>
                    <div>
                      <p className="font-medium text-charcoal mb-2 text-lg">Timeline</p>
                      <p className="text-stone leading-relaxed">
                        {role.timeline}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Role Card */}
            <Card className="border border-emerald-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-lg">
                  <div className="flex items-start">
                    <div className="bg-white p-3 rounded-full shadow-sm mr-4 border border-emerald-200 transform transition-transform hover:scale-105 duration-300">
                      <UserCircle2 className="text-emerald-600" size={22} />
                    </div>
                    <div>
                      <p className="font-medium text-charcoal mb-2 text-lg">Role</p>
                      <p className="text-stone leading-relaxed">
                        {role.position}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Team Card */}
            <Card className="border border-blue-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                  <div className="flex items-start">
                    <div className="bg-white p-3 rounded-full shadow-sm mr-4 border border-blue-200 transform transition-transform hover:scale-105 duration-300">
                      <Users className="text-blue-600" size={22} />
                    </div>
                    <div>
                      <p className="font-medium text-charcoal mb-2 text-lg">Team</p>
                      <p className="text-stone leading-relaxed">
                        {role.team}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectOverviewSection;
