import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navbar";
import Footer from "@/components/footer";

const comfortaa = Comfortaa({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "John Jang the Developer",
  description: "Where my design imagination comes true in code",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${comfortaa.className} mx-12`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
