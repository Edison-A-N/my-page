import MarkdownRenderer from '@/app/components/MarkdownRenderer';
import { getAllPosts } from '@/lib/post';
import { notFound } from 'next/navigation';

interface Post {
    data: any;
    html: string;
    filename: string;
}

export default async function PostPage({ params }: { params: { filename: string } }) {
    const posts: Post[] = await getAllPosts();
    const post = posts.find(p => p.filename === params.filename);

    if (!post) {
        notFound();
    }

    return (
        <div>
            <h1>{post.filename}</h1>
            {post.data.date && <p>{post.data.date.toDateString()}</p>}
            <MarkdownRenderer html={post.html} />
        </div>
    );
}
