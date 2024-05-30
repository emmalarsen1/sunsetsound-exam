"use client";
import React from "react";
import { useState } from "react";
import styles from "../../styles/bookingstyles/AvailableSpots.module.css";
import BookingButton from "./BookingButton";

export default function Availablespots({ data, ticketTotal, page, setPage }) {
  const [spots, setSpots] = useState(data);
  const [selectedArea, setSelectedArea] = useState(null);

  const handleSelection = (event) => {
    const selectedArea = event.target.value;
    const area = spots.find((spot) => spot.area === selectedArea);
    if (area.available >= ticketTotal) {
      setSelectedArea(selectedArea);
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
          <BookingButton buttontext={"Continue"} color="blue" onClick={() => setPage((o) => o + 1)} disabled={!selectionMade()}></BookingButton>
        </div>
      )}
    </>
  );
}
