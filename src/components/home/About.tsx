import { Link } from "react-router-dom";

import { RxDownload } from "react-icons/rx";
import { RxGithubLogo } from "react-icons/rx";
import { RxEnvelopeClosed } from "react-icons/rx";
import { RxLinkedinLogo } from "react-icons/rx";
import { RxGlobe } from "react-icons/rx";

const About = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-12 justify-center md:mt-4 mb-16">
      <img src="/pfp.jpeg" alt="Profile picture" className="rounded-full size-64 object-cover shadow-lg" />
      <div className="text-center md:text-left space-y-2">
        <h1 className="text-4xl font-bold">Hi! I'm Ryan 👋</h1>
        <p className="text-xl font-bold bg-gradient-to-r from-slate-400 to-slate-700 dark:from-cyan-400 dark:to-blue-300 text-transparent inline-block bg-clip-text">
          Software Engineer/Machine Learning Engineer
        </p>
        <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-x-1 md:justify-start">
          <RxGlobe /> Singapore
        </p>
        <p className="text-md text-gray-600 dark:text-gray-400">
          Third year Computer Engineering Student at the National University of Singapore
        </p>
        <div className="flex items-center gap-4 justify-center md:justify-start mt-4">
          <a
            href="/Resume_RyanChuaFeb25.pdf"
            download="Resume_RyanChuaFeb25.pdf"
            className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-3xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors border-1"
          >
            Resume <RxDownload className="text-lg" />
          </a>
          <div className="flex gap-4">
            <Link to="https://github.com/ryan1604" target="_blank" rel="noopener noreferrer" className="text-2xl">
              <RxGithubLogo />
            </Link>
            <Link to="mailto:ryanchua1604@gmail.com" target="_blank" rel="noopener noreferrer" className="text-2xl">
              <RxEnvelopeClosed />
            </Link>
            <Link
              to="https://www.linkedin.com/in/ryancqw/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl"
            >
              <RxLinkedinLogo />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
