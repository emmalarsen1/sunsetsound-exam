import React from "react";

function GearBox({ gearChoice, setGearChoice }) {
  function remove() {
    setGearChoice((old) => {
      return {
        ...old,
        twotent: Math.max(0, old.twotent - 1),
      };
    });
  }

  function add() {
    setGearChoice((old) => {
      return {
        ...old,
        twotent: old.twotent + 1,
      };
    });
  }
  return (
    <div>
      <h2>two tent</h2>
      <button onClick={remove}>-</button>
      <span>{gearChoice.twotent}</span>
      <button onClick={add}>+</button>
    </div>
  );
}
export default GearBox;
