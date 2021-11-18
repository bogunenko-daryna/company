import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";

const User = ({
  _id,
  name,
  profession,
  completedMeetings,
  rate,
  qualities,
  onDelete,
}) => {
  return (
    <tr key={_id}>
      <td>{name}</td>
      <td>
        {qualities.map((item) => (
          <Qualitie
            key={item._id}
            id={item._id}
            color={item.color}
            name={item.name}
          />
        ))}
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate}</td>
      <td>
        <BookMark key={_id} />
      </td>
      <td key={_id}>
        <button
          key={_id}
          className={"btn btn-danger"}
          onClick={() => onDelete(_id)}
        >
          Удалить
        </button>
      </td>
    </tr>
  );
};

export default User;
