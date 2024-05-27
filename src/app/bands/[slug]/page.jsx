import React from "react";
import combinedData from "@/lib/combineData";
import { getData } from "@/lib/data";
import Image from "next/image";
import styles from "./Bandname.module.css";
import NotFound from "@/app/not-found";

export async function generateStaticParams() {
  // const res = await fetch("https://broken-tinted-wombat.glitch.me/bands");
  // const res = await fetch("http://localhost:8080/bands");
  // const pages = await res.json();
  // const paths = pages.map((page) => {
  //   return { slug: page.slug };
  // });
  // return paths;

  const data = await getData("bands");
  return data.map((oneBand) => ({
    slug: oneBand.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const fetchData = await getData("bands");
  const filterData = fetchData.filter((oneBand) => oneBand.slug === slug);
  const data = filterData[0];
}

// funktion til opdeling af band members:
function formatBandMembers(members) {
  const len = members.length;
  if (len === 0) {
    return "";
  } else if (len === 1) {
    return members[0];
  } else if (len === 2) {
    return `${members[0]} & ${members[1]}`;
  } else {
    return `${members.slice(0, -1).join(", ")} & ${members[len - 1]}`;
  }
}

export default async function page({ params }) {
  // const url = `https://broken-tinted-wombat.glitch.me/bands?slug=${slug}`;
  // const url = `http://localhost:8080/bands?slug=${slug}`;
  // const res = await fetch(url);
  // const bandData = await res.json();
  // const oneBand = bandData.filter((oneRule) => oneRule.slug === slug);
  // const data = oneBand[0];

  const { slug } = params;
  const fetchData = await combinedData();
  const filterData = Object.entries(fetchData).map((venue) => {
    const filtered = Object.entries(venue[1]).map((oneDay) => oneDay[1].filter((band) => band.slug === slug));
    return filtered;
  });

  const dataFlattend = filterData.flat(Infinity);
  const data = dataFlattend[0];
  const dayFullName = {
    mon: "Monday",
    tue: "Tuesday",
    wed: "Wednesday",
    thu: "Thursday",
    fri: "Friday",
    sat: "Saturday",
    sun: "Sunday",
  };

  if (!data) return NotFound();
  const formattedMembers = formatBandMembers(data.members);

  return (
    <>
      <h1 className={`${styles.bandName} globalHeader`}>{data.act}</h1>
      <section className={styles.bandWrapper}>
        <div>
          <div className={styles.infoWrapper}>
            <p>
              {data.start}-{data.end}
            </p>
            <p>{dayFullName[data.day]}</p>
            <p>{data.venue}</p>
          </div>
          <div>
            <p>{data.bio}</p>
            <p>
              Let {data.act} take you on a {data.genre}-journey, guided by the incredible talents of {formattedMembers}.
            </p>
          </div>
        </div>
        <Image className={styles.bandImage} src={data.logo && !data.logo.startsWith("https") ? `http://localhost:8080/logos/${data.logo}` : data.logo} alt="cover of the band" width={160} height={160} />
      </section>
    </>
  );
}

// Noget Chatgpt fetch:
// export async function generateStaticParams() {
//   const url = "http://localhost:8080/bands";
//   const res = await fetch(url);
//   const bandData = await res.json();
//   console.log(bandData);

//   return bandData.map((post) => ({
//     params: {
//       slug: post.slug,
//     },
//   }));
// }

// export async function page({ params }) {
//   const { slug } = params;

//   const url = `http://localhost:8080/bands/${slug}`;
//   const res = await fetch(url);
//   const data = await res.json();

// ORiginal fetch:
// export async function generateStaticParams() {
//   const url = "http://localhost:8080/bands";
//   const res = await fetch(url);
//   const bandData = await res.json();
//   console.log(bandData);

//   return bandData.map((post) => ({
//     slug: post.slug,
//   }));
// }

// export default async function page({ params }) {
//   const { slug } = params;

//   const oneBand = bandData.filter((oneRule) => oneRule.slug === slug);
//   const data = oneBand[0];
//   return (
