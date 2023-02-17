import { useState, useEffect } from "react";
import { Listing, Hero, Search } from "../../components";
import { useQuery } from "@tanstack/react-query";
import { getListings } from "../../api/api";
import ReactPaginate from "react-paginate";

export const Landing = () => {
  const [pageNo, setPageNo] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const { data, status } = useQuery({
    queryKey: [`listings_${pageNo}`],
    queryFn: () => getListings(pageNo + 1),
  });

  const isSuccess = status === "success";

  console.log({ pageCount, data, status });
  const handlePageClick = (event) => {
    console.log("BViodun", event);
    setPageNo(event.selected);
  };

  useEffect(() => {
    if (data?.total) {
      setPageCount(Math.ceil(data?.total / data?.per_page));
    }
  }, [data]);

  return (
    <div>
      <Hero />
      <Search />
      <div className="mx-4">
        {status === "success" && (
          <div>
            <ReactPaginate
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={2}
              pageCount={pageCount}
              previousLabel="< previous"
              renderOnZeroPageCount={null}
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
            />
            <div className="grid md:grid-cols-2 gap-4">
              {data.data.map((listing, key) => (
                <Listing key={key} listing={listing} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
