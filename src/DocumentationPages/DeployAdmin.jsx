function DeployAdmin() {
  return (
    <>
      <div className="flex iox:space-x-16 iox:px-3 iox:mt-1 biglap:-space-y-56  sm:h-[8880px] mymob:h-[7600px] myiphone:h-[6760px] tablet:h-[4900px] desktop:h-[5100px]  biglap:h-[5000px] ">
        <div
          key="How to setup Backend API"
          className="text-left desktop:mt-1 iox:mt-0 biglap:mx-44 sm:w-[286px] mymob:w-[335px] myiphone:w-[381px] tablet:w-[690px] desktop:w-[639px] biglap:w-[1000px]  border-b-2 border-gray-200 "
        >
          <p className="font-inter text-green-700 text-sm biglap:mx-0">
            Installation
          </p>

          <h1 className="sm:text-2xl Capitalize tablet:text-3xl font-bold text-[#1A1D1E] font-inter  my-4 biglap:mx-0">
            How to deploy Admin Dashboard
          </h1>

          <div className="relative my-4">
            <iframe
              loading="lazy"
              className="sm:w-[285px] sm:h-[300px] mymob:w-[335px] myiphone:w-[381px] myiphone:h-[350px] tablet:w-[690px] desktop:w-[635px]  tablet:h-[360px] biglap:w-[1000px] biglap:h-[460px] h-full max-h-[950px]"
              src="https://www.youtube.com/embed/8fQIvMU_fsc?si=Qq1K9H-siyZgvs--"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>

          <p className="my-6 sm:w-[280px] mymob:w-[300px] mx-auto text-gray-500 text-center tablet:w-[700px] desktop:w-[639px] biglap:w-[1000px] ">
            Enatega Multivendor Delivery Tutorial | End-to-End Setup
          </p>

          <p className="font-inter text-[#0C0C0C] text-[18px]  biglap:mx-0">
            Initially, we must launch the admin panel and store all the keys
            using the administrative interface.
          </p>
          <p className="font-inter text-[#0C0C0C] text-[18px]  biglap:mx-0">
            Clone or download source code from Github
          </p>

          <ul class="list-disc font-[500] my-2 font-inter text-[16px] sm:px-4 tablet:px-8  text-[#0C0C0C] biglap:mx-0">
            <li className="">
              To download Admin Dashboard Click here on{" "}
              <a
                href="https://github.com/enatega/food-delivery-multivendor"
                target="blank"
                className="text-green-600"
              >
                Download Admin Dashboard
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
            Change constants.js file. Following credentials you need to change.
            You need to change the following credentials in the constants.js
            file. To change constants.js file, go{" "}
            <span className="font-semibold italic">src</span> folder then go to
            the config folder, you will find constant.js as shown in the
            following image:
          </p>

          {/* End ul and Text*/}

          {/* Images */}
          <img
            src="/Pictures/DeployAdmin.jpg"
            className="w-full h-auto mt-4"
          ></img>

          <img
            src="/Pictures/DeployAdmin2.jpg"
            className="w-full  h-auto "
          ></img>
          {/* End images */}

          <p className="font-inter text-[#0C0C0C] text-[18px]  biglap:mx-0">
            You are required to incorporate ‘value#1’(SERVER_URL),
          </p>

          <p className="font-inter text-[#0C0C0C] text-[18px]  biglap:mx-0">
            value#2(WS_SERVER_URL) and ‘value#3(GOOGLE_MAPS_KEY)’ into this
            file. Subsequently, all other values will be retrieved from the
            database once saved through the configuration in the admin panel.
            Initially, if the values are not yet available from the
            configuration (database), please hardcode them into the
            ‘constant.js’ file. The configuration provided below is where you
            should append the values after executing the admin panel. These
            values are utilized across the entire project, including mobile
            apps, the web, and the admin interface.
          </p>

          <p className="font-inter text-[#0C0C0C] text-[18px] my-4 biglap:mx-0">
            In the admin panel under the configuration, you need to add all the
            values.
          </p>

          <img
            src="/Pictures/DeployAdmin3.jpg"
            className="w-full  h-auto "
          ></img>

          <p className="font-inter text-[#0C0C0C] text-[18px] biglap:mx-0">
            As we have numbered each variable in constant.js file image above,
            and the explanation against each number is provided below :
          </p>

          <ul className="list-decimal font-[500] my-2 font-inter text-[16px] px-8  text-[#0C0C0C] biglap:mx-0 ">
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
            </li>

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
              <span className="font-bold ">How to Deploy to Backend API?</span>{" "}
              Deploying means making your API server available and functional on
              the hosting service. This typically involves uploading your code,
              configuring the server, and ensuring it’s up and running.
            </p>

            <p className="font-inter text-[#0C0C0C] biglap:mx-0">
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

            <li>
              <span className="font-bold uppercase">
                REACT_APP_GOOGLE_API_KEY:
              </span>{" "}
              This is the API key for Google services. It’s used for integrating
              various Google services such as Maps, Geolocation, or other Google
              APIs in your application.
              <p>
                This key serves as a unique identifier, granting your
                application access to Google’s mapping and geolocation features:
              </p>
              <p className="font-inter font-bold">
                Here’s how you can create a Google API key for this project
              </p>
              <a
                href="https://www.mongodb.com/"
                target="blank"
                className="text-green-600 text-[17px]"
              >
                Demonstration of google map api setup Video.
              </a>
            </li>

            <li>
              <span className="font-bold uppercase">
                REACT_APP_FIREBASE_KEY:
              </span>{" "}
              This is the Firebase API Key, used to securely connect your
              application to Firebase services such as the Realtime Database,
              Authentication, and Cloud Storage.
            </li>

            <li>
              <span className="font-bold uppercase">
                REACT_APP_AUTH_DOMAIN:
              </span>{" "}
              This is the Firebase Authentication Domain, required for
              implementing user authentication within your application using
              Firebase Authentication services.
            </li>

            <li>
              <span className="font-bold uppercase">
                REACT_APP_STORAGE_BUCKET:
              </span>{" "}
              Specifies the Firebase Storage Bucket, indicating where your
              application will store files and assets securely in the cloud.
            </li>

            <li>
              <span className="font-bold uppercase">
                REACT_APP_MSG_SENDER_ID:
              </span>{" "}
              This ID is related to Firebase Cloud Messaging (FCM), used for
              sending push notifications within your app, helping you keep users
              informed in real-time.
            </li>

            <li>
              <span className="font-bold uppercase">
                REACT_APP_MEASUREMENT_ID:
              </span>{" "}
              The Google Analytics Measurement ID helps track and analyze user
              behavior and application performance using Google Analytics,
              providing insights into how users interact with your app.
            </li>

            <li>
              <span className="font-bold uppercase">REACT_APP_PROJECT_ID:</span>{" "}
              The Firebase Project ID uniquely identifies your Firebase project,
              allowing you to manage and configure it within the Firebase
              console.
            </li>

            <li>
              <span className="font-bold uppercase">REACT_APP_SENTRY_DSN:</span>{" "}
              Sentry DSN for error tracking and monitoring. It reports and logs
              errors that occur in your Admin Panel. This variable contains the
              Data Source Name (DSN) that Sentry uses to report errors and
              exceptions from your application. Read more about Sentry Here is
              how you can configure
            </li>

            <li>
              <span className="font-bold uppercase sm:flex tablet:hidden">
                REACT_APP_CLOUDINARY_ <br />
                UPLOAD_URL:
              </span>{" "}
              <span className="font-bold uppercase sm:hidden tablet:flex">
                REACT_APP_CLOUDINARY_ UPLOAD_URL:
              </span>{" "}
              t represents the URL endpoint that your application uses to upload
              images to Cloudinary. It specifies the location where your
              application sends image files for storage and management on the
              Cloudinary platform.
            </li>

            <li>
              <span className="font-bold uppercase sm:flex tablet:hidden">
                REACT_APP_CLOUDINARY
                <br />
                _FOOD:
              </span>{" "}
              <span className="font-bold uppercase sm:hidden tablet:flex">
                REACT_APP_CLOUDINARY_FOOD:
              </span>{" "}
              It is a product environment provided by Cloudinary, it suggests
              that it’s a predefined or configured setting for using
              Cloudinary’s services in a manner optimized for your
              project-related content within your application. <br />
              <span className="text-sm font-semibold">
                So What is Cloudinary?
              </span>
              Cloudinary is a cloud-based media management platform that helps
              developers and businesses manage, store, and manipulate images and
              other media files in their applications. It offers features like
              image and video hosting, dynamic image transformations, and
              seamless delivery across different devices. To get more
              information click read more about Cloudinary. <br />
              <span className="font-semibold text-sm">
                Here is how you can configure Cloudinary and create
                CLOUDINARY_URL for this project
              </span>{" "}
              <br />
              <a
                href="https://www.youtube.com/watch?v=mNnGHz1-enE/"
                target="blank"
                className="text-green-600 text-[17px]"
              >
                Demonstration of Cloudnary Video
              </a>
            </li>

            <li>
              <span className="font-bold uppercase sm:flex tablet:hidden">
                REACT_APP_FIREBASE_VAPID
                <br />
                _KEY:
              </span>{" "}
              <span className="font-bold uppercase sm:hidden tablet:flex">
                REACT_APP_FIREBASE_VAPID_KEY:
              </span>{" "}
              This variable represents a Firebase VAPID (Voluntary Application
              Server Identification) key, which is used in the context of
              Firebase Cloud Messaging (FCM) and web push notifications. <br />
              <span className="font-semibold ">
                Here is how you can configure Push Notification for this project
              </span>{" "}
              <br />
              <a
                href="https://www.youtube.com/watch?v=CaLQ6DE4UPA"
                target="blank"
                className="text-green-600 text-[17px]"
              >
                Push Notification configuring Video
              </a>
              <br />
              After setting the constant.js file, run the following commands:
            </li>

            <ul className="list-decimal font-[500] mt-2 font-inter text-[16px]  text-[#0C0C0C] biglap:mx-0 ">
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
                and web app. Netlify will automatically build and deploy your
                applications when you push changes to your repository.
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

export default DeployAdmin;
