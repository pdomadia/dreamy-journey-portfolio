
import React from 'react';
import { Mail, Linkedin, FileText } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-stone text-earthy-light relative">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(122,141,118,0.2),transparent_60%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(209,217,207,0.1),transparent_60%)]"></div>
      </div>
      
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center reveal">
          <span className="inline-block text-sm md:text-base font-medium text-sage-light bg-sage-light/20 px-3 py-1 rounded-full mb-4">
            Let's Connect
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
            Ready to collaborate on something amazing?
          </h2>
          <p className="text-earthy-light/80 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out for collaborations or just a friendly hello!
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 reveal reveal-delay-1">
            <a 
              href="mailto:hello@youremail.com" 
              className="flex items-center gap-2 bg-sage-dark hover:bg-sage-dark/90 text-white px-6 py-3 rounded-md transition-colors duration-300 w-full md:w-auto justify-center"
            >
              <Mail size={18} />
              <span>Get in Touch</span>
            </a>
            
            <a 
              href="https://linkedin.com/in/yourname" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 bg-sage-dark hover:bg-sage-dark/90 text-white px-6 py-3 rounded-md transition-colors duration-300 w-full md:w-auto justify-center"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 bg-sage-dark hover:bg-sage-dark/90 text-white px-6 py-3 rounded-md transition-colors duration-300 w-full md:w-auto justify-center"
            >
              <FileText size={18} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
