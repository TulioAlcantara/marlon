import { motion } from "framer-motion";
import Link from "next/link";
import { BsInstagram, BsMouse, BsWhatsapp } from "react-icons/bs";
import { RxCaretDown } from "react-icons/rx";
export default function Hero() {
  const scrollToFirstSection = () => {
    window.scrollTo({
      top: document.getElementById("section1")!.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="h-screen">
        <video
          className="h-screen w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source type="video/mp4" src="/videos/bg-hero.mp4" />
        </video>

        <div
          className="absolute top-0 h-screen w-full"
          style={{
            background:
              " linear-gradient(0deg, #1C1C1C 4.17%, rgba(28, 28, 28, 0.6) 22.92%)",
          }}
        >
          <div className="container-screen flex flex-col justify-around text-white gap-10">
            <motion.h1
              initial={{ opacity: 0, y: -300 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="fluid-6xl font-black text-center"
              style={{ color: "rgba(255, 253, 245, 0.1)", lineHeight: "1" }}
            >
              Entre em consenso <br></br> com seu corpo e mente
            </motion.h1>

            <div className="fluid-xl">
              <h3 className="mb-4 font-normal uppercase">
                TERAPIA COGNITIVO-COMPORTAMENTAL
              </h3>
              <div className="flex items-center gap-6">
                <h3 className="font-light">MARLON ANDRADE</h3>
                <Link href="#" className="hover:scale-110 duration-100">
                  <BsInstagram></BsInstagram>
                </Link>
                <Link href="#" className="hover:scale-110 duration-100">
                  <BsWhatsapp></BsWhatsapp>
                </Link>
              </div>
            </div>
            <button
              className="fluid-2xl mx-auto"
              onClick={() => {
                scrollToFirstSection();
              }}
            >
              <BsMouse></BsMouse>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  ease: "linear",
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <RxCaretDown></RxCaretDown>
              </motion.span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
