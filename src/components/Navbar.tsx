import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Github } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a
                href="#home"
                className="text-xl font-bold text-violet-600 dark:text-violet-400 flex items-center"
              >
                <span className="block">ADZ.DEV</span>
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a
                href="#home"
                className="hover:text-violet-600 dark:hover:text-violet-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:text-violet-600 dark:hover:text-violet-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="hover:text-violet-600 dark:hover:text-violet-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="hover:text-violet-600 dark:hover:text-violet-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Projects
              </a>
              <a
                href="#services"
                className="hover:text-violet-600 dark:hover:text-violet-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Services
              </a>
              <a
                href="#blog"
                className="hover:text-violet-600 dark:hover:text-violet-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Blog
              </a>{" "}
              {/* New blog link */}
              <a
                href="#contact"
                className="hover:text-violet-600 dark:hover:text-violet-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </a>
              <a
                href="https://github.com/Adz30"
                className="text-slate-700 dark:text-slate-200 hover:text-violet-600 dark:hover:text-violet-400 px-3 py-2"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={20} />
              </a>
              <ThemeToggle />
            </div>
          </div>
          <div className="flex md:hidden items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-slate-900 shadow-lg">
          <a
            href="#home"
            className="hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-violet-600 dark:hover:text-violet-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-violet-600 dark:hover:text-violet-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#skills"
            className="hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-violet-600 dark:hover:text-violet-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-violet-600 dark:hover:text-violet-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#services"
            className="hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-violet-600 dark:hover:text-violet-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#blog"
            className="hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-violet-600 dark:hover:text-violet-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </a>{" "}
          {/* New blog link */}
          <a
            href="#contact"
            className="hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-violet-600 dark:hover:text-violet-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
          <a
            href="https://github.com/Adz30"
            className="hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-violet-600 dark:hover:text-violet-400 flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors"
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsMenuOpen(false)}
          >
            <Github size={20} className="mr-2" /> GitHub
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
