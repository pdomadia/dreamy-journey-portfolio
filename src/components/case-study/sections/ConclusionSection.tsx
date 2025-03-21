
import React from 'react';
import SectionTitle from '../SectionTitle';

interface ConclusionSectionProps {
  conclusion: string;
}

const ConclusionSection: React.FC<ConclusionSectionProps> = ({ conclusion }) => {
  return (
    <section>
      <SectionTitle number={7} title="Conclusion" />
      
      <div className="pl-7">
        <p className="mb-6 text-base leading-relaxed">
          {conclusion}
        </p>
      </div>
    </section>
  );
};

export default ConclusionSection;
