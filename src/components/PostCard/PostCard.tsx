import Link from 'next/link';

import dayjs from 'dayjs';

import styles from './PostCard.module.css';

type PostCardProps = {
    id: number,
    slug: string,
    image: string,
    title: string,
    description: string,
    date: number,
};

export function PostCard({
    id,
    slug,
    image,
    title,
    description,
    date,
}: PostCardProps) {
    return (
        <Link href={`/${slug}`} className={styles['reset-link']}>
            <div className={styles.post}>
                <div className={styles['post-image-container']} style={{backgroundImage: `url('${image}')`}}></div>
                <div className={styles['post-content']}>
                    <div className={styles['post-date']}>{dayjs(date).format("DD-MMM-YYYY")}</div>
                    <div className={styles['post-text']}>
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}