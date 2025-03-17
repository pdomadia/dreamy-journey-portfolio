
import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-hunter-DEFAULT text-white/90">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>© {currentYear} Your Name. All rights reserved.</p>
        
        <div className="mt-4 md:mt-0 flex items-center gap-8">
          <div className="flex space-x-4">
            <a href="#" aria-label="Github" className="hover:text-white transition-colors duration-300">
              <Github size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors duration-300">
              <Linkedin size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white transition-colors duration-300">
              <Twitter size={20} />
            </a>
          </div>
          
          <ul className="flex space-x-6">
            <li>
              <a 
                href="#" 
                className="hover:text-white transition-colors duration-300"
              >
                Privacy
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="hover:text-white transition-colors duration-300"
              >
                Credits
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
