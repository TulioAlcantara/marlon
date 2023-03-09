import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

const Section4 = () => {
  return (
    <>
      <section id="section4" className="h-[1200px] md:h-[1302px] xl:h-[1000px]">
        <div className="container-screen  pb-16">
          <div
            className="card  text-black relative md:absolute
            max-w-fit md:max-w-[380px] 
              pt-[290px] md:pt-[650px] xl:pt-[263px]"
          >
            <h2 className="card__title ">Encontre um caminho</h2>
            <p className="card__body ">
              Encontrar um caminho pode ser desafiador e muitas vezes doloroso.<br /> A terapia oferece um espaço seguro para você explorar seus sentimentos, pensamentos e comportamentos, ajudando a identificar padrões que podem estar impedindo você de seguir em frente.<br /> Juntos, podemos trabalhar para que você se sinta mais seguro e confiante em suas escolhas, desenvolvendo habilidades e estratégias para enfrentar desafios e alcançar seus objetivos.
            </p>
          </div>

          <picture
            className="absolute right-0 z-10
            top-[700px] md:top-[138px] xl:top-0
            w-full md:w-fit"
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
              className="img-04-mask w-full md:w-fit max-h-[470px] md:max-h-fit"
            ></img>
          </picture>

          <img
            className="absolute 
            w-[307px] md:w-[428px] xl:w-fit
            top-[77px] md:top-[294px] xl:top-0
            left-[-50px] md:left-[112px] xl:left-[-187px]"
            srcSet="/images/section4/section-04-number.png"
          ></img>
        </div>
      </section>
    </>
  );
};

export default Section4;
