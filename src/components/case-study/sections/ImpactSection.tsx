
import React from 'react';
import { ChartBar, Quote, CalendarDays, LayoutDashboard } from 'lucide-react';
import SectionTitle from '../SectionTitle';
import { 
  Chart, 
  ChartContainer 
} from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent } from '@/components/ui/card';

interface ImpactSectionProps {
  impact: string;
}

const ImpactSection: React.FC<ImpactSectionProps> = ({ impact }) => {
  // Data for adoption rate chart
  const adoptionData = [
    { month: 'Jan', adoption: 15 },
    { month: 'Feb', adoption: 28 },
    { month: 'Mar', adoption: 42 },
    { month: 'Apr', adoption: 55 },
    { month: 'May', adoption: 70 },
  ];

  return (
    <section>
      <SectionTitle 
        number={6} 
        title="Impact and Reflections" 
        className="flex items-center gap-2"
      />
      
      <div className="pl-7">
        <div className="space-y-6">
          <h3 className="text-lg font-medium text-gray-800">Impact and Initial Observations</h3>
          <p className="text-base leading-relaxed">
            Current Implementation Status: As the new scheduling system rolls out in phases across oncology clinics, 
            initial feedback points to improvements in operational efficiency and user satisfaction. 
            Detailed metrics are still being gathered.
          </p>
          
          {/* Quote Card */}
          <div className="my-6">
            <Card className="bg-gray-50 border border-gray-200 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Quote className="text-forest-DEFAULT mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="text-lg italic font-serif text-gray-700 mb-4">
                      "The scheduling process feels more aligned with our daily needs"
                    </p>
                    <p className="text-sm text-gray-500 font-medium">— Clinic Office Manager</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <h4 className="text-base font-medium text-gray-700">Preliminary Feedback:</h4>
          <p className="text-base leading-relaxed">
            User Comments: Early adopters note reduced setup times and smoother operations.
          </p>
          
          <p className="text-base leading-relaxed">
            Reflections on Ongoing Implementation: The ongoing rollout provides critical insights into the system's practical application, 
            highlighting areas for further refinement.
          </p>
          
          {/* Implementation Timeline Chart */}
          <div className="my-8 p-4 border border-gray-200 rounded-lg bg-white">
            <h4 className="text-base font-medium text-gray-700 mb-4 flex items-center gap-2">
              <CalendarDays className="text-forest-dark" size={18} />
              Implementation Timeline & Adoption Rate
            </h4>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={adoptionData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" tick={{ fill: '#666' }} />
                  <YAxis tick={{ fill: '#666' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #ccc',
                      borderRadius: '4px' 
                    }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="adoption" 
                    stroke="#4d7c0f" 
                    strokeWidth={2} 
                    dot={{ r: 4, fill: '#4d7c0f' }} 
                    activeDot={{ r: 6 }} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-center text-gray-500 mt-2">
              Monthly adoption rates across oncology clinics (Jan-May 2023)
            </p>
          </div>
          
          <h3 className="text-lg font-medium text-gray-800 mt-8">Looking Forward</h3>
          <p className="text-base leading-relaxed">
            The implementation's full impact will be evaluated over the next few months, with continuous adjustments based on user feedback.
          </p>
          
          <p className="text-base leading-relaxed">
            Anticipated Enhancements: Adjustments to user interface and functionality are expected, based on early feedback.
          </p>
          
          {/* Roadmap Graphic */}
          <div className="my-8 p-4 border border-gray-200 rounded-lg bg-white">
            <h4 className="text-base font-medium text-gray-700 mb-4 flex items-center gap-2">
              <LayoutDashboard className="text-forest-dark" size={18} />
              Future Enhancement Roadmap
            </h4>
            
            <div className="flex flex-col gap-6 md:flex-row justify-between my-4">
              {/* Phase 1 */}
              <div className="flex-1 relative">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-forest-light flex items-center justify-center text-white font-medium">
                    1
                  </div>
                  <div className="h-1 flex-grow bg-gray-200 mx-2"></div>
                </div>
                <div className="p-4 border border-forest-light rounded-lg bg-forest-lightest">
                  <h5 className="font-medium mb-2">UI Improvements</h5>
                  <p className="text-sm text-gray-600">Dashboard enhancements based on user feedback</p>
                  <div className="text-xs text-gray-500 mt-2">Q3 2023</div>
                </div>
              </div>
              
              {/* Phase 2 */}
              <div className="flex-1 relative">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-forest-light flex items-center justify-center text-white font-medium">
                    2
                  </div>
                  <div className="h-1 flex-grow bg-gray-200 mx-2"></div>
                </div>
                <div className="p-4 border border-forest-light rounded-lg bg-forest-lightest">
                  <h5 className="font-medium mb-2">Customization Options</h5>
                  <p className="text-sm text-gray-600">Personalized views and notifications</p>
                  <div className="text-xs text-gray-500 mt-2">Q4 2023</div>
                </div>
              </div>
              
              {/* Phase 3 */}
              <div className="flex-1 relative">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-forest-light flex items-center justify-center text-white font-medium">
                    3
                  </div>
                  <div className="h-1 flex-grow bg-gray-200 mx-2 opacity-0"></div>
                </div>
                <div className="p-4 border border-forest-light rounded-lg bg-forest-lightest">
                  <h5 className="font-medium mb-2">Integration Expansion</h5>
                  <p className="text-sm text-gray-600">Connect with additional healthcare systems</p>
                  <div className="text-xs text-gray-500 mt-2">Q1 2024</div>
                </div>
              </div>
            </div>
            
            <p className="text-xs text-center text-gray-500 mt-4">
              Planned enhancements based on initial user feedback and clinical requirements
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
