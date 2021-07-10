import { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import Arrowleft from '../icons/Arrowleft';
import Arrowright from '../icons/Arrowright';
import Slider from 'react-slick';
import AOS from 'aos';

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
  const goals = [
    {
      head: 'Change your career',
      text: 'You might have been working in the same industry or job for a few years, and feel a little unsatisfied. If you are looking for more technical autonomy, freedom and drive, coding is definitely a tool that will help you get there - either to launch your own company, become a full-time or freelance developer, or develop technical projects in your current job',
      image:
        'https://dwj199mwkel52.cloudfront.net/assets/core/home/change_your_career_path-2155dde5781d4e203c850ce6e180b02e3d2fcb95bceaa906dd3136d0371974ee.jpg',
    },
    {
      head: 'Be autonomous in coding',
      text: 'if you’re working in tech but are not familiar with coding, you probably feel a bit frustrated when talking to developers. If you want to gain legitimacy and technicity to upskill, or simply communicate better with your dev team, a coding bootcamp is exactly what you need. If you want to launch your startup, you will learn to prototype your MVP, be autonomous on small technical tasks, and manage your future dev team.',
      image:
        'https://dwj199mwkel52.cloudfront.net/assets/core/home/learn_the_language_of_developers-2ecc3a87c7c98a52b3918f635fbb04c4a7280af2c4509c6d7fdc774049aff1e5.jpg',
    },
    {
      head: 'Complete your education',
      text: 'After university, many people feel like they’re missing the necessary skills to do something meaningful and exciting in their professional life. If you want to learn practical and technical skills that will enable you to quickly create your projects from scratch, or join a tech startup as a developer, product manager or growth marketer, our coding bootcamps are the perfect education experience.',
      image:
        'https://dwj199mwkel52.cloudfront.net/assets/core/home/complete_your_education-0f2d929a66eadf5252f94300cf96fd8850ec60bdec6720c274d39d39eb1b23b1.jpg',
    },
  ];
  const [state, setState] = useState({
    nav1: null,
    nav2: null,
  });
  const slider1 = useRef();
  const slider2 = useRef();

  useEffect(() => {
    setState({
      nav1: slider1.current,
      nav2: slider2.current,
    });
  }, []);

  useEffect(() => {
    AOS.init();
  });

  const { nav1, nav2 } = state;

  const next = () => {
    slider1.current.slickNext();
  };
  const previous = () => {
    slider1.current.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Head>
        <title>Coding Bootcamp | Davak</title>
        <meta name="description" content="Change your life" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <section className="section_one pt-24 ">
          <div data-aos="fade-in" className="flex flex-wrap max-w-5xl m-auto">
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
                data-aos="fade-right"
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
                data-aos="fade-left"
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
            <div data-aos="fade-in" className="sm:pr-6 sm:pl-0 pl-8 pr-8">
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
          <div className="flex sm:flex-row flex-col flex-wrap justify-between max-w-5xl m-auto pt-14">
            {/*  */}
            <div className="flex flex-col flex-1 sm:pr-6 sm:pl-0 pl-8 pr-8">
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
            <div className="sm:flex hidden flex-wrap justify-center flex-1 pt-14">
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
        <section className="section_two pb-8">
          <div className="flex flex-col max-w-5xl m-auto sm:pr-6 sm:pl-0 pl-8 pr-8">
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
          {/* slider */}
          <div data-aos="zoom-out-down">
            <Slider
              className="w-full p-5"
              ref={(slider) => (slider1.current = slider)}
              {...settings}
            >
              {goals.map((goal, index) => {
                return (
                  <div>
                    <div
                      key={goal.head}
                      className="flex justify-center max-w-5xl m-auto rounded-lg bg-white"
                      style={{ height: '420px' }}
                    >
                      <div className="flex flex-col w-full p-10 pt-12">
                        <h1 className=" text-3xl mb-4 ">{goal.head}</h1>
                        <p className="text-base leading-relaxed overflow-y-auto ">
                          {goal.text}
                        </p>
                      </div>

                      <div className="sm:flex hidden justify-end w-full">
                        <img
                          src={goal.image}
                          alt="alt"
                          className=" h-auto rounded-r-lg"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
            <div className="flex justify-center mt-4 ">
              <button
                onClick={previous}
                className="text-white p-4 focus:outline-none rounded-l-md "
                style={{ backgroundColor: '#fd1015' }}
              >
                <Arrowleft />
              </button>
              <button
                onClick={next}
                className="text-white p-4 focus:outline-none rounded-r-md "
                style={{ backgroundColor: '#fd1015' }}
              >
                <Arrowright />
              </button>
            </div>
          </div>
          {/* end slider */}
        </section>
        <section>
          <div className="flex sm:flex-row flex-col flex-wrap justify-between max-w-5xl m-auto pt-14">
            <div data-aos="fade-up" className=" flex flex-col sm:w-1/2 w-full sm:border-r border-none sm:border-red-100 border-none mb-7 mt-12 sm:pr-8 pr-0 sm:pl-0 pl-8">
              <h1 className="sm:text-4xl text-3xl sm:leading-normal leading-normal">
                An{' '}
                <span
                  className=" px-3 bg-red-100 rounded"
                  style={{ color: '#fd1015' }}
                >
                  immersive
                </span>{' '}
                coding bootcamp
              </h1>
              <div className="">
                <p className="mb-9 mt-6">Learn coding in a few weeks.</p>
                <p className="mb-9">
                  We bring coding skills to creative people who aim to create
                  their own startup, or add a technical know-how to their
                  skillset.
                </p>
                <p className="mb-9">
                  Our Web Development bootcamp teaches you all the web stack,
                  from the database to the browser. You will learn the core
                  concepts of object-oriented programming, and structure your
                  software following design patterns like MVC. In addition to
                  mastering back-end programming languages (NodeJS, Mongo DB),
                  you will develop your front-end skills using recent techniques
                  like flexbox, CSS grid and learn ES6, the latest version of
                  JavaScript.
                </p>
              </div>
            </div>
            <div data-aos="fade-down" className="flex flex-col sm:w-1/2 w-full mb-7 sm:mt-12 mt-0 pl-8">
              <p className="mb-9">
                We strongly believe that there is a good way of building web
                products. During our bootcamp, we teach you how successful
                startups work: design your project's wireframe & mockup, test
                your UX with a prototype, split your user stories across your
                team and collaborate with branch and pull requests with git and
                Github.
              </p>
              <p className="mb-9">
                Our Data Science bootcamp takes you all the way from Pandas to
                Deep Learning. You finish the course knowing how to explore,
                clean and transform data into actionable insights and how to
                implement Machine Learning models from start to finish in a
                production environment, working in teams with the best-in-class
                tool belt.
              </p>
              <p className="mb-9">
                We originally created our coding bootcamps with a full-time
                format: 9 intensive weeks to learn Web Development or Data
                Science. In order to make our coding bootcamps accessible to
                even more people, we decided to adapt our courses to a part-time
                format: 24 weeks, 2 evenings per week and Saturdays. This format
                enables you to learn coding while keeping your current job.
              </p>
            </div>
          </div>
        </section>
        <section className="section_two">
          <div data-aos="flip-up" className="flex justify-center max-w-5xl m-auto">
            <div className="flex mt-12 mb-12 ">
              <div
                className="flex flex-col items-center justify-around justify-center w-full p-6 bg-white sm:px-20 px-0 "
                style={{ height: '340px' }}
              >
                <h1 className="font-bold sm:text-3xl text-2xl">
                  Are you ready to learn coding?
                </h1>
                <div className="">
                  <button
                    className=" py-5 px-8 rounded font-bold bg-redd border-redd text-white text-lg border hover:bg-white hover:text-red-600"
                    // style={{ backgroundColor: '#fd1015' }}
                  >
                    Discover our courses
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
