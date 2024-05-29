import React from "react";
import styles from "@/app/styles/bookingstyles/ConfirmButton.module.css";

function BookingButton({ buttontext }) {
  return <button className={styles.BookingBtn}>{buttontext}</button>;
}

export default BookingButton;
