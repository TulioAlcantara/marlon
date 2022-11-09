import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Hero from "../components/Sections/Hero";
import Section1 from "../components/Sections/Section1/Section1";
import Section2 from "../components/Sections/Section2";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Menu handleMenuClose={toggleMenu} menuOpen={menuOpen}></Menu>
      <Header handleMenuToggle={toggleMenu}></Header>
      <Hero></Hero>
      <Section1></Section1>
      <Section1></Section1>
    </>
  );
}
