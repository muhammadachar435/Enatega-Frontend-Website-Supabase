import { useState, useRef } from "react";
import { FaqQuestion } from "../Component/FaqQuestion";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
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
      <div className="flex iox:space-x-16 iox:mt-1 biglap:-space-y-56 sm:h-full sm:max-h-[1300px] desktop:h-full desktop:max-h-[800px] iox:h-full iox:max-h-[800px] biglap:h-[1000px] ">
        <div
          key="FAQ"
          className="text-left desktop:mt-1 iox:mt-0 biglap:mx-44 sm:pb-8 tablet:pb-0 sm:w-[286px] mymob:w-[335px] myiphone:w-[400px] tablet:w-[690px] desktop:w-[639px] biglap:w-[1000px]  border-b-2 border-gray-200 "
        >
          <p className="font-inter text-green-700 text-sm desktop:w-[639px] biglap:w-[1000px] ">
            Getting Started
          </p>

          <h1 className="sm:text-2xl tablet:text-3xl font-bold text-[#1A1D1E] font-inter  desktop:w-[639px] biglap:w-[1000px] my-4">
            Frequently Asked Questions
          </h1>

          <div>
            {FaqQuestion.map((question, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={question.id}
                  className="font-inter bg-[#f2f2f2] rounded-lg border border-gray-200 my-2 p-4 sm:text-[14px] biglap:text-base  desktop:w-[639px] biglap:w-[1000px] "
                >
                  <div
                    className="flex sm:items-center justify-between space-x-1"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <section
                      ref={(el) => {
                        sectionRefs.current[index] = el;
                      }}
                    >
                      <div className="">
                        <p className="sm:text-[15px] biglap:text-lg font-[500] text-[#000000] cursor-pointer font-inter ">
                          {question.title.slice(0)}
                        </p>
                      </div>
                    </section>
                    {/* Icons */}
                    <div className="">
                      <span
                        className={!isOpen ? "flex cursor-pointer" : "hidden"}
                      >
                        <IoIosArrowDown />
                      </span>
                      <span
                        className={isOpen ? "flex cursor-pointer" : "hidden"}
                      >
                        <IoIosArrowUp />
                      </span>
                    </div>
                  </div>

                  <p
                    className={
                      isOpen
                        ? "w-[96%] text-left flex my-1 text-[#4A4A50] font-sans"
                        : "hidden"
                    }
                  >
                    {question.paragraph}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Center Context end and FAQ Button*/}

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
              Can you explain the tech stack in more detail, including the front
              end and back end technologies used, as well as any libraries or
              packages?
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
              How can we add other payment methods?
            </button>
          </div>
          {/* 3rd box */}
          <div className="text-inter font-[500] ">
            <button
              onClick={() => {
                scrollToSection(2);
              }}
              className={
                activeTab === 2
                  ? `border-l-2  border-[#42858d] text-[#42858d] px-2 py-2 text-left cursor-pointer biglap:py-6`
                  : `border-l-2 border-[#dbdbdb] text-[#1A1D1E] px-2 py-2 text-left cursor-pointer biglap:py-6`
              }
            >
              Can this project be used for other similar solutions?
            </button>
          </div>
          {/* 4th */}
          <div className="text-inter font-[500] ">
            <button
              onClick={() => {
                scrollToSection(3);
              }}
              className={
                activeTab === 3
                  ? `border-l-2  border-[#42858d] text-[#42858d]  px-2 py-2 text-left cursor-pointer biglap:py-6`
                  : `border-l-2 border-[#dbdbdb] text-[#1A1D1E] px-2 py-2 text-left cursor-pointer biglap:py-6`
              }
            >
              Does it support language localization?
            </button>
          </div>
          {/* end box 4 */}
          {/* 5th */}
          <div className="text-inter font-[500] ">
            <button
              onClick={() => {
                scrollToSection(4);
              }}
              className={
                activeTab === 4
                  ? `border-l-2  border-[#42858d] text-[#42858d]  px-2 py-2 text-left cursor-pointer biglap:py-6`
                  : `border-l-2 border-[#dbdbdb] text-[#1A1D1E] px-2 py-2 text-left cursor-pointer biglap:py-6`
              }
            >
              How is the order tracked?
            </button>
          </div>
          {/* end box 5 */}

          {/* 6th button */}
          <div className="text-inter font-[500] ">
            <button
              onClick={() => {
                scrollToSection(5);
              }}
              className={
                activeTab === 5
                  ? `border-l-2  border-[#42858d] text-[#42858d]  px-2 py-2 text-left cursor-pointer biglap:py-6`
                  : `border-l-2 border-[#dbdbdb] text-[#1A1D1E] px-2 py-2 text-left cursor-pointer biglap:py-6`
              }
            >
              Can you provide more details about the modules included in the
              solution, such as the web admin dashboard, super admin, and vendor
              portal? How customizable are these modules?
            </button>
          </div>
          {/* end box 6 */}

          {/* button 7th */}
          <div className="text-inter font-[500] ">
            <button
              onClick={() => {
                scrollToSection(6);
              }}
              className={
                activeTab === 6
                  ? `border-l-2  border-[#42858d] text-[#42858d]  px-2 py-2 text-left cursor-pointer biglap:py-6`
                  : `border-l-2 border-[#dbdbdb] text-[#1A1D1E] px-2 py-2 text-left cursor-pointer biglap:py-6`
              }
            >
              Is everything up to date? Do we need to update anything soon?
            </button>
          </div>
          {/* end button 7 */}

          {/* 8th */}
          <div className="text-inter font-[500] ">
            <button
              onClick={() => {
                scrollToSection(7);
              }}
              className={
                activeTab === 7
                  ? `border-l-2  border-[#42858d] text-[#42858d]  px-2 py-2 text-left cursor-pointer biglap:py-6`
                  : `border-l-2 border-[#dbdbdb] text-[#1A1D1E] px-2 py-2 text-left cursor-pointer biglap:py-6`
              }
            >
              Is there additional documentation that is not available online?
            </button>
          </div>
          {/* end box 8 */}
        </div>
      </div>
    </>
  );
}

export default Faq;
