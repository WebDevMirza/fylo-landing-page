import Head from "next/head";
import Styles from "../styles/Home.module.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

import { Open_Sans, Raleway } from "@next/font/google";
import Info from "@/components/Info";
import Action from "@/components/Action";
import Footer from "@/components/Footer";
const openSans = Open_Sans({ weight: "400", subsets: ["latin"] });
const raleway = Raleway({ weight: ["400", "700"], subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Fylo Landing Page by Mirza Monirul Alam</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <header className={raleway.className + " " + Styles.siteHeader}>
        <Header />
      </header>
      <main className={openSans.className + " " + Styles.main}>
        <Hero />
        <Info />
        <Action />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
