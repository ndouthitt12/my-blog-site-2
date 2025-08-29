import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import PostCard from "@/components/PostCard";


export default function HomePage() {
const latest = [...allPosts]
.sort((a,b) => new Date(b.date) - new Date(a.date))
.slice(0, 6);


return (
<div className="space-y-10">
<section className="text-center space-y-3">
<h1 className="text-4xl font-bold tracking-tight">Google Sheets & Programming Tutorials</h1>
<p className="text-slate-300">Clean, practical walkthroughs — with code you can copy, images, and videos.</p>
</section>


<section className="grid gap-6 sm:grid-cols-2">
{latest.map(p => <PostCard key={p.slug} post={p} />)}
</section>


<div className="text-center">
<Link className="text-indigo-300 underline" href="/blog">Browse all posts →</Link>
</div>
</div>
);
}