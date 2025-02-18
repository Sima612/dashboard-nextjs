import {
  DM_Serif_Text,
  Do_Hyeon,
  Inter,
  Libre_Baskerville,
  Lusitana,
} from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const lusitana = Lusitana({ subsets: ["latin"], weight: "400" });
export const dmserif = DM_Serif_Text({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});
export const libre = Libre_Baskerville({ subsets: ["latin"], weight: "700" });
export const doHyeon = Do_Hyeon({ subsets: ["latin"], weight: "400" });
