
import React, { useState, useEffect } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  // Add a fun animation effect on mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 20 - 10;
      const y = (e.clientY / window.innerHeight) * 20 - 10;
      setPosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-earthy-light via-sage-light/30 to-cream/70"></div>
        {/* Add decorative elements for a whimsical touch */}
        <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-sage-light/40 animate-float"></div>
        <div className="absolute bottom-1/3 right-10 w-12 h-12 rounded-full bg-sage-DEFAULT/30 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 left-1/4 w-16 h-16 rounded-full bg-sage-dark/20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 flex flex-col items-start">
          <div className="overflow-hidden mb-2">
            <span className="inline-block text-sm md:text-base font-medium text-hunter-light bg-sage-light px-3 py-1 rounded-full animate-fade-in">
              Hello, I'm...
            </span>
          </div>
          
          <div className="overflow-hidden">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium mb-4 animate-text-reveal" style={{ animationDelay: '0.3s' }}>
              Your Name
            </h1>
          </div>
          
          <div className="overflow-hidden max-w-2xl">
            <p className="text-xl md:text-2xl text-stone/80 font-light mb-8 animate-text-reveal" style={{ animationDelay: '0.6s' }}>
              Weaving together healthcare expertise and design thinking to create technologies that truly serve human needs.
            </p>
          </div>
          
          <div className="overflow-hidden animate-fade-in" style={{ animationDelay: '1s' }}>
            <a
              href="#about"
              className="group inline-flex items-center gap-2 bg-hunter-DEFAULT text-white px-6 py-3 rounded-md hover:bg-hunter-light transition-all duration-300 hover:gap-3"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              Explore my journey
              <ArrowDown size={18} className={`transition-transform ${isHovering ? 'translate-y-1' : ''}`} />
            </a>
          </div>
        </div>
        
        <div className="md:w-1/3 flex justify-center items-center mt-12 md:mt-0">
          <div 
            className="relative group cursor-pointer"
            onMouseMove={() => setRotation(rotation + 2)}
            style={{ 
              transform: `rotate(${position.x / 20}deg) translateX(${position.x}px) translateY(${position.y}px)`,
              transition: 'transform 0.3s ease-out'
            }}
          >
            <Avatar className="w-56 h-56 relative rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform group-hover:scale-105">
              <AvatarImage src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Your Name" />
              <AvatarFallback className="bg-sage-light text-hunter-DEFAULT text-3xl">YN</AvatarFallback>
            </Avatar>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Sparkles className="text-white drop-shadow-lg w-16 h-16 animate-sparkle" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <ArrowDown size={24} className="text-hunter-light animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
