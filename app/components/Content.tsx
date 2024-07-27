import { getAllPosts } from '@/lib/post';
import PostList from '../components/PostList';

export default async function Home() {
    const posts = await getAllPosts();

    return (
        <main>
            <PostList posts={posts} />
        </main>
    );
}
