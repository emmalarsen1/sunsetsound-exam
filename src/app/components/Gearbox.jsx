import React from "react";

function Gearbox({ gearchoice, setgearChoice }) {
  function remove() {
    setgearChoice((old) => {
      return {
        ...old,
        twotent: Math.max(0, old.twotent - 1),
      };
    });
  }

  function add() {
    setgearChoice((old) => {
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
      <span>{gearchoice.twotent}</span>
      <button onClick={add}>+</button>
    </div>
  );
}
export default Gearbox;
