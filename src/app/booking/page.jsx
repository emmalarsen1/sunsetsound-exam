"use client";
import { useState } from "react";
import styles from "../styles/Nextbutton.module.css";
import Ticketsbox from "../components/Ticketsbox";
import Gearbox from "../components/Gearbox";

function Booking() {
  const [page, setPage] = useState(0);
  const [ticketchoice, setticketChoice] = useState({
    area: null,
    regular: 0,
    vip: 0,
  });
  return (
    <div style={{ paddingTop: "200px" }}>
      <ol>
        <li>
          <button onClick={() => setPage(0)}>Tickets</button>
        </li>
        <li>
          <button onClick={() => setPage(1)}>ticket info</button>
        </li>
        <li>
          <button onClick={() => setPage(2)}>campingspots</button>
        </li>
        <li>
          <button onClick={() => setPage(3)}>billing</button>
        </li>
        <li>
          <button onClick={() => setPage(4)}>done</button>
        </li>
      </ol>
      {page === 0 && <Ticketsbox ticketchoice={ticketchoice} setticketChoice={setticketChoice} />}
      {page === 1 && <h1>ticket info</h1>}
      {page === 2 && <h1>campingspots</h1>}
      {page === 3 && <h1>Billing</h1>}
      {page === 4 && <h1>done</h1>}
      <button onClick={() => setPage((o) => o - 1)}>Back</button>
      <button className={styles.nextbutton} onClick={() => setPage((o) => o + 1)}>
        Next
      </button>
      <section>
        <h2>Basket</h2>
        <p>Reguklar tickets: {ticketchoice.regular}</p>
        <p>Total: {ticketchoice.regular * 799 + ticketchoice.vip * 1299}</p>
      </section>
    </div>
  );
}

export default Booking;
