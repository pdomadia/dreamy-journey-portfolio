import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft, 
  FileText, 
  Search, 
  Lightbulb, 
  ChartBar,
  CheckSquare,
  Target,
  ArrowDownSquare,
  ArrowUpSquare,
  Info,
  Users
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
import { Separator } from '@/components/ui/separator';

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
              Case Study: {caseStudy?.title}
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
                  <p className="text-base leading-relaxed mb-6">
                    {caseStudy.fullContent.introduction}
                  </p>
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
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-200 mb-6">
                    <div className="flex items-start">
                      <Target className="text-blue-500 mt-1 mr-3 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-medium text-blue-800 mb-1">Objective:</p>
                        <p className="text-blue-800">
                          {caseStudy.fullContent.projectOverview}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {caseStudy.fullContent.role && (
                    <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-200">
                      <p className="text-purple-900 font-medium mb-2">My Role:</p>
                      <p className="text-purple-900">
                        {caseStudy.fullContent.role}
                      </p>
                    </div>
                  )}
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
                        <Info size={20} />
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
                  <div className="mb-6">
                    <h3 className="text-base font-medium mb-3 text-gray-700">Methodologies Employed:</h3>
                    <ul className="space-y-2.5 ml-2">
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
                    <h3 className="text-base font-medium mb-3 text-gray-700">Key Insights:</h3>
                    <ul className="space-y-2.5 ml-2">
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

                  {/* Solution visual */}
                  <div className="grid md:grid-cols-2 gap-6 my-6 p-5 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                      <div className="text-gray-800 font-medium mb-2">Before Solution</div>
                      <div className="bg-gray-100 p-3 rounded">
                        <div className="h-6 bg-gray-300 rounded mb-2"></div>
                        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-3">
                        Old interface with limited categorization options
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                      <div className="text-forest-DEFAULT font-medium mb-2">After Solution</div>
                      <div className="bg-gray-100 p-3 rounded">
                        <div className="h-6 bg-forest-light rounded mb-2"></div>
                        <div className="h-4 bg-forest-light rounded w-3/4 mb-2"></div>
                        <div className="flex gap-2 mb-2">
                          <div className="h-4 w-1/4 bg-blue-200 rounded"></div>
                          <div className="h-4 w-1/4 bg-green-200 rounded"></div>
                          <div className="h-4 w-1/4 bg-amber-200 rounded"></div>
                        </div>
                        <div className="h-4 bg-forest-light rounded w-1/2"></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-3">
                        New interface with categorization by information needs
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <Separator className="my-6" />
              
              {/* Impact Section with improved visualization */}
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 bg-forest-light rounded-full flex items-center justify-center">
                    <span className="text-forest-dark text-xs font-bold">6</span>
                  </div>
                  <h2 className="text-xl font-medium text-gray-800 flex items-center gap-2">
                    Impact and Reflections
                    <ChartBar size={18} className="text-green-500" />
                  </h2>
                </div>
                
                <div className="pl-7">
                  <p className="mb-6 text-base leading-relaxed">
                    {caseStudy.fullContent.impact}
                  </p>

                  {/* New, simplified visualization using comparison cards */}
                  <div className="bg-white p-5 rounded-lg my-6 border border-gray-200">
                    <h3 className="text-base font-medium mb-4 text-gray-700 flex items-center gap-2">
                      <ChartBar className="text-forest-dark" size={18} />
                      Results After Implementation
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Before & After: Administrative Burden */}
                      <div className="space-y-4">
                        <h4 className="text-sm font-medium text-gray-600">Administrative Burden</h4>
                        
                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                          <div className="flex-shrink-0 p-1.5 bg-red-100 rounded-md">
                            <ArrowUpSquare size={20} className="text-red-500" />
                          </div>
                          <div>
                            <div className="flex items-baseline gap-1.5">
                              <span className="text-2xl font-bold text-gray-800">100%</span>
                              <span className="text-xs text-gray-500">BEFORE</span>
                            </div>
                            <p className="text-xs text-gray-500">High administrative overhead</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                          <div className="flex-shrink-0 p-1.5 bg-green-100 rounded-md">
                            <ArrowDownSquare size={20} className="text-green-500" />
                          </div>
                          <div>
                            <div className="flex items-baseline gap-1.5">
                              <span className="text-2xl font-bold text-gray-800">70%</span>
                              <span className="text-xs text-gray-500">AFTER</span>
                            </div>
                            <p className="text-xs text-gray-500">30% reduction in burden</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Before & After: Meeting Relevance */}
                      <div className="space-y-4">
                        <h4 className="text-sm font-medium text-gray-600">Meeting Relevance</h4>
                        
                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                          <div className="flex-shrink-0 p-1.5 bg-red-100 rounded-md">
                            <ArrowDownSquare size={20} className="text-red-500" />
                          </div>
                          <div>
                            <div className="flex items-baseline gap-1.5">
                              <span className="text-2xl font-bold text-gray-800">75%</span>
                              <span className="text-xs text-gray-500">BEFORE</span>
                            </div>
                            <p className="text-xs text-gray-500">Low meeting relevance score</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                          <div className="flex-shrink-0 p-1.5 bg-green-100 rounded-md">
                            <ArrowUpSquare size={20} className="text-green-500" />
                          </div>
                          <div>
                            <div className="flex items-baseline gap-1.5">
                              <span className="text-2xl font-bold text-gray-800">95%</span>
                              <span className="text-xs text-gray-500">AFTER</span>
                            </div>
                            <p className="text-xs text-gray-500">20% improvement in relevance</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-xs text-gray-500 mt-5 text-center border-t border-gray-100 pt-4">
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
