import Logo from "../Logo/Logo";
import styles from "./Header.module.css";


export default function Header() {
    return (
        <header className={styles['header-container']}>
            <div className={`container ${styles.header}`}>
                <span className={styles.logo}>
                    <Logo />
                </span>
                <div className={styles["theme-switch"]}>DT</div>
            </div>
        </header>
    );
}