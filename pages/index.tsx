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
  const test = useRef<HTMLDivElement>(null);
  const sectionContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    changeBackdrop();
  }, [menuOpen]);

  const toggleMenu = (scroll?: string) => {
    setMenuOpen(!menuOpen);
    console.log(scroll);
    if (scroll) {
      const element = document.getElementById(scroll);
      element?.scrollIntoView({ behavior: "smooth" });
    }
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
        <title>Marlon</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
