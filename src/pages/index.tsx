import dayjs from 'dayjs';
import dotenv from 'dotenv';

import { PostCard } from '@/components/PostCard/PostCard';
import styles from './posts.module.css';
import WithMeta from '@/components/WithMeta/WithMeta';
import { Post } from '@/types';
import NoPosts from '@/components/NoPosts/NoPosts';

dotenv.config();

type PostsProps = {
    posts: Post[]
};

export default function Posts({ posts }: PostsProps) {
    return (
        <WithMeta>
            <div className={styles['posts-container']}>
                {
                    posts.length > 0
                    ?
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
                    :
                        <NoPosts />
                }
            </div>
        </WithMeta>
    );
}

export async function getStaticProps() {
    const postsResponse = await fetch(process.env.POST_INDEX_URL);
    const postsJSON: any[] = await postsResponse.json();

    const posts: Post[] = postsJSON.filter(post => !(post.private)).map(post => {
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