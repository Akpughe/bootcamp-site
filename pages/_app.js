import '../styles/globals.css';
import '../styles/tailwind.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';


// const FacebookPixel = () => {
//   useEffect(() => {
//     import('react-facebook-pixel')
//       .then((x) => x.default)
//       .then((ReactPixel) => {
//         ReactPixel.init('1433250153695039');
//         ReactPixel.pageView();

//         Router.events.on('routeChangeComplete', () => {
//           ReactPixel.pageView();
//         });
//       });
//     });
//     return null;
// };
function MyApp({ Component, pageProps }) {
  // const router = useRouter();
  // useEffect(() => {
  //   import('react-facebook-pixel')
  //     .then((x) => x.default)
  //     .then((ReactPixel) => {
  //       ReactPixel.init('1433250153695039'); // facebookPixelId
  //       ReactPixel.pageView();

  //       router.events.on('routeChangeComplete', () => {
  //         ReactPixel.pageView();
  //       });
  //     });
  // }, [router.events]);
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
      {/* <FacebookPixel/> */}
      <Component {...pageProps} />{' '}
    </>
  );
}

export default MyApp;
