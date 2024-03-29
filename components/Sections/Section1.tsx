import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { Urls } from "../../constants/urls";
import Cta from "../Cta";

export default function Section1() {
  // const variants = {
  //   hidden: { opacity: 0 },
  //   visible: { opacity: 1 },
  // };
  return (
    <>
      <section
        id="section1"
        className="h-[900px] md:h-[1050px] xl:h-[1320px] 2xl:h-[1200px]"
      >
        <div className="container-screen pt-20 md:pt-0 pb-16">
          <div
            className="card relative xl:absolute text-white
            xl:max-w-[380px] z-20
              pt-0 md:pt-[200px] xl:pt-[500px]"
          >
            <motion.h2
              // initial={{ y: 100, opacity: 0 }}
              // whileInView={{ y: 0, opacity: 1 }}
              // transition={{ duration: 1 }}
              className="card__title"
            >
              O paradoxo curioso é que quando aceito como sou,{" "}
              <b>me transformo</b>
            </motion.h2>
            <picture className="block xl:hidden my-5 w-full">
              <source
                srcSet="/images/section1/section-01-tablet.png"
                media="(min-width:768px)"
              ></source>
              <img
                alt="Sobre mim"
                src="/images/section1/section-01-mobile.png"
              ></img>
            </picture>

            <p className="card__body ">
              Meu nome é Marlon Andrade, psicólogo especializado em terapia
              cognitivo-comportamental para adolescentes e adultos.
              <br />
              <br />
              Acredito que a terapia é um processo de colaboração, onde eu estou
              aqui para oferecer orientação, apoio e estratégias, e você é o
              especialista em sua própria vida.
            </p>

            <Cta label="Fale comigo" url={Urls.whatsapp} white={true}></Cta>
          </div>
          <img
            className="hidden xl:block absolute right-0 z-10
            top-0 xl:top-[152px] max-w-[800px] 2xl:max-w-fit"
            alt="Primeira seção"
            src="/images/section1/section-01-desktop.png"
          ></img>

          <picture
            className="absolute 
            top-24 xl:top-[100px] 
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
