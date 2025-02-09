// import { RxExternalLink } from "react-icons/rx";

type Information = {
  name: string;
  href: string;
  title: string;
  logo: string;
  start: string;
  end: string;
  description: string[];
};

type Props = {
  information: Information;
};

const TabInformation = ({ information }: Props) => {
  const { name, href, title, logo, start, end, description } = information;

  return (
    <ul className="ml-4 border-l border-gray-200 dark:border-gray-700">
      <li className="relative ml-10 py-4">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white"
        >
          <img src={logo} alt="NUS logo" className="size-12 border rounded-full" />
        </a>
        <div className="flex flex-1 flex-col justify-start gap-1">
          {start && (
            <time className="text-xs text-gray-500 dark:text-gray-400">
              {start} - {end ? end : "Present"}
            </time>
          )}
          <h2 className="font-semibold leading-none">{name}</h2>
          {title && <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>}
          {description && (
            <ul className="ml-4 list-outside list-disc leading-none">
              {description.map((desc, i) => (
                <li key={i} className="text-sm">
                  {desc}
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* <div className="mt-2 flex flex-wrap items-start gap-2">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 items-center bg-gray-900 dark:bg-white rounded-md px-2 text-white dark:text-gray-900 text-sm"
          >
            <RxExternalLink />
            Link test
          </a>
        </div> */}
      </li>
    </ul>
  );
};

export default TabInformation;
