import { motion } from "framer-motion";
import { BsArrowRight, BsArrowLeft, } from "react-icons/bs";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function Section4() {
  const details = [
    {
      summary: "Como funciona a depressão?",
      text: "A depressão é um transtorno mental que pode afetar significativamente a vida das pessoas. Os sintomas mais comuns incluem tristeza persistente, perda de interesse em atividades, falta de energia, dificuldade de concentração, alterações no sono e apetite, bem como pensamentos suicidas. Durante a terapia, trabalhamos juntos para identificar os desencadeantes da depressão e desenvolver estratégias para gerenciar os sintomas e promover o bem-estar emocional. "
    },
    {
      summary: "O que é a ansiedade?",
      text: "A ansiedade é uma resposta normal do nosso organismo a situações desafiadoras, mas pode se tornar um problema quando é excessiva e interfere na nossa vida diária. Os sintomas incluem preocupações excessivas, medos irracionais, inquietação, insônia, entre outros. Por isso, durante todo o processo terapêutico, estarei trabalhando em colaboração com o paciente para garantir que suas necessidades sejam atendidas e que ele esteja recebendo o melhor tratamento para sua ansiedade."
    }
  ]

  return (
    <>
      <section id="section4" className="h-[890px] md:h-[1200px] xl:h-[1416px]">
        <div className="container-screen pb-16">
          <div
            className="card card-backdrop-dark text-white absolute right-0 z-20
              w-full md:w-[575px] xl:w-[775px] 
              !max-w-none
              h-[550px] md:h-[500px] xl:h-[600px]           
              mt-[320px] md:mt-[600px] xl:mt-[700px] 
              p-8 md:p-16
              rounded-3xl md:rounded-none"
          >
            <div>
              <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={70}
                totalSlides={2}
                infinite={true}
                isPlaying={true}
                playDirection="forward"
                interval={20000}
              // isIntrinsicHeight={true}
              >
                <Slider>
                  {details.map((detail, index) => {
                    return (<Slide index={index + 1} key={index + 1}>
                      <h2 className="card__title mb-4">{detail.summary}</h2>
                      <p className="card__body">{detail.text}</p>
                    </Slide>
                    )
                  })}
                </Slider>
                <div className="flex justify-center items-center gap-4">
                  <ButtonBack><BsArrowLeft></BsArrowLeft></ButtonBack>
                  {/* <DotGroup totalSlides={4} visibleSlides={1} /> */}
                  <ButtonNext><BsArrowRight></BsArrowRight></ButtonNext>
                </div>
              </CarouselProvider>

            </div>
          </div>

          <picture
            className="absolute left-0 z-0
              top-[93px] md:top-[125px] xl:top-[200px] 
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
              media="(min-width: 1280px)"
            ></source>

            <img className="w-full md:w-fit" srcSet="/images/section4/section-04-mobile.png"></img>
          </picture>
        </div>
      </section>
    </>
  );
}
