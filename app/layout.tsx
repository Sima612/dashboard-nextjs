"use client";

import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { Metadata } from "next";
import { ThemeProvider } from "@material-tailwind/react";

// export const metadata: Metadata = {
//   title: {
//     template: "%s | YSI Diamond",
//     default: "YSI Diamond",
//   },
//   description: "The official website of YSI Diamond.",
//   metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
