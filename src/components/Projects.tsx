import React, { useState } from 'react';
import { ExternalLink, Code, ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
  link: string;
  github?: string;
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Lending App",
      description: "This is a decentralized lending application built as a capstone project, implementing the ERC-4626 tokenized vault standard. It allows users to deposit assets, take loans secured by collateral, and supports automatic, on-chain time-based liquidation to protect lenders.",
      category: "Defi",
      image: "https://tan-top-impala-530.mypinata.cloud/ipfs/bafkreihgnczyvfo5xyljfzl5rlwcubm5fxmeyx2ddqijqvg7ofws6unnq4",
      technologies: ["Solidity", "Hardhat", "OpenZeppelin", "ERC-20", "ERC-4626"],
      link: "https://lendingapp.on-fleek.app/",
      github: "https://github.com/Adz30/Lending_APP",
    },
    {
      id: 2,
      title: "Pulse Board",
      description: "this is an app build to aid in the the creative space where creators can request aid from the community in return for recogntion and it uses Reown Appkit for web3 intregration.",
      category: "Community",
      image: "https://tan-top-impala-530.mypinata.cloud/ipfs/bafkreiga3zwe7dmgwrt274qa2ulj3lgg24ekztwb7xh37hbh4njsbm3g7e",
      technologies: ["Account Abstraction", "firebase", "react", "javascript"],
      link: "https://pulse-board-psi.vercel.app",
      github: "https://github.com/Adz30/pulseBoard",
    },
    {
      id: 3,
      title: "AMM token swap",
      description: "A decentralized exchange prototype built with React and Solidity, enabling users to swap between two ERC-20 tokens and manage liquidity using the constant product formula. The app features real-time pricing, chart visualizations, and on-chain smart contract interactions via the Ethereum Sepolia testnet.",
      category: "DeFi",
      image: "https://tan-top-impala-530.mypinata.cloud/ipfs/bafkreic635qhf4yfxwm2uwmljpq42zxsawcm6uvskqxfpgsegybni2f4ti",
      technologies: ["Solidity", "Web3", "DeFi", "AMM", "Redux"],
      link: "https://amm-rouge.vercel.app/",
      github: "https://github.com/Adz30/AMM",
    }
  ];

  const categories = ['all', ...Array.from(new Set(projects.map(project => project.category.toLowerCase())))];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === activeFilter);

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-violet-600 mx-auto"></div>
          <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Explore my blockchain development work across various domains, from smart contracts to 
            DeFi protocols and trading systems. Each project demonstrates practical blockchain solutions.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === category
                  ? 'bg-violet-600 text-white'
                  : 'bg-slate-200 dark:bg-slate-800 hover:bg-violet-100 dark:hover:bg-violet-900/30'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
      <div className="h-48 overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end">
          <div className="p-4">
            <span className="text-xs font-semibold bg-violet-600 text-white px-2 py-1 rounded-full">
              {project.category}
            </span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span 
              key={index} 
              className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-md">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
        
        <div className="flex space-x-3">
          <a 
            href={project.link} 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 font-medium flex items-center"
          >
            View Project <ExternalLink size={16} className="ml-1" />
          </a>
          {project.github && (
            <a 
              href={project.github} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 font-medium flex items-center"
            >
              Source Code <Code size={16} className="ml-1" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;