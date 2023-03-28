import { motion } from "framer-motion";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

export default function Footer() {
  const sections = [
    { name: "Devo fazer terapia?", id: "section1" },
    { name: "Ansiedade e depressão", id: "section2" },
    { name: "Sobre mim", id: "section3" },
    { name: "Encontre um caminho", id: "section4" },
    { name: "Etapas do processo", id: "section5" },
  ];

  const scrollTo = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-16 xl:py-28 w-full bg-black ">
      <div className="container-screen flex flex-col xl:flex-row justify-start gap-16">
        <div className="w-full">
          <h2 className="fluid-2xl text-white mb-16">Continue navegando</h2>
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
                    className="menu-list__item
                    hover:text-white before:border-b-white"
                    onClick={() => scrollTo(section.id)}
                  >
                    <span>{section.name}</span>
                    <span>0{index + 1}</span>
                  </button>
                </li>
              );
            })}
          </motion.ul>
        </div>

        <div className="w-full">
          <h2 className="fluid-2xl text-white mb-14">Agende uma consulta</h2>
          <div className="flex flex-col md:flex-row justify-start gap-8">
            <motion.a
              whileHover={{
                color: "#F8F9FA",
                transition: { duration: 0.3 },
              }}
              href="https://instagram.com"
              className="fluid-xl flex  items-center text-gray"
            >
              <BsInstagram className="mr-2"></BsInstagram>Instagram
            </motion.a>
            <motion.a
              whileHover={{
                color: "#F8F9FA",
                transition: { duration: 0.3 },
              }}
              href="https://whatsapp.com"
              className="fluid-xl flex items-center text-gray"
            >
              <BsWhatsapp className="mr-2"></BsWhatsapp>Whatsapp
            </motion.a>
          </div>
          <h2 className="fluid-2xl text-white my-14">Localização</h2>
          <p className="fluid-xl text-gray">
            Setor Bela Vista, Rua T64-A, Nº 136, Ed. Monte Verde, Ap 104 -
            Goiânia, Goiás
          </p>
        </div>
      </div>
    </footer>
  );
}
