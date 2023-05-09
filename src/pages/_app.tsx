import Layout from "@/layout/layout";
import { AppProps } from "next/app";
import './styles.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </div>
    );
}