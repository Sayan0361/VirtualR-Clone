import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, 
      once: false,
    });
  }, []);

  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 
        className="text-4xl sm:text-6xl lg:text-6xl text-center tracking-wide" 
        data-aos="fade-up"
      >
        <span className="bg-gradient-to-l from-gray-500 via-gray-100 to-white text-transparent bg-clip-text">
          <b>VirtualR build tools</b>
        </span>
        <span className="bg-gradient-to-r from-blue-700 via-white-800 to-purple-700 text-transparent bg-clip-text">
          <b><i>{" "}for Developers</i></b>
        </span>
      </h1>
      <p 
        className="mt-5 py-3 text-lg text-center text-neutral-500 max-w-4xl" 
        data-aos="fade-up" 
        data-aos-delay="200"
      >
        Empower your creativity and bring your VR app ideas to life with our initiative development tools. Get started today and turn your imagination into impressive reality.
      </p>
      <div className="flex justify-center my-10" data-aos="fade-up" data-aos-delay="400">
        <a 
          href='#' 
          className='px-6 py-3 mx-3 rounded-md bg-gradient-to-r from-blue-900 via-blue-800 to-purple-800 text-white shadow-lg hover:shadow-2xl hover:scale-110 transition-transform transform duration-300'
        >
          Start for free
        </a>
        <a 
          href="#" 
          className='px-6 py-3 mx-3 rounded-md border border-gray-300 text-white bg-gray-800 shadow-lg hover:bg-gray-900 hover:border-white hover:shadow-2xl hover:scale-110 transition-transform transform duration-300'
        >
          Documentation
        </a>
      </div>
      <div className="flex mt-8 justify-center">
        <video 
          autoPlay 
          loop 
          muted 
          className='rounded-lg w-1/2 border border-blue-600 shadow-lg shadow-blue-900 mx-2 my-4 transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl hover:border-blue-400'
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <source src={video1} type="video/mp4" />
        </video>
        <video 
          autoPlay 
          loop 
          muted 
          className='rounded-lg w-1/2 border border-blue-600 shadow-lg shadow-blue-900 mx-4 my-4 transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl hover:border-blue-400'
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <source src={video2} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
