import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">BITSI</h1>
              <p className="text-xs text-gray-600">Bhagawati IT Services & Investment</p>
            </div>
          </div>

          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition">Home</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition">Services</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition">About</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition">Contact</button>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button onClick={() => scrollToSection('home')} className="block text-gray-700 hover:text-blue-600 transition">Home</button>
            <button onClick={() => scrollToSection('services')} className="block text-gray-700 hover:text-blue-600 transition">Services</button>
            <button onClick={() => scrollToSection('about')} className="block text-gray-700 hover:text-blue-600 transition">About</button>
            <button onClick={() => scrollToSection('contact')} className="block text-gray-700 hover:text-blue-600 transition">Contact</button>
          </div>
        )}
      </nav>
    </header>
  );
}
