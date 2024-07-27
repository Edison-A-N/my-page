'use client';

import React, { useState } from 'react';
import styles from '../styles/PostList.module.css';
import Link from 'next/link';
import Pagination from './Pagination';

interface Post {
    data: {
        title: string;
        date: string | Date;
        tags: string[];
    };
    filename: string;
    html: string;
}

interface PostListProps {
    posts: Post[];
}

const POSTS_PER_PAGE = 5;

const PostList: React.FC<PostListProps> = ({ posts }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const displayedPosts = posts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

    return (
        <div className={styles.postList}>
            <ul>
                {displayedPosts.map((post) => {
                    const date = new Date(post.data.date);
                    const year = date.getFullYear();
                    const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份从 0 开始
                    const day = String(date.getDate()).padStart(2, '0');

                    const linkPath = `posts/${year}/${month}/${day}/${post.filename}`;
                    return (<li key={post.filename} className={styles.postItem}>
                        <Link href={linkPath} className={styles.postTitle}>
                            {post.data.title}</Link>
                        <p className={styles.postDate}>
                            {typeof post.data.date === 'string' ? post.data.date : new Date(post.data.date).toLocaleDateString() || ''}
                        </p>
                        <p className={styles.postTags}>{post.data.tags || ''}</p>
                    </li>)
                })}
            </ul>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
    );
};

export default PostList;
