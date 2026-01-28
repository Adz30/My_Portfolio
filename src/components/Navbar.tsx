import React, { useState, useEffect } from "react";
import { Menu, X, Github } from "lucide-react";
import { Link, useNavigate ,useLocation} from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/"); // go to homepage first
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

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
            <span
              className="text-xl font-bold text-violet-600 dark:text-violet-400 cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              ADZ.DEV
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {["home", "about", "skills", "projects", "services", "blog", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="hover:text-violet-600 dark:hover:text-violet-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
            <Link
              to="/links"
              className="hover:text-violet-600 dark:hover:text-violet-400 px-3 py-2 text-sm font-medium transition-colors"
            >
              Links
            </Link>
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

          {/* Mobile Menu Toggle */}
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-slate-900 shadow-lg">
          {["home", "about", "skills", "projects", "services", "blog", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-violet-600 dark:hover:text-violet-400 transition-colors w-full text-left"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
          <Link
            to="/links"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Links
          </Link>
          <a
            href="https://github.com/Adz30"
            className="flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsMenuOpen(false)}
          >
            <Github size={20} className="mr-2" /> GitHub
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
