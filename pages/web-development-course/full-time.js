import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/Layout';

const fulltime = () => {
  return (
    <>
      <Head>
        <title>Web Development Course | Davak</title>
        <meta name="description" content="Change your life" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section className="section_onee pt-24 ">
          <div className="flex flex-wrap max-w-5xl m-auto">
            {/*  */}
            <div className="flex-1  sm:pr-6 sm:pl-0 pl-8">
              <h1 className="text-5xl leading-normal mb-7 mt-12 ">
                Web Development course{' '}
              </h1>
              <p className="max-w-md text-xl leading-relaxed tracking-wide mb-7 text-gray-800">
                Full-time (9 weeks)
              </p>
              <p className="max-w-md text-xl leading-relaxed tracking-wide mb-16 text-gray-800">
                In 9 intensive weeks, learn all the skills of a Software
                Developer, code your own web applications from scratch and
                change your career.
              </p>

              <div className="">
                <button
                  className=" py-6 px-10 rounded font-bold text-white text-lg"
                  style={{ backgroundColor: '#fd1015' }}
                >
                  Apply Now
                </button>
              </div>
            </div>
            {/*  */}
            <div className="flex-1 sm:flex hidden">
              <div>
                <Image
                  className="rounded-md object-cover"
                  style={{ width: '110%' }}
                  src="/icons/ftweb.webp"
                  width={800}
                  height={900}
                />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default fulltime;
