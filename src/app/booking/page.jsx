"use client";
import { useState } from "react";
import styles from "../styles/Nextbutton.module.css";
import Ticketsbox from "../components/Ticketsbox";

function Booking() {
  const [page, setPage] = useState(0);
  const [bookingInfo, setBookingInfo] = useState({
    area: null,
    regular: 0,
    vip: 0,
  });
  return (
    <div style={{ paddingTop: "200px" }}>
      <ol>
        <li>
          <button onClick={() => setPage(0)}>Ticketds</button>
        </li>
        <li>
          <button onClick={() => setPage(1)}>Step 2</button>
        </li>
      </ol>
      {page === 0 && <Ticketsbox bookingInfo={bookingInfo} setBookingInfo={setBookingInfo} />}
      {page === 1 && <h1>hej igen</h1>}
      <button onClick={() => setPage((o) => o - 1)}>Back</button>
      <button className={styles.nextbutton} onClick={() => setPage((o) => o + 1)}>
        Next
      </button>
      <section>
        <h2>Basket</h2>
        <p>Reguklar tickets: {bookingInfo.regular}</p>
        <p>Total: {bookingInfo.regular * 799 + bookingInfo.vip * 1299}</p>
      </section>
    </div>
  );
}

export default Booking;
