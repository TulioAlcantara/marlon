import { motion } from "framer-motion";

export default function Section1() {
  return (
    <>
      <section className="flex h-[900px] lg:h-[2000px] bg-gradient-1">
        <div className="container-screen">
          <div className="container-content lg:h-[1000px]">
            <div className="card mt-[540px] md:mt-[750px] lg:mt-[650px] lg:sticky lg:top-[600px] ">
              <motion.div
                className="card-number section-number top-[-400px] lg:top-[-800px] left-[-100px] lg:left-32"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
              >
                01
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="card-title text-white"
              >
                Devo fazer terapia?
              </motion.h2>
              <motion.p
                className="card-body text-white"
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
                className="card-cta text-white "
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
              top-[93px] md:top-[471px] lg:top-[424px]
              w-[200px] md:w-[679px] 2xl:w-[985px]
              h-[360px] md:h-[864px] 2xl:h-[1080px]"
              src="/images/img-01.png"
              initial={{ opacity: 0, scale: 0.2 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            ></motion.img>
          </div>
        </div>
      </section>
    </>
  );
}
