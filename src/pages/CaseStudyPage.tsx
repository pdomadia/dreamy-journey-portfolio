import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft, 
  ChartBar, 
  PieChart, 
  FileText, 
  Lightbulb, 
  Search, 
  TrendingUp,
  CheckSquare,
  Target,
  MoveRight
} from 'lucide-react';
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
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
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
      <div className="container-custom pt-24 pb-20 max-w-4xl mx-auto">
        {/* Breadcrumbs */}
        <Breadcrumb className="mb-6 text-gray-500 text-sm">
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

        {/* Back Button */}
        <div className="mb-10">
          <Button variant="outline" asChild className="border-gray-300 hover:bg-gray-100">
            <Link to="/#case-studies">
              <ArrowLeft size={16} />
              Back to All Case Studies
            </Link>
          </Button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-12">
          {/* Title & Subtitle */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 text-gray-500 mb-4">
              <FileText size={16} />
              <span className="text-sm font-medium">{caseStudy?.subtitle}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-4">
              {caseStudy?.title}
            </h1>
            
            <div className="h-1 w-16 bg-forest-DEFAULT rounded mt-2 mb-6"></div>
          </div>

          {/* Content */}
          {caseStudy?.fullContent ? (
            <div className="space-y-8 text-gray-700">
              {/* Introduction Section */}
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 bg-forest-light rounded-full flex items-center justify-center">
                    <span className="text-forest-dark text-xs font-bold">1</span>
                  </div>
                  <h2 className="text-xl font-medium text-gray-800">
                    Introduction: The Daily Challenge
                  </h2>
                </div>
                
                <div className="pl-7">
                  <Card className="border-none shadow-none bg-gray-50 p-4 mb-6 rounded-lg">
                    <CardContent className="p-0">
                      <p className="text-gray-600 italic">
                        Storytelling Pitch: Every morning, Sarah Johnson, an office manager at an oncology clinic, 
                        faces a critical task: coordinating meetings between her medical staff and pharmaceutical 
                        representatives.
                      </p>
                    </CardContent>
                  </Card>
                
                  <p className="text-base leading-relaxed mb-6">
                    {caseStudy.fullContent.introduction}
                  </p>

                  {/* Visual: Sarah at her desk */}
                  <div className="my-6 rounded-lg overflow-hidden border border-gray-200">
                    <AspectRatio ratio={16/9}>
                      <img 
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Sarah Johnson reviewing digital schedule" 
                        className="object-cover w-full h-full"
                      />
                    </AspectRatio>
                    <div className="bg-gray-50 p-3 text-sm text-gray-500 flex items-center gap-2">
                      <span className="h-1 w-1 bg-gray-400 rounded-full"></span>
                      Sarah Johnson, office manager, reviewing the daily appointment schedule
                    </div>
                  </div>
                </div>
              </section>

              <Separator className="my-6" />

              {/* Project Overview Section */}
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 bg-forest-light rounded-full flex items-center justify-center">
                    <span className="text-forest-dark text-xs font-bold">2</span>
                  </div>
                  <h2 className="text-xl font-medium text-gray-800">
                    Project Overview
                  </h2>
                </div>
                
                <div className="pl-7">
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-200">
                    <div className="flex items-start">
                      <Target className="text-blue-500 mt-1 mr-3 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-medium text-blue-800 mb-1">Objective:</p>
                        <p className="text-blue-800">
                          To overhaul the inefficient scheduling system used in multiple oncology clinics, 
                          ensuring that appointments align perfectly with the clinic's immediate informational needs, 
                          enhancing both operational efficiency and patient care quality.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <Separator className="my-6" />
              
              {/* Challenges Section */}
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 bg-forest-light rounded-full flex items-center justify-center">
                    <span className="text-forest-dark text-xs font-bold">3</span>
                  </div>
                  <h2 className="text-xl font-medium text-gray-800">
                    The Challenge
                  </h2>
                </div>
                
                <div className="pl-7">
                  <p className="mb-6 text-base leading-relaxed">
                    {caseStudy.fullContent.challenge}
                  </p>
                  
                  {/* Visual: Infographic showing old system challenges */}
                  <div className="bg-white p-6 rounded-lg my-6 border border-gray-200">
                    <h3 className="text-base font-medium mb-4 flex items-center gap-2 text-gray-700">
                      <ChartBar className="text-forest-dark" size={18} />
                      Key Challenges with Old System
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <div className="text-red-500 text-2xl font-bold mb-2">68%</div>
                        <p className="text-gray-600 text-sm">Mismatched expertise between clinic needs and pharmaceutical representatives</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <div className="text-red-500 text-2xl font-bold mb-2">12.5 hrs</div>
                        <p className="text-gray-600 text-sm">Average weekly time spent on scheduling logistics</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <div className="text-red-500 text-2xl font-bold mb-2">42%</div>
                        <p className="text-gray-600 text-sm">Staff reported missing critical information due to scheduling issues</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Visual: Highlighted Box */}
                  <div className="bg-amber-50 p-4 rounded-lg my-6 border-l-4 border-amber-200">
                    <div className="flex">
                      <div className="text-amber-500 mr-3 flex-shrink-0">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 9v4M12 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className="text-amber-800">
                        <strong>Over 25% of appointments were ineffective</strong>, failing to deliver necessary treatment updates.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <Separator className="my-6" />
              
              {/* Research Section */}
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 bg-forest-light rounded-full flex items-center justify-center">
                    <span className="text-forest-dark text-xs font-bold">4</span>
                  </div>
                  <h2 className="text-xl font-medium text-gray-800 flex items-center gap-2">
                    Research Insights
                    <Search size={18} className="text-gray-400" />
                  </h2>
                </div>
                
                <div className="pl-7">
                  <div className="mb-4">
                    <h3 className="text-base font-medium mb-2 text-gray-700">Methodologies Employed:</h3>
                    <ul className="space-y-2 ml-2">
                      {caseStudy.fullContent.research?.methodologies?.map((methodology, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-gray-100 flex items-center justify-center mt-0.5">
                            <span className="text-gray-500 text-xs">{index + 1}</span>
                          </div>
                          <span className="text-gray-600">{methodology}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-base font-medium mb-2 text-gray-700">Key Insights:</h3>
                    <ul className="space-y-2 ml-2">
                      {caseStudy.fullContent.research?.insights?.map((insight, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckSquare size={16} className="text-forest-DEFAULT mt-1 flex-shrink-0" />
                          <span className="text-gray-600">{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <Separator className="my-6" />
              
              {/* Solution Section */}
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 bg-forest-light rounded-full flex items-center justify-center">
                    <span className="text-forest-dark text-xs font-bold">5</span>
                  </div>
                  <h2 className="text-xl font-medium text-gray-800 flex items-center gap-2">
                    Solution Implementation
                    <Lightbulb size={18} className="text-amber-400" />
                  </h2>
                </div>
                
                <div className="pl-7">
                  <p className="mb-6 text-base leading-relaxed">
                    {caseStudy.fullContent.solution}
                  </p>
                </div>
              </section>

              <Separator className="my-6" />
              
              {/* Impact Section */}
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 bg-forest-light rounded-full flex items-center justify-center">
                    <span className="text-forest-dark text-xs font-bold">6</span>
                  </div>
                  <h2 className="text-xl font-medium text-gray-800 flex items-center gap-2">
                    Impact and Reflections
                    <TrendingUp size={18} className="text-green-500" />
                  </h2>
                </div>
                
                <div className="pl-7">
                  <p className="mb-6 text-base leading-relaxed">
                    {caseStudy.fullContent.impact}
                  </p>

                  {/* Visual: Dynamic Graph */}
                  <div className="bg-white p-5 rounded-lg my-6 border border-gray-200">
                    <h3 className="text-base font-medium mb-3 text-gray-700 flex items-center gap-2">
                      <PieChart className="text-forest-dark" size={18} />
                      Results After Implementation
                    </h3>
                    <div className="h-64 w-full">
                      <ChartContainer config={chartConfig}>
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={adminBurdenData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                            <XAxis dataKey="name" tick={{ fill: '#6b7280' }} />
                            <YAxis tick={{ fill: '#6b7280' }} />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Legend wrapperStyle={{ paddingTop: 10 }} />
                            <Bar dataKey="administrative" name="Administrative Burden (%)" fill="var(--color-administrative)" />
                            <Bar dataKey="relevance" name="Meeting Relevance (%)" fill="var(--color-relevance)" />
                          </BarChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </div>
                    <p className="text-xs text-gray-500 mt-3 text-center">
                      Administrative burden decreased by 30% while meeting relevance improved by 20%
                    </p>
                  </div>
                </div>
              </section>

              <Separator className="my-6" />
              
              {/* Conclusion Section */}
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 bg-forest-light rounded-full flex items-center justify-center">
                    <span className="text-forest-dark text-xs font-bold">7</span>
                  </div>
                  <h2 className="text-xl font-medium text-gray-800">
                    Conclusion
                  </h2>
                </div>
                
                <div className="pl-7">
                  <p className="mb-6 text-base leading-relaxed">
                    {caseStudy.fullContent.conclusion}
                  </p>
                </div>
              </section>
              
              {/* Call to Action Section */}
              <section>
                <div className="bg-gray-50 p-6 rounded-lg my-6 border border-gray-200">
                  <h3 className="text-base font-medium mb-3 text-gray-700">Call to Action</h3>
                  <p className="mb-4 text-gray-600">
                    {caseStudy.fullContent.callToAction}
                  </p>
                  <Button asChild className="mt-2 bg-forest-DEFAULT hover:bg-forest-dark">
                    <Link to="/#contact" className="flex items-center gap-2">
                      Contact Us
                      <MoveRight size={16} />
                    </Link>
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
    </Layout>
  );
};

export default CaseStudyPage;
