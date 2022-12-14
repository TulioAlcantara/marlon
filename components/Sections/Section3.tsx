import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

export default function Section3() {
  return (
    <>
      <section
        id="section3"
        className="h-[1250px] md:h-[1200px] xl:h-[1747px] bg-mobileSection3 md:bg-tabletSection3 xl:bg-none bg-cover"
      >
        <div className="container-screen  pb-16">
          <div
            className="card absolute text-white xl:text-black
              max-w-[200px] md:max-w-[380px] 
              pt-[400px] md:pt-[660px] xl:pt-[907px]"
          >
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="card__title "
            >
              O paradoxo curioso é que quando aceito como sou,{" "}
              <b>me transformo</b>
            </motion.h2>
            <motion.p
              className="card__body "
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 1 }}
              viewport={{ once: true }}
            >
              Olá, tudo bem? Meu nome é <b>Marlon Andrade</b>. Sou graduado em
              psicologia pela PUC-Goiás. Trabalho com a abordagem TCC e
              atendimento clínico a crianças, adolescentes e adultos.
              <br></br>
              <br></br>
              Meu objetivo como psicólogo é promover a{" "}
              <b>mudança de pensamentos, sentimentos e comportamentos</b> que
              estejam te impedindo de alcançar seus objetivos ou trazendo
              sofrimento, em qualquer área de sua vida.
              <br></br>
              <br></br>
              CRP 1235678
            </motion.p>

            {/* <motion.p
              className="card__cta text-black"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, delay: 1 }}
              viewport={{ once: true }}
            >
              <BsArrowRight className="mr-2"></BsArrowRight>
              Conheça mais
            </motion.p> */}
          </div>

          <motion.img
            className="hidden xl:block absolute right-0 z-10
            top-0 xl:top-[552px]"
            initial={{ opacity: 0, scale: 0.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            alt="Devo fazer terapia?"
            src="/images/section3/section-03-desktop.png"
          ></motion.img>

          <motion.img
            initial={{ opacity: 0, scale: 0.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="absolute 
            hidden xl:block
            w-fit z-30
            top-[200px] 
            left-[-100px]"
            srcSet="/images/section3/section-03-number.png"
          ></motion.img>
        </div>
      </section>
    </>
  );
}
