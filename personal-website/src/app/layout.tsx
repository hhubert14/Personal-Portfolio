import type { Metadata } from "next";
import localFont from "next/font/local";
import { Cormorant_Garamond, Poppins } from "next/font/google"
import "./globals.css";
import Link from "next/link";

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
    <html lang="en">
      <body
        className={`${cormorantGaramond.variable} ${poppins.variable} ${geistSans.variable} ${geistMono.variable} bg-amber-100 antialiased`}
      >
        <nav className="bg-gray-900 p-4">
          <div className="flex">
            <ul className="flex justify-between w-2/3">
              <li><Link href="/" className="text-white">Home</Link></li>
            </ul>
            <ul className="flex justify-between w-1/3">
              <li><Link href="/about" className="text-white">About</Link></li>
              <li><Link href="/blogs" className="text-white">Blogs</Link></li>
              <li><Link href="/projects" className="text-white">Projects</Link></li>
              <li><Link href="/contact" className="text-white">Contact</Link></li>
            </ul>
          </div>
          
        </nav>
        {children}
      </body>
    </html>
  );
}
