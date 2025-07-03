// api/posts.js
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;

function extractPostMetadata(page) {
  const properties = page.properties;

  return {
    id: page.id,
    title: properties.Title?.title?.[0]?.plain_text || "Untitled",
    slug: properties.Slug?.rich_text?.[0]?.plain_text || "",
    excerpt: properties.Excerpt?.rich_text?.[0]?.plain_text || "",
    date: properties.Date?.date?.start || "",
    cover: page.cover?.external?.url || page.cover?.file?.url || "",
  };
}

export default async function handler(req, res) {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      page_size: 50,
      sorts: [{ property: "Date", direction: "descending" }],
    });

    const posts = response.results.map(extractPostMetadata);
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
}
