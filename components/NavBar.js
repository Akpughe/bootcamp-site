import React from 'react';
import Image from 'next/image';

const NavBar = () => {
  return (
    <>
      <nav className="flex justify-between max-w-5xl  pt-8 m-auto">
        <div className="flex sm:pl-0 pl-6 ">
          <div className="pt-4">
            {/* <h1 className="text-2xl">Bootcamp</h1> */}
            <Image src="/vercel.svg" width={100} height={60} />
          </div>
          {/*  */}
          <div className="pl-6">
            <ul className="flex relative top-5 leading-13">
              <div className="flex flex-col  hover:shadow-2xl dropdown">
                <li className="li px-4 cursor-pointer bg-white ">Courses</li>
                {/*  */}
                <div className="absolute -top-1 mt-12 w-80 bg-white shadow-2xl ">
                  <div className="hidden p-4 pt-4 dropdown-content bg-white">
                    <span className="text-gray-800 text-xs px-4">
                      Web Development
                    </span>
                    <div className="hover:bg-yellow-100 opacity-80 px-4 -mt-4">
                      <a className="text-sm  " href="">
                        Web Development Full-time
                        <span className="block text-xs -mt-2">12 weeks</span>
                      </a>
                    </div>
                    <div className="hover:bg-yellow-100 opacity-80 px-4">
                      <a className="text-sm  " href="">
                        Web Development Part-time
                        <span className="block text-xs -mt-2">24 weeks</span>
                      </a>
                    </div>
                    {/*  */}
                    <span className="text-gray-800 text-xs px-4">
                      Data Science
                    </span>
                    <div className="hover:bg-yellow-100 opacity-80 px-4 -mt-4">
                      <a className="text-sm  " href="">
                        Data Science Full-time
                        <span className="block text-xs -mt-2">12 weeks</span>
                      </a>
                    </div>
                    <div className="hover:bg-yellow-100 opacity-80 px-4">
                      <a className="text-sm  " href="">
                        Data Science Part-time
                        <span className="block text-xs -mt-2">24 weeks</span>
                      </a>
                    </div>
                  </div>
                  {/*  */}
                </div>
                {/*  */}
              </div>
              {/* Events */}
              <div className="flex flex-col  hover:shadow-2xl dropdown">
                <li className="li px-4 cursor-pointer bg-white ">Events</li>
                {/*  */}
                <div className="absolute -top-1 mt-12 w-80 bg-white shadow-2xl ">
                  <div className="hidden p-4 pt-4 dropdown-content bg-white">
                    <span className="text-gray-800 text-xs px-4">
                      Start your tech journey
                    </span>
                    <div className="hover:bg-yellow-100 opacity-80 px-4 -mt-2">
                      <a className="text-sm  " href="">
                        Workshop and Masterclass
                      </a>
                    </div>
                    <div className="hover:bg-yellow-100 opacity-80 px-4">
                      <a className="text-sm  " href="">
                        All events
                      </a>
                    </div>
                    {/*  */}
                  </div>
                  {/*  */}
                </div>
                {/*  */}
              </div>
            </ul>
          </div>
          {/*  */}
        </div>

        {/*  */}
        <div className="flex relative pl-6">
          <ul className="sm:flex hidden relative top-5">
            <li className="px-5 cursor-pointer leading-13">About</li>
            <li className="px-5 cursor-pointer font-bold text-red-500 bg-white h-10 pt-3 pb-10 shadow-2xl">
              Apply Now
            </li>
          </ul>
          {/* <button className="relative top-0 border border-transparent shadow-2xl font-bold text-xl text-red-500 px-6">
            Apply Now
          </button> */}
          {/* <a
            className="flex justify-center items-center py-3 px-9 rounded-md font-bold cursor-pointer bg-white text-red-500  shadow-2xl"
            href=""
          >
            hello
          </a> */}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
