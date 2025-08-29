export function Steps({ children }) {
return <ol className="space-y-4 counter-steps">{children}</ol>;
}


export function Step({ title, children }) {
return (
<li className="rounded-xl border border-white/10 bg-slate-900/40 p-4">
{title && <div className="font-semibold mb-2">{title}</div>}
<div className="text-sm text-slate-200">{children}</div>
</li>
);
}