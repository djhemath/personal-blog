import { ThemeSwitch } from "@/components/ThemeSwitch/ThemeSwitch";
import Logo from "../Logo/Logo";
import styles from "./Header.module.css";


export default function Header() {
    return (
        <header className={styles['header-container']}>
            <div className={`container ${styles.header}`}>
                <span className={styles.logo}>
                    <Logo />
                </span>
                <ThemeSwitch />
            </div>
        </header>
    );
}