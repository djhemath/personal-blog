import Layout from "@/layout/layout";
import { AppProps } from "next/app";
import './styles.css'
import { getInitialThemeScript } from "@/utils/theme.utils";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div>
            <script dangerouslySetInnerHTML={getInitialThemeScript()}></script>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </div>
    );
}