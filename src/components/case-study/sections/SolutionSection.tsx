
import React from 'react';
import { Lightbulb } from 'lucide-react';
import SectionTitle from '../SectionTitle';

interface SolutionSectionProps {
  solution: string;
}

const SolutionSection: React.FC<SolutionSectionProps> = ({ solution }) => {
  // Add console logs to check if component is being rendered
  console.log("Rendering SolutionSection component");
  
  return (
    <section>
      <SectionTitle 
        number={5} 
        title="Solution Implementation" 
        className="flex items-center gap-2"
      />
      
      <div className="pl-7">
        <p className="mb-6 text-base leading-relaxed">
          {solution}
        </p>

        {/* Solution visual */}
        <div className="space-y-6 my-6">
          {/* Original Interface */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="text-gray-800 font-medium mb-4">Original Interface</div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                {/* Add console logs to check image paths */}
                <img 
                  src="/lovable-uploads/cd5a15e4-2ad4-4131-a541-25122cbadc26.png" 
                  alt="Original settings interface"
                  className="w-full h-auto"
                  onLoad={() => console.log("Image loaded successfully: /lovable-uploads/cd5a15e4-2ad4-4131-a541-25122cbadc26.png")}
                  onError={(e) => {
                    console.error("Error loading image:", e.currentTarget.src);
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
                <p className="text-xs text-gray-500 p-3 border-t">
                  Complex settings with limited categorization options
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/ba9809e1-e2fa-443a-81ca-03650309e89f.png" 
                  alt="Original appointment interface"
                  className="w-full h-auto"
                  onLoad={() => console.log("Image loaded successfully: /lovable-uploads/ba9809e1-e2fa-443a-81ca-03650309e89f.png")}
                  onError={(e) => {
                    console.error("Error loading image:", e.currentTarget.src);
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
                <p className="text-xs text-gray-500 p-3 border-t">
                  Basic appointment management without information categorization
                </p>
              </div>
            </div>
          </div>

          {/* New Interface */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="text-forest-DEFAULT font-medium mb-4">New Interface</div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/0230be7e-9cbe-48ea-b0fa-b621bf5f7be0.png" 
                  alt="New settings interface"
                  className="w-full h-auto"
                  onLoad={() => console.log("Image loaded successfully: /lovable-uploads/0230be7e-9cbe-48ea-b0fa-b621bf5f7be0.png")}
                  onError={(e) => {
                    console.error("Error loading image:", e.currentTarget.src);
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
                <p className="text-xs text-gray-500 p-3 border-t">
                  Enhanced settings with clear information categorization
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/cd9edc57-5fb7-4220-bbea-e2e62c1a5117.png" 
                  alt="New appointment interface"
                  className="w-full h-auto"
                  onLoad={() => console.log("Image loaded successfully: /lovable-uploads/cd9edc57-5fb7-4220-bbea-e2e62c1a5117.png")}
                  onError={(e) => {
                    console.error("Error loading image:", e.currentTarget.src);
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
                <p className="text-xs text-gray-500 p-3 border-t">
                  Streamlined appointment creation with information type selection
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
