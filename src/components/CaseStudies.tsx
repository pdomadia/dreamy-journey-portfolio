
import React, { useEffect, useState } from 'react';
import CaseStudyCard from './CaseStudyCard';
import { caseStudies } from '@/data/caseStudies';

const CaseStudies: React.FC = () => {
  const [testImageLoaded, setTestImageLoaded] = useState(false);
  const testImagePath = '/lovable-uploads/8dfe0153-98a4-4096-8e6b-c8c1824d52c4.png';

  useEffect(() => {
    console.log('CaseStudies component mounted');
    console.log('Number of case studies:', caseStudies.length);
    
    // Log all image URLs for debugging
    caseStudies.forEach(study => {
      console.log(`Case study: ${study.title}, Image URL: ${study.imageUrl}`);
    });
    
    // Test if the specific image path is valid by directly creating an image object
    const testImg = new Image();
    testImg.onload = () => {
      console.log(`✅ Test image loaded successfully via JS: ${testImagePath}`);
      console.log(`Image dimensions: ${testImg.naturalWidth}x${testImg.naturalHeight}`);
    };
    testImg.onerror = (e) => {
      console.error(`❌ Test image failed to load via JS: ${testImagePath}`);
      console.error('Error details:', e);
    };
    testImg.src = testImagePath;
  }, []);

  return (
    <section id="case-studies" className="py-20 md:py-28 relative bg-earthy-DEFAULT/30">
      <div className="container-custom">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-sm md:text-base font-medium text-forest-dark bg-forest-light/40 px-3 py-1 rounded-full mb-4">
            Featured Work
          </span>
          <h2 className="section-title mx-auto">Case Studies</h2>
          <p className="section-subtitle mx-auto">
            Explore selected projects that showcase my approach to solving complex problems.
          </p>
          
          {/* Test image - visible for debugging */}
          <div className="mt-4 p-4 border rounded">
            <h3 className="text-sm font-bold mb-2">Image Test</h3>
            <img 
              src={testImagePath}
              alt="Test Image" 
              style={{ maxWidth: '200px', margin: '0 auto' }}
              onLoad={() => {
                console.log("✅ Test image loaded successfully in DOM");
                setTestImageLoaded(true);
              }}
              onError={(e) => console.error("❌ Test image failed to load in DOM", e)}
            />
            <p className="text-sm mt-2">{testImageLoaded ? "✅ Test image loaded" : "❌ Test image not loaded"}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard 
              key={study.id}
              title={study.title}
              subtitle={study.subtitle}
              description={study.description}
              imageUrl={study.imageUrl}
              index={index}
              link={`/case-study/${study.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
