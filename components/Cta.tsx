import { BsArrowRight } from "react-icons/bs";


interface Props {
  label: string,
  url: string,
}

export default function Cta({ label, url }: Props) {
  return <>
    <a className="flex items-center w-fit gap-2 bg-black py-4 px-8  text-xl xl:text-2xl rounded-full hover:bg-white hover:text-black duration-300"
      href={url}><BsArrowRight></BsArrowRight>{label}
    </a>
  </>
}
