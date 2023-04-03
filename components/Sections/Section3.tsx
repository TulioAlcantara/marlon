import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Cta from "../Cta";
import { Urls } from "../../constants/urls";

export default function Section3() {

  return (
    <>
      <section
        id="section3"
        className="h-[1200px] md:h-[1300px] xl:h-[1200px]"
      >
        <div className="container-screen pb-16">
          <motion.div
            className="card
            relative xl:absolute
            text-white
            w-full
            pt-[540px] md:pt-[812px] xl:top-[420px] 2xl:top-[555px] xl:pt-0"
          >
            <h2 className="card__title">Devo fazer <b>terapia?</b></h2>
            <p className="card__body">
              Se você está enfrentando desafios emocionais, mentais ou comportamentais, eu estou aqui para ajudar.<br /><br />
              Como psicólogo especializado em terapia cognitivo-comportamental, eu posso te oferecer as ferramentas necessárias para te ajudar a superar seus problemas e encontrar um caminho para uma vida mais satisfatória.<br /><br />
              Juntos, podemos trabalhar para identificar e modificar padrões de pensamentos, sentimentos e comportamentos que estão te impedindo de alcançar seus objetivos ou trazendo sofrimento.<br /><br />
              Não hesite em marcar uma consulta comigo e começar essa jornada de mudança e transformação.
            </p>
            <Cta label="Conheça mais" url={Urls.instagram} noBorder={true}></Cta>
          </motion.div>

          <motion.picture
            className="absolute right-0 z-10
            top-[93px] md:top-[125px] xl:top-[264px]"
          >
            <source
              srcSet="/images/section3/section-03-mobile.png"
              media="(max-width:767px)"
            ></source>
            <source
              srcSet="/images/section3/section-03-tablet.png"
              media="(min-width:768px) and (max-width:1279px)"
            ></source>
            <source
              srcSet="/images/section3/section-03-desktop.png"
              media="(min-width:1280px)"
            ></source>

            <img
              alt="Devo fazer terapia?"
              src="/images/section3/section-03-desktop.png"
            ></img>
          </motion.picture>


          <picture className="absolute 
              top-[282px] md:top-[500px] xl:top-[50px] 2xl:top-[160px] 
              left-[-49px] md:left-[53px] xl:left-[60px]"
          >
            <source
              srcSet="/images/section3/mobile-number.png"
              media="(max-width:767px)"
            ></source>

            <source
              srcSet="/images/section3/tablet-number.png"
              media="(min-width:768px) and (max-width:1279px)"
            ></source>

            <img
              srcSet="/images/section3/desktop-number.png"
            ></img>
          </picture>
        </div>
      </section>
    </>
  );
}
