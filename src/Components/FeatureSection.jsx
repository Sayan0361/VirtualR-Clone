import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { features } from '../constants';

const FeatureSection = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 500, 
      once: false, 
    });
    
  }, []);
  
  return (
    <div className='relative mt-20 border-b border-neutral-800 min-h-[800px]'>
      <div className="text-center" data-aos="fade-up">
        <span className='bg-black-100 text-blue-500 rounded-full h-6 text-xl font-medium px-2 py-1 uppercase'>
          Features
        </span>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-7 lg:mt-20 tracking-wide'>
          <b>Easily build</b>
          <span className='bg-gradient-to-l from-blue-700 via-white-800 to-purple-600 text-transparent bg-clip-text'> {" "} your code</span>
        </h2>
      </div>
      <div className='flex flex-wrap mt-10 lg:mt-20'>
        {features.map((feature, index) => (
          <div 
            key={index} 
            className='w-full sm:w-1/2 lg:w-1/3 p-4 transform transition-transform duration-300 hover:scale-105'
            data-aos="fade-up" data-aos-delay={`${index * 100}`} // Delay for each feature
          >
            <div className='flex'>
              <div className='flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-blue-700 justify-center items-center rounded-full shadow-md hover:shadow-lg transition-shadow duration-300'>
                {feature.icon}
              </div>
              <div>
                <h5 className='mt-1 mb-6 text-xl transition-colors duration-300 hover:text-blue-400'>
                  {feature.text}
                </h5>
                <p className='text-md p-2 mb-20 text-neutral-500'>
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureSection;
