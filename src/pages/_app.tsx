import Layout from "@/components/layout/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { API } from '@/api/Api';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    API.http.interceptors.response.use(
      async (res) => {
        return res;
      },
      async (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          localStorage.removeItem('token')
          router.push('/user/login')
        }
        return Promise.reject(error);
      },
    );
  }, [])

  setTimeout(() => {
    router.push('/user/login')
  }, 5000);

  return (
    <Layout>
      {" "}
      <Component {...pageProps} />{" "}
    </Layout>
  );
}
