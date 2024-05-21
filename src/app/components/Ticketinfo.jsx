import React from "react";
import styles from "../booking/Booking.module.css";

function TicketForm({ ticketNumber }) {
  return (
    <div className={styles.ticketForm}>
      <h3>Ticket {ticketNumber}</h3>
      <form>
        <label>
          Name:
          <input type="text" name={`name${ticketNumber}`} />
        </label>
        <label>
          Email:
          <input type="email" name={`email${ticketNumber}`} />
        </label>
      </form>
    </div>
  );
}

export default TicketForm;
