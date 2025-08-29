import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata = {
metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
title: {
default: "Nate's Lab — Tutorials & Blog",
template: "%s — Nate's Lab"
},
description: "Google Sheets, Programming, and Automation tutorials.",
openGraph: {
type: "website",
title: "Nate's Lab — Tutorials & Blog",
description: "Google Sheets, Programming, and Automation tutorials.",
url: "/",
images: [
{ url: "/og-default.png", width: 1200, height: 630, alt: "Nate's Lab" }
]
},
twitter: {
card: "summary_large_image",
creator: "@yourhandle"
},
alternates: { types: { "application/rss+xml": "/rss.xml" } }
};


export default function RootLayout({ children }) {
return (
<html lang="en">
<body className="min-h-screen flex flex-col text-slate-100">
<Navbar />
<main className="flex-1 max-w-5xl mx-auto w-full px-4 py-10">{children}</main>
<Footer />
</body>
</html>
);
}