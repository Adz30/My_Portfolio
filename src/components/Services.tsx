import React from 'react';
import { Code, ShieldCheck, Lightbulb, ArrowUpRight, Settings, LineChart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-10 h-10 text-violet-600" />,
      title: "Smart Contract Development",
      description: "Secure, optimized smart contracts built to industry standards with comprehensive testing and documentation.",
      items: ["ERC Token Standards", "DeFi Protocols", "Custom Business Logic", "Upgradeable Contracts"]
    },
   
    {
      icon: <Lightbulb className="w-10 h-10 text-violet-600" />,
      title: "Blockchain Consulting",
      description: "Strategic guidance on blockchain implementation, token economics, and governance structures.",
      items: ["Technology Selection", "Tokenomics Design", "Regulatory Compliance", "Implementation Roadmap"]
    },
    {
      icon: <Settings className="w-10 h-10 text-violet-600" />,
      title: "dApp Development",
      description: "End-to-end development of decentralized applications with seamless blockchain integration.",
      items: ["Web3 Integration", "Wallet Connectivity", "Front-end Development", "API Development"]
    },
    {
      icon: <LineChart className="w-10 h-10 text-violet-600" />,
      title: "DeFi Protocol Design",
      description: "Architecting innovative DeFi solutions with robust tokenomics and incentive mechanisms.",
      items: ["Lending Platforms", "DEX Development", "Yield Farming", "Automated Strategies"]
    }
  ];

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
          <div className="h-1 w-20 bg-violet-600 mx-auto"></div>
          <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Comprehensive blockchain development services tailored to your project needs.
            From smart contract development to full dApp solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-200 dark:border-slate-700"
            >
              <div className="mb-5">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-5">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-violet-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="ml-2 text-slate-600 dark:text-slate-400">{item}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="#contact" 
                className="inline-flex items-center text-sm font-medium text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300"
              >
                Learn more 
                <ArrowUpRight size={16} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;