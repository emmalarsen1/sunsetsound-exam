import React from "react";
import Link from "next/link";

export default async function page() {
  const url = "http://localhost:8080/bands";
  const res = await fetch(url);
  const bandData = await res.json();
  console.log(bandData);
  return (
    <>
      <h1>Program yehaww</h1>
      {bandData.map((data) => (
        <Link href={`/bands/${data.slug}`}>{data.name}</Link>
      ))}
    </>
  );
}
