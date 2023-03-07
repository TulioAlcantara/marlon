import { motion } from "framer-motion";
import { BsArrowRight, BsArrowLeft, } from "react-icons/bs";
import Details from "../Details";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

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
            <div className="hidden xl:block">
              <h2 className="card__title ">Conheça as etapas do processo</h2>
              <p className="card__body ">
                Visando identificar e modificar padrões de pensamento e comportamento prejudiciais à saúde mental. As três etapas do processo psicoterapêutico são
              </p>

              <div className="hidden xl:block space-y-4">
                <Details summary="Avaliacao" text="Ipsum Lorem"></Details>
                <Details summary="Intervencao" text="Ipsum Lorem"></Details>
                <Details summary="Manutencao" text="Ipsum Lorem"></Details>
              </div>
            </div>

            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={50}
              totalSlides={4}
              className="block xl:hidden"
            >
              <Slider >
                <Slide index={0}>
                  <h2 className="fluid-lg mb-4">Conheça as etapas do processo</h2>
                  Visando identificar e modificar padrões de pensamento e comportamento prejudiciais à saúde mental. As três etapas do processo psicoterapêutico são
                </Slide>
                <Slide index={1}>I am the second Slide.</Slide>
                <Slide index={2}>I am the third Slide.</Slide>
                <Slide index={3}>I am the third Slide.</Slide>
              </Slider>
              <div className="flex justify-center items-center gap-4">
                <ButtonBack><BsArrowLeft></BsArrowLeft></ButtonBack>
                <DotGroup dotNumbers={true} />
                <ButtonNext><BsArrowRight></BsArrowRight></ButtonNext>
              </div>
            </CarouselProvider>
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
