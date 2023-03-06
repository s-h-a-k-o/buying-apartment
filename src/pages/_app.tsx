import Layout from "@/components/layout/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { API } from "@/api/Api";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!!token) {
      API.setToken(token)
    }
  }, [])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
