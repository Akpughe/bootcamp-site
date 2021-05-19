import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';

export default function Home() {
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
            {/*  */}
            <div className="flex-1  sm:pr-6 sm:pl-0 pl-8">
              <h1 className="text-6xl leading-normal mb-7 mt-12 ">
                Change your life, learn to{' '}
                <span
                  className=" px-3 bg-red-100 rounded"
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
                  className=" py-6 px-10 rounded font-bold text-white text-lg"
                  style={{ backgroundColor: '#fd1015' }}
                >
                  Discover our courses
                </button>
              </div>
            </div>
            {/*  */}
            <div className="flex-1 sm:flex hidden">
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
          <div className="flex flex-col max-w-5xl m-auto">
            {/*  */}
            <div className="sm:pr-6 sm:pl-0 pl-8">
              <h1 className="sm:text-5xl text-4xl leading-normal mb-7 mt-12 ">
                Discover our{' '}
                <span
                  className=" px-3 bg-red-100 rounded"
                  style={{ color: '#fd1015' }}
                >
                  bootcamp
                </span>
              </h1>
            </div>
            {/*  */}
            <div className="my-11 flex sm:flex-row flex-col flex-wrap sm:pr-0 sm:pl-0 pl-8 pr-8 ">
              {/* wed dev */}
              <div
                className="flex-1 bg-white pb-4 h-auto shadow-lg rounded-md mr-8 sm:mb-0 mb-4"
                style={{ width: 'auto' }}
              >
                <div className="px-8 pt-7 ">
                  <h3 className="text-2xl mb-4 ml-4 font-light tracking-wide">
                    Web development course
                  </h3>
                  <p className="leading-normal text-lg">
                    From the database to the user interface, learn all the
                    skills of a Software Developer and code your own web
                    applications from scratch.
                  </p>
                </div>
                <ul className="mt-6">
                  <li className="flex px-8 py-4 border-t-2">
                    <div className="flex-1">
                      <div>
                        <strong>Full-time (12 weeks)</strong>
                      </div>
                      <small>From Monday to Friday, all day.</small>
                    </div>
                    <div className="flex justify-end flex-1">
                      <a
                        className="px-9 py-3 border font-bold tracking-wide"
                        href=""
                      >
                        Learn more
                      </a>
                    </div>
                  </li>
                  <li className="flex px-8 py-4 border-t-2">
                    <div className="flex-1">
                      <div>
                        <strong>Full-time (12 weeks)</strong>
                      </div>
                      <small>From Monday to Friday, all day.</small>
                    </div>
                    <div className="flex justify-end flex-1">
                      <a
                        className="px-9 py-3 border font-bold tracking-wide"
                        href=""
                      >
                        Learn more
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              {/* end web dev */}
              {/* data science */}
              <div
                className="flex-1 bg-white pb-4 h-auto shadow-lg rounded-md mr-4"
                style={{ width: 'auto' }}
              >
                <div className="px-8 pt-7 ">
                  <h3 className="text-2xl mb-4 ml-4 font-light tracking-wide">
                    Web development course
                  </h3>
                  <p className="leading-normal text-lg">
                    From the database to the user interface, learn all the
                    skills of a Software Developer and code your own web
                    applications from scratch.
                  </p>
                </div>
                <ul className="mt-6">
                  <li className="flex px-8 py-4 border-t-2">
                    <div className="flex-1">
                      <div>
                        <strong>Full-time (12 weeks)</strong>
                      </div>
                      <small>From Monday to Friday, all day.</small>
                    </div>
                    <div className="flex justify-end flex-1">
                      <a
                        className="px-9 py-3 border font-bold tracking-wide"
                        href=""
                      >
                        Learn more
                      </a>
                    </div>
                  </li>
                  <li className="flex px-8 py-4 border-t-2">
                    <div className="flex-1">
                      <div>
                        <strong>Full-time (12 weeks)</strong>
                      </div>
                      <small>From Monday to Friday, all day.</small>
                    </div>
                    <div className="flex justify-end flex-1">
                      <a
                        className="px-9 py-3 border font-bold tracking-wide"
                        href=""
                      >
                        Learn more
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              {/* end data science */}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
