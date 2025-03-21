
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-stone text-white/90">
      <div className="container mx-auto px-6 flex justify-center items-center">
        <p>© {currentYear} Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
