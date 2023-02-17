import { useRef } from "react";
import { search } from "../../api/api";
import { useMutation } from "@tanstack/react-query";

export const Search = () => {
  const searchRef = useRef();

  const mutation = useMutation({
    mutationFn: search,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    mutation.mutate(searchRef.current.value, {
      onSuccess: (data) => {
        // navigate("/");
      },
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="relative border-2 border-gray-100 m-4 rounded-lg">
        <div className="absolute top-4 left-3">
          <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
        </div>
        <input
          type="text"
          name="search"
          className="h-14 w-full pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
          placeholder="Search Ads..."
          ref={searchRef}
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
