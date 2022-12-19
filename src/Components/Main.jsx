import { useState, useRef, useEffect } from "react";
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

  useEffect(() => {
    const getLocalStorageScore = JSON.parse(
      localStorage.getItem("shortenLinks")
    );
    if (getLocalStorageScore) {
      return setShortenLinks(getLocalStorageScore);
    } else {
      return setShortenLinks([]);
    }
  }, []);

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
          ]); //update shorten links array

          localStorage.setItem(
            "shortenLinks",
            JSON.stringify([
              {
                link: res.data?.result?.original_link,
                shorten_link: res.data?.result?.full_short_link,
              },
              ...shortenLinks,
            ])
          );

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
          className="bg-dark-violet rounded-md text-white font-bold py-2 mx-3.5 xl:min-w-min xl:w-30 xl:py-2.5 xl:text-base"
          onClick={handleClickButton}
        >
          Copied!
        </button>
      );
    }
    return (
      <button
        className="bg-cyan rounded-md text-white font-bold py-2 mx-3.5 xl:min-w-min xl:w-30 xl:py-2.5 xl:text-base hover:opacity-50 active:opacity-70"
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
        className="flex flex-col gap-6 mx-5 lg:mx-0 mt-6 text-base xl:text-lg xl:gap-5"
      >
        {shortenLinks.slice(0, 3).map((shortenedLink) => {
          return (
            <div
              id="shortened-links-wrapper"
              className="bg-white w-full rounded-md"
              key={shortenedLink?.shorten_link}
            >
              <div className="flex flex-col gap-3 py-4 xl:flex-row xl:gap-0">
                <div
                  className="px-3.5 border-b truncate text-very-dark-blue pb-2 xl:border-0 xl:grow xl:pb-0 xl:my-auto"
                  style={{ borderColor: "#E5E5E5" }}
                >
                  {shortenedLink?.link}
                </div>
                <div className="mx-3.5 text-cyan xl:min-w-min xl:min-w-min xl:w-30 xl:py-0 xl:my-auto">
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
      <section className="mb-20 pb-2 xl:container">
        <form
          className="shorten-it mx-5 flex flex-col gap-4 bg-dark-violet p-6 rounded-lg bg-shorten-mobile xl:bg-shorten-desktop bg-[top_-2.1rem_right_-4.2rem] bg-no-repeat bg-contain -mt-20 z-50 relative xl:flex-row xl:py-14 xl:px-16 xl:flex-wrap xl:min-w-min xl:bg-cover xl:bg-[top_0_right_0] xl:mx-0"
          onSubmit={(e) => handleLink(e)}
        >
          <input
            type="search"
            placeholder="Shorten a link here..."
            className={`py-3 px-4 rounded-md text-base xl:text-xl xl:grow ${
              showWarning && "outline-red focus"
            }`}
            onChange={(e) => handleLinkTyping(e.target.value)}
            ref={ref}
          />
          <RenderError className="xl:absolute xl:text-base xl:mt-0 lg:bottom-6" />
          <button className="py-3 bg-cyan rounded-lg font-bold text-white active:opacity-70 xl:min-w-min xl:px-9 hover:opacity-50 xl:py-4 xl:text-xl">
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
          <h2 className="text-very-dark-blue font-bold text-2.7xl xl:text-4.5xl">
            Advanced Statistic
          </h2>
          <p className="text-gray text-base xl:text-xl leading-7 xl:w-1/2 xl:px-12 xl:mx-auto xl:leading-8">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        <div className="flex flex-col text-center xl:flex-row xl:text-left xl:mt-28 xl:pb-14 xl:max-w-[1088px] xl:mx-auto">
          <div
            id="brad-recognition"
            className="bg-white rounded-md flex flex-col gap-4 px-8 xl:h-[17rem] xl:max-w-[352px] xl:pr-4"
          >
            <div className="icon-container flex">
              <div className="icon-wrapper w-22 h-22 flex bg-dark-violet mx-auto rounded-full mb-4 -mt-12 xl:ml-0 xl:mb-7">
                <img
                  src={brandIcon}
                  alt="brand icon"
                  className="m-auto w-10 h-10"
                />
              </div>
            </div>
            <h3 className="font-bold text-very-dark-blue text-1.5xl xl:text-2xl">
              Brand Recognition
            </h3>
            <p className="text-gray text-md xl:text-md leading-7 mb-14">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          <span className="mx-auto w-2 bg-cyan h-22 xl:h-2 xl:w-24 xl:mt-40" />
          <div
            id="detailed-records"
            className="bg-white rounded-md flex flex-col gap-4 px-8 xl:pb-5 xl:h-[17rem] xl:max-w-[352px] xl:pr-4 mt-12 xl:w-[56rem]"
          >
            <div className="icon-container flex">
              <div className="icon-wrapper w-22 h-22 flex bg-dark-violet mx-auto rounded-full mb-4 -mt-12 xl:ml-0 xl:mb-7">
                <img
                  src={detailedIcon}
                  alt="detailed icon"
                  className="m-auto w-10 h-10"
                />
              </div>
            </div>
            <h3 className="font-bold text-very-dark-blue text-1.5xl xl:text-2xl">
              Detailed Records
            </h3>
            <p className="text-gray text-md xl:text-md leading-7 mb-14">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <span className="mx-auto w-2 bg-cyan h-22 xl:h-2 xl:w-24 xl:mt-40" />
          <div
            id="fully-customizable"
            className="bg-white rounded-md flex flex-col gap-4 px-8 xl:h-[17rem] xl:max-w-[352px] xl:pr-4
              xl:mt-24 xl:w-[56rem]"
          >
            <div className="icon-container flex">
              <div className="icon-wrapper w-22 h-22 flex bg-dark-violet mx-auto rounded-full mb-4 -mt-12 xl:ml-0 xl:mb-7">
                <img
                  src={fullyIcon}
                  alt="fully icon"
                  className="m-auto w-10 h-10"
                />
              </div>
            </div>
            <h3 className="font-bold text-very-dark-blue text-1.5xl xl:text-2xl">
              Fully Customizable
            </h3>
            <p className="text-gray text-md xl:text-md leading-7 mb-14">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </section>
      <section
        id="main-cta"
        className="bg-dark-violet text-white flex bg-boost-mobile xl:bg-boost-desktop bg-center bg-no-repeat bg-cover"
      >
        <div
          id="main-cta-wrapper"
          className="mx-auto my-20 py-4 flex flex-col gap-3 xl:my-14"
        >
          <h2 className="text-2.5xl text-center font-bold xl:text-4.5xl xl:pb-5">
            Boost your links today
          </h2>
          <button className="bg-cyan rounded-full px-12 py-3.5 mx-auto font-bold xl:text-xl active:opacity-70 hover:opacity-50">
            Get Started
          </button>
        </div>
      </section>
    </main>
  );
}
