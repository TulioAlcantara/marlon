import { motion } from "framer-motion";
import { BsArrowRight, BsArrowLeft, } from "react-icons/bs";
import Details from "../Details";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function Section2() {
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
      <section
        id="section2"
        className="h-[668px] md:h-[1016px] xl:h-[1300px] bg-mobileSection2 md:bg-tabletSection2 xl:bg-none bg-cover"
      >
        <div className="container-screen  pb-16">
          <div
            className="card absolute text-black xl:text-white
            card-backdrop-white xl:bg-transparent
              max-w-full md:max-w-[458px] 
              mt-[310px] md:mt-[500px] xl:mt-[600px]
              mx-auto right-0 left-0 xl:left-auto xl:mr-16
              p-8 xl:p-0"
          >
            <div className="hidden xl:block">
              <h2 className="card__title ">Conheça as <b>etapas do processo</b></h2>
              <p className="card__body ">
                Visando identificar e modificar padrões de pensamento e comportamento prejudiciais à saúde mental.<br />
                As três etapas do processo psicoterapêutico são:
              </p>

              <div className="hidden xl:block space-y-4">
                <Details details={details}></Details>
              </div>
            </div>

            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={75}
              totalSlides={4}
              infinite={true}
              isPlaying={true}
              interval={10000}

              className="block xl:hidden text-sm"
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
          <img
            className="hidden xl:block absolute left-0 z-10
            top-0 xl:top-[134px]"
            alt="Devo fazer terapia?"
            src="/images/section2/section-02-desktop.png"
          ></img>

          <img
            className="absolute 
            hidden xl:block
            w-fit z-0
            top-[200px] 
            left-[592px]"
            srcSet="/images/section2/section-02-number.png"
          ></img>
        </div>
      </section>
    </>
  );
}
