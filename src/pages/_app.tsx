import type { AppProps } from "next/app";
import "../styles/globals.css";
import Layout from "../components/Layout";
import ThemeProvider from "../components/ThemeProvider";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}


