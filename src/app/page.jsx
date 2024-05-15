import styles from "./styles/page.module.css";
import layout from "./layout.jsx";
import { dummyData } from "./data/dummyData";
import Link from "next/link";

export default async function Home() {
  const url = "http://localhost:8080/bands";
  const res = await fetch(url);
  const bandData = await res.json();
  console.log(bandData);

  return (
    <main>
      <div className={styles.indexWrap}>
        <div className={styles.indexTitles}>
          <h1>SUNSET SUNSOUND JUBII</h1>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, aspernatur magnam totam saepe blanditiis impedit nesciunt at nobis. Et beatae odio corrupti quia quibusdam ipsum repudiandae impedit nihil delectus praesentium.</h2>
          <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda iste eius autem, pariatur animi at itaque ex sunt fuga optio aliquid, in ipsa nobis sit similique adipisci facere unde nam.</h2>
        </div>
      </div>
      <div className={styles.indexButWrap}>
        <Link className={styles.indexButton} href={"/booking"}>
          Get Tickets
        </Link>
        <Link className={styles.indexButton} href={"/program"}>
          Program
        </Link>
      </div>
      {bandData.map((data) => (
        <Link href={`/bands/${data.slug}`}>{data.name}</Link>
      ))}
    </main>
  );
}