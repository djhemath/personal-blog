import Link from 'next/link';

import { ThemeSwitch } from "@/components/ThemeSwitch/ThemeSwitch";
import Logo from "../Logo/Logo";
import styles from "./Header.module.css";


export default function Header() {
    return (
        <header className={styles['header-container']}>
            <div className={`container ${styles.header}`}>
                <span className={styles.logo}>
                    <Link href='/' className='link-without-decorations'>
                        <Logo />
                    </Link>
                </span>
                <ThemeSwitch />
            </div>
        </header>
    );
}