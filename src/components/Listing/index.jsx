import { Link } from "react-router-dom";

export const Listing = ({ listing }) => {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded p-6">
      <Link to="/listing-detail" state={{ listing: listing }}>
        <div className="flex">
          <img
            className="hidden w-48 mr-6 md:block"
            src={listing.logo}
            alt=""
          />
          <div>
            <h3 className="text-2xl">
              <p>{listing.title}</p>
            </h3>
            <ul className="flex">
              <li className="flex items-center justify-center bg-black text-white rounded-xl py-1 px-3 mr-2 text-xs">
                <p href="#">{listing.category}</p>
              </li>
            </ul>
            <div className="text-lg mt-4">
              <i className="fa-solid fa-location-dot"></i> Created on:
              {new Date(listing.created_at).toISOString().slice(0, 10)}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
