
import React from 'react';
import { Globe, Heart, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24">
          <div className="md:w-1/2">
            <div className="mb-8 reveal">
              <span className="inline-block text-sm md:text-base font-medium text-[#9A7AA0] bg-[#DDD1E9]/20 px-3 py-1 rounded-full mb-4">
                About Me
              </span>
              <h2 className="section-title">My Story</h2>
              <p className="section-subtitle">
                Bridging healthcare knowledge with tech innovation for meaningful experiences.
              </p>
            </div>
            
            <div className="space-y-6 reveal reveal-delay-1">
              <p className="text-charcoal/90 leading-relaxed">
                With a background spanning pediatric occupational therapy and health tech, 
                I bring a unique perspective that combines clinical expertise with product 
                design sensibilities. My journey has taken me from hands-on healthcare to 
                digital innovation, always with the goal of creating solutions that truly 
                understand and serve human needs.
              </p>
              <p className="text-charcoal/90 leading-relaxed">
                I'm passionate about designing experiences that are not only accessible and
                intuitive but also bring joy and simplicity to complex processes. My multicultural
                background has shaped my approach to problem-solving, allowing me to view
                challenges from diverse perspectives.
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2 flex flex-col justify-center">
            <div className="space-y-8">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-[#DDD1E9]/30 reveal card-hover">
                <Globe size={24} className="text-[#9A7AA0] mb-3" />
                <h3 className="text-xl font-medium mb-2">Multicultural Perspective</h3>
                <p className="text-charcoal/80">
                  My international background enriches my approach to design, allowing me to consider 
                  diverse user needs and cultural contexts.
                </p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-[#DDD1E9]/30 reveal reveal-delay-2 card-hover">
                <Heart size={24} className="text-[#9A7AA0] mb-3" />
                <h3 className="text-xl font-medium mb-2">Healthcare Foundation</h3>
                <p className="text-charcoal/80">
                  Five years in pediatric occupational therapy gave me deep insights into human needs,
                  accessibility, and the importance of empathetic design.
                </p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-[#DDD1E9]/30 reveal reveal-delay-3 card-hover">
                <Sparkles size={24} className="text-[#9A7AA0] mb-3" />
                <h3 className="text-xl font-medium mb-2">Tech Explorer</h3>
                <p className="text-charcoal/80">
                  Four years in health tech spanning product design, UX research, customer success, and sales
                  has equipped me with a holistic understanding of the product lifecycle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
