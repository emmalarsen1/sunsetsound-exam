import React from "react";
import styles from "@/app/styles/bookingstyles/TicketInfo.module.css";

function TicketForm({ ticketNumber, ticketType }) {
  return (
    <>
      <div className={styles.ticketForm}>
        <h3>
          {ticketType} Ticket {ticketNumber}
        </h3>
        <div>
          <fieldset>
            <label>
              Fullname:
              <input type="text" name="fullname" required />
            </label>
            <label>
              Email:
              <input type="email" name="email" required />
            </label>
            <label>
              Phone-number:
              <input type="tel" name="phone" required />
            </label>
          </fieldset>
        </div>
      </div>
    </>
  );
}

export default TicketForm;
