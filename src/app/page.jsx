import styles from "./styles/page.module.css";
import layout from "./layout.jsx";
import { dummyData } from "./data/dummyData";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <p className={styles.jegerp}>hej</p>
        <Link href={"/program"}>Til program</Link>
        <h1>Ost</h1>{" "}
        {dummyData.map((data) => (
          <Link href={`/bands/${data.slug}`}>{data.name}</Link>
        ))}
      </div>
    </main>
  );
}
