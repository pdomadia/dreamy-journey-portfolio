
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 md:right-20 w-20 h-20 rounded-full bg-sage/30 animate-float" aria-hidden="true"></div>
      <div className="absolute bottom-40 left-10 md:left-40 w-16 h-16 rounded-full bg-terracotta/20 animate-float" style={{ animationDelay: '2s' }} aria-hidden="true"></div>
      <div className="absolute top-1/3 left-1/4 w-24 h-24 rounded-full bg-sand/20 animate-float" style={{ animationDelay: '4s' }} aria-hidden="true"></div>
      
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-start">
        <div className="overflow-hidden mb-2">
          <span className="inline-block text-sm md:text-base font-medium text-terracotta bg-terracotta/10 px-3 py-1 rounded-full animate-fade-in">
            Hello, I'm...
          </span>
        </div>
        
        <div className="overflow-hidden">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium mb-4 animate-text-reveal" style={{ animationDelay: '0.3s' }}>
            Your Name
          </h1>
        </div>
        
        <div className="overflow-hidden max-w-2xl">
          <p className="text-xl md:text-2xl text-stone font-light mb-8 animate-text-reveal" style={{ animationDelay: '0.6s' }}>
            Weaving together healthcare expertise and design thinking to create technologies that truly serve human needs.
          </p>
        </div>
        
        <div className="overflow-hidden animate-fade-in" style={{ animationDelay: '1s' }}>
          <a
            href="#about"
            className="group inline-flex items-center gap-2 bg-charcoal text-cream px-6 py-3 rounded-full hover:bg-charcoal/90 transition-all duration-300 hover:gap-3"
          >
            Explore my journey
            <ArrowDown size={18} className="transition-transform group-hover:translate-y-1" />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown size={24} className="text-charcoal/50" />
      </div>
    </section>
  );
};

export default Hero;
