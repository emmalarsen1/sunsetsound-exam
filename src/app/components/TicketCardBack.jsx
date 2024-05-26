"use client";
import React, { useState } from "react";
import styles from "../tickets/Tickets.module.css"; // Antag at stierne til CSS-modulerne er korrekte

function TicketCardBack({ name, moreinfo }) {
  return (
    <div className={styles.card}>
      <div className={styles.backContent}>
        <p className={styles.topP}>sunset sound 2024</p>
        <p className={styles.name}>{name}</p>
        <p className={styles.moreInfo}>{moreinfo}</p>
      </div>
      <div className={styles.indexButWrap}>
        <button className={styles.indexButton}>Back</button>
      </div>
    </div>
  );
}

export default TicketCardBack;
