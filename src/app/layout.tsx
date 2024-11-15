import type { Metadata } from "next";
import "./globals.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";
import {Heebo, Inter} from "next/font/google";

const heebo = Heebo({subsets: ["latin"],weight: ["400","700", "900", "500"]})
const inter = Inter({subsets: ["latin"],weight: ["400","700"]})

export const metadata: Metadata = {
  title: "Website using Figma design",
  description: "converted a figma design into website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={heebo.className}>
        <Header font={inter}/>
        {children}
        <Footer />
        </body>
    </html>
  );
}
