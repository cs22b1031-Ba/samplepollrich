import type { Metadata } from "next";
import { Manrope, Rajdhani } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body"
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Pollrich India | Industrial Airflow Systems",
  description:
    "High-performance industrial airflow systems for cement, power, chemical, steel, mining, and petrochemical applications."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${rajdhani.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
