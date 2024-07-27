'use client';

import React from 'react';
import styled from 'styled-components';

const MarkdownContainer = styled.div`
    font-family: Arial, sans-serif;
    line-height: 1.6;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    h1, h2, h3, h4 {
        color: #f9f9f9;
    }

    h1 {
        font-size: 2em;
        margin-bottom: 0.5em;
    }

    h2 {
        font-size: 1.5em;
        margin-bottom: 0.5em;
    }

    h3 {
        font-size: 1.2em;
        margin-bottom: 0.5em;
    }

    h4 {
        font-size: 1em;
        margin-bottom: 0.5em;
    }

   p {
        margin: 0.5em 0;
    }

    ul {
        list-style-type: disc;
        padding-left: 20px;
    }

    li {
        margin: 0.5em 0;
    }

    blockquote {
        border-left: 4px solid #ccc;
        padding-left: 10px;
        margin: 1em 0;
        color: #666;
        font-style: italic;
    }

    code {
        background-color: #666;
        padding: 2px 4px;
        border-radius: 4px;
    }

    pre {
        background-color: #f0f0f0;
        padding: 10px;
        border-radius: 4px;
        overflow-x: auto;
    }
`;

interface MarkdownRendererProps {
    html: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ html }) => {
    return <MarkdownContainer dangerouslySetInnerHTML={{ __html: html }} />;
};

export default MarkdownRenderer;
