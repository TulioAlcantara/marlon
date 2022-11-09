import { BsArrowRight } from "react-icons/bs";
export default function Hero() {
  return (
    <>
      <section className=" h-screen pt-16 bg-hero bg-cover bg-fixed bg-center ">
        <div className="bg-hero-gradient h-full">
          <div className="container-screen flex items-center ">
            <div className="card-hero">
              <h1 className="card-hero__title ">
                Entre em consenso com seu corpo e mente
              </h1>
              <p className="card-hero__body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
                feugiat erat, sed ullamcorper urna. Sed imperdiet nunc sit amet
                felis pulvinar bibendum.
              </p>
              <p className="card-hero__cta">
                <BsArrowRight></BsArrowRight>
                Explore o processo terapêutico
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
