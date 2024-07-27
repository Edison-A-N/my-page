import fs from 'fs';
import path from 'path';
import { renderMarkdown } from './markdown';

const postsDirectory = path.join(process.cwd(), 'source', '_posts');

export async function getAllPosts() {
    const fileNames = fs.readdirSync(postsDirectory);
    const posts = await Promise.all(fileNames.map(async (fileName) => {
        const filePath = path.join(process.cwd(), 'source', '_posts', fileName);
        const markdownContent = fs.readFileSync(filePath, 'utf-8');


        const { data, html } = await renderMarkdown(markdownContent);
        return {
            data,
            filename: fileName.replace(/\.md$/, ''),
            html
        };
    }));

    return posts;
}
