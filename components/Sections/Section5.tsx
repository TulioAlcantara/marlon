import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import Cta from "../Cta";

const Section5 = () => {
  return (
    <>
      <section id="section5" className="h-[1200px] md:h-[1200px] xl:h-[1100px]">
        <div className="container-screen  pb-16">
          <div
            className="card  text-black relative md:absolute
            max-w-fit md:max-w-[380px] 
              pt-[290px] md:pt-[500px] xl:pt-[500px]"
          >
            <h2 className="card__title ">Encontre um caminho</h2>
            <p className="card__body ">
              Encontrar um caminho pode ser desafiador e muitas vezes doloroso.<br /> A terapia oferece um espaço seguro para você explorar seus sentimentos, pensamentos e comportamentos, ajudando a identificar padrões que podem estar impedindo você de seguir em frente.<br /> Juntos, podemos trabalhar para que você se sinta mais seguro e confiante em suas escolhas, desenvolvendo habilidades e estratégias para enfrentar desafios e alcançar seus objetivos.
            </p>
            <Cta label="Conheca mais" url="#"></Cta>
          </div>

          <picture
            className="absolute right-0 z-10
            top-[700px] md:top-[138px] xl:top-[100px]
            w-full md:w-fit"
          >
            <source
              srcSet="/images/section5/section-05-mobile.png"
              media="(max-width:767px)"
            ></source>
            <source
              srcSet="/images/section5/section-05-tablet.png"
              media="(min-width:768px) and (max-width:1279px)"
            ></source>
            <source
              srcSet="/images/section5/section-05-desktop.png"
              media="(min-width:1280px)"
            ></source>

            <img
              alt="Encontre um caminho"
              srcSet="/images/section5/section-05-mobile.png"
              className="img-05-mask w-full md:w-fit max-h-[470px] md:max-h-fit"
            ></img>
          </picture>

          <picture className="absolute 
          top-[77px] md:top-[200px] xl:top-[100px]
          left-[-50px] md:left-[112px] xl:left-[250px]"
          >
            <source
              srcSet="/images/section5/mobile-number.png"
              media="(max-width:767px)"
            ></source>

            <source
              srcSet="/images/section5/tablet-number.png"
              media="(min-width:768px) and (max-width:1279px)"
            ></source>

            <img
              srcSet="/images/section5/desktop-number.png"
            ></img>
          </picture>

        </div>
      </section>
    </>
  );
};

export default Section5;
