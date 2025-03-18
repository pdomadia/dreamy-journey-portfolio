import React from 'react';
import { Sparkles, Leaf, Coffee } from 'lucide-react';
const About: React.FC = () => {
  return <section id="about" className="py-20 md:py-28 relative bg-gradient-to-b from-earthy-DEFAULT to-earthy-light">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,#E0E5DD,transparent_70%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,#D4CDC3,transparent_70%)]"></div>
      </div>
      
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24">
          <div className="md:w-1/2">
            <div className="mb-8 reveal">
              <span className="inline-block text-sm md:text-base font-medium text-hunter-light bg-sage-light px-3 py-1 rounded-full mb-4">
                About Me
              </span>
              <h2 className="section-title">My Story</h2>
              <p className="section-subtitle">
                Bridging healthcare knowledge with tech innovation for meaningful experiences.
              </p>
            </div>
            
            <div className="space-y-6 reveal reveal-delay-1">
              <p className="text-stone/90 leading-relaxed">Hi, I'm Priti! I'm a Product Designer and Accessibility Advocate in NYC, and I'm super passionate about making tech work for everyone. My background in pediatric OT really drives that. I've gone from hands-on healthcare to digital innovation, always focused on creating solutions that really meet human needs. I aim to design experiences that are accessible, intuitive, and even bring a little joy. When I'm not designing, I love exploring new places, finding my zen with yoga, and experimenting in the kitchen. Let's connect if you're into accessible design, travel, or food!</p>
              <p className="text-stone/90 leading-relaxed"></p>
            </div>
          </div>
          
          <div className="md:w-1/2 flex flex-col justify-center">
            <div className="space-y-8">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-sage-dark/10 hover:border-sage-dark/20 transition-all duration-300 reveal card-hover">
                <Leaf size={24} className="text-hunter-DEFAULT mb-3" />
                <h3 className="text-xl font-medium mb-2">Multicultural Perspective</h3>
                <p className="text-stone/80">
                  My international background enriches my approach to design, allowing me to consider 
                  diverse user needs and cultural contexts.
                </p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-sage-dark/10 hover:border-sage-dark/20 transition-all duration-300 reveal reveal-delay-2 card-hover">
                <Coffee size={24} className="text-hunter-DEFAULT mb-3" />
                <h3 className="text-xl font-medium mb-2">Healthcare Foundation</h3>
                <p className="text-stone/80">
                  Five years in pediatric occupational therapy gave me deep insights into human needs,
                  accessibility, and the importance of empathetic design.
                </p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-sage-dark/10 hover:border-sage-dark/20 transition-all duration-300 reveal reveal-delay-3 card-hover">
                <Sparkles size={24} className="text-hunter-DEFAULT mb-3" />
                <h3 className="text-xl font-medium mb-2">Tech Explorer</h3>
                <p className="text-stone/80">
                  Four years in health tech spanning product design, UX research, customer success, and sales
                  has equipped me with a holistic understanding of the product lifecycle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;