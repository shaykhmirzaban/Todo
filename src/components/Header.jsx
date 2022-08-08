import React, { useState } from "react";
import "../style/header.css";

const Header = () => {
  let [cTime, CTimeU] = useState();

  // date
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  // time
  let hour = date.getHours();
  let minut = date.getMinutes();

  hour = hour > 12 ? hour - 12 : hour;
  let amOrPm = hour > 12 ? "PM" : "AM";

  hour = hour === 0 ? 12 : hour;

  hour = hour < 10 ? `0${hour}` : hour;
  minut = minut < 10 ? `0${minut}` : minut;

  // formate
  cTime = `${hour}:${minut} ${amOrPm}`;
  // update time automatic
  setInterval(() => {
    CTimeU(`${hour}:${minut} ${amOrPm}`);
  }, 1000);

  let dateFormate = `${day}/${month}/${year}`;

  return (
    <React.StrictMode>
      <section className="Header">
        <h1>Todo Doto</h1>
        <h1 className="userName">Shaykh Mirzaban</h1>
        <div className="date">
          <div className="time">{cTime}</div>
          <div className="day">{dateFormate}</div>
        </div>
      </section>
    </React.StrictMode>
  );
};

export default Header;
