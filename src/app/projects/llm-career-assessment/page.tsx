import Image from "next/image"

export default function CareerAssessment() {
    return (
        <div className="text-white flex flex-col items-center gap-8 px-4 py-12 mt-8">
            <div className="w-full md:w-2/3 space-y-8">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                    LLM-Powered Career Assessment
                </h2>

                <div className="w-full md:w-2/3 mb-8">
                    <Image
                        src="/llm-career-assessment.png"
                        alt="Career Assessment Tool Project"
                        width={1920}
                        height={1080}
                        className="rounded-lg"
                    />
                </div>

                <section className="space-y-4">
                    <h3 className="text-2xl font-semibold">Overview</h3>
                    <p className="text-gray-300">
                        I developed an intelligent career guidance system that helps users discover their ideal career paths through AI-powered analysis. The system combines interactive questionnaires with machine learning to deliver personalized career recommendations.
                    </p>
                </section>

                <section className="space-y-4">
                    <h3 className="text-2xl font-semibold">Key Features</h3>
                    <div className="space-y-4">
                        <h4 className="text-xl font-medium">Dynamic Question System</h4>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>Scale-based questions for measuring preferences between different traits</li>
                            <li>Multiple-choice selections for specific skills and interests</li>
                            <li>Follow-up questions that dig deeper based on previous answers</li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-xl font-medium">AI-Powered Analysis</h4>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>Analyze user responses and identify patterns</li>
                            <li>Match personality traits and preferences with career requirements</li>
                            <li>Generate personalized explanations for each career recommendation</li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-xl font-medium">Intelligent Results</h4>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>Career titles matched to user&apos;s profile</li>
                            <li>Percentage-based compatibility scores</li>
                            <li>Personalized explanations for why each career would be a good fit</li>
                        </ul>
                    </div>
                </section>

                <section className="space-y-4">
                    <h3 className="text-2xl font-semibold">Technical Implementation</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>Built with React for the frontend interface</li>
                        <li>Integrated advanced LLM (Large Language Model) for response analysis</li>
                        <li>Implemented responsive design for seamless use across devices</li>
                        <li>Developed custom algorithms for career matching and scoring</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h3 className="text-2xl font-semibold">Impact</h3>
                    <p className="text-gray-300">This tool helps users make more informed career decisions by:</p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                        <li>Providing data-driven career suggestions</li>
                        <li>Offering insights into career compatibility</li>
                        <li>Explaining the reasoning behind each recommendation</li>
                    </ul>
                    <p className="text-gray-300 mt-4">
                        The project demonstrates my ability to create complex, user-focused applications that combine modern web technologies with artificial intelligence to solve real-world problems.
                    </p>
                </section>
            </div>
        </div>
    )
}