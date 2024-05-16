"use client";
import { useState, useEffect } from "react";
import styles from "../booking/Booking.module.css";
import TicketsBox from "../components/TicketsBox";
import GearBox from "../components/GearBox";
import Availablespots from "../components/AvailableSpots";
import Ordercomplete from "../components/Ordercomplete";
import BillingForm from "../components/Billingform";

function Booking() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8080/available-spots")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  const [page, setPage] = useState(0);
  const [ticketChoice, setTicketChoice] = useState({
    regular: 0,
    vip: 0,
  });
  const [gearChoice, setGearChoice] = useState({
    twotent: 0,
    threetent: 0,
  });
  const getTotalTicketsBasket = () => {
    return ticketChoice.regular + ticketChoice.vip + gearChoice.twotent + gearChoice.threetent;
  };

  const handleSelection = (event) => {
    const selectedArea = event.target.value;
  };

  return (
    <div className={styles.bookingmain}>
      <ol className={styles.breadcrumbswrapper}>
        <li>
          <button onClick={() => setPage(0)}>Tickets</button>
        </li>
        <li>
          <button onClick={() => setPage(1)}>Ticket Info</button>
        </li>
        <li>
          <button onClick={() => setPage(2)}>Camping</button>
        </li>
        <li>
          <button onClick={() => setPage(3)}>Billing</button>
        </li>
        <li>
          <button onClick={() => setPage(4)}>Confirmed</button>
        </li>
      </ol>
      <div className={styles.bookingwrapper}>
        <section>
          {page === 0 && (
            <div>
              {" "}
              <TicketsBox ticketChoice={ticketChoice} setTicketChoice={setTicketChoice} /> <GearBox gearChoice={gearChoice} setGearChoice={setGearChoice} />{" "}
            </div>
          )}
          {page === 1 && <h1>ticket info</h1>}
          {page === 2 && <Availablespots data={data} />}
          {page === 3 && <BillingForm></BillingForm>}
          {page === 4 && <Ordercomplete />}
          <button onClick={() => setPage((o) => o - 1)}>Back</button>
          <button className={styles.nextbutton} onClick={() => setPage((o) => o + 1)}>
            Next
          </button>
        </section>
        <section>
          <h2>Basket</h2>
          <p>Regular Ticket: {ticketChoice.regular}x 799,-</p>
          <p>VIP Ticket: {ticketChoice.vip}x 1299,-</p>
          <p>2-person tent: {gearChoice.twotent}x 299,-</p>
          <p>3-person tent: {gearChoice.threetent}x 399,-</p>
          <p>Total: {ticketChoice.regular * 799 + ticketChoice.vip * 1299 + gearChoice.twotent * 299 + gearChoice.threetent * 399}</p>
        </section>
      </div>
    </div>
  );
}

export default Booking;
