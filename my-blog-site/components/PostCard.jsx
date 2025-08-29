import Link from "next/link";
import { format } from "date-fns";


export default function PostCard({ post }) {
return (
<Link href={post.url} className="block rounded-xl border border-white/10 bg-slate-900/40 hover:bg-slate-900/60 p-5">
<div className="text-xs text-slate-400">{format(new Date(post.date), "MMM d, yyyy")}</div>
<h3 className="mt-1 text-lg font-semibold">{post.title}</h3>
<p className="mt-2 text-sm text-slate-300 line-clamp-2">{post.description}</p>
{post.tags?.length > 0 && (
<div className="mt-3 flex gap-2 text-xs text-indigo-300/90">
{post.tags.map(t => <span key={t} className="px-2 py-0.5 rounded-full border border-indigo-500/30">#{t}</span>)}
</div>
)}
</Link>
);
}