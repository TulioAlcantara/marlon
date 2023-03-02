import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

export default function Section5() {
  return (
    <>
      <section
        id="section5"
        className="h-[668px] md:h-[1016px] xl:h-[1500px] bg-mobileSection5 md:bg-tabletSection5 xl:bg-none bg-cover"
      >
        <div className="container-screen  pb-16">
          <div
            className="card absolute text-black
            card-backdrop-white xl:bg-transparent
              max-w-full md:max-w-[458px] 
              mt-[330px] md:mt-[500px] xl:mt-[758px]
              mx-auto right-0 left-0 xl:left-auto xl:mr-16
              p-6 xl:p-0"
          >
            <h2 className="card__title ">Conheça as etapas do processo</h2>
            <p className="card__body ">
              Visando identificar e modificar padrões de pensamento e comportamento prejudiciais à saúde mental. As três etapas do processo psicoterapêutico são
            </p>
          </div>

          <img
            className="hidden xl:block absolute left-0 z-10
            top-0 xl:top-[334px]"
            alt="Devo fazer terapia?"
            src="/images/section5/section-05-desktop.png"
          ></img>

          <img
            className="absolute 
            block md:hidden xl:block
            w-[308px] xl:w-fit z-0
            top-[85px] xl:top-[485px] 
            left-[20px] xl:left-[592px]"
            srcSet="/images/section5/section-05-number.svg"
          ></img>
        </div>
      </section>
    </>
  );
}
