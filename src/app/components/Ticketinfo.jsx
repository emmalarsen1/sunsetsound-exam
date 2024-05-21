import React from "react";
import styles from "../booking/Booking.module.css";

function TicketForm({ ticketNumber, fData, onChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };
  return (
    <div className={styles.ticketForm}>
      <h3>Ticket {ticketNumber}</h3>
      <div>
        <form>
          <fieldset>
            <label>
              Fullname:
              <input
                type="text"
                name="fullname"
                value={fData.fullname || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={fData.email || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Phone-number:
              <input
                type="tel"
                name="phone"
                value={fData.phone || ""}
                onChange={handleChange}
              />
            </label>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default TicketForm;
