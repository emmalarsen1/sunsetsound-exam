"use client";
import Link from "next/link";
import styles from "../styles/Schedule.module.css";

function OneSchedule({ data }) {
  console.log(data);
  return (
    <div>
      <p>{data.start}</p>
    </div>
  );
}
export default OneSchedule;
