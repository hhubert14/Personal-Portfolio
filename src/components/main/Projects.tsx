"use client"

import React from "react"
import ProjectCard from "../sub/ProjectCard"
import { useRouter } from "next/navigation"

const Projects = () => {
    const router = useRouter()

    const navigateToProject = (path: string) => {
        router.push(`/projects/${path}`)
    }
    
    return (
        <div
            className="flex flex-col items-center justify-center"
            id="projects"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                My Projects
            </h1>
            <div className="h-full w-full grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
                <div className="w-full max-w-[400px] mx-auto cursor-pointer" onClick={() => navigateToProject('chess-explainer')}>
                    <ProjectCard
                        src="/chess-explainer.png"
                        title="Chess Explainer AI"
                        description="A deep learning project that fine-tunes the DeepSeek-R1-Distill-Llama-8B language model to analyze chess positions and generate detailed strategic analysis. The system takes chess positions in standard notation, processes them through a custom-engineered prompt structure, and outputs comprehensive position evaluations including material balance, king safety, piece activity, and strategic plans, along with the best move in UCI notation. The model is optimized using LoRA and PEFT techniques for efficient training and deployment."
                    />
                </div>
                <div className="w-full max-w-[400px] mx-auto cursor-pointer" onClick={() => navigateToProject('llm-career-assessment')}>
                    <ProjectCard
                        src="/llm-career-assessment.png"
                        title="LLM-Powered Career Assessment"
                        description="The LLM career assessment is an AI-powered questionnaire that analyzes your preferences, values, and personality traits through a series of interactive questions. After completing the assessment, it generates personalized career suggestions, each with a match percentage and explanation of why that career path would be a good fit for you."
                    />
                </div>
                <div className="w-full max-w-[400px] mx-auto cursor-pointer" onClick={() => navigateToProject('tiktok-scraper')}>
                    <ProjectCard
                        src="/tiktok-videos.png"
                        title="TikTok Scraper Automation"
                        description='An automated tool that scrapes TikTok for career-related content across 180+ professions. The scraper intelligently searches for videos using multiple query patterns (e.g., "day in the life", salary information, career paths) and leverages GPT to generate profession-specific keywords for comprehensive coverage.'
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects
