import styles from "./styles/page.module.css";
import layout from "./layout.jsx";
import Link from "next/link";
import Button from "./components/Button";

export default async function Home() {
  return (
    <>
      <div className={styles.indexWrap}>
        <div className={styles.indexTitles}>
          <h1 className={styles.indexHeaderTitle}>SUNSET SOUND</h1>
          <h3 className={styles.indexSubTitle}>SUMMER MUSIC FESTIVAL 2024</h3>
          <h2>Main Street 25, 7800 Foocity Denmark</h2>
        </div>
        <div className={styles.indexButWrap}>
          <Button href={"/booking"} buttontext="Get Tickets" color="primary" />
          <Button href={"/program"} buttontext="Lineup" color="primary" />
        </div>
      </div>
    </>
  );
}
