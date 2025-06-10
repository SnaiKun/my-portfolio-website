import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { Project, Experience, SkillCategory, NavItem } from './types';
import { GitHubIcon, LinkedInIcon, EmailIcon, ReactIcon, TypeScriptIcon, NodeJsIcon, TailwindCssIcon, PythonIcon, JavaScriptIcon, HtmlIcon, CssIcon, NextJsIcon, GitIcon, DockerIcon, AwsIcon, FigmaIcon } from './components/icons'; // Assuming you create these

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);

  const navItems: NavItem[] = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const projectsData: Project[] = [
    {
      id: 'proj1',
      title: 'AI Powered Code Reviewer',
      description: 'A platform that leverages generative AI to automatically review code submissions, provide feedback, and suggest improvements. Integrated with popular version control systems.',
      imageUrl: 'https://picsum.photos/seed/project1/600/400', // Placeholder - consider game-themed images
      technologies: ['React', 'TypeScript', 'Node.js', 'Gemini API', 'Tailwind CSS', 'Docker'],
      liveLink: '#',
      repoLink: '#',
    },
    {
      id: 'proj2',
      title: 'Interactive Data Dashboard',
      description: 'A dynamic dashboard for visualizing complex datasets, featuring real-time updates, customizable charts (using Recharts), and advanced filtering capabilities.',
      imageUrl: 'https://picsum.photos/seed/project2/600/400', // Placeholder
      technologies: ['Next.js', 'TypeScript', 'D3.js', 'Recharts', 'Tailwind CSS', 'PostgreSQL'],
      liveLink: '#',
    },
    {
      id: 'proj3',
      title: 'Smart Home Automation Hub',
      description: 'A central control system for smart home devices, offering a user-friendly interface for managing lights, thermostats, and security systems. Voice control integrated.',
      imageUrl: 'https://picsum.photos/seed/project3/600/400', // Placeholder
      technologies: ['Python', 'Flask', 'MQTT', 'React Native', 'SQLite'],
      repoLink: '#',
    },
     {
      id: 'proj4',
      title: 'Portfolio Generator',
      description: 'A tool that dynamically generates portfolio websites for developers based on their GitHub profiles and a set of predefined templates. Uses AI for content suggestions.',
      imageUrl: 'https://picsum.photos/seed/project4/600/400', // Placeholder
      technologies: ['React', 'Gemini API', 'Tailwind CSS', 'Firebase'],
      liveLink: '#',
      repoLink: '#',
    },
  ];

  const experienceData: Experience[] = [
    {
      id: 'exp1',
      company: 'Innovatech Solutions',
      companyLink: '#',
      role: 'Lead Frontend Architect',
      duration: 'Jan 2021 - Present',
      responsibilities: [
        'Architected and led the development of scalable frontend solutions for enterprise clients, utilizing micro-frontend architectures and modern JavaScript frameworks.',
        'Mentored a team of 10+ frontend engineers, fostering a culture of high-quality code and continuous learning.',
        'Championed the adoption of UI/UX best practices and accessibility standards across all projects, resulting in improved user satisfaction by 20%.',
        'Spearheaded the integration of AI-driven features (e.g., personalized recommendations, chatbots) using Gemini API, enhancing user engagement.',
      ],
    },
    {
      id: 'exp2',
      company: 'Digital Creations Co.',
      companyLink: '#',
      role: 'Senior React Developer',
      duration: 'June 2018 - Dec 2020',
      responsibilities: [
        'Developed and maintained complex, high-performance web applications using React, Redux, and TypeScript.',
        'Collaborated closely with UX/UI designers and backend teams to translate requirements into responsive and interactive user interfaces.',
        'Optimized application performance, reducing load times by 30% through code splitting, lazy loading, and efficient state management.',
        'Contributed to the development of a component library, improving development consistency and speed.',
      ],
    },
    {
      id: 'exp3',
      company: 'WebWorks Agency',
      companyLink: '#',
      role: 'Frontend Developer',
      duration: 'Aug 2016 - May 2018',
      responsibilities: [
        'Built responsive and pixel-perfect websites for diverse clients using HTML, CSS, and JavaScript.',
        'Integrated third-party APIs and services to extend application functionality.',
        'Participated in agile development cycles, including sprint planning, daily stand-ups, and retrospectives.',
      ],
    },
  ];
  
  const skillsData: SkillCategory[] = [
    {
      id: 'lang',
      name: 'Languages',
      skills: [
        { id: 'ts', name: 'TypeScript', icon: <TypeScriptIcon /> },
        { id: 'js', name: 'JavaScript (ESNext)', icon: <JavaScriptIcon /> },
        { id: 'py', name: 'Python', icon: <PythonIcon /> },
        { id: 'html', name: 'HTML5', icon: <HtmlIcon /> },
        { id: 'css', name: 'CSS3', icon: <CssIcon /> },
      ],
    },
    {
      id: 'frame',
      name: 'Frameworks & Libraries',
      skills: [
        { id: 'react', name: 'React', icon: <ReactIcon /> },
        { id: 'next', name: 'Next.js', icon: <NextJsIcon /> },
        { id: 'node', name: 'Node.js', icon: <NodeJsIcon /> },
        { id: 'tailwind', name: 'Tailwind CSS', icon: <TailwindCssIcon /> },
        { id: 'redux', name: 'Redux/Zustand' },
        { id: 'express', name: 'Express.js' },
      ],
    },
    {
      id: 'tools',
      name: 'Tools & Platforms',
      skills: [
        { id: 'git', name: 'Git & GitHub', icon: <GitIcon /> },
        { id: 'docker', name: 'Docker', icon: <DockerIcon /> },
        { id: 'aws', name: 'AWS', icon: <AwsIcon /> },
        { id: 'figma', name: 'Figma', icon: <FigmaIcon /> },
        { id: 'gemini', name: 'Gemini API' },
        { id: 'jira', name: 'Jira' },
      ],
    },
     {
      id: 'other',
      name: 'Other',
      skills: [
        { id: 'agile', name: 'Agile/Scrum' },
        { id: 'uiux', name: 'UI/UX Design' },
        { id: 'rest', name: 'RESTful APIs' },
        { id: 'microfe', name: 'Micro-frontends' },
        { id: 'perf', name: 'Performance Optimization' },
        { id: 'a11y', name: 'Accessibility (WCAG)' },
      ],
    }
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gamer-dark">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-hydro-blue h-12 w-12 mb-4 animate-spin border-t-hydro-blue border-r-gamer-dark-secondary border-b-gamer-dark-secondary border-l-gamer-dark-secondary"></div>
      </div>
    );
  }


  return (
    <div className="flex flex-col min-h-screen bg-gamer-dark">
      <Navbar navItems={navItems} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <AboutSection />
        <ExperienceSection experiences={experienceData} />
        <ProjectsSection projects={projectsData} />
        <SkillsSection skillCategories={skillsData} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;