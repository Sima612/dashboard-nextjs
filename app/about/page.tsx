import NavbarPage from "../navbar/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <NavbarPage />
      <section className="relative px-6 py-24 text-white">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img
            alt=""
            src="/images/logo.png"
            className="mx-auto h-20 size-20 rounded-full"
          />
          <figure className="mt-10">
            <blockquote className="text-center text-xl/8 font-semibold sm:text-2xl/9">
              <p>
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                expedita voluptas culpa sapiente alias molestiae. Numquam
                corrupti in laborum sed rerum et corporis.”
              </p>
            </blockquote>
            <figcaption className="mt-5">
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold">Yoshi Isshod</div>
                <svg
                  width={3}
                  height={3}
                  viewBox="0 0 2 2"
                  aria-hidden="true"
                  className="fill-white"
                >
                  <circle r={1} cx={1} cy={1} />
                </svg>
                <div>CEO of YSI Diamond</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
