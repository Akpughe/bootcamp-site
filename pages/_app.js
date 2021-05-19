import '../styles/globals.css';
import '../styles/tailwind.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {' '}
      <Head>
        <link
          href="//db.onlinewebfonts.com/c/f1a22f6f15d272c7aa56da8b2c91f5e5?family=Circular+Std+Black"
          rel="stylesheet"
          type="text/css"
        />
      </Head>{' '}
      <Component {...pageProps} />{' '}
    </>
  );
}

export default MyApp;
