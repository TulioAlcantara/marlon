import { FiMenu } from "react-icons/fi";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";

export default function Header() {
  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-[#fffcf205] backdrop-blur-md">
        <div className="container-screen flex justify-between py-5">
          <h3 className="text-sm xl:text-2xl text-white font-extralight">
            MARLON ANDRADE
          </h3>
          <ul className="flex items-center gap-6 text-white ">
            <li>
              <BsInstagram className="hidden xl:block text-2xl"></BsInstagram>
            </li>
            <li>
              <BsWhatsapp className="hidden xl:block text-2xl"></BsWhatsapp>
            </li>
            <li>
              <FiMenu className="text-2xl"></FiMenu>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
