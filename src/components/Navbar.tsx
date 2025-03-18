
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-40 transition-all duration-500',
        isScrolled 
          ? 'bg-earthy-light/90 backdrop-blur-sm shadow-sm py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container flex justify-between items-center">
        <a 
          href="#" 
          className="text-charcoal font-medium text-xl tracking-tight hover:text-forest-dark transition-colors duration-300"
        >
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="nav-link"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-earthy-light/95 backdrop-blur-sm shadow-md flex flex-col py-5 md:hidden animate-fade-in">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="px-8 py-3 hover:bg-earthy-DEFAULT/20 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
