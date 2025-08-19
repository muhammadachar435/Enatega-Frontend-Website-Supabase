import { IoWarningSharp } from "react-icons/io5";
import { IoIosInformationCircleOutline, IoMdSettings } from "react-icons/io";

function BackendAPi() {
  return (
    <>
      <div className="iox:mt-1 biglap:-space-y-56 sm:h-[8400px] mymob:h-[7850px] myiphone:h-[8050px] tablet:h-[8080px] desktop:h-[8290px] iox:h-[8530px] biglap:h-[9050px] ">
        <div
          key="How to setup Backend API"
          className="text-left sm:pb-8  desktop:mt-1 sm:w-[286px] mymob:w-[335px] myiphone:w-[381px] tablet:w-[690px] desktop:w-[639px] iox:w-[800px] biglap:w-[1000px] border-b-2 border-gray-200 "
        >
          <p className="font-inter text-green-700 text-sm biglap:mx-0">
            Installation
          </p>

          <h1 className="sm:text-2xl Capitalize tablet:text-3xl font-bold text-[#1A1D1E] font-inter  my-4 biglap:mx-0">
            How to Setup Backend API
          </h1>

          {/* 2nd Prerequisite knowledge for running the app: */}
          <h1 className="font-inter text-[#4A4A50] text-[16px] my-4 font-bold biglap:mx-0">
            Prerequisite knowledge for running the app:
          </h1>

          <ul class="list-disc font-[500] my-2 font-inter text-[17px]  px-8  biglap:mx-0">
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
          {/* End Prerequisite knowledge for running the app: */}

          {/* 3rd Section Pre-Installed Software */}

          <h1 className="text-[16px] capitalize font-bold text-[#4A4A50] font-inter my-4 biglap:mx-0">
            Pre-Installed Software
          </h1>
          <ul class="list-disc font-[500] my-2 font-inter text-[16px] px-8 text-[#0C0C0C] biglap:mx-0 ">
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
          {/* End Pre-Installed Software */}

          {/* 4th Section Backend Api */}
          <h1 className="text-[16px] capitalize font-bold text-[#4A4A50] font-inter my-4 biglap:mx-0">
            Backend API:
          </h1>

          <p className="font-inter text-[#0C0C0C] text-[18px]  biglap:mx-0">
            Access to the backend and API requires a license that must be
            purchased. Please get in touch with us using the methods listed
            below for more information:
          </p>

          <ul class="list-disc font-[500] my-2 font-inter text-[16px] px-8  text-[#0C0C0C] biglap:mx-0">
            <li className="">
              <span className="flex items-center space-x-[2px]">
                <span className="flex items-center ">
                  {" "}
                  Email:{" "}
                  <span className="text-gray-500 pl-1">
                    <img src="/Pictures/gmail.png" alt="" className="w-4 h-4" />
                  </span>{" "}
                </span>
                <span>
                  <a
                    href="mailto:sales@enatega.com"
                    target="blank"
                    className="text-green-600 flex items-center"
                  >
                    sales@enatega.com
                  </a>
                </span>
              </span>
            </li>

            <li>
              <span className="flex items-center space-x-1">
                <span>To buy Backend Visit </span>
                {/* if used window.scrollto because navbar fixed so it hide some top place that can not seen so it apply window.scrollto({....}) */}
                <button
                  onClick={() => {
                    navigate("/");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="text-green-600 flex items-center cursor-pointer"
                >
                  Enatega
                </button>
              </span>
            </li>
          </ul>
          {/* End 4th Section */}

          {/* 5th Section Video */}
          <video
            src="/Video/ApiSetup.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="sm:w-full tablet:w-[600px] mx-auto h-auto rounded-sm my-4"
          ></video>
          {/* End 5th Section */}

          {/* 6th Section Steps */}

          <h1 className="text-[16px] capitalize font-bold text-[#4A4A50] font-inter my-4 biglap:mx-0">
            Setup Instructions:
          </h1>
          <ul className="list-disc font-[500] my-2 font-inter text-[16px] px-8 text-[#0C0C0C] biglap:mx-0 ">
            <li>
              <span className="font-semibold">Step 1:</span> Make sure node.js
              is installed on your machine
            </li>
            <li>
              <span className="font-semibold">Step 2:</span> Open the backend
              API code in the code editor.
            </li>
            <li>
              <span className="font-semibold">Step 3:</span> Follow the setup
              instructions provided in the video.
            </li>
          </ul>
          {/* 6th Section Steps */}

          {/* 7th Section */}

          <div className="bg-[#F6F7F9] text-lg flex items-start gap-2 p-2 text-[#0C0C0C] font-inter my-4">
            <IoWarningSharp className="text-yellow-400 w-6 h-[22px] flex-shrink-0" />
            <p>
              <span className="font-bold">Note:</span> If you do not find a{" "}
              <code>.env</code> file, create one in the root directory and paste
              the following contents into the .env file.
            </p>
          </div>
          {/* End 7th Section */}

          {/* 8th Section  Video */}
          <div className="relative w-full my-4">
            <iframe
              loading="lazy"
              className="w-full sm:h-[300px]  myiphone:h-[350px] tablet:h-[360px] desktop:h-[420px] biglap:w-[1000px] biglap:h-[460px] h-full max-h-[950px]  rounded-sm"
              src="https://www.youtube.com/embed/LMHG0T5a7l8?si=iCd7QC5UAyEWmJ5q"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
          <p className="my-4 text-gray-500 text-center  ">
            Enatega Multivendor Delivery Tutorial | End-to-End Setup
          </p>
          {/* End 8th Section */}

          {/* 9th Section  Video */}
          <div className="relative w-full my-4">
            <iframe
              loading="lazy"
              className="w-full sm:h-[300px]  myiphone:h-[350px] tablet:h-[360px] desktop:h-[420px] biglap:w-[1000px] biglap:h-[460px] h-full max-h-[950px]  rounded-sm"
              src="https://www.youtube.com/embed/QdMiy9Faeu0?si=x_KHjb2BLkSufNEI"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
          <p className="my-4 text-gray-500 text-center ">
            Enatega Multivendor | MongoDB Setup
          </p>
          {/* End 9th Section */}

          {/* 10th Section  Video */}

          <div className="relative w-full my-4">
            <iframe
              loading="lazy"
              className="w-full sm:h-[300px]  myiphone:h-[350px] tablet:h-[360px] desktop:h-[420px] biglap:w-[1000px] biglap:h-[460px] h-full max-h-[950px]  rounded-sm"
              src="https://www.youtube.com/embed/IpOOhgECBv4?si=WqVt1m8QOQIczUt2"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
          <p className="my-4 text-gray-500 text-center">
            Enatega Multivendor | Firebase Setup
          </p>
          {/* End 10th Section */}

          {/* 11th Section  Video */}
          <div className="relative w-full my-4">
            <iframe
              loading="lazy"
              className="w-full sm:h-[300px]  myiphone:h-[350px] tablet:h-[360px] desktop:h-[420px] biglap:w-[1000px] biglap:h-[460px] h-full max-h-[950px]  rounded-sm"
              src="https://www.youtube.com/embed/qvE2hmxduK8?si=zAw_XXCGXvUZPA95"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
          <p className="my-4 text-gray-500 text-center ">
            Enatega Multivendor | Firebase Setup
          </p>
          {/* End 11th Section */}

          {/* 12th Section  Video */}
          <div className="relative w-full my-4">
            <iframe
              loading="lazy"
              className="w-full sm:h-[300px]  myiphone:h-[350px] tablet:h-[360px] desktop:h-[420px] biglap:w-[1000px] biglap:h-[460px] h-full max-h-[950px] rounded-sm"
              src="https://www.youtube.com/embed/noP6u7Cq1g4?si=xMgHPjS3bybdszVM"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
          <p className="my-4 text-gray-500 text-center">
            Enatega Multivendor | Firebase Setup
          </p>
          {/* End 12th Section */}

          {/* 13th Section */}

          <h1 className="text-[16px] capitalize font-bold text-[#1A1D1E] font-inter my-4 biglap:mx-0">
            Step 2: Environment Variables
          </h1>

          <p className="font-inter text-[#0C0C0C] text-[18px] biglap:mx-0">
            After setting up Docker, you’ll need to configure the environment
            variables. Follow these steps to modify or create the .env file with
            your credentials:
          </p>
          {/* Danger Icon & content */}
          <div className="bg-[#F6F7F9] text-lg flex items-start gap-2 p-2 text-[#0C0C0C] font-inter biglap:mx-0 mt-4">
            <IoWarningSharp className="text-yellow-400 w-6 h-[22px] flex-shrink-0" />
            <p>
              <span className="font-bold">Note:</span> If you do not find a{" "}
              <code>.env</code> file, create one in the root directory and paste
              the following contents into the .env file.
            </p>
          </div>
          {/* Content of env file */}
          <h1 className="text-[14px] capitalize font-bold text-[#1A1D1E] font-inter my-4 biglap:mx-0">
            Contents of .env File
          </h1>

          <ul className="list-disc font-[500] my-2 font-inter text-[16px] px-8 mymob:w-[360px] myiphone:w-[400px]  tablet:w-[728px] desktop:w-[639px] iox:w-full iox:max-w-[690px] biglap:w-[1000px] mx-auto text-[#0C0C0C] biglap:mx-0 ">
            <li>PORT=8001</li>
            <li>CONNECTION_STRING=</li>
            <li className="sm:flex mymob:hidden">
              RESET_PASSWORD_LINK=auth
              <br />
              /reset/?reset=
            </li>
            <li className="sm:hidden mymob:flex">
              RESET_PASSWORD_LINK=auth/reset/?reset=
            </li>
            <li>SERVER_URL=https://enatega-multivendor.up.railway.app/</li>
            <li className="sm:flex mymob:hidden">
              STRIPE_WEBHOOK_ENDPOINT
              <br /> _SECRET=
            </li>
            <li className="sm:hidden mymob:flex">
              STRIPE_WEBHOOK_ENDPOINT_SECRET=
            </li>
            <li className="sm:flex mymob:hidden">
              DASHBOARD_URL=https://
              <br />
              practical -minsky-95a652.netlify.app/#/
            </li>
            <li className="hidden mymob:flex">
              DASHBOARD_URL=https://practical -minsky-95a652.netlify.app/#/
            </li>
            <li>WEB_URL=https://pensive-liskov-5320d4.netlify.app/</li>
            <li>ORDER_DETAIL_WEB_URL=order-detail</li>
            <li>NODE_DEV=production</li>
            <li>NODE_ENV=production</li>
            <li>SENDGRID_API_KEY=</li>
          </ul>
          {/* End 13th Section */}

          {/* 14th Section Video */}
          <video
            src="/Video/Apisetup2.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="sm:w-full tablet:w-[600px] mx-auto h-autorounded-sm"
          ></video>

          <div className="bg-[#F6F7F9] text-lg flex items-start gap-2 p-2 text-[#0C0C0C] font-inter biglap:my-10">
            <IoIosInformationCircleOutline className=" w-6 h-6 mt-[1px] flex-shrink-0" />
            <p>
              <span className="font-bold">
                Environment Variables Explanation:
              </span>{" "}
              Make sure to understand the purpose of each environment variable
              before modifying them.
            </p>
          </div>
          {/* End 14th Section */}
          {/* Section 15 Images */}
          <img
            src="/Pictures/apisetupimg1.jpg"
            alt=""
            className=" mt-4 w-full h-auto biglap:mx-0 "
          />
          <img
            src="/Pictures/apisetupimg2.jpg"
            alt=""
            className="w-full h-auto biglap:mx-0 "
          />
          {/* End Section 15 Images */}
          {/* Section 16 */}
          <h1 className="text-[16px] capitalize font-bold text-[#4A4A50] font-inter my-4 biglap:mx-0">
            Understanding the .env File
          </h1>
          <ul className="list-disc font-[500] my-2 font-inter text-[16px] px-8  text-[#0C0C0C] biglap:mx-0 ">
            <li>
              <span className="font-semibold">Variable:</span> Make sure node.js
              is Name of the variable
            </li>
            <li>
              <span className="font-semibold">Purpose:</span> Open the backend
              API Description of the variable’s purpose
            </li>
            <li>
              <span className="font-semibold">Creation:</span> Follow the setup
              Steps to create the variable
            </li>
          </ul>

          <div className="bg-[#F6F7F9] text-lg flex items-start gap-2 p-2 text-[#0C0C0C] font-inter biglap:mx-0 ">
            <IoIosInformationCircleOutline className=" w-6 h-6 mt-[1px] flex-shrink-0" />
            <p className="font-bold">Environment Variables</p>
          </div>

          <ul className="list-disc font-[500] my-2 font-inter text-[16px] px-8  text-[#0C0C0C] biglap:mx-0 ">
            <li>
              <span className="font-bold uppercase">PORT:</span> The port number
              on which the server will run.
            </li>
            <li>
              <span className="font-bold uppercase">CONNECTION_STRING:</span>{" "}
              This variable contains the connection string for your MongoDB
              database. It includes the username and password needed to connect
              to the database, as well as the cluster URL and some connection
              options.
            </li>
            <li>
              <span className="font-bold uppercase">RESET_PASSWORD_LINK:</span>{" "}
              Link for resetting passwords.
            </li>
            <li>
              <span className="font-bold uppercase">SERVER_URL:</span> This
              variable specifies the base URL of your server. It’s the root URL
              where your backend API is hosted.
            </li>
            <li>
              <span className="font-bold uppercase sm:flex tablet:hidden">
                STRIPE_WEBHOOK_ENDPOINT
                <br />
                _SECRET:
              </span>
              This variable is used for Stripe webhook verification. It’s a
              secret key that Stripe uses to sign webhook events, ensuring their
              authenticity.
            </li>
            <li>
              <span className="font-bold uppercase sm:hidden tablet:flex">
                STRIPE_WEBHOOK_ENDPOINT_SECRET:
              </span>
              This variable is used for Stripe webhook verification. It’s a
              secret key that Stripe uses to sign webhook events, ensuring their
              authenticity.
            </li>
            <li>
              <span className="font-bold uppercase">DASHBOARD_URL: </span> URL
              for the dashboard.
            </li>
            <li>
              <span className="font-bold uppercase">WEB_URL:</span>URL for the
              web application.
            </li>

            <li className="font-bold mb-4">Deployment Steps for Netlify:</li>

            {/* Subset ul  */}
            <ul className="list-disc font-[500] my-2 font-inter text-[16px] tablet:px-8 text-[#0C0C0C] biglap:mx-0 ">
              <li>Connect your code repository to your Netlify account.</li>

              <li>
                Specify the build settings and configurations for your dashboard
                and web app.
              </li>

              <li>Set custom domains or subdomains for your applications.</li>
            </ul>
            {/* Deployment Steps for Netlify: */}

            <li className="font-bold mb-4">Deployment Steps for Vercel:</li>

            {/* subset ul */}
            <ul className="list-disc font-[500] my-2 font-inter text-[16px] tablet:px-8 text-[#0C0C0C] biglap:mx-0 ">
              <li>Connect your code repository and configure your settings.</li>

              <li>Set up custom domains for your dashboard and web app.</li>
            </ul>
            {/* end <ul> Deployment Steps for Netlify: */}

            <li>
              <span className="font-bold uppercase">
                ORDER_DETAIL_WEB_URL:{" "}
              </span>{" "}
              This variable might be a partial URL used to construct links to
              specific order details in your application.
            </li>

            <li>
              <span className="font-bold uppercase">NODE_DEV:</span> Node
              development environment.
            </li>

            <li>
              <span className="font-bold uppercase">NODE_ENV:</span> Node
              environment.
            </li>

            <li>
              <span className="font-bold uppercase">SENDGRID_API_KEY: </span>{" "}
              Please enter your SendGrid API key if you intend to use SendGrid
              for sending emails; otherwise, leave this field empty.
            </li>
          </ul>
          {/* 2nd ul Step 2 end */}

          {/* 3rd ul Step 3 */}
          <h1 className="text-[16px] capitalize font-bold text-[#1A1D1E] font-inter my-4 biglap:mx-0">
            Step 3: Adding serviceAccountKey.json
          </h1>
          <p className="font-inter text-[#0C0C0C] text-[18px] biglap:mx-0">
            Lastly, you need to add your own serviceAccountKey.json. This file
            is typically used for Firebase Admin SDK.
          </p>
          <p className="font-inter my-4 text-[#0C0C0C] text-[18px] biglap:mx-0">
            Follow these steps to obtain and add the file:
          </p>

          <ul className="list-decimal font-[500] my-2 font-inter text-[16px] px-8 text-[#0C0C0C] biglap:mx-0 ">
            <li>
              Go to the
              <a
                href="https://console.firebase.google.com/u/0/?pli=1"
                className="text-green-600"
              >
                {" "}
                Firebase Console.
              </a>
            </li>
            <li>Select your project.</li>
            <li>{`Navigate to Project Settings > Service accounts.`} </li>
            <li>
              Click on “Generate new private key” to download the JSON file.
            </li>
            <li>
              Replace the downloaded serviceAccountKey.json file in the project
              directory.
            </li>
          </ul>
          {/* End ul Step 3 */}
          {/* End Section 16 */}

          {/* Start Section 17 by used Video and image */}
          <video
            src="/Video/firebase.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full tablet:w-[700px] mx-auto h-auto rounded-sm"
          ></video>

          <img
            src="/Pictures/setupapi3.jpg"
            alt=""
            className="w-full tablet:w-[700px] mx-auto  h-auto "
          />

          {/* end Section 17 by used Video and image */}

          {/* Section 18 */}
          <h1 className="text-[16px] capitalize font-bold text-[#1A1D1E] font-inter my-4 biglap:mx-0">
            Running the Backend:
          </h1>

          <p className="font-inter text-[#0C0C0C] text-[18px] biglap:mx-0">
            After completing the setup steps, you can start using your backend
            API.
          </p>
          {/* Danger Icon & content */}
          <div className="bg-[#F6F7F9] text-lg flex items-start gap-2 p-2 text-[#0C0C0C] font-inter biglap:mx-0 mt-4">
            <IoMdSettings className="w-6 h-6 mt-[1px] text-gray-400 flex-shrink-0" />
            <p>
              <span className="font-bold">Tip: </span>Simply run Docker and your
              API will be up and running, ready to serve your application.
            </p>
          </div>

          <p className="font-inter my-4 text-[#0C0C0C] text-[18px] biglap:mx-0">
            To build and start the Docker containers, run the following command:
          </p>

          <ul className="list-disc font-[500] my-2 font-inter text-[16px] px-8 text-[#0C0C0C] biglap:mx-0 ">
            <li>
              Use{" "}
              <span className="bg-[#c4c5c8] p-1 font-lato">
                {" "}
                docker compose up --build
              </span>
            </li>
          </ul>
          {/* End Section 18 */}
          {/* Last Section 19  */}
          <video
            src="/Video/serverApi4.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="my-4 w-full tablet:w-[700px] mx-auto h-auto rounded-sm"
          ></video>
          {/* End Last Section 19 */}
        </div>
      </div>
    </>
  );
}

export default BackendAPi;
