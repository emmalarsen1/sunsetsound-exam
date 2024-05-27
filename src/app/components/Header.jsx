"use client";
import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const isActive = (href) => {
    return router.pathname === href ? styles.active : "";
  };

  const [state, setState] = useState("close");

  const openClose = () => {
    if (state == "close") {
      setState("open");
    } else {
      setState("close");
    }
  };

  return (
    <header>
      <nav className={styles.nav}>
        <Link href={"/"} passHref>
          <Image className={styles.logo} src="ss_logo.svg" alt="logo" width={50} height={50}></Image>
        </Link>
        <div className={styles.headermenu}>
          <Link href={"/program"}>
            <a className={isActive("/program")}>Lineup</a>
          </Link>
          <Link href={"/tickets"}>
            <a className={isActive("/program")}>Tickets</a>
          </Link>
          <Link href={"/schedule"}>
            <a className={isActive("/program")}>Schedule</a>
          </Link>
        </div>
        <div className={styles.burger_wrapper} onClick={openClose}>
          <div className={styles.hamburger + " " + styles[state]}></div>
        </div>
      </nav>

      <div className={styles.menu + " " + styles[state]}>
        <ul className={styles.menu_links}>
          <div className={styles.menu_links_wrapper} onClick={() => setState("close")}>
            <Link href={"/"}>
              <a className={isActive("/")}>Home</a>
            </Link>
            <Link href={"/program"}>
              <a className={isActive("/program")}>Program</a>
            </Link>
            <Link href={"/tickets"}>
              <a className={isActive("/tickets")}>Tickets</a>
            </Link>
            <Link href={"/schedule"}>
              <a className={isActive("/schedule")}>Schedule</a>
            </Link>
          </div>
        </ul>
      </div>
    </header>
  );
}

export default Header;
