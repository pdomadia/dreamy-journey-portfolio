
import React from 'react';
import { ChartBar, Info } from 'lucide-react';
import SectionTitle from '../SectionTitle';

interface ChallengeSectionProps {
  challenge: string;
}

const ChallengeSection: React.FC<ChallengeSectionProps> = ({ challenge }) => {
  return (
    <section>
      <SectionTitle number={3} title="The Challenge" />
      
      <div className="pl-7">
        <p className="mb-6 text-base leading-relaxed">
          {challenge}
        </p>
        
        {/* Visual: Infographic showing old system challenges */}
        <div className="bg-white p-6 rounded-lg my-6 border border-gray-200">
          <h3 className="text-base font-medium mb-4 flex items-center gap-2 text-gray-700">
            <ChartBar className="text-forest-dark" size={18} />
            Key Challenges with Old System
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
              <div className="text-red-500 text-2xl font-bold mb-2">68%</div>
              <p className="text-gray-600 text-sm">Mismatched expertise between clinic needs and pharmaceutical representatives</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
              <div className="text-red-500 text-2xl font-bold mb-2">12.5 hrs</div>
              <p className="text-gray-600 text-sm">Average weekly time spent on scheduling logistics</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
              <div className="text-red-500 text-2xl font-bold mb-2">42%</div>
              <p className="text-gray-600 text-sm">Staff reported missing critical information due to scheduling issues</p>
            </div>
          </div>
        </div>
        
        {/* Visual: Highlighted Box */}
        <div className="bg-amber-50 p-4 rounded-lg my-6 border-l-4 border-amber-200">
          <div className="flex">
            <div className="text-amber-500 mr-3 flex-shrink-0">
              <Info size={20} />
            </div>
            <p className="text-amber-800">
              <strong>Over 25% of appointments were ineffective</strong>, failing to deliver necessary treatment updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;
