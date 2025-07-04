import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

async function test() {
  try {
    const response = await notion.databases.retrieve({
      database_id: process.env.NOTION_DATABASE_ID,
    });
    console.log("Database retrieved:", response.title[0].plain_text);
  } catch (e) {
    console.error("Error:", e);
  }
}

test();
