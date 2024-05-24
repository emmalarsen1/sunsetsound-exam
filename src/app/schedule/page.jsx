"use client";
import Link from "next/link";
import styles from "../styles/Schedule.module.css";
import OneSchedule from "../components/OneSchedule";
import React from "react";
import { useState, useEffect } from "react";
import combineData from "@/lib/combineData";

function Schedule() {
  const [bands, setbands] = useState();
  const [day, setDay] = useState("mon");
  const [midgard, setMidgard] = useState([]);
  const [vanaheim, setVanaheim] = useState([]);
  const [jotunheim, setJotuneheim] = useState([]);
  const [fullDay, setFullDay] = useState("Monday");

  async function fetchData(parm) {
    const data = await combineData();
    setbands(data);

    setMidgard(data.Midgard[parm]);
    setVanaheim(data.Vanaheim[parm]);
    setJotuneheim(data.Jotunheim[parm]);
  }

  function showWeekDay(parm) {
    const dayFullName = {
      mon: "Monday",
      tue: "Tuesday",
      wed: "Wednesday",
      thu: "Thursday",
      fri: "Friday",
      sat: "Saturday",
      sun: "Sunday",
    };

    return dayFullName[parm];
  }

  useEffect(() => {
    fetchData(day);
    setFullDay(showWeekDay(day));
  }, [day]);

  useEffect(() => {
    fetchData(day);
  }, [day]);

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
      <h1 className={`globalHeader`}>Schedule</h1>

      <div className={styles.days}>
        <button
          className={styles.button}
          onClick={() => {
            setDay("mon");
          }}
          variant="link"
        >
          MONDAY
        </button>
        <button
          className={styles.button}
          onClick={() => {
            setDay("tue");
          }}
          variant="link"
        >
          TUESDAY
        </button>
        <button
          className={styles.button}
          onClick={() => {
            setDay("wed");
          }}
          variant="link"
        >
          WEDNESDAY
        </button>
        <button
          className={styles.button}
          onClick={() => {
            setDay("thu");
          }}
          variant="link"
        >
          THURSDAY
        </button>
        <button
          className={styles.button}
          onClick={() => {
            setDay("fri");
          }}
          variant="link"
        >
          FRIDAY
        </button>
        <button
          className={styles.button}
          onClick={() => {
            setDay("sat");
          }}
          variant="link"
        >
          SATURDAY
        </button>
        <button
          className={styles.button}
          onClick={() => {
            setDay("sun");
          }}
          variant="link"
        >
          SUNDAY
        </button>
      </div>
      <div className={styles.weekday}>{fullDay}</div>
      <div className={styles.gridwrapper}>
        <div className={styles.new_grid}>
          <h3 className={styles.hidden}>TIME</h3>
          <h3 className={styles.areatitle}>MIDGARD</h3>
          <h3 className={styles.areatitle}>VANAHEIM</h3>
          <h3 className={styles.areatitle}>JOTUNHEIM</h3>
          {insertTimes()}
          <article className={styles.oneschedulegrid}>
            <div>
              {midgard.map((act) => {
                return <OneSchedule key={act.logo} band={act} />;
              })}
            </div>
            <div>
              {vanaheim.map((act) => {
                return <OneSchedule key={act.logo} band={act} />;
              })}
            </div>
            <div>
              {jotunheim.map((act) => {
                return <OneSchedule key={act.logo} band={act} />;
              })}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
export default Schedule;
