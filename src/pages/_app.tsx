import type { AppProps } from 'next/app';
import Head from 'next/head';
import '@/styles/globals.css';
import { ToastProvider } from '@/contexts/ToastProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastProvider>
        <Component {...pageProps} />
      </ToastProvider>
      <Head>
        <title>Teste Front-End - BNP</title>
      </Head>
    </>
  );
}
