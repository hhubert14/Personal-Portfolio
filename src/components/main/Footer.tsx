import React from "react"
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx"
import Link from "next/link"

// import { FaYoutube } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-start justify-around flex-wrap">
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Learn More</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <Link href="/#about-me">About me</Link>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <Link href="/#skills">Skills</Link>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <Link href="/#projects">Projects</Link>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <Link href="/articles">Articles</Link>
                        </p>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">
                            Social Media
                        </div>
                        <a
                            href={"https://github.com/hhubert14"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row items-center my-[15px] cursor-pointer"
                        >
                            <RxGithubLogo />
                            <span className="text-[15px] ml-[6px]">Github</span>
                        </a>
                        <a
                            href={"https://www.linkedin.com/in/huberthuang1/"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row items-center my-[15px] cursor-pointer"
                        >
                            <RxLinkedinLogo />
                            <span className="text-[15px] ml-[6px]">
                                Linkedin
                            </span>
                        </a>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Contact me</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <span className="text-[15px] ml-[6px]">
                                (617)-301-1620
                            </span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <span className="text-[15px] ml-[6px]">
                                hubert.huang.business@gmail.com
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
