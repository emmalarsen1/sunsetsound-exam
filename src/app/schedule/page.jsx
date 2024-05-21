"use client";
import styles from "../styles/Schedule.module.css";
import OneSchedule from "../components/OneSchedule";
import React from "react";
import { useState, useEffect } from "react";
import combineData from "@/lib/combineData";

function Schedule() {
  const [bands, setbands] = useState();
  const [day, setDay] = useState("mon");

  async function fetchData() {
    const data = await combineData();
    setbands(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  //Time
  const insertTimes = () => {
    const list = [];
    for (let i = 0; i < 24; i += 2) {
      i < 10 ? list.push(<h2 className={styles.new_times_title}>0{i}:00</h2>) : list.push(<h2 className={styles.new_times_title}>{i}:00</h2>);
    }
    return <div className={styles.new_times}>{list}</div>;
  };

  return (
    <div>
      <h1 className={styles.title}>schedule</h1>

      <div>
        <button
          onClick={() => {
            setDay("mon");
          }}
        >
          MONDAY
        </button>
        <button
          onClick={() => {
            setDay("tue");
          }}
        >
          TUESDAY
        </button>
        <button
          onClick={() => {
            setDay("wed");
          }}
        >
          WEDNESDAY
        </button>
        <button
          onClick={() => {
            setDay("thu");
          }}
        >
          THURSDAY
        </button>
        <button
          onClick={() => {
            setDay("fri");
          }}
        >
          FRIDAY
        </button>
        <button
          onClick={() => {
            setDay("sat");
          }}
        >
          SATURDAY
        </button>
        <button
          onClick={() => {
            setDay("sun");
          }}
        >
          SUNDAY
        </button>
      </div>

      <div>
        <div className={styles.areas}>
          <h3 className={styles.hidden}>TIME</h3>
          <h3>MIDGARD</h3>
          <h3>JOTUNHEIM</h3>
          <h3>VANAHEIM</h3>
        </div>
        <div>
          {insertTimes()}
          {bands && (
            <div>
              <OneSchedule data={bands.Midgard} />
              <OneSchedule data={bands.Jotunheim} />
              <OneSchedule data={bands.Vanaheim} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Schedule;
