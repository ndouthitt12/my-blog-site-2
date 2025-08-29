import Link from "next/link";
import { allPosts } from "contentlayer2/generated";
import PostCard from "@/components/PostCard";


export const metadata = { title: "Blog" };


export default function BlogIndexPage({ searchParams }) {
const q = (searchParams?.q || "").toLowerCase();
const tag = (searchParams?.tag || "");


let posts = [...allPosts].sort((a,b) => new Date(b.date) - new Date(a.date));
if (q) posts = posts.filter(p => (p.title + p.description + p.body.raw).toLowerCase().includes(q));
if (tag) posts = posts.filter(p => p.tags?.includes(tag));


return (
<div className="space-y-6">
<div className="flex flex-col sm:flex-row gap-3 sm:items-center">
<input
name="q"
placeholder="Search posts…"
defaultValue={q}
className="w-full sm:max-w-sm rounded-lg bg-slate-900/60 border border-white/10 px-4 py-2"
onKeyDown={(e) => {
if (e.key === 'Enter') {
const params = new URLSearchParams(window.location.search);
params.set('q', e.currentTarget.value);
window.location.search = params.toString();
}
}}
/>
{tag && (
<div className="text-sm text-slate-300">Filtering by tag <span className="text-indigo-300">#{tag}</span></div>
)}
</div>


<div className="grid gap-6 sm:grid-cols-2">
{posts.map(p => <PostCard key={p.slug} post={p} />)}
</div>
</div>
);
}