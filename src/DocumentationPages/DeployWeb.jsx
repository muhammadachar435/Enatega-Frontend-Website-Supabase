function DeployWeb() {
  return (
    <>
      <div className="flex iox:space-x-16 iox:px-3 iox:mt-1 biglap:-space-y-56  sm:h-[8300px] mymob:h-[7250px] myiphone:h-[6520px] tablet:h-[4580px] desktop:h-[4850px]  biglap:h-[4500px] ">
        <div
          key="How to setup Backend API"
          className="text-left desktop:mt-1 iox:mt-0 biglap:mx-44 sm:w-[286px] mymob:w-[335px] myiphone:w-[381px] tablet:w-[690px] desktop:w-[639px] biglap:w-[1000px]  border-b-2 border-gray-200 "
        >
          <p className="font-inter text-green-700 text-sm biglap:mx-0">
            Installation
          </p>

          <h1 className="sm:text-2xl Capitalize tablet:text-3xl font-bold text-[#1A1D1E] font-inter  my-4 biglap:mx-0">
            How to deploy Web Dashboard
          </h1>

          <div className="relative my-4">
            <iframe
              loading="lazy"
              className="sm:w-[285px] sm:h-[300px] mymob:w-[335px] myiphone:w-[381px] myiphone:h-[350px] tablet:w-[690px] desktop:w-[635px]  tablet:h-[360px] biglap:w-[1000px] biglap:h-[460px] h-full max-h-[950px]"
              src="https://www.youtube.com/embed/7IxiwdFBfz8?si=fVXLbryxx2Z3pgHp"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>

          <p className="my-6 sm:w-[280px] mymob:w-[300px] mx-auto text-gray-500 text-center tablet:w-[700px] desktop:w-[639px] biglap:w-[1000px] ">
            Enatega Multivendor | Customer Web Deployment
          </p>

          <p className="font-inter text-[#0C0C0C] text-[18px]  biglap:mx-0">
            Clone or download source code from Github
          </p>

          <ul class="list-disc font-[500] my-2 font-inter text-[16px] sm:px-4 tablet:px-8  text-[#0C0C0C] biglap:mx-0">
            <li className="">
              To download the Web Application Click here on{" "}
              <a
                href="https://github.com/enatega/food-delivery-multivendor"
                target="blank"
                className="text-green-600"
              >
                Download Web Dashboard
              </a>
              .
            </li>
          </ul>
          {/* End Ul*/}

          <p className="font-inter text-[#0C0C0C] text-[18px]  biglap:mx-0">
            Node.js must be set up on your computer to run the module. the
            following commands should be entered in the directory after nodejs
            has been installed.
          </p>

          <ul class="list-disc font-[500] my-2 font-inter text-[16px] sm:px-4 tablet:px-8  text-[#0C0C0C] biglap:mx-0">
            <li className="">
              {`cd <Project directory> e.g cd enatega-multivendor-admin`}
            </li>
          </ul>

          <p className="font-inter text-[#0C0C0C] text-[18px]  biglap:mx-0">
            You need to change the following credentials in the contants.js
            file. We have numbered each variable, and the explanation is
            provided below each number.
          </p>
          <p className="font-inter text-[#0C0C0C] text-[18px]  biglap:mx-0">
            Essentially, you are required to update ‘value#1’ and ‘value#2’,
            while the remaining values will be automatically retrieved from the
            configuration (database) once added through the admin panel. In the
            case that these values are not obtained from the configuration,
            kindly hardcode them in the ‘constants.js’ file.
          </p>
          {/* End ul and Text*/}

          {/* Images */}
          <img
            src="/Pictures/DeployAdmin.jpg"
            className="w-full h-auto mt-4"
          ></img>

          <img src="/Pictures/DeployWeb.jpg" className="w-full  h-auto "></img>
          {/* End images */}

          <p className="font-inter text-[#0C0C0C] text-[18px]  biglap:mx-0">
            Here’s an explanation of each variable in the .env file for your web
            application and its purpose:
          </p>

          <ul className="list-decimal font-[500] my-2 font-inter text-[16px]  text-[#0C0C0C] biglap:mx-0 ">
            <li>
              <span className="font-bold uppercase">REACT_APP_SERVER_URL:</span>{" "}
              This variable specifies the base URL of your backend server that
              the web application will communicate with. It’s essential for
              making API requests to your server.
            </li>

            <li>
              <span className="font-bold uppercase">
                REACT_APP_WS_SERVER_URL:
              </span>{" "}
              This variable defines the WebSocket server URL. WebSockets are
              used for real-time communication, and this URL is crucial for
              establishing WebSocket connections with your server. <br />
              <span className="font-bold">What is SERVER_URL?:</span> This
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
              </p>
              <p className="font-inter text-[#0C0C0C] text-sm biglap:mx-0">
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
              <span className="font-bold uppercase">
                REACT_APP_GOOGLE_CLIENT_ID:
              </span>{" "}
              The REACT_APP_GOOGLE_CLIENT_ID is a unique identifier provided by
              Google when you register your web application with Google’s OAuth
              (Open Authorization) service. This ID serves as a means for your
              application to identify itself to Google when attempting to
              authenticate users through their Google accounts. <br />
              <span className="font-bold">
                Here is how you can create the Google ID for the web
              </span>{" "}
              <br />
              <a
                href="https://www.youtube.com/watch?v=9x4gqnOFfao&ab_channel=NinjasCode"
                target="blank"
                className="text-green-600 text-base"
              >
                Configuring Google ID for Web Video
              </a>
            </li>

            <li>
              <span className="font-bold uppercase">
                REACT_APP_STRIPE_PUBLIC_KEY:
              </span>{" "}
              This is the API key for Google services. It’s used for integrating
              various Google services such as Maps, Geolocation, or other Google
              APIs in your application. This key serves as a unique identifier,
              granting your application access to Google’s mapping and
              geolocation features:
              <p className="font-inter font-bold">
                Here’s how you can create a Google API key for this project
              </p>
              <a
                href="https://www.youtube.com/watch?v=A1XzDyaAS1k&ab_channel=NinjasCode"
                target="blank"
                className="text-green-600 text-[17px]"
              >
                Stripe Configuration Video
              </a>
            </li>

            <li>
              <span className="font-bold uppercase">REACT_APP_PAYPAL_KEY:</span>{" "}
              REACT_APP_PAYPAL_KEY: This variable likely represents the PayPal
              API key, used for processing PayPal payments in your application.
              What is PayPal? PayPal is a widely used online payment platform
              that allows individuals and businesses to send and receive
              payments securely over the Internet. It supports a variety of
              payment methods, including credit cards and bank transfers, making
              it a convenient and trusted way to handle online transactions. To
              get more information click read{" "}
              <a
                href="https://www.paypal.com/pk/home"
                target="blank"
                className="text-green-600 text-[17px]"
              >
                more about Paypal.
              </a>
              <br />
              How to configure PayPal for this Project?
              <br />
              Configuring PayPal for your application involves registering with
              PayPal and securely integrating it. Here’s a detailed breakdown:
            </li>
            <ul className="list-disc font-[500] my-2 font-inter text-[16px] px-8 text-[#0C0C0C] biglap:mx-0 ">
              <li>
                <span className="font-semibold">Registration:</span>
                Begin by registering for a PayPal Business account on the PayPal
                website. This account is required to accept payments for your
                products or services.
              </li>
              <li>
                <span className="font-semibold">
                  {" "}
                  Accessing Client Credentials:
                </span>
                After registration, PayPal provides you with two crucial
                credentials: the Client ID and the Client Secret. These are like
                a username and password for your PayPal account, but they are
                meant for your application to securely interact with PayPal’s
                servers.
              </li>
              <li>
                <span className="font-semibold">Admin Dashboard:</span>
                In the configurations area of your admin dashboard, you need to
                paste these credentials. This is where you configure your
                application to communicate with PayPal using the Client ID and
                Secret.
              </li>
              <li>
                <span className="font-semibold">Secure Integration: </span>
                The Client ID and Secret are used to authenticate and authorize
                your application with PayPal. When customers make payments, your
                app securely communicates with PayPal’s servers using these
                credentials to process transactions.
              </li>

              <li>
                <span className="font-semibold"> Payment Handling:</span>
                With PayPal integrated, your application can accept payments
                from customers, and PayPal ensures the security and reliability
                of these transactions.
              </li>
            </ul>

            <li>
              <span className="font-bold uppercase">
                REACT_APP_GOOGLE_MAPS_KEY:
              </span>{" "}
              The Google Maps API key is a crucial component for integrating
              Google Maps and related location and mapping services into the
              application. This key serves as a unique identifier, granting your
              application access to Google’s mapping and geolocation features.
              <br /> Here’s how you can create a{" "}
              <span className="font-bold">
                Google Maps key for this project <br />
              </span>
              <a
                href="https://www.paypal.com/pk/home"
                target="blank"
                className="text-green-600 text-[17px]"
              >
                Demonstration of google map api setup Video
              </a>
            </li>

            <li>
              <span className="font-bold uppercase">
                REACT_APP_AMPLITUDE_API_KEY:
              </span>{" "}
              This API key is essential for integrating Amplitude, an analytics
              and product intelligence service, into a React application. The
              API key identifies your app when communicating with Amplitude’s
              servers. By using this key, you can gather data, analyze user
              behavior, and make data-informed decisions to optimize your
              application’s performance and user experience.
              <br />
              Amplitude helps businesses track and analyze user behavior, such
              as interactions and events within the app. It’s a critical tool
              for enhancing user satisfaction and app success.
              <br />
              To get more information click read{" "}
              <a
                href="https://www.youtube.com/watch?v=mPcKhegUvi8&feature=youtu.be"
                target="blank"
                className="text-green-600 text-[17px]"
              >
                more about amplitude
              </a>
              . <br />
              <span className="font-bold">
                Here’s how you can create an Amplitude API key for this project
              </span>{" "}
              <br />
              <a
                href="https://amplitude.com/docs"
                target="blank"
                className="text-green-600 text-[17px]"
              >
                Configuring Amplitude Video
              </a>
            </li>

            <li>
              <span className="font-bold uppercase mymob:hidden">
                REACT_APP_GOOGLE_MAP_ <br />
                LIBRARIES:
              </span>{" "}
              <span className="font-bold uppercase sm:hidden mymob:flex">
                REACT_APP_GOOGLE_MAP_LIBRARIES:
              </span>{" "}
              This variable specifies which Google Maps libraries are included
              in your application. It can help optimize your application by only
              including the necessary libraries.
            </li>

            <li>
              <span className="font-bold uppercase">
                REACT_APP_GOOGLE_COLOR:
              </span>{" "}
              This variable may be used to define a specific color associated
              with Google-related elements in your application.
            </li>

            <li>
              <span className="font-bold uppercase">REACT_APP_SENTRY_DSN:</span>{" "}
              Similar to the backend, this Sentry DSN is used to report and
              monitor errors and exceptions on the front end of your
              application. This variable contains the Data Source Name (DSN)
              that Sentry uses to report errors and exceptions from your
              application. To get more information click read{" "}
              <a
                href="https://docs.sentry.io/"
                target="blank"
                className="text-green-600 text-[17px]"
              >
                more about Sentry.
              </a>{" "}
              <br />
              <span className="font-bold">
                Here is how you can configure sentry and create SENTRY_DSN_LINK
                for this project
              </span>{" "}
              <br />
              <a
                href="https://www.youtube.com/watch?v=l4iRIjQSgAY/"
                target="blank"
                className="text-green-600 text-[17px]"
              >
                Configuring Sentry Video
              </a>{" "}
            </li>

            <li>
              <span className="font-bold uppercase">REACT_APP_ENV:</span>It
              defines the environment in which the web application is running.
              In this case, it’s set to “prod,” indicating that the application
              is in production. After setting the (.env) file, run the following
              commands:
            </li>

            <ul className="list-disc font-[500] px-8 mt-2 font-inter text-[16px]  text-[#0C0C0C] biglap:mx-0 ">
              <li>npm install</li>
              <li>npm run build</li>
            </ul>

            <h1 className="text-lg font-bold text-[#1A1D1E] font-inter biglap:mx-0">
              How to deploy a React application?
            </h1>
            <p className="font-inter text-[#0C0C0C] text-[16px] biglap:mx-0">
              To deploy these applications, you can use hosting platforms like
              Netlify and Vercel, which specialize in hosting web applications.
              These platforms provide an easy and streamlined deployment
              process. One of the simplest is to use{" "}
              <a
                href="https://www.netlify.com/"
                target="blank"
                className="text-green-600 text-[17px]"
              >
                Netlify
              </a>
              . By looking through this{" "}
              <a
                href="https://www.netlify.com/blog/2016/07/22/deploy-react-apps-in-less-than-30-seconds/"
                target="blank"
                className="text-green-600 text-[17px]"
              >
                documentation
              </a>
              , you can browse through its user manual.
            </p>
          </ul>

          {/* Start Deployment Steps*/}
          <h1 className="text-lg capitalize font-bold tablet:px-8 text-[#1A1D1E] font-inter my-4 biglap:mx-0">
            Deployment Steps
          </h1>
          {/* End Deploy Step */}

          {/* 5th List */}
          <ul className="list-disc font-[500] my-2 font-inter text-[16px] px-11 text-[#0C0C0C] biglap:mx-0 ">
            <li>
              <span className="font-bold ">Netlify:</span>
            </li>
            <ul className="list-disc font-[500] my-2 font-inter text-[16px] sm:pl-8  tablet:px-8 text-[#0C0C0C] biglap:mx-0 ">
              <li>
                For Netlify, you would typically connect your code repository
                (e.g., on GitHub or GitLab) to your Netlify account.
              </li>
              <li>
                Specify the build settings and configurations for your dashboard
                and web app.
              </li>
              <li>
                Netlify will automatically build and deploy your applications
                when you push changes to your repository.
              </li>
              <li>
                You can set custom domains or subdomains for your applications,
                which will become the URLs for your dashboard and web app.
              </li>
            </ul>
            <li>
              <span className="font-bold ">Vercel:</span>
            </li>
            <ul className="list-disc font-[500] my-2 font-inter text-[16px] sm:pl-8 tablet:px-8 text-[#0C0C0C] biglap:mx-0 ">
              <li>
                Vercel offers a similar process. You connect your code
                repository and configure your settings, and Vercel handles the
                build and deployment.
              </li>
              <li>
                Custom domains can be set up on Vercel to determine the URLs for
                your dashboard and web app.
              </li>
            </ul>
            {/* 5th List Subset*/}
          </ul>
          {/* Parent Ul List End*/}
        </div>
        {/* End Center COntent */}

        {/* 2nd box button */}
        <div className=" text-[14px] biglap:text-2xl hidden iox:flex iox:flex-col">
          <h1 className="font-inter font-semibold ">On this Page</h1>
        </div>
        {/* End Button */}
      </div>
    </>
  );
}

export default DeployWeb;
