import React from 'react';
import Head from 'next/head';
import { renderMarkdown } from '@/lib/markdown';
import fs from 'fs';
import path from 'path';

const AboutPage = async () => {
    // 读取 Markdown 文件
    const filePath = path.join(process.cwd(), 'source', 'about.md');
    const markdownContent = fs.readFileSync(filePath, 'utf-8');

    // 渲染 Markdown 为 HTML，并获取参数信息
    const { html: htmlContent, data: frontMatter } = await renderMarkdown(markdownContent);

    return (
        <div>
            <Head>{frontMatter.title && <title>{frontMatter.title}</title>}</Head>
            {/* <pre>{JSON.stringify(frontMatter, null, 2)}</pre> */}
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
    );
};

export default AboutPage;
