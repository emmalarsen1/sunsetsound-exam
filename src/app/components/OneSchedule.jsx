import Link from "next/link";
import styles from "../styles/Schedule.module.css";

function OneSchedule({ band }) {
  return (
    <div className={styles.img_textstyle}>
      {band.act === "break" ? (
        <h3 className={styles.break_text}>–– break ––</h3>
      ) : (
        <Link className={styles.color_container} href={`/bands/${band.slug}`}>
          <p className={styles.band_name}>{band.act}</p>
        </Link>
      )}
    </div>
  );
}

export default OneSchedule;
