export default function Header() {
  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-[#fffcf205] backdrop-blur-md">
        <div className="container-screen flex justify-between py-5">
          <h3 className="text-sm xl:text-2xl text-white font-extralight">
            MARLON ANDRADE
          </h3>
          <div className="flex gap-6">
            <img className="h-[22px]" src="/icons/instagram.svg"></img>
            <img className="h-[22px]" src="/icons/whatsapp.svg"></img>
            <img className="h-[22px]" src="/icons/hamburger.svg"></img>
          </div>
        </div>
      </header>
    </>
  );
}
