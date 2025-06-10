
import React from 'react'; // Added import for React types like ReactElement and SVGProps

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  liveLink?: string;
  repoLink?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
}

export interface Skill {
  id: string;
  name: string;
  icon?: React.ReactElement<React.SVGProps<SVGSVGElement>>; // Changed type from React.ReactNode
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
  companyLink?: string;
}

export interface NavItem {
  name: string;
  href: string;
}
