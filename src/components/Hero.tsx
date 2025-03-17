
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 flex flex-col items-start">
          <div className="overflow-hidden mb-2">
            <span className="inline-block text-sm md:text-base font-medium text-[#9A7AA0] bg-[#DDD1E9]/20 px-3 py-1 rounded-full animate-fade-in">
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
              className="group inline-flex items-center gap-2 bg-[#9A7AA0] text-cream px-6 py-3 rounded-full hover:bg-[#9A7AA0]/90 transition-all duration-300 hover:gap-3"
            >
              Explore my journey
              <ArrowDown size={18} className="transition-transform group-hover:translate-y-1" />
            </a>
          </div>
        </div>
        
        <div className="md:w-1/3 flex justify-center items-center mt-12 md:mt-0">
          <div className="relative">
            <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-[#DDD1E9] shadow-lg animate-float">
              <Avatar className="w-full h-full">
                <AvatarImage src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Your Name" />
                <AvatarFallback className="bg-[#DDD1E9]/50 text-[#9A7AA0] text-3xl">YN</AvatarFallback>
              </Avatar>
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-[#DDD1E9]/50 animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown size={24} className="text-[#9A7AA0]/50" />
      </div>
    </section>
  );
};

export default Hero;
