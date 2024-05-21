"use client";
import { useState, useEffect } from "react";
import styles from "../booking/Booking.module.css";
import Ticketsbox from "../components/Ticketsbox";
import Gearbox from "../components/Gearbox";
import Availablespots from "../components/Availablespots";
import Ordercomplete from "../components/Ordercomplete";
import Billingform from "../components/Billingform";
import TicketForm from "../components/Ticketinfo";

function Booking() {
  const fee = [
    { name: "Fixed booking fee", price: "99", id: 0, type: "fee", amount: 1 },
  ];
  const [data, setData] = useState(null);
  useEffect(() => {
    // fetch("https://broken-tinted-wombat.glitch.me/available-spots")
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

  const [ticketTotal, setTicketTotal] = useState();
  useEffect(() => {
    setTicketTotal(() => {
      const newTotal = ticketChoice.regular + ticketChoice.vip;
      return newTotal;
    });
  }, [ticketChoice]);
  console.log(ticketTotal);
  const [gearChoice, setGearChoice] = useState({
    twotent: 0,
    threetent: 0,
  });

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
              <Ticketsbox
                ticketChoice={ticketChoice}
                setTicketChoice={setTicketChoice}
              />{" "}
              <Gearbox gearChoice={gearChoice} setGearChoice={setGearChoice} />{" "}
            </div>
          )}
          {page === 1 && (
            <div>
              <h1>Ticket Info</h1>
              {/* Array.from Laver et array fra længden af ticketChoice.regular  */}
              {/* (_, i) => () lidt Ninja-kode, mapping-funktion hvor _ ignoreres men repræsenterer det nuværende element og i er index   */}
              {/* TicketForm komponenetet bliver renderet  */}
              {/* key={regular${i}} (Key-prop) hjælper React med at identificere hvilke elementer der bliver fjernet eller tilføjet. Skal have unikt ID (i)  */}
              {/* ticketNumber={Regular ${i + 1}} dette prop gives til hver TicketForm for at give hvert komponent et navn "Ticket 1" og "Ticket 2" eksempelvis  */}
              {/* Efterfølgende sker det samme med VIP  */}
              {Array.from({ length: ticketChoice.regular }, (_, i) => (
                <TicketForm
                  key={`regular${i}`}
                  ticketNumber={`Regular ${i + 1}`}
                />
              ))}
              {Array.from({ length: ticketChoice.vip }, (_, i) => (
                <TicketForm key={`vip${i}`} ticketNumber={`VIP ${i + 1}`} />
              ))}
            </div>
          )}
          {page === 2 && (
            <Availablespots data={data} ticketTotal={ticketTotal} />
          )}
          {page === 3 && <Billingform></Billingform>}
          {page === 4 && <Ordercomplete />}
          <button onClick={() => setPage((o) => o - 1)}>Back</button>
          <button
            className={styles.nextbutton}
            onClick={() => setPage((o) => o + 1)}
          >
            Next
          </button>
        </section>
        <section>
          <h2>Basket</h2>
          {fee.map((item) => (
            <div className={styles.feewrapper} key={item.id}>
              <p>{item.name}&nbsp;</p>
              <p>{item.price},-</p>
            </div>
          ))}
          <p>Regular Ticket: {ticketChoice.regular}x 799,-</p>
          <p>VIP Ticket: {ticketChoice.vip}x 1299,-</p>
          <p>2-person tent: {gearChoice.twotent}x 299,-</p>
          <p>3-person tent: {gearChoice.threetent}x 399,-</p>
          <p>
            Total:{" "}
            {fee[0].amount * fee[0].price +
              ticketChoice.regular * 799 +
              ticketChoice.vip * 1299 +
              gearChoice.twotent * 299 +
              gearChoice.threetent * 399}
            ,-
          </p>
        </section>
      </div>
    </div>
  );
}

export default Booking;
