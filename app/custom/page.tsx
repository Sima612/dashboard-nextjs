import NavbarPage from "../navbar/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom",
};

const steps = [
  {
    name: "Step 1",
    src: "/images/pearcutring.png",
    description: "Descriptions",
  },
  { name: "Step 2", src: "", description: "Descriptions" },
  { name: "Step 3", src: "", description: "Descriptions" },
];

export default function CustomPage() {
  return (
    <>
      <NavbarPage />
      <main className="relative w-screen h-screen mt-2">
        <h1 className="w-1/2 mt-2 text-center mx-auto">
          "Inspiration / custom quote goes here"
        </h1>
        <div className="w-full h-full mt-2">Pictures goes here</div>
      </main>
    </>
  );
}
