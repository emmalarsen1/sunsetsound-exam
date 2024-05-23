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
  const fee = [{ name: "Fixed booking fee", price: "99", id: 0, type: "fee", amount: 1 }];

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

  const [formData, setFormData] = useState({
    regular: [],
    vip: [],
  });
  const handleFormDataChange = (type, index, field, value) => {
    setFormData((prev) => {
      const newFormData = { ...prev };
      if (!newFormData[type][index]) {
        newFormData[type][index] = {};
      }
      newFormData[type][index][field] = value;
      return newFormData;
    });
  };
  return (
    <div className={styles.bookingMain}>
      <ol className={styles.breadCrumbsWrapper}>
        <li>
          {/* onClick => setPage sætter siden til det korrekte side ud fra index  */}
          {/*disabled sørger for at brødkrumme kun er brugbar tilbage og ikke frem */}
          <button onClick={() => setPage(0)} disabled={page === 0}>
            Tickets
          </button>
        </li>
        <li>
          <button onClick={() => setPage(1)} disabled={page <= 1}>
            Ticket Info
          </button>
        </li>
        <li>
          <button onClick={() => setPage(2)} disabled={page <= 2}>
            Camping
          </button>
        </li>
        <li>
          <button onClick={() => setPage(3)} disabled={page <= 3}>
            Billing
          </button>
        </li>
        <li>
          <button onClick={() => setPage(4)} disabled={page <= 4}>
            Confirmed
          </button>
        </li>
      </ol>
      <div className={styles.bookingWrapper}>
        <section>
          {page === 0 && (
            <div>
              {" "}
              <Ticketsbox ticketChoice={ticketChoice} setTicketChoice={setTicketChoice} /> <Gearbox gearChoice={gearChoice} setGearChoice={setGearChoice} />{" "}
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
                <TicketForm key={`regular${i}`} ticketNumber={`Regular ${i + 1}`} fData={formData.regular[i] || {}} onChange={(field, value) => handleFormDataChange("regular", i, field, value)} />
              ))}
              {Array.from({ length: ticketChoice.vip }, (_, i) => (
                <TicketForm key={`vip${i}`} ticketNumber={`VIP ${i + 1}`} fData={formData.vip[i] || {}} onChange={(field, value) => handleFormDataChange("vip", i, field, value)} />
              ))}
            </div>
          )}
          {page === 2 && <Availablespots data={data} ticketTotal={ticketTotal} />}
          {page === 3 && <Billingform></Billingform>}
          {page === 4 && <Ordercomplete />}
          {/* Sørger for ikke at vise knapperne på confirmed siden  */}
          {page !== 4 && (
            <div>
              <button onClick={() => setPage((o) => o - 1)}>Back</button>
              <button className={styles.nextbutton} onClick={() => setPage((o) => o + 1)}>
                Next
              </button>
            </div>
          )}
        </section>
        {/* Sørger for ikke at vise kurven på confirmed siden  */}
        {page !== 4 && (
          <section className={styles.basketWrapper}>
            <h2>Basket</h2>
            <div className={styles.feeTickets}>
              {ticketChoice.regular + ticketChoice.vip > 0 && <h3>Ticket(s):</h3>}
              {ticketChoice.regular > 0 && <p>Regular Ticket: {ticketChoice.regular}x 799,-</p>}
              {ticketChoice.vip > 0 && <p>VIP Ticket: {ticketChoice.vip}x 1299,-</p>}
            </div>
            <div className={styles.feeTents}>
              {gearChoice.twotent + gearChoice.threetent > 0 && <h3>Tent(s):</h3>}
              {gearChoice.twotent > 0 && <p>2-person tent: {gearChoice.twotent}x 299,-</p>}
              {gearChoice.threetent > 0 && <p>3-person tent: {gearChoice.threetent}x 399,-</p>}
            </div>
            <p className={styles.feeTotal}>
              Total: {fee[0].amount * fee[0].price + ticketChoice.regular * 799 + ticketChoice.vip * 1299 + gearChoice.twotent * 299 + gearChoice.threetent * 399}
              ,-
            </p>
            {fee.map(
              (item) =>
                item.amount > 0 && (
                  <div className={styles.feeFixed} key={item.id}>
                    <p>{item.name}&nbsp;</p>
                    <p>{item.price},-</p>
                  </div>
                )
            )}
          </section>
        )}
      </div>
    </div>
  );
}

export default Booking;
