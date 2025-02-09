import { Dispatch, SetStateAction, useRef, useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

interface LinkDimension {
  width: number;
  left: number;
}

const paths = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Header = ({ darkMode, setDarkMode }: HeaderProps) => {
  const location = useLocation();
  const [activeLinkDimension, setActiveLinkDimension] = useState<LinkDimension>({ width: 0, left: 0 });
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const activeIndex = paths.findIndex((p) => isActive(p.path));
    const activeLink = linksRef.current[activeIndex];
    if (activeLink) {
      const linkRect = activeLink.getBoundingClientRect();
      const navRect = activeLink.parentElement?.getBoundingClientRect();
      if (navRect) {
        setActiveLinkDimension({
          width: linkRect.width,
          left: linkRect.left - navRect.left,
        });
      }
    }
  }, [location.pathname]);

  return (
    <header>
      <div className="max-w-4xl mx-auto px-4 py-4">
        <nav className="flex items-center">
          <div className="flex-1" />
          <div className="relative flex space-x-6 flex-initial">
            <div
              className="absolute z-0 bg-gray-200 dark:bg-gray-700 rounded-lg transition-all duration-300 ease-in-out"
              style={{
                width: `${activeLinkDimension.width}px`,
                height: "40px",
                transform: `translateX(${activeLinkDimension.left}px)`,
              }}
            />
            {paths.map((link, index) => (
              <Link
                ref={(el) => (linksRef.current[index] = el)}
                key={link.path}
                to={link.path}
                className="z-10 transition-colors duration-200 px-4 py-2 text-gray-900 dark:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex-1" />
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:cursor-pointer transition-colors duration-200 ml-auto"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
