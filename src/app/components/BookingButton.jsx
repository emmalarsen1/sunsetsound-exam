import React from "react";
import styles from "../styles/Button.module.css";

function BookingButton() {
  const buttonColor = color === "primary" ? styles.yellow : styles.pink;

  return <button className={`${styles.buttonstyle} ${buttonColor}`}>{buttontext}</button>;
}

export default BookingButton;
