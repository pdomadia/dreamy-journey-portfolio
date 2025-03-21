
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

  // Enhanced effect to remove any Lovable-related elements that might be injected at runtime
  useEffect(() => {
    // Function to remove any Lovable badges or popups
    const removeLovableBadges = () => {
      // More comprehensive query selector to catch all possible badge variations
      const badgeSelectors = [
        '[class*="lovable"]', 
        '[id*="lovable"]', 
        '[data-lovable]',
        '.badge', 
        '.floating-badge', 
        '.editor-badge',
        '[class*="edit-with"]',
        '[class*="badge"]',
        '[id*="badge"]',
        '[class*="editor"]',
        '[id*="editor"]'
      ];
      
      badgeSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
          // Check if the element or its children contain "lovable" text
          if (el.innerHTML.toLowerCase().includes('lovable') || 
              el.textContent?.toLowerCase().includes('lovable') ||
              el.innerHTML.toLowerCase().includes('edit with') || 
              el.textContent?.toLowerCase().includes('edit with')) {
            el.remove();
          }
        });
      });
    };
    
    // Run immediately on mount
    removeLovableBadges();
    
    // Set up a more aggressive mutation observer
    const observer = new MutationObserver(() => {
      requestAnimationFrame(removeLovableBadges);
    });
    
    // Start observing with more comprehensive parameters
    observer.observe(document.body, { 
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true
    });
    
    // Additional interval as backup to catch any elements that might slip through
    const interval = setInterval(removeLovableBadges, 1000);
    
    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
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
