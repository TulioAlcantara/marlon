import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Cta from "../Cta";

export default function Section1() {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const numberRef = useRef<HTMLImageElement>(null);
  const ref = useRef(null);

  // let { scrollYProgress } = useScroll({ target: ref });
  // let imageY = useTransform(scrollYProgress, [0, 1], [300, 0]);
  // let cardY = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <>
      <section
        ref={ref}
        id="section1"
        className="h-[1150px] md:h-[1300px] xl:h-[1400px]"
      >
        <div className="container-screen pb-16">
          <motion.div
            // style={{ y: cardY }}
            ref={cardRef}
            className="card
            relative xl:absolute
            text-white
            w-full
            pt-[540px] md:pt-[812px] xl:top-[755px] xl:pt-0"
          >
            <h2 className="card__title">Devo fazer terapia?</h2>
            <p className="card__body">
              Se você está enfrentando desafios emocionais, mentais ou comportamentais, eu estou aqui para ajudar.<br />
              Como psicólogo especializado em terapia cognitivo-comportamental, eu posso te oferecer as ferramentas necessárias para te ajudar a superar seus problemas e encontrar um caminho para uma vida mais satisfatória.<br />
              Juntos, podemos trabalhar para identificar e modificar padrões de pensamentos, sentimentos e comportamentos que estão te impedindo de alcançar seus objetivos ou trazendo sofrimento.<br />
              Não hesite em marcar uma consulta comigo e começar essa jornada de mudança e transformação.
            </p>
            <Cta label="Conheca mais" url="#"></Cta>
          </motion.div>

          <motion.picture
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
