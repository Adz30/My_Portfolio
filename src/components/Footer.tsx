import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <a href="#home" className="text-xl font-bold text-white mb-4 flex items-center">
              ADZ.DEV
            </a>
            <p className="mb-4 max-w-xs">
              Building secure, scalable blockchain solutions that power the decentralized future.
            </p>
            <div className="flex space-x-4">
  <a 
    href="https://github.com/Adz30/" 
    className="text-slate-400 hover:text-white transition-colors" 
    target="_blank" 
    rel="noreferrer" 
    aria-label="GitHub"
  >
    <Github size={20} />
  </a>

  <a 
    href="https://www.linkedin.com/in/adam-williams-63bb44230/" 
    className="text-slate-400 hover:text-white transition-colors" 
    target="_blank" 
    rel="noreferrer" 
    aria-label="LinkedIn"
  >
    <Linkedin size={20} />
  </a>

  <a 
    href="mailto:kaw94@hotmail.co.uk" 
    className="text-slate-400 hover:text-white transition-colors" 
    aria-label="Email"
  >
    <Mail size={20} />
  </a>
</div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-white transition-colors">Smart Contract Development</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">dApp Development</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Security Auditing</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Blockchain Consulting</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">DeFi Protocol Design</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} ADZ.DEV. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;