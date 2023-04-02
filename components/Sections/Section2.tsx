import { motion } from "framer-motion";
import { BsArrowRight, BsArrowLeft, } from "react-icons/bs";
import Details from "../Details";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Section2() {
  const details = [
    {
      summary: "Conheça as etapas do processo",
      text: "Visando identificar e modificar padrões de pensamento e comportamento prejudiciais à saúde mental.\n\nAs três etapas do processo psicoterapêutico são: "
    },
    {
      summary: "Avaliação",
      text: "Juntos, vamos identificar seus problemas atuais e definir seus objetivos terapêuticos, para que possamos desenvolver um plano de tratamento personalizado para você.",
    },
    {
      summary: "Intervenção",
      text: "Iremos trabalhar juntos para implementar o plano criado na avaliação, alcançar seus objetivos e promover seu bem-estar emocional e psicológico.\n\nA intervenção ajuda a mudar seus padrões de pensamento e comportamento para superar o problema.",
    },
    {
      summary: "Manutenção",
      text: "É importante garantir que as mudanças positivas sejam mantidas a longo prazo.\n\nPor isso, na última etapa, trabalharemos juntos para desenvolver estratégias para evitar possíveis recaídas e manter o progresso alcançado na terapia.\n\nAlém disso, você continuará a desenvolver e praticar as habilidades aprendidas durante a terapia, a fim de continuar a crescer e melhorar em sua vida.",
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
              max-w-full md:max-w-[750px] xl:max-w-[458px] 
              mt-[170px] md:mt-[550px] xl:mt-[600px]
              mx-auto right-0 left-0 xl:left-auto xl:mr-16
              pb-8 xl:p-0"
          >
            <div className="hidden xl:block">
              <h2 className="card__title ">Conheça as <b>etapas do processo</b></h2>
              <p className="card__body">
                Visando identificar e modificar padrões de pensamento e comportamento prejudiciais à saúde mental.<br />
                As três etapas do processo psicoterapêutico são:
              </p>

              <div className="hidden xl:block space-y-4">
                <Details details={details.slice(1)}></Details>
              </div>
            </div>
            <Carousel className="block xl:hidden" showStatus={false} centerMode={false} showArrows={false} autoPlay={true} interval={20000} infiniteLoop={true} showThumbs={false}>
              {details.map((detail, index) => {
                return (<div className="text-left p-8 md:p-16" key={index}>
                  <h2 className="card__title mb-4"><b>{detail.summary}</b></h2>
                  <p className="card__body whitespace-pre-line">{detail.text}</p>
                </div>)
              })}
            </Carousel>
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
