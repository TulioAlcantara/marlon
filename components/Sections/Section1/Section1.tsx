import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

export default function Section1() {
  return (
    <>
      <section className="h-[900px] md:h-[1144px] xl:h-[1744px] bg-gradient-1">
        <div className="container-screen  pb-16">
          <div
            className="card
              w-full xl:w-[620px] 
              pt-[540px] md:pt-[812px] xl:pt-[755px]"
          >
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="card__title"
            >
              Devo fazer terapia?
            </motion.h2>
            <motion.p
              className="card__body"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 1 }}
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
              feugiat erat, sed ullamcorper urna. Sed imperdiet nunc sit amet
              felis pulvinar bibendum.
            </motion.p>

            <motion.p
              className="card__cta"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, delay: 1 }}
              viewport={{ once: true }}
            >
              <BsArrowRight className="mr-2"></BsArrowRight>
              Explore como funciona o processo terapêutico
            </motion.p>
          </div>

          <motion.img
            className="absolute right-0 z-10 object-cover
              top-[93px] md:top-[125px] xl:top-[464px]
              w-[200px] md:w-[392px] xl:w-[679px] 
              h-[360px] md:h-[655px] xl:h-[864px]"
            src="/images/img-01.png"
            initial={{ opacity: 0, scale: 0.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          ></motion.img>

          {/* <motion.span
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
