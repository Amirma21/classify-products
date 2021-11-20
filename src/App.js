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
    const newItem = { name: inputValue, id: list.length };
    const updated = [...list, newItem];
    setList(updated);
    setInputValue(" ");
  };

  return (
    <Group
      change={changeHandler}
      inputValue={inputValue}
      submit={submitHanlder}
    />
  );
};

export default App;
