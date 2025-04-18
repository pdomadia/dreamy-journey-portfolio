
import React, { useState, useEffect } from 'react';
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
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
  useEffect(() => {
    setImageError(false);
    setIsImageLoaded(false);
    
    // More detailed logging
    console.log(`CaseStudy Card - Setting up image for: ${title}`);
    console.log(`Image URL: "${imageUrl}"`);
    
    // Verify the image URL is valid
    if (!imageUrl || imageUrl.trim() === '') {
      console.error(`Empty or invalid image URL for: ${title}`);
      setImageError(true);
    }
  }, [imageUrl, title]);

  return (
    <Link 
      to={link}
      className={cn(
        "block reveal overflow-hidden rounded-xl bg-white shadow-sm border border-gray-200 transition-all duration-500 hover:shadow-md hover:-translate-y-1",
        index === 0 ? "reveal" : index === 1 ? "reveal reveal-delay-1" : "reveal reveal-delay-2"
      )}
    >
      <div className="flex flex-col h-full">
        <div className="relative overflow-hidden h-56 bg-gray-100">
          {imageUrl && !imageError ? (
            <img 
              src={imageUrl}
              alt={title} 
              className={cn(
                "w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105",
                isImageLoaded ? "opacity-100" : "opacity-0"
              )}
              onLoad={(e) => {
                console.log(`✅ Image loaded successfully for ${title}`);
                console.log(`Image dimensions: ${(e.target as HTMLImageElement).naturalWidth}x${(e.target as HTMLImageElement).naturalHeight}`);
                setIsImageLoaded(true);
              }}
              onError={(e) => {
                console.error(`❌ Failed to load image for ${title}: ${imageUrl}`);
                console.error('Error details:', e);
                setImageError(true);
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <span className="text-gray-500">
                {imageError ? `Image failed to load: ${imageUrl}` : 'Image not available'}
              </span>
            </div>
          )}
          
          {imageUrl && !imageError && !isImageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <span className="text-gray-500">Loading image...</span>
            </div>
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <span className="absolute bottom-3 left-3 text-xs font-medium text-white bg-forest-dark/80 px-2 py-1 rounded-full">
            {subtitle}
          </span>
        </div>
        
        <div className="flex flex-col flex-grow p-5">
          <h3 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h3>
          <p className="text-charcoal/80 text-sm line-clamp-3 mb-4 flex-grow">{description}</p>
          
          <span className="inline-flex items-center text-forest-dark font-medium group">
            View Case Study
            <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CaseStudyCard;
