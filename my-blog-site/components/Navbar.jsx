import Link from "next/link";


export default function Navbar() {
return (
<header className="sticky top-0 z-40 backdrop-blur bg-bg/80 border-b border-white/10">
<nav className="max-w-5xl mx-auto px-4 h-14 flex items-center gap-6">
<Link href="/" className="font-semibold tracking-tight">Nate's Lab</Link>
<div className="ml-auto flex items-center gap-4 text-sm">
<Link href="/blog" className="hover:text-indigo-300">Blog</Link>
<Link href="/about" className="hover:text-indigo-300">About</Link>
<Link href="/admin/uploads" className="hover:text-indigo-300">Uploads</Link>
</div>
</nav>
</header>
);
}