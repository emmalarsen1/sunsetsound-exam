import React from "react";
import styles from "../../styles/bookingstyles/TicketInfo.module.css";

function TicketForm({ ticketNumber, ticketType }) {
  return (
    <>
      <div className={styles.infoBoxContent}>
        <p className={styles.ticketType}>{ticketType}</p>
        <p className={styles.ticketNumber}>Ticket {ticketNumber}</p>
        <div>
          <fieldset className={styles.infoBox}>
            <div className={styles.infoBox}>
              <label>Full name:</label>
              <input type="text" name="fullname" required className={styles.inputField} placeholder="Lars Larsen" pattern="[A-Za-zæøåÆØÅ]{2,}\s?)+" />
            </div>
            <div className={styles.infoBox}>
              <label>Email:</label>
              <input type="email" name="email" required className={styles.inputField} placeholder="lars@mail.com" pattern="[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
            </div>
            <div className={styles.infoBox}>
              <label>Phone-number:</label>
              <input type="tel" name="phone" required className={styles.inputField} placeholder="2323 2323" pattern="[+0-9]{8,}" inputmode="numerical" />
            </div>
          </fieldset>
        </div>
      </div>
    </>
  );
}

export default TicketForm;
