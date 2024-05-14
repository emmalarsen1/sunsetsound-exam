import React from "react";

function GearBox({ gearChoice, setGearChoice }) {
  function remove() {
    setGearChoice((old) => {
      return {
        ...old,
        twotent: Math.max(0, old.twotent - 1),
        threetent: Math.max(0, old.threetent - 1),
      };
    });
  }

  function add() {
    setGearChoice((old) => {
      return {
        ...old,
        twotent: old.twotent + 1,
        threetent: old.threetent + 1,
      };
    });
  }
  return (
    <>
      <div>
        <h2>two tent</h2>
        <button onClick={remove}>-</button>
        <span>{gearChoice.twotent}</span>
        <button onClick={add}>+</button>
      </div>
      <div>
        <h2>three tent</h2>
        <button onClick={remove}>-</button>
        <span>{gearChoice.threetent}</span>
        <button onClick={add}>+</button>
      </div>
    </>
  );
}
export default GearBox;
