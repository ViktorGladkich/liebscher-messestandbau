import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer"; 

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Liebscher Messestandbau | Innovative Standkonzepte",
  description: "Ihr Partner für professionellen Messebau und unvergessliche Markenpräsentationen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-primary text-lightText flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main> 
        <Footer /> 
      </body>
    </html>
  );
}