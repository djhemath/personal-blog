import { PropsWithChildren } from "react";
import Header from "./components/Header/Header";
import styles from "./layout.module.css";

type LayoutProps = {} & PropsWithChildren;

export default function Layout({ children }: LayoutProps) {
    return (
        <div className={styles.layout}>
            <Header />
            <main className="container">
                {children}
            </main>
        </div>
    );
}