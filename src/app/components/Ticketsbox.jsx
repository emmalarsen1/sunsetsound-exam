import React from "react";

function TicketsBox({ ticketChoice, setTicketChoice }) {
  function remove() {
    setTicketChoice((old) => {
      return {
        ...old,
        regular: Math.max(0, old.regular - 1),
      };
    });
  }

  function add() {
    setTicketChoice((old) => {
      return {
        ...old,
        regular: old.regular + 1,
      };
    });
  }
  return (
    <div>
      <h2>Regular</h2>
      <button onClick={remove}>-</button>
      <span>{ticketChoice.regular}</span>
      <button onClick={add}>+</button>
    </div>
  );
}
export default TicketsBox;
