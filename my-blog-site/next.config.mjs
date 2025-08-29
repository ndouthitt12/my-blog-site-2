import { withContentlayer } from "next-contentlayer";


/** @type {import('next').NextConfig} */
const nextConfig = {
experimental: {
mdxRs: true
},
images: {
remotePatterns: [
{ protocol: "https", hostname: "images.unsplash.com" },
{ protocol: "https", hostname: "*.supabase.co" }
]
}
};


export default withContentlayer(nextConfig);