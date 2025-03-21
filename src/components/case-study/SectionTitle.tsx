
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  number: number;
  title: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ number, title, className }) => {
  return (
    <div className={cn("flex items-center gap-2 mb-4", className)}>
      <div className="w-5 h-5 bg-forest-light rounded-full flex items-center justify-center">
        <span className="text-forest-dark text-xs font-bold">{number}</span>
      </div>
      <h2 className="text-xl font-medium text-gray-800">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
