import { FiMenu } from "react-icons/fi";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { RefObject, useEffect, useRef } from "react";
import { useAnimationControls } from "framer-motion";
import { Urls } from "../constants/urls";
import Link from "next/link";

interface Props {
  handleMenuToggle: () => any;
  sectionContainerRef: RefObject<HTMLDivElement>;
}

export default function Header({
  handleMenuToggle,
  sectionContainerRef,
}: Props) {
  const headerRef = useRef<HTMLDivElement>(null);
  const section5Ref = document.querySelector("#section5") as HTMLElement

  useEffect(() => {
    window.onscroll = () => {
      changeHeaderColor();
      toggleHeaderVisibility();
    };
  }, []);

  const changeHeaderColor = () => {
    if (window.pageYOffset > section5Ref!.offsetTop) {
      headerRef.current?.classList.remove("text-white");
      headerRef.current?.classList.add("text-black");
      return;
    }
    headerRef.current?.classList.remove("text-black");
    headerRef.current?.classList.add("text-white");
  };

  const toggleHeaderVisibility = () => {
    if (window.pageYOffset >= sectionContainerRef!.current!.offsetTop) {
      headerRef.current?.classList.remove("opacity-0");
      headerRef.current?.classList.add("opacity-100");
      return;
    }
    headerRef.current?.classList.remove("opacity-100");
    headerRef.current?.classList.add("opacity-0");
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header
        ref={headerRef}
        className="fixed opacity-0 top-0 w-full z-40 bg-[#fffcf205]
         backdrop-blur-md text-white transition-all ease-linear duration-300"
      >
        <div className="container-screen flex justify-between py-5">
          <button
            className="font-heading fluid-xl font-extralight"
            onClick={() => scrollTop()}
          >
            MARLON ANDRADE
          </button>
          <ul className="flex items-center gap-6  ">
            <li>
              <Link aria-label="Instagram" href={Urls.instagram} target="_blank" className="hidden xl:block text-2xl hover:scale-110 duration-100">
                <BsInstagram></BsInstagram>
              </Link>
            </li>
            <li>
              <Link aria-label="Whatsapp" href={Urls.whatsapp} target="_blank" className="hidden xl:block text-2xl hover:scale-110 duration-100">
                <BsWhatsapp></BsWhatsapp>
              </Link>
            </li>
            <li className="h-6">
              <button
                aria-label="Menu"
                className="text-2xl hover:scale-110 duration-100"
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
