import React from "react";
import styles from "@/app/styles/bookingstyles/TicketInfo.module.css";
import ToolTip from "./ToolTip";

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
              <input
                type="text"
                name="fullname"
                required
                className={styles.inputField}
              />
            </div>
            <div className={styles.infoBox}>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                required
                className={styles.inputField}
              />
            </div>
            <div className={styles.infoBox}>
              <label>Phone-number:</label>
              <input
                type="tel"
                name="phone"
                required
                className={styles.inputField}
              />
            </div>
          </fieldset>
        </div>
      </div>
    </>
  );
}

export default TicketForm;
