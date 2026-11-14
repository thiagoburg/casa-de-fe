import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Casa de Fe — Un lugar para vos",
  description: "Una comunidad de fe, esperanza y amor en Buenos Aires. Siempre hay lugar en la mesa.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es-AR"><body className={`${inter.variable} ${playfair.variable}`}>{children}</body></html>;
}
