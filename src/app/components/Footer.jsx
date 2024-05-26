"use client";
import React from "react";
import styles from "../styles/Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

function Footer() {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 601px) and (max-width: 1024px)",
  });
  const isDesktop = useMediaQuery({ query: "(min-width: 1025px)" });

  return (
    <footer
      className={
        isMobile
          ? styles.mobileContainer
          : isTablet
          ? styles.tabletContainer
          : styles.desktopContainer
      }
    >
      <div className={styles.footerContainer}>
        <ul className={styles.left}>
          <li>
            <p className={styles.footerTitle}>SOME</p>
          </li>
          <li>
            {" "}
            <Link href={"/"}>Instagram</Link>
          </li>
          <li>
            {" "}
            <Link href={"/"}>Twitter</Link>
          </li>
          <li>
            {" "}
            <Link href={"/"}>Youtube</Link>
          </li>
          <li>
            {" "}
            <Link href={"/"}>TikTok</Link>
          </li>
        </ul>
        <div className={styles.logo}>
          <Link href={"/"} passHref>
            <Image
              className={styles.logo}
              src="/ss_logo.svg"
              alt="logo"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <ul className={styles.right}>
          <li>
            <p className={styles.footerTitle}>QUICK LINKS</p>
          </li>
          <li>
            {" "}
            <Link href={"/program"}>Program</Link>
          </li>
          <li>
            {" "}
            <Link href={"/tickets"}>Tickets</Link>
          </li>
          <li>
            {" "}
            <Link href={"/schedule"}>Schedule</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
