import Image from "next/image"

export default function ChessExplainer() {
    return (
        <div className="text-white flex flex-col items-center gap-8 px-4 py-12 mt-8">
            <div className="w-full md:w-2/3 space-y-8">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                    Chess Explainer AI
                </h2>

                <div className="w-full md:w-2/3 mb-8">
                    <Image
                        src="/chess-explainer.png"
                        alt="Chess Explainer Project"
                        width={1920}
                        height={1080}
                        className="rounded-lg"
                    />
                </div>

                <section className="space-y-4">
                    <h3 className="text-2xl font-semibold">Overview</h3>
                    <p className="text-gray-300">
                        A deep learning project that leverages Large Language Models (LLMs) to analyze chess positions and generate human-like strategic analysis. The system combines advanced language model capabilities with chess-specific knowledge to provide detailed position evaluations and move recommendations.
                    </p>
                </section>

                <section className="space-y-4">
                    <h3 className="text-2xl font-semibold">Technical Implementation</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>Fine-tuned DeepSeek-R1-Distill-Llama-8B model using Parameter Efficient Fine-Tuning (PEFT)</li>
                        <li>Implemented LoRA (Low-Rank Adaptation) for efficient model training</li>
                        <li>Utilized unsloth library for optimized training and inference performance</li>
                        <li>Developed custom prompt engineering system for structured chess analysis</li>
                        <li>Deployed on Google Colab utilizing A100 GPU acceleration</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h3 className="text-2xl font-semibold">Key Features</h3>
                    <p className="text-gray-300">Accepts chess positions in standard notation format</p>
                    <p className="text-gray-300">Generates comprehensive position analysis including:</p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                        <li>Material balance evaluation</li>
                        <li>King safety assessment</li>
                        <li>Piece activity and coordination</li>
                        <li>Pawn structure analysis</li>
                        <li>Tactical opportunities</li>
                        <li>Strategic plans for both sides</li>
                    </ul>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>Outputs best move recommendations in UCI notation</li>
                        <li>Provides reasoning for suggested moves</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h3 className="text-2xl font-semibold">Model Training</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>Used carefully engineered prompts to guide the model&apos;s analysis</li>
                        <li>Implemented efficient fine-tuning techniques to preserve model knowledge while adapting to chess analysis</li>
                        <li>Optimized for both accuracy and inference speed</li>
                        <li>Validated against known chess positions and engine analysis</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h3 className="text-2xl font-semibold">Technical Architecture</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>Base Model: DeepSeek-R1-Distill-Llama-8B</li>
                        <li>Training Framework: PyTorch with PEFT</li>
                        <li>Optimization: LoRA for parameter-efficient training</li>
                        <li>Infrastructure: Google Colab with GPU acceleration</li>
                        <li>Key Libraries: transformers, unsloth, PEFT, torch</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h3 className="text-2xl font-semibold">Future Improvements</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>Integration with chess GUI interfaces</li>
                        <li>Real-time analysis capabilities</li>
                        <li>Expanded training dataset</li>
                        <li>Multi-language support</li>
                        <li>Enhanced visualization of analysis</li>
                    </ul>
                </section>

                <p className="text-gray-300 mt-8">
                    This project demonstrates the application of state-of-the-art language models to specialized domains, combining the pattern recognition capabilities of LLMs with domain-specific knowledge in chess strategy and tactics.
                </p>
            </div>
        </div>
    )
}
