import React from "react";
import Link from "next/link";
import styles from "./Program.module.css";

export default async function page() {
  const url = "https://broken-tinted-wombat.glitch.me/bands";
  // const url = "http://localhost:8080/bands";
  const res = await fetch(url);
  const bandData = await res.json();

  const topBand = bandData.slice(0, 14);
  const midBand = bandData.slice(14, 27);
  const botBand = bandData.slice(27, 69);

  return (
    <>
      <h1 className={`globalHeader`}>Lineup</h1>
      <div className={styles.programwrapper}>
        <div className={styles.topBandWrapper}>
          {topBand.map((data) => (
            <Link className={styles.topBandStyle} key={bandData} href={`/bands/${data.slug}`}>
              {data.name}
            </Link>
          ))}
        </div>
        <div className={styles.midBandWrapper}>
          {midBand.map((data) => (
            <Link className={styles.midBandStyle} key={bandData} href={`/bands/${data.slug}`}>
              {data.name}
            </Link>
          ))}
        </div>
        <div className={styles.botBandWrapper}>
          {botBand.map((data) => (
            <Link className={styles.botBandStyle} key={bandData} href={`/bands/${data.slug}`}>
              {data.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

// {
//   bandData.map((data) => (
//     <Link key={bandData} href={`/bands/${data.slug}`}>
//       {data.name}
//     </Link>
//   ));
// }
