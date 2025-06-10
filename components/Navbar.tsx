import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';

interface NavbarProps {
  navItems: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ navItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-gamer-dark-secondary shadow-lg py-4' : 'bg-gamer-dark py-6'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold text-pyro-red hover:text-pyro-red-tint transition-colors">
          Your Name
        </a>
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className="text-medium-text hover:text-hydro-blue transition-colors duration-300 font-mono text-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-hydro-blue mr-1">0{index + 1}.</span>{item.name}
            </a>
          ))}
          <a
            href="/resume.pdf" // Replace with your resume link
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-hydro-blue border border-hydro-blue rounded px-4 py-2 hover:bg-hydro-blue-tint transition-colors duration-300"
          >
            Resume
          </a>
        </nav>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-medium-text hover:text-hydro-blue focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              ) : (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gamer-dark-secondary shadow-lg py-2 animate-fade-in-up">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-medium-text hover:text-hydro-blue transition-colors duration-300 font-mono text-lg"
              >
                 <span className="text-hydro-blue mr-1">0{index + 1}.</span>{item.name}
              </a>
            ))}
            <a
              href="/resume.pdf" // Replace with your resume link
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="font-mono text-lg text-hydro-blue border border-hydro-blue rounded px-6 py-3 hover:bg-hydro-blue-tint transition-colors duration-300"
            >
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;