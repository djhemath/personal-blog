import dayjs from 'dayjs';
import dotenv from 'dotenv';

import { PostCard } from '@/components/PostCard/PostCard';
import styles from './posts.module.css';

dotenv.config();

type Post = {
    id: number,
    title: string,
    excerpt: string,
    image: string,
    slug: string,
    date: number,
};

type PostsProps = {
    posts: Post[]
};

export default function Posts({ posts }: PostsProps) {
    return (
        <div className={styles['posts-container']}>
            {
                posts.map((post) => (
                    <PostCard
                        key={post.id}
                        id={post.id}
                        date={post.date}
                        description={post.excerpt}
                        image={post.image}
                        slug={post.slug}
                        title={post.title}
                    />
                ))
            }
        </div>
    );
}

export async function getStaticProps() {
    const postsResponse = await fetch(process.env.POST_INDEX_URL);
    const postsJSON: any[] = await postsResponse.json();

    const posts: Post[] = postsJSON.map(post => {
        return {
            ...post,
            date: dayjs(post.date).unix() * 1000
        }
    });

    return {
        props: {
            posts,
        },
    };
}