import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, 
      once: false, 
    });
  }, []);

  return (
    <footer className='mt-20 border-t py-10 border-neutral-700'>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
        <div 
          data-aos="fade-up"
          className='space-y-4'
        >
          <h3 className='text-md font-semibold mb-4'>
            Resources
          </h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a 
                  className="text-neutral-300 hover:text-white transition-colors duration-300"
                  href={link.href}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div 
          data-aos="fade-up"
          data-aos-delay="200"
          className='space-y-4'
        >
          <h3 className='text-md font-semibold mb-4'>
            Platform
          </h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a 
                  className="text-neutral-300 hover:text-white transition-colors duration-300"
                  href={link.href}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div 
          data-aos="fade-up"
          data-aos-delay="400"
          className='space-y-4'
        >
          <h3 className='text-md font-semibold mb-4'>
            Community
          </h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a 
                  className="text-neutral-300 hover:text-white transition-colors duration-300"
                  href={link.href}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
