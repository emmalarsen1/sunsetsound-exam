import "./styles/globals.css";
import "./styles/reset.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";
import { Libre_Baskerville } from "next/font/google";

export const metadata = {
  title: "Sunset sound festival",
  description: "Music festival",
};

export default async function RootLayout({ children }) {
  // const url = "https://broken-tinted-wombat.glitch.me/bands";
  // const res = await fetch(url);
  // const bandData = await res.json();
  // console.log(bandData);
  {
    return (
      <html lang="en">
        <head>
          <meta name="robots" content="noindex"></meta>
          <link rel="stylesheet" href="https://use.typekit.net/svd4gfu.css" />
        </head>
        <body>
          <Header></Header>
          <main>{children}</main>
          <Footer></Footer>
        </body>
      </html>
    );
  }
}
