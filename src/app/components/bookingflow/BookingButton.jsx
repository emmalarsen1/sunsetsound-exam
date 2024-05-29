import React from "react";
import styles from "@/app/styles/bookingstyles/ConfirmButton.module.css";

function BookingButton({ buttontext, onClick, disabled }) {
  return (
    <button className={styles.BookingBtn} onClick={onClick} disabled={disabled}>
      {buttontext}
    </button>
  );
}

export default BookingButton;
