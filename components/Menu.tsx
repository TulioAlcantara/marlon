import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { BsWhatsapp, BsInstagram, BsX } from "react-icons/bs";
import { Urls } from "../constants/urls";

interface Props {
  menuOpen: boolean;
  onCloseMenu: (scroll?: string) => any;
}

export default function Menu({ menuOpen, onCloseMenu }: Props) {
  const refMenu = useRef<HTMLDivElement>(null);

  const sections = [
    { name: "Sobre mim", id: "section1" },
    { name: "Etapas do processo", id: "section2" },
    { name: "Devo fazer terapia?", id: "section3" },
    { name: "Ansiedade e depressão", id: "section4" },
    { name: "Encontre um caminho", id: "section5" },
  ];

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
          className="menu"
          initial={{ right: "-100vw" }}
          animate={{ right: 0 }}
          exit={{ right: "-100vw" }}
          transition={{ duration: 0.3, ease: "linear" }}
          ref={refMenu}
        >
          <div className="flex items-center justify-between text-gray">
            <motion.h2
              className="fluid-xl uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Navegação
            </motion.h2>
            <motion.button
              whileHover={{
                color: "#000",
                transition: { duration: 0.3 },
              }}
              className="fluid-2xl"
              aria-label="Close menu"
              onClick={() => onCloseMenu()}
            >
              <BsX></BsX>
            </motion.button>
          </div>

          <div className="flex flex-col justify-around h-full">
            <motion.ul
              className="menu-list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {sections.map((section, index) => {
                return (
                  <li className="relative" key={index}>
                    <button
                      className="menu-list__item"
                      onClick={() => onCloseMenu(section.id)}
                    >
                      <span>{section.name}</span>
                      <span>0{index + 1}</span>
                    </button>
                  </li>
                );
              })}
            </motion.ul>

            <motion.h2
              className="fluid-2xl min-[1920px]:fluid-3xl hidden md:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              &quot;O paradoxo curioso é que quando aceito como sou, <b>me transformo</b>.&quot;
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="block"
            >
              <p className="fluid-xl font-heading mb-6 text-gray">
                Agende sua consulta:
              </p>
              <div className="flex flex-row items-center justify-between lg:justify-start gap-8 xl:gap-10">
                <motion.a
                  whileHover={{
                    color: "#000",
                    transition: { duration: 0.3 },
                  }}
                  href={Urls.instagram} target="_blank"
                  className="fluid-lg md:fluid-xl flex  items-center text-black xl:text-gray"
                >
                  <BsInstagram className="mr-2"></BsInstagram>Instagram
                </motion.a>
                <motion.a
                  whileHover={{
                    color: "#000",
                    transition: { duration: 0.3 },
                  }}
                  href={Urls.whatsapp} target="_blank"
                  className="fluid-lg md:fluid-xl flex items-center text-black xl:text-gray"
                >
                  <BsWhatsapp className="mr-2"></BsWhatsapp>Whatsapp
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </>
  );
}
