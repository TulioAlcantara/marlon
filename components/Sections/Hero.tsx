export default function Hero() {
  return (
    <>
      <section className="flex items-center h-screen bg-hero bg-cover bg-fixed">
        <div className="container-content">
          <div className="flex justify-between flex-col mx-auto">
            <h1 className="text-8xl font-extralight  text-white uppercase">
              Entre em consenso com seu corpo e mente
            </h1>
            <p className="text-2xl mt-12 font-light text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
              feugiat erat, sed ullamcorper urna. Sed imperdiet nunc sit amet
              felis pulvinar bibendum.
            </p>
            <p className="text-2xl mt-8  text-white align-middle">
              <img className="float-left mr-4" src="/icons/arrow.svg"></img>
              Explore como funciona o processo terapêutico
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
