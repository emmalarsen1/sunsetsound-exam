import React from "react";
import styles from "@/app/styles/bookingstyles/Billingform.module.css";
import { addBooking } from "@/lib/data";
import BookingButton from "./BookingButton";

function Billingform({ setPage }) {
  const checkForError = (e) => {
    if (e.target.name == "expodate") {
      if (e.target.value.toString().length === 2) e.target.value = e.target.value + "/";
      else if (e.target.value.toString().length === 3 && e.target.value.toString().charAt(2) === "/") e.target.value = e.target.value.replace("/", "");
    }
  };

  function formHandler(e) {
    setPage(4);
    e.preventDefault();

    let info = {};
    // let extraPersons = [];
    const formData = new FormData(e.target);
    info.fullname = formData.get("fullname");
    info.address = formData.get("address");
    info.city = formData.get("city");
    info.zip = formData.get("zip");
    info.email = formData.get("email");
    info.tele = formData.get("phone");
    // totalTickets.forEach((extra, i) => {
    //   extraPersons.push(formData.get(`extraname${i}`));
    // });

    // info.extrapersons = extraPersons;
    info.userid = self.crypto.randomUUID();
    // setBookingInfo((o) => {
    //   return { ...o, userid: info.userid };
    // });
    /* await addBooking(info); */
    // addBooking(info);
  }

  return (
    <div>
      <form className={styles.billingwrapper} onSubmit={formHandler}>
        <div className={styles.billingGrid}>
          <label>Full name</label>
          <input classname={styles.inputField} name="firstname" label="Firtsname" placeholder="John" onChange={checkForError} pattern="[A-Za-zæøåÆØÅ]{2,}" required />
          <label>Email & Phone</label>
          <div className={styles.billingGrid}>
            <input classname={styles.inputField} name="email" label="Email" placeholder="john@example.com" onChange={checkForError} pattern="[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
            <input classname={styles.inputField} name="mobile" label="Mobile" placeholder="12345678" onChange={checkForError} pattern="[+0-9]{8,}" required inputmode="numerical" />
          </div>
          <label>Address</label>
          <div className={styles.billingGrid}>
            <input classname={styles.inputField} name="address1" label="Address 1" placeholder="Street and number" onChange={checkForError} pattern="[A-Za-z0-9'\.\-\s\,]{2,}" required />
          </div>
          <label>City & Zip</label>
          <div className={styles.billingGrid}>
            <input classname={styles.inputField} name="city" label="City" placeholder="City name" onChange={checkForError} pattern="[A-Za-zæøåÆØÅ]{2,}" required />
            <input classname={styles.inputField} name="zip" label="Zip code" placeholder="1234" onChange={checkForError} pattern="[+0-9]{4,}" required inputmode="numerical" />
          </div>
          <label>County</label>
          <input classname={styles.inputField} name="country" label="Country" placeholder="Country" onChange={checkForError} pattern="[A-Za-zæøåÆØÅ]{2,}" required />
        </div>
        <div className={styles.cardGrid}>
          <label>Cardnumber</label>
          <div className={styles.billingGrid}>
            <input classname={styles.inputField} name="cardnumber" label="Credit card number" placeholder="1122 3344 5566 7788" onChange={checkForError} pattern="[0-9]{16}" required maxLength={16} inputmode="numerical" />
          </div>
          <label>Exp. Date & CVC</label>
          <div className={styles.billingGrid}>
            <input classname={styles.inputField} name="exp-date" label="Expiration date" placeholder="MM/YY" onChange={checkForError} pattern="[0-1][0-9][/][0-9]{2}" required maxLength={5} inputmode="numerical" />
            <input classname={styles.inputField} name="cvc" label="Security code" placeholder="CVC" onChange={checkForError} pattern="[0-9]{3}" required maxLength={3} inputmode="numerical" />
          </div>
        </div>
        <BookingButton buttontext={"Confirm"}></BookingButton>
      </form>
    </div>
  );
}

export default Billingform;
