// import React from "react";
// import hireMe from "../assets/images/hireMe.png";
// const Hireme = () => {
//   return (
//     <section id="hireme" className="py-10 px-3 text-white">
//       <div className="text-center">
//         <h3 className="text-4xl font-semibold">
//           Hire <span className="text-cyan-600">Me</span>
//         </h3>
//         <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
//       </div>
//       <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
//         <div>
//           <h2 className="text-2xl font-semibold">
//           Are you looking for a skilled and experienced full stack developer? 
//           </h2>
//           <p className="lg:text-left text-justify  text-sm mt-4 text-gray-200 leading-6">
//           Look no further! With 3 years of experience and a portfolio of 6+ successful projects, I'm ready to take on new challenges and contribute to your next venture.
//           </p>
//           <button className="btn-primary mt-10">Say Hello</button>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Hireme;



import React from "react";

const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem]  mt-24 flex flex-col-reverse lg:flex-row items-center lg:gap-6">
        <div>
          <h2 className="text-2xl font-semibold text-center lg:text-left">
            Are you looking for a skilled and experienced full stack developer?
          </h2>
          <p className="text-sm mt-4 text-gray-200 leading-6 text-justify lg:text-left">
            Look no further! With 3 years of experience and a portfolio of 6+ successful projects, I'm ready to take on new challenges and contribute to your next venture.
          </p>
          <h2 className="text-2xl mt-4 font-semibold text-center lg:text-left">
            What I Offer
          </h2>
          <p className="text-sm mt-4 text-gray-200 leading-6 text-justify lg:text-left">
            <span className="font-bold">Full stack development expertise : </span> I have a solid foundation in both frontend and backend technologies, allowing me to create robust and scalable applications.
            <br /> <span className="font-bold">Versatility : </span> I adapt quickly to different project requirements and technologies, ensuring efficient and effective solutions.
            <br /> <span className="font-bold">Problem-solving skills : </span>  I enjoy tackling complex problems and finding innovative solutions to deliver high-quality results.
            <br /> <span className="font-bold">Collaborative mindset : </span> I thrive in team environments, actively contributing to brainstorming, code reviews, and knowledge sharing.
            <br /> <span className="font-bold">Timely delivery : </span> I understand the importance of deadlines and will work diligently to meet project milestones on time.
          </p>
          <button className="btn-primary mt-8 mx-auto lg:mx-0">Say Hello</button>
        </div>
      </div>
    </section>
  );
};

export default Hireme;

