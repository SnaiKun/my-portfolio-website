import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center border-t border-gamer-dark-secondary">
      <p className="text-medium-text text-sm font-mono">
        Designed & Built by Your Name &copy; {new Date().getFullYear()}
      </p>
      <p className="text-xs text-medium-text opacity-70 mt-1 font-mono">
        Inspired by Brittany Chiang's portfolio design. Themed with a passion for gaming.
      </p>
    </footer>
  );
};

export default Footer;