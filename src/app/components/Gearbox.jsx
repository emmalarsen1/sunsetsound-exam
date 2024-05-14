import React from "react";

function Gearbox({ bookingInfo, setBookingInfo }) {
  function remove() {
    setBookingInfo((old) => {
      return {
        ...old,
        regular: Math.max(0, old.regular - 1),
      };
    });
  }

  function add() {
    setBookingInfo((old) => {
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
      <span>{bookingInfo.regular}</span>
      <button onClick={add}>+</button>
    </div>
  );
}
export default Gearbox;
