import React, { useState } from "react";
import api from "../api";
import SearchStatus from "./searchStatus";
import User from "./user";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) =>
    setUsers(users.filter((user) => user._id !== userId));

  const [currentPage, setCurrentPage] = useState(1);
  const count = users.length;

  const pageSize = 4;
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  const userCrop = paginate(users, currentPage, pageSize);
  return (
    <>
      <SearchStatus length={users.length} />
      {count > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {userCrop.map((user) => (
              <User onDelete={handleDelete} id={user._id} {...user} />
            ))}
          </tbody>
        </table>
      )}

      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </>
  );
};

export default Users;
