import Link from "next/link";
import styles from "../styles/Button.module.css";

function Button({ href, buttontext, color }) {
  const buttonColor = color === "primary" ? styles.blå : styles.pink;
  return (
    <div>
      <Link className={`${styles.buttonstyle} ${styles.buttonColor}`} href={href}>
        {buttontext}
      </Link>
    </div>
  );
}
export default Button;
