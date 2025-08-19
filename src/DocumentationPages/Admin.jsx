import { IoWarningSharp } from "react-icons/io5";

function Admin() {
  return (
    <>
      <div className="iox:mt-1 biglap:-space-y-56 iox:px-3 biglap:px-32 sm:h-[2405px] mymob:h-[2430px] myiphone:h-[2390px] tablet:h-[2730px] desktop:h-[2800px] iox:h-[2745px] biglap:h-[3540px] ">
        <div
          key="How to setup Backend API"
          className="text-left sm:pb-8 iox:pb-10 desktop:mt-1 iox:mt-0 sm:w-[286px] mymob:w-[335px] myiphone:w-[381px] tablet:w-[690px] desktop:w-[639px] iox:w-[700px] biglap:w-[1000px] border-b-2 border-gray-200 "
        >
          <p className="font-inter text-green-700 text-sm biglap:mx-0">
            Installation
          </p>

          <h1 className="sm:text-2xl Capitalize tablet:text-3xl font-bold text-[#1A1D1E] font-inter  my-4 biglap:mx-0">
            How to Setup Admin Dashboard
          </h1>

          <ul class="list-disc font-[500] my-2 font-inter text-[17px]  px-8  biglap:mx-0">
            <li>Clone or download source code from GitHub</li>

            <li>
              To download the Enatega Web Click here on
              <a
                href="https://github.com/enatega/food-delivery-multivendor"
                target="blank"
                className="text-green-600"
              >
                {" "}
                Download Enatega Multivendor
              </a>
              .
            </li>
          </ul>

          {/* 1th Section  Video */}
          <video
            src="/Video/WebMp4.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="sm:w-full tablet:w-[640px]  biglap:w-full  mx-auto h-auto rounded-sm mt-4"
          ></video>

          {/* Video End */}

          {/* 4th Section */}

          <div className="bg-[#F6F7F9] text-lg flex items-start gap-2 p-2 text-[#0C0C0C] font-inter iox:w-[700px]  biglap:w-full biglap:mx-auto">
            <IoWarningSharp className="text-yellow-400 w-6 h-[22px] flex-shrink-0" />
            <p>
              <span className="font-bold">Note:</span> Ensure you have Node.js
              installed on your computer to launch the module.
            </p>
          </div>
          {/* End 4th Section */}

          {/* 5th Section List */}
          <ul className="list-disc font-[500] my-2 font-inter text-[16px] px-8  text-[#0C0C0C] biglap:mx-0 ">
            <li>After installing Node.js:</li>

            {/* Subset ul  */}
            <ul className="list-decimal font-[500] my-2 font-inter text-[16px] tablet:px-0 text-[#0C0C0C] biglap:mx-0 ">
              <li>Open the Enatega MultiVendor code in a code editor.</li>

              <li>
                To run the enatega-multivendor-admin, open it in the integrated
                terminal by:
              </li>
              <ul className="list-disc font-[500] my-2 font-inter text-[16px] tablet:px-8 text-[#0C0C0C] biglap:mx-0 ">
                <li>
                  Right-clicking on the enatega-multivendor-web folder and
                  selecting “Open in Integrated Terminal”
                </li>
                <li>Or by using the following command in the terminal:</li>
              </ul>
              {/* end subset ul list */}
            </ul>
            {/* end sunset ul */}
          </ul>
          {/* Parent ul list end */}

          {/* 6th Section */}

          <div className="bg-[#F6F7F9] text-base flex items-start gap-2 text-[#1A1E1A]  font-mono my-4 iox:w-[700px]  biglap:w-full  biglap:mx-auto">
            <p className="py-2 px-[6px] tablet:px-6 iox:px-8">{`cd <Project directory>`}</p>
          </div>
          <p className="font-inter text-[#0C0C0C] text-base font-[500]  biglap:mx-0">
            For example:
          </p>

          <div className="bg-[#F6F7F9] text-base flex items-start gap-2 text-[#1A1E1A]  font-mono my-4 iox:w-[700px]  biglap:w-full  biglap:mx-auto">
            <p className="py-2 sm:px-[6px] tablet:px-6 iox:px-8 ">{`  cd enatega-multivendor-admin`}</p>
          </div>
          {/* End 6th Section */}

          {/* 5th Section Video */}
          <video
            src="/Video/WebMp4.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="sm:w-full tablet:w-[640px]  biglap:w-full  mx-auto h-auto rounded-sm my-4"
          ></video>
          {/* End 5th Section */}

          {/* 6th Section List */}
          <ul className="list-disc font-[500] my-2 font-inter text-[16px] sm:px-8 iox:px-16 text-[#0C0C0C] biglap:mx-0 ">
            <li>
              To test the Web(you don’t have own server url) and check the look
              and feel, no changes are needed.
            </li>
            <li>To run the Web against your own server URL:</li>
            {/* Subset ul  */}
            <ul className="list-disc font-[500] my-2 font-inter text-[16px] tablet:px-8 text-[#0C0C0C] biglap:mx-0 ">
              <li>Go to the src folder.</li>

              <li>Inside the src folder, go to the config folder.</li>
              <li>In the config folder, open constants.js.</li>
              <li>Replace the following in constants.js:</li>

              <ul className="list-disc font-[500] my-2 font-inter text-[16px] tablet:px-8 text-[#0C0C0C] biglap:mx-0 ">
                <li>SERVER_URL</li>
                <li>WS_SERVER_URL</li>
                <li>GOOGLE_MAPS_KEY</li>
              </ul>
              {/* end subset ul list */}
            </ul>
            {/* end sunset ul */}
          </ul>
          {/* Parent ul list end */}

          {/* 7th Section Video */}
          <video
            src="/Video/WebMp4.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="sm:w-full tablet:w-[640px]  biglap:w-full  mx-auto h-auto rounded-sm my-4"
          ></video>

          {/* 6th Section List */}
          <ul className="list-disc font-[500] my-2 font-inter text-[16px] sm:px-8 tablet:px-16 text-[#0C0C0C]  biglap:w-full ">
            <li>
              After completing all the configurations, it’s time to run the
              Enatega Web.
            </li>
            <li>
              To run the Enatega Web, open the terminal and run the following
              commands:
            </li>
          </ul>
          {/* End 7th Section */}

          {/* Section 8 */}
          <div className="bg-[#F6F7F9] text-base flex items-start gap-2 text-[#1A1E1A]  font-mono my-4 iox:w-[700px]  biglap:w-full ">
            <p className="py-2 sm:px-[6px] tablet:px-6 iox:px-8 ">{`npm install (or yarn install)`}</p>
          </div>
          <div className="bg-[#F6F7F9] text-base flex items-start gap-2 text-[#1A1E1A]  font-mono my-4 iox:w-[700px]  biglap:w-full ">
            <p className="py-2 sm:px-[6px] tablet:px-6 iox:px-8 ">{` npm start`}</p>
          </div>
          {/* End Section 8 */}

          {/* 9th Section Video */}
          <video
            src="/Video/WebMp4.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="sm:w-full tablet:w-[640px] biglap:w-full mx-auto h-auto rounded-sm my-4"
          ></video>
          {/* End 9th Video */}
        </div>
        {/* end content div */}
      </div>
    </>
  );
}

export default Admin;
