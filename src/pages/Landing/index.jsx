import { useState } from "react";
import { Listing, Hero } from "../../components";

const mobile = () => {};

const desktop = () => {
  return (
    <div className="border-solid border-2 border-orange-500 h-full flex mx-5">
      <div className="w-1/5 border-solid border-2 border-black">Numero Uno</div>
      <div className="w-3/5">Anoglia</div>
      <div className="w-1/5  border-solid border-2 border-black">Deux</div>
    </div>
  );
};

export const Landing = () => {
  // search component

  const [isOpen, setOpen] = useState(false);
  const [current, setCurrent] = useState("Most Recent");

  const handleDropDown = () => {
    setOpen(!isOpen);
  };

  const handleSelect = (current) => {
    setCurrent(current);
    setOpen(!isOpen);
  };

  return (
    <div>
      <Hero />
      <div className="">
        <Listing />
        <Listing />
        <Listing />
        <Listing />
        <Listing />
      </div>
    </div>
  );
};

// <div className="border-solid border-2 border-blue-500 h-full flex mt-2 mx-3 md:mx-20 bg-[#FFF0F5]">
// <div className="hidden md:w-1/5 border-solid border-2 border-black">
//   Numero Uno
// </div>
// <div className="flex flex-col w-full">
//   <div className="self-end py-3 px-1">
//     <div className="dropdown">
//       <button
//         className="text-black bg-sky-700 rounded focus:outline-none rounded-lg text-md px-1 py-3 text-center flex justify-around w-48 items-center"
//         onClick={handleDropDown}
//       >
//         <span className="">Sort By:</span>
//         <span>{current}</span>
//         <svg
//           className="ml-2 w-4 h-4 item-center"
//           aria-hidden="true"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M19 9l-7 7-7-7"
//           ></path>
//         </svg>
//       </button>

//       <div
//         id="dropdown"
//         className={`z-10 w-48 bg-white rounded divide-y divide-gray-100 shadow ${
//           isOpen ? "block" : "hidden"
//         }`}
//       >
//         <ul className="z-10 w-48 bg-white rounded divide-y divide-gray-100 shadow ">
//           <li onClick={() => handleSelect("Most Recent")}>
//             <a href="#" className="block py-2 px-4 hover:bg-gray-100">
//               Most recent
//             </a>
//           </li>
//           <li onClick={() => handleSelect("Low Prices")}>
//             <a href="#" className="block py-2 px-4 hover:bg-gray-100">
//               Low Prices
//             </a>
//           </li>
//           <li onClick={() => handleSelect("High Prices")}>
//             <a href="#" className="block py-2 px-4 hover:bg-gray-100">
//               High Prices
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </div>
