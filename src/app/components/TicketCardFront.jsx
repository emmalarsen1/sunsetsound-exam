"use client";
import React from "react";
import styles from "../tickets/Tickets.module.css";
import MainButton from "./Button";

function TicketCardFront({ name, desc, price }) {
  return (
    <div className={styles.card}>
      <p className={styles.topP}>sunset sound 2024</p>
      <p className={styles.name}>{name}</p>
      <p className={styles.description}>{desc}</p>
      <p className={styles.price}>{price}</p>
      <div className={styles.indexButWrap}>
        <MainButton href={""} buttontext="Read more" color="pink" />
      </div>
    </div>
  );
}

export default TicketCardFront;
