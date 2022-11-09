import { motion } from "framer-motion";

export default function Section2() {
  return (
    <>
      <section className="h-[1128px] md:h-[1328px] xl:h-[1516px] 2xl:h-[2128px] bg-gradient-1">
        <div className="container-screen pb-16">
          <div
            className="card card-backdrop absolute right-0
              w-[259px] md:w-[475px] xl:w-[775px] 2xl:w-[976px]
              mt-[400px] md:mt-[620px] xl:mt-[735px] 2xl:mt-[1300px]
              pr-[35px] md:pr-[70px] xl:pr-[763px] 2xl:pr-[263px]
              py-14
              pl-8 md:pl-24 xl:pl-32
              "
          >
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="card__title text-white"
            >
              Ansiedade e depressão
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
              Conheça mais
            </motion.p>
          </div>

          <motion.img
            className="absolute left-0 z-0 object-cover
              top-[93px] md:top-[125px] xl:top-[464px] 2xl:top-[380px]
              w-[304px] md:w-[671px] xl:w-[940px] 2xl:w-[1381px]
              h-[806px] md:h-[880px] xl:h-[1054px] 2xl:h-[1501px]"
            src="/images/img-02.png"
            initial={{ opacity: 0, scale: 0.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          ></motion.img>
        </div>
      </section>
    </>
  );
}
