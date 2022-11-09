import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";

interface Props {
  menuOpen: boolean;
  onClickOutside: () => any;
}

export default function Menu({ menuOpen, onClickOutside }: Props) {
  // const menuAnimation = {
  //   hidden: { right: "-100vw" },
  //   show: {
  //     right: 0,
  //     transition: {
  //       ease: "linear",
  //     },
  //   },
  //   exit: { right: "-100vw" },
  // };

  const refMenu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (refMenu.current && !refMenu.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside]);

  return (
    <>
      {menuOpen && (
        <motion.div
          className="flex flex-col justify-between fixed w-100 md:w-1/2 h-screen p-8 xl:p-14  bg-white z-50"
          initial={{ right: "-100vw" }}
          animate={{ right: 0 }}
          exit={{ right: "-100vw" }}
          transition={{ duration: 0.5, ease: "linear" }}
          ref={refMenu}
        >
          <motion.h2
            className="fluid-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            O paradoxo curioso é que quando eu me aceito, então eu mudo.
          </motion.h2>

          <motion.ul
            className="flex flex-col gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <li className="flex justify-between pb-1 fluid-xl border-solid border-b-[1px] border-b-black">
              <span>Devo fazer terapia?</span>
              <span>01</span>
            </li>
            <li className="flex justify-between pb-1 fluid-xl border-solid border-b-[1px] border-b-black">
              <span>Ansiedade e depressão</span>
              <span>02</span>
            </li>
            <li className="flex justify-between pb-1 fluid-xl border-solid border-b-[1px] border-b-black">
              <span>Sobre mim</span>
              <span>03</span>
            </li>
            <li className="flex justify-between pb-1 fluid-xl border-solid border-b-[1px] border-b-black">
              <span>Por que comigo?</span>
              <span>04</span>
            </li>
            <li className="flex justify-between pb-1 fluid-xl border-solid border-b-[1px] border-b-black">
              <span>As minhas sessões</span>
              <span>05</span>
            </li>
          </motion.ul>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="fluid-lg mb-6">Agende uma consulta</p>
            <p className="fluid-lg flex mb-6">
              <BsInstagram className="mr-2"></BsInstagram>Instagram
            </p>
            <p className="fluid-lg flex">
              <BsWhatsapp className="mr-2"></BsWhatsapp>Whatsapp
            </p>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
