import React from "react";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 p-8 flex flex-col items-center">
      <div className="max-w-4xl bg-white shadow-2xl rounded-3xl p-8 text-center transform transition hover:scale-105">
        <img
          src="https://raw.githubusercontent.com/madhavms/jay-portal/refs/heads/main/src/assets/jku.jpeg"
          alt="Jayakhosh Chidambaran"
          className="w-40 h-40 mx-auto rounded-full border-4 border-blue-600 shadow-md"
        />
        <h1 className="text-4xl font-extrabold mt-6 text-gray-900">Jayakhosh Chidambaran</h1>
        <p className="text-gray-700 text-lg mt-3">An accomplished professional with over 20 years of experience</p>
        <p className="text-gray-600 mt-2 text-md leading-relaxed">
          Expertise in General Management, Product Development, Channel Development, Sales & Marketing, and Consulting.
        </p>
        
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Areas of Expertise</h2>
          <p className="text-gray-700 mt-3 text-lg">Strategic Planning, Business Development, Negotiation, Consulting, Strategic Account Management, Price Management, Solution Selling, Sales Cycle Management, Process Improvement</p>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Contact</h2>
          <p className="text-gray-700 text-lg">Email: jayakhosh@example.com</p>
          <div className="flex justify-center gap-6 mt-4">
            <a
              href="https://www.linkedin.com/in/jayakhosh-chidambaran-00943175/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-blue-600 px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://jaychidambaran.wordpress.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-gray-700 px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 transition"
            >
              Blog
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
