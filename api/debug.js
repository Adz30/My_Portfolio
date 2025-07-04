export default function handler(req, res) {
  res.status(200).json({
    NOTION_API_KEY: process.env.NOTION_API_KEY,
    isDefined: !!process.env.NOTION_API_KEY,
    length: process.env.NOTION_API_KEY?.length || 0,
  });
}