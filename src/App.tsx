// App.jsx
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './components/Blog';
import LinksPage from './components/LinksPage';
import './styles/animations.css';

function App() {
  useEffect(() => {
    document.title = "Dev.Chain | Blockchain Developer Portfolio";
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className="text-slate-900 dark:text-white bg-white dark:bg-slate-900 transition-colors">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Services />
            <Blog />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/links" element={<LinksPage />} />
      </Routes>
    </div>
  );
}

export default App;
