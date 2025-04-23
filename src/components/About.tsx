import React from 'react';
import { Linkedin, Mail, FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";

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
              <p className="text-stone/90 leading-relaxed">I'm a Product Designer and Accessibility Advocate, living in NYC, and I'm super passionate about making tech work for everyone. My background in pediatric OT really drives that. I've gone from hands-on healthcare to digital innovation, always focused on creating solutions that really meet human needs. I aim to design experiences that are accessible, intuitive, and even bring a little joy.
              <br /><br />
              When I'm not designing, I love traveling to new places, finding my zen with new workouts, and experimenting in the kitchen.
              <br /><br />
              Let's connect if you're into accessible design, travel, or food!</p>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-8 reveal reveal-delay-2">
              <Button 
                variant="outline" 
                className="bg-white/80 border-sage-dark hover:bg-sage-light/50 hover:text-hunter-DEFAULT flex items-center gap-2"
                onClick={() => window.open('https://www.linkedin.com/in/pritidomadia/', '_blank')}
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="bg-white/80 border-sage-dark hover:bg-sage-light/50 hover:text-hunter-DEFAULT flex items-center gap-2"
                onClick={() => window.open('mailto:pdomadia@gmail.com', '_blank')}
              >
                <Mail size={18} />
                <span>Email</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="bg-white/80 border-sage-dark hover:bg-sage-light/50 hover:text-hunter-DEFAULT flex items-center gap-2"
                onClick={() => window.open('https://drive.google.com/file/d/1yJ3cREyQWiq2hfiCiYVMCajBjRsXJTWO/view?usp=sharing', '_blank')}
              >
                <FileText size={18} />
                <span>Resume</span>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2">
            {/* Empty div to maintain layout - you can add an image or other content here later if needed */}
          </div>
        </div>
      </div>
    </section>;
};

export default About;
