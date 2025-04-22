
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
  link
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white/95 rounded-2xl overflow-hidden border border-[#e5e4e1] shadow-none flex flex-col transition hover:shadow-md hover:-translate-y-1 duration-200 card-hover">
      <div className="relative h-48 md:h-56 w-full bg-gray-100">
        {imageUrl && !imageError ? (
          <img
            src={imageUrl}
            alt={title}
            className={cn(
              "w-full h-full object-cover object-center select-none pointer-events-none"
            )}
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <span className="text-gray-500">No Image</span>
          </div>
        )}
        <span className="absolute bottom-3 left-3 text-xs md:text-sm font-medium text-white bg-[#31433a]/85 px-2.5 py-1.5 rounded-full shadow-sm z-10 select-none">
          {subtitle}
        </span>
      </div>
      <div className="flex flex-col flex-grow p-5 pb-4">
        <h3 className="text-lg md:text-[1.32rem] font-serif font-semibold text-[#31433a] leading-tight mb-1 line-clamp-2">
          {title}
        </h3>
        <p className="text-[#31433a]/90 text-sm md:text-[1.06rem] font-sans mb-4 line-clamp-2">
          {description}
        </p>
        <Link
          to={link}
          className="inline-flex items-center font-semibold text-base text-[#31433a] hover:underline group mt-auto"
        >
          View Case Study <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyCard;
