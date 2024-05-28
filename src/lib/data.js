const endPoint = "https://broken-tinted-wombat.glitch.me/";
// const endPoint = "http://localhost:8080/";
const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBleHdib2FpZW92cm94amtjenNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ1MDEwNzgsImV4cCI6MjAxMDA3NzA3OH0.6BHSqoC3DM7BXM7_X4Syq5W3u_U5MKO7EPClIkefExs";

export async function getData(param) {
  const res = await fetch(endPoint + param);
  return await res.json();
}

// Forsøg på at implementeret SupaBase
// PUT: reserverer spots
export async function getReservation(title, spots) {
  const response = await fetch(endPoint + "reserve-spot", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      area: title,
      amount: spots,
    }),
  });
  return await response.json();
}

export async function getSpots() {
  const res = await fetch(endPoint + "available-spots");
  return await res.json();
}

//
// POST: tilføjer ny booking
export async function addBooking(info) {
  let headersList = {
    Accept: "application/json",
    apikey: apikey,
    prefer: "return=representation",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    fullname: info.fullname,
    lastname: info.lastname,
    address: info.address,
    city: info.city,
    zip: info.zip,
    email: info.email,
    tele: info.tele,
    // extrappl: info.extrappl,
    userid: info.userid,
  });

  let response = await fetch("https://pexwboaieovroxjkczsc.supabase.co/rest/v1/sunsetfest", {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.json();

  return data;
}

//
// POST: tilføjet reservation
export async function addReservation(info) {
  let headersList = {
    Accept: "application/json",
    apikey: apikey,
    prefer: "return=representation",
    "Content-Type": "application/json",
  };

  const getId = await fetch("https://pexwboaieovroxjkczsc.supabase.co/rest/v1/sunsetfest?userid=eq." + info.userid, {
    headers: headersList,
  });
  const idData = await getId.json();
  const userId = idData[0].userid;

  let bodyContent = JSON.stringify({
    userid: userId,
    camp: info.camp,
    regticket: info.regticket,
    vipticket: info.vipticket,
    twotent: info.twotent,
    threetent: info.threetent,
    greencamping: info.greencamping,
  });

  let response = await fetch("https://pexwboaieovroxjkczsc.supabase.co/rest/v1/sunsetfest_booking", {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.json();

  return data;
}

//
// SET: færdiggøre reservationen
export async function setReservation(reservationId) {
  const response = await fetch(endPoint + "fullfill-reservation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: reservationId.id,
    }),
  });
  return await response.json();
}
