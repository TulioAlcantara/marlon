import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

export default function Section3() {
  return (
    <>
      <section
        id="section3"
        className="h-[700px] md:h-[900px] xl:h-[1747px]"
      >
        <div className="container-screen  pb-16">
          <div
            className="card relative xl:absolute text-black
            xl:max-w-[380px] z-20
              pt-0 md:pt-[200px] xl:pt-[907px]"
          >
            <h2 className="card__title">
              O paradoxo curioso é que quando aceito como sou,{" "}
              <b>me transformo</b>
            </h2>
            <picture className="block xl:hidden my-5 w-full"
            >
              <source srcSet="/images/section3/section-03-tablet.png" media="(min-width:768px)">
              </source>
              <img
                alt="Devo fazer terapia?"
                src="/images/section3/section-03-mobile.png"
              ></img>
            </picture>

            <p className="card__body ">
              Olá! Eu sou Marlon Andrade, psicólogo especializado em terapia cognitivo-comportamental para adolescentes e adultos.<br /> Acredito que a terapia é um processo de colaboração, onde eu estou aqui para oferecer orientação, apoio e estratégias, e você é o especialista em sua própria vida.
            </p>
          </div>

          <img
            className="hidden xl:block absolute right-0 z-10
            top-0 xl:top-[552px]"
            alt="Devo fazer terapia?"
            src="/images/section3/section-03-desktop.png"
          ></img>

          <picture
            className="absolute 
            w-[310px] xl:w-fit z-10 xl:z-30
            top-0 xl:top-[200px] 
            right-0 xl:left-[-100px]"          >
            <source
              srcSet="/images/section3/section-03-number.png"
              media="(min-width:1280px)"
            ></source>

            <img
              alt="Devo fazer terapia?"
              srcSet="/images/section3/section-03-number-mobile.svg"
            ></img>
          </picture>
        </div>
      </section>
    </>
  );
}
