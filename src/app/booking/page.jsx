"use client";
import { useState, useEffect } from "react";
import styles from "../styles/Nextbutton.module.css";
import TicketsBox from "../components/TicketsBox";
import GearBox from "../components/GearBox";

function Booking() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8080/available-spots")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);
  const [page, setPage] = useState(0);
  const [ticketChoice, setTicketChoice] = useState({
    area: null,
    regular: 0,
    vip: 0,
  });
  const [gearChoice, setGearChoice] = useState({
    area: null,
    twotent: 0,
    threetent: 0,
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
      {page === 0 && (
        <section>
          {" "}
          <TicketsBox
            ticketChoice={ticketChoice}
            setTicketChoice={setTicketChoice}
          />{" "}
          <GearBox gearChoice={gearChoice} setGearChoice={setGearChoice} />{" "}
        </section>
      )}
      {page === 1 && <h1>ticket info</h1>}
      {page === 2 && <Availablespots data={data} />}
      {page === 3 && <h1>Billing</h1>}
      {page === 4 && <Ordercomplete />}
      <button onClick={() => setPage((o) => o - 1)}>Back</button>
      <button
        className={styles.nextbutton}
        onClick={() => setPage((o) => o + 1)}
      >
        Next
      </button>
      <section>
        <h2>Basket</h2>
        <p>Regular Ticket: {ticketChoice.regular}x 799,-</p>
        <p>2-person tent: {gearChoice.twotent}x 299,-</p>
        <p>3-person tent: {gearChoice.threetent}x 399,-</p>
        <p>
          Total:{" "}
          {ticketChoice.regular * 799 +
            ticketChoice.vip * 1299 +
            gearChoice.twotent * 299 +
            gearChoice.threetent * 399}
        </p>
      </section>
    </div>
  );
}

export default Booking;
