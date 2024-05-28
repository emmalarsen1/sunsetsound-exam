"use client";
import { useState, useEffect } from "react";
import styles from "../booking/Booking.module.css";
import Ticketsbox from "../components/Ticketsbox";
import Availablespots from "../components/Availablespots";
import Ordercomplete from "../components/Ordercomplete";
import Billingform from "../components/Billingform";
import GetTicketInfo from "../components/GetTicketInfo";

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

  const [gearChoice, setGearChoice] = useState({
    twotent: 0,
    threetent: 0,
    greenCamping: false,
  });

  // const [formData, setFormData] = useState({
  //   regular: [],
  //   vip: [],
  // });

  // const handleFormDataChange = (type, index, field, value) => {
  //   setFormData((prev) => {
  //     const newFormData = { ...prev };
  //     if (!newFormData[type][index]) {
  //       newFormData[type][index] = {};
  //     }
  //     newFormData[type][index][field] = value;
  //     return newFormData;
  //   });
  // };

  return (
    <>
      <h1 className={`globalHeader`}>Tickets</h1>
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
          <section className={styles.basketWrapper}>
            {page === 0 && (
              <div>
                {" "}
                <Ticketsbox
                  setPage={setPage}
                  ticketChoice={ticketChoice}
                  setTicketChoice={setTicketChoice}
                  gearChoice={gearChoice}
                  setGearChoice={setGearChoice}
                />
              </div>
            )}
            {page === 1 && (
              <div>
                <h2>Ticket Info</h2>
                <GetTicketInfo
                  setPage={setPage}
                  ticketChoice={ticketChoice}
                ></GetTicketInfo>
              </div>
            )}
            {page === 2 && (
              <Availablespots
                setPage={setData}
                data={data}
                ticketTotal={ticketTotal}
              ></Availablespots>
            )}
            {page === 3 && <Billingform setPage={setPage}></Billingform>}
            {page === 4 && <Ordercomplete />}
            {/* Sørger for ikke at vise knapperne på confirmed siden  */}
          </section>
          {/* Sørger for ikke at vise kurven på confirmed siden  */}
          {page !== 4 && (
            <section className={styles.basketWrapper}>
              <p className={styles.basketTitle}>sunset sound</p>
              <p className={styles.basketSubtitle}>Basket</p>
              <hr />
              <div className={styles.feeTickets}>
                {ticketChoice.regular + ticketChoice.vip > 0 && (
                  <h3>Ticket(s):</h3>
                )}
                {ticketChoice.regular > 0 && (
                  <p>Regular Ticket: {ticketChoice.regular}x 799,-</p>
                )}
                {ticketChoice.vip > 0 && (
                  <p>VIP Ticket: {ticketChoice.vip}x 1299,-</p>
                )}
              </div>
              <div className={styles.feeTents}>
                {gearChoice.twotent + gearChoice.threetent > 0 && (
                  <h3>Tent(s):</h3>
                )}
                {gearChoice.twotent > 0 && (
                  <p>2-person tent: {gearChoice.twotent}x 299,-</p>
                )}
                {gearChoice.threetent > 0 && (
                  <p>3-person tent: {gearChoice.threetent}x 399,-</p>
                )}
                {gearChoice.greenCamping && <p>Green Camping: 1x 250,-</p>}
              </div>
              <p className={styles.feeTotal}>
                Total:{" "}
                {fee[0].amount * fee[0].price +
                  ticketChoice.regular * 799 +
                  ticketChoice.vip * 1299 +
                  gearChoice.twotent * 299 +
                  gearChoice.threetent * 399 +
                  gearChoice.greenCamping * 250}
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
    </>
  );
}

export default Booking;
