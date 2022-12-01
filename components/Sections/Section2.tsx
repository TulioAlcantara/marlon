import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

export default function Section2() {
  return (
    <>
      <section id="section2" className="h-[1128px] md:h-[1328px] xl:h-[1516px]">
        <div className="container-screen pb-16">
          <div
            className="card-backdrop-dark text-white absolute right-0 z-20
              w-[259px] md:w-[475px] xl:w-[775px] 
              mt-[567px] md:mt-[687px] xl:mt-[735px] 
              pr-[35px] md:pr-[70px] xl:pr-[216px] 
              py-14
              pl-8 md:pl-24 xl:pl-32
              "
          >
            <div className="card">
              <motion.h2
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="card__title "
              >
                Ansiedade e depressão
              </motion.h2>
              <motion.p
                className="card__body "
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 1 }}
                viewport={{ once: true }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
                feugiat erat, sed ullamcorper urna. Sed imperdiet nunc sit amet
                felis pulvinar bibendum.
              </motion.p>

              {/* <motion.p
                className="card__cta text-white"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 1 }}
                viewport={{ once: true }}
              >
                <BsArrowRight className="mr-2"></BsArrowRight>
                Conheça mais
              </motion.p> */}
            </div>
          </div>

          <motion.picture
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute left-0 z-0
              top-[93px] md:top-[125px] xl:top-[200px] "
          >
            <source
              srcSet="/images/section2/section-02-mobile.png"
              media="(max-width:767px)"
            ></source>
            <source
              srcSet="/images/section2/section-02-tablet.png"
              media="(min-width:768px) and (max-width:1279px)"
            ></source>
            <source
              srcSet="/images/section2/section-02-desktop.png"
              media="(min-width: 1280px)"
            ></source>

            <img srcSet="/images/section2/section-02-desktop.png"></img>
          </motion.picture>
        </div>
      </section>
    </>
  );
}
