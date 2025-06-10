import React from 'react';
import { SkillCategory } from '../types';

interface SkillsSectionProps {
  skillCategories: SkillCategory[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skillCategories }) => {
  return (
    <section id="skills" className="py-20 md:py-32 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
      <div className="flex items-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-light-text">
          <span className="text-hydro-blue font-mono mr-2 text-xl md:text-2xl">04.</span>My Skills
        </h2>
        <div className="ml-4 h-px flex-grow bg-gamer-dark-secondary"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, catIndex) => (
          <div 
            key={category.id} 
            className="bg-gamer-dark-secondary p-6 rounded-lg shadow-lg animate-fade-in-up"
            style={{ animationDelay: `${catIndex * 150 + 500}ms` }}
          >
            <h3 className="text-xl font-semibold text-light-text mb-4 border-b border-medium-text border-opacity-30 pb-2">{category.name}</h3>
            <ul className="space-y-2">
              {category.skills.map((skill) => (
                <li key={skill.id} className="flex items-center text-medium-text hover:text-hydro-blue transition-colors duration-200">
                  {skill.icon ? (
                    React.cloneElement(skill.icon, { className: 'w-5 h-5 mr-3 text-block-green flex-shrink-0' })
                  ) : (
                    <span className="w-5 h-5 mr-3 text-block-green flex-shrink-0">&#8227;</span> // Bullet point if no icon
                  )}
                  <span className="font-mono text-sm">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;