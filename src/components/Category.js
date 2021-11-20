import React from "react";

const Group = ({ change, inputValue , submit }) => {
  return (
    <div>
      <p>Hint : you can add your new group , if not just existed</p>
      <form>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => {
            change(event);
          }}
        ></input>
        <input
          type="submit"
          value="add"
          onClick={(event) => {
            submit(event);
          }}
        ></input>
      </form>
    </div>
  );
};

export default Group;
