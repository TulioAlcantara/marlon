import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

export default function Section5() {
  return (
    <>
      <section
        id="section5"
        className="h-[668px] md:h-[1016px] xl:h-[1406px] mb-20 bg-mobileSection5 md:bg-tabletSection5 xl:bg-none bg-cover"
      >
        <div className="container-screen  pb-16">
          <div
            className="card absolute text-black
            card-backdrop-5 xl:bg-transparent
              max-w-[250px] md:max-w-[458px] 
              mt-[273px] md:mt-[500px] xl:mt-[758px]
              mx-auto right-0 left-0 xl:left-auto xl:mr-16
              p-6 xl:p-0"
          >
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="card__title "
            >
              Conheça as etapas do processo
            </motion.h2>
            <motion.p
              className="card__body "
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 1 }}
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </motion.p>
          </div>

          <motion.img
            className="hidden xl:block absolute left-0 z-10
            top-0 xl:top-[334px]"
            initial={{ opacity: 0, scale: 0.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            alt="Devo fazer terapia?"
            src="/images/section5/section-05-desktop.png"
          ></motion.img>

          <motion.img
            initial={{ opacity: 0, scale: 0.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="absolute 
            block md:hidden xl:block
            w-[308px] xl:w-fit z-0
            top-[85px] xl:top-[485px] 
            left-[20px] xl:left-[592px]"
            srcSet="/images/section5/section-05-number.svg"
          ></motion.img>
        </div>
      </section>
    </>
  );
}
