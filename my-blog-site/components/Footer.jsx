export default function Footer() {
return (
<footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
<div className="max-w-5xl mx-auto px-4">
© {new Date().getFullYear()} Nate's Lab · Built with Next.js · <a className="underline hover:text-indigo-300" href="/rss.xml">RSS</a>
</div>
</footer>
);
}