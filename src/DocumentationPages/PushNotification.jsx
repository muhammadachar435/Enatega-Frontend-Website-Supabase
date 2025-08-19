import { useState, useRef } from "react";

function PushNotification() {
  const sectionRef = useRef([]);
  const [activeTab, setActiveTab] = useState(null);

  const scrollTOSection = (index) => {
    const offSet = 150;
    const element = sectionRef.current[index];
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - offSet;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveTab(index);
    }
  };

  return (
    <>
      <div className="flex iox:space-x-16 iox:mt-1 biglap:-space-y-56 sm:h-[1350px] mymob:h-[1250px] myiphone:h-[1320px] tablet:h-[1220px] desktop:h-[1250px] biglap:h-[1450px] ">
        <div
          key="setup"
          className="text-left desktop:mt-1 iox:mt-0 biglap:mx-44 sm:w-[286px] mymob:w-[335px] myiphone:w-[400px] tablet:w-[690px] desktop:w-[639px] biglap:w-[1000px] border-b-2 border-gray-200 "
        >
          <p className="font-inter text-green-700 text-sm ">Configuration</p>

          <h1 className="sm:text-2xl tablet:text-3xl capitalize font-bold text-[#1A1D1E] font-inter  my-4">
            Configuration Push notification keys
          </h1>

          <section ref={(el) => (sectionRef.current[0] = el)}>
            <h1 className="sm:text-2xl capitalize font-bold text-[#1A1D1E] font-inter  my-4">
              Push Notification for Web
            </h1>
          </section>
          <div className="relative mt-4">
            <iframe
              loading="lazy"
              className="sm:w-[285px] sm:h-[300px] mymob:w-[335px] myiphone:w-[381px] myiphone:h-[350px] tablet:w-[690px] desktop:w-[635px]  tablet:h-[360px] biglap:w-[1000px] biglap:h-[460px] h-full max-h-[950px]"
              src="https://www.youtube.com/embed/CaLQ6DE4UPA?si=l_rUWZaok1XKF2rs"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>

          <p className="my-6 text-gray-500 text-center ">
            Enatega Multivendor | Configuring NodeJS Application on Digital
            Ocean Server
          </p>

          <section ref={(el) => (sectionRef.current[1] = el)}>
            <h1 className="sm:text-2xl capitalize font-bold text-[#1A1D1E] font-inter  my-4">
              Push Notifications for Android
            </h1>
          </section>
          <div className="relative mt-4">
            <iframe
              loading="lazy"
              className="sm:w-[285px] sm:h-[300px] mymob:w-[335px] myiphone:w-[381px] myiphone:h-[350px] tablet:w-[690px] desktop:w-[635px]  tablet:h-[360px] biglap:w-[1000px] biglap:h-[460px] h-full max-h-[950px]"
              src="https://www.youtube.com/embed/gwNPOEScjtU?si=fBAu9vQiWRJ1viPm"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>

          <p className="my-6 text-gray-500 text-center ">
            Enatega Multivendor | Push Notification with Android Firebase
          </p>

          <section ref={(el) => (sectionRef.current[2] = el)}>
            <h1 className="sm:text-2xl capitalize font-bold text-[#1A1D1E] font-inter  my-4">
              Push Notifications for iOS
            </h1>
          </section>
          <p className="font-inter text-[#0C0C0C] text-[18px]  tablet:w-[690px] desktop:w-[639px] biglap:w-[1000px] ">
            For iOS you don’t need to do anything when building using eas that
            is handled automatically for further documentation please use the
            following link: <br />
            <a
              href="https://docs.expo.dev/push-notifications/push-notifications-setup/#credentials"
              target="blank"
              className="text-green-600"
            >
              Push Notification Setup
            </a>
          </p>
        </div>
        {/* end content  */}

        {/* 2nd box button */}
        <div className=" text-[14px] biglap:text-2xl hidden iox:flex iox:flex-col iox:px-12">
          <h1 className="font-inter font-semibold ">On this Page</h1>
          {/* 1st box */}
          <div className="text-inter font-[500] mt-2">
            <button
              onClick={() => {
                scrollTOSection(0);
              }}
              className={
                activeTab === 0
                  ? `border-l-2 border-[#42858d] text-[#42858d] px-2 py-2 cursor-pointer text-left biglap:py-6`
                  : `border-l-2 border-[#dbdbdb] text-[#1A1D1E] px-2 py-2 cursor-pointer text-left biglap:py-6`
              }
            >
              Push Notification for Web
            </button>
          </div>
          {/* 1st button */}

          {/* 2nd box */}
          <div className="text-inter font-[500] ">
            <button
              onClick={() => {
                scrollTOSection(1);
              }}
              className={
                activeTab === 1
                  ? `border-l-2 border-[#42858d] text-[#42858d] px-2 py-2 cursor-pointer text-left biglap:py-6`
                  : `border-l-2 border-[#dbdbdb] text-[#1A1D1E] px-2 py-2 cursor-pointer text-left biglap:py-6`
              }
            >
              Push Notifications for Android
            </button>
          </div>
          {/* 2nd button */}

          {/* 3rd button */}
          <div className="text-inter font-[500] ">
            <button
              onClick={() => {
                scrollTOSection(2);
              }}
              className={
                activeTab === 2
                  ? `border-l-2 border-[#42858d] text-[#42858d] px-2 py-2 cursor-pointer text-left biglap:py-6`
                  : `border-l-2 border-[#dbdbdb] text-[#1A1D1E] px-2 py-2 cursor-pointer text-left biglap:py-6`
              }
            >
              Push Notifications for iOS
            </button>
          </div>
          {/* 3rd button */}
        </div>
      </div>
    </>
  );
}

export default PushNotification;
