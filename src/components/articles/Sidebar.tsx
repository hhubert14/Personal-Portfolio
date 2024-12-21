"use client"

import Link from "next/link"
import { useState } from "react"

interface Props {
    headings: {
        text: string
        id: string
        level: number
    }[]
}

const Sidebar = ({ headings }: Props) => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(true)

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed)
    }

    return (
        <div
            className={`fixed top-16 left-0 h-[calc(100%-4rem)] flex flex-col text-white p-4 pl-2 bg-black bg-opacity-75 shadow-[0px_0px_25px_25px_rgba(0,0,0,0.75)] transition-transform duration-300 ${
                isCollapsed ? "-translate-x-full" : "translate-x-0"
            }`}
        >
            <button
                className="absolute top-2 right-[-25px] bg-black text-white p-2 rounded"
                onClick={toggleSidebar}
            >
                {isCollapsed ? "▶" : "◀"}
            </button>
            <div
                className="overflow-y-auto"
                style={{
                    direction: "rtl",
                }}
            >
                <div
                    style={{
                        direction: "ltr",
                    }}
                >
                    {headings.map(({ text, id, level }) => (
                        <Link
                            key={id}
                            href={`#${id}`}
                            className={"border-b block mb-2"}
                            style={{
                                marginLeft: `${level * 0.5}rem`,
                            }}
                        >
                            {text}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sidebar