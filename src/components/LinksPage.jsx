import React from "react";

const LinksPage = () => {
  const links = [
    { label: "📄 View My CV", url: "./CV.pdf" },
    { label: "🌐 Portfolio", url: "https://adzdev.xyz/" },
    { label: "💼 LinkedIn", url: "https://www.linkedin.com/in/adam-williams-63bb44230/" },
    { label: "💠 Dapp Astra", url: "https://dappastra.com" },
    { label: "💻 GitHub", url: "https://github.com/Adz30" },
    { label: "📧 Email me", url: "mailto:adzdev.xyz@gmail.com" },
    { label: "📅 Calendly", url: "https://calendly.com/adzdev-xyz/30min" },
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 text-center bg-slate-900">
      <img
        src="/Image.png"
        alt="Adam Williams"
        width={96}
        height={96}
        className="rounded-full mb-4 border-2 border-purple-400 shadow-lg"
      />
      <h1 className="text-2xl font-bold text-white">Adam Williams</h1>
      <p className="text-gray-400 mb-6">Web3 & AI Product Expert & Developer</p>

      <div className="flex flex-col gap-3 w-full max-w-xs">
        {links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-3 rounded-xl shadow-lg transition-transform hover:scale-105 hover:shadow-purple-500/40"
          >
            {link.label}
          </a>
        ))}
      </div>

      <p className="text-xs text-gray-400 mt-8">Made by Adam Williams 💡</p>
    </main>
  );
};

export default LinksPage;
