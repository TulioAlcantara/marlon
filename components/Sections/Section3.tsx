import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

export default function Section3() {
  return (
    <>
      <section
        id="section3"
        className="h-[700px] md:h-[1100px] xl:h-[1747px]"
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
            <img
              className="block xl:hidden my-5 w-screen"
              alt="Devo fazer terapia?"
              src="/images/section3/section-03-mobile.svg"
            ></img>
            <p className="card__body ">
              Olá, tudo bem? Meu nome é <b>Marlon Andrade</b>. Sou graduado em
              psicologia pela PUC-Goiás. Trabalho com a abordagem TCC e
              atendimento clínico a crianças, adolescentes e adultos.
              <br></br>
              <br></br>
              Meu objetivo como psicólogo é promover a{" "}
              <b>mudança de pensamentos, sentimentos e comportamentos</b> que
              estejam te impedindo de alcançar seus objetivos ou trazendo
              sofrimento, em qualquer área de sua vida.
              <br></br>
              <br></br>
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
            right-[-15px] xl:left-[-100px]"          >
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
