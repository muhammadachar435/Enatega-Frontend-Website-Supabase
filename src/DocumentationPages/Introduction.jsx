import React from "react";
import { useState, useRef } from "react";

function Introduction() {
  const sectionRefs = useRef([]);
  const [activeTab, setActiveTab] = useState(null);

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
      <div className="flex iox:space-x-16 iox:mt-1 biglap:-space-y-56  sm:h-[8000px] mymob:h-[7210px] myiphone:h-[7110px] tablet:h-[5520px] desktop:h-[5650px] iox:h-[5650px] biglap:h-[5500px] ">
        <div
          key="intro"
          className="text-left desktop:mt-1 iox:mt-0 biglap:mx-44 sm:w-[286px] mymob:w-[335px] myiphone:w-[381px] tablet:w-[690px] desktop:w-[639px] biglap:w-[1000px]  border-b-2 border-gray-200 "
        >
          <p className="font-inter text-green-700 text-sm desktop:w-[639px] biglap:w-[1000px] ">
            Getting Started
          </p>

          <h1 className="sm:text-2xl tablet:text-3xl font-bold text-[#1A1D1E] font-inter sm:w-[300px]  mymob:w-[360px] myiphone:w-[400px] desktop:w-[639px] biglap:w-[1000px] my-4">
            Introduction
          </h1>

          <div className="mt-1">
            <p className="font-inter text-[#0C0C0C] text-[18px]  tablet:w-[690px] desktop:w-[639px] biglap:w-[1000px] ">
              Enatega Multivendor is a full-featured Multivendor food delivery
              solution for iOS, Android, and the Web. We have ensured that you
              receive a good mobile and dashboard application design as well as
              a complete solution that will allow you to quickly integrate and
              white label into any meal delivery service.
            </p>
            <div className="relative mt-4">
              <iframe
                loading="lazy"
                className="sm:w-[285px] sm:h-[300px] mymob:w-[335px] myiphone:w-[381px] myiphone:h-[350px] tablet:w-[690px] desktop:w-[639px]  tablet:h-[360px] biglap:w-[1000px] biglap:h-[460px] h-full max-h-[950px] "
                src="https://www.youtube.com/embed/d3_Pgx0XX-M?si=IRg3XscMutDTxXTF"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
          <p className="my-6 sm:w-[280px] mymob:w-[300px] mx-auto text-gray-500 text-center tablet:w-[700px] desktop:w-[639px] biglap:w-[1000px] ">
            Enatega Multivendor Delivery Tutorial | End-to-End Setup
          </p>

          <div className="relative mt-4">
            <iframe
              loading="lazy"
              className="sm:w-[285px] sm:h-[300px] mymob:w-[335px] myiphone:w-[381px] myiphone:h-[350px] tablet:w-[690px] desktop:w-[639px]  tablet:h-[360px] biglap:w-[1000px] biglap:h-[460px] h-full max-h-[950px]"
              src="https://www.youtube.com/embed/pvrZOtJ4cCc?si=h673LpBOVry53qLg"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
          <p className="my-6 text-gray-500 sm:w-[280px] mymob:w-[300px] mx-auto text-center tablet:w-[700px] desktop:w-[639px] biglap:w-[1000px] ">
            Enatega | Food Delivery App | Ubereats Clone | Foodpanda Clone
          </p>
          <p className="font-inter text-left text-[#0C0C0C] text-[18px] tablet:w-[728px] desktop:w-[639px] biglap:w-[1000px] my-4 ">
            Below is a detailed video on the admin section of Enatega which
            shows all functionalities that you can have as a solution.
          </p>

          <div className="relative mt-4">
            <iframe
              loading="lazy"
              className="sm:w-[285px] sm:h-[300px] mymob:w-[335px] myiphone:w-[381px] myiphone:h-[350px] tablet:w-[690px] desktop:w-[639px]  tablet:h-[360px] biglap:w-[1000px] biglap:h-[460px] h-full max-h-[950px]"
              src="https://www.youtube.com/embed/nRGmGc0BcxA?si=IwICTtIMWtyrqNv1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
          <p className="font-inter text-left text-[#0C0C0C] text-[18px]  tablet:w-[690px] desktop:w-[639px] biglap:w-[1000px] my-4">
            To understand what functionalities your customers can enjoy, you can
            checkout our detailed video guide on the Customer App, listed below.
          </p>

          <div className="relative mt-4">
            <iframe
              loading="lazy"
              className="sm:w-[285px] sm:h-[300px] mymob:w-[335px] myiphone:w-[381px] myiphone:h-[350px] tablet:w-[690px] desktop:w-[639px]  tablet:h-[360px] biglap:w-[1000px] biglap:h-[460px] h-full max-h-[950px]"
              src="https://www.youtube.com/embed/ZOBW4kdCsD4?si=aBM57fFh76QMYcL9"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>

          <p className="font-inter text-[#0C0C0C] text-[18px] text-left ml-0 tablet:w-[690px] desktop:w-[639px] biglap:w-[1000px] mx-auto pb-4 mt-4">
            The mobile end of this application is built utilizing{" "}
            <a
              href="https://github.com/facebook/react-native"
              target="blank"
              className="text-green-600"
            >
              React Native{" "}
            </a>
            and{" "}
            <a
              href="https://expo.dev/"
              target="blank"
              className="text-green-600"
            >
              Expo
            </a>
            . React has been used for the dashboard panel and customer web app.
            <a
              href="https://graphql.org/"
              target="blank"
              className="text-green-600"
            >
              {" "}
              Graphql
            </a>{" "}
            is utilized by web and mobile. The
            <a
              href="https://github.com/apollographql/apollo-client"
              target="blank"
              className="text-green-600"
            >
              {" "}
              Apollo Client
            </a>{" "}
            is used for endpoint querying and state management.{" "}
            <a
              href="https://nodejs.org/en/"
              target="blank"
              className="text-green-600"
            >
              {" "}
              Node
            </a>{" "}
            with{" "}
            <a
              href="https://www.mongodb.com/"
              target="blank"
              className="text-green-600"
            >
              {" "}
              MongoDB
            </a>{" "}
            are used to create the API.
          </p>

          <p className="font-inter text-[#0C0C0C] text-[18px] sm:ml-0 tablet:w-[690px] desktop:w-[639px] biglap:w-[1000px] mx-auto">
            It has all the features that you will ever need to implement this
            application for any restaurant or some kind of food delivery
            application. Some of the features that are included in it are:
          </p>

          <p className="font-inter text-[#0C0C0C] text-[18px] sm:ml-0 tablet:w-[680px]  desktop:w-[639px] biglap:w-[1000px]">
            To make your life as a developer easier, we made sure the code was
            neatly organized and got rid of any extra screens. For an even
            better development experience, it is combined with the following
            functionalities.
          </p>
          {/* 1st section */}
          <section ref={(el) => (sectionRefs.current[0] = el)}>
            <h1 className="font-inter text-[#1A1D1E] sm:text-xl tablet:text-[24px] tablet:w-[728px] desktop:w-[639px] biglap:w-[1000px] mx-auto my-4 font-bold ">
              Customer Mobile/Web Application:
            </h1>
          </section>

          <ul className="list-disc font-[500] font-inter text-[#0C0C0C] text-[16px] sm:w-[300px] px-8 mymob:w-[360px] myiphone:w-[400px] tablet:w-[690px] desktop:w-[639px] biglap:w-[1000px]">
            <li>Verification of email and phone numbers</li>
            <li>Using Google, Apple, and Facebook for authentication</li>
            <li>
              Restaurants displayed on the map and home screen based on location
            </li>
            <li>
              Information about restaurants includes reviews and ratings, hours
              of operation, delivery schedules, the menu and items offered, as
              well as the establishment’s location and minimum order
            </li>
            <li>
              Adding an address using Maps integration and Google Places
              suggestions
            </li>
            <li>Analytics and reporting on errors with Amplitude and Sentry</li>
            <li>
              For account creation and order status updates, push notifications
              and emails to users also include global push notifications to all
              customers
            </li>
            <li>Real-time tracking of Rider and chat with Rider option</li>
            <li>Multi-Language and different themes support</li>
            <li>Rating and Review features for order</li>
            <li>Payment Integration for both PayPal and Stripe</li>
            <li>Previous order history and adding favorite restaurants</li>
            <li>
              Options to add different variations of food items and adding notes
              to restaurant
            </li>
            <li>Pick-up and delivery options with different timings</li>
            <li>
              Options to add different variations of food items and adding notes
              to restaurant
            </li>
            <li>Vouchers and Tipping option</li>
            <li>
              Searching functionality respective to restaurants and their items
            </li>
          </ul>

          {/* 2nd Restaurant */}
          <section ref={(el) => (sectionRefs.current[1] = el)}>
            <h1 className="font-inter text-[#1A1D1E] sm:text-xl tablet:text-[24px]  tablet:w-[728px] desktop:w-[639px] biglap:w-[1000px] mx-auto my-4 font-bold ">
              Restaurant Application:
            </h1>

            <ul className="list-disc font-[500] font-inter text-[#0C0C0C] text-[16px] sm:w-[300px] px-8 mymob:w-[360px] myiphone:w-[400px] tablet:w-[728px] desktop:w-[639px] biglap:w-[1000px] mx-auto">
              <li>
                Ringer and Push Notification alert for new incoming order{" "}
              </li>
              <li>
                Time limiter for a restaurant to accept orders and setting time
                option for meal preparation
              </li>
              <li>Print Invoice option for restaurant</li>
              <li>Delivered orders history</li>
              <li>Changing restaurant status to online/offline</li>
              <li>Order Details with customer information and Order Details</li>
              <li>Real-time order receiving updates</li>
            </ul>
          </section>
          {/* End Restaurant */}

          {/* 3rd Rider */}
          <section ref={(el) => (sectionRefs.current[2] = el)}>
            <h1 className="font-inter text-[#1A1D1E] sm:text-xl tablet:text-[24px]  tablet:w-[728px] desktop:w-[639px] biglap:w-[1000px] mx-auto my-4 font-bold ">
              Rider Application:
            </h1>
            <ul className="list-disc font-[500] font-inter text-[#0C0C0C] text-[16px] sm:w-[300px] px-8 mymob:w-[360px] myiphone:w-[400px]  tablet:w-[728px] desktop:w-[639px] biglap:w-[1000px] mx-auto ">
              <li>Real-time order status change updates</li>
              <li>Push Notification and Ringer feature for a new order</li>
              <li>
                Map feature showing markers for delivery address and restaurant
                address with Google Maps integration
              </li>
              <li>
                Time limiter for accepting an order and updated time shown for
                meal preparation time
              </li>
              <li>
                The distance and anticipated travel time to the destination
                (Restaurant and Customer) are displayed
              </li>
              <li>
                Real-time chat with a customer option that includes push
                notifications for chats received on both ends
              </li>
              <li>History of all orders in progress and new orders</li>
              <li>
                Online delivery fees that are instantly placed into your wallet,
                the ability to withdraw money, and wallet history
              </li>
              <li>Option of changing a status online/offline of rider</li>
            </ul>
          </section>
          {/* End Rider */}

          {/* 4th Admin */}
          <section ref={(el) => (sectionRefs.current[3] = el)}>
            <h1 className="font-inter text-[#1A1D1E] sm:text-xl tablet:text-[24px] tablet:w-[728px] desktop:w-[639px] biglap:w-[1000px] mx-auto my-4 font-bold ">
              Admin Dashboard:
            </h1>
            <ul className="list-disc font-[500] font-inter text-[#0C0C0C] text-[16px] sm:w-[300px] px-8 mymob:w-[360px] myiphone:w-[400px] tablet:w-[728px] desktop:w-[639px] biglap:w-[1000px] mx-auto">
              <li>
                Role-based administration, whereby the administrator has access
                to all features while the vendor (the owner of the restaurant)
                only has access to the management of their own establishments
              </li>
              <li>Management of Restaurants, Vendors, Restaurants Section</li>
              <li>
                Defining Zones for Riders and assigning creating zones to Riders
              </li>
              <li>
                Managing withdrawl requests from riders and commission rates
              </li>
              <li>
                Configuration of application and global level order status
                management
              </li>
              <li>
                Restaurant orders stats and managing their stripe account for
                receiving commission directly
              </li>
              <li>
                Restaurant orders stats and managing their stripe account for
                receiving commission directly
              </li>
              <li>
                Restaurants managing their timings and defining delivery bounds
                where they can operate
              </li>
              <li>
                Restaurants’ menus feature with complete options to add any
                variety of food with a discount feature
              </li>
              <li>User, Ratings, Coupon, and tipping option management</li>
            </ul>
          </section>
          {/* End Admin */}

          {/* Functionalities for better development experience: */}
          <section ref={(el) => (sectionRefs.current[4] = el)}>
            <h1 className="font-inter text-[#1A1D1E] sm:text-xl tablet:text-[24px]  tablet:w-[728px] desktop:w-[639px] biglap:w-[1000px] mx-auto my-4 font-bold ">
              Functionalities for better development experience:
            </h1>
            <p className="font-inter text-[#0C0C0C] text-[18px] ml-0 tablet:w-[690px] desktop:w-[639px] biglap:w-[1000px] ">
              To make your life as a developer easier, we made sure the code was
              neatly organized and got rid of any extra screens. For an even
              better development experience, it is combined with the following
              functionalities.
            </p>

            <ul className="list-disc font-[500] font-inter text-[#0C0C0C] text-[16px] sm:w-[300px] px-8 mymob:w-[360px] myiphone:w-[400px]  tablet:w-[728px] desktop:w-[639px] biglap:w-[1000px] mx-auto ">
              <li>
                <a
                  href="https://eslint.org/"
                  target="blank"
                  className="text-green-600"
                >
                  ESLint
                </a>{" "}
                to provide you with linting capability in Javascript
              </li>
              <li>
                <a
                  href="http://prettier.io/"
                  target="blank"
                  className="text-green-600"
                >
                  Prettier
                </a>{" "}
                for code formatting
              </li>
              <li>
                <a
                  href="https://jestjs.io/"
                  target="blank"
                  className="text-green-600"
                >
                  Jest
                </a>{" "}
                for unit testing
              </li>
              <li>
                {" "}
                <a
                  href="https://github.com/typicode/husky"
                  target="blank"
                  className="text-green-600"
                >
                  Husky
                </a>{" "}
                to prevent bad commits
              </li>
            </ul>
          </section>

          {/* end Functionalities */}

          {/*  What will you have in the Enatega Full App? */}
          <section ref={(el) => (sectionRefs.current[5] = el)}>
            <h1 className="font-inter text-[#1A1D1E] sm:text-xl tablet:text-[24px]  tablet:w-[728px] desktop:w-[639px] biglap:w-[1000px] mx-auto my-4 font-bold ">
              What will you have in the Enatega Full App?
            </h1>

            <ul className="list-disc font-[500] font-inter text-[#0C0C0C] text-[16px] sm:w-[300px] px-8 mymob:w-[360px] myiphone:w-[400px]  tablet:w-[728px] desktop:w-[639px] biglap:w-[1000px] mx-auto">
              <li>Enatega Multivendor Mobile App (iOS and Android)</li>
              <li>Enatega Multivendor Rider App (iOS and Android)</li>
              <li>Enatega Multivendor Restaurant App (iOS and Android)</li>
              <li>Enatega Multivendor Web App</li>
              <li>Admin Web Dashboard</li>
              <li>Application program interface server</li>
              <li>
                Analytics Dashboard with Expo Amplitude{" "}
                <a
                  href="https://amplitude.com/"
                  target="blank"
                  className="text-green-600"
                >
                  {" "}
                  Amplitude
                </a>{" "}
              </li>
              <li>
                Error reporting that is{" "}
                <a
                  href="https://sentry.io/welcome/"
                  target="blank"
                  className="text-green-600"
                >
                  {" "}
                  Sentry
                </a>{" "}
              </li>
            </ul>
          </section>

          {/* End What will you have in the Enatega Full App? */}

          {/* Enatega Technology Stack */}

          <section ref={(el) => (sectionRefs.current[6] = el)}>
            <h1 className="font-inter text-[#1A1D1E] sm:text-xl tablet:text-[24px] tablet:w-[728px] desktop:w-[639px] biglap:w-[1000px] mx-auto my-4 font-bold ">
              Enatega Technology Stack
            </h1>
          </section>
          <section ref={(el) => (sectionRefs.current[7] = el)}>
            <h3 className="font-inter text-[#0C0C0C] text-[14px] font-semibold sm:w-[300px]  mymob:w-[360px] myiphone:w-[400px]  tablet:w-[728px] desktop:w-[639px] biglap:w-[1000px] mx-auto ">
              Application program interface (API) server
            </h3>

            <ul className="list-disc font-[500] my-2 font-inter text-[17px] sm:w-[300px] px-8 mymob:w-[360px] myiphone:w-[400px]  tablet:w-[728px] desktop:w-[639px] biglap:w-[1000px] mx-auto  ">
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
                  href="https://nodejs.org/en/"
                  target="blank"
                  className="text-green-600"
                >
                  MongoDB
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
                  href="https://stripe.com/"
                  target="blank"
                  className="text-green-600"
                >
                  Stripe
                </a>
              </li>
              <li>
                <a
                  href="https://www.paypal.com/us/home"
                  target="blank"
                  className="text-green-600"
                >
                  Paypal
                </a>
              </li>
              <li>
                <a
                  href="https://nodemailer.com/"
                  target="blank"
                  className="text-green-600"
                >
                  Nodemailer
                </a>
              </li>
              <li>
                <a
                  href="https://firebase.google.com/"
                  target="blank"
                  className="text-green-600"
                >
                  Firebase
                  <span className="text-[#1A1D1E] text-[16px]">
                    (for push notifications on web)
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://graphql.org/"
                  target="blank"
                  className="text-green-600"
                >
                  Express GraphQL
                </a>
              </li>
              <li>
                <a
                  href="https://mongoosejs.com/"
                  target="blank"
                  className="text-green-600"
                >
                  Mongoose
                  <span className="text-[#1A1D1E] text-[16px]">
                    (for MongoDB)
                  </span>
                </a>
              </li>
            </ul>
          </section>

          {/* Web Dashboard */}
          <section ref={(el) => (sectionRefs.current[8] = el)}>
            <h3 className="font-inter text-[#0C0C0C] text-[14px] font-semibold tablet:w-[728px] desktop:w-[639px] biglap:w-[1000px] mx-auto">
              Web Dashboard
            </h3>
            <ul className="list-disc font-[500] my-2 font-inter text-[17px] sm:w-[300px] px-8 mymob:w-[360px] myiphone:w-[400px]  tablet:w-[728px] desktop:w-[639px] biglap:w-[1000px] mx-auto ">
              <li>
                <a
                  href="https://react.dev/"
                  target="blank"
                  className="text-green-600"
                >
                  React
                </a>
              </li>

              <li>
                <a
                  href="https://graphql.org/"
                  target="blank"
                  className="text-green-600"
                >
                  GraphQL
                </a>
              </li>
              <li>
                <a
                  href="https://getbootstrap.com/"
                  target="blank"
                  className="text-green-600"
                >
                  Bootstrap
                </a>
              </li>
              <li>
                <a
                  href="https://firebase.google.com/"
                  target="blank"
                  className="text-green-600"
                >
                  Firebase
                  <span className="text-[#1A1D1E] text-[16px]">
                    (for push notification on web)
                  </span>
                </a>
              </li>
            </ul>
          </section>

          {/*Mobile App*/}
          <section ref={(el) => (sectionRefs.current[9] = el)}>
            <h3 className="font-inter text-[#0C0C0C] text-[14px] font-semibold sm:w-[300px]  mymob:w-[360px] myiphone:w-[400px] tablet:w-[728px] desktop:w-[639px] biglap:w-[1000px] mx-auto">
              Mobile App
            </h3>

            <ul className="list-disc font-[500] my-2 font-inter text-[17px] sm:w-[300px] px-8 mymob:w-[360px] myiphone:w-[400px] tablet:w-[728px] desktop:w-[639px] biglap:w-[1000px] mx-auto">
              <li>
                <a
                  href="https://github.com/facebook/react-native"
                  target="blank"
                  className="text-green-600"
                >
                  ReactNative
                </a>
              </li>
              <li>
                <a
                  href="https://expo.dev/"
                  target="blank"
                  className="text-green-600"
                >
                  Expo
                </a>
              </li>

              <li>
                <a
                  href="https://graphql.org/"
                  target="blank"
                  className="text-green-600"
                >
                  GraphQL{" "}
                </a>
              </li>
              <li>
                <a
                  href="https://sentry.io/welcome/"
                  target="blank"
                  className="text-green-600"
                >
                  Sentry
                </a>
              </li>

              <li>
                <a
                  href="https://amplitude.com/"
                  target="blank"
                  className="text-green-600"
                >
                  Amplitude
                </a>
              </li>
            </ul>
          </section>

          {/* End Mobile */}

          {/*Rider App*/}
          <section ref={(el) => (sectionRefs.current[10] = el)}>
            <h3 className="font-inter text-[#0C0C0C] text-[14px] font-semibold sm:w-[300px]  mymob:w-[360px] myiphone:w-[400px] tablet:w-[728px] desktop:w-[639px] biglap:w-[1000px] mx-auto">
              Rider App
            </h3>

            <ul className="list-disc font-[500] my-2 font-inter text-[17px] sm:w-[300px] px-8 mymob:w-[360px] myiphone:w-[400px] tablet:w-[728px] desktop:w-[639px] biglap:w-[1000px] mx-auto">
              <li>
                <a
                  href="https://github.com/facebook/react-native"
                  target="blank"
                  className="text-green-600"
                >
                  ReactNative
                </a>
              </li>
              <li>
                <a
                  href="https://expo.dev/"
                  target="blank"
                  className="text-green-600"
                >
                  Expo
                </a>
              </li>

              <li>
                <a
                  href="https://graphql.org/"
                  target="blank"
                  className="text-green-600"
                >
                  GraphQL
                </a>
              </li>

              <li>
                <a
                  href="https://sentry.io/welcome/"
                  target="blank"
                  className="text-green-600"
                >
                  Sentry
                </a>
              </li>
            </ul>
          </section>

          {/*Restaurant App*/}
          <section ref={(el) => (sectionRefs.current[11] = el)}>
            <h3 className="font-inter text-[#0C0C0C] text-[14px] font-semibold sm:w-[300px]  mymob:w-[360px] myiphone:w-[400px] tablet:w-[728px] desktop:w-[639px] biglap:w-[1000px] mx-auto ">
              Restaurant App
            </h3>
            <ul className="list-disc font-[500] my-2 font-inter text-[17px] sm:w-[300px] px-8 mymob:w-[360px] myiphone:w-[400px] tablet:w-[728px] desktop:w-[639px] biglap:w-[1000px] mx-auto">
              <li>
                <a
                  href="https://github.com/facebook/react-native"
                  target="blank"
                  className="text-green-600"
                >
                  ReactNative
                </a>
              </li>
              <li>
                <a
                  href="https://expo.dev/"
                  target="blank"
                  className="text-green-600"
                >
                  Expo
                </a>
              </li>

              <li>
                <a
                  href="https://graphql.org/"
                  target="blank"
                  className="text-green-600"
                >
                  GraphQL
                </a>
              </li>

              <li>
                <a
                  href="https://sentry.io/welcome/"
                  target="blank"
                  className="text-green-600"
                >
                  Sentry
                </a>
              </li>
            </ul>
          </section>

          {/*Customer Web App*/}
          <section ref={(el) => (sectionRefs.current[12] = el)}>
            <h3 className="font-inter text-[#0C0C0C] text-[14px] font-semibold sm:w-[300px]  mymob:w-[360px] myiphone:w-[400px]  tablet:w-[728px] desktop:w-[639px] biglap:w-[1000px] mx-auto ">
              Customer Web App
            </h3>
            <ul className="list-disc font-[500] my-2 font-inter text-[17px] sm:w-[300px] px-8 mymob:w-[360px] myiphone:w-[400px] tablet:w-[728px] desktop:w-[639px] biglap:w-[1000px] mx-auto ">
              <li>
                <a
                  href="https://react.dev/"
                  target="blank"
                  className="text-green-600"
                >
                  React
                </a>
              </li>

              <li>
                <a
                  href="https://mui.com/"
                  target="blank"
                  className="text-green-600"
                >
                  Material UI
                </a>
              </li>

              <li>
                <a
                  href="https://graphql.org/"
                  target="blank"
                  className="text-green-600"
                >
                  GraphQL
                </a>
              </li>
              <li>
                <a
                  href="https://amplitude.com/"
                  target="blank"
                  className="text-green-600"
                >
                  Amplitude
                </a>
              </li>

              <li>
                <a
                  href="https://sentry.io/welcome/"
                  target="blank"
                  className="text-green-600"
                >
                  Sentry
                </a>
              </li>

              <li>
                <a
                  href="https://firebase.google.com/"
                  target="blank"
                  className="text-green-600"
                >
                  Firebase
                  <span className="text-[#1A1D1E] text-[16px]">
                    (for push notification on web)
                  </span>
                </a>
              </li>
            </ul>
          </section>
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
                  ? `border-l-2 border-[#42858d] text-[#42858d] px-2 py-2 cursor-pointer text-left biglap:py-6`
                  : `border-l-2 border-[#dbdbdb] text-[#1A1D1E] px-2 py-2 cursor-pointer text-left biglap:py-6`
              }
            >
              Customer Mobile/Web Application
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
              Restaurant Application
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
              Rider Application
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
              Admin Application
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
                  ? `border-l-2 border-[#42858d] text-[#42858d]  px-2 py-2 text-left cursor-pointer biglap:py-6`
                  : `border-l-2 border-[#dbdbdb] text-[#1A1D1E] px-2 py-2 text-left cursor-pointer biglap:py-6`
              }
            >
              Functionalities for better development experience:
            </button>
          </div>
          {/* end box 5 */}
          {/* box 6 */}
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
              What will you have in the Enatega Full App?
            </button>
          </div>
          {/* end box 6 */}
          {/* start box 7 */}
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
              Enatega Technology Stack
            </button>
          </div>
          {/* end box 7 */}

          {/* box 8 */}
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
              {" "}
              Application program interface (API) server:
            </button>
          </div>
          {/* end box 8 */}
          {/*  box 9 */}
          <div className="text-inter font-[500] ">
            <button
              onClick={() => {
                scrollToSection(8);
              }}
              className={
                activeTab === 8
                  ? `border-l-2  border-[#42858d] text-[#42858d]  px-2 py-2 text-left cursor-pointer biglap:py-6`
                  : `border-l-2 border-[#dbdbdb] text-[#1A1D1E] px-2 py-2 text-left cursor-pointer biglap:py-6`
              }
            >
              {" "}
              Web Dashboard
            </button>
          </div>
          {/* end box 9 */}
          {/* end box 10 */}
          <div className="text-inter font-[500] ">
            <button
              onClick={() => {
                scrollToSection(9);
              }}
              className={
                activeTab === 9
                  ? `border-l-2  border-[#42858d] text-[#42858d]  px-2 py-2 text-left cursor-pointer biglap:py-6`
                  : `border-l-2 border-[#dbdbdb] text-[#1A1D1E] px-2 py-2 text-left cursor-pointer biglap:py-6`
              }
            >
              {" "}
              Mobile App
            </button>
          </div>
          {/* end box 10 */}
          {/*  box11 */}
          <div className="text-inter font-[500] ">
            <button
              onClick={() => {
                scrollToSection(10);
              }}
              className={
                activeTab === 10
                  ? `border-l-2 border-[#42858d] text-[#42858d]  px-2 py-2 text-left cursor-pointer biglap:py-6`
                  : `border-l-2 border-[#dbdbdb] text-[#1A1D1E] px-2 py-2 text-left cursor-pointer biglap:py-6`
              }
            >
              {" "}
              Rider App
            </button>
          </div>
          {/* end box 11 */}
          {/*  box 11 */}
          <div className="text-inter font-[500] ">
            <button
              onClick={() => {
                scrollToSection(11);
              }}
              className={
                activeTab === 11
                  ? `border-l-2  border-[#42858d] text-[#42858d]  px-2 py-2 text-left cursor-pointer biglap:py-6`
                  : `border-l-2 border-[#dbdbdb] text-[#1A1D1E] px-2 py-2 text-left cursor-pointer biglap:py-6`
              }
            >
              Restaurant App
            </button>
          </div>
          {/* end box 12 */}
          {/*  box 13 */}
          <div className="text-inter font-[500]">
            <button
              onClick={() => {
                scrollToSection(12);
              }}
              className={
                activeTab === 12
                  ? `border-l-2  border-[#42858d] text-[#42858d] px-2 py-2 text-left cursor-pointer biglap:py-6`
                  : `border-l-2 border-[#dbdbdb] text-[#1A1D1E] px-2 py-2 text-left cursor-pointer biglap:py-6`
              }
            >
              Customer Web App
            </button>
          </div>
          {/* end box 13 */}
        </div>
      </div>
    </>
  );
}

export default Introduction;
