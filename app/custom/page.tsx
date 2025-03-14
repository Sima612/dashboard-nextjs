"use client";

import NavbarPage from "../navbar/page";
import { Card, Typography } from "@material-tailwind/react";
import { doHyeon } from "../ui/fonts";

// export const metadata: Metadata = {
//   title: "Custom",
// };

const data = [
  {
    imageLink: "/images/IMG_9858.png",
  },
  {
    imageLink: "/images/IMG_9860.png",
  },
  {
    imageLink: "/images/IMG_9961.png",
  },
  {
    imageLink: "/images/IMG_9962.png",
  },
  {
    imageLink: "/images/IMG_9963.png",
  },
  {
    imageLink: "/images/IMG_9964.png",
  },
  {
    imageLink: "/images/IMG_9969.png",
  },
  {
    imageLink: "/images/IMG_9966.png",
  },
  {
    imageLink: "/images/IMG_9968.png",
  },
  {
    imageLink: "/images/IMG_9970.png",
  },
  {
    imageLink: "/images/IMG_9971.png",
  },
  {
    imageLink: "/images/IMG_9972.png",
  },
  {
    imageLink: "/images/IMG_9973.png",
  },
  {
    imageLink: "/images/IMG_9974.png",
  },
  {
    imageLink: "/images/IMG_9975.png",
  },
  {
    imageLink: "/images/IMG_9976.png",
  },
  {
    imageLink: "/images/IMG_9977.png",
  },
  {
    imageLink: "/images/IMG_9978.png",
  },
  {
    imageLink: "/images/IMG_9979.png",
  },
  {
    imageLink: "/images/IMG_9980.png",
  },
];

export default function CustomPage() {
  return (
    <>
      <NavbarPage />

      <main
        className={`${doHyeon.className} relative top-0 left-0 mx-auto w-screen h-screen bg-gradient-to-br from-zinc-700 from-10% via-zinc-800 via-50% to-zinc-900 to-90%`}
      >
        <div className="grid content-evenly grid-cols-1 gap-2 sm:grid-cols-3 md:grid-cols-5 w-screen h-screen">
          {data.map(({ imageLink }, index) => (
            <div key={index} className="w-full h-full grid">
              <img
                className="object-cover object-center w-full h-full max-w-full rounded-lg"
                src={imageLink}
                alt="gallery-photo"
              />
            </div>
          ))}
        </div>

        <Card className="absolute top-0 left-20 flex h-1/2 w-1/3 flex-row rounded-3xl border-8">
          <Card.Header className="h-full w-1/2 shrink-0 rounded-r-none">
            <img
              src="/images/sketch.png"
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </Card.Header>
          <Card.Body className="p-4 flex flex-col justify-center bg-[#374151] rounded-l-none text-[#f9fafb]">
            <Typography
              type="h5"
              className="mb-4 p-2 font-bold uppercase text-foreground"
            >
              STEP - 1
            </Typography>
            <Typography type="h4" className="mb-2 p-2">
              Inspiration
            </Typography>
            <Typography className="mb-8 p-2 text-foreground">
              ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laborum doloribus, architecto qui, quam eveniet sed fuga corrupti
              quia sapiente laboriosam facilis doloremque! Sint voluptates,
              accusantium excepturi quisquam adipisci quia praesentium.
            </Typography>
          </Card.Body>
        </Card>

        <Card className="absolute right-50 top-0 flex justify-end flex h-1/2 w-1/3 flex-row border-8 z-20 rounded-3xl">
          <Card.Body className="p-4 flex flex-col justify-center bg-[#374151] rounded-r-none text-[#f9fafb]">
            <Typography
              type="h5"
              className="mb-4 p-2 font-bold uppercase text-foreground"
            >
              STEP - 2
            </Typography>
            <Typography type="h4" className="mb-2 p-2">
              3D CAD / Rendition
            </Typography>
            <Typography className="mb-8 p-2 text-foreground">
              ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus aperiam aspernatur quis quo odit exercitationem maxime
              amet iste velit tempore, ex vitae dolorem tempora sint soluta.
              Minima beatae aut praesentium.
            </Typography>
          </Card.Body>
          <Card.Header className="h-full flex w-1/2 shrink-0 rounded-r-none">
            <img
              src="/images/cad.jpg"
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </Card.Header>
        </Card>

        <Card className="absolute bottom-10 left-110 flex h-1/2 w-1/3 flex-row border-8 rounded-3xl">
          <Card.Header className="m-0 h-full w-1/2 shrink-0 rounded-r-none">
            <video className="h-full w-full object-cover" autoPlay loop muted>
              <source src="/videos/finishedvideo.mp4" type="video/mp4" />
            </video>
          </Card.Header>
          <Card.Body className="p-4 flex flex-col justify-center bg-[#374151] rounded-l-none text-[#f9fafb]">
            <Typography
              type="h5"
              className="mb-4 p-2 font-bold uppercase text-foreground"
            >
              STEP - 3
            </Typography>
            <Typography type="h4" className="mb-2 p-2">
              Finished Product
            </Typography>
            <Typography className="mb-8 p-2 text-foreground">
              ipsum Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae dolore fuga voluptatem similique repellat alias
              corrupti minima pariatur magni odio accusantium molestiae
              provident nesciunt, eligendi quis fugit consectetur nisi! Optio?
            </Typography>
          </Card.Body>
        </Card>
      </main>
    </>
  );
}
