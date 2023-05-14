import { motion } from "framer-motion";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import Details from "../Details";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const details = [
  {
    summary: "Conheça as etapas do processo",
    text: "Visando identificar e modificar padrões de pensamento e comportamento prejudiciais à saúde mental.\n\nA terapia pode ocorrer de forma online ou presencial, visando concluir as três etapas do processo:",
  },
  {
    summary: "Avaliação",
    text: "Trabalharemos juntos para definir e avaliar seus problemas atuais e determinar os objetivos terapêuticos.\n\nVou coletar informações sobre seus pensamentos, sentimentos e comportamento, bem como sua história de vida e outras questões relevantes.\n\nIsso irá nos ajudar a desenvolver um plano de tratamento personalizado para você.\n\nAs sessões acontecem uma vez por semana.",
  },
  {
    summary: "Intervenção",
    text: "Nesta etapa, vamos implementar o plano de tratamento.\n\nIsso pode incluir várias técnicas terapêuticas, como modificação de padrões de pensamento desadaptativos, modificação de comportamentos desadaptativos e prática de habilidades sociais e de enfrentamento.\n\nVamos mudar seus padrões de pensamento e comportamento para superar o problema.\n\nAs sessões acontecem uma vez por semana.",
  },
  {
    summary: "Manutenção",
    text: "O foco é manter as mudanças positivas alcançadas na segunda etapa.\n\nEu vou trabalhar com você para desenvolver estratégias para lidar com possíveis recaídas, bem como para continuar a desenvolver e praticar habilidades aprendidas na terapia.\n\nO objetivo é te ajudar manter as mudanças positivas a longo prazo.\n\nAs sessões acontecem a cada 15 dias, e posteriormente a cada 30 dias.",
  },
];

export default function Section2() {
  return (
    <>
      <section
        id="section2"
        className="h-[800px] md:h-[1016px] xl:h-[1300px] bg-mobileSection2 md:bg-tabletSection2 xl:bg-none bg-cover"
      >
        <div className="container-screen  pb-16">
          <div
            className="card absolute text-black xl:text-white
              card-backdrop-white xl:bg-transparent xl:backdrop-filter-none
              max-w-full md:max-w-[750px] xl:max-w-[458px] 
              mt-[170px] md:mt-[550px] xl:mt-[300px] 2xl:mt-[500px]
              mx-auto right-0 left-0 xl:left-auto xl:mr-16
              pb-8 xl:p-0"
          >
            <div className="hidden xl:block">
              <h2 className="card__title ">
                Conheça as <b>etapas do processo</b>
              </h2>
              <p className="card__body">
                Visando identificar e modificar padrões de pensamento e
                comportamento prejudiciais à saúde mental.
                <br />
                <br />A terapia pode ocorrer de forma <b>online</b> ou{" "}
                <b>presencial</b>, visando concluir as três etapas do processo:
              </p>

              <div className="hidden xl:block space-y-4">
                <Details details={details.slice(1)}></Details>
              </div>
            </div>
            <Carousel
              className="block xl:hidden"
              showStatus={false}
              centerMode={false}
              showArrows={false}
              autoPlay={true}
              interval={20000}
              infiniteLoop={true}
              showThumbs={false}
            >
              {details.map((detail, index) => {
                return (
                  <div className="text-left p-8 md:p-16" key={index}>
                    <h2 className="card__title mb-4">
                      <b>{detail.summary}</b>
                    </h2>
                    <p className="card__body whitespace-pre-line">
                      {detail.text}
                    </p>
                  </div>
                );
              })}
            </Carousel>
          </div>

          <img
            className="hidden xl:block absolute left-0 z-10
            top-0 xl:top-[134px] xl:w-[600px] 2xl:w-fit"
            alt="Conheça as etapas do processo"
            src="/images/section2/section-02-desktop.png"
          ></img>

          <img
            alt="Segunda seção"
            className="absolute 
            hidden xl:block
            w-fit z-0
            top-[150px] 
            left-[592px]"
            srcSet="/images/section2/section-02-number.png"
          ></img>
        </div>
      </section>
    </>
  );
}
