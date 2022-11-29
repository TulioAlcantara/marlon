import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { BsWhatsapp, BsInstagram, BsX } from "react-icons/bs";

interface Props {
  menuOpen: boolean;
  onCloseMenu: (scroll?: string) => any;
}

export default function Menu({ menuOpen, onCloseMenu }: Props) {
  const refMenu = useRef<HTMLDivElement>(null);

  const sections = [
    { name: "Devo fazer terapia?", id: "section1" },
    { name: "Ansiedade e depressão", id: "section2" },
    { name: "Sobre mim", id: "section1" },
    { name: "Por que comigo?", id: "section1" },
    { name: "As minhas sessões", id: "section1" },
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
              className="fluid-2xl xl:fluid-3xl"
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
              className="text-3xl 2xl:text-5xl"
              aria-label="Close menu"
              onClick={() => onCloseMenu()}
            >
              <BsX></BsX>
            </motion.button>
          </div>

          <motion.h2
            className="fluid-xl 2xl:text-6xl hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            "O paradoxo curioso é que quando eu me aceito, então eu mudo."
          </motion.h2>

          <motion.ul
            className="menu-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {sections.map((section, index) => {
              return (
                <li>
                  <motion.button
                    className="menu-list__item"
                    whileHover={{
                      color: "#000",
                      transition: { duration: 0.3 },
                    }}
                    onClick={() => onCloseMenu(section.id)}
                  >
                    <span>{section.name}</span>
                    <span>0{index + 1}</span>
                  </motion.button>
                </li>
              );
            })}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <p className="fluid-lg mb-6">Agende uma consulta:</p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between lg:justify-start gap-8">
              <motion.a
                whileHover={{
                  color: "#000",
                  transition: { duration: 0.3 },
                }}
                href="https://instagram.com"
                className="fluid-lg flex  items-center text-gray"
              >
                <BsInstagram className="mr-2"></BsInstagram>Instagram
              </motion.a>
              <motion.a
                whileHover={{
                  color: "#000",
                  transition: { duration: 0.3 },
                }}
                href="https://whatsapp.com"
                className="fluid-lg flex items-center text-gray"
              >
                <BsWhatsapp className="mr-2"></BsWhatsapp>Whatsapp
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
