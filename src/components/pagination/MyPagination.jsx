import React from "react";
import Pagination from "react-bootstrap/Pagination";
import { getPagesArray } from "../../utils/pages";
const MyPagination = ({ totalPages, page, changePage }) => {
  let pagesArray = getPagesArray(totalPages);
  return (
    <Pagination className="col justify-content-center">
      <Pagination.First onClick={() => changePage(page - 2)} />
      <Pagination.Prev onClick={() => changePage(page - 1)} />
      {pagesArray.map((p) => (
        <Pagination.Item
          onClick={() => {
            changePage(p);
          }}
          active={page === p}
          key={p}
        >
          {p}
        </Pagination.Item>
      ))}

      <Pagination.Next onClick={() => changePage(page + 1)} />
      <Pagination.Last onClick={() => changePage(page + 2)} />
    </Pagination>
  );
};

export default MyPagination;
