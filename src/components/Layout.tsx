
import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Toaster } from '@/components/ui/toaster';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Intersection Observer setup for reveal animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const elements = document.querySelectorAll('.reveal');
    
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Add an effect to remove any Lovable-related elements that might be injected at runtime
  useEffect(() => {
    // Function to remove any Lovable badges or popups
    const removeLovableBadges = () => {
      // Remove any elements with class names containing "lovable"
      document.querySelectorAll('[class*="lovable"], [id*="lovable"], [data-lovable]').forEach(el => {
        el.remove();
      });
      
      // Look for other potential selectors that might be used for the badge
      document.querySelectorAll('.badge, .floating-badge, .editor-badge').forEach(el => {
        if (el.innerHTML.toLowerCase().includes('lovable') || 
            el.textContent?.toLowerCase().includes('lovable')) {
          el.remove();
        }
      });
    };
    
    // Run once on mount
    removeLovableBadges();
    
    // Set up a mutation observer to catch dynamically added elements
    const observer = new MutationObserver((mutations) => {
      removeLovableBadges();
    });
    
    // Start observing the document with the configured parameters
    observer.observe(document.body, { 
      childList: true,
      subtree: true
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <div className="grain-overlay" aria-hidden="true"></div>
      <Toaster />
    </div>
  );
};

export default Layout;
