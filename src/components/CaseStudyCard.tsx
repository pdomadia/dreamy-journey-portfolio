
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CaseStudyCardProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  index: number;
  link: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  subtitle,
  description,
  imageUrl,
  index,
  link
}) => {
  return (
    <div 
      className={cn(
        "flex flex-col rounded-xl overflow-hidden bg-white shadow-sm border border-sand/20 reveal card-hover transition-all duration-500 group",
        index === 1 ? "reveal-delay-1" : index === 2 ? "reveal-delay-2" : ""
      )}
    >
      <div className="relative h-52 lg:h-64 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url('${imageUrl}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent opacity-70" />
        <div className="absolute bottom-0 left-0 p-6">
          <span className="text-xs text-cream/90 bg-charcoal/50 backdrop-blur-sm px-3 py-1 rounded-full">
            {subtitle}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-medium mb-3">{title}</h3>
        <p className="text-charcoal/80 mb-4 flex-grow">{description}</p>
        <a 
          href={link} 
          className="inline-flex items-center gap-2 text-terracotta hover:text-terracotta/80 group-hover:gap-3 transition-all duration-300"
        >
          View case study
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default CaseStudyCard;
