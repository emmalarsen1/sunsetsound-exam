import React from "react";
import styles from "../../styles/bookingstyles/ConfirmButton.module.css";

function BookingButton({ buttontext, onClick, disabled, color }) {
  const buttonColor = color === "yellow" ? styles.yellow : styles.green;
  return (
    <button className={`${styles.BookingBtn} ${buttonColor}`} onClick={onClick} disabled={disabled}>
      {buttontext}
    </button>
  );
}

export default BookingButton;
