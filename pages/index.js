import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';

export default function Home() {
  const comp = [
    {
      id: '1',
      photo:
        'https://res.cloudinary.com/wagon/image/upload/c_fill,h_200,q_auto,w_544/v1598888388/jnfaqx1p55pyaul93lmb.webp',
    },
    {
      id: '2',
      photo:
        'https://res.cloudinary.com/wagon/image/upload/c_fill,h_200,q_auto,w_544/v1605194848/ej9nruduelzvr682zi0w.webp',
    },
    {
      id: '3',
      photo:
        'https://res.cloudinary.com/wagon/image/upload/c_fill,h_200,q_auto,w_544/v1605194915/haguf4jisszvrxsxfwb9.webp',
    },
    {
      id: '4',
      photo:
        'https://res.cloudinary.com/wagon/image/upload/c_fill,h_200,q_auto,w_544/v1605194969/mfizvooh9wzlxg5jskmi.webp',
    },
    {
      id: '5',
      photo:
        'https://res.cloudinary.com/wagon/image/upload/c_fill,h_200,q_auto,w_544/v1605194990/fa0auzijomwl1v0awum4.webp',
    },
    {
      id: '6',
      photo:
        'https://res.cloudinary.com/wagon/image/upload/c_fill,h_200,q_auto,w_544/v1605194927/h4jefuyo6uge1h6vn3gu.webp',
    },
    {
      id: '7',
      photo:
        'https://res.cloudinary.com/wagon/image/upload/c_fill,h_200,q_auto,w_544/v1605194809/wbf95ks9ynmehycter8i.webp',
    },
    {
      id: '8',
      photo:
        'https://res.cloudinary.com/wagon/image/upload/c_fill,h_200,q_auto,w_544/v1605194837/gzzlmhazhnowwmlxeqks.webp',
    },
    {
      id: '9',
      photo:
        'https://res.cloudinary.com/wagon/image/upload/c_fill,h_200,q_auto,w_544/v1605194858/kuhkdbwf44kiidib72si.webp',
    },
    {
      id: '10',
      photo:
        'https://res.cloudinary.com/wagon/image/upload/c_fill,h_200,q_auto,w_544/v1605194956/z1b1xj90j2sgniieszv3.webp',
    },
    {
      id: '11',
      photo:
        'https://res.cloudinary.com/wagon/image/upload/c_fill,h_200,q_auto,w_544/v1605194898/z3gggfbkapyfcfd2i1og.webp',
    },
    {
      id: '12',
      photo:
        'https://res.cloudinary.com/wagon/image/upload/c_fill,h_200,q_auto,w_544/v1605194877/fovglqzqhxpjoav9zt4d.webp',
    },
  ];
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
              <p className="max-w-md text-xl leading-relaxed tracking-wide mb-16 text-gray-800">
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
                  <h3 className="text-2xl mb-4 ml-4 font-light tracking-wide ">
                    Web development course
                  </h3>
                  <p className="leading-normal text-lg text-gray-800">
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
                        className="px-9 py-3 border font-bold tracking-wide rounded"
                        href=""
                        style={{ color: '#fd1015' }}
                      >
                        Learn more
                      </a>
                    </div>
                  </li>
                  <li className="flex px-8 py-4 border-t-2">
                    <div className="flex-1">
                      <div>
                        <strong>Part-time (24 weeks)</strong>
                      </div>
                      <small>Flexible hours, same outcome.</small>
                    </div>
                    <div className="flex justify-end flex-1">
                      <a
                        className="px-9 py-3 border font-bold tracking-wide rounded"
                        href=""
                        style={{ color: '#fd1015' }}
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
                    Data science course
                  </h3>
                  <p className="leading-normal text-lg text-gray-800">
                    From Python to advanced Machine Learning models, get all the
                    skills to join a Data Science team.
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
                        className="px-9 py-3 border font-bold tracking-wide rounded"
                        href=""
                        style={{ color: '#fd1015' }}
                      >
                        Learn more
                      </a>
                    </div>
                  </li>
                  <li className="flex px-8 py-4 border-t-2">
                    <div className="flex-1">
                      <div>
                        <strong>Part-time (24 weeks)</strong>
                      </div>
                      <small>Flexible hours, same outcome.</small>
                    </div>
                    <div className="flex justify-end flex-1">
                      <a
                        className="px-9 py-3 border font-bold tracking-wide rounded"
                        href=""
                        style={{ color: '#fd1015' }}
                      >
                        Learn more
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              {/* end data science */}
            </div>
            <div className="sm:pr-6 sm:pl-0 pl-8 pr-8">
              <h1 className="sm:text-5xl text-4xl leading-normal mb-7 mt-12 ">
                A{' '}
                <span
                  className=" px-3 bg-red-100 rounded"
                  style={{ color: '#fd1015' }}
                >
                  life-changing
                </span>{' '}
                experience
              </h1>
              <p className="text-xl text-justify leading-relaxed tracking-wide mb-11 text-gray-800">
                During our 9-week (full-time) or 24-week (part-time) coding
                bootcamp, learn the most in-demand skills with motivated
                students, passionate teachers and a hands-on curriculum teaching
                you how to build software and solve problems.
              </p>
            </div>
          </div>
        </section>
        {/* section 3 */}
        <section>
          <div className="flex justify-between max-w-5xl m-auto pt-14">
            {/*  */}
            <div className="flex flex-col flex-1">
              <h1 className="text-5xl leading-normal mb-7 mt-12 ">
                Get{' '}
                <span
                  className=" px-3 bg-red-100 rounded"
                  style={{ color: '#fd1015' }}
                >
                  hired
                </span>{' '}
                by leading partnered companies
              </h1>
              <p className="max-w-md text-lg leading-relaxed tracking-wide mb-16 text-gray-800">
                Our coding bootcamp enables you to work as software engineers,
                Product Managers, Growth Hackers or UX/UI Designers in the most
                successful companies. What do recruiters love about candidates?
                The ability to solve problems, communicate with a team and
                always keep a critical eye on their work.
              </p>
            </div>
            <div className="flex flex-wrap justify-center flex-1 pt-14">
              {comp.map((c, index) => {
                return (
                  <div className="h-12">
                    <img
                      className="object-contain mr-4"
                      style={{
                        maxWidth: '136px',
                        minHeight: '50px',
                        maxHeight: '50px',
                      }}
                      src={c.photo}
                      alt="image"
                    />
                  </div>
                );
              })}
              {/*  */}
            </div>
          </div>
        </section>
        {/* section 4 */}
        <section className="section_two">
          <div className="flex flex-col max-w-5xl m-auto">
            <h1 className="sm:text-5xl text-4xl leading-normal mb-7 mt-24 ">
              Reach your own{' '}
              <span
                className=" px-3 bg-red-100 rounded"
                style={{ color: '#fd1015' }}
              >
                goals
              </span>{' '}
            </h1>
            <p className="text-xl  leading-relaxed tracking-wide mb-11 text-gray-800">
              Whether you want to communicate better with developers,
              drastically change your career path or complete your education, a
              coding bootcamp is probably the right choice.
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
}
