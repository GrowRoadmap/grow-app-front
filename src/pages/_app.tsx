import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

import 'antd/dist/antd.css';
import '../../public/css/normalize.css';
import '../../public/css/vars.css';
import '../../public/css/global.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <meta httpEquiv='cache-control' content='public' />
                <meta httpEquiv='Cache-Control' content='max-age=31536000' />
                <meta charSet='utf-8' />
                <meta name='robots' content='noindex' />
                <link rel='preconnect' href='https://fonts.gstatic.com' />
                <link
                    href='https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;600;700&display=swap'
                    rel='stylesheet'
                />
                <title>Grow Roadmap</title>
            </Head>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
