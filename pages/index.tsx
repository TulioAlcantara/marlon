import { motion } from "framer-motion";
import React from "react";
import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Hero from "../components/Sections/Hero";
import Section1 from "../components/Sections/Section1";
import Section2 from "../components/Sections/Section2";
import Section3 from "../components/Sections/Section3";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const backdrop = useRef<HTMLDivElement>(null);
  const test = useRef<HTMLDivElement>(null);

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
    // backdrop.current!.style.filter = menuOpen
    //   ? "brightness(50%)"
    //   : "brightness(100%)";
    // backdrop.current!.style.transform = menuOpen
    //   ? "translateX(-50%)"
    //   : "translateX(0)";
  };

  return (
    <>
      <Menu onCloseMenu={toggleMenu} menuOpen={menuOpen}></Menu>
      {/* <motion.div
        ref={backdrop}
        className="transition-all ease-linear duration-300"
        initial={{ right: "-100vw" }}
        animate={{ right: 0 }}
      >
      </motion.div> */}
      <Header handleMenuToggle={toggleMenu}></Header>
      <Hero></Hero>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
    </>
  );
}
