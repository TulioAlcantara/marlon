import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Section1() {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const numberRef = useRef<HTMLImageElement>(null);

  // let { scrollY } = useScroll();
  // let y = useTransform(scrollY, [0, 6000], [0, 100]);

  // gsap.registerPlugin(ScrollTrigger);
  // useEffect(() => {
  //   gsap.matchMedia().add("(min-width: 1280px)", () => {
  //     gsap.to(cardRef.current, {
  //       scrollTrigger: {
  //         trigger: cardRef.current,
  //         start: "top center",
  //         scrub: true,
  //         toggleActions: "start none none pause",
  //       },
  //       y: 300,
  //     });

  //     gsap.to(imageRef.current, {
  //       scrollTrigger: {
  //         trigger: cardRef.current,
  //         start: "top center",
  //         scrub: true,
  //         toggleActions: "start none none pause",
  //       },
  //       y: 10,
  //     });
  //   });
  // }, []);

  return (
    <>
      <section id="section1" className="h-section">
        <div className="container-screen pb-16">
          <div
            ref={cardRef}
            className="card
            relative xl:absolute
            text-white
            w-full
            pt-[540px] md:pt-[812px] xl:top-[755px] xl:pt-0"
          >
            <h2 className="card__title">Devo fazer terapia?</h2>
            <p className="card__body">
              Terapia é pra quem quer <b>mudança</b>.<br></br>
              <br></br>A necessidade de mudança surge quando estamos lutando com
              as incógnitas da vida:{" "}
              <b>
                Será que termino meu relacionamento? Mudo minha carreira? Como
                paro de ter tanta ansiedade?
              </b>
              <br></br>
              <br></br>A terapia proporciona, através do autoconhecimento,
              mudanças concretas no seu comportamento e na sua vida.
            </p>
          </div>

          <motion.picture
            // style={{ y }}
            ref={imageRef}
            className="absolute right-0 z-10
            top-[93px] md:top-[125px] xl:top-[464px]"
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

          <img
            ref={numberRef}
            className="absolute 
            w-[270px] md:w-[373px] xl:w-fit
            top-[282px] md:top-[500px] xl:top-[173px] 
            left-[-49px] md:left-[53px] xl:left-[72px]"
            srcSet="/images/section1/section-01-number.png"
          ></img>
          <button></button>
        </div>
      </section>
    </>
  );
}
