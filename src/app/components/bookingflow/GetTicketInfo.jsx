import React, { useEffect, useState } from "react";
import TicketForm from "./Ticketinfo";
import styles from "../../styles/bookingstyles/TicketInfo.module.css";

import BookingButton from "./BookingButton";

function GetTicketInfo({ ticketChoice, setPage }) {
  const [regTicketLenght, setRegTicketLenght] = useState();
  const [vipTicketLenght, setVipTicketLenght] = useState();

  useEffect(() => {
    setRegTicketLenght(() => {
      const newArray = [];

      for (let i = newArray.length; i < ticketChoice.regular; i++) {
        newArray.push("");
      }
      return newArray;
    });

    setVipTicketLenght(() => {
      const newArray = [];

      for (let i = newArray.length; i < ticketChoice.vip; i++) {
        newArray.push("");
      }
      return newArray;
    });
  }, []);

  async function handleSubmit(e) {
    setPage(2);
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      {regTicketLenght &&
        regTicketLenght.map((oneReg, i) => {
          return <TicketForm key={i} ticketNumber={i + 1} ticketType="Regular"></TicketForm>;
        })}
      {vipTicketLenght &&
        vipTicketLenght.map((oneVip, i) => {
          return <TicketForm key={i} ticketNumber={i + 1} ticketType="VIP"></TicketForm>;
        })}

      <BookingButton color="blue" buttontext={"Continue"}></BookingButton>
    </form>
  );
}

export default GetTicketInfo;
