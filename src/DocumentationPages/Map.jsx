import { useState, useRef } from "react";

function Map() {
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
      <div className="flex  iox:space-x-16 iox:mt-1  biglap:-space-y-56 sm:h-[2640px] mymob:h-[2350px] myiphone:h-[2280px] tablet:h-[1790px] desktop:h-[1850px] iox:h-[1860px] biglap:h-[1750px] ">
        <div
          key="setup"
          className="text-left  desktop:mt-1 iox:mt-0 biglap:mx-44 sm:w-[286px] mymob:w-[335px] myiphone:w-[400px] tablet:w-[690px] desktop:w-[639px] biglap:w-[1000px] border-b-2 border-gray-200 "
        >
          <p className="font-inter text-green-700 text-sm ">Configuration</p>

          <h1 className="sm:text-2xl tablet:text-3xl capitalize font-bold text-[#1A1D1E] font-inter  my-4">
            Configuration Google Maps API Keys
          </h1>

          <section ref={(el) => (sectionRefs.current[0] = el)}>
            <h1 className="sm:text-2xl capitalize font-bold text-[#1A1D1E] font-inter  my-4">
              Video Walkthrough
            </h1>
          </section>

          <div className="relative mt-4">
            <iframe
              loading="lazy"
              className="sm:w-[285px] sm:h-[300px] mymob:w-[335px] myiphone:w-[381px] myiphone:h-[350px] tablet:w-[690px] desktop:w-[635px]  tablet:h-[360px] biglap:w-[1000px] biglap:h-[460px] h-full max-h-[950px]"
              src="https://www.youtube.com/embed/x1HMGF8xfbs?si=Hoha8X3s-zV8D125"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>

          <p className="my-6 text-gray-500 text-center ">
            Enatega Multivendor | Configuring Google Maps API Key
          </p>

          {/* 1st section */}
          <section ref={(el) => (sectionRefs.current[1] = el)}>
            <h1 className="font-inter text-[#1A1D1E] sm:text-xl tablet:text-[24px] tablet:w-[728px] desktop:w-[639px] biglap:w-[1000px] mx-auto my-4 font-bold ">
              Setup
            </h1>
          </section>

          {/* 1st List */}
          <ul className="list-disc font-[500] font-inter text-[#0C0C0C] text-[16px] px-8">
            <li>
              Log in with your Google Account or establish an account at
              https://console.cloud.google.com.
            </li>
            <li>On the Google Cloud Console, create a project.</li>
            <li>Activate the aforementioned APIs in your project:</li>
          </ul>

          {/* 2nd List */}
          <ul className="list-decimal font-[500] font-inter text-[#0C0C0C] text-[16px] sm:px-4 iox:px-2 biglap:px-4 my-4">
            <li>Geoencoding API</li>
            <li>Maps Javascript API</li>
            <li>Places API</li>
            <li>Maps Elevation API</li>
            <li>Maps Static API</li>
            <li>GeoLocation API</li>
            <li>Distance Matrix API</li>
            <li>Maps SDK for Android</li>
            <li>Maps SDK for iOS</li>
          </ul>

          {/* 3rd List */}
          <ul className="list-disc font-[500] font-inter text-[#0C0C0C] text-[16px] px-8">
            <li>The Google Billing account also has to be set up</li>
            <li>{`Go to API & Services > Credentials from the left menu and select “Create Credentials.”`}</li>
            <li>
              Create a key called HTTP Key, and then add your website URL as
              follows under the website restrictions tab.
            </li>
          </ul>

          {/* Some Text */}
          <p className="font-inter text-[#0C0C0C] text-[18px]  desktop:w-[80%] my-4 ">
            If your website is{" "}
            <span className="font-semibold"> my-domain.com </span>add these:
            <span className="font-semibold"> https://my-domain.com/*</span>and
            <span className="font-semibold">
              https://www.my-domain.com/*
            </span>{" "}
            Make sure you add{" "}
            <span className="font-semibold">asterisk (*) </span>at the end of
            the URL.
          </p>
          {/* 4th List */}
          <ul className="list-disc font-[500] font-inter text-[#0C0C0C] text-[16px] px-8">
            <li>
              Create another key named IP Key and under the IP Addresses section
              paste your website/server IP address.
            </li>
          </ul>
          {/* end 4th List */}

          {/* 3rd section */}
          <section ref={(el) => (sectionRefs.current[2] = el)}>
            <h1 className="font-inter text-[#1A1D1E] sm:text-xl tablet:text-[24px] tablet:w-[728px] desktop:w-[639px] biglap:w-[1000px] mx-auto my-4 font-bold ">
              Very Important
            </h1>
          </section>
          {/* Some Text */}
          <p className="font-inter text-[#0C0C0C] text-[18px] mt-4 ">
            The IP address of your website might not always be sufficient to
            configure the IP limited key in a shared hosting environment. A
            pop-up notification will appear as a result, looking somewhat like
            this: <br />
            <span className="font-semibold">
              Geocoding failed because `This IP, site or mobile application is
              not authorized to use this API Key. Request received from IP
              address *.*.*.* with empty referer.
            </span>
          </p>

          <p className="font-inter text-[#0C0C0C] text-[18px]">
            The *.*.*.* is your server’s IP address which needs to be set on the
            IP Restricted key. Go back to the Google Cloud Console and set this
            IP Address provided on the popup.
          </p>

          {/* 5th List */}
          <ul className="list-disc font-[500] font-inter text-[#0C0C0C] text-[16px] px-8 my-4">
            <li>
              Modifications should be made to all modules that require
              GOOGLE_MAPS_KEY or googleMapsAPIkey, and all modifications should
              be saved.
            </li>
            <li>
              It takes Google APIs 5 to 10 minutes to update your website.
            </li>
          </ul>
          {/* End 5th List */}

          {/* 4th section Important Links */}
          <section ref={(el) => (sectionRefs.current[3] = el)}>
            <h1 className="font-inter text-[#1A1D1E] sm:text-xl tablet:text-[24px] tablet:w-[728px] desktop:w-[639px] biglap:w-[1000px] mx-auto my-4 font-bold ">
              Important Links
            </h1>
          </section>

          {/* 6th List */}
          <ul className="list-disc font-[500] font-inter text-[#0C0C0C] text-[16px] px-8 my-4">
            <li>
              {" "}
              <a
                href="https://console.cloud.google.com/welcome?inv=1&invt=Ab4rvA&project=high-acre-448407-c6"
                target="blank"
                className="text-green-600"
              >
                {" "}
                Google Cloud
              </a>{" "}
            </li>
            <li>
              {" "}
              <a
                href="https://mapsplatform.google.com/"
                target="blank"
                className="text-green-600"
              >
                {" "}
                Google Map Platform
              </a>{" "}
            </li>
            <li>
              {" "}
              <a
                href="https://www.ipvoid.com/find-website-ip/"
                target="blank"
                className="text-green-600"
              >
                {" "}
                Find Website IP
              </a>{" "}
            </li>
          </ul>
          {/* End 6th List */}
        </div>

        {/* 2nd box button */}
        <div className=" text-[14px] biglap:text-2xl hidden iox:flex iox:flex-col">
          <h1 className="font-inter font-semibold ">On this Page</h1>

          {/* 1st Button*/}
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
              Video Walkthrough
            </button>
          </div>
          {/* 1st button end */}

          {/* 2nd button End */}
          <div className="text-inter font-[500] ">
            <button
              onClick={() => {
                scrollToSection(1);
              }}
              className={
                activeTab === 1
                  ? `border-l-2 border-[#42858d] text-[#42858d] px-2 py-2 cursor-pointer text-left biglap:py-6`
                  : `border-l-2 border-[#dbdbdb] text-[#1A1D1E] px-2 py-2 cursor-pointer text-left biglap:py-6`
              }
            >
              Setup
            </button>
          </div>
          {/* 2nd button end */}

          {/* 3rd button */}
          <div className="text-inter font-[500] ">
            <button
              onClick={() => {
                scrollToSection(2);
              }}
              className={
                activeTab === 2
                  ? `border-l-2 border-[#42858d] text-[#42858d] px-2 py-2 cursor-pointer text-left biglap:py-6`
                  : `border-l-2 border-[#dbdbdb] text-[#1A1D1E] px-2 py-2 cursor-pointer text-left biglap:py-6`
              }
            >
              Very Important
            </button>
          </div>
          {/* 3rd button end */}

          {/* 4th button */}
          <div className="text-inter font-[500] ">
            <button
              onClick={() => {
                scrollToSection(3);
              }}
              className={
                activeTab === 3
                  ? `border-l-2 border-[#42858d] text-[#42858d] px-2 py-2 cursor-pointer text-left biglap:py-6`
                  : `border-l-2 border-[#dbdbdb] text-[#1A1D1E] px-2 py-2 cursor-pointer text-left biglap:py-6`
              }
            >
              Important Links
            </button>
          </div>
          {/* 4th button end */}
        </div>
      </div>
    </>
  );
}

export default Map;
