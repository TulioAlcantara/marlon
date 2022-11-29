import { motion } from "framer-motion";

export default function Footer() {
  const sections = [
    { name: "Devo fazer terapia?", id: "section1" },
    { name: "Ansiedade e depressão", id: "section2" },
    { name: "Sobre mim", id: "section3" },
    { name: "Por que comigo?", id: "section1" },
    { name: "As minhas sessões", id: "section1" },
  ];

  const scrollTo = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-28 w-full bg-black ">
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
                <li>
                  <motion.button
                    className="menu-list__item"
                    whileHover={{
                      color: "#F8F9FA",
                      transition: { duration: 0.3 },
                    }}
                    onClick={() => scrollTo(section.id)}
                  >
                    <span>{section.name}</span>
                    <span>0{index + 1}</span>
                  </motion.button>
                </li>
              );
            })}
          </motion.ul>
        </div>

        <div className="w-full">
          <h2 className="fluid-2xl text-white mb-16">Agende uma consulta</h2>
          <h2 className="fluid-2xl text-white mb-16">Localização</h2>
        </div>
      </div>
    </footer>
  );
}
