import React, { useEffect } from "react";
// import { getListings } from "../../api/listings.api";
// import { useQuery } from "@tanstack/react-query";

export const Listing = ({ listing }) => {
  // const { data, status } = useQuery({
  //   queryKey: ["listings"],
  //   queryFn: getListings,
  // });

  return (
    <div className="bg-gray-50 border border-gray-200 rounded p-6">
      <div className="flex">
        <img
          className="hidden w-48 mr-6 md:block"
          src="images/acme.png"
          alt=""
        />
        <div>
          <h3 className="text-2xl">
            <a href="show.html">{listing.title}</a>
          </h3>
          <ul className="flex">
            <li className="flex items-center justify-center bg-black text-white rounded-xl py-1 px-3 mr-2 text-xs">
              <a href="#">{listing.category}</a>
            </li>
          </ul>
          <div className="text-lg mt-4">
            <i className="fa-solid fa-location-dot"></i> Created on:
            {new Date(listing.created_at).toISOString().slice(0, 10)}
          </div>
        </div>
      </div>
    </div>
  );
};
