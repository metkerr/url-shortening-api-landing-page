import { useState } from "react";
import logo from "../images/logo.svg";
import workingIllustration from "../images/illustration-working.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      <div
        id="header-wrapper"
        className="bg-white min-h-min relative flex flex-col pt-10 pb-20"
      >
        <nav className="flex justify-between relative mx-5">
          <div className="nav-logo flex">
            <img src={logo} alt="shortly logo" className="m-auto" />
          </div>
          <div className="flex">
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
            className="menu-container hidden absolute w-full top-12 bg-dark-violet rounded-xl py-7 px-6 pb-11 text-white font-bold z-50"
            style={{ display: menuOpen && "block" }}
          >
            <div className="menu-wrapper flex flex-col gap-3">
              <button className=" py-2.5">Features</button>
              <button className=" py-2.5">Pricing</button>
              <button className=" py-2.5">Resources</button>
              <hr className="text-gray opacity-20 my-2" />
              <button className=" py-2.5">Login</button>
              <button className="bg-cyan py-2.5 rounded-full">Sign Up</button>
            </div>
          </div>
        </nav>
        <div id="hero" className="flex flex-col">
          <div
            className="illustration h-84 mt-6 mb-9 bg-cover bg-no-repeat sm:bg-contain"
            style={{
              backgroundImage: `url(${workingIllustration})`,
              backgroundPosition: "right -10rem top 0",
            }}
          />
          <div className="cta-wrapper text-center flex flex-col gap-3 mx-5">
            <h1
              className="text-very-dark-blue font-bold"
              style={{ fontSize: "2.65rem", lineHeight: "3rem" }}
            >
              More than just shorter links
            </h1>
            <p className="text-gray leading-7 mt-1">
              Build your brand's recognition and get detailed insights on how
              your links are performing
            </p>
            <div className="mt-5 pb-20 mb-1">
              <button className="bg-cyan rounded-full text-white px-12 py-3.5 font-bold">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
