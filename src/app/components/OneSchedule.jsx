import Link from "next/link";
import styles from "../styles/Schedule.module.css";
import Image from "next/image";

function OneSchedule({ band }) {
  return (
    <div className={styles.img_textstyle}>
      {band.act === "break" ? (
        <h3 className={styles.break_text}>–– break ––</h3>
      ) : (
        <div className={styles.img_overlay}>
          <div className={styles.color_overlay}></div>
          <Image src={band.logo && !band.logo.startsWith("https") ? `http://localhost:8080/logos/${band.logo}` : band.logo} alt="cover of the band" width={160} height={160} />
        </div>
      )}
      <p>{band.act === "break" ? "" : band.act}</p>
    </div>
  );
}

export default OneSchedule;
