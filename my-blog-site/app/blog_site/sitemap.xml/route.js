import { allPosts } from "contentlayer2/generated";


export async function GET() {
const site = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const staticUrls = ["/", "/blog", "/about"];
const postUrls = allPosts.map(p => p.url);
const urls = [...staticUrls, ...postUrls];
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `<url><loc>${site}${u}</loc></url>`).join("\n")}
</urlset>`;
return new Response(xml, { headers: { "content-type": "application/xml" } });
}