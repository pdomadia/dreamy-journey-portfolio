
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Work from '@/components/Work';
import CaseStudies from '@/components/CaseStudies';
import Contact from '@/components/Contact';

const Index: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Work />
      <CaseStudies />
      <Contact />
    </Layout>
  );
};

export default Index;
