import { FiMenu } from "react-icons/fi";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";

interface Props {
  handleMenuToggle: () => any;
}

export default function Header({ handleMenuToggle }: Props) {
  return (
    <>
      <header className="fixed top-0 w-full z-40 bg-[#fffcf205] backdrop-blur-md">
        <div className="container-screen flex justify-between py-5">
          <h3 className="text-sm xl:text-2xl text-white font-extralight">
            MARLON ANDRADE
          </h3>
          <ul className="flex items-center gap-6 text-white ">
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
