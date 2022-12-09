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
    { name: "Sobre mim", id: "section3" },
    { name: "Por que comigo?", id: "section4" },
    { name: "As minhas sessões", id: "section5" },
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
              &quot;O paradoxo curioso é que quando eu me aceito, então eu
              mudo.&quot;
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="block md:hidden"
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
                  href="https://instagram.com"
                  className="fluid-xl flex  items-center text-black"
                >
                  <BsInstagram className="mr-2"></BsInstagram>Instagram
                </motion.a>
                <motion.a
                  whileHover={{
                    color: "#000",
                    transition: { duration: 0.3 },
                  }}
                  href="https://whatsapp.com"
                  className="fluid-xl flex items-center text-black"
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
