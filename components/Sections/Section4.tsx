import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

const Section4 = () => {
  return (
    <>
      <section id="section4" className="h-[1250px] md:h-[1902px] xl:h-[1919px]">
        <div className="container-screen  pb-16">
          <div
            className="card  text-black absolute
            max-w-[200px] md:max-w-[380px] 
              pt-[492px] md:pt-[1050px] xl:pt-[463px]"
          >
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="card__title "
            >
              Encontre um caminho
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

            {/* <motion.p
              className="card__cta "
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 1 }}
              viewport={{ once: true }}
            >
              <BsArrowRight className="mr-2"></BsArrowRight>
              Explore como funciona o processo terapêutico
            </motion.p> */}
          </div>

          <motion.picture
            className="absolute right-0 z-10
            top-[321px] md:top-[538px] xl:top-[368px]"
            initial={{ opacity: 0, scale: 0.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <source
              srcSet="/images/section4/section-04-mobile.png"
              media="(max-width:767px)"
            ></source>
            <source
              srcSet="/images/section4/section-04-tablet.png"
              media="(min-width:768px) and (max-width:1279px)"
            ></source>
            <source
              srcSet="/images/section4/section-04-desktop.png"
              media="(min-width:1280px)"
            ></source>

            <img
              alt="Devo fazer terapia?"
              srcSet="/images/section4/section-04-desktop.png"
            ></img>
          </motion.picture>

          <motion.img
            initial={{ opacity: 0, scale: 0.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="absolute 
            w-[307px] md:w-[428px] xl:w-fit
            top-[77px] md:top-[694px] xl:top-[332px] 
            left-[-50px] md:left-[112px] xl:left-[-187px]"
            srcSet="/images/section4/section-04-number.png"
          ></motion.img>
        </div>
      </section>
    </>
  );
};

export default Section4;
