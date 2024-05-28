"use client";
import React, { useState } from "react";
import styles from "../tickets/Tickets.module.css";
import Button from "./Button";

function TicketCardFront({ name, desc, price }) {
  return (
    <div className={styles.card}>
      <p className={styles.topP}>sunset sound 2024</p>
      <p className={styles.name}>{name}</p>
      <p className={styles.description}>{desc}</p>
      <p className={styles.price}>{price}</p>
      <div className={styles.indexButWrap}>
        <Button href={""} buttontext="Read more" color="primary" />
      </div>
    </div>
  );
}

export default TicketCardFront;
// function TicketCard({ name, desc, price, moreinfo }) {
//   return (
//     <div className={styles.card}>
//       <div className={styles.front}>
//         <p className={styles.topP}>susnet sound 2024</p>
//         <p className={styles.name}>{name}</p>
//         <p className={styles.description}>{desc}</p>
//         <p className={styles.price}>{price}</p>
//         <div className={styles.indexButWrap}>
//           <button className={styles.indexButton}>Read more</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TicketCard;
