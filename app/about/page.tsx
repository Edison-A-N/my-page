import React from 'react';
import Head from 'next/head';
import { renderMarkdown } from '@/lib/markdown';
import fs from 'fs';
import path from 'path';
import MarkdownRenderer from '../components/MarkdownRenderer';


const AboutPage = async () => {
    // 读取 Markdown 文件
    const filePath = path.join(process.cwd(), 'source', 'about.md');
    const markdownContent = fs.readFileSync(filePath, 'utf-8');

    // 渲染 Markdown 为 HTML，并获取参数信息
    const { html, data } = await renderMarkdown(markdownContent);

    return (

        <div>
            <Head><title>{data.title}</title></Head>
            <MarkdownRenderer html={html} />
        </div>
    );
};

export default AboutPage;
