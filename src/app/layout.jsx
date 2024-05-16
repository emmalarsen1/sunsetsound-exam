import "./styles/globals.css";
import "./styles/reset.css";
import { Libre_Baskerville } from "next/font/google";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";

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
        <Link rel="stylesheet" href="https://use.typekit.net/svd4gfu.css" />
        <body>
          <Header></Header>
          {children}
          <Footer></Footer>
        </body>
      </html>
    );
  }
}
