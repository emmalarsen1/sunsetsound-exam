import React from "react";

function Ticketsbox({ ticketChoice, setTicketChoice, gearChoice, setGearChoice, page, setPage }) {
  // FUNKTIONER FOR TICKETS
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

  // FUNKTIONER FOR CAMPING
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

  function toggleGreenCamp() {
    setGearChoice((old) => {
      return {
        ...old,
        greenCamping: !old.greenCamping,
      };
    });
  }

  function buttonDisabled() {
    return ticketChoice.regular === 0 && ticketChoice.vip === 0;
  }

  return (
    <>
      {/* TICKETBOX */}
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
      <div>
        <h2>2-person tent</h2>
        <button onClick={removeTwoPersons}>-</button>
        <span>{gearChoice.twotent}</span>
        <button onClick={addTwoPersons}>+</button>
      </div>

      {/* GEARBOX */}
      <div>
        <h2>3-person tent</h2>
        <button onClick={removeThreePersons}>-</button>
        <span>{gearChoice.threetent}</span>
        <button onClick={addThreePersons}>+</button>
      </div>
      <div>
        <h2>Green Camping</h2>
        <label>
          <input type="checkbox" checked={gearChoice.greenCamping} onChange={toggleGreenCamp} />
          Y/N
        </label>
      </div>

      {/* BUTTONS */}
      {page !== 4 && (
        <div>
          <button onClick={() => setPage((o) => o - 1)}>Back</button>
          <button onClick={() => setPage((o) => o + 1)} disabled={buttonDisabled()}>
            Next
          </button>
        </div>
      )}
    </>
  );
}
export default Ticketsbox;
