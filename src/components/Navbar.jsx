// import React, { useEffect, useState } from "react";

// const Navbar = () => {
//   const [sticky, setSticky] = useState(false);
//   const [open, setOpen] = useState(false);
//   const menuLinks = [
//     { name: "HOME", link: "#home" },
//     { name: "ABOUT", link: "#about" },
//     { name: "SKILLS", link: "#skills" },
//     { name: "PROJECTS", link: "#projects" },
//     { name: "CONTACT", link: "#contact" },
//   ];
//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       const nav = document.querySelector("nav");
//       window.scrollY > 0 ? setSticky(true) : setSticky(false);
//     });
//   }, []);
//   return (
//     <nav
//       className={`fixed w-full left-0 top-0 z-[999] ${
//         sticky ? "bg-white/60  text-gray-900" : "text-white"
//       }`}
//     >
//       <div className="flex items-center justify-between">
//         <div className="mx-7">
//           <h4 className="text-4xl uppercase font-bold">
//             A<span className="text-cyan-600">le</span>x
//           </h4>
//         </div>
//         <div
//           className={` ${
//             sticky ? "md:bg-white/0 bg-white" : "bg-white"
//           } text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`}
//         >
//           <ul className="flex items-center gap-1 py-2 text-lg">
//             {menuLinks?.map((menu, i) => (
//               <li key={i} className="px-6 hover:text-cyan-600">
//                 <a href={menu?.link}>{menu?.name}</a>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div
//           onClick={() => setOpen(!open)}
//           className={`z-[999]  ${
//             open ? "text-gray-900" : "text-gray-100"
//           } text-3xl md:hidden m-5`}
//         >
//           <ion-icon name="menu"></ion-icon>
//         </div>
//         <div
//           className={`md:hidden text-gray-900 absolute w-2/3 h-screen
//       px-7 py-2 font-medium bg-white top-0 duration-300 ${
//         open ? "right-0" : "right-[-100%]"
//       }`}
//         >
//           <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
//             {menuLinks?.map((menu, i) => (
//               <li
//                 onClick={() => setOpen(false)}
//                 key={i}
//                 className="px-6 hover:text-cyan-600"
//               >
//                 <a href={menu?.link}>{menu?.name}</a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import { useState } from "react";
import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <div className="w-full flex justify-center">
      <div
        className="sm:cursor-pointer fixed top-10 left-10 z-[999] rounded-lg  p-2"
        onClick={() => setShowMenu(!showMenu)}
      >
        <HiMenuAlt2 size={34} />
      </div>
      <nav
        className={`fixed  z-[999] flex items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-full text-dark_primary duration-300 ${
          showMenu ? "bottom-10" : "bottom-[-100%]"
        }`}
      >
        {nav.map((item, i) => (
          <a
            href={item.link}
            onClick={() => setActive(i)}
            className={`text-xl p-2.5 rounded-full sm:cursor-pointer 
     ${i === active && "bg-gray-900 text-white"} `}
          >
            {createElement(item.icon)}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
