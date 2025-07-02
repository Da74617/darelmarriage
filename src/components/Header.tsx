import React, { useState, useEffect } from 'react';
import { Heart, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Heart className="w-6 h-6 text-rose-500" />
            <span className="text-xl font-serif text-gray-800">Marie & Pierre</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {[
              { name: 'Accueil', id: 'hero' },
              { name: 'Notre Histoire', id: 'story' },
              { name: 'Galerie', id: 'gallery' },
              { name: 'RSVP', id: 'rsvp' },
              { name: 'Infos Pratiques', id: 'info' },
              { name: 'Cagnotte', id: 'registry' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-rose-500 transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {[
              { name: 'Accueil', id: 'hero' },
              { name: 'Notre Histoire', id: 'story' },
              { name: 'Galerie', id: 'gallery' },
              { name: 'RSVP', id: 'rsvp' },
              { name: 'Infos Pratiques', id: 'info' },
              { name: 'Cagnotte', id: 'registry' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-rose-500 hover:bg-rose-50 transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}