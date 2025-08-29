import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import { mdxOptions } from "./mdx-options.js";


export const Post = defineDocumentType(() => ({
name: "Post",
filePathPattern: `blog/**/*.mdx`,
contentType: "mdx",
fields: {
title: { type: "string", required: true },
description: { type: "string", required: true },
date: { type: "date", required: true },
tags: { type: "list", of: { type: "string" }, default: [] },
cover: { type: "string" }
},
computedFields: {
slug: {
type: "string",
resolve: (post) => post._raw.flattenedPath.replace(/^blog\//, "")
},
url: {
type: "string",
resolve: (post) => `/blog/${post._raw.flattenedPath.replace(/^blog\//, "")}`
}
}
}));


export default makeSource({
contentDirPath: "content",
documentTypes: [Post],
mdx: mdxOptions
});