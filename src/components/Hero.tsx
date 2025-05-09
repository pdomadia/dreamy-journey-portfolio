import React, { useState, useEffect } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });

  // Add a fun animation effect on mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth * 20 - 10;
      const y = e.clientY / window.innerHeight * 20 - 10;
      setPosition({
        x,
        y
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20 pb-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-earthy-light via-sage-light/30 to-cream/70"></div>
        
        <svg className="absolute top-20 left-10 w-32 h-32 text-sage-dark/20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20,20 L80,20 L80,80 L20,80 Z" stroke="currentColor" strokeWidth="2" opacity="0.4">
            <animate attributeName="opacity" values="0.4;0.1;0.4" dur="6s" repeatCount="indefinite" />
          </path>
        </svg>
        
        <svg className="absolute bottom-40 right-20 w-24 h-24 text-sage-dark/20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2" opacity="0.3">
            <animate attributeName="opacity" values="0.3;0.1;0.3" dur="7s" repeatCount="indefinite" />
          </circle>
        </svg>
        
        <svg className="absolute top-1/2 right-1/4 w-20 h-20 text-hunter-light/20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20,50 L50,20 L80,50 L50,80 Z" stroke="currentColor" strokeWidth="2" opacity="0.25">
            <animate attributeName="opacity" values="0.25;0.05;0.25" dur="8s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex flex-col items-start">
          <div className="overflow-hidden mb-2">
            <span className="inline-block text-sm md:text-base font-medium text-hunter-light bg-sage-light px-3 py-1 rounded-full animate-fade-in">Welcome! I'm...</span>
          </div>
          
          <div className="overflow-hidden">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium mb-4 animate-text-reveal" style={{
            animationDelay: '0.3s'
          }}>Priti Domadia</h1>
          </div>
          
          <div className="overflow-hidden max-w-2xl">
            <p className="text-xl md:text-2xl text-stone/80 font-light mb-8 animate-text-reveal" style={{
            animationDelay: '0.6s'
          }}>I see tech through an OT lens – making it simple and accessible. Dive into my projects and see how I'm building tools that truly help.</p>
          </div>
          
          <div className="overflow-hidden animate-fade-in" style={{
          animationDelay: '1s'
        }}>
            <a href="#about" className="group mb-4" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
              <span className="inline-block text-sm md:text-base font-medium text-hunter-light bg-sage-light px-3 py-1 rounded-full">
                Explore my journey
                <ArrowDown size={16} className={`ml-1 inline transition-transform ${isHovering ? 'translate-y-1' : ''}`} />
              </span>
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
          <div className="relative group cursor-pointer" onMouseMove={() => setRotation(rotation + 2)} style={{
          transform: `rotate(${position.x / 20}deg) translateX(${position.x}px) translateY(${position.y}px)`,
          transition: 'transform 0.3s ease-out'
        }}>
            <Avatar className="w-72 h-72 md:w-96 md:h-96 relative rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform group-hover:scale-105">
              <AvatarImage src="/lovable-uploads/e869e172-fe18-48bd-a549-1e51ac024a50.png" alt="Priti Domadia" className="object-cover" />
              <AvatarFallback className="bg-sage-light text-hunter-DEFAULT text-3xl">PD</AvatarFallback>
            </Avatar>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Sparkles className="text-white drop-shadow-lg w-16 h-16 animate-sparkle" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <ArrowDown size={24} className="text-hunter-light animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
