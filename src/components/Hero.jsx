import React from "react";
import { FaLinkedin, FaGithub, FaHackerrank } from 'react-icons/fa';
import { SiHackerearth } from 'react-icons/si';


const Hero = () => {
  const social_media = [
    { name: "logo-linkedin", link: "https://www.linkedin.com/in/example", icon: FaLinkedin },
    { name: "logo-github", link: "https://github.com/example", icon: FaGithub },
    { name: "logo-hackerrank", link: "https://github.com/example", icon: FaHackerrank },
    { name: "logo-hackerearth", link: "https://github.com/example", icon: SiHackerearth },
  ];

  return (
    <section id="home" className="min-h-screen flex py-10 md:flex-row flex-col items-center justify-center">
      {/* <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="md:w-11/12 h-full object-cover" />
      </div> */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center flex flex-col items-center justify-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Ritesh Singh</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Fullstack Developer
          </h4>
          <button className="btn-primary mt-8">Contact Me</button>
          <div className="mt-8 text-3xl flex items-center justify-center md:justify-start gap-5">
            {social_media?.map((icon) => (
              <a
                key={icon.name}
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-white cursor-pointer"
              >
                <icon.icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
