import React, { useState } from "react";
import "./product.css";

const Product = ({ list }) => {
  const [selected, setselected] = useState([]);
  const [productInputValue, setProductInputValue] = useState([]);
  const [productList, setProductList] = useState([]);
  const clickHandler = (e) => {
    setselected(e.target.value);
  };

  const changeHandler = (e) => {
    setProductInputValue(e.target.value);
  };

  const setHandler = (e) => {
    e.preventDefault();
    const list = [...productList];
    const newItem = {
      name: productInputValue,
      id: productList.length,
      category: selected,
    };
    const updated = [...list, newItem];
    setProductList(updated)
    setProductInputValue(" ")
  };

  return (
    <>
      <p className="hintProudct">
        Hint : To classify the product select group and type product name{" "}
      </p>
      <div className="formContainer">
        <select className="select" onClick={(e) => clickHandler(e)}>
          <option></option>
          {list.map((i, id) => {
            return <option key={i.id}>{i.name}</option>;
          })}
        </select>
      </div>
      <div className="formContainer">
        <form>
          <input
          value={productInputValue}
            className="input"
            type="text"
            onChange={(e) => changeHandler(e)}
          ></input>
          <input
            className="btn"
            type="submit"
            value="set"
            onClick={(e) => setHandler(e)}
          ></input>
        </form>
      </div>
    </>
  );
};

export default Product;
