"use client";
import styles from "../styles/Schedule.module.css";
import React from "react";
import { useState, useEffect } from "react";

function schedule({ bandData }) {
  const [selectDay, setSelectDay] = useState("mon");
  const days = ["monday", "tuesday", "wednesday", "friday", "saturday", "sunday"];
  const url = "http://localhost:8080/schedule";
  const [data, setData] = useState([]);

  // FETCH
  useEffect(() => {
    fetch(url + selectDay).then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }, [selectDay]);

  const onDayChange = (day) => {
    setSelectDay(day.substring(0, 3));
  };

  //Time
  const insertTimes = () => {
    const list = [];
    for (let i = 0; i < 24; i += 2) {
      i < 10 ? list.push(<h2>0{i}:00</h2>) : list.push(<h2>{i}:00</h2>);
    }
    return <div className={styles.new_times}>{list}</div>;
  };

  return (
    <div>
      <h1>schedule</h1>
      <div className={styles.gridwrapper}>
        <div className={styles.new_grid}>
          <h3 className={styles.hidden}>TIME</h3>
          <h3>MIDGARD</h3>
          <h3>JOTUNHEIM</h3>
          <h3>VANAHEIM</h3>
          {insertTimes()}
        </div>
      </div>
    </div>
  );
}

export default schedule;
