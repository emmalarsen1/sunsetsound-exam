"use client";
import React from "react";
import { useState } from "react";
import styles from "../../styles/bookingstyles/AvailableSpots.module.css";
import Billingform from "./Billingform";
import BookingButton from "./BookingButton";

export default function Availablespots({ data, ticketTotal, page, setPage }) {
  const [spots, setSpots] = useState(data);
  const [selectedArea, setSelectedArea] = useState(null);
  const [ticketCount, setTicketCount] = useState(1);

  const handleSelection = (event) => {
    const selectedArea = event.target.value;
    const area = spots.find((spot) => spot.area === selectedArea);
    if (area.available >= ticketCount) {
      setSelectedArea(selectedArea);
    } else {
      alert("There is not enough spots available for the selected amount of tickets");
    }
  };

  const selectionMade = () => selectedArea !== null;

  return (
    <>
      <form>
        <fieldset>
          <legend className={styles.title}>Choose your camping area</legend>
          {spots.map(
            (spot, index) =>
              ticketTotal < spot.available && (
                <div className={styles.camping} key={index}>
                  <div className={styles.camping_spot_title}>
                    <label htmlFor={`campingArea${index}`}>{spot.area}</label>
                  </div>
                  <div>
                    <input className={styles.radiobutton} type="radio" name="campingArea" id={`campingArea${index}`} value={spot.area} onChange={handleSelection} />
                    <span>{spot.available} spots available</span>
                  </div>
                </div>
              )
          )}
        </fieldset>
      </form>
      {page !== 4 && (
        <div>
          <BookingButton buttontext={"Continue"} onClick={() => setPage((o) => o + 1)} disabled={!selectionMade()}></BookingButton>
        </div>
      )}
    </>
  );
}

//   return (
//     <form>
//       <fieldset>
//         <legend>Choose your camping area</legend>
//         <input type="radio" name="svartheim" id="svartheim" value="svartheim" />
//         <label htmlFor="svartheim">Svartheim</label>
//       </fieldset>
//     </form>
//   );
// }
// async function Availablespots() {
//   const url = "http://localhost:8080/available-spots";
//   const res = await fetch(url);
//   const spotsData = await res.json();
//   return (
//     <div>
//       <p>Hej køb billet til {spotsData.area}</p>
//     </div>
//   );
// }

// export default Availablespots;
