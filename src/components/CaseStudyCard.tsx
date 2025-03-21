
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default Link behavior
    // Navigate programmatically
    navigate(link, { replace: true }); // Using replace to avoid adding to history
  };

  return (
    <Link 
      to={link}
      onClick={handleClick}
      className={cn(
        "block flex flex-col rounded-md overflow-hidden bg-white shadow-sm border border-earthy-dark/20 reveal card-hover transition-all duration-500 group h-full",
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
          <span className="text-xs text-earthy-light bg-charcoal/50 backdrop-blur-sm px-3 py-1 rounded-full">
            {subtitle}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-medium mb-3">{title}</h3>
        <p className="text-charcoal/80 mb-4 flex-grow">{description}</p>
        <div 
          className="inline-flex items-center gap-2 text-forest-dark group-hover:gap-3 transition-all duration-300"
        >
          View case study
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default CaseStudyCard;
