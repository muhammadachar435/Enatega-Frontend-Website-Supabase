import { useState, useRef } from "react";

function PreEquistic() {
  const [activeTab, setActiveTab] = useState(null);
  const sectionRefs = useRef([]);
  const scrollToSection = (index) => {
    const offset = 150; // Customize based on header or margin
    const element = sectionRefs.current[index];
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveTab(index);
    }
  };
  return (
    <>
      <div className="flex iox:space-x-16 iox:mt-1  biglap:-space-y-56 sm:h-[560px] mymob:h-[550px] myiphone:h-[520px] tablet:h-[500px]  biglap:h-[600px] ">
        <div
          key="preequistic"
          className="text-left desktop:mt-1 iox:mt-0 biglap:mx-44 sm:w-[286px] mymob:w-[335px] myiphone:w-[400px] tablet:w-[690px] desktop:w-[639px] biglap:w-[1000px] border-b-2 border-gray-200 "
        >
          <p className="font-inter text-green-700 text-sm ">Getting Started</p>

          <h1 className="sm:text-2xl tablet:text-3xl font-bold text-[#1A1D1E] font-inter  my-4">
            Prerequisites
          </h1>

          {/* Section 1 What Prerequisite knowledge do you need to run this app? */}
          <section
            ref={(el) => {
              sectionRefs.current[0] = el;
            }}
          >
            <h1 className="sm:text-2xl capitalize font-bold text-[#1A1D1E] font-inter my-4">
              What Prerequisite knowledge do you need to run this app?
            </h1>

            <ul className="list-disc font-[500] my-2 font-inter text-[17px] px-8  ">
              <li>
                <a
                  href="https://nodejs.org/en/"
                  target="blank"
                  className="text-green-600"
                >
                  NodeJS
                </a>
              </li>

              <li>
                <a
                  href="https://expressjs.com/"
                  target="blank"
                  className="text-green-600"
                >
                  ExpressJS
                </a>
              </li>

              <li>
                <a
                  href=" https://github.com/facebook/react"
                  target="blank"
                  className="text-green-600"
                >
                  React
                </a>
              </li>

              <li>
                <a
                  href="https://reactnative.dev/"
                  target="blank"
                  className="text-green-600"
                >
                  React-Native
                </a>
              </li>

              <li>
                <a
                  href="https://www.npmjs.com/"
                  target="blank"
                  className="text-green-600"
                >
                  NPM
                </a>
              </li>

              <li>
                <a
                  href="https://git-scm.com/"
                  target="blank"
                  className="text-green-600"
                >
                  Git
                </a>
              </li>

              <li>
                <a
                  href="https://docs.expo.dev/more/expo-cli/"
                  target="blank"
                  className="text-green-600"
                >
                  expo-cli
                </a>
              </li>
            </ul>
          </section>
          {/* 1st section end */}

          {/* 2nd Section Pre-Installed Software */}
          <section
            ref={(el) => {
              sectionRefs.current[1] = el;
            }}
          >
            <h1 className="sm:text-2xl capitalize font-bold text-[#1A1D1E] font-inter my-4">
              Pre-Installed Software
            </h1>
            <ul class="list-disc font-[500] my-2 font-inter text-[17px] px-8  text-[#0C0C0C] ">
              <li>
                Latest or Stable version of Node{" "}
                <a
                  href="https://nodejs.org/en/about/previous-releases"
                  target="blank"
                  className="text-green-600"
                >
                  Download
                </a>
              </li>

              <li>Latest or Stable version of NPM</li>
            </ul>
          </section>
        </div>
        {/* End Preequistic content */}

        {/* 2nd box button */}
        <div className=" text-[14px] biglap:text-2xl hidden iox:flex iox:flex-col">
          <h1 className="font-inter font-semibold ">On this Page</h1>
          {/* 1st box */}
          <div className="text-inter font-[500] mt-2">
            <button
              onClick={() => {
                scrollToSection(0);
              }}
              className={
                activeTab === 0
                  ? `border-l-2 border-[#42858d] text-[#42858d] px-2 py-2 cursor-pointer text-left biglap:py-6`
                  : `border-l-2 border-[#dbdbdb] text-[#1A1D1E] px-2 py-2 cursor-pointer text-left biglap:py-6`
              }
            >
              What Prerequisite knowledge do you need to run this app?
            </button>
          </div>
          {/* 2nd box */}
          <div className="text-inter font-[500] ">
            <button
              onClick={() => {
                scrollToSection(1);
              }}
              className={
                activeTab === 1
                  ? `border-l-2 border-[#42858d] text-[#42858d] px-2 py-2 text-left cursor-pointer biglap:py-6`
                  : `border-l-2 border-[#dbdbdb] text-[#1A1D1E] px-2 py-2 text-left cursor-pointer biglap:py-6`
              }
            >
              Pre-Installed Software
            </button>
          </div>
          {/* 2nd button end */}
        </div>
        {/* Button content end */}
      </div>
    </>
  );
}

export default PreEquistic;
