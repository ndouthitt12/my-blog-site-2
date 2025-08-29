export default function VideoPlayer({ src, poster, caption }) {
return (
<figure className="my-6">
<video className="w-full rounded-xl border border-white/10" poster={poster} controls>
<source src={src} type="video/mp4" />
Your browser does not support the video tag.
</video>
{caption && <figcaption className="text-xs text-slate-400 mt-2">{caption}</figcaption>}
</figure>
);
}