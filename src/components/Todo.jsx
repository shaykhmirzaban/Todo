import React, { useState } from "react";
import TodoList from "./TodoList";
import Header from "./Header";
import "../style/todo.css";

const Todo = () => {
  let [currentItem, setCurrentItem] = useState();
  let [totalItems, updateTotalItems] = useState([]);

  const currentText = (e) => {
    setCurrentItem(e.target.value);
  };

  // Add Items
  const addItem = () => {
    let search = document.querySelector(".search");

    if (search.value === "") {
      alert("Empty field can't be added");
    } else {
      updateTotalItems((item) => {
        return [...item, currentItem];
      });

      search.value = "";
    }

    search.focus();
  };

  // Delete Item
  const deleted = (id) => {
    updateTotalItems((val) => {
      return val.filter((value, index) => {
        return index !== id;
      });
    });
  };

  let global;
  let boxSection = document.querySelector(".updateValueBox");
  let last = document.querySelector(".lastValue");

  // Update Item
  const updateItem = (id) => {
    let currentV;

    global = id;
    boxSection.style.transform = "scale(1)";
    currentV = totalItems[id];
    last.value = currentV;

    last.focus();
  };

  // Update Item When Click Replace Button
  const change = () => {
    updateTotalItems((val) => {
      return val.map((value, index) => {
        if (index === global) {
          return (value = last.value);
        } else {
          return value;
        }
      });
    });

    boxSection.style.transform = "scale(0)";
  };

  return (
    <React.StrictMode>
      <Header />
      <section className="todo">
        <input
          type="text"
          placeholder="Enter your items"
          className="search"
          onChange={currentText}
        />
        <button onClick={addItem}>Add</button>
      </section>

      <section className="TodoList">
        <ol>
          {totalItems.map((val, index) => {
            return (
              <TodoList
                index={index}
                text={val}
                key={index}
                deleteItem={deleted}
                update={updateItem}
              />
            );
          })}
        </ol>
      </section>

      <section className="updateValueBox" style={{ transform: "scale(0)" }}>
        <div className="box">
          <input type="text" className="lastValue" />
          <button onClick={change}>Replace</button>
        </div>
      </section>
    </React.StrictMode>
  );
};

export default Todo;
