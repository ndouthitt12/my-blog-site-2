"use client";
import { useState } from "react";


export default function CopyButton({ text }) {
const [copied, setCopied] = useState(false);
return (
<button
onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(()=>setCopied(false), 1500); }}
className="text-xs rounded-md border border-white/10 px-2 py-1 hover:bg-white/10"
aria-label="Copy code"
>
{copied ? "Copied" : "Copy"}
</button>
);
}