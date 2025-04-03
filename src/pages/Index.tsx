
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import CaseStudies from '@/components/CaseStudies';
import Contact from '@/components/Contact';

const Index: React.FC = () => {
  useEffect(() => {
    console.log('Index page mounted');
    
    // Check if DOM elements are present
    setTimeout(() => {
      const hero = document.getElementById('about');
      console.log('Found about section:', !!hero);
      
      const caseStudies = document.getElementById('case-studies');
      console.log('Found case studies section:', !!caseStudies);
    }, 500);
  }, []);
  
  return (
    <Layout>
      <Hero />
      <About />
      <CaseStudies />
      <Contact />
    </Layout>
  );
};

export default Index;
