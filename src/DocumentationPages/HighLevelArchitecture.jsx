import { useState, useRef } from "react";
import { FaCheck } from "react-icons/fa6";
function HighLevelArchitecture() {
  const [showVideo, setShowVideo] = useState(false);
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
      <div className="flex iox:space-x-16 iox:mt-1  biglap:-space-y-56 sm:h-[1980px] mymob:h-[1780px] myiphone:h-[1900px] tablet:h-[1450px] desktop:h-[1400px] iox:h-[1400px] biglap:h-[1250px] ">
        <div
          key="highLevel"
          className="text-left desktop:mt-1 iox:mt-0 biglap:mx-44 sm:w-[286px] mymob:w-[335px] myiphone:w-[350px] tablet:w-[690px] desktop:w-[639px] biglap:w-[1000px]  border-b-2 border-gray-200 "
        >
          <p className="font-inter text-green-700 text-sm  desktop:w-[639px] biglap:w-[1000px] mx-auto">
            Getting Started
          </p>
          <h1 className="sm:text-2xl tablet:text-3xl font-bold text-[#1A1D1E] font-inter  my-4 desktop:w-[639px] biglap:w-[1000px] mx-auto">
            High-Level Architecture
          </h1>
          <h1 className="sm:text-2xl capitalize tablet:text-3xl font-bold text-[#1A1D1E] font-inter  desktop:w-[639px] biglap:w-[1000px] my-4 mx-auto">
            How everything comes together
          </h1>
          <div className="mt-1">
            <p className="font-inter text-[#0C0C0C] text-[18px] sm:w-[300px]  mymob:w-[360px] myiphone:w-[400px] tablet:w-[728px] desktop:w-[638px] biglap:w-[1000px] mx-auto">
              The high-level architecture of the Enatega platform is designed
              for seamless interaction between various components.
            </p>
            <div className="sm:w-[285px] my-4 sm:h-auto mymob:w-[335px] myiphone:w-[381px] myiphone:h-[350px] tablet:w-[690px] desktop:w-[638px]  tablet:h-auto biglap:w-[1000px] biglap:h-[460px] h-full max-h-[950px] ">
              <img
                src="/Pictures/ApiServer.jpg"
                alt=""
                className="sm:w-[285px] sm:h-auto mymob:w-[335px] myiphone:w-[381px] myiphone:h-[350px] tablet:w-[690px] desktop:w-[639px]  tablet:h-auto biglap:w-[1000px] biglap:h-[460px] h-full max-h-[950px] "
              />
            </div>
          </div>
          <h1 className="sm:text-2xl tablet:text-3xl font-bold text-[#1A1D1E] font-inter sm:w-[300px]  mymob:w-[360px] myiphone:w-[400px] tablet:w-[728px] desktop:w-[639px] biglap:w-[1000px] my-4 mx-auto">
            Our High-Level Architecture At a Glance
          </h1>
          <p className="font-inter text-[#0C0C0C] text-[18px] tablet:w-[690px] desktop:w-[639px] biglap:w-[1000px] ml-0 pb-4 mt-4">
            The user’s mobile application provides access to both the API Server
            and the Amplitudes analytics dashboard. Meanwhile, the web dashboard
            exclusively communicates with the API Server. The platform features
            dedicated apps for different stakeholders: the Rider App and the
            Restaurant App, both of which interface directly with the API
            Server.
          </p>{" "}
          <p className="font-inter text-[#0C0C0C] text-[18px] tablet:w-[690px] desktop:w-[639px] biglap:w-[1000px] ml-0">
            Additionally, a comprehensive error reporting mechanism is in place,
            with the Customer App, Restaurant App, Rider App, Web Customer App,
            and the API Server itself all configured to report issues to Sentry,
            ensuring robust monitoring and quick resolution of any problems.
          </p>
          <p className="font-inter text-[#0C0C0C] text-[18px] tablet:w-[690px] desktop:w-[639px] biglap:w-[1000px] ml-auto ">
            To make your life as a developer easier, we made sure the code was
            neatly organized and got rid of any extra screens. For an even
            better development experience, it is combined with the following
            functionalities.
          </p>
          {/* 1st Vendor */}
          <section ref={(el) => (sectionRefs.current[0] = el)}>
            <div className="flex space-x-1 font-inter text-[#1A1D1E] text-[16px] tablet:w-[690px] desktop:w-[639px] biglap:w-[1000px] ml-auto my-4 font-bold ">
              <span className="text-left  ">
                {" "}
                <span className="text-white bg-green-500 text-center ">
                  {" "}
                  &nbsp;✔{" "}
                </span>
                &nbsp;Vendors create accounts and register restaurants on the
                system using the Admin Dashboard. They can manage orders, menus,
                and profiles.
              </span>
            </div>
          </section>
          {/* 2nd Customer  */}
          <section ref={(el) => (sectionRefs.current[1] = el)} className="">
            <div className="flex space-x-1 font-inter text-[#1A1D1E] text-[16px] tablet:w-[690px] desktop:w-[639px] biglap:w-[1000px] ml-0 my-4 font-bold ">
              <span className="text-left  ">
                {" "}
                <span className="text-white bg-green-500 text-center ">
                  {" "}
                  &nbsp;✔{" "}
                </span>
                &nbsp;Customers use the mobile/web app to browse restaurant
                menus, place food orders, and track delivery status.
              </span>
            </div>
          </section>
          {/* 3rd Restaurant */}
          <section ref={(el) => (sectionRefs.current[2] = el)} className="">
            <div className="flex space-x-1 font-inter text-[#1A1D1E] text-[16px] tablet:w-[690px] desktop:w-[639px] biglap:w-[1000px] ml-0 my-4 font-bold ">
              <span className="text-left  ">
                {" "}
                <span className="text-white bg-green-500 text-center ">
                  {" "}
                  &nbsp;✔{" "}
                </span>
                &nbsp;Restaurants receive and prepare orders made through the
                platform. They can view orders and update statuses.{" "}
              </span>
            </div>
          </section>
          {/* 4th Rider */}
          <section ref={(el) => (sectionRefs.current[3] = el)} className="">
            <div className="flex space-x-1 font-inter text-[#1A1D1E] text-[16px] tablet:w-[690px] desktop:w-[639px] biglap:w-[1000px] ml-0 my-4 font-bold ">
              <span className="text-left  ">
                {" "}
                <span className="text-white bg-green-500 text-center ">
                  {" "}
                  &nbsp;✔{" "}
                </span>
                &nbsp;Riders are notified of new delivery requests. They can
                pickup food from restaurants and drop off to customers, updating
                statuses through the rider app.
              </span>
            </div>
          </section>
          {/* 5th Api */}
          <section ref={(el) => (sectionRefs.current[4] = el)} className="">
            <div className="flex space-x-1 font-inter text-[#1A1D1E] text-[16px] tablet:w-[690px] desktop:w-[639px] biglap:w-[1000px] ml-auto my-4 font-bold ">
              <span className="text-left  ">
                {" "}
                <span className="text-white bg-green-500 text-center ">
                  {" "}
                  &nbsp;✔{" "}
                </span>
                &nbsp;The API acts as the backend, facilitating communication
                between all parties and storing/retrieving data in the MongoDB
                database.
              </span>
            </div>
          </section>
          {/* End 5th Api */}
          {/* End Enatega Technology Stack */}
        </div>

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
                  ? `border-l-2  border-[#42858d] flex text-[#42858d]  px-2 py-2 cursor-pointer text-left biglap:py-6`
                  : `border-l-2 border-[#dbdbdb] flex px-2 py-2 text-[#000000] cursor-pointer text-left biglap:py-6`
              }
            >
              <FaCheck className="text-white bg-[#78ac51] font-bold w-10 h-4 rounded-xs mx-1 border my-[3px]" />
              <span className="text-left">
                Vendors create accounts and register restaurants on the system
                using the Admin Dashboard. They can manage orders, menus, and
                profiles.
              </span>
            </button>
          </div>
          {/* 2nd box */}
          <div className="text-inter font-[500]">
            <button
              onClick={() => {
                scrollToSection(1);
              }}
              className={
                activeTab === 1
                  ? `border-l-2  border-[#42858d] flex text-[#42858d]  px-2 py-2 cursor-pointer text-left biglap:py-6`
                  : `border-l-2 border-[#dbdbdb] flex  px-2 py-2 text-[#000000] cursor-pointer text-left biglap:py-6`
              }
            >
              <FaCheck className="text-white bg-[#78ac51] font-bold w-8 h-4 rounded-xs mx-1 border my-[3px]" />
              <span className="text-left">
                Customers use the mobile/web app to browse restaurant menus,
                place food orders, and track delivery status.
              </span>
            </button>
          </div>
          {/* 3rd box */}
          <div className="text-inter font-[500]">
            <button
              onClick={() => {
                scrollToSection(2);
              }}
              className={
                activeTab === 2
                  ? `border-l-2  border-[#42858d] flex text-[#42858d]  px-2 py-2 cursor-pointer text-left biglap:py-6`
                  : `border-l-2 border-[#dbdbdb] flex px-2 py-2 text-[#000000]  cursor-pointer text-left biglap:py-6`
              }
            >
              <FaCheck className="text-white bg-[#78ac51] font-bold w-8 h-4 rounded-xs mx-1 border my-[3px]" />
              <span className="text-left">
                Restaurants receive and prepare orders made through the
                platform. They can view orders and update statuses.
              </span>
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
                  ? `border-l-2  flex border-[#42858d] text-[#42858d]  px-2 py-2 cursor-pointer text-left biglap:py-6`
                  : `border-l-2 flex  border-[#dbdbdb]  px-2 py-2 text-[#000000]  cursor-pointer text-left biglap:py-6`
              }
            >
              <FaCheck className="text-white bg-[#78ac51] font-bold w-10 h-4 rounded-xs mx-1 border my-[3px]" />

              <span className="text-left">
                Riders are notified of new delivery requests. They can pickup
                food from restaurants and drop off to customers, updating
                statuses through the rider app.
              </span>
            </button>
          </div>
          {/* end box 4 */}
          {/* 5th */}
          <div className="text-inter font-[500]">
            <button
              onClick={() => {
                scrollToSection(4);
              }}
              className={
                activeTab === 4
                  ? `border-l-2 flex border-[#42858d] text-[#42858d]  px-2 py-2 cursor-pointer text-left biglap:py-6`
                  : `border-l-2 flex border-[#dbdbdb]  px-2 py-2 text-[#000000]  cursor-pointer text-left biglap:py-6`
              }
            >
              <FaCheck className="text-white bg-[#78ac51] font-bold w-10 h-4 rounded-xs mx-1 border my-[3px]" />

              <span className="text-left">
                The API acts as the backend, facilitating communication between
                all parties and storing/retrieving data in the MongoDB database.
              </span>
            </button>
          </div>
          {/* end box 5 */}
        </div>
      </div>
    </>
  );
}

export default HighLevelArchitecture;
