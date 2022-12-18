import { useState, useRef } from "react";
import brandIcon from "../images/icon-brand-recognition.svg";
import detailedIcon from "../images/icon-detailed-records.svg";
import fullyIcon from "../images/icon-fully-customizable.svg";
import axios from "axios";

export default function Main() {
  const [link, setLink] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [errorMsg, setErrorMsg] = useState();
  const [shortenLinks, setShortenLinks] = useState([]);
  const ref = useRef();
  const baseAPI = "https://api.shrtco.de/v2/shorten?url=";

  const handleLinkTyping = (value) => {
    setLink(value);
    setShowWarning(false);
    setErrorMsg("");
  };

  const handleLink = (e) => {
    e.preventDefault();
    if (!link) {
      setShowWarning(true);
      ref.current.focus();
    } else {
      axios
        .get(`${baseAPI}${link}`)
        .then((res) => {
          setShortenLinks([
            {
              link: res.data?.result?.original_link,
              shorten_link: res.data?.result?.full_short_link,
            },
            ...shortenLinks,
          ]);
          ref.current.value = "";
          setLink("");
        })
        .catch((err) => setErrorMsg(err?.response?.data?.error));
    }
  };

  const RenderError = ({ className }) => {
    if (showWarning) {
      return (
        <p className={`text-red italic text-xs -mt-2.5 ${className}`}>
          Please add a link
        </p>
      );
    } else if (errorMsg) {
      return (
        <p className={`text-red italic text-xs -mt-2.5 ${className}`}>
          {errorMsg}
        </p>
      );
    } else {
      return null;
    }
  };

  const handleCopy = (linkToCopy) => {
    navigator.clipboard.writeText(linkToCopy);
  };

  const CopyButton = ({ link }) => {
    const [isCopied, setIsCopied] = useState(false);
    const handleClickButton = () => {
      handleCopy(link);
      setIsCopied(true);
    };
    if (isCopied) {
      return (
        <button
          className="bg-dark-violet rounded-md text-white font-bold py-2 mx-3.5 sm:min-w-min sm:w-30 sm:py-2.5 sm:text-base"
          onClick={handleClickButton}
        >
          Copied!
        </button>
      );
    }
    return (
      <button
        className="bg-cyan rounded-md text-white font-bold py-2 mx-3.5 sm:min-w-min sm:w-30 sm:py-2.5 sm:text-base"
        onClick={handleClickButton}
      >
        Copy
      </button>
    );
  };

  const ShortenedLinks = () => {
    return (
      <div
        id="shortened-links"
        className="flex flex-col gap-6 mx-5 mt-6 text-base sm:text-lg sm:gap-5"
      >
        {shortenLinks.slice(0, 3).map((shortenedLink) => {
          return (
            <div
              id="shortened-links-wrapper"
              className="bg-white w-full rounded-md"
              key={shortenedLink?.shorten_link}
            >
              <div className="flex flex-col gap-3 py-4 sm:flex-row sm:gap-0">
                <div
                  className="px-3.5 border-b truncate text-very-dark-blue pb-2 sm:border-0 sm:grow sm:pb-0 sm:my-auto"
                  style={{ borderColor: "#E5E5E5" }}
                >
                  {shortenedLink?.link}
                </div>
                <div className="mx-3.5 text-cyan sm:min-w-min sm:min-w-min sm:w-30 sm:py-0 sm:my-auto">
                  {shortenedLink?.shorten_link}
                </div>
                <CopyButton link={shortenedLink?.shorten_link} />
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <main>
      <section className="mb-20 pb-2 sm:container">
        <form
          className="shorten-it mx-5 flex flex-col gap-4 bg-dark-violet p-6 rounded-lg bg-shorten-mobile sm:bg-shorten-desktop bg-[top_-2.1rem_right_-4.2rem] bg-no-repeat bg-contain -mt-20 z-50 relative sm:flex-row sm:py-14 sm:px-16 sm:flex-wrap sm:min-w-min sm:bg-cover sm:bg-[top_0_right_0] sm:mx-0"
          onSubmit={(e) => handleLink(e)}
        >
          <input
            type="search"
            placeholder="Shorten a link here..."
            className={`py-3 px-4 rounded-md text-base sm:text-xl sm:grow ${
              showWarning && "outline-red focus"
            }`}
            onChange={(e) => handleLinkTyping(e.target.value)}
            ref={ref}
          />
          <RenderError className="sm:absolute sm:text-base sm:mt-0 sm:bottom-1 lg:bottom-6" />
          <button className="py-3 bg-cyan rounded-lg font-bold text-white sm:active:opacity-70 sm:min-w-min sm:px-9 sm:hover:opacity-50 sm:py-4 sm:text-xl">
            Shorten It!
          </button>
        </form>
        {shortenLinks.length > 0 && <ShortenedLinks />}
      </section>
      <section
        id="advance-statistic-container"
        className="mx-5 mb-20 sm:container"
      >
        <div className="text-center flex flex-col gap-4 mb-20">
          <h2
            className="text-very-dark-blue font-bold"
            style={{ fontSize: "1.72rem" }}
          >
            Advanced Statistic
          </h2>
          <p className="text-gray text-base leading-7">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        <div className="flex flex-col text-center">
          <div
            id="brad-recognition"
            className="bg-white rounded-md flex flex-col gap-4 px-8"
          >
            <div className="icon-container flex">
              <div className="icon-wrapper w-22 h-22 flex bg-dark-violet mx-auto rounded-full mb-4 -mt-12">
                <img
                  src={brandIcon}
                  alt="brand icon"
                  className="m-auto w-10 h-10"
                />
              </div>
            </div>
            <h3 className="font-bold text-very-dark-blue text-1.5xl">
              Brand Recognition
            </h3>
            <p className="text-gray text-md leading-7 mb-7">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          <span className="mx-auto w-2 bg-cyan h-22" />
          <div
            id="detailed-records"
            className="bg-white rounded-md flex flex-col gap-4 px-8"
          >
            <div className="icon-container flex">
              <div className="icon-wrapper w-22 h-22 flex bg-dark-violet mx-auto rounded-full mb-4 -mt-12">
                <img
                  src={detailedIcon}
                  alt="detailed icon"
                  className="m-auto w-10 h-10"
                />
              </div>
            </div>
            <h3 className="font-bold text-very-dark-blue text-1.5xl">
              Detailed Records
            </h3>
            <p className="text-gray text-md leading-7 mb-7">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <span className="mx-auto w-2 bg-cyan h-22" />
          <div
            id="fully-customizable"
            className="bg-white rounded-md flex flex-col gap-4 px-8"
          >
            <div className="icon-container flex">
              <div className="icon-wrapper w-22 h-22 flex bg-dark-violet mx-auto rounded-full mb-4 -mt-12">
                <img
                  src={fullyIcon}
                  alt="fully icon"
                  className="m-auto w-10 h-10"
                />
              </div>
            </div>
            <h3 className="font-bold text-very-dark-blue text-1.5xl">
              Fully Customizable
            </h3>
            <p className="text-gray text-md leading-7 mb-7">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </section>
      <section
        id="main-cta"
        className="bg-dark-violet text-white flex bg-boost-mobile bg-center bg-no-repeat bg-cover"
      >
        <div
          id="main-cta-wrapper"
          className="mx-auto my-20 py-4 flex flex-col gap-3"
        >
          <h2 className="text-2.5xl font-bold">Boost your links today</h2>
          <button className="bg-cyan rounded-full px-12 py-3.5 mx-auto font-bold">
            Get Started
          </button>
        </div>
      </section>
    </main>
  );
}
