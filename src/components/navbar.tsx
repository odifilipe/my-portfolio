"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold">Odi Filipe Barros Brisola</a>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-8">
          <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
          <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
          <li><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
          <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
        </ul>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden">
            <ul className="flex flex-col px-4 py-2">
              <li><a href="#" className="block py-2 hover:text-primary transition-colors" onClick={toggleMenu}>Home</a></li>
              <li><a href="#about" className="block py-2 hover:text-primary transition-colors" onClick={toggleMenu}>About</a></li>
              <li><a href="#projects" className="block py-2 hover:text-primary transition-colors" onClick={toggleMenu}>Projects</a></li>
              <li><a href="#skills" className="block py-2 hover:text-primary transition-colors" onClick={toggleMenu}>Skills</a></li>
              <li><a href="#contact" className="block py-2 hover:text-primary transition-colors" onClick={toggleMenu}>Contact</a></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
