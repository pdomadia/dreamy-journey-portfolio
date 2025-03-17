
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { caseStudies } from '@/data/caseStudies';

const CaseStudyPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const caseStudy = caseStudies.find(study => study.slug === id);

  if (!caseStudy) {
    return (
      <Layout>
        <div className="container-custom py-20">
          <h1 className="text-2xl font-medium mb-4">Case Study Not Found</h1>
          <p className="mb-6">The case study you're looking for could not be found.</p>
          <Button asChild>
            <Link to="/#case-studies">
              <ArrowLeft size={16} />
              Back to Case Studies
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container-custom pt-24 pb-20">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/#case-studies">Case Studies</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{caseStudy.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="mb-10">
          <Button variant="outline" asChild>
            <Link to="/#case-studies">
              <ArrowLeft size={16} />
              Back to All Case Studies
            </Link>
          </Button>
        </div>

        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-sm md:text-base font-medium text-forest-dark bg-forest-light/40 px-3 py-1 rounded-full mb-4">
            {caseStudy.subtitle}
          </span>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-6">
            {caseStudy.title}
          </h1>

          <div className="aspect-video w-full mb-10 rounded-lg overflow-hidden">
            <img 
              src={caseStudy.imageUrl} 
              alt={caseStudy.title} 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-charcoal/80 leading-relaxed mb-6">
              {caseStudy.description}
            </p>
            
            <h2 className="text-2xl font-medium mt-10 mb-4">Challenge</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
              Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
            </p>
            
            <h2 className="text-2xl font-medium mt-10 mb-4">Solution</h2>
            <p>
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel.
            </p>
            
            <h2 className="text-2xl font-medium mt-10 mb-4">Results</h2>
            <p>
              Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo.
              Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CaseStudyPage;
