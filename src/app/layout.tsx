import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "../styles/globals.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cinzel",
  display: 'swap',
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "ENRIQUE | Precision Luxury Timepieces",
  description: "Experience the mastery of ENRIQUE time instruments. Swiss engineering, timeless design.",
};

import { ThemeProvider } from '@/context/ThemeContext';
import GlobalLoader from "@/components/ui/GlobalLoader";
import ShaderBackground from "@/components/ui/ShaderBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${inter.variable}`}>
        <ThemeProvider>
          <GlobalLoader />
          <ShaderBackground />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

