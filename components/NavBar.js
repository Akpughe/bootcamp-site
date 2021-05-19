import React from 'react';
import Image from 'next/image';

const NavBar = () => {
  return (
    <>
      <nav className="flex justify-between max-w-5xl  pt-8 m-auto">
        <div className="flex">
          <div className="">
            {/* <h1 className="text-2xl">Bootcamp</h1> */}
            <Image src="/vercel.svg" width={100} height={60} />
          </div>
          {/*  */}
          <div className="pl-6">
            <ul className="flex relative top-5">
              <li className="li px-4 cursor-pointer">Courses</li>
              <li className="li px-4 cursor-pointer">Event</li>
            </ul>
          </div>
          {/*  */}
        </div>

        {/*  */}
        <div className="flex relative pl-6">
          <ul className="flex relative top-5">
            <li className="px-5 cursor-pointer">About</li>
          </ul>
          <button className="relative top-0 border border-transparent shadow-2xl font-bold text-xl text-red-500 px-9">
            Apply Now
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
