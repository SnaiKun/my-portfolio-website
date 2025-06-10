import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-start pt-24 md:pt-0 animate-fade-in-up">
      <div className="max-w-3xl">
        <p className="text-hydro-blue font-mono text-md md:text-lg mb-4" style={{ animationDelay: '100ms' }}>Hi, my name is</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-pyro-red mb-4" style={{ animationDelay: '200ms' }}>
          Your Name.
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-light-text mb-6" style={{ animationDelay: '300ms' }}>
          I build things for the web. <span className="text-regal-gold opacity-80">And love gaming.</span>
        </h2>
        <p className="text-medium-text text-lg md:text-xl max-w-xl mb-12" style={{ animationDelay: '400ms' }}>
          I'm a senior frontend engineer specializing in creating exceptional digital experiences. 
          Currently, I'm focused on building accessible, human-centered products and exploring the potential of AI with technologies like the Gemini API. Avid player of Minecraft, Genshin Impact, and Valorant!
        </p>
        <div style={{ animationDelay: '500ms' }}>
          <a
            href="#projects"
            className="text-hydro-blue font-mono text-lg border border-hydro-blue rounded px-8 py-4 hover:bg-hydro-blue-tint transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-hydro-blue focus:ring-opacity-50"
          >
            Check out my work!
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;