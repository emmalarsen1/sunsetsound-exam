import React, { useEffect, useState } from "react";
import TicketForm from "./Ticketinfo";
import BookingButton from "./BookingButton";

function GetTicketInfo({ ticketChoice, setPage }) {
  const [regTicketLength, setRegTicketLength] = useState();
  const [vipTicketLength, setVipTicketLength] = useState();

  useEffect(() => {
    setRegTicketLength(() => {
      const newArray = [];

      for (let i = newArray.length; i < ticketChoice.regular; i++) {
        newArray.push("");
      }
      return newArray;
    });

    setVipTicketLength(() => {
      const newArray = [];

      for (let i = newArray.length; i < ticketChoice.vip; i++) {
        newArray.push("");
      }
      return newArray;
    });
  }, [ticketChoice.regular, ticketChoice.vip]);

  async function handleSubmit(e) {
    setPage(2);
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      {regTicketLength &&
        regTicketLength.map((oneReg, i) => {
          return <TicketForm key={i} ticketNumber={i + 1} ticketType="Regular"></TicketForm>;
        })}
      {vipTicketLength &&
        vipTicketLength.map((oneVip, i) => {
          return <TicketForm key={i} ticketNumber={i + 1} ticketType="VIP"></TicketForm>;
        })}

      <BookingButton color="blue" buttontext={"Continue"}></BookingButton>
    </form>
  );
}

export default GetTicketInfo;
