import { useState, useRef, useEffect } from "react";
import TabInformation from "./TabInformation";
import educationData from "@/data/education.json";
import experienceData from "@/data/experience.json";

interface TabDimension {
  width: number;
  left: number;
}

const Tab = () => {
  const education = educationData.education;
  const experience = experienceData.experience;

  const [activeTab, setActiveTab] = useState("Experience");
  const [activeTabDimension, setActiveTabDimension] = useState<TabDimension>({ width: 0, left: 0 });
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const tabs = ["Experience", "Education"];

  useEffect(() => {
    const activeIndex = tabs.findIndex((tab) => tab === activeTab);
    const activeButton = tabsRef.current[activeIndex];
    if (activeButton) {
      const buttonRect = activeButton.getBoundingClientRect();
      const containerRect = activeButton.parentElement?.getBoundingClientRect();
      if (containerRect) {
        setActiveTabDimension({
          width: buttonRect.width,
          left: buttonRect.left - containerRect.left,
        });
      }
    }
  }, [activeTab]);

  return (
    <section className="max-w-2xl w-full mx-auto mb-16">
      <div className="relative flex space-x-1 rounded-lg bg-gray-200 dark:bg-gray-700 p-1">
        <div
          className="absolute z-0 bg-white dark:bg-gray-900 rounded-md transition-all duration-300 ease-in-out"
          style={{
            width: `${activeTabDimension.width}px`,
            height: "calc(100% - 8px)",
            transform: `translateX(${activeTabDimension.left - 4}px)`,
          }}
        />
        {tabs.map((tab, index) => (
          <button
            key={tab}
            ref={(el) => (tabsRef.current[index] = el)}
            onClick={() => setActiveTab(tab)}
            className={`relative z-0 flex-1 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:cursor-pointer
              ${activeTab === tab ? "" : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"}`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-2 space-y-6 pl-8 border-1 border-gray-200 dark:border-gray-700 rounded-xl shadow-md mb-2">
        {activeTab === "Experience"
          ? experience.map((exp, i) => <TabInformation key={i} information={exp} />)
          : education.map((edu, i) => <TabInformation key={i} information={edu} />)}
      </div>
    </section>
  );
};

export default Tab;
