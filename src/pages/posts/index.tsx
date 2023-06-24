import { PostCard } from '@/components/PostCard/PostCard';
import styles from './posts.module.css';

type PostsProps = {};

export default function Posts({}: PostsProps) {
    return (
        <div className={styles['posts-container']}>
            {
                new Array(5).fill('*').map((_, i) => (
                    <PostCard
                        key={i}
                        id={1}
                        date={1687545000000}
                        description={"In this post, I'm gonna share my first experience with french cuisine that I had in my last trip to Pondicherry with my friends."}
                        image={'https://upload.wikimedia.org/wikipedia/commons/6/6a/Jacques_Lameloise%2C_escab%C3%A8che_d%27%C3%A9crevisses_sur_gaspacho_d%27asperge_et_cresson.jpg'}
                        slug='tried-french-cuisine-for-the-first-time'
                        title='Tried French Cuisine for the first time'
                    />
                ))
            }
        </div>
    );
}