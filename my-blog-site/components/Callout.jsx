export default function Callout({ type = "note", title, children }) {
const color = type === 'warn' ? 'border-amber-400/40 bg-amber-400/10' : type === 'success' ? 'border-emerald-400/40 bg-emerald-400/10' : 'border-indigo-400/40 bg-indigo-400/10';
return (
<div className={`my-6 rounded-xl border ${color} p-4` }>
{title && <div className="font-semibold mb-1">{title}</div>}
<div className="text-sm text-slate-200">{children}</div>
</div>
);
}