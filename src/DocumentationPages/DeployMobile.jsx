import { useState, useRef } from "react";

function DeployMobile() {
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
      <div className="flex iox:space-x-16 iox:px-3 iox:mt-1 biglap:-space-y-56  sm:h-[10340px] mymob:h-[9480px] myiphone:h-[8930px] tablet:h-[7810px] desktop:h-[7900px]  biglap:h-[8650px] ">
        <div
          key="How to setup Backend API"
          className="text-left desktop:mt-1 iox:mt-0 biglap:mx-44 sm:w-[286px] mymob:w-[335px] myiphone:w-[381px] tablet:w-[690px] desktop:w-[639px] biglap:w-[1000px]  border-b-2 border-gray-200 "
        >
          <p className="font-inter text-green-700 text-sm biglap:mx-0">
            Installation
          </p>

          {/* Heading */}
          <h1 className="sm:text-2xl Capitalize tablet:text-3xl font-bold text-[#1A1D1E] font-inter  my-4 biglap:mx-0">
            How to deploy Mobile Applications
          </h1>

          {/* Youtube Video */}
          <div className="relative my-4">
            <iframe
              loading="lazy"
              className="sm:w-[285px] sm:h-[300px] mymob:w-[335px] myiphone:w-[381px] myiphone:h-[350px] tablet:w-[690px] desktop:w-[635px]  tablet:h-[360px] biglap:w-[1000px] biglap:h-[460px] h-full max-h-[950px]"
              src="https://www.youtube.com/embed/IhC2KI_x85g?start=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>

          {/* Video bottom Write text */}
          <p className="my-6 sm:w-[280px] mymob:w-[300px] mx-auto text-gray-500 text-center tablet:w-[700px] desktop:w-[639px] biglap:w-[1000px] ">
            Enatega Multivendor | Mobile Apps Complete Setup
          </p>

          <p className="font-inter text-[#0C0C0C] text-[18px]  biglap:mx-0">
            Clone or download the source code from GitHub. To download click on
            <br />
            <a
              href="https://github.com/enatega/food-delivery-multivendor"
              target="blank"
              className="text-green-600 text-base"
            >
              download source code
            </a>
          </p>

          {/* List */}
          <ul class="list-disc font-[500] my-2 font-inter text-[16px] sm:px-4 tablet:px-8  text-[#0C0C0C] biglap:mx-0">
            <li className="">
              {`cd <Project directory> e.g cd enatega-multivendor-admin`}
            </li>
          </ul>

          {/* Text Using <p> */}
          <p className="font-inter text-[#0C0C0C] text-[18px]  biglap:mx-0">
            Update environment file (/environment.js files). Following are the
            credentials you need to change.
          </p>

          <p className="font-inter text-[#0C0C0C] text-[18px]  biglap:mx-0">
            Essentially, you are required to update ‘value#1’, ‘value#2’ and
            ‘value#3’, while the remaining values will be automatically
            retrieved from the configuration (database) once added through the
            admin panel. In the case that these values are not obtained from the
            configuration, kindly hardcode them in the ‘environment.js’ file.
          </p>
          {/* End ul and Text*/}

          {/* Images */}
          <img
            src="/Pictures/MobileApp.jpg"
            className="w-full h-auto mt-4"
          ></img>

          <img src="/Pictures/MobileApp2.jpg" className="w-full  h-auto "></img>
          {/* End images */}

          <p className="font-inter text-[#0C0C0C] text-[18px]  biglap:mx-0">
            Here are the variables in the environment.js file for the Mobile
            App, along with a brief explanation of each and their purposes:
          </p>

          {/* 2nd List */}
          <ul className="list-decimal font-[500] my-2 font-inter text-[16px]  text-[#0C0C0C] biglap:mx-0 ">
            <li>
              <span className="font-bold uppercase">GRAPHQL_URL:</span> This
              variable contains the URL of the GraphQL endpoint for your API. It
              is essential for making GraphQL queries and mutations from your
              mobile app. GraphQL is a query language for APIs that allows
              clients to request precisely the data they need, and this URL is
              where your app communicates to retrieve and manipulate data from
              your GraphQL API.
            </li>
            <li>
              <span className="font-bold uppercase">WS_GRAPHQL_URL:</span>{" "}
              WS_GRAPHQL_URL specifies the WebSocket URL for the GraphQL API.
              WebSockets are used for real-time communication, making them
              suitable for applications that require live updates, such as chat
              applications, notifications, or dynamic content delivery.
            </li>
            <li>
              <span className="font-bold uppercase">SERVER_URL:</span> This
              variable specifies the base URL of your server. It’s the root URL
              where your backend API is hosted. <br />
              <span className="font-bold ">So What is an API?</span>
              An API (Application Programming Interface) is a set of rules and
              protocols that allows different software applications to
              communicate with each other. A backend API is responsible for
              handling data and requests on the server-side of a software
              application.
              <p className="font-inter text-[#0C0C0C] text-[18px] biglap:mx-0">
                The Backend code of this project is the API for this project.
              </p>
              <p className="font-inter text-[#0C0C0C] text-[18px] biglap:mx-0">
                To make your API accessible to the internet, you need a hosting
                service. A hosting service provides the infrastructure and
                resources to run your server, making it available 24/7. Hosting
                services can be cloud platforms (like Heroku, AWS or Digital
                Ocean) or specialized services like Railway Cloud.
              </p>
              <p className="font-inter text-[#0C0C0C] text-[18px] biglap:mx-0">
                <span className="font-bold ">
                  How to Deploy to Backend API?
                </span>{" "}
                Deploying means making your API server available and functional
                on the hosting service. This typically involves uploading your
                code, configuring the server, and ensuring it’s up and running.
                <span className="font-bold ">
                  Here is how you can Deploy your APi server and get the
                  SERVER_URL for adding in .env file.
                </span>{" "}
                <br />
                <a
                  href="https://www.youtube.com/watch?v=R4yVypBhfHw&feature=youtu.be"
                  target="blank"
                  className="text-green-600 text-base"
                >
                  Railway Cloud deployment Video
                </a>
                .
              </p>
            </li>
            <li>
              <span className="font-bold uppercase">IOS_CLIENT_ID_GOOGLE:</span>{" "}
              This is a Google OAuth client ID specifically intended for iOS
              applications. It is used for authenticating users and granting
              access to Google services within iOS-based applications.
            </li>
            <li>
              <span className="font-bold uppercase">
                {" "}
                ANDROID_CLIENT_ID_GOOGLE:{" "}
              </span>{" "}
              This is a Google OAuth client ID designed for Android
              applications. It serves the same purpose as the iOS client ID but
              is intended for Android-based applications. Both client IDs are
              used for authentication and access to Google services within their
              respective platforms. They allow applications to securely and
              efficiently connect with Google services and authenticate users
              using Google’s OAuth (Open Authorization) framework. <br />
              <span className="font-bold">
                Here’s how you can create IOS and Android Google Client ID
              </span>{" "}
              <br />
              <a
                href="https://www.youtube.com/watch?v=DBNJiXybqqc"
                target="blank"
                className="text-green-600 text-[17px] font-bold"
              >
                Demonstration of IOS and Android Google Client ID Video
              </a>
            </li>
            <li>
              <span className="font-bold uppercase">AMPLITUDE_API_KEY:</span>{" "}
              This API key is essential for integrating Amplitude, an analytics
              and product intelligence service, into a React application. The
              API key identifies your app when communicating with Amplitude’s
              servers. By using this key, you can gather data, analyze user
              behavior, and make data-informed decisions to optimize your
              application’s performance and user experience. <br /> Amplitude
              helps businesses track and analyze user behavior, such as
              interactions and events within the app. It’s a critical tool for
              enhancing user satisfaction and app success. <br /> Read more
              about amplitude here. <br />
              Here’s how you can create an{" "}
              <span className="font-bold">
                Amplitude Api key for this project
                <br />
              </span>
              <a
                href="https://www.youtube.com/watch?v=mPcKhegUvi8"
                target="blank"
                className="text-green-600 text-[17px] font-bold"
              >
                Configuring Amplitude Video
              </a>
            </li>
            <li>
              <span className="font-bold uppercase">GOOGLE_MAPS_KEY:</span> The
              Google Maps API key is a crucial component for integrating Google
              Maps and related location and mapping services into the
              application. This key serves as a unique identifier, granting your
              application access to Google’s mapping and geolocation features.
              <br />
              <span className="font-bold">
                Here’s how you can create Google Maps key for this project
              </span>{" "}
              <br />
              <a
                href="https://www.youtube.com/watch?v=9x4gqnOFfao"
                target="blank"
                className="text-green-600 text-[17px] font-bold"
              >
                Demonstration of google map api setup Video
              </a>
              .
            </li>
            <li>
              <span className="font-bold uppercase">EXPO_CLIENT_ID:</span> This
              variable represents a Google OAuth client ID specifically intended
              for use within the Expo development environment. Expo is a
              platform for building and deploying mobile applications, and this
              client ID is used to enable Expo-based applications to
              authenticate users and gain access to Google services. <br />
              <span className="font-bold">
                Steps to Create an Expo Client ID:
              </span>
            </li>

            {/* Subset List <ul> */}
            <ul className="font-[500] my-2 font-inter text-[16px]  tablet:px-8 text-[#0C0C0C] biglap:mx-0 ">
              <span className="font-semibold">
                Create a Google Cloud Project:
              </span>
              <ul className="list-disc font-[500] my-2 font-inter text-[16px] sm:px-8 tablet:px-12 text-[#0C0C0C] biglap:mx-0">
                <li className="mymob:hidden">
                  <span className="flex mymob:hidden">
                    Visit the Google Cloud Console
                    (https://console.cloud.google.
                    <br />
                    com/).
                  </span>
                </li>
                <li className="">
                  Visit the Google Cloud Console
                  (https://console.cloud.google.com/).
                </li>
                <li>Create a new project if you don’t already have one.</li>
              </ul>

              {/* Enable the Google+ API: */}
              <span className="font-semibold">Enable the Google+ API:</span>
              <ul className="list-disc font-[500] my-2 font-inter text-[16px] sm:px-8 tablet:px-12 text-[#0C0C0C] biglap:mx-0">
                <li>
                  In your project, navigate to the “APIs & Services” section.
                </li>
                <li>Click on “Library” and search for “Google+ API.”</li>
                <li>Enable the API for use in your project.</li>
              </ul>

              {/* Create OAuth 2.0 Client ID: */}
              <span className="font-semibold">Create OAuth 2.0 Client ID:</span>
              <ul className="list-disc font-[500] my-2 font-inter text-[16px] sm:px-8 tablet:px-12 text-[#0C0C0C] biglap:mx-0">
                <li>
                  {` In the Google Cloud Console, go to “APIs & Services” > “Credentials.” `}
                </li>
                <li>
                  Click on “Create Credentials” and select “OAuth client ID.”
                </li>
                <li>Choose the “Web application” application type.</li>
                <li>
                  Configure the authorized redirect URIs, ensuring you specify
                  the appropriate URIs for your Expo-based application.
                </li>
                <li>Once created, you’ll be provided with a client ID.</li>
              </ul>

              {/* Set Up in Expo Project: */}
              <span className="font-semibold">Set Up in Expo Project:</span>
              <ul className="list-disc font-[500] my-2 font-inter text-[16px] sm:px-8 tablet:px-12 text-[#0C0C0C] biglap:mx-0">
                <li>
                  In your Expo project, you can set the EXPO_CLIENT_ID variable
                  in your configuration to the client ID obtained in the
                  previous step. This enables Expo to use the client ID for
                  Google OAuth authentication and access to Google services in
                  your app.
                </li>
              </ul>
            </ul>
            <li>
              <span className="font-bold uppercase">SENTRY_DSN:</span> This
              Sentry DSN is used for error tracking and monitoring. It reports
              and logs errors that occur in your mobile app. <br /> This
              variable contains the Data Source Name (DSN) that Sentry uses to
              report errors and exceptions from your application. <br /> Read
              more about Sentry{" "}
              <a
                href="https://sentry.io/welcome/"
                target="blank"
                className="text-green-600 text-base"
              >
                Here
              </a>
              <br />
              <span className="font-bold">
                Here is how you can configure sentry and create SENTRY_DSN_LINK
                for this project
              </span>{" "}
              <br />
              <a
                href="https://www.youtube.com/watch?v=l4iRIjQSgAY&ab_channel=NinjasCode"
                target="blank"
                className="text-green-600 text-base font-bold"
              >
                Configuring Sentry Video
              </a>
            </li>
            <li>
              <span className="font-bold uppercase">
                TERMS_AND_CONDITIONS :
              </span>{" "}
            </li>
            <li>
              <span className="font-bold uppercase">PRIVACY_POLICY: </span>It
              These are URLs(9 and 10) to your app’s terms and conditions and
              privacy policy pages. They are typically used for legal and
              compliance purposes.
            </li>
            <li></li>
            <li>
              <span className="font-bold uppercase">TEST_OTP: </span>It A test
              OTP (One-Time Password) that might be used during development and
              testing for authentication purposes.
            </li>
            <li>
              <span className="font-bold uppercase">
                {" "}
                GOOGLE_PACES_API_BASE_URL:
              </span>
              It This variable contains the base URL for the Google Places API,
              a service by Google used for location and places-related
              functions. It’s the starting point for making requests to access
              location-based data, such as details about businesses, geographic
              coordinates, and nearby places. Integrating this base URL is
              essential for applications that rely on Google’s location data and
              services. <br />
              <span className="font-bold font-inter">
                Here is how you can configure Google places Api and create
                APi_LINK for this project
              </span>{" "}
              <br />
              <a
                href="https://www.youtube.com/watch?v=9x4gqnOFfao"
                target="blank"
                className="text-green-600 text-base font-bold"
              >
                Configuring Google APIs Video
              </a>{" "}
              <br />
              <p>
                These variables are essential for configuring and customizing
                your mobile app, enabling integration with third-party services,
                and ensuring proper communication with your backend. Make sure
                to keep them secure and handle sensitive information, like API
                keys and authentication credentials, with care. After setting
                the (.env) file, run the following commands:
              </p>
              <ul className="list-disc font-[500] mt-2 px-8 font-inter text-[16px]  text-[#0C0C0C] biglap:mx-0 ">
                <li>npm install</li>
                <li>npm run build</li>
              </ul>
            </li>
            <h1 className="text-lg font-bold my-4 text-[#1A1D1E] font-inter biglap:mx-0">
              How to submit your Mobile Apps in the App and Play Store?
            </h1>

            {/* 1st section */}
            <section ref={(el) => (sectionRefs.current[0] = el)}>
              <h1 className="text-xl my-4 font-bold text-[#1A1D1E] font-inter biglap:mx-0">
                Creation of builds
              </h1>
            </section>

            <p className="font-inter text-[#0C0C0C] text-[16px] biglap:mx-0">
              To create the builds for both Android and IOS you need to enter
              the following commands in your terminal.
            </p>

            {/* List */}
            <ul className="list-disc font-[500] mt-2 px-8 font-inter text-[16px]  text-[#0C0C0C] biglap:mx-0 ">
              <li>npm install -g eas-cli</li>
            </ul>
            <p className="font-inter my-4 text-[#0C0C0C] text-[16px] biglap:mx-0">
              Create your Account in EXPO ( https://expo.dev/)
            </p>
            <p className="font-inter my-4 text-[#0C0C0C] text-[16px] biglap:mx-0">
              In your terminal type the following Command
            </p>
            <ul className="list-disc my-4 font-[500] mt-2 px-8 font-inter text-[16px]  text-[#0C0C0C] biglap:mx-0 ">
              <li>eas login (Login with your expo credentials)</li>
            </ul>
            <p className="font-inter my-4 text-[#0C0C0C] text-[16px] biglap:mx-0">
              Create new project in expo account as shown below:
            </p>
          </ul>

          {/* Images */}
          <img
            src="/Pictures/MobileApp3.jpg"
            className="w-full h-auto mt-4"
          ></img>

          <img src="/Pictures/MobileApp4.jpg" className="w-full  h-auto "></img>
          <img src="/Pictures/MobileApp5.jpg" className="w-full  h-auto "></img>
          {/* End images */}

          <p className="font-inter my-2 text-[#0C0C0C] text-[16px] biglap:mx-0">
            When a new project is created in Expo, an ID is assigned to that
            project
          </p>

          {/* Images */}
          <img src="/Pictures/MobileApp6.jpg" className="w-full  h-auto "></img>
          <img src="/Pictures/MobileApp7.jpg" className="w-full  h-auto "></img>
          {/* End Images */}

          {/* Text */}
          <p className="font-inter text-[#0C0C0C] text-[18px]  biglap:mx-0">
            After creating a new project in Expo and pasting its ID into
            app.json, your project is ready to be built. In your terminal, run
            the following commands:
          </p>

          {/* List */}

          <ul className="list-disc font-[500] my-2 font-inter text-[16px] px-8  text-[#0C0C0C] biglap:mx-0 ">
            <li>eas build:configure</li>
            <li>eas build –profile production –-platform android</li>
            <li>eas build –profile production –-platform ios</li>
            <li>eas submit –platform ios (to submit your app in App Store)</li>
            <li>
              eas submit –platform android (to submit your app in Play Store)
            </li>
          </ul>

          {/* 2nd section */}
          <section ref={(el) => (sectionRefs.current[1] = el)}>
            <h1 className="text-xl my-4 capitalize font-bold text-[#1A1D1E] font-inter biglap:mx-0">
              For OTA Updates
            </h1>
          </section>

          {/* List */}
          <ul className="list-disc font-[500] my-2 font-inter text-[16px] px-8  text-[#0C0C0C] biglap:mx-0 ">
            <li>npx expo install expo-updates</li>
            <li>eas update:configure</li>
            <li>eas update –branch production –message “Example update”</li>
          </ul>

          {/* 3rd section */}
          <section ref={(el) => (sectionRefs.current[2] = el)}>
            <h1 className="sm:text-xl tablet:text-2xl my-4 capitalize font-bold text-[#1A1D1E] font-inter biglap:mx-0">
              Enroll in the Apple’s Developer Program
            </h1>
          </section>

          <p className="font-inter text-[#0C0C0C] text-[18px]  biglap:mx-0">
            Once everything is finished and your app has been tested, you are
            ready to publish. You must first have the Apple developer program.
            If you don’t have then get the Apple developer program{" "}
            <a
              href="https://developer.apple.com/programs/"
              target="blank"
              className="text-green-600"
            >
              from here:
            </a>
          </p>

          {/* Images */}
          <img
            src="/Pictures/MobileApp8.jpg"
            className="w-full h-auto my-2 "
          ></img>
          {/* End Images */}

          {/*  Text & Links */}
          <p className="font-inter text-[#0C0C0C] text-[18px]  biglap:mx-0">
            Every app has a special Bundle identification to identify it, and
            this is also used as the app store URL. The bundle identification
            can be changed from within the app.json To see the publishing
            document for Apple in detail{" "}
            <a
              href="https://docs.expo.dev/distribution/uploading-apps"
              target="blank"
              className="text-green-600"
            >
              Click on this Link
            </a>
          </p>

          {/* 4th section */}
          <section ref={(el) => (sectionRefs.current[3] = el)}>
            <h1 className="sm:text-xl tablet:text-2xl my-4 capitalize font-bold text-[#1A1D1E] font-inter biglap:mx-0">
              Enroll in the Google’s Developer Program
            </h1>
          </section>

          {/*  Text & Links */}
          <p className="font-inter text-[#0C0C0C] text-[18px]  biglap:mx-0">
            Once everything is finished and your app has been tested, you are
            ready to publish. You must first have a Google developer account.{" "}
            <br />
            <span>If you don’t have then get a Google developer account</span>
            <a
              href="https://developer.apple.com/programs/"
              target="blank"
              className="text-green-600"
            >
              {" "}
              from here:
            </a>
            <br />
            To see the publishing document for Apple in detail
            <a
              href="https://docs.expo.dev/distribution/uploading-apps"
              target="blank"
              className="text-green-600"
            >
              {" "}
              see this link
            </a>
          </p>

          {/* 5th section */}
          <section ref={(el) => (sectionRefs.current[4] = el)}>
            <h1 className="sm:text-xl tablet:text-2xl my-4 capitalize font-bold text-[#1A1D1E] font-inter biglap:mx-0">
              Buy hosting service and domain name
            </h1>
          </section>

          {/*  Text & Links */}
          <p className="font-inter text-[#0C0C0C] text-[18px]  biglap:mx-0">
            You can get a domain name for any domain name service for example
            <a
              href="https://www.godaddy.com/en-ph"
              target="blank"
              className="text-green-600"
            >
              {" "}
              Go Daddy
            </a>
            <br />
            You will need a hosting service to deploy your API you can use any
            hosting service for example
            <a
              href="https://www.digitalocean.com/"
              target="blank"
              className="text-green-600"
            >
              {" "}
              Digital Ocean
            </a>{" "}
            <br />
            You can host your website admin das
          </p>
          {/* End List */}
        </div>
        {/* End Center COntent */}

        {/* 2nd Content button */}
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
              Creation of builds
            </button>
          </div>
          {/* 1st button end */}

          {/* 2nd Button */}
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
              For OTA Updates
            </button>
          </div>
          {/* 2nd button  end*/}

          {/* 3rd Button */}
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
              Enroll in the Apple’s Developer Program
            </button>
          </div>
          {/* 3rd button  end*/}

          {/* 4th Button */}
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
              Enroll in the Google’s Developer Program
            </button>
          </div>
          {/* 4th button  end*/}

          {/* 5th Button */}
          <div className="text-inter font-[500] ">
            <button
              onClick={() => {
                scrollToSection(4);
              }}
              className={
                activeTab === 4
                  ? `border-l-2 border-[#42858d] text-[#42858d] px-2 py-2 cursor-pointer text-left biglap:py-6`
                  : `border-l-2 border-[#dbdbdb] text-[#1A1D1E] px-2 py-2 cursor-pointer text-left biglap:py-6`
              }
            >
              Buy hosting service and domain name
            </button>
          </div>
          {/* 5th button  end*/}
        </div>
        {/* End Button */}
      </div>
    </>
  );
}

export default DeployMobile;
