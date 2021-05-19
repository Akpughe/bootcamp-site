import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
export default function Home() {
  const photo =
    'https://dwj199mwkel52.cloudfront.net/assets/core/banners/home-bg-11396371bfee6ea0382d71223cd73460a5247fce33035af60939c9ff4f006f71.jpg';
  return (
    <>
      <Head>
        <title>Coding Bootcamp | Davak</title>
        <meta name="description" content="Change your life" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <section className="section_one pt-24 ">
          <div className="flex flex-wrap max-w-5xl m-auto">
            <div className="flex-1 pr-6 sm:pl-0 pl-8">
              <h1 className="text-6xl leading-normal mb-7 mt-12 ">
                Change your life, learn to{' '}
                <span
                  className=" px-3 bg-red-200 rounded"
                  style={{ color: '#fd1015' }}
                >
                  code
                </span>
                .
              </h1>
              <p className="max-w-md text-xl leading-relaxed tracking-wide mb-16">
                Through immersive coding bootcamps, <br /> Davak teaches you the
                skills and <br /> entrepreneurial mindset you need to thrive,
                now and in the future.
              </p>

              <div className="">
                <button
                  className=" py-6 px-10 rounded font-semibold text-white text-lg"
                  style={{ backgroundColor: '#fd1015' }}
                >
                  Discover our courses
                </button>
              </div>
            </div>
            <div className="sm:flex-1 sm:flex hidden">
              <div>
                <Image
                  className="rounded-md object-cover"
                  style={{ width: '110%' }}
                  src="/icons/home-bg.jpg"
                  width={800}
                  height={900}
                />
              </div>
            </div>
          </div>
        </section>
        <Image
          className=" -mb-20 "
          src="/icons/road-to-city.svg"
          width={1582}
          height={240}
        />
        {/* section 2  */}
        <section className="section_two">
          <div className="flex max-w-5xl m-auto">
            <div className="sm:pl-0 sm:pr-0 pr-8 pl-8">
              <h1 className="sm:text-5xl text-4xl leading-normal mb-7 mt-12 ">
                Discover our{' '}
                <span
                  className=" px-3 bg-red-200 rounded"
                  style={{ color: '#fd1015' }}
                >
                  bootcamp
                </span>
              </h1>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
