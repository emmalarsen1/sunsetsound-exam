"use client";
import React from "react";
import { useState } from "react";

function schedule({ bandData }) {
  const [selectDay, setSelectDay] = useState;
  const days = ["monday", "tuesday", "wednesday", "friday", "saturday", "sunday"];
  const url = "http://localhost:8080/schedule";

  return (
    <div>
      <h1>schedule</h1>
      <div></div>
    </div>
  );
}

export default schedule;
