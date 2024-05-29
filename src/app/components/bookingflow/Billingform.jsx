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
        <label>
          Name
          <input type="text" name="fullname" placeholder=" fx John Doe" pattern="[a-zA-ZæøåÆØÅ\s\-]+" required></input>
        </label>
        <label>
          Email
          <input name="email" type="email" placeholder=" fx JohnDoe@gmail.com" required></input>
        </label>

        <label>
          Phone Number
          <input type="tel" name="phone" pattern="[0-9]*" placeholder=" fx +45 3232 3232" required></input>
        </label>

        <label htmlFor="">
          Address
          <input type="text" name="address" aria-label="Address 1" placeholder="Street and number" pattern="[a-zA-ZæøåÆØÅ\s\-0-9]+" required />
          <input type="text" name="adress2" aria-label="Address 2" placeholder="Appartment number, etc." pattern="[0-9][a-zA-ZæøåÆØÅ\s\-]+" />
        </label>

        <label for="zip">
          Zip / City
          <input id="zip" type="number" name="zip" maxlength="4" placeholder=" fx 3480" pattern="[0-9]{4}" required></input>
          <input type="text" name="city" placeholder=" fx Frederiksberg" pattern="[a-zA-ZæøåÆØÅ\s\-]+" required></input>
        </label>

        <label htmlFor="">
          Credit Card Number
          <input name="cardnumber" placeholder="1212 1212 1212 1212" pattern="[0-9]{16}" required maxLength={16} inputMode="numerical" onChange={checkForError} />
          <input name="expodate" placeholder="MM/YY" pattern="[0-1][0-9]/[0-9]{2}" required maxLength={5} inputMode="numerical" onChange={checkForError} />
        </label>

        <BookingButton buttontext={"Confirm"}></BookingButton>
      </form>{" "}
    </div>
  );
}

export default Billingform;

// <Input name="cardnumber" label="Credit card number" placeholder="1122 3344 5566 7788" onChange={checkForError} pattern="[0-9]{16}" required maxLength={16} inputmode="numerical" />
// <div className={styles.grid}>
//   <Input name="exp-date" label="Expiration date" placeholder="MM/YY" onChange={checkForError} pattern="[0-1][0-9][/][0-9]{2}" required maxLength={5} inputmode="numerical" />
//   <Input name="cvc" label="Security code" placeholder="CVC" onChange={checkForError} pattern="[0-9]{3}" required maxLength={3} inputmode="numerical" />
