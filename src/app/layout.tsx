// import type { Metadata } from "next"
// import { Cormorant_Garamond, Poppins } from "next/font/google"
// import "./globals.css"
// import Link from "next/link"
// import Providers from "@/components/Providers"
// import ThemeSwitch from "@/components/ThemeSwitch"

// const cormorantGaramond = Cormorant_Garamond({
//     subsets: ["latin"],
//     variable: "--font-cormorant-garamond",
//     weight: ["400"],
// })

// const poppins = Poppins({
//     subsets: ["latin"],
//     variable: "--font-poppins",
//     weight: ["400", "600"],
// })

// export const metadata: Metadata = {
//     title: "Personal Website",
//     description: "A portfolio showcasing my work and projects.",
// }

// export default function RootLayout({
//     children,
// }: Readonly<{
//     children: React.ReactNode
// }>) {
//     return (
//         <html lang="en" suppressHydrationWarning>
//             <body
//                 className={`${cormorantGaramond.variable} ${poppins.variable} antialiased overflow-y-scroll overflow-x-hidden`}
//             >
//                 <Providers>
//                     <nav className="p-4">
//                         <div className="flex">
//                             <ul className="flex justify-between w-2/3">
//                                 <li>
//                                     <Link href="/">Home</Link>
//                                 </li>
//                             </ul>
//                             <ul className="flex justify-between w-1/3">
//                                 <li>
//                                     <Link href="/about">About</Link>
//                                 </li>
//                                 <li>
//                                     <Link href="/blogs">Blogs</Link>
//                                 </li>
//                                 <li>
//                                     <Link href="/projects">Projects</Link>
//                                 </li>
//                                 <li>
//                                     <Link href="/contact">Contact</Link>
//                                 </li>
//                                 <li>
//                                     <Link href="/beyond-work">Beyond Work</Link>
//                                 </li>
//                                 <li>
//                                     <ThemeSwitch />
//                                 </li>
//                             </ul>
//                         </div>
//                     </nav>
//                     {children}
//                 </Providers>
//             </body>
//         </html>
//     )
// }

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import StarsCanvas from "@/components/main/StarBackground"
import Navbar from "@/components/main/Navbar"
import Footer from "@/components/main/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Hubert Huang",
    description: "This is my portfolio",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="scrollbarThin">
            <body
                className={`${inter.className} bg-[#030014] overflow-y-auto overflow-x-hidden`}
            >
                <StarsCanvas />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
