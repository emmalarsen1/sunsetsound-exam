import React from "react";
import { dummyData } from "@/app/data/dummyData";

export async function generateStaticParams() {
  return dummyData.map((post) => ({
    slug: post.slug,
  }));
}

export default async function page({ params }) {
  const { slug } = params;

  const oneBand = dummyData.filter((oneRule) => oneRule.slug === slug);
  const data = oneBand[0];
  return (
    <>
      <section>
        <h1>{data.name}</h1>
        <p>{data.genre}</p>
      </section>
    </>
  );
}
