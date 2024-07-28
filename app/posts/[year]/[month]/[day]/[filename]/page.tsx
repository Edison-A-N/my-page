import MarkdownRenderer from '@/app/components/MarkdownRenderer';
import { getAllPosts } from '@/lib/post';
import { notFound } from 'next/navigation';

interface Post {
    data: any;
    html: string;
    filename: string;
}


export async function generateMetadata({ params }: { params: { filename: string } }) {
    const posts: Post[] = await getAllPosts();
    const post = posts.find(p => p.filename === params.filename);

    if (!post) {
        return {
            title: '',
        }
    }

    return {
        title: post.data.title,
    };
}

export default async function PostPage({ params }: { params: { filename: string } }) {
    const posts: Post[] = await getAllPosts();
    const post = posts.find(p => p.filename === params.filename);

    if (!post) {
        notFound();
    }

    return (
        <>
            <h1 style={{ fontSize: '3rem' }}>{post.data.title}</h1>
            {post.data.date && <p>{post.data.date.toDateString()}</p>}
            <MarkdownRenderer html={post.html} />
        </>
    );
}
