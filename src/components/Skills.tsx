import React from 'react';

const Skills = () => {
  const skillSections = [
    {
      title: 'Smart Contract Development',
      skills: [
        'Solidity',
        'ERC-20 / ERC-721 / ERC-4626',
        'Web3.js / Ethers.js',
        'Hardhat',
        'OpenZeppelin',
        'Smart Contract Security',
        'Slither / MythX',
        'Account Abstraction (ERC-4337)',
        'IPFS',
      ],
    },
    {
      title: 'Blockchain Platforms',
      skills: [
        'Ethereum',
        'Base',
        'Polygon',
        'Avalanche',
        'Arbitrum',
        'Flare',
        'Optimism',
        'BSC (BNB Chain)',
        'Fantom',
        'Mantle',
        'Mode',
      ],
    },
    {
      title: 'Web Development',
      skills: [
        'JavaScript',
        'React',
        'Node.js',
        'Redux',
        'Bootstrap',
        'Firebase',
        'Tailwind CSS',
        'Next.js',
        'HTML/CSS',
        'Vite',
      ],
    },
    {
      title: 'Tools & Automation',
      skills: [
        'n8n',
        'Zapier',
        'LangChain',
        'ChatGPT / OpenAI APIs',
        'Puppeteer',
        'Playwright',
        'Notion API',
        'Google Sheets API',
        'Postman',
        'GitHub Actions',
      ],
    },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="h-1 w-20 bg-violet-600 mx-auto"></div>
          <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            From secure smart contracts to automation tooling, I build scalable, efficient solutions across the full Web3 stack.
          </p>
        </div>

        <div
          className="flex space-x-6 overflow-x-auto scrollbar-thin scrollbar-thumb-violet-400 scrollbar-track-gray-100
            dark:scrollbar-thumb-violet-600 dark:scrollbar-track-slate-800
            snap-x snap-mandatory px-1"
        >
          {skillSections.map((section, idx) => (
            <div
              key={idx}
              className="min-w-[300px] max-w-xs p-6 rounded-2xl shadow-md
                bg-gradient-to-br from-violet-500/10 to-indigo-500/10
                dark:from-violet-500/20 dark:to-indigo-500/20 snap-center"
            >
              <h3 className="text-xl font-semibold mb-4 text-center">{section.title}</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                {section.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;