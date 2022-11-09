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
          initial={{ right: "-100vw" }}
          animate={{ right: 0 }}
          transition={{ duration: 1, delayChildren: 1 }}
          className="flex flex-col justify-between fixed w-1/2 h-screen p-20 bg-white z-50"
          onBlur={() => handleMenuClose}
        >
          <h2 className="xl:text-4xl 2xl:text-6xl">
            O paradoxo curioso é que quando eu me aceito, então eu mudo.
          </h2>
          <ul className="flex flex-col gap-8">
            <li className="flex justify-between pb-1 text-2xl border-solid border-b-[1px] border-b-black">
              <span>Devo fazer terapia?</span>
              <span>01</span>
            </li>
            <li className="flex justify-between pb-1 text-2xl border-solid border-b-[1px] border-b-black">
              <span>Ansiedade e depressão</span>
              <span>02</span>
            </li>
            <li className="flex justify-between pb-1 text-2xl border-solid border-b-[1px] border-b-black">
              <span>Sobre mim</span>
              <span>03</span>
            </li>
            <li className="flex justify-between pb-1 text-2xl border-solid border-b-[1px] border-b-black">
              <span>Por que comigo?</span>
              <span>04</span>
            </li>
            <li className="flex justify-between pb-1 text-2xl border-solid border-b-[1px] border-b-black">
              <span>As minhas sessões</span>
              <span>05</span>
            </li>
          </ul>

          <div>
            <p className="text-2xl mb-6">Agende uma consulta</p>
            <p className="text-3xl flex mb-6">
              <BsInstagram className="mr-2"></BsInstagram>Instagram
            </p>
            <p className="text-3xl flex">
              <BsWhatsapp className="mr-2"></BsWhatsapp>Whatsapp
            </p>
          </div>
        </motion.div>
      )}
    </>
  );
}
