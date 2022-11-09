import { motion } from "framer-motion";
import { useEffect } from "react";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";

interface Props {
  menuOpen: boolean;
  handleMenuClose: () => any;
}

export default function ({ menuOpen, handleMenuClose }: Props) {
  // const menuAnimation = {
  //   hidden: { opacity: 0 },
  //   show: {
  //     opacity: 1,
  //     transition: {
  //       delayChildren: 0.5,
  //     },
  //   },
  // };

  return (
    <>
      {menuOpen && (
        <motion.div
          initial={{ right: -500 }}
          animate={{ right: 0 }}
          className="fixed w-1/2 h-screen p-20 bg-white z-50"
          onBlur={() => handleMenuClose}
        >
          <h2 className="text-6xl">
            O paradoxo curioso é que quando eu me aceito, então eu mudo.
          </h2>
          <ul>
            <li>01</li>
            <li>02</li>
            <li>03</li>
            <li>04</li>
            <li>05</li>
          </ul>

          <p>Agende uma consulta</p>
          <p>
            <BsInstagram className="mr-2"></BsInstagram>Instagram
          </p>
          <p>
            <BsWhatsapp className="mr-2"></BsWhatsapp>Whatsapp
          </p>
        </motion.div>
      )}
    </>
  );
}
