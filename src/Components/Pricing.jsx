import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, 
      once: false, 
    });
  }, []);

  return (
    <div className='mt-20'>
      <h2 
        className='text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide' 
        data-aos="fade-up"
      >
        Pricing
      </h2>
      <div className='flex flex-wrap'>
        {pricingOptions.map((option, index) => (
          <div 
            key={index} 
            className='w-full sm:w-1/2 lg:w-1/3 p-2' 
            data-aos="fade-up" 
            data-aos-delay={`${index * 200}`}
          >
            <div 
              className='p-10 border border-neutral-700 rounded-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-800'
            >
              <p className='text-4xl mb-8'>
                {option.title}
                {option.title === "Pro" && (
                  <span className='bg-gradient-to-r from-blue-700 via-white-900 to-purple-600 text-transparent bg-clip-text text-xl mb-4 ml-2'>
                    {" "}(Most Popular)
                  </span>
                )}
              </p>
              <p className='mb-8'>
                <span className='text-5xl mt-6 mr-2'>
                  {option.price}
                </span>
                <span className='text-neutral-400 tracking-tight'>
                  /Month
                </span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li 
                    key={index} 
                    className='mt-8 flex items-center transition-transform duration-300 transform hover:scale-105'
                  >
                    <CheckCircle2 className='text-green-500' />
                    <span className="ml-2">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <a 
                href="#" 
                className='inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl bg-gradient-to-r from-blue-900 via-blue-800 to-purple-800 text-white rounded-lg border border-blue-900 transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:scale-105'
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
