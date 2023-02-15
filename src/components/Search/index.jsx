export const Search = () => {
  return (
    <form action="">
      <div className="relative border-2 border-gray-100 m-4 rounded-lg">
        <div className="absolute top-4 left-3">
          <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
        </div>
        <input
          type="text"
          name="search"
          className="h-14 w-full pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
          placeholder="Search Ads..."
        />
        <div className="absolute top-2 right-2">
          <button
            type="submit"
            className="h-10 w-20 text-white hover:text-black rounded-lg bg-primary hover:bg-secondary"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

// <div className="relative">
//   <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//     <svg
//       aria-hidden="true"
//       className="w-5 h-5 text-gray-500 dark:text-gray-400"
//       fill="none"
//       stroke="currentColor"
//       viewBox="0 0 24 24"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         stroke-linecap="round"
//         stroke-linejoin="round"
//         stroke-width="2"
//         d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//       ></path>
//     </svg>
//   </div>
//   <input
//     type="search"
//     id="default-search"
//     className="block p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//     placeholder="Search Mockups, Logos..."
//     required
//   />
//   <button
//     type="submit"
//     className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//   >
//     Search
//   </button>
// </div>;
