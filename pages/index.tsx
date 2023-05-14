import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";
import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Hero from "../components/Sections/Hero";
import Section1 from "../components/Sections/Section1";
import Section2 from "../components/Sections/Section2";
import Section3 from "../components/Sections/Section3";
import Section4 from "../components/Sections/Section4";
import Section5 from "../components/Sections/Section5";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const backdrop = useRef<HTMLDivElement>(null);
  const sectionContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    changeBackdrop();
  }, [menuOpen]);

  const toggleMenu = (scroll?: string) => {
    setMenuOpen(!menuOpen);
    if (scroll) {
      scrollToSection(scroll);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const changeBackdrop = () => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    backdrop.current!.style.filter = menuOpen
      ? "brightness(50%)"
      : "brightness(100%)";
    backdrop.current!.style.transform = menuOpen
      ? "translateX(-50%)"
      : "translateX(0)";
  };

  return (
    <>
      <Head>
        <title>Psicólogo Marlon</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Meu nome é Marlon Andrade, psicólogo especializado em terapia cognitivo-comportamental para adolescentes e adultos."
        ></meta>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="/site.webmanifest"></link>
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg"
          color="#5bbad5"
        ></link>
        <meta name="msapplication-TileColor" content="#da532c"></meta>
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <Menu onCloseMenu={toggleMenu} menuOpen={menuOpen}></Menu>
      <Header
        handleMenuToggle={toggleMenu}
        sectionContainerRef={sectionContainerRef}
      ></Header>
      <motion.div
        ref={backdrop}
        className="transition-all ease-linear duration-300"
        initial={{ right: "-100vw" }}
        animate={{ right: 0 }}
      >
        <Hero></Hero>
        <div ref={sectionContainerRef} className="gradient-background">
          <Section1></Section1>
          <Section2></Section2>
          <Section3></Section3>
          <Section4></Section4>
          <Section5></Section5>
        </div>
        <Footer></Footer>
      </motion.div>
    </>
  );
}
