
import React, { useState } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-earthy-light via-mint-light/30 to-sage-light"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 flex flex-col items-start">
          <div className="overflow-hidden mb-2">
            <span className="inline-block text-sm md:text-base font-medium text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full animate-fade-in">
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
              className="group inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-md hover:bg-emerald-700 transition-all duration-300 hover:gap-3"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              Explore my journey
              <ArrowDown size={18} className={`transition-transform ${isHovering ? 'translate-y-1' : ''}`} />
            </a>
          </div>
        </div>
        
        <div className="md:w-1/3 flex justify-center items-center mt-12 md:mt-0">
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 to-mint-dark rounded-md blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
            <Avatar className="w-56 h-56 relative rounded-md overflow-hidden shadow-md group-hover:scale-[1.02] transition-all duration-500">
              <AvatarImage src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Your Name" />
              <AvatarFallback className="bg-emerald-100 text-emerald-700 text-3xl">YN</AvatarFallback>
            </Avatar>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Sparkles className="text-white w-16 h-16 animate-sparkle" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <ArrowDown size={24} className="text-emerald-600/70 animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
