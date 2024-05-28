import Link from "next/link";
import styles from "../styles/Button.module.css";

function Button({ href, buttontext, color }) {
  const buttonColor = color === "primary" ? styles.yellow : styles.pink;
  return (
    <div>
      <Link className={`${styles.buttonstyle} ${buttonColor}`} href={href}>
        {buttontext}
      </Link>
    </div>
  );
}
export default Button;
