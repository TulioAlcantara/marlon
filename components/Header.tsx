export default function Header() {
  return (
    <>
      <header className="fixed top-0 w-full">
        <div className="flex justify-between container mx-auto py-5">
          <h3 className="text-2xl text-white font-extralight">
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
