import React from "react";
import aboutImg from "../assets/images/about.png";
const About = () => {
  const info = [
    { text: "Years experience", count: "03" },
    { text: "Completed Projects", count: "6" },
    { text: "Companies Work", count: "3" },
  ];
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                A passionate and experienced full stack developer with over three years of hands-on experience. Throughout my career, I've had the opportunity to work with a diverse range of technologies and contribute to the successful completion of six projects across three different companies.<br />

                As a full stack developer, I thrive on the challenge of bridging the gap between front-end and back-end development. I have a strong command of front-end technologies such as HTML, CSS, React.js and JavaScript, allowing me to create engaging and intuitive user interfaces. On the back end, I'm skilled in utilizing frameworks like Node.js and Python along with databases like MySQL and MongoDB, to develop robust and scalable applications.

                I take pride in my problem-solving approach, tackling complex issues head-on and finding innovative solutions. With a keen eye for detail and a commitment to efficiency, I strive to deliver high-quality results that meet both user expectations and business requirements.
              </p>
              <div className="flex mt-10 items-center justify-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
                <a href="./src/assets/resume.pdf" download>
                <button className="btn-primary">Download CV</button>
              </a>
              </div>
              
            </div>
          </div>
          {/* <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
