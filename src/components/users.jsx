import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users);

  const handleDeleteElement = (id) => {
    setUsers(api.users.fetchAll().filter((el) => el._id !== id));
    console.log(id);
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Имя</th>
          <th scope="col">Качевства</th>
          <th scope="col">Профессия</th>
          <th scope="col">Встретился, раз</th>
          <th scope="col">Оценка</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {api.users.fetchAll().map((element) => {
          return (
            <tr key={element._id}>
              <td>{element.name}</td>
              <td>
                {element.qualities.map((item) => (
                  <span key={item._id} className={"badge m-1 bg-" + item.color}>
                    {item.name}
                  </span>
                ))}
              </td>
              <td>{element.profession.name}</td>
              <td>{element.completedMeetings}</td>
              <td>{element.rate}</td>
              <td>
                <button
                  onClick={() => {
                    handleDeleteElement(element._id);
                  }}
                  className="badge bg-danger"
                >
                  DELETE
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Users;
