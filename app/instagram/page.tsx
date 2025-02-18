import NavbarPage from "../navbar/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instagram",
};

export default function InstagramPage() {
  return (
    <>
      <NavbarPage />
      <div>Instagram Page</div>
    </>
  );
}
