import { motion } from "framer-motion";
import { BsArrowRight, BsArrowLeft, } from "react-icons/bs";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function Section4() {
  const details = [
    {
      summary: "Avaliação",
      text: "Juntos, vamos identificar seus problemas atuais e definir seus objetivos terapêuticos, para que possamos desenvolver um plano de tratamento personalizado para você.",
    },
    {
      summary: "Intervenção",
      text: "Iremos trabalhar juntos para implementar o plano criado na avaliação, alcançar seus objetivos e promover seu bem-estar emocional e psicológico.\n A intervenção ajuda a mudar seus padrões de pensamento e comportamento para superar o problema.",
    },
    {
      summary: "Manutenção",
      text: "É importante garantir que as mudanças positivas sejam mantidas a longo prazo.\n Por isso, na última etapa, trabalharemos juntos para desenvolver estratégias para evitar possíveis recaídas e manter o progresso alcançado na terapia.\n Além disso, você continuará a desenvolver e praticar as habilidades aprendidas durante a terapia, a fim de continuar a crescer e melhorar em sua vida.",
    }
  ]

  return (
    <>
      <section id="section4" className="h-[1050px] md:h-[1290px] xl:h-[1416px]">
        <div className="container-screen pb-16">
          <div
            className="card card-backdrop-dark text-white absolute right-0 z-20
              w-full md:w-[475px] xl:w-[775px] 
              mt-[567px] md:mt-[687px] xl:mt-[735px] 
              p-8 md:p-16
              rounded-3xl md:rounded-none"
          >
            <div className="hidden md:block">
              <h2 className="card__title ">Ansiedade e depressão</h2>
              <p className="card__body ">
                O tratamento para ansiedade ocorre em duas etapas. No primeiro
                momento, ensino ao paciente o <b>controle corporal</b> dos
                sintomas. Depois, trabalhamos com suas crenças cognitivas
                negativas e crenças de catastrofização da realidade.
              </p>
            </div>

            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={75}
              totalSlides={4}
              infinite={true}
              isPlaying={true}
              interval={10000}

              className="block md:hidden text-sm"
            >
              <Slider>
                <Slide index={0}>
                  <h2 className="fluid-xl mb-4">Conheça as etapas do processo</h2>
                  Visando identificar e modificar padrões de pensamento e comportamento prejudiciais à saúde mental.<br />
                  As três etapas do processo psicoterapêutico são:
                  <ul>
                    <li className="font-bold">Avaliação</li>
                    <li className="font-bold">Intervenção</li>
                    <li className="font-bold">Manutenção</li>
                  </ul>
                </Slide>
                {details.map((detail, index) => {
                  return (<Slide index={index + 1} key={index + 1}>
                    <h2 className="fluid-xl mb-4">{detail.summary}</h2>
                    {detail.text}
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
