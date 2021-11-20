import React from "react";
import "./category.css";
import Product from "./Product";

const Group = ({ list, change, inputValue, submit }) => {
  return (
    <div>
      <p className="hint">
        Hint : you can add your new group , if not just existed
      </p>
      <div className="formContainer">
        <form>
          <input
            className="input"
            type="text"
            value={inputValue}
            onChange={(event) => {
              change(event);
            }}
          ></input>
          <input
            className="btn"
            type="submit"
            value="+"
            onClick={(event) => {
              submit(event);
            }}
          ></input>
        </form>
      </div>
      <Product list={list} />
    </div>
  );
};

export default Group;
