
import React from 'react';
import { Calendar, BriefcaseMedical, Laptop } from 'lucide-react';

const Work: React.FC = () => {
  const workExperience = [
    {
      period: '2020 - Present',
      role: 'Product Designer',
      company: 'Health Tech Innovations',
      description: 'Leading design initiatives for healthcare scheduling platforms, conducting user research, and creating accessible interfaces for diverse user groups.',
      icon: <Laptop size={20} className="text-forest-DEFAULT" />,
    },
    {
      period: '2019 - 2020',
      role: 'UX Researcher & Customer Success',
      company: 'MedTech Solutions',
      description: 'Bridged the gap between customer feedback and product development, conducted usability testing, and facilitated tech adoption among healthcare professionals.',
      icon: <Laptop size={20} className="text-forest-DEFAULT" />,
    },
    {
      period: '2014 - 2019',
      role: 'Pediatric Occupational Therapist',
      company: 'Children\'s Rehabilitation Center',
      description: 'Provided therapy services to children with developmental challenges, collaborated with multidisciplinary teams, and designed custom intervention plans.',
      icon: <BriefcaseMedical size={20} className="text-forest-DEFAULT" />,
    },
  ];

  return (
    <section id="work" className="py-20 md:py-28 bg-earthy-light relative">
      <div className="container-custom">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-sm md:text-base font-medium text-forest-dark bg-forest-light/40 px-3 py-1 rounded-full mb-4">
            My Journey
          </span>
          <h2 className="section-title mx-auto">Professional Experience</h2>
          <p className="section-subtitle mx-auto">
            A timeline of my professional evolution from healthcare to technology.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-earthy-dark/40 transform md:translate-x-px" aria-hidden="true"></div>
          
          <div className="space-y-12 relative">
            {workExperience.map((item, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row items-center md:items-start ${
                  index % 2 === 0 ? 'md:justify-start' : 'md:flex-row-reverse md:justify-start'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-12 h-12 bg-earthy-light rounded-full border-4 border-earthy-dark/40 transform md:-translate-x-1/2 flex items-center justify-center z-10">
                  {item.icon}
                </div>
                
                {/* Content card */}
                <div 
                  className={`md:w-5/12 bg-white rounded-md p-6 shadow-sm border border-earthy-dark/20 mt-8 md:mt-0 ${
                    index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
                  } reveal ${index === 0 ? '' : `reveal-delay-${index}`} card-hover`}
                >
                  <div className="flex items-center mb-3">
                    <Calendar size={16} className="text-stone mr-2" />
                    <span className="text-sm text-stone">{item.period}</span>
                  </div>
                  <h3 className="text-xl font-medium mb-1">{item.role}</h3>
                  <p className="text-sm text-forest-dark mb-3">{item.company}</p>
                  <p className="text-charcoal/80">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
