import styles from "./styles/page.module.css";
import layout from "./layout.jsx";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <div className={styles.indexWrap}>
        <div className={styles.indexTitles}>
          <h1>SUNSET SUNSOUND JUBII</h1>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, aspernatur magnam totam saepe blanditiis impedit nesciunt at nobis. Et beatae odio corrupti quia quibusdam ipsum repudiandae impedit nihil delectus praesentium.</h2>
          <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda iste eius autem, pariatur animi at itaque ex sunt fuga optio aliquid, in ipsa nobis sit similique adipisci facere unde nam.</h2>
        </div>
        <div className={styles.indexButWrap}>
          <Link className={styles.indexButton} href={"/booking"}>
            Get Tickets
          </Link>
          <Link className={styles.indexButton} href={"/program"}>
            Program
          </Link>
        </div>
      </div>
    </>
  );
}
