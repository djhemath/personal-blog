import { PropsWithChildren } from "react";
import Header from "./components/Header/Header";
import styles from "./layout.module.css";
import { Quicksand } from 'next/font/google'
const quicksand = Quicksand({ subsets: ['latin'] })

type LayoutProps = {} & PropsWithChildren;

export default function Layout({ children }: LayoutProps) {
    return (
        <div className={styles.layout + ' ' + quicksand.className}>
            <Header />
            <main className="container">
                {children}
            </main>
        </div>
    );
}