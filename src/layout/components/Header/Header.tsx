import Logo from "../Logo/Logo";
import styles from "./Header.module.css";
import { FiSun, FiMoon } from "react-icons/fi"


export default function Header() {
    return (
        <header className={styles['header-container']}>
            <div className={`container ${styles.header}`}>
                <span className={styles.logo}>
                    <Logo />
                </span>
                <div className={styles["theme-switch"]}>
                    <button>
                        <FiMoon />
                        {/* <FiSun /> */}
                    </button>
                </div>
            </div>
        </header>
    );
}