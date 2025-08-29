import Image from "next/image";
import CodeBlock from "./CodeBlock";
import Callout from "./Callout";
import { Steps, Step } from "./Steps";
import VideoPlayer from "./VideoPlayer";


const MdxImage = (props) => (
<Image {...props} alt={props.alt || ""} width={props.width || 1200} height={props.height || 630} className="rounded-xl border border-white/10" />
);


export const mdxComponents = {
pre: (props) => <CodeBlock {...props} />,
Image: MdxImage,
Callout,
Steps,
Step,
VideoPlayer
};