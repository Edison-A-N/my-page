import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';
import matter from 'gray-matter';

export async function parseMarkdownContent(fileContent: string): Promise<{ content: string; data: any }> {
    const { content, data } = matter(fileContent);
    return { content, data };

}

export async function renderMarkdown(fileContent: string): Promise<{ html: string; data: any }> {
    const { content, data } = await parseMarkdownContent(fileContent);

    const result = await remark().use(gfm).use(html).process(content);
    return { html: result.toString(), data };
}
