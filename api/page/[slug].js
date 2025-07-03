// api/page/[slug].js
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

async function fetchBlocksRecursively(blockId) {
  let allBlocks = [];
  let cursor;

  while (true) {
    const res = await notion.blocks.children.list({
      block_id: blockId,
      start_cursor: cursor,
      page_size: 100,
    });

    allBlocks.push(...res.results);

    for (const block of res.results) {
      if (block.has_children) {
        const childBlocks = await fetchBlocksRecursively(block.id);
        allBlocks.push(...childBlocks);
      }
    }

    if (!res.has_more) break;
    cursor = res.next_cursor;
  }

  return allBlocks;
}

export default async function handler(req, res) {
  const { slug } = req.query;

  try {
    const dbResponse = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "Slug",
        rich_text: {
          equals: slug,
        },
      },
    });

    if (!dbResponse.results.length) {
      return res.status(404).json({ error: "Page not found" });
    }

    const page = dbResponse.results[0];
    const metadata = extractPostMetadata(page);
    const pageId = page.id;

    const blocks = await fetchBlocksRecursively(pageId);

    res.status(200).json({ metadata, blocks });
  } catch (error) {
    console.error("Error fetching blog content:", error);
    res.status(500).json({ error: "Failed to fetch blog content" });
  }
}
