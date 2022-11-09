import { motion } from "framer-motion";

export default function Section1() {
  return (
    <>
      <section className="h-[900px] xl:h-[1744px] bg-gradient-1">
        <div className="container-screen pb-16">
          <div className="card pt-[540px] xl:pt-[755px] 2xl:pt-[653px] xl:sticky xl:top-8">
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="card__title text-white"
            >
              Devo fazer terapia?
            </motion.h2>
            <motion.p
              className="card__body text-white"
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
              className="card__cta text-white "
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, delay: 1 }}
              viewport={{ once: true }}
            >
              <img className="float-left mr-4" src="/icons/arrow.svg"></img>
              Explore como funciona o processo terapêutico
            </motion.p>
          </div>

          <motion.img
            className="absolute right-0 z-0 object-cover
              top-[93px] xl:top-[464px] 2xl:top-[380px]
              w-[200px] xl:w-[679px] 2xl:w-[985px]
              h-[360px] xl:h-[864px] 2xl:h-[1080px]"
            src="/images/img-01.png"
            initial={{ opacity: 0, scale: 0.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          ></motion.img>
          {/* 
          <motion.span
            className="section-number section-number-background
            2xl:top-[173px]
            2xl:left-[373px]"
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
