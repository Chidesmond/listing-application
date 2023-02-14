import React from "react";

export const Listing = () => {
  return (
    <div className="border-solid border-2 border-orange-500 h-6 flex">
      <div className="w-4/12 border-solid border-2 border-sky-500">Image</div>
      <div className="w-6/12 border-solid border-2 border-zinc-50">
        <div>Title</div>
        <div>Price</div>
        <div>Description</div>
      </div>
    </div>
  );
};
