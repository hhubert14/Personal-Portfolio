import Link from "next/link"
import { ArrowLeftIcon } from "@heroicons/react/24/solid"
import { getArticleData } from "@/lib/articles"
import Sidebar from "@/components/articles/Sidebar"

const Article = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const articleData = await getArticleData((await params).slug)
    console.log(`articleData.contentHtml: ${articleData.contentHtml}`)

    if (!articleData) {
        return <div>Article not found</div>
    }

    return (
        <div className="flex flex-row overflow-y-auto">
            <Sidebar headings={articleData.headings} />
            <section className="mx-auto w-full md:w-3/4 mt-20 flex flex-col gap-5 text-white bg-black bg-opacity-75 p-10 shadow-[0px_0px_25px_25px_rgba(0,0,0,0.75)]">
                <div className="flex justify-between font-poppins">
                    <Link
                        href={"/articles"}
                        className="flex flex-row gap-1 place-items-center"
                    >
                        <ArrowLeftIcon width={20} />
                        <p>back to articles</p>
                    </Link>
                    <p>{articleData.date.toString()}</p>
                </div>
                <article
                    className="article p-5"
                    dangerouslySetInnerHTML={{
                        __html: articleData.contentHtml,
                    }}
                />
            </section>
        </div>
    )
}

export default Article
