import { motion } from "framer-motion";

export default function Section1() {
  return (
    <>
      <section className=" relative flex h-[1800px] bg-gradient-1">
        <div className="container-content">
          <div className="card mt-[540px] md:mt-[750px] 2xl:mt-[650px]">
            <motion.h2 className="card-title text-white">
              Devo fazer terapia?
            </motion.h2>
            <p className="card-body text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
              feugiat erat, sed ullamcorper urna. Sed imperdiet nunc sit amet
              felis pulvinar bibendum.
            </p>
          </div>
        </div>

        <motion.img
          className="absolute right-0 z-10 object-cover
              top-[93px] md:top-[471px] 2xl:top-[424px]
              w-[200px] md:w-[679px] 2xl:w-[1080px]
              h-[360px] md:h-[864px] 2xl:h-[985px]"
          src="/images/img-01.png"
          initial={{ opacity: 0, scale: 0.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        ></motion.img>

        {/* <div className="absolute text-[700px] text-white font-heading z-0">
            01
          </div> */}
      </section>
    </>
  );
}
