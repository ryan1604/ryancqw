import About from "@/components/home/About";
import Tab from "@/components/home/Tab";
import Preview from "@/components/home/Preview";

const Home = () => {
  return (
    <div className="p-4 text-gray-900 dark:text-white">
      <About />
      <Tab />
      <Preview />
    </div>
  );
};

export default Home;
