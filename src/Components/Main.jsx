import brandIcon from "../images/icon-brand-recognition.svg";
import detailedIcon from "../images/icon-detailed-records.svg";
import fullyIcon from "../images/icon-fully-customizable.svg";
export default function Main() {
  return (
    <main>
      <section id="advance-statistic-container" className="mx-5 mb-20">
        <div className="text-center flex flex-col gap-4 mb-20">
          <h2
            className="text-very-dark-blue font-bold"
            style={{ fontSize: "1.6925rem" }}
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
