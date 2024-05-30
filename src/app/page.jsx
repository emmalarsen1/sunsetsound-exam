import styles from "./styles/page.module.css";
import MainButton from "./components/Button";

export default async function Home() {
  return (
    <>
      <div className={styles.indexWrap}>
        <div className={styles.indexTitles}>
          <h1 className={styles.indexHeaderTitle}>SUNSET SOUND</h1>
          <h2 className={styles.address}>Vibrant Music · Golden Horizons · Endless Memories</h2>
          <h3 className={styles.indexSubTitle}>Experience the Magic of Music Under the Summer Sky</h3>
        </div>
        <div className={styles.indexButWrap}>
          <MainButton href={"/booking"} buttontext="Get Tickets" color="primary" />
          <MainButton href={"/program"} buttontext="Lineup" color="primary" />
        </div>
      </div>
    </>
  );
}
