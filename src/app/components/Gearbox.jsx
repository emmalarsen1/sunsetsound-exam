import React from "react";

function GearBox({ gearChoice, setGearChoice }) {
  function removeTwoPersons() {
    setGearChoice((old) => {
      return {
        ...old,
        twotent: Math.max(0, old.twotent - 1),
      };
    });
  }

  function addTwoPersons() {
    setGearChoice((old) => {
      return {
        ...old,
        twotent: old.twotent + 1,
      };
    });
  }
  function removeThreePersons() {
    setGearChoice((old) => {
      return {
        ...old,
        threetent: Math.max(0, old.threetent - 1),
      };
    });
  }

  function addThreePersons() {
    setGearChoice((old) => {
      return {
        ...old,
        threetent: old.threetent + 1,
      };
    });
  }
  return (
    <>
      <div>
        <h2>2-person tent</h2>
        <button onClick={removeTwoPersons}>-</button>
        <span>{gearChoice.twotent}</span>
        <button onClick={addTwoPersons}>+</button>
      </div>

      <div>
        <h2>3-person tent</h2>
        <button onClick={removeThreePersons}>-</button>
        <span>{gearChoice.threetent}</span>
        <button onClick={addThreePersons}>+</button>
      </div>
    </>
  );
}
export default GearBox;
