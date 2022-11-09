import { motion } from "framer-motion";
import React from "react";
import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Hero from "../components/Sections/Hero";
import Section1 from "../components/Sections/Section1/Section1";
import Section2 from "../components/Sections/Section2";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const backdrop = useRef<HTMLDivElement>(null);

  useEffect(() => {
    changeBackdrop();
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
      <Menu handleMenuClose={toggleMenu} menuOpen={menuOpen}></Menu>
      {/* <motion.div
        ref={backdrop}
        className="transition-all ease-linear duration-500"
        initial={{ right: "-100vw" }}
        animate={{ right: 0 }}
      >
        
      </motion.div> */}

      <Header handleMenuToggle={toggleMenu}></Header>
      <Hero></Hero>
      <Section1></Section1>
      <Section2></Section2>
    </>
  );
}
