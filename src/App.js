import React, { useState } from "react";
import Group from "./components/Category";

const App = () => {
  const [inputValue, setInputValue] = useState([]);
  const [list, setList] = useState([]);

  const changeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const submitHanlder = (event) => {
    event.preventDefault();
    const newList = [...list];
    const newItem = { name: inputValue, id: list.length };
    const updated = [...newList, newItem];
    setList(updated);
    setInputValue(" ");
  };

  return (
    <Group
      list={list}
      change={changeHandler}
      inputValue={inputValue}
      submit={submitHanlder}
    />
  );
};

export default App;
