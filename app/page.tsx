"use client";

import NavbarPage from "./navbar/page";
import { libre, doHyeon } from "./ui/fonts";
import { Typography, IconButton } from "@material-tailwind/react";
import { Instagram } from "iconoir-react";
import Link from "next/link";
import Image from "next/image";

const YEAR = new Date().getFullYear();

export default function HomePage() {
  return (
    <main className="relative">
      <NavbarPage />
      <div
        className="absolute h-screen top-0 left-0 w-1/25 bg-gradient-to-b from-zinc-700 from-10% via-zinc-800 via-50% to-zinc-900 to-90% border-none"
        style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
      >
        <div className="relative h-18 w-full">
          <Image
            fill={true}
            style={{ objectFit: "contain" }}
            src="/images/diamond-nobg.png"
            alt="diamond logo"
          />
        </div>
        <h1
          className={`${doHyeon.className} absolute h-screen top-0 left-0 w-full items-center flex justify-center text-4xl font-semibold tracking-[20px] text-pretty text-white`}
        >
          YSI DIAMOND
        </h1>
        <div className="absolute h-18 w-full left-0 bottom-0">
          <Image
            fill={true}
            objectFit="contain"
            src="/images/diamond-nobg.png"
            alt="diamond logo"
          />
        </div>
      </div>

      <div className="flex h-full mx-auto w-full justify-center items-center">
        <video className="h-full w-full" autoPlay loop muted>
          <source src="/videos/landingpage.mp4" type="video/mp4" />
        </video>
      </div>

      <footer className="w-full h-full mx-auto px-8 text-white mt-6">
        <div className="flex w-full flex-col items-center justify-center gap-4 border-t border-surface py-4 md:flex-row md:justify-center">
          <Typography type="small" className={`${libre.className} text-center`}>
            &copy; {YEAR} <Link href="">YSI Diamond</Link>. All Rights Reserved.
          </Typography>
          <div className="flex gap-1 sm:justify-center">
            <Link
              href="https://www.instagram.com/kasperthejeweler/?hl=en"
              target="_blank"
            >
              <IconButton color="secondary" variant="ghost" size="sm">
                <Instagram className="h-6 w-6 cursor-pointer" />
              </IconButton>
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
