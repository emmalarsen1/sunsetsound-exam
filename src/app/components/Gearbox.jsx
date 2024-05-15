import React from "react";
import { useState } from "react";

function GearBox({ gearChoice, setGearChoice }) {
  const [twoPerson, setTwoPerson] = useState(0);
  const [threePerson, setThreePerson] = useState(0);

  function remove() {
    setTwoPerson((o) => o - 1);
    setThreePerson((o) => o - 1);
    setGearChoice((old) => {
      return {
        ...old,
        twotent: twoPerson,
        threetent: threePerson,
      };
    });
  }

  function add() {
    setTwoPerson((o) => o + 1);
    setThreePerson((o) => o + 1);
    setGearChoice((old) => {
      return {
        ...old,
        twotent: twoPerson,
        threetent: threePerson,
      };
    });
  }
  return (
    <>
      <div>
        <h2>two tent</h2>
        <button onClick={remove}>-</button>
        <span>{twoPerson}</span>
        <button onClick={add}>+</button>
      </div>
      <div>
        <h2>three tent</h2>
        <button onClick={remove}>-</button>
        <span>{threePerson}</span>
        <button onClick={add}>+</button>
      </div>
    </>
  );
}

//     <div>
//   <h2>two tent</h2>
//   <button onClick={() => setTwoPerson((o) => o - 1)}>-</button>
//   <span>{twoPerson}</span>
//   <button onClick={() => setTwoPerson((o) => o + 1)}>+</button>
// </div>
// <div>
//   <h2>three tent</h2>
//   <button onClick={() => setThreePerson((o) => o - 1)}>-</button>
//   <span>{threePerson}</span>
//   <button onClick={() => setThreePerson((o) => o + 1)}>+</button>
// </div>

export default GearBox;
