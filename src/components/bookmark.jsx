import React, { useState } from "react";

const BookMark = ({ ...rest }) => {
  const [status, setStatus] = useState(0);
  const bookmarkClick = () => {
    status ? setStatus(status + 1) : setStatus(status - 1);
  };
  return (
    <button onClick={() => bookmarkClick()} {...rest}>
      <i className={"bi bi-bookmark" + (status ? "-heart-fill" : "")}></i>
    </button>
  );
};

export default BookMark;
