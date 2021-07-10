import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer
      className="w-full flex justify-center text-white"
      style={{ backgroundColor: '#0e0000' }}
    >
      <div className="flex sm:flex-row flex-col flex-wrap py-20">
        {/* 1 */}
        <div className="w-64 mb-5 ">
          <div className="mb-3">
            <h1 className="font-bold text-3xl">logo here</h1>
          </div>
          <p className="text-lg font-extralight">
            We're bring tech skills to creative people
          </p>
        </div>
        <div className="w-40 mb-5">
          <h3 className=" text-lg font-semibold ">About us</h3>
          <ul className="mt-4 font-extralight">
            <Link href="/join">
              <li className="list-none cursor-pointer ">Join Davak</li>
            </Link>
            <Link href="/team">
              <li className="list-none cursor-pointer ">Our team</li>
            </Link>
            <Link href="/contact">
              <li className="list-none cursor-pointer ">Contact us</li>
            </Link>
          </ul>
        </div>
        <div className="w-44 mb-5 ">
          <h3 className=" text-lg font-semibold ">Resources</h3>
          <ul className="mt-4 font-extralight">
            <Link href="/blog">
              <li className="list-none cursor-pointer ">Blog</li>
            </Link>
            <Link href="/event">
              <li className="list-none cursor-pointer ">Events</li>
            </Link>
            <Link href="/careers">
              <li className="list-none cursor-pointer ">
                All careers in Web Development
              </li>
            </Link>
          </ul>
        </div>
        <div className="w-40 mb-5">
          <h3 className=" text-lg font-semibold ">Follow us</h3>
          <ul className="mt-4 font-extralight">
            <li className="list-none cursor-pointer ">Instagram</li>
            <li className="list-none cursor-pointer ">Twitter</li>
            <li className="list-none cursor-pointer ">Facebook</li>
            <li className="list-none cursor-pointer ">Linkedin</li>
            <li className="list-none cursor-pointer ">Contact us</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
