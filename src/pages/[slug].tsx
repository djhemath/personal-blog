/* eslint-disable @next/next/no-img-element */
import type { GetStaticPaths, GetStaticProps } from 'next';

import dayjs from 'dayjs';
import dotenv from 'dotenv';
import matter from 'gray-matter';
import { ParsedUrlQuery } from "querystring";
import { FiCalendar } from "react-icons/fi"
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dark from 'react-syntax-highlighter/dist/cjs/styles/prism/a11y-dark';

import * as config from '@/config';
import { Post } from "@/types";
import WithMeta from "@/components/WithMeta/WithMeta";

type _Post = Omit<Post, 'id' | 'slug' | 'url'>;

type PostDetailProps = {
    content?: string,
} & _Post;

dotenv.config();

export default function PostDetail({
    title,
    excerpt,
    date,
    image,
    content,
}: PostDetailProps) {
    return (
        <WithMeta
            title={title + '-' + (config.SITE_TITLE || process.env.SITE_TITLE)}
            description={excerpt}
        >
            <article className='post-detail'>
                <section className='head'>
                    <figure>
                        <img
                            src={image}
                            alt={title + " blog post's hero image"}
                        />
                    </figure>

                    <h1>{title}</h1>

                    <div className='date-container'>
                        <FiCalendar />
                        <span>{ dayjs(date).format("DD MMMM, YYYY") }</span>
                    </div>
                </section>

                <ReactMarkdown
                    components={{
                        code({node, inline, className, children, ...props}) {
                            const match = /language-(\w+)/.exec(className || '')
                            return !inline && match ? (
                              <SyntaxHighlighter
                                {...props}
                                style={dark}
                                language={match[1]}
                                PreTag="div"
                              >
                                { String(children).replace(/\n$/, '') }
                              </SyntaxHighlighter>
                            ) : (
                              <code {...props} className={className}>
                                {children}
                              </code>
                            )
                        }
                    }}
                >
                    { content || '' }
                </ReactMarkdown>
            </article>
        </WithMeta>
    );
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps<PostDetailProps> = async (context) => {
    const { slug } = context.params as Params;

    const postsResponse = await fetch(process.env.POST_INDEX_URL);
    const postsJSON: any[] = await postsResponse.json();

    const posts: Post[] = postsJSON.filter(post => !(post.private)).map(post => {
        return {
            ...post,
            date: dayjs(post.date).unix() * 1000
        }
    });

    const post: Post = posts.find(post => post.slug === slug)!;

    const postMDResponse = await fetch(post.url);
    const postMD = await postMDResponse.text()

    const parsedMarkdown = matter(postMD);

    return {
        props: {
            title: post.title,
            excerpt: post.excerpt,
            image: post.image,
            date: post.date,
            content: parsedMarkdown.content,
        },
    };
}

export const getStaticPaths: GetStaticPaths = async () => {

    const postsResponse = await fetch(process.env.POST_INDEX_URL);
    const postsJSON: any[] = await postsResponse.json();

    const paths: any[] = postsJSON.filter(post => !(post.private)).map(post => {
        return {
            params: {
                slug: post.slug
            }
        }
    });

    return {
        paths,
        fallback: false,
    };
}