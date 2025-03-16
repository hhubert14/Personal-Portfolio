import Image from "next/image"
import Link from "next/link"

export default function TikTokScraper() {
    return (
        <div className="text-white flex flex-col items-center gap-8 px-4 py-12 mt-8">
            <div className="w-full md:w-2/3 space-y-8">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                    TikTok Scraper Automation
                </h2>

                <div className="w-full md:w-2/3 mb-8">
                    <Image
                        src="/tiktok-videos.png"
                        alt="TikTok Scraper Project"
                        width={1920}
                        height={1080}
                        className="rounded-lg"
                    />
                </div>

                <section className="space-y-4">
                    <h3 className="text-2xl font-semibold">Project Overview</h3>
                    <p className="text-gray-300">
                        Developed a sophisticated web scraping system that automatically discovers, downloads, and organizes TikTok content related to professional careers. The project aims to create a comprehensive library of career-related content by systematically collecting videos that provide insights into different professions.
                    </p>
                </section>

                <section className="space-y-4">
                    <h3 className="text-2xl font-semibold">Technical Architecture</h3>
                    
                    <div className="space-y-4">
                        <h4 className="text-xl font-medium">Core Components</h4>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>Automated Web Scraper: Built using Python and Selenium WebDriver to navigate TikTok&apos;s dynamic content</li>
                            <li>Intelligent Search System:</li>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-8">
                                <li>Implements multiple search patterns for each profession (e.g., &quot;day in the life&quot;, salary discussions, career paths)</li>
                                <li>Integrates with OpenAI&apos;s GPT to generate profession-specific keywords for enhanced content discovery</li>
                                <li>Covers 180+ professional careers ranging from traditional roles to emerging tech positions</li>
                            </ul>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xl font-medium">Data Processing</h4>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>Content Filtering: Implements view count thresholds to ensure content quality</li>
                            <li>Contact Extraction: Automatically extracts creator contact information using regex patterns</li>
                            <li>Metadata Management: Stores comprehensive video metadata including creator details, URLs, and engagement metrics</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xl font-medium">Storage & Integration</h4>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>Local Storage System:</li>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-8">
                                <li>Organizes downloaded videos in a hierarchical folder structure</li>
                                <li>Implements file sanitization for cross-platform compatibility</li>
                                <li>Stores metadata alongside videos for easy reference</li>
                            </ul>
                            <li>Google Sheets Integration:</li>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-8">
                                <li>Custom REST API built with Google Apps Script for automated data logging</li>
                                <li>Real-time synchronization of scraped content to spreadsheets</li>
                                <li>Enables easy content analysis and sharing</li>
                            </ul>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xl font-medium">Error Handling & Reliability</h4>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>Implements retry mechanisms for failed downloads</li>
                            <li>Handles rate limiting and session management</li>
                            <li>Maintains data integrity through careful error handling</li>
                        </ul>
                    </div>
                </section>

                <section className="space-y-4">
                    <h3 className="text-2xl font-semibold">Technical Stack</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>Python</li>
                        <li>Selenium WebDriver</li>
                        <li>OpenAI API</li>
                        <li>Google Apps Script</li>
                        <li>RESTful APIs</li>
                        <li>Regular Expressions</li>
                        <li>ChromeDriver</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h3 className="text-2xl font-semibold">Impact</h3>
                    <p className="text-gray-300">
                        The system efficiently aggregates career-related content that can be used for career guidance, educational purposes, or market research. It demonstrates expertise in web automation, API integration, and data management while solving a real-world content aggregation challenge.
                    </p>
                </section>
                <div>
                    See <Link className="underline hover:text-purple-500" href={"https://github.com/hhubert14/tiktok-scraper-automation"}>GitHub Repository</Link>
                </div>
            </div>
        </div>
    )
}