import styles from "../app/styles/not-found.module.css";
import Link from "next/link";
import Button from "./components/Button";

export default function NotFound() {
  return (
    <div className={styles.center}>
      <h1 className={`globalHeader`}>404</h1>
      <h3 className={styles.subtitle}>OPS! SOMETHING WENT WRONG</h3>
      <p>Go back to home page</p>
      <div className={styles.buttonspace}>
        <Button href={"/"} buttontext="HOME" />
      </div>
    </div>
  );
}
