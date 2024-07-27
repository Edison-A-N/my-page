import fs from 'fs';
import path from 'path';
import { renderMarkdown } from './markdown';

const postsDirectory = path.join(process.cwd(), 'source', '_posts');

export interface Post {
    data: any;
    html: string;
    filename: string;
}

export async function getAllPosts() {
    const fileNames = fs.readdirSync(postsDirectory);
    const posts = await Promise.all(fileNames.map(async (fileName) => {
        const filePath = path.join(process.cwd(), 'source', '_posts', fileName);
        const markdownContent = fs.readFileSync(filePath, 'utf-8');


        const { data, html } = await renderMarkdown(markdownContent);
        data.date = new Date(data.date);
        return {
            data,
            filename: fileName.replace(/\.md$/, ''),
            html
        };
    }));

    posts.sort((a, b) => {
        return a.data.date > b.data.date ? -1 : 1;
    });

    return posts;
}
