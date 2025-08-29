export async function GET() {
const site = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const body = `User-agent: *\nAllow: /\nSitemap: ${site}/sitemap.xml`;
return new Response(body, { headers: { "content-type": "text/plain" } });
}