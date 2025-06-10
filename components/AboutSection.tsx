import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
      <div className="flex items-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-light-text">
          <span className="text-hydro-blue font-mono mr-2 text-xl md:text-2xl">01.</span>About Me
        </h2>
        <div className="ml-4 h-px flex-grow bg-gamer-dark-secondary"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-start">
        <div className="md:col-span-3 text-medium-text text-base md:text-lg space-y-4">
          <p>
            Hello! I'm Your Name, a passionate frontend engineer with a knack for crafting elegant and efficient user interfaces. 
            My journey into web development started years ago with a fascination for how code could bring ideas to life on the screen. Today, I thrive on tackling complex challenges and building software that not only functions flawlessly but also provides a delightful user experience.
          </p>
          <p>
            Beyond coding, I'm an avid gamer, finding inspiration and relaxation in worlds like Minecraft, the vibrant lands of Teyvat in Genshin Impact (Furina and Hu Tao are favorites!), and the tactical arenas of Valorant. These games often spark creative ideas for interactive designs and user engagement.
          </p>
          <p>
            I have a strong background in JavaScript, TypeScript, and modern frameworks like React and Next.js. I'm particularly interested in the intersection of AI and web development, and I've been exploring how tools like the Gemini API can be used to create more intelligent and interactive applications.
          </p>
          <p>
            When I'm not coding or gaming, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee while planning my next adventure. I'm always eager to learn and grow, both personally and professionally.
          </p>
        </div>
        <div className="md:col-span-2 relative group mt-8 md:mt-0">
          <div className="absolute inset-0 bg-hydro-blue rounded-md transform translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 opacity-80"></div>
          <img 
            src="https://picsum.photos/seed/profile/400/400" // Consider a custom avatar or game-related image
            alt="Your Name" 
            className="rounded-md relative z-10 w-full max-w-xs mx-auto md:max-w-none shadow-xl filter grayscale hover:filter-none transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;