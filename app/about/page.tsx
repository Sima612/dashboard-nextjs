import NavbarPage from "../navbar/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <NavbarPage />
      <div>About Us Page</div>
    </>
  );
}
