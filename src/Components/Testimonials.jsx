import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { testimonials } from "../constants";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, 
      once: false, 
    });
  }, []);

  return (
    <div className='mt-20 tracking-wide'>
      <h2 
        className='text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20' 
        data-aos="fade-up"
      >
        What people are saying
      </h2>
      <div className='flex flex-wrap justify-center'>
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2' 
            data-aos="fade-up" 
            data-aos-delay={`${index * 200}`}
          >
            <div 
              className='bg-black-500 rounded-md p-6 text-md border border-neutral-800 font-thin transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-blue-600'
            >
              <p className='text-neutral-400'>
                {testimonial.text}
              </p>
              <div className='flex mt-8 items-start'>
                <img 
                  src={testimonial.image} 
                  alt={testimonial.user} 
                  className='w-12 h-12 mr-6 rounded-full border border-neutral-300 transform transition-transform duration-300 hover:scale-110 hover:border-blue-600'
                />
                <div>
                  <h6 className='font-semibold text-lg transition-colors duration-300 hover:text-blue-500'>
                    {testimonial.user}
                  </h6>
                  <span className='text-sm font-normal italic text-neutral-600'>
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
