import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { BsWhatsapp, BsInstagram, BsX } from "react-icons/bs";

interface Props {
  menuOpen: boolean;
  onCloseMenu: () => any;
}

export default function Menu({ menuOpen, onCloseMenu }: Props) {
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
        onCloseMenu && onCloseMenu();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onCloseMenu]);

  return (
    <>
      {menuOpen && (
        <motion.div
          className="flex flex-col justify-between fixed w-full md:w-1/2 h-screen p-8 bg-white text-black z-50"
          initial={{ right: "-100vw" }}
          animate={{ right: 0 }}
          exit={{ right: "-100vw" }}
          transition={{ duration: 0.5, ease: "linear" }}
          ref={refMenu}
        >
          <div className="flex items-center justify-between text-gray">
            <motion.h2 className="fluid-2xl xl:fluid-3xl">Navegação</motion.h2>
            <button
              className="text-3xl 2xl:text-5xl"
              aria-label="Close menu"
              onClick={() => onCloseMenu()}
            >
              <BsX></BsX>
            </button>
          </div>

          <motion.h2
            className="fluid-2xl 2xl:text-6xl hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            "O paradoxo curioso é que quando eu me aceito, então eu mudo."
          </motion.h2>

          <motion.ul
            className="flex flex-col gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <li className="flex justify-between pb-1 fluid-lg 2xl:fluid-xl border-solid border-b-[1px] border-b-gray text-gray">
              <span>Devo fazer terapia?</span>
              <span>01</span>
            </li>
            <li className="flex justify-between pb-1 fluid-lg 2xl:fluid-xl border-solid border-b-[1px] border-b-gray text-gray">
              <span>Ansiedade e depressão</span>
              <span>02</span>
            </li>
            <li className="flex justify-between pb-1 fluid-lg 2xl:fluid-xl border-solid border-b-[1px] border-b-gray text-gray">
              <span>Sobre mim</span>
              <span>03</span>
            </li>
            <li className="flex justify-between pb-1 fluid-lg 2xl:fluid-xl border-solid border-b-[1px] border-b-gray text-gray">
              <span>Por que comigo?</span>
              <span>04</span>
            </li>
            <li className="flex justify-between pb-1 fluid-lg 2xl:fluid-xl border-solid border-b-[1px] border-b-gray text-gray">
              <span>As minhas sessões</span>
              <span>05</span>
            </li>
          </motion.ul>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="fluid-lg mb-6">Agende uma consulta:</p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between lg:justify-start gap-8">
              <p className="fluid-lg flex  items-center text-gray">
                <BsInstagram className="mr-2"></BsInstagram>Instagram
              </p>
              <p className="fluid-lg flex items-center text-gray">
                <BsWhatsapp className="mr-2"></BsWhatsapp>Whatsapp
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
