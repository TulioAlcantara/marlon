import { FiMenu } from "react-icons/fi";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { RefObject, useEffect, useRef } from "react";

interface Props {
  handleMenuToggle: () => any;
  sectionContainerRef: RefObject<HTMLDivElement>;
}

export default function Header({
  handleMenuToggle,
  sectionContainerRef,
}: Props) {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.onscroll = () => {
      if (
        window.pageYOffset >
        sectionContainerRef!.current!.scrollHeight * 0.7
      ) {
        headerRef.current?.classList.remove("text-white");
        headerRef.current?.classList.add("text-black");
      } else {
        headerRef.current?.classList.remove("text-black");
        headerRef.current?.classList.add("text-white");
      }
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 w-full z-40 bg-[#fffcf205] backdrop-blur-md text-white transition-all ease-linear duration-300"
      >
        <div className="container-screen flex justify-between py-5">
          <button
            className="font-heading text-sm xl:text-2xl  font-extralight"
            onClick={() => scrollTop()}
          >
            MARLON ANDRADE
          </button>
          <ul className="flex items-center gap-6  ">
            <li>
              <button className="hidden xl:block text-2xl">
                <BsInstagram></BsInstagram>
              </button>
            </li>
            <li>
              <button className="hidden xl:block text-2xl">
                <BsWhatsapp></BsWhatsapp>
              </button>
            </li>
            <li>
              <button
                className="text-2xl"
                onClick={() => {
                  handleMenuToggle();
                }}
              >
                <FiMenu></FiMenu>
              </button>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
