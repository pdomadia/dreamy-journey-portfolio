
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-charcoal text-cream/70">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>© {currentYear} Your Name. All rights reserved.</p>
        
        <div className="mt-4 md:mt-0">
          <ul className="flex space-x-6">
            <li>
              <a 
                href="#" 
                className="hover:text-terracotta transition-colors duration-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="hover:text-terracotta transition-colors duration-300"
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
