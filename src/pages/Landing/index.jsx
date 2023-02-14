import { useState } from "react";
import { Listing } from "../../components";

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
    <div className="border-solid border-2 border-blue-500 h-full flex mt-2 mx-3 md:mx-20 bg-[#FFF0F5]">
      <div className="hidden md:w-1/5 border-solid border-2 border-black">
        Numero Uno
      </div>
      <div className="flex flex-col w-full">
        <div className="self-end py-3 px-1">
          <div className="dropdown">
            <button
              className="text-black bg-sky-700 rounded focus:outline-none rounded-lg text-md px-1 py-3 text-center flex justify-around w-48 items-center"
              onClick={handleDropDown}
            >
              <span className="">Sort By:</span>
              <span>{current}</span>
              <svg
                className="ml-2 w-4 h-4 item-center"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            <div
              id="dropdown"
              className={`z-10 w-48 bg-white rounded divide-y divide-gray-100 shadow ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <ul className="z-10 w-48 bg-white rounded divide-y divide-gray-100 shadow ">
                <li onClick={() => handleSelect("Most Recent")}>
                  <a href="#" className="block py-2 px-4 hover:bg-gray-100">
                    Most recent
                  </a>
                </li>
                <li onClick={() => handleSelect("Low Prices")}>
                  <a href="#" className="block py-2 px-4 hover:bg-gray-100">
                    Low Prices
                  </a>
                </li>
                <li onClick={() => handleSelect("High Prices")}>
                  <a href="#" className="block py-2 px-4 hover:bg-gray-100">
                    High Prices
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="">
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
        </div>
      </div>
    </div>
  );
};

// <div className="border-2 border-sky-500 self-end py-3 px-1">
//   <div className="relative border-3 border-solid">
//     <span>Sort By:</span>
//     <div className="relative w-full lg:max-w-sm">
//       <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
//         <option>Most Recent</option>
//         <option>Low Prices</option>
//         <option>High Prices</option>
//       </select>
//     </div>
//   </div>
// </div>;

// <div className="relative w-full lg:max-w-sm">
//   <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
//     <option>Most Recent</option>
//     <option>Low Prices</option>
//     <option>High Prices</option>
//   </select>
// </div>;

// <span>Sort By:</span>

// <div className="relative w-full lg:max-w-sm">
//   <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
//     <option>Most Recent</option>
//     <option>Low Prices</option>
//     <option>High Prices</option>
//   </select>
// </div>;

// <div className="inline-flex bg-white border rounded-md">
//   <a
//     href="#"
//     className="px-4 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-l-md"
//   >
//     Sort By:
//   </a>

//   <div className="relative">
//     <button
//       type="button"
//       className="inline-flex items-center justify-center h-full px-2 text-gray-600 border-l border-gray-100 hover:text-gray-700 rounded-r-md hover:bg-gray-50"
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="w-4 h-4"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth={2}
//       >
//         <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//       </svg>
//     </button>

//     <div className="absolute right-0 z-10 w-56 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg">
//       <div className="p-2">
//         <a
//           href="#"
//           className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
//         >
//           ReactJS Dropdown 1
//         </a>
//         <a
//           href="#"
//           className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
//         >
//           ReactJS Dropdown 2
//         </a>
//         <a
//           href="#"
//           className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
//         >
//           ReactJS Dropdown 3
//         </a>
//       </div>
//     </div>
//   </div>
// </div>;
