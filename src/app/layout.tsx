import type { Metadata } from "next";
import localFont from "next/font/local";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Providers from "@/components/Providers"
import ThemeSwitch from "@/components/ThemeSwitch";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
  weight: ["400"],
})

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "600"],
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Personal Website",
  description: "A portfolio showcasing my work and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      
      <body
        className={`${cormorantGaramond.variable} ${poppins.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <nav className="p-4">
            <div className="flex">
              <ul className="flex justify-between w-2/3">
                <li><Link href="/">Home</Link></li>
              </ul>
              <ul className="flex justify-between w-1/3">
                <li><Link href="/about">About</Link></li>
                <li><Link href="/blogs">Blogs</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><ThemeSwitch /></li>
              </ul>
            </div>
          </nav>
          {children}
        </Providers>
      </body>
    </html>
  );
}
