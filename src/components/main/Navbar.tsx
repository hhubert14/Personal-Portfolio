import { Socials } from "../../constants"
import Image from "next/image"
import React from "react"
import Link from "next/link"

const Navbar = () => {
    return (
        <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
            <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
                <Link
                    href="/#about-me"
                    className="h-auto w-auto flex flex-row items-center"
                >
                    <Image
                        src="/NavLogo.png"
                        alt="logo"
                        width={150}
                        height={150}
                        className="cursor-pointer hover:animate-slowspin"
                    />
                </Link>

                <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20 ml-10">
                    <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                        <Link href="/#about-me" className="cursor-pointer">
                            About me
                        </Link>
                        <Link href="/#skills" className="cursor-pointer">
                            Skills
                        </Link>
                        <Link href="/#projects" className="cursor-pointer">
                            Projects
                        </Link>
                        <Link href="./articles" className="cursor-pointer">
                            Articles
                        </Link>
                    </div>
                </div>

                <div className="flex flex-row gap-5">
                    {Socials.map((social) => (
                        <Image
                            src={social.src}
                            alt={social.name}
                            key={social.name}
                            width={24}
                            height={24}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Navbar