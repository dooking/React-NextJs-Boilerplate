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
    await updateReferralCount(url);
  };
  useEffect(() => {
    if (!router.isReady) return;
    const referral = router.query.referral as string;
    updateReferralCountHandler(referral);
  }, [router.isReady, router.query]);

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
