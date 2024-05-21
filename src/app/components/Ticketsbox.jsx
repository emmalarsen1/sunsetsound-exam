import React from "react";

function Ticketsbox({ ticketChoice, setTicketChoice }) {
  function removeRegular() {
    setTicketChoice((old) => {
      return {
        ...old,
        regular: Math.max(0, old.regular - 1),
      };
    });
  }

  function addRegular() {
    setTicketChoice((old) => {
      return {
        ...old,
        regular: old.regular + 1,
      };
    });
  }

  function removeVip() {
    setTicketChoice((old) => {
      return {
        ...old,
        vip: Math.max(0, old.vip - 1),
      };
    });
  }

  function addVip() {
    setTicketChoice((old) => {
      return {
        ...old,
        vip: old.vip + 1,
      };
    });
  }
  return (
    <>
      <div>
        <h2>Regular Ticket</h2>
        <button onClick={removeRegular}>-</button>
        <span>{ticketChoice.regular}</span>
        <button onClick={addRegular}>+</button>
      </div>

      <div>
        <h2>VIP Ticket</h2>
        <button onClick={removeVip}>-</button>
        <span>{ticketChoice.vip}</span>
        <button onClick={addVip}>+</button>
      </div>
    </>
  );
}
export default Ticketsbox;
