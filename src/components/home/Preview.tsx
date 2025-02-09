import { Link } from "react-router-dom";
import { RxChevronRight } from "react-icons/rx";
import Projects from "@/components/Projects";

const Preview = () => {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl ">Featured Projects</h2>
        <Link to={"/projects"} className="flex items-center text-gray-600 dark:text-gray-400">
          view more <RxChevronRight />
        </Link>
      </div>
      <Projects featured={true} />
    </section>
  );
};

export default Preview;
