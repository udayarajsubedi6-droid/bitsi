import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Members from './components/Members';
import Career from './components/Career';

type PageType = 'home' | 'members' | 'career' | 'about' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const navigateTo = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen">
      <Header onNavigate={navigateTo} currentPage={currentPage} />

      {currentPage === 'home' && (
        <>
          <Hero onNavigate={navigateTo} />
          <Services />
        </>
      )}
      {currentPage === 'about' && <About />}
      {currentPage === 'contact' && <Contact />}
      {currentPage === 'members' && <Members />}
      {currentPage === 'career' && <Career />}

      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;
