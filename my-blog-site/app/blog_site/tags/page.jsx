import { allPosts } from "contentlayer/generated";
import PostCard from "@/components/PostCard";


export async function generateStaticParams() {
const tags = new Set(allPosts.flatMap(p => p.tags || []));
return [...tags].map(t => ({ tag: t }));
}


export default function TagPage({ params }) {
const { tag } = params;
const posts = allPosts.filter(p => p.tags?.includes(tag)).sort((a,b) => new Date(b.date) - new Date(a.date));
return (
<div className="space-y-6">
<h1 className="text-3xl font-bold">Tag: {tag}</h1>
<div className="grid gap-6 sm:grid-cols-2">
{posts.map(p => <PostCard key={p.slug} post={p} />)}
</div>
</div>
);
}