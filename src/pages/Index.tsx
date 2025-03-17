
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import CaseStudies from '@/components/CaseStudies';
import Work from '@/components/Work';
import Contact from '@/components/Contact';

const Index: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <CaseStudies />
      <Work />
      <Contact />
    </Layout>
  );
};

export default Index;
