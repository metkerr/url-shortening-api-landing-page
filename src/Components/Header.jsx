import { useState } from "react";
import logo from "../images/logo.svg";
import workingIllustration from "../images/illustration-working.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      <div
        id="header-wrapper"
        className="bg-white min-h-min relative flex flex-col pt-10 pb-20 sm:pt-14"
      >
        <nav className="flex justify-between relative mx-5 sm:container sm:mx-auto sm:gap-14 ">
          <div className="nav-logo flex shrink-0">
            <img src={logo} alt="shortly logo" className="m-auto" />
          </div>
          <div className="flex sm:hidden">
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
            className="menu-container hidden absolute w-full top-12 bg-dark-violet rounded-xl py-7 px-6 pb-11 text-white font-bold z-50 sm:block sm:static sm:bg-transparent sm:text-very-dark-blue sm:pb-0 sm:px-0 sm:py-0"
            style={{ display: menuOpen && "block" }}
          >
            <div className="menu-wrapper flex flex-col gap-3 sm:flex-row sm:text-gray sm:gap-8">
              <button className="py-2.5 sm:hover:text-very-dark-blue">
                Features
              </button>
              <button className="py-2.5 sm:hover:text-very-dark-blue">
                Pricing
              </button>
              <button className="py-2.5 sm:hover:text-very-dark-blue">
                Resources
              </button>
              <hr className="text-gray opacity-20 my-2 sm:hidden" />
              <button className="py-2.5 sm:hover:text-very-dark-blue sm:ml-auto">
                Login
              </button>
              <button className="bg-cyan py-2.5 rounded-full sm:text-white sm:px-7 sm:hover:opacity-50 sm:py-2 sm:ml-5 sm:active:opacity-70">
                Sign Up
              </button>
            </div>
          </div>
        </nav>
        <div
          id="hero"
          className="flex flex-col sm:flex-row sm:container sm:mx-auto sm:relative sm:mt-40 sm:justify-between sm:mb-24"
        >
          <div className="illustration h-84 mt-6 mb-9 bg-cover bg-no-repeat sm:basis-2/5 sm:order-last sm:min-w-max">
            <img
              src={workingIllustration}
              alt="working illustration"
              className="h-80 object-cover object-left pl-9 mt-1 sm:pl-0 sm:absolute sm:h-illustration sm:object-contain sm:min-w-max sm:-mt-24"
            />
          </div>
          <div className="cta-wrapper text-center flex flex-col gap-3 mx-5 sm:text-left sm:basis-1/2 sm:mx-0 sm:grow">
            <h1 className="text-very-dark-blue font-bold text-4.5xl sm:leading-medium sm:text-7.5xl">
              More than just shorter links
            </h1>
            <p className="text-gray leading-7 mt-1 sm:pr-48 sm:-mt-1 sm:leading-9 sm:text-xl">
              Build your brand's recognition and get detailed insights on how
              your links are performing
            </p>
            <div className="mt-5 pb-20 mb-1 sm:mt-7 sm:text-xl">
              <button className="bg-cyan rounded-full text-white px-12 py-3.5 font-bold sm:hover:opacity-50 sm:active:opacity-70">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
