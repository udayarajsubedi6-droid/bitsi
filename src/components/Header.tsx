import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import bitsi from '../bitsi.jpg';

interface HeaderProps {
  onNavigate: (page: 'home' | 'members' | 'career' | 'about' | 'contact') => void;
  currentPage: 'home' | 'members' | 'career' | 'about' | 'contact';
}

export default function Header({ onNavigate, currentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleNavigation = (page: 'home' | 'members' | 'career' | 'about' | 'contact') => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <button onClick={() => handleNavigation('home')} className="flex items-center space-x-3 hover:opacity-80 transition">
            {/* <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div> */}
            {/* <div>
              <h1 className="text-2xl font-bold text-gray-800">BITSI</h1>
              <p className="text-xs text-gray-600">Bhagawati IT Services & Investment</p>
            </div> */}
            <div className="flex items-center space-x-2">
 <img 
  src={bitsi}
  alt="BITSI Logo"
  className="w-10 h-10 object-contain"
/>
  {/* <div>
    <h1 className="text-2xl font-bold text-gray-800">BITSI</h1>
    <p className="text-xs text-gray-600">Bhagawati IT Services & Investment</p>
  </div> */}
</div>

          </button>

          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => handleNavigation('home')}
              className={`transition ${currentPage === 'home' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Home
            </button>
            <button
              onClick={() => currentPage === 'home' ? scrollToSection('services') : handleNavigation('home')}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Services
            </button>
            <button
              onClick={() => handleNavigation('about')}
              className={`transition ${currentPage === 'about' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
            >
              About
            </button>
            <button
              onClick={() => handleNavigation('members')}
              className={`transition ${currentPage === 'members' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Our Members
            </button>
            <button
              onClick={() => handleNavigation('career')}
              className={`transition ${currentPage === 'career' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Careers
            </button>
            <button
              onClick={() => handleNavigation('contact')}
              className={`transition ${currentPage === 'contact' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Contact
            </button>
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
            <button
              onClick={() => handleNavigation('home')}
              className={`block transition ${currentPage === 'home' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Home
            </button>
            <button onClick={() => currentPage === 'home' ? scrollToSection('services') : handleNavigation('home')} className="block text-gray-700 hover:text-blue-600 transition">
              Services
            </button>
            <button
              onClick={() => handleNavigation('about')}
              className={`block transition ${currentPage === 'about' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
            >
              About
            </button>
            <button
              onClick={() => handleNavigation('members')}
              className={`block transition ${currentPage === 'members' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Our Members
            </button>
            <button
              onClick={() => handleNavigation('career')}
              className={`block transition ${currentPage === 'career' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Careers
            </button>
            <button
              onClick={() => handleNavigation('contact')}
              className={`block transition ${currentPage === 'contact' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
