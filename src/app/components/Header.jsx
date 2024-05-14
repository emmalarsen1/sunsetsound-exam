import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <header>
      <nav className={styles.nav}>
        <Link href={"./"}>Home</Link>
        <div>
          <Link href={"/booking"}>Get tickets</Link>
          <Link href={"/program"}>Program</Link>
          <Link href={"/tickets"}>Tickets</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
