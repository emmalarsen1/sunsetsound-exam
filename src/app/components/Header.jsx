"use client";
import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";

function Header() {
  const pathname = usePathname();

  const [state, setState] = useState("close");

  const openClose = () => {
    if (state == "close") {
      setState("open");
    } else {
      setState("close");
    }
  };

  // mediaquerys //
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 601px) and (max-width: 1024px)",
  });
  const isDesktop = useMediaQuery({ query: "(min-width: 1025px)" });
  //
  return (
    <header className={isMobile ? styles.mobileContainer : isTablet ? styles.tabletContainer : styles.desktopContainer}>
      <nav className={styles.nav}>
        <Link href={"/"} passHref>
          <Image className={styles.logo} src="ss_logo.svg" alt="logo" width={50} height={50}></Image>
        </Link>
        <div className={styles.headermenu}>
          <Link className={`link ${pathname === "/program" ? "active" : ""}`} href="/program">
            Lineup
          </Link>
          <Link className={`link ${pathname === "/tickets" ? "active" : ""}`} href="/tickets">
            Tickets
          </Link>
          <Link className={`link ${pathname === "/schedule" ? "active" : ""}`} href="/schedule">
            Schedule
          </Link>
        </div>
        <div className={styles.burger_wrapper} onClick={openClose}>
          <div className={styles.hamburger + " " + styles[state]}></div>
        </div>
      </nav>

      <div className={styles.menu + " " + styles[state]}>
        <ul className={styles.menu_links}>
          <div className={styles.menu_links_wrapper} onClick={() => setState("close")}>
            <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
              Home
            </Link>
            <Link className={`link ${pathname === "/program" ? "active" : ""}`} href={"/program"}>
              Lineup
            </Link>
            <Link className={`link ${pathname === "/tickets" ? "active" : ""}`} href={"/tickets"}>
              Tickets
            </Link>
            <Link className={`link ${pathname === "/schedule" ? "active" : ""}`} href={"/schedule"}>
              Schedule
            </Link>
          </div>
        </ul>
      </div>
    </header>
  );
}

export default Header;
