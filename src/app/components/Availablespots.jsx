"use client";
import React from "react";
import { useState, useEffect } from "react";

export default function Availablespots({ data }) {
  const [spots, setSpots] = useState(data);

  return (
    <div>
      <h1>Så mange pladser på{spots[0].area}</h1>
      <p> er ledige:{spots[0].available}</p>
    </div>
  );
}
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
