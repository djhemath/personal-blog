import sadface from '@/assets/images/sad-face.png';
import styles from './NoPosts.module.css';

type NoPostsProps = {};

export default function NoPosts({}: NoPostsProps) {
    return (
        <div className={styles['no-posts']}>
            <img src={sadface.src} alt="Sad face emoji indicating that there is no posts" />
            <h1>Pssst... Looks like I didn&lsquo;t posted anything</h1>
            <h2>Sit back. I&lsquo;m working on it!</h2>
        </div>
    );
}