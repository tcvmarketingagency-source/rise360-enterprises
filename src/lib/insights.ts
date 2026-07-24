import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { Article, PracticeSlug } from "@/types";

const CONTENT_DIR = path.join(process.cwd(), "content", "insights");

function readArticle(filename: string): Article {
  const filePath = path.join(CONTENT_DIR, filename);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    title: data.title,
    slug: data.slug,
    excerpt: data.excerpt,
    publishedAt: data.publishedAt,
    updatedAt: data.updatedAt,
    practice: data.practice as PracticeSlug,
    markets: data.markets ?? [],
    readingTime: readingTime(content).text,
    seo: data.seo,
    content,
  };
}

export function getAllArticles(): Article[] {
  const filenames = fs
    .readdirSync(CONTENT_DIR)
    .filter((filename) => filename.endsWith(".mdx"));

  return filenames
    .map(readArticle)
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getAllArticles().find((article) => article.slug === slug);
}

export function getArticlesByPractice(practice: PracticeSlug): Article[] {
  return getAllArticles().filter((article) => article.practice === practice);
}
