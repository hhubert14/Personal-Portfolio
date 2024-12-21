import ArticleItemList from "@/components/articles/ArticleItemList"
import { getCategorisedArticles } from "@/lib/articles"

const HomePage = () => {
    const articles = getCategorisedArticles()
    console.log(`articles: ${JSON.stringify(articles)}`)

    return (
        <section className="mx-auto w-11/12 md:w-1/2 mt-20 flex flex-col gap-16 mb-20 text-white">
            <header className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-6xl text-center">
                <h1>Articles</h1>
            </header>
            <section className="md:grid md:grid-cols-2 flex flex-col gap-10">
                {/* <section> */}
                {articles !== null &&
                    Object.keys(articles).map((article) => (
                        <ArticleItemList
                            category={article}
                            articles={articles[article]}
                            key={article}
                        />
                    ))}
            </section>
        </section>
    )
}

export default HomePage
