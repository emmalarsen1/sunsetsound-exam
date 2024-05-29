import React from "react";
import styles from "@/app/styles/bookingstyles/ConfirmButton.module.css";

function BookingButton({ buttontext, onClick, disabled, color }) {
  const buttonColor = color === "primary" ? styles.yellow : styles.pink;
  return (
    <button className={`${styles.BookingBtn} ${buttonColor}`} onClick={onClick} disabled={disabled}>
      {buttontext}
    </button>
  );
}

export default BookingButton;
