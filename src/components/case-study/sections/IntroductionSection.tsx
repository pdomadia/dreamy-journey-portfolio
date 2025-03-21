
import React from 'react';
import SectionTitle from '../SectionTitle';

interface IntroductionSectionProps {
  introduction: string;
}

const IntroductionSection: React.FC<IntroductionSectionProps> = ({ introduction }) => {
  return (
    <section>
      <SectionTitle number={1} title="Introduction: The Daily Challenge" />
      
      <div className="pl-7">
        <p className="text-base leading-relaxed mb-6">
          {introduction}
        </p>
      </div>
    </section>
  );
};

export default IntroductionSection;
