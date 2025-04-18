
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  const [imageError, setImageError] = useState(false);
  console.log(`Rendering case study card: ${title} with image: ${imageUrl}`);

  return (
    <div 
      className={cn(
        "reveal overflow-hidden rounded-xl bg-white shadow-sm border border-gray-200 transition-all duration-500 hover:shadow-md hover:-translate-y-1 flex flex-col h-full",
        index === 0 ? "reveal" : index === 1 ? "reveal reveal-delay-1" : "reveal reveal-delay-2"
      )}
    >
      <div className="relative overflow-hidden h-56">
        {imageUrl && (
          <img 
            src={imageError ? 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' : imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
            onLoad={() => console.log(`Successfully loaded image for ${title}: ${imageUrl}`)}
            onError={(e) => {
              console.error(`Failed to load image: ${imageUrl}`, e);
              setImageError(true);
              e.currentTarget.src = 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
            }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <span className="absolute bottom-3 left-3 text-xs font-medium text-white bg-forest-dark/80 px-2 py-1 rounded-full">
          {subtitle}
        </span>
      </div>
      
      <div className="flex flex-col flex-grow p-5">
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h3>
        <p className="text-charcoal/80 text-sm line-clamp-3 mb-4 flex-grow">{description}</p>
        
        <Link 
          to={link} 
          className="inline-flex items-center text-forest-dark font-medium hover:text-hunter-DEFAULT transition-colors group"
        >
          View Case Study
          <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyCard;
