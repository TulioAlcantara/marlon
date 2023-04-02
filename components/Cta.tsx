import { BsArrowRight } from "react-icons/bs";


interface Props {
  label: string,
  url: string,
  white?: boolean
}

export default function Cta({ label, url, white }: Props) {
  return <>
    <a className={`flex items-center w-fit gap-2 py-4 px-8 text-lg xl:text-2xl rounded-full
      text-white bg-black hover:bg-lightGray hover:text-black duration-300
      ${white ? 'bg-white text-black hover:bg-black hover:text-white' : ''}`}
      href={url}><BsArrowRight></BsArrowRight>{label}
    </a>
  </>
}
