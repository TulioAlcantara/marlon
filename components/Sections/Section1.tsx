import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

export default function Section1() {
  return (
    <>
      <section id="section1" className="h-[900px] md:h-[1144px] xl:h-[1744px]">
        <div className="container-screen  pb-16">
          <div
            className="card
            text-white
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </motion.p>

            {/* <motion.p
              className="card__cta text-white"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 1 }}
              viewport={{ once: true }}
            >
              <BsArrowRight className="mr-2"></BsArrowRight>
              Explore o processo terapêutico
            </motion.p> */}
          </div>

          <motion.picture
            className="absolute right-0 z-10
            top-[93px] md:top-[125px] xl:top-[464px]"
            initial={{ opacity: 0, scale: 0.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <source
              srcSet="/images/section1/section-01-mobile.png"
              media="(max-width:767px)"
            ></source>
            <source
              srcSet="/images/section1/section-01-tablet.png"
              media="(min-width:768px) and (max-width:1279px)"
            ></source>
            <source
              srcSet="/images/section1/section-01-desktop.png"
              media="(min-width:1280px)"
            ></source>

            <img
              alt="Devo fazer terapia?"
              srcSet="/images/section1/section-01-desktop.png"
            ></img>
          </motion.picture>

          <motion.img
            initial={{ opacity: 0, scale: 0.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="absolute 
            w-[270px] md:w-[373px] xl:w-fit
            top-[282px] md:top-[500px] xl:top-[173px] 
            left-[-49px] md:left-[53px] xl:left-[72px]"
            srcSet="/images/section1/section-01-number.png"
          ></motion.img>
        </div>
      </section>
    </>
  );
}
