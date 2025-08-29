import { allPosts } from "contentlayer2/generated";


export async function GET() {
const site = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const items = allPosts
.sort((a,b) => new Date(b.date) - new Date(a.date))
.map(p => `
<item>
<title><![CDATA[${p.title}]]></title>
<link>${site}${p.url}</link>
<guid>${site}${p.url}</guid>
<description><![CDATA[${p.description}]]></description>
<pubDate>${new Date(p.date).toUTCString()}</pubDate>
</item>`)
.join("\n");


const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
<title>Nate's Lab — RSS</title>
<link>${site}</link>
<description>Tutorials & Blog</description>
${items}
</channel></rss>`;


return new Response(xml, { headers: { "content-type": "application/rss+xml" } });
}