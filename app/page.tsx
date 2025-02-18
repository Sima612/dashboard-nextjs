"use client";

import NavbarPage from "./navbar/page";
import { doHyeon } from "./ui/fonts";
import { Carousel } from "@material-tailwind/react";

export default function HomePage() {
  const imageSliders = [
    { name: "Cow", src: "/images/cow.png", description: "Descriptions" },
    {
      name: "Pablo x El Chapo",
      src: "/images/pablo.png",
      description: "Descriptions",
    },
    {
      name: "Custom Pendant",
      src: "/images/jorge.png",
      description: "Descriptions",
    },
    {
      name: "Yoshi Pendant",
      src: "/images/yoshi.png",
      description: "Descriptions",
    },
    {
      name: "Memorial Pendant",
      src: "/images/pugpendant.png",
      description: "Descriptions",
    },
    {
      name: "Cuban x Gucci Bracelet",
      src: "/images/cubanxgucci.png",
      description: "Descriptions",
    },
    {
      name: "Various Diamond Chains",
      src: "/images/chains.png",
      description: "Descriptions",
    },
    {
      name: "Rolex Watch",
      src: "/images/rolex.png",
      description: "Descriptions",
    },
  ];

  return (
    <>
      <NavbarPage />
      <main className="relative flex flex-wrap h-screen w-screen overflow-y-hidden">
        <h1
          className={`${doHyeon.className} w-full h-12 flex items-center justify-center mx-auto text-4xl mt-2 font-semibold tracking-[20px] text-pretty text-gray-900`}
        >
          YSI DIAMOND
        </h1>
        <div className="w-screen flex flex-wrap justify-around gap-36">
          <Carousel
            autoplay
            loop
            transition={{ duration: 1 }}
            className="rounded-xl overflow-hidden h-3/4 w-1/3 p-none m-2"
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
            placeholder={null}
            onPointerEnterCapture={null}
            onPointerLeaveCapture={null}
          >
            {imageSliders.map((image) => {
              return (
                <img
                  key={image.name}
                  src={image.src}
                  alt={image.name}
                  className="h-full w-full object-cover object center"
                />
              );
            })}
          </Carousel>
          <Carousel
            autoplay
            loop
            transition={{ duration: 1 }}
            className="rounded-xl overflow-hidden h-3/4 w-1/3 p-none m-2"
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
            placeholder={null}
            onPointerEnterCapture={null}
            onPointerLeaveCapture={null}
          >
            {imageSliders.map((image) => {
              return (
                <img
                  key={image.name}
                  src={image.src}
                  alt={image.name}
                  className="h-full w-full object-cover object center"
                />
              );
            })}
          </Carousel>
        </div>
      </main>
    </>
  );
}
