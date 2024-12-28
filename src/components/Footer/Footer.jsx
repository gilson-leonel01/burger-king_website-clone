import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaTwitter,
} from "react-icons/fa";
import footerLogo from "../../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div data-aos="fade-up" className="bg-gray-100">
      <section className="max-w-[1200px] mx-auto">
        <div className=" grid md:grid-cols-3 py-5">
          {/* company details */}
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Logo" className="w-16" />
              Burger King
            </h1>
            <p className="">
            Burger King® is a global fast-food chain known for its flame-grilled burgers, fresh ingredients, and signature Whopper®. Serving delicious meals since 1954...
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Angola, Luanda</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+244 123456789</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="https://www.instagram.com">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="https://www.facebook.com">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="https://www.twitter.com">
                <FaTwitter className="text-3xl" />
              </a>
              <a href="https://www.linkedin.com">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
          {/* footer links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  <li className="cursor-pointer">Delivery Services</li>
                  <li className="cursor-pointer">Our Day Menu</li>
                  <li className="cursor-pointer">Order now</li>
                  <li className="cursor-pointer">Login</li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Quick Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer">Home</li>
                  <li className="cursor-pointer">About</li>
                  <li className="cursor-pointer">Services</li>
                  <li className="cursor-pointer">Products</li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Extra Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer">Home</li>
                  <li className="cursor-pointer">Gallery Foods</li>
                  <li className="cursor-pointer">Passed Events</li>
                  <li className="cursor-pointer">more...</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center py-10 border-t-2 border-gray-300/50">
          Copyright &copy; {currentYear} FLAMES Inc. All rights reserved, created by G! with The Coding Journey
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
