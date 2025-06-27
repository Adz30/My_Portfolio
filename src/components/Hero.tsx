import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background particles/animation effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="particle-container"></div>
      </div>
      
      <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block text-slate-800 dark:text-white">
                Blockchain Developer
              </span>
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Building The Future
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl">
              Specialized in smart contract development, DeFi protocols, and Web3 integration. 
              Turning complex blockchain concepts into secure, scalable solutions.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-medium flex items-center transition-colors"
              >
                Let's Connect
                <ArrowRight size={18} className="ml-2" />
              </a>
              
              <a 
                href="#projects" 
                className="px-6 py-3 border border-slate-300 dark:border-slate-700 hover:border-violet-600 dark:hover:border-violet-400 rounded-lg font-medium transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-2 order-first lg:order-last flex justify-center lg:justify-end">
            <div className="relative">
              {/* Stylized hexagon shape with gradient */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-500 rounded-3xl relative overflow-hidden shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-900/80 to-slate-900/50">
                  {/* Code-like elements to represent blockchain */}
                  <div className="text-2xs sm:text-xs text-slate-300/80 font-mono">
                    <div>{'{'}</div>
                    <div className="pl-4">"block": 16728199,</div>
                    <div className="pl-4">"timestamp": "0x6401c2ee",</div>
                    <div className="pl-4">"transactions": [ ... ],</div>
                    <div className="pl-4">"hash": "0x8f5bab..."</div>
                    <div>{'}'}</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-4 border-violet-400/30 rounded-2xl dark:border-violet-600/30"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-indigo-400/30 rounded-full dark:border-indigo-600/30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;