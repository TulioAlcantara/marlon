import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

export default function Section3() {
  return (
    <>
      <section
        id="section3"
        className="h-[667px] md:h-[1024px] xl:h-[1747px] bg-mobileSection3 md:bg-tabletSection3 xl:bg-black xl:bg-none bg-cover bg-bottom"
      >
        <div className="container-screen  pb-16">
          <div
            className="card absolute
              max-w-[200px] md:max-w-[380px] 
              pt-[200px] md:pt-[538px] xl:pt-[907px]"
          >
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="card__title"
            >
              Frase bonita e charmosa de impacto aqui
            </motion.h2>
            <motion.p
              className="card__body"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 1 }}
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </motion.p>

            <motion.p
              className="card__cta"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, delay: 1 }}
              viewport={{ once: true }}
            >
              <BsArrowRight className="mr-2"></BsArrowRight>
              Conheça mais
            </motion.p>
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

          {/* 
          <motion.span
            className="section-number section-number-background z-0
            xl:top-[0px]
            xl:left-[400px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >
            01
          </motion.span> */}
        </div>
      </section>
    </>
  );
}
