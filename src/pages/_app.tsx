import Layout from "@/layout/layout";
import { AppProps } from "next/app";
import './styles.css'
import { Quicksand } from 'next/font/google'

const quicksand = Quicksand({ subsets: ['latin'] })


export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className={quicksand.className}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </div>
    );
}