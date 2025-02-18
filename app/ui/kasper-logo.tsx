import Image from "next/image";

export default function KasperLogo() {
  return (
    <Image
      src="/images/k-no-bg.png"
      fill={true}
      alt="Kasper logo"
      className="shadow-lg shadow-black bg-none"
    />
  );
}
