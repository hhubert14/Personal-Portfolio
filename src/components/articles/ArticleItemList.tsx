import Link from "next/link"
import type { ArticleItem } from "@/types"

interface Props {
    category: string
    articles: ArticleItem[]
}

const ArticleItemList = ({ category, articles }: Props) => {
    return (
        <div className="flex flex-col items-center gap-5">
            <h2 className="text-4xl text-center">{category}</h2>
            <div className="flex flex-col items-center gap-2.5 text-lg">
                {articles.map((article, id) => (
                    <Link
                        href={`/articles/${article.id}`}
                        key={id}
                        className="text-white hover:text-purple-400 transition duration-150 border-b"
                    >
                        {article.title}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ArticleItemList
