import { useState } from "react";
import logo from "../images/logo.svg";
import workingIllustration from "../images/illustration-working.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      <div
        id="header-wrapper"
        className="bg-white min-h-min relative flex flex-col pt-10 pb-20 lg:pt-14"
      >
        <nav className="flex justify-between relative mx-5 lg:container lg:mx-auto lg:gap-14 ">
          <div className="nav-logo flex shrink-0">
            <img src={logo} alt="shortly logo" className="m-auto" />
          </div>
          <div className="flex lg:hidden">
            <button
              className="hamburger-button flex flex-col gap-1.5 m-auto"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
          <div
            className="menu-container hidden absolute w-full top-12 bg-dark-violet rounded-xl py-7 px-6 pb-11 text-white font-bold z-50 lg:block lg:static lg:bg-transparent lg:text-very-dark-blue lg:pb-0 lg:px-0 lg:py-0"
            style={{ display: menuOpen && "block" }}
          >
            <div className="menu-wrapper flex flex-col gap-3 lg:flex-row lg:text-gray lg:gap-8">
              <button className="py-2.5 hover:text-very-dark-blue">
                Features
              </button>
              <button className="py-2.5 hover:text-very-dark-blue">
                Pricing
              </button>
              <button className="py-2.5 hover:text-very-dark-blue">
                Resources
              </button>
              <hr className="text-gray opacity-20 my-2 lg:hidden" />
              <button className="py-2.5 hover:text-very-dark-blue lg:ml-auto">
                Login
              </button>
              <button className="bg-cyan py-2.5 rounded-full lg:text-white lg:px-7 hover:opacity-50 lg:py-2 lg:ml-5 active:opacity-70 whitespace-nowrap">
                Sign Up
              </button>
            </div>
          </div>
        </nav>
        <div
          id="hero"
          className="flex flex-col lg:flex-row lg:container lg:mx-auto lg:relative lg:mt-40 lg:justify-between lg:mb-24"
        >
          <div
            className="illustration h-84 mt-6 mb-9 bg-cover bg-no-repeat lg:min-w-min lg:order-last lg:basis-1/2
          "
          >
            <img
              src={workingIllustration}
              alt="working illustration"
              className="h-80 sm:mx-auto object-cover object-left pl-5 mt-1 lg:pl-0 lg:h-illustration lg:-mt-24 lg:mx-auto min-w-fit xl:ml-0 2xl:ml-36"
            />
          </div>
          <div className="cta-wrapper text-center flex flex-col gap-3 mx-5 lg:text-left lg:basis-1/2 lg:mx-0 lg:grow min-w-min lg:min-w-[488px] xl:min-w-[580px]">
            <h1 className="text-very-dark-blue font-bold text-4.5xl lg:leading-medium lg:text-7xl">
              More than just shorter links
            </h1>
            <p className="text-gray leading-7 mt-1 lg:pr-24 lg:-mt-1 lg:leading-9 lg:text-xl">
              Build your brand's recognition and get detailed insights on how
              your links are performing
            </p>
            <div className="mt-5 pb-20 mb-1 lg:mt-7 lg:text-xl">
              <button className="bg-cyan rounded-full text-white px-12 py-3.5 font-bold hover:opacity-50 active:opacity-70">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
