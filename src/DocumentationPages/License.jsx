import { useState, useRef } from "react";

function License() {
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
      <div className="flex iox:space-x-20 iox:mt-1  biglap:-space-y-56 sm:h-[980px] mymob:h-[870px] myiphone:h-[770px] tablet:h-[570px] desktop:h-full desktop:max-h-[620px] ">
        <div
          key="License"
          className="text-left desktop:mt-1 iox:mt-0 biglap:mx-44 sm:w-[286px] mymob:w-[335px] myiphone:w-[400px] tablet:w-[690px] desktop:w-[639px] biglap:w-[1000px]  border-b-2 border-gray-200 "
        >
          <p className="font-inter text-green-700 text-sm desktop:w-[639px] biglap:w-[1000px] ml-0">
            Getting Started
          </p>

          <h1 className="sm:text-2xl tablet:text-3xl font-bold text-[#1A1D1E] font-inter desktop:w-[639px] biglap:w-[1000px] ml-auto my-4">
            License
          </h1>

          <div className="mt-1">
            <p className="font-inter text-[#0C0C0C] text-[18px] ml-auto">
              The license you buy determines how you can use an item. You are
              given a non-exclusive and non-transferable permission to use the
              thing in your personal or professional projects when you have a
              license to do so. We offer the following license:
            </p>
          </div>

          {/* 1st section */}
          <section ref={(el) => (sectionRefs.current[0] = el)}>
            <h1 className="font-inter text-[#1A1D1E] text-[24px] ml-0 my-4 font-bold ">
              Lifetime License
            </h1>
            <ul className="list-disc font-[500] font-inter text-[#0C0C0C] text-[16px]  px-8 ml-0 ">
              <li>
                There are no limitations on the number of iOS apps or Android
                apps you can install.
              </li>
              <li>
                The item may be used in work that you are doing for your
                personal needs or those of your clients.
              </li>
              <li>
                It is prohibited to sell or redistribute the source code.
                However, the finished app may be sold in the market.
              </li>
              <li>
                If the item contains licensed components, you may not extract
                those components and use them separately; you may only use those
                components as part of the item.
              </li>
              <li>
                The rules of the GNU General Public License (GPL), to the extent
                it applies, shall govern your use of the item if it was made
                using components covered by the GNU General Public License
                (GPL).
              </li>
            </ul>
          </section>
          {/* End Licence Content  */}
        </div>

        {/* 2nd box Licence Button */}
        <div className=" text-[14px] biglap:text-2xl hidden iox:flex iox:flex-col">
          <h1 className="font-inter font-semibold ">On this Page</h1>

          {/* 1st button */}
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
              Lifetime License
            </button>
          </div>
          {/* 1st button End */}
        </div>
      </div>
    </>
  );
}

export default License;
