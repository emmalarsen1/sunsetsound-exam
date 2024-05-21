import styles from "../app/styles/Fourofour.modules.css";
import Link from "next/link";

export default function Error() {
  return (
    <div>
      <h1>404</h1>
      <h3>OPS! SOMETHING WENT WORNG</h3>
      <p>Go back to home page</p>
      <button>
        <Link className={styles.indexButton} href={"/"}>
          HOME
        </Link>
      </button>
    </div>
  );
}
