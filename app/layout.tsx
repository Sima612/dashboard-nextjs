import "@/app/ui/global.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | YSI Diamond",
    default: "YSI Diamond",
  },
  description: "The official website of YSI Diamond.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className="w-screen h-screen bg-gradient-to-br from-zinc-700 from-10% via-zinc-800 via-50% to-zinc-900 to-90%"
      lang="en"
    >
      <body>{children}</body>
    </html>
  );
}
