import fs from "fs"
import matter from "gray-matter"
import path from "path"
import moment from "moment"
import { remark } from "remark"
import html from "remark-html"
import remarkHeadingId from "remark-heading-id"

import type { ArticleItem } from "@/types"

const articlesDirectory = path.join(process.cwd(), "src", "articles")

const getSortedArticles = (): ArticleItem[] => {
    const fileNames = fs.readdirSync(articlesDirectory)

    const allArticlesData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, "")

        const fullPath = path.join(articlesDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, "utf-8")

        const matterResult = matter(fileContents)

        return {
            id,
            title: matterResult.data.title,
            date: matterResult.data.date,
            category: matterResult.data.category,
        }
    })

    return allArticlesData.sort((a, b) => {
        const format = "DD-MM-YYYY"
        const dateOne = moment(a.date, format)
        const dateTwo = moment(b.date, format)
        if (dateOne.isBefore(dateTwo)) {
            return -1
        } else if (dateTwo.isAfter(dateOne)) {
            return 1
        } else {
            return 0
        }
    })
}

export const getCategorisedArticles = (): Record<string, ArticleItem[]> => {
    const sortedArticles = getSortedArticles()
    const categorisedArticles: Record<string, ArticleItem[]> = {}

    sortedArticles.forEach((article) => {
        if (!categorisedArticles[article.category]) {
            categorisedArticles[article.category] = []
        }

        categorisedArticles[article.category].push(article)
    })

    return categorisedArticles
}

const extractHeadings = (markdownContent: string) => {
    const headings = []
    const lines = markdownContent.split("\n")

    for (const line of lines) {
        const match = line.match(/^(#{1,6})\s+(.*)/)
        if (match) {
            const level = match[1].length // The number of `#` characters indicates the level
            const text = match[2].trim()
            const id =
                "user-content-" +
                text
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/[^a-z0-9-]/g, "")
            headings.push({ text, id, level })
        }
    }

    return headings
}

export const getArticleData = async (id: string) => {
    const fullPath = path.join(articlesDirectory, `${id}.md`)

    const fileContents = fs.readFileSync(fullPath, "utf-8")
    // console.log(`fileContents: ${fileContents}`)

    const matterResult = matter(fileContents)

    const headings = extractHeadings(fileContents)
    console.log(`headings: ${JSON.stringify(headings)}`)

    const processedContent = await remark()
        .use(remarkHeadingId, { defaults: true })
        .use(html)
        .process(matterResult.content)

    const contentHtml = processedContent.toString()

    return {
        id,
        headings,
        contentHtml,
        title: matterResult.data.title,
        category: matterResult.data.category,
        date: moment(matterResult.data.date, "DD-MM-YYYY").format(
            "MMMM Do YYYY"
        ),
    }
}
