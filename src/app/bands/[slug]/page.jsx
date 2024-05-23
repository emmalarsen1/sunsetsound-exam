import React from "react";
import { dummyData } from "@/app/data/dummyData";
import Image from "next/image";
import styles from "./Bandname.module.css";

export async function generateStaticParams() {
  // const res = await fetch("https://broken-tinted-wombat.glitch.me/bands");
  const res = await fetch("http://localhost:8080/bands");
  const pages = await res.json();

  const paths = pages.map((page) => {
    return { slug: page.slug };
  });

  return paths;
}
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
  const { slug } = params;

  // const url = `https://broken-tinted-wombat.glitch.me/bands?slug=${slug}`;
  const url = `http://localhost:8080/bands?slug=${slug}`;
  const res = await fetch(url);

  const bandData = await res.json();
  const oneBand = bandData.filter((oneRule) => oneRule.slug === slug);
  const data = oneBand[0];
  const formattedMembers = formatBandMembers(data.members);
  console.log(data);

  return (
    <>
      <section>
        <h1 className={styles.bandName}>{data.name}</h1>
        <div className={styles.bandWrapper}>
          <div>
            <p>Dag, Tid, Scene</p>
            <p>{data.bio}</p>
            <p>
              Let {data.name} take you on a {data.genre}-journey, guided by the incredible talents of {formattedMembers}.
            </p>
          </div>
          <Image className={styles.bandImage} src={data.logo && !data.logo.startsWith("https") ? `http://localhost:8080/logos/${data.logo}` : data.logo} alt="cover of the band" width={160} height={160} />
        </div>
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
