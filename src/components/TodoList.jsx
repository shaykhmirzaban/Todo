import React, { useState } from "react";
import "../style/todoList.css";

const TodoList = (props) => {
  let [flag, updateFlag] = useState(false);

  const cheacked = () => {
    updateFlag(true);
  };

  const Uncheacked = () => {
    updateFlag(false);
  };

  return (
    <React.StrictMode>
      <div className="item" style={{ opacity: flag ? "0.6" : "1" }}>
        <div className="checked">
          <i
            className="fa-solid fa-square"
            onClick={cheacked}
            style={{ display: flag ? "none" : "block" }}
          ></i>
          <i
            className="fa-solid fa-square-check"
            onClick={Uncheacked}
            style={{ display: flag ? "block" : "none" }}
          ></i>
        </div>
        <li
          id={props.index}
          style={{ textDecoration: flag ? "line-through" : "none" }}
        >
          {props.text}
        </li>
        <div className="deleteUpdate">
          <i
            className="fa-solid fa-trash"
            onClick={() => {
              props.deleteItem(props.index);
            }}
          ></i>
          <i
            className="fa-solid fa-square-pen"
            onClick= {flag ? null : () => {
              props.update(props.index);
            }}
          ></i>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default TodoList;
