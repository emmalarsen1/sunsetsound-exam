import React from "react";
import { dummyData } from "@/app/data/dummyData";
import Image from "next/image";

export async function generateStaticParams() {
  // const res = await fetch("https://broken-tinted-wombat.glitch.me/bands");
  const res = await fetch("http://localhost:8080/bands");
  const pages = await res.json();

  const paths = pages.map((page) => {
    return { slug: page.slug };
  });

  return paths;
}

export default async function page({ params }) {
  const { slug } = params;

  // const url = `https://broken-tinted-wombat.glitch.me/bands?slug=${slug}`;
  const url = `http://localhost:8080/bands?slug=${slug}`;
  const res = await fetch(url);

  const bandData = await res.json();
  const oneBand = bandData.filter((oneRule) => oneRule.slug === slug);
  const data = oneBand[0];
  console.log(data);

  return (
    <>
      <section>
        <h1>{data.name}</h1>
        <p>{data.members}</p>
        <p>{data.genre}</p>
        <p>{data.bio}</p>
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
