import 'antd/dist/antd.css';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/globalStyles';
import { updateReferralCount } from 'lib/realtimeDb';
import { theme } from '../styles/theme';

import Layout from 'components/Common/layout';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const updateReferralCountHandler = async (url: string) => {
    if (!url) {
      url = 'google';
    }
    await updateReferralCount(url);
  };
  useEffect(() => {
    if (!router.isReady) return;
    const referral = router.query.referral as string;
    console.log("env: ", process.env.NODE_ENV)
    if (router.pathname === '/') {
      updateReferralCountHandler(referral);
    }
  }, [router.isReady, router.query]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const { Kakao, location } = window as any;
      if (!Kakao.isInitialized()) {
        Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
      }
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>hair</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
