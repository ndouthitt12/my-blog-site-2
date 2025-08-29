import fs from "node:fs";
import path from "node:path";


const title = process.argv.slice(2).join(" ") || "New Post";
const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const now = new Date().toISOString().slice(0,10);
const file = path.join(process.cwd(), "content", "blog", `${slug}.mdx`);


const fm = `---\ntitle: "${title}"\ndescription: "Write a great description here."\ndate: ${now}\ntags: []\ncover: "/uploads/${slug}.png"\n---\n\nWrite your content here.\n`;


fs.mkdirSync(path.dirname(file), { recursive: true });
fs.writeFileSync(file, fm, "utf8");
console.log("Created:", file);