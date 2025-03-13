const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 p-6 flex flex-col items-center">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-3xl p-6 sm:p-8 text-center transform transition hover:scale-105">
        <img
          src="https://raw.githubusercontent.com/madhavms/jay-portal/refs/heads/main/src/assets/jku.jpeg"
          alt="Jayakhosh Chidambaran (Jay)"
          className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full border-4 border-blue-600 shadow-md"
        />
        <h1 className="text-3xl sm:text-4xl font-extrabold mt-4 text-gray-900">
          Jayakhosh Chidambaran
        </h1>
        <p className="text-gray-700 text-md sm:text-lg mt-2">
          An accomplished professional with over 20 years of experience
        </p>
        <p className="text-gray-600 mt-2 text-sm sm:text-md leading-relaxed">
          Expertise in General Management, Product Development, Channel
          Development, Sales & Marketing, and Consulting.
        </p>

        <div className="mt-4 sm:mt-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Areas of Expertise
          </h2>
          <p className="text-gray-700 mt-2 text-md sm:text-lg">
            Strategic Planning, Business Development, Negotiation, Consulting,
            Strategic Account Management, Price Management, Solution Selling,
            Sales Cycle Management, Process Improvement
          </p>
        </div>

        <div className="mt-4 sm:mt-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Contact</h2>
          <p className="text-gray-700 text-md sm:text-lg">Email: test</p>
          <div className="flex justify-center gap-4 mt-3 sm:gap-6">
            <a
              href="https://www.linkedin.com/in/jayakhosh-chidambaran-00943175/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-blue-600 px-3 py-2 sm:px-4 sm:py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://jaychidambaran.wordpress.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-gray-700 px-3 py-2 sm:px-4 sm:py-2 rounded-lg shadow-md hover:bg-gray-800 transition"
            >
              Blog
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
