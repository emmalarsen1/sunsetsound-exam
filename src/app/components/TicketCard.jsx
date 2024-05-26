"use client";
import React, { useState } from "react";
import styles from "../tickets/Tickets.module.css";

function TicketCard({ name, desc, price, moreinfo }) {
  return (
    <div className={styles.card}>
      <div className={styles.front}>
        <p className={styles.topP}>susnet sound 2024</p>
        <p className={styles.name}>{name}</p>
        <p className={styles.description}>{desc}</p>
        <p className={styles.price}>{price}</p>
        <div className={styles.indexButWrap}>
          <button className={styles.indexButton}>Read more</button>
        </div>
      </div>
    </div>
  );
}

export default TicketCard;
