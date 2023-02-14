import React from "react";

export const Footer = () => {
  return (
    <div>
      <div className="flex p-2 justify-around bg-primary items-center">
        <div className="">
          <Gumtree />
        </div>
        <div className="w-5/12">
          <Search />
        </div>
        <div className="relative flex border-solid border-2 border-red w-5/12 lg:w-2/12 justify-between items-center text-white">
          <div className="flex text-xs">
            <div>Sign In</div>
            <div className="pl-2">Log In</div>
          </div>
          <div className="absolute right-8 ">
            <Add />
          </div>
          <div>Post</div>
        </div>
      </div>
      <div className="bg-black text-white">Categories</div>
      <div className="bg-black text-white py-1 w-2/12 bg-secondary text-center ml-5 my-2 rounded-lg text-sm font-medium md:hidden">
        Filters
      </div>
    </div>
  );
};
