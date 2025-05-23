import Image from "next/image"
import React from "react"

interface Props {
    src: string
    title: string
    description: string
}

const ProjectCard = ({ src, title, description }: Props) => {
    return (
        <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
            <div className="relative w-full aspect-[16/9]">
                <Image
                    src={src}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="33vw"
                />
            </div>

            <div className="relative p-4">
                <h1 className="text-2xl font-semibold text-white">{title}</h1>
                <p className="mt-2 text-gray-300">{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard
