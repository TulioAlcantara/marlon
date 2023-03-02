import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

const Section4 = () => {
  return (
    <>
      <section id="section4" className="h-[1000px] md:h-[1302px] xl:h-[1000px]">
        <div className="container-screen  pb-16">
          <div
            className="card  text-black absolute
            max-w-[200px] md:max-w-[380px] 
              pt-[492px] md:pt-[650px] xl:pt-[263px]"
          >
            <h2 className="card__title ">Encontre um caminho</h2>
            <p className="card__body ">
              Em regra geral, o processo terapêutico acontece presencialmente,
              com duração de 50 a 60 minutos e frequência semanal.
              <br></br>
              <br></br>
              Estes acordos podem ser alterados, de acordo com cada necessidade
              individual do paciente.
            </p>

            {/* <p
              className="card__cta "
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 1 }}
              viewport={{ once: true }}
            >
              <BsArrowRight className="mr-2"></BsArrowRight>
              Explore como funciona o processo terapêutico
            </p> */}
          </div>

          <picture
            className="absolute right-0 z-10
            top-[321px] md:top-[138px] xl:top-[168px]"
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
            ></img>
          </picture>

          <img
            className="absolute 
            w-[307px] md:w-[428px] xl:w-fit
            top-[77px] md:top-[294px] xl:top-[132px] 
            left-[-50px] md:left-[112px] xl:left-[-187px]"
            srcSet="/images/section4/section-04-number.png"
          ></img>
        </div>
      </section>
    </>
  );
};

export default Section4;
