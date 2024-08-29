import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CheckCircle2 } from 'lucide-react';
import codeImg from '../assets/code.jpg';
import { checklistItems } from '../constants';

const Workflow = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, 
      once: false, 
    });
  }, []);

  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide mb-4" data-aos="fade-up">
        Accelerate your
        <span className="bg-gradient-to-l from-blue-700 via-white-800 to-purple-600 text-transparent bg-clip-text">
          {" "}coding workflow.
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2" data-aos="fade-right">
          <img 
            src={codeImg} 
            alt="Code" 
            className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          />
        </div>
        <div className="px-3 pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div 
              key={index} 
              className="flex mb-12 transform transition-transform duration-300 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`} // Staggered animation for each item
            >
              <div className="flex justify-center items-center text-green-400 bg-black h-12 w-12 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
                <CheckCircle2 size={24} />
              </div>
              <div className="ml-6">
                <h5 className="mt-1 mb-2 text-xl transition-colors duration-300 hover:text-blue-400">
                  {item.title}
                </h5>
                <p className="text-md text-neutral-500">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
