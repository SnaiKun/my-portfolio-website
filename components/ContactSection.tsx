import React from 'react';
import { EmailIcon, LinkedInIcon, GitHubIcon } from './icons';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 text-center animate-fade-in-up" style={{ animationDelay: '500ms' }}>
       <div className="flex items-center mb-12 max-w-lg mx-auto">
         <div className="h-px flex-grow bg-gamer-dark-secondary"></div>
        <h2 className="text-2xl md:text-3xl font-bold text-light-text mx-4">
           <span className="text-hydro-blue font-mono mr-2 text-xl md:text-2xl">05.</span>What's Next?
        </h2>
        <div className="h-px flex-grow bg-gamer-dark-secondary"></div>
      </div>
      
      <h3 className="text-4xl md:text-5xl font-bold text-light-text mb-4">Get In Touch</h3>
      <p className="text-medium-text text-lg max-w-xl mx-auto mb-10">
        I'm currently open to new opportunities and collaborations. Whether you have a project in mind, a question, or just want to say hi (or discuss best Furina builds!), my inbox is always open. I'll do my best to get back to you!
      </p>
      <a
        href="mailto:your.email@example.com" // Remember to update this
        className="inline-block text-hydro-blue font-mono text-lg border border-hydro-blue rounded px-8 py-4 hover:bg-hydro-blue-tint transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-hydro-blue focus:ring-opacity-50"
      >
        Say Hello
      </a>
      <div className="mt-16 flex justify-center space-x-6">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-medium-text hover:text-pyro-red transition-colors duration-300">
          <GitHubIcon className="w-8 h-8" />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-medium-text hover:text-pyro-red transition-colors duration-300">
          <LinkedInIcon className="w-8 h-8" />
        </a>
        <a href="mailto:your.email@example.com" aria-label="Email Me" className="text-medium-text hover:text-pyro-red transition-colors duration-300">
          <EmailIcon className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
};

export default ContactSection;