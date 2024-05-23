import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import Image from "next/image";

function Header() {
  return (
    <header>
      <nav className={styles.nav}>
        <Link href={"/"} passHref>
          <Image className={styles.logo} src="ss_logo.svg" alt="logo" width={50} height={50}></Image>
        </Link>

        <div className={styles.headermenu}>
          <Link href={"/program"}>Program</Link>
          <Link href={"/tickets"}>Tickets</Link>
          <Link href={"/schedule"}>Schedule</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
