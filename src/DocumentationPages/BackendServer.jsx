import { useState, useRef } from "react";

function BackendServer() {
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
      <div className="flex iox:space-x-16 iox:mt-1 biglap:-space-y-56  sm:h-[7000px] mymob:h-[6100px] myiphone:h-[5610px] tablet:h-[4500px] desktop:h-[4600px] biglap:h-[4800px] ">
        <div
          key="How to setup Backend API"
          className="text-left desktop:mt-1 iox:mt-0 biglap:mx-44 sm:w-[286px] mymob:w-[335px] myiphone:w-[381px] tablet:w-[690px] desktop:w-[639px] biglap:w-[1000px]  border-b-2 border-gray-200 "
        >
          <p className="font-inter text-green-700 text-sm biglap:mx-0">
            Installation
          </p>

          <h1 className="sm:text-2xl Capitalize tablet:text-3xl font-bold text-[#1A1D1E] font-inter  my-4 biglap:mx-0">
            How to deploy backend API server
          </h1>

          <p className="font-inter text-[#0C0C0C] text-[18px]  biglap:mx-0">
            Download or clone the source code, then extract it and open the
            extracted folder in a terminal. You must have node js installed on
            your computer to launch the module. After installing nodejs, open
            the directory and type the following commands:
          </p>

          <ul class="list-disc font-[500] my-2 font-inter text-[16px] sm:px-8 tablet:px-16  text-[#0C0C0C] biglap:mx-0">
            <li className="">
              <span className="flex items-center space-x-[2px]">
                <span className="flex items-center ">
                  {`
                  cd <Project directory>  e.g. cd enatega-multivendor-api `}
                </span>
              </span>
            </li>
          </ul>
          {/* End Section */}

          <p className="font-inter text-[#0C0C0C] text-[18px]  biglap:mx-0">
            After opening the backend API code in the code editor, you need to
            follow the following setup instructions:
          </p>

          {/* End Section*/}

          {/* Setup Insr=truction */}
          <section
            ref={(el) => {
              sectionRefs.current[0] = el;
            }}
          ></section>
          <h1 className="text-xl capitalize font-bold text-[#1A1D1A] font-inter my-4 biglap:mx-0">
            Setup Instructions:
          </h1>

          {/* Docker Section */}

          <h1 className="text-lg capitalize font-bold text-[#1A1D1E] font-inter my-4 biglap:mx-0">
            Step 1: Docker Setup
          </h1>

          <ul className="list-disc font-[500] my-2 font-inter text-[16px] px-8 mymob:w-[360px] myiphone:w-[400px]  tablet:w-[728px] desktop:w-[639px] iox:w-full iox:max-w-[690px] biglap:w-[1000px] mx-auto text-[#0C0C0C] biglap:mx-0 ">
            <li>
              Make sure you have Docker installed on your machine. If not, you
              can download it{" "}
              <a
                href="https://amplitude.com/"
                target="blank"
                className="text-green-600"
              >
                {" "}
                here
              </a>
              .
            </li>
            <li>
              Once Docker is installed, navigate to the project directory in
              your terminal.
            </li>
          </ul>

          {/* Steps 2 Start */}
          <h1 className="text-lg capitalize font-bold text-[#1A1D1E] font-inter my-4 biglap:mx-0">
            Step 2: Environment Variables
          </h1>

          <p className="font-inter text-[#0C0C0C] text-[18px]  biglap:mx-0">
            After Docker setup, you need to configure the environment variables.
            Modify the .env file with your credentials.If you do not find a .env
            file, create one in the root directory and paste the following
            contents into the .env file.
          </p>

          <ul className="font-inter bg-[#f3f3f3] my-4 Leading-4 text-lg mymob:w-[360px] myiphone:w-[400px]  tablet:w-[728px] desktop:w-[639px] iox:w-full iox:max-w-[690px] biglap:w-[1000px] mx-auto text-[#0C0C0C] biglap:mx-0 ">
            <li className="">PORT=8001</li>
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
          {/* End Section Step2 */}

          {/* Environment Varisbles Explanation */}
          <section
            ref={(el) => {
              sectionRefs.current[1] = el;
            }}
          >
            <h1 className="text-lg capitalize font-bold text-[#1A1D1E] font-inter my-4 biglap:mx-0">
              Environment Variables Explanation:
            </h1>
          </section>

          {/* Images */}
          <img
            src="/Pictures/apisetupimg1.jpg"
            className="w-full h-auto my-4"
          ></img>

          <img
            src="/Pictures/apisetupimg2.jpg"
            className="w-full  h-auto my-4"
          ></img>
          {/* End images */}

          <p className="font-inter text-[#0C0C0C] text-[18px]  biglap:mx-0">
            Certainly, here’s a concise explanation of each variable in the .env
            file, its purpose, and how to create it:
          </p>

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
          </ul>

          <ul className=" font-[500] my-2 font-inter text-[16px] tablet:px-8 text-[#0C0C0C] biglap:mx-0 ">
            <li>
              <span className="font-bold uppercase text-sm list">
                You might wonder what MongoDB is.{" "}
              </span>{" "}
              MongoDB is a flexible NoSQL database known for storing data as
              JSON-like documents. It’s highly scalable, supports a rich query
              language, and is commonly used in applications like content
              management systems, e-commerce, and IoT. It offers high
              availability, and robust security, and has both a free community
              edition and a commercial enterprise edition. To get more
              information click read{" "}
              <a
                href="https://www.mongodb.com/"
                target="blank"
                className="text-green-600 text-[17px]"
              >
                more about MongoDB.
              </a>
              . Here’s how you can create the connection string for your version
              of this project.{" "}
              <a
                href="https://www.youtube.com/watch?v=YmdO3hw5DWU&feature=youtu.be"
                target="blank"
                className="text-green-600 text-[17px]"
              >
                MongoDB Configuration Video
              </a>
            </li>
          </ul>
          {/* 1st List end */}

          {/* 2nd List */}
          <ul className="list-disc font-[500] my-2 font-inter text-[16px] px-8 text-[#0C0C0C] biglap:mx-0 ">
            <li>
              <span className="font-bold uppercase">RESET_PASSWORD_LINK:</span>{" "}
              Link for resetting passwords.
            </li>
            <li>
              <span className="font-bold uppercase">SERVER_URL:</span> This
              variable specifies the base URL of your server. It’s the root URL
              where your backend API is hosted. Initially, paste your local
              server URL, and later when you deploy your server in any cloud
              platform, replace it with your live server link.
            </li>
          </ul>

          {/* 3rd List */}
          <ul className="font-[500] my-2 font-inter text-[16px] px-8 text-[#0C0C0C] biglap:mx-0 ">
            <li>
              <span className="font-bold uppercase">
                How to Deploy to Backend API?
              </span>{" "}
              Deploying means making your API server available and functional on
              the hosting service. This typically involves uploading your code,
              configuring the server, and ensuring it’s up and running. Here is
              how you can Deploy your APi server and get the SERVER_URL for
              adding in .env file.{" "}
              <a
                href="https://www.youtube.com/watch?v=R4yVypBhfHw&feature=youtu.be"
                target="blank"
                className="text-green-600"
              >
                Railway Cloud deployment Video
              </a>
            </li>
          </ul>

          {/* 4th List */}
          <ul className="list-disc font-[500] my-2 font-inter text-[16px] px-8 text-[#0C0C0C] biglap:mx-0 ">
            <li>
              <span className="font-bold uppercase">
                <span className="sm:flex myiphone:hidden">
                  STRIPE_WEBHOOK_ ENDPOINT _SECRET=
                </span>
                <span className="sm:hidden myiphone:flex">
                  STRIPE_WEBHOOK_ENDPOINT_SECRET=
                </span>
              </span>{" "}
              This variable is used for Stripe webhook verification. It’s a
              secret key that Stripe uses to sign webhook events, ensuring their
              authenticity. <br />
              <span className="font-bold text-base">What is Stripe?</span>{" "}
              Stripe is a widely used online payment platform that helps
              businesses accept payments securely on their websites and apps.
              It’s known for its simplicity, global reach, and
              developer-friendly tools. <br />
              <span className="font-bold text-base">
                {" "}
                How to create a Stripe Endpoint Secret for this Project?
              </span>{" "}
              <br />
              Here is how You can create Stripe endpoint Secrets
              <br />
              <a
                href="https://console.firebase.google.com/u/0/?pli=1"
                className="text-green-600"
              >
                {" "}
                Stripe Configuration Video
              </a>
            </li>
            <li>
              <span className="font-bold uppercase">DASHBOARD_URL: </span>URL
              for the dashboard.
            </li>
            <li>
              <span className="font-bold uppercase">WEB_URL:</span>
              URL for the web application. <br />
              <span className="font-bold text-base">
                {" "}
                Deploying an Admin Dashboard and Web Application
              </span>{" "}
              <br />
              To deploy these applications, you can use hosting platforms like
              Netlify and Vercel, which specialize in hosting web applications.
              These platforms provide an easy and streamlined deployment
              process.One of the simplest is to use{" "}
              <a href="https://www.netlify.com/" className="text-green-600">
                {" "}
                Netlify
              </a>
              . By looking through this{" "}
              <a
                href="https://www.netlify.com/blog/2016/07/22/deploy-react-apps-in-less-than-30-seconds/"
                className="text-green-600"
              >
                {" "}
                documentation
              </a>
              , you can browse through its user manual.
            </li>
          </ul>

          {/* end 4th List */}

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

          {/* 6th List */}
          <ul className="list-disc font-[500] my-2 font-inter text-[16px] sm:px-6  text-[#0C0C0C] biglap:mx-0 ">
            <li>
              <span className="font-bold uppercase">ORDER_DETAIL_WEB_URL:</span>{" "}
              This variable might be a partial URL used to construct links to
              specific order details in your application.
            </li>
            <li>
              <span className="font-bold uppercase">NODE_DEV:</span> Node
              development environment.
            </li>
            <li>
              <span className="font-bold uppercase">NODE_ENV:</span> Node
              environment.{" "}
            </li>
            <li>
              <span className="font-bold uppercase">SENDGRID_API_KEY: </span>
              Please enter your SendGrid API key if you intend to use SendGrid
              for sending emails; otherwise, leave this field empty.
            </li>
          </ul>
          {/* 6th List */}

          {/* Step 3: Adding serviceAccountKey.json  */}
          <h1 className="text-lg capitalize font-bold text-[#1A1D1E] font-inter my-4 biglap:mx-0">
            Step 3: Adding serviceAccountKey.json
          </h1>
          {/* End Step 3 : Adding serviceAccountKey.json */}

          <p className="font-inter text-[#0C0C0C] text-[18px] biglap:mx-0">
            Lastly, you need to add your own serviceAccountKey.json. This file
            is typically used for Firebase Admin SDK. Follow these steps to
            obtain and add the file:
          </p>

          {/* 3rd ul Step 3 */}

          <ul className="list-decimal font-[500] my-2 font-inter text-[16px] px-4 text-[#0C0C0C] biglap:mx-0 ">
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

          {/* Images */}
          <img
            src="/Pictures/setupapi3.jpg"
            alt=""
            className="w-full h-auto "
          />

          {/* Running the Backend: */}
          <h1 className="text-lg capitalize font-bold text-[#1A1D1E] font-inter my-4 biglap:mx-0">
            Running the Backend:
          </h1>
          {/* End Running the Backend:*/}

          <p className="font-inter text-[#0C0C0C] text-[18px] biglap:mx-0">
            After completing the setup steps, you can start using your backend
            API. Simply run Docker and your API will be up and running, ready to
            serve your application.Run the following command to build and start
            the Docker containers:
          </p>

          {/*docker compose up --build  */}
          <div className="bg-[#F6F7F9] text-lg flex items-start gap-2 py-1 text-[#0C0C0C] font-inter font-semibold biglap:mx-0 mt-4">
            <p>docker compose up --build</p>
          </div>

          <p className="font-inter text-[#0C0C0C] text-[18px] biglap:mx-0">
            For any issues or further assistance, please contact support
          </p>
        </div>
        {/* End Center COntent */}

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
              Setup Instructions
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
              Environment Variables Explanation:
            </button>
          </div>
          {/* End 2nd box*/}
        </div>
        {/* End Button Section */}
      </div>
    </>
  );
}

export default BackendServer;
