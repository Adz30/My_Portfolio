import React from 'react';

const Skills = () => {
  const technicalSkills = [
    { name: 'Solidity', level: 95 },
    { name: 'ERC-4626', level: 90 },
    { name: 'Web3.js/Ethers.js', level: 85 },
    { name: 'Hardhat', level: 88 },
    { name: 'Smart Contract Security', level: 92 },
    { name: 'Account Abstraction', level: 95 },
  ];

  const blockchainPlatforms = [
    { name: 'Ethereum', level: 95 },
    { name: 'Base', level: 85 },
    { name: 'Polygon', level: 88 },
    { name: 'Flare', level: 75 },
    { name: 'Avalanche', level: 80 },
    { name: 'Arbitrum', level: 70 },
  ];

  const webDevelopment = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Redux', level: 82 },
    { name: 'Bootstrap', level: 85 },
    { name: 'Firebase', level: 78 },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="h-1 w-20 bg-violet-600 mx-auto"></div>
          <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            With deep expertise across blockchain technologies and web development, 
            I deliver secure and scalable decentralized solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCategory 
            title="Smart Contract Development" 
            skills={technicalSkills} 
            className="bg-gradient-to-br from-violet-500/10 to-indigo-500/10"
          />
          
          <SkillCategory 
            title="Blockchain Platforms" 
            skills={blockchainPlatforms} 
            className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10"
          />
          
          <SkillCategory 
            title="Web Development" 
            skills={webDevelopment} 
            className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10"
          />
        </div>
      </div>
    </section>
  );
};

interface SkillCategoryProps {
  title: string;
  skills: { name: string; level: number }[];
  className?: string;
}

const SkillCategory = ({ title, skills, className }: SkillCategoryProps) => {
  return (
    <div className={`p-6 rounded-2xl ${className}`}>
      <h3 className="text-xl font-semibold mb-6 text-center">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="font-medium">{skill.name}</span>
              <span className="text-sm text-slate-600 dark:text-slate-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-violet-600 to-indigo-600 h-2 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;