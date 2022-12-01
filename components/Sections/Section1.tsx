import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Section1() {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.matchMedia().add("(min-width: 1280px)", () => {
      gsap.to(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top center",
          scrub: true,
          toggleActions: "start none none pause",
        },
        y: 300,
      });
    });
  }, []);

  return (
    <>
      <section id="section1" className="h-[900px] md:h-[1144px] xl:h-[1744px]">
        <div className="container-screen pb-16">
          <div
            ref={cardRef}
            className="card
            relative xl:absolute
            text-white
            w-full
            pt-[540px] md:pt-[812px] xl:top-[755px] xl:pt-0"
          >
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
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
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
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
              src="/images/section1/section-01-desktop.png"
            ></img>
          </motion.picture>

          <motion.img
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
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
