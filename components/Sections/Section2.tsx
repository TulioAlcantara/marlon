import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

export default function Section2() {
  return (
    <>
      <section id="section2" className="h-section">
        <div className="container-screen pb-16">
          <div
            className="card-backdrop-dark text-white absolute right-0 z-20
              w-[259px] md:w-[475px] xl:w-[775px] 
              mt-[567px] md:mt-[687px] xl:mt-[735px] 
              pr-[35px] md:pr-[70px] xl:pr-[216px] 
              py-14
              pl-8 md:pl-24 xl:pl-32
              "
          >
            <div className="card">
              <h2 className="card__title ">Ansiedade e depressão</h2>
              <p className="card__body ">
                O tratamento para ansiedade ocorre em duas etapas. No primeiro
                momento, ensino ao paciente o <b>controle corporal</b> dos
                sintomas. Depois, trabalhamos com suas crenças cognitivas
                negativas e crenças de catastrofização da realidade.
              </p>
            </div>
          </div>

          <picture
            className="absolute left-0 z-0
              top-[93px] md:top-[125px] xl:top-[200px] "
          >
            <source
              srcSet="/images/section2/section-02-mobile.png"
              media="(max-width:767px)"
            ></source>
            <source
              srcSet="/images/section2/section-02-tablet.png"
              media="(min-width:768px) and (max-width:1279px)"
            ></source>
            <source
              srcSet="/images/section2/section-02-desktop.png"
              media="(min-width: 1280px)"
            ></source>

            <img srcSet="/images/section2/section-02-desktop.png"></img>
          </picture>
        </div>
      </section>
    </>
  );
}
