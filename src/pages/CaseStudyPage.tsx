
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChartBar, PieChart } from 'lucide-react';
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { caseStudies } from '@/data/caseStudies';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

const adminBurdenData = [
  { name: 'Before', administrative: 100, relevance: 75 },
  { name: 'After', administrative: 70, relevance: 95 }
];

const chartConfig = {
  administrative: {
    label: "Administrative Burden",
    color: "#ef4444"
  },
  relevance: {
    label: "Meeting Relevance",
    color: "#22c55e"
  }
};

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
              <BreadcrumbPage>{caseStudy?.title}</BreadcrumbPage>
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
            {caseStudy?.subtitle}
          </span>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-6">
            {caseStudy?.title}
          </h1>

          <div className="aspect-video w-full mb-10 rounded-lg overflow-hidden">
            <img 
              src={caseStudy?.imageUrl} 
              alt={caseStudy?.title} 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            {caseStudy?.fullContent ? (
              <div className="space-y-12">
                {/* Introduction Section */}
                <section>
                  <h2 className="text-2xl font-medium mb-4 text-hunter-DEFAULT border-b border-earthy-dark pb-2">
                    Introduction: The Daily Challenge
                  </h2>
                  <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                    {caseStudy.fullContent.introduction}
                  </p>

                  {/* Visual: Sarah at her desk */}
                  <div className="my-8 rounded-lg overflow-hidden border border-gray-200">
                    <AspectRatio ratio={16/9}>
                      <img 
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Sarah Johnson reviewing digital schedule" 
                        className="object-cover w-full h-full"
                      />
                    </AspectRatio>
                    <div className="bg-gray-50 p-3 text-sm text-gray-600 italic">
                      Sarah Johnson, office manager, reviewing the daily appointment schedule
                    </div>
                  </div>
                </section>

                {/* Project Overview Section */}
                <section>
                  <div className="bg-earthy-DEFAULT/20 p-6 rounded-lg">
                    <h3 className="text-xl font-medium mb-2 text-hunter-DEFAULT">Project Overview</h3>
                    <p>
                      <strong>Objective:</strong> To overhaul the inefficient scheduling system used in multiple oncology clinics, 
                      ensuring that appointments align perfectly with the clinic's immediate informational needs, enhancing both 
                      operational efficiency and patient care quality.
                    </p>
                  </div>
                </section>
                
                {/* Challenges Section */}
                <section>
                  <h2 className="text-2xl font-medium mb-4 text-hunter-DEFAULT border-b border-earthy-dark pb-2">The Challenge</h2>
                  <p className="mb-6">
                    {caseStudy.fullContent.challenge}
                  </p>
                  
                  {/* Visual: Infographic showing old system challenges */}
                  <div className="bg-gray-50 p-6 rounded-lg my-8">
                    <h3 className="text-xl font-medium mb-4 flex items-center gap-2 text-hunter-DEFAULT">
                      <ChartBar className="text-forest-dark" size={24} />
                      Key Challenges with Old System
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4 text-center">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="text-red-500 text-2xl font-bold mb-2">68%</div>
                        <p className="text-gray-700">Mismatched expertise between clinic needs and pharmaceutical representatives</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="text-red-500 text-2xl font-bold mb-2">12.5 hrs</div>
                        <p className="text-gray-700">Average weekly time spent on scheduling logistics</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="text-red-500 text-2xl font-bold mb-2">42%</div>
                        <p className="text-gray-700">Staff reported missing critical information due to scheduling issues</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Visual: Highlighted Box */}
                  <div className="bg-forest-light/30 p-5 rounded-lg my-6 text-center border-l-4 border-forest-DEFAULT">
                    <p className="font-medium text-lg text-charcoal">
                      "Over 25% of appointments were ineffective, failing to deliver necessary treatment updates."
                    </p>
                  </div>
                </section>
                
                {/* Research Section */}
                <section>
                  <h2 className="text-2xl font-medium mb-4 text-hunter-DEFAULT border-b border-earthy-dark pb-2">Research Insights</h2>
                  <div className="pl-4 border-l-2 border-earthy-DEFAULT">
                    <p className="font-medium mb-3">Methodologies Employed:</p>
                    <ul className="mb-6 list-disc pl-5 space-y-1">
                      {caseStudy.fullContent.research?.methodologies?.map((methodology, index) => (
                        <li key={index} className="mb-2">{methodology}</li>
                      ))}
                    </ul>
                    
                    <p className="font-medium mb-3">Key Insights:</p>
                    <ul className="mb-6 list-disc pl-5 space-y-1">
                      {caseStudy.fullContent.research?.insights?.map((insight, index) => (
                        <li key={index} className="mb-2">{insight}</li>
                      ))}
                    </ul>
                  </div>
                </section>
                
                {/* Solution Section */}
                <section>
                  <h2 className="text-2xl font-medium mb-4 text-hunter-DEFAULT border-b border-earthy-dark pb-2">Solution Implementation</h2>
                  <p className="mb-6">
                    {caseStudy.fullContent.solution}
                  </p>
                </section>
                
                {/* Impact Section */}
                <section>
                  <h2 className="text-2xl font-medium mb-4 text-hunter-DEFAULT border-b border-earthy-dark pb-2">Impact and Reflections</h2>
                  <p className="mb-6">
                    {caseStudy.fullContent.impact}
                  </p>

                  {/* Visual: Dynamic Graph */}
                  <div className="bg-white p-6 rounded-lg shadow-md my-8 border border-gray-100">
                    <h3 className="text-xl font-medium mb-4 flex items-center gap-2 text-hunter-DEFAULT">
                      <PieChart className="text-forest-dark" size={24} />
                      Results After Implementation
                    </h3>
                    <div className="h-72 w-full">
                      <ChartContainer config={chartConfig}>
                        <BarChart data={adminBurdenData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <ChartTooltip 
                            content={<ChartTooltipContent />}
                          />
                          <Legend />
                          <Bar dataKey="administrative" name="Administrative Burden (%)" fill="var(--color-administrative)" />
                          <Bar dataKey="relevance" name="Meeting Relevance (%)" fill="var(--color-relevance)" />
                        </BarChart>
                      </ChartContainer>
                    </div>
                    <p className="text-sm text-gray-600 mt-2 italic text-center">
                      Administrative burden decreased by 30% while meeting relevance improved by 20%
                    </p>
                  </div>
                </section>
                
                {/* Conclusion Section */}
                <section>
                  <h2 className="text-2xl font-medium mb-4 text-hunter-DEFAULT border-b border-earthy-dark pb-2">Conclusion</h2>
                  <p className="mb-6">
                    {caseStudy.fullContent.conclusion}
                  </p>
                </section>
                
                {/* Call to Action Section */}
                <section>
                  <div className="bg-forest-DEFAULT/20 p-6 rounded-lg my-8 text-center">
                    <h3 className="text-xl font-medium mb-4 text-hunter-DEFAULT">Call to Action</h3>
                    <p className="mb-4">
                      {caseStudy.fullContent.callToAction}
                    </p>
                    <Button asChild className="mt-2">
                      <Link to="/#contact">Contact Us</Link>
                    </Button>
                  </div>
                </section>
              </div>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CaseStudyPage;
