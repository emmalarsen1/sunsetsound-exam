import Link from "next/link";
import styles from "../styles/Schedule.module.css";

function OneSchedule({ band }) {
  return (
    <div className={styles.img_textstyle}>
      {band.act === "break" ? (
        <h3 className={styles.break_text}>–– break ––</h3>
      ) : (
        <div className={styles.color_container}>
          <Link href={`/bands/${band.slug}`}>
            <p>{band.act}</p>
          </Link>
        </div>
      )}
    </div>
  );
}

export default OneSchedule;
