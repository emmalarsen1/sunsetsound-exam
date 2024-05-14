import React from "react";

function Ticketsbox({ ticketchoice, setticketChoice }) {
  function remove() {
    setticketChoice((old) => {
      return {
        ...old,
        regular: Math.max(0, old.regular - 1),
      };
    });
  }

  function add() {
    setticketChoice((old) => {
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
      <span>{ticketchoice.regular}</span>
      <button onClick={add}>+</button>
    </div>
  );
}
export default Ticketsbox;
