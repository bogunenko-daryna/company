import React, { useState } from "react";
import api from "../api";

const Counter = () => {
  const userCounter = () => {
    const defaultCount = 0;
    let setUsers = api.users.fetchAll();
    let value = setUsers.length;
    console.log(value);
    return value;
  };

  //if(){}
  return (
    <h2 className="badge bg-primary">
      Сегодня ты тусанёшь с {userCounter()} людьми
    </h2>
  );
};
export default Counter;
