import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import Cta from "../Cta";

export default function Section1() {
  return (
    <>
      <section
        id="section1"
        className="h-[750px] md:h-[1050px] xl:h-[1200px]"
      >
        <div className="container-screen  pb-16">
          <div
            className="card relative xl:absolute text-white
            xl:max-w-[380px] z-20
              pt-0 md:pt-[200px] xl:pt-[500px]"
          >
            <h2 className="card__title">
              O paradoxo curioso é que quando aceito como sou,{" "}
              <b>me transformo</b>
            </h2>
            <picture className="block xl:hidden my-5 w-full"
            >
              <source srcSet="/images/section1/section-01-tablet.png" media="(min-width:768px)">
              </source>
              <img
                alt="Devo fazer terapia?"
                src="/images/section1/section-01-mobile.png"
              ></img>
            </picture>

            <p className="card__body ">
              Meu nome é Marlon Andrade, psicólogo especializado em terapia cognitivo-comportamental para adolescentes e adultos.<br /> Acredito que a terapia é um processo de colaboração, onde eu estou aqui para oferecer orientação, apoio e estratégias, e você é o especialista em sua própria vida.
            </p>

            <Cta label="Conheca mais" url="#"></Cta>
          </div>

          <img
            className="hidden xl:block absolute right-0 z-10
            top-0 xl:top-[152px]"
            alt="Devo fazer terapia?"
            src="/images/section1/section-01-desktop.png"
          ></img>

          <picture
            className="absolute 
            top-0 xl:top-[100px] 
            right-0 xl:left-[80px]"
          >
            <source
              srcSet="/images/section1/mobile-number.png"
              media="(max-width:767px)"
            ></source>

            <source
              srcSet="/images/section1/tablet-number.png"
              media="(min-width:768px) and (max-width:1279px)"
            ></source>

            <img
              alt="Sobre mim"
              srcSet="/images/section1/desktop-number.png"
            ></img>
          </picture>
        </div>
      </section>
    </>
  );
}
