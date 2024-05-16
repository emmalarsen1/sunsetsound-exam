"use client";
import React from "react";
import { useState } from "react";

export default function Availablespots({ data, ticketTotal }) {
  const [spots, setSpots] = useState(data);
  const [selectedArea, setSelectedArea] = useState(null);
  const [ticketCount, setTicketCount] = useState(1);

  const handleSelection = (event) => {
    const selectedArea = event.target.value;
    const area = spots.find((spot) => spot.area === selectedArea);
    if (area.available >= ticketCount) {
      setSelectedArea(selectedArea);
    } else {
      alert(
        "There is not enough spots available for the selected amount of tickets"
      );
    }
  };

  return (
    <form>
      <fieldset>
        <legend>Choose your camping area</legend>
        {spots.map(
          (spot, index) =>
            ticketTotal < spot.available && (
              <div key={index}>
                <input
                  type="radio"
                  name="campingArea"
                  id={`campingArea${index}`}
                  value={spot.area}
                  onChange={handleSelection}
                />
                <span>{spot.available} spots available at </span>
                <label htmlFor={`campingArea${index}`}>{spot.area}</label>
              </div>
            )
        )}
      </fieldset>
    </form>
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
