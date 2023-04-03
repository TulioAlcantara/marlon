import { BsArrowRight } from "react-icons/bs";


interface Props {
  label: string,
  url: string,
  white?: boolean
  noBorder?: boolean
}

export default function Cta({ label, url, white, noBorder }: Props) {
  return <>
    <a className={`flex items-center w-fit gap-2 py-4 px-8 text-lg xl:text-2xl rounded-full
      text-white bg-black border-solid border-[1px] black hover:bg-white hover:text-black duration-300
      ${white ? 'bg-white text-black !border-white hover:!bg-[#1c1c1c] hover:text-white' : ''}
      ${noBorder ? '!border-none' : ''}`}
      href={url} target="_blank"><BsArrowRight></BsArrowRight>{label}
    </a>
  </>
}
