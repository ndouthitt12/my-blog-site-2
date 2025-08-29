"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";


export default function UploadsPage() {
const [files, setFiles] = useState([]);
const [busy, setBusy] = useState(false);
const enabled = !!supabase;


useEffect(() => {
if (!enabled) return;
(async () => {
const { data, error } = await supabase.storage.from("uploads").list("", { limit: 100 });
if (!error) setFiles(data || []);
})();
}, [enabled]);


async function onUpload(e) {
const file = e.target.files?.[0];
if (!file || !enabled) return;
setBusy(true);
const filename = `${Date.now()}-${file.name}`;
const { error } = await supabase.storage.from("uploads").upload(filename, file, { upsert: false });
setBusy(false);
if (!error) {
const { data } = await supabase.storage.from("uploads").list("");
setFiles(data || []);
alert("Uploaded!");
} else {
alert(error.message);
}
}


if (!enabled) {
return (
<div className="space-y-4">
<h1 className="text-2xl font-bold">Uploads</h1>
<p className="text-slate-300">To enable uploads, set <code>NEXT_PUBLIC_SUPABASE_URL</code> and <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code> and create a public Storage bucket named <code>uploads</code>.</p>
<p className="text-slate-300">Otherwise, drop files into <code>/public/uploads</code> and reference them like <code>/uploads/your-image.png</code>.</p>
</div>
);
}


return (
<div className="space-y-4">
<h1 className="text-2xl font-bold">Uploads</h1>
<input type="file" onChange={onUpload} disabled={busy} />
<ul className="space-y-2 text-sm">
{files.map(f => (
<li key={f.name} className="flex items-center justify-between border border-white/10 rounded-lg p-2">
<span>{f.name}</span>
<a className="text-indigo-300 underline" href={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/uploads/${encodeURIComponent(f.name)}`} target="_blank">view</a>
</li>
))}
</ul>
</div>
);
}