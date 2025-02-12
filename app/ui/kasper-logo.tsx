import { dmserif } from "@/app/ui/fonts";
import Image from "next/image";

export default function KasperLogo() {
  return (
    <div
      className={`${dmserif.className} relative flex flex-row h-full items-center leading-none text-white justify-around`}
    >
      <Image
        src="/images/logo.png"
        width={135}
        height={135}
        alt="Kasper logo"
        className="z-10"
      />
      <p className="text-[36px] pt-11 pr-2 pl-1 absolute z-10 left-28">
        asperTheJeweler
      </p>
    </div>
  );
}
