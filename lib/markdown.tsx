import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';
import matter from 'gray-matter';

export async function renderMarkdown(fileContent: string): Promise<{ html: string; data: any }> {
    const { content, data } = matter(fileContent); // 解析 Markdown 文件的前置数据

    const result = await remark().use(gfm).use(html).process(content);
    return { html: result.toString(), data };
}
