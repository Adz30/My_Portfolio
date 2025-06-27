import React from 'react';
import { Code, Cpu, Database, Terminal } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Kristian Adam Williams</h2>
          <div className="h-1 w-20 bg-violet-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">
              Blockchain Developer & Smart Contract Specialist
            </h3>
            
            <p className="text-slate-600 dark:text-slate-300 mb-6">
             I didn’t come into blockchain through hype—I came through curiosity. After years working in professional sales, I found myself drawn to the power of smart contracts, decentralization, and the idea of permissionless innovation. What started as late-night tinkering turned into full-time obsession.
            </p>
            
            <p className="text-slate-600 dark:text-slate-300 mb-6">
               Now, I build systems that let people interact with finance, data, and ownership in entirely new ways. From DAOs to DeFi, I've designed and deployed smart contracts, architected dApps, and helped others navigate the Web3 world with clarity. I’ve made mistakes, learned fast, and love sharing what I’ve picked up along the way—with builders and strangers alike.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-violet-600 rounded-full mr-2"></div>
                <span className="dark:text-slate-300">Smart Contract Auditing</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-violet-600 rounded-full mr-2"></div>
                <span className="dark:text-slate-300">DeFi Protocol Design</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-violet-600 rounded-full mr-2"></div>
                <span className="dark:text-slate-300">Web3 Integration</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-violet-600 rounded-full mr-2"></div>
                <span className="dark:text-slate-300">Tokenomics</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-violet-600 rounded-full mr-2"></div>
                <span className="dark:text-slate-300">Account Abstraction</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-violet-600 rounded-full mr-2"></div>
                <span className="dark:text-slate-300">Gas Optimization</span>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-medium inline-block transition-colors"
            >
              Get In Touch
            </a>
          </div>
          
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Code className="text-violet-600 w-12 h-12 mb-4" />
              <h4 className="text-lg font-semibold mb-2">Smart Contracts</h4>
              <p className="text-slate-600 dark:text-slate-400">
                Developing secure, auditable smart contracts for various use cases.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Terminal className="text-violet-600 w-12 h-12 mb-4" />
              <h4 className="text-lg font-semibold mb-2">dApp Development</h4>
              <p className="text-slate-600 dark:text-slate-400">
                Building user-friendly decentralized applications with modern frameworks.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Cpu className="text-violet-600 w-12 h-12 mb-4" />
              <h4 className="text-lg font-semibold mb-2">Protocol Design</h4>
              <p className="text-slate-600 dark:text-slate-400">
                Architecting robust DeFi protocols and governance systems.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Database className="text-violet-600 w-12 h-12 mb-4" />
              <h4 className="text-lg font-semibold mb-2">Tokenomics</h4>
              <p className="text-slate-600 dark:text-slate-400">
                Designing sustainable token economics and incentive structures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;