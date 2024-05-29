import styles from "../app/styles/not-found.module.css";
import Link from "next/link";
import MainButton from "./components/Button";

export default function NotFound() {
  return (
    <div className={styles.center}>
      <h1 className={`globalHeader`}>404</h1>
      <h3 className={styles.subtitle}>OPS! SOMETHING WENT WRONG</h3>
      <p>Go back to home page</p>
      <div className={styles.buttonspace}>
        <MainButton href={"/"} buttontext="HOME" color="primary" />
      </div>
    </div>
  );
}
