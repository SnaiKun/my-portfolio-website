import React from 'react';
import { Project } from '../types';
import { GitHubIcon, ExternalLinkIcon } from './icons'; 

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <div 
      className="bg-gamer-dark-secondary rounded-lg shadow-xl p-6 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300 ease-in-out animate-fade-in-up"
      style={{ animationDelay: `${index * 100 + 300}ms` }}
    >
      <div>
        <div className="flex justify-between items-center mb-4">
          <svg className="w-10 h-10 text-hydro-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
          </svg>
          <div className="flex space-x-3">
            {project.repoLink && (
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub repository"
                className="text-medium-text hover:text-pyro-red transition-colors duration-300"
              >
                <GitHubIcon className="w-6 h-6" />
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live preview"
                className="text-medium-text hover:text-pyro-red transition-colors duration-300"
              >
                <ExternalLinkIcon className="w-6 h-6" />
              </a>
            )}
          </div>
        </div>
        <h3 className="text-xl font-bold text-light-text mb-2 group-hover:text-hydro-blue transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-medium-text text-sm mb-4 leading-relaxed">
          {project.description}
        </p>
      </div>
      <div>
        <ul className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="text-xs text-block-green font-mono bg-block-green bg-opacity-20 px-2 py-1 rounded"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;