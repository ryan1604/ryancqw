import { RxLinkedinLogo } from "react-icons/rx";
import { RxEnvelopeClosed } from "react-icons/rx";

const Contact = () => {
  return (
    <div className="p-8 text-gray-900 dark:text-white text-center">
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">Get in Touch</p>
      <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
      <div className="inline-flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-12 justify-center items-start border-2 rounded-3xl p-6 border-gray-300 bg-gray-50 dark:bg-gray-700 dark:border-gray-500">
        <div className="flex items-center space-x-3">
          <RxEnvelopeClosed className="w-6 h-6 text-gray-900 dark:text-white" />
          <p className="text-lg">ryanchua1604@gmail.com</p>
        </div>
        <div className="flex items-center space-x-3">
          <RxLinkedinLogo className="w-6 h-6 text-gray-900 dark:text-white" />
          <a href="https://www.linkedin.com/in/ryancqw/" target="_blank" className="text-lg">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
