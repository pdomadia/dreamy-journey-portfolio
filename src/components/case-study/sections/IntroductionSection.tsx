
import React from 'react';
import SectionTitle from '../SectionTitle';

interface IntroductionSectionProps {
  introduction: string;
}

const IntroductionSection: React.FC<IntroductionSectionProps> = ({ introduction }) => {
  // Split the introduction by \n\n to handle paragraph breaks
  const paragraphs = introduction.split('\n\n');
  
  return (
    <section>
      <SectionTitle number={1} title="Introduction: The Daily Challenge" />
      
      <div className="pl-7">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-base leading-relaxed mb-6">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};

export default IntroductionSection;
