import React from "react";
import _ from "lodash";

const Pagination = (pageSize, itemsCount, onPageChange, currentPage) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  console.log({ currentPage, pageCount });
  const pages = _.range(1, pageCount + 1);
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            className={"page-item" + (page === currentPage ? "active" : "")}
            key={page}
          >
            <a
              href="/"
              onClick={() => onPageChange(page)}
              className="page-link"
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
