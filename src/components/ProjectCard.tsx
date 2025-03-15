import { RxGithubLogo } from "react-icons/rx";
import { RxVideo } from "react-icons/rx";
import { RxLaptop } from "react-icons/rx";

type Project = {
  name: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    name: string;
    href: string;
  }[];
};

type Props = {
  project: Project;
};

type logoName = "GitHub" | "Website" | "Demo";

const ProjectCard = ({ project }: Props) => {
  const { name, description, image, tags, links } = project;

  const logoMap: Record<logoName, JSX.Element> = {
    GitHub: <RxGithubLogo />,
    Website: <RxLaptop />,
    Demo: <RxVideo />,
  };

  return (
    <div className="flex flex-col justify-between flex-1 rounded-lg shadow-md p-4 pt-6 overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out border border-gray-200 dark:border-gray-700 tracking-tight leading-none">
      <div>
        <img
          src={image}
          alt={name}
          className={`mx-auto w-4/5 h-48 object-cover object-top rounded-md shadow-lg ${
            image.includes("placeholder") ? "brightness-50" : ""
          }`}
        />
        <h2 className="text-xl font-semibold mt-4">{name}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{description}</p>
      </div>
      <div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap mt-6">
            {tags.sort().map((tag) => (
              <p key={tag} className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md mr-2 mb-2">
                {tag}
              </p>
            ))}
          </div>
        )}
        {links && links.length > 0 && (
          <div className="flex space-x-4 mt-2">
            {links.map(({ name, href }) => (
              <div key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-2 text-xs text-white dark:text-gray-900 px-2 py-1 rounded-md bg-gray-900 dark:bg-white hover:bg-gray-700 dark:hover:bg-gray-300"
                >
                  {logoMap[name as logoName]}
                  {name}
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
