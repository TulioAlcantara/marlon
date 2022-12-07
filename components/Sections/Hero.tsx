import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
export default function Hero() {
  return (
    <>
      {/* <section className=" h-screen pt-16 bg-hero bg-cover bg-center ">
        <div className="bg-hero-gradient h-full">
          <div className="container-screen flex items-center ">
            <motion.div
              className="card-hero"
              initial={{ opacity: 0, y: 300 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="card-hero__title ">
                Entre em consenso com seu corpo e mente
              </h1>
              <p className="card-hero__body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
                feugiat erat, sed ullamcorper urna. Sed imperdiet nunc sit amet
                felis pulvinar bibendum.
              </p>
              <p className="card-hero__cta">
                <BsArrowRight></BsArrowRight>
                Explore o processo terapêutico
              </p>
            </motion.div>
          </div>
        </div>
      </section> */}

      <section className="h-screen">
        <video className="h-screen w-full object-cover" autoPlay loop muted>
          <source type="video/mp4" src="/videos/test.mp4" />
        </video>

        <div
          className="absolute top-0 h-screen w-full"
          style={{ background: "rgba(0,0,0,0.8)" }}
        >
          <div
            className="container-screen flex flex-col items-start justify-center gap-10
          "
          >
            <motion.h1
              initial={{ opacity: 0, y: -300 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="card-hero__title leading-10"
            >
              entre em consenso com seu corpo e mente
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="card-hero__body"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
              feugiat erat, sed ullamcorper urna. Sed imperdiet nunc sit amet
              felis pulvinar bibendum.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="card-hero__cta"
            >
              <BsArrowRight></BsArrowRight>
              Explore o processo terapêutico
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
}
