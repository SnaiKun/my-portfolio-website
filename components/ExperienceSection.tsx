import React, { useState } from 'react';
import { Experience } from '../types';
import { ExternalLinkIcon } from './icons';

interface ExperienceSectionProps {
  experiences: Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  const [selectedExperience, setSelectedExperience] = useState(0);

  return (
    <section id="experience" className="py-20 md:py-32 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
      <div className="flex items-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-light-text">
           <span className="text-hydro-blue font-mono mr-2 text-xl md:text-2xl">02.</span>Where I’ve Worked
        </h2>
        <div className="ml-4 h-px flex-grow bg-gamer-dark-secondary"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Tabs for company names */}
        <div className="flex md:flex-col md:w-1/4 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0">
          {experiences.map((exp, index) => (
            <button
              key={exp.id}
              onClick={() => setSelectedExperience(index)}
              className={`font-mono text-sm whitespace-nowrap px-4 py-3 text-left w-full hover:bg-gamer-dark-secondary hover:text-hydro-blue transition-colors duration-300 focus:outline-none
                ${selectedExperience === index ? 'text-hydro-blue border-hydro-blue md:border-l-2 md:border-b-0 border-b-2 bg-gamer-dark-secondary' : 'text-medium-text md:border-l-2 md:border-b-0 border-b-2 border-medium-text border-opacity-30'}`}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Experience details */}
        <div className="md:w-3/4">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`${selectedExperience === index ? 'block animate-fade-in-up' : 'hidden'}`}
              style={{ animationDelay: '100ms' }}
            >
              <h3 className="text-xl font-semibold text-light-text mb-1">
                {exp.role}{' '}
                <span className="text-hydro-blue">
                  @{' '}
                  {exp.companyLink ? (
                    <a href={exp.companyLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center hover:underline hover:text-pyro-red">
                      {exp.company}
                      <ExternalLinkIcon className="w-4 h-4 ml-1" />
                    </a>
                  ) : exp.company}
                </span>
              </h3>
              <p className="text-xs text-medium-text font-mono mb-4">{exp.duration}</p>
              <ul className="space-y-2 list-inside">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="text-medium-text relative pl-6">
                    <span className="absolute left-0 top-1 text-hydro-blue">&#8227;</span> {/* Custom bullet */}
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;