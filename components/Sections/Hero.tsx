import { motion } from "framer-motion";
import { BsInstagram, BsMouse, BsWhatsapp } from "react-icons/bs";
import { RxCaretDown } from "react-icons/rx";
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
          <source type="video/mp4" src="/videos/bg-hero.mp4" />
        </video>

        <div
          className="absolute top-0 h-screen w-full"
          style={{
            background:
              " linear-gradient(0deg, #1C1C1C 4.17%, rgba(28, 28, 28, 0.6) 22.92%);",
          }}
        >
          <div className="container-screen flex flex-col justify-around text-white gap-10">
            <motion.h1
              initial={{ opacity: 0, y: -300 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="fluid-6xl font-black text-center"
              style={{ color: "rgba(255, 253, 245, 0.1)", lineHeight: "1" }}
            >
              Entre em consenso <br></br> com seu corpo e mente
            </motion.h1>

            <div className="fluid-xl">
              <h3 className="mb-4 font-normal uppercase">
                TERAPIA COGNITIVO-COMPORTAMENTAL
              </h3>
              <div className="flex items-center gap-6">
                <h3 className="font-light">MARLON ANDRADE</h3>
                <BsInstagram></BsInstagram>
                <BsWhatsapp></BsWhatsapp>
              </div>
            </div>
            <div className="fluid-2xl mx-auto">
              <BsMouse></BsMouse>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  ease: "linear",
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <RxCaretDown></RxCaretDown>
              </motion.span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
