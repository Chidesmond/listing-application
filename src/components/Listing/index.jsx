import React, { useEffect } from "react";
import { getListings } from "../../api/listings.api";
import { useQuery } from "@tanstack/react-query";

export const Listing = ({ listing }) => {
  // const { data, status } = useQuery({
  //   queryKey: ["listings"],
  //   queryFn: getListings,
  // });

  useEffect(() => {
    console.log("TO BE LOVED!!", listing);
  }, [listing]);

  return (
    <div className="lg:grid lg:grid-cols-2 gap-4 space-y-4 md:space-y-0 mx-4">
      <div className="bg-gray-50 border border-gray-200 rounded p-6">
        <div className="flex">
          <img
            className="hidden w-48 mr-6 md:block"
            src="images/acme.png"
            alt=""
          />
          <div>
            <h3 className="text-2xl">
              <a href="show.html">{listing.name}</a>
            </h3>
            <div className="text-xl font-bold mb-4">Acme Corp</div>
            <ul className="flex">
              <li className="flex items-center justify-center bg-black text-white rounded-xl py-1 px-3 mr-2 text-xs">
                <a href="#">Laravel</a>
              </li>
              <li className="flex items-center justify-center bg-black text-white rounded-xl py-1 px-3 mr-2 text-xs">
                <a href="#">API</a>
              </li>
              <li className="flex items-center justify-center bg-black text-white rounded-xl py-1 px-3 mr-2 text-xs">
                <a href="#">Backend</a>
              </li>
              <li className="flex items-center justify-center bg-black text-white rounded-xl py-1 px-3 mr-2 text-xs">
                <a href="#">Vue</a>
              </li>
            </ul>
            <div className="text-lg mt-4">
              <i className="fa-solid fa-location-dot"></i> Boston, MA
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
