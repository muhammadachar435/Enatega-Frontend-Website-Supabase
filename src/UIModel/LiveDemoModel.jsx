import React, { useState } from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import styles from "../UIModel/Model.module.css";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import { FcAndroidOs } from "react-icons/fc";

function LiveDemoModel({ setopenModel }) {
  const [activeTab, setActiveTab] = useState("customer");

  return createPortal(
    <>
      <div
        className="fixed inset-0 bg-opacity-50 z-40 border bg-[rgba(50%,50%,50%,0.7)]"
        onClick={() => setopenModel(false)}
      ></div>

      <div className="fixed z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-[90%] sm:top-[58%] tablet:w-[80%] desktop:w-[70%] xll:w-full xll:max-w-[55%] tablet:top-[62%] desktop:top-[60%] sm:max-h-[75vh] tablet:h-[70vh] desktop:h-[400px] xll:h-full xll:max-h-[440px] overflow-y-auto rounded-xl bg-white biglap:h-[30vh]">
        <button
          onClick={() => setopenModel(false)}
          className="absolute top-2 sm:right-2 myiphone:right-3 myiphone:top-3 right-6 z-50 cursor-pointer font-bold text-black rounded"
        >
          <AiOutlineClose className="tablet:w-6 tablet:h-6" />
        </button>

        <ul className="grid grid-cols-2 tablet:grid-cols-3 place-items-center mx-auto sm:w-[97%] mt-10  text-xs gap-1 mb-4">
          <li>
            <NavLink
              to="#"
              onClick={() => setActiveTab("AdminWeb")}
              className={({ isActive }) =>
                activeTab === "AdminWeb"
                  ? `${styles.activeNav} font-inter tablet:text-xl`
                  : "font-inter tablet:text-xl"
              }
            >
              Admin Dashboard
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="#"
              onClick={() => setActiveTab("customer")}
              className={({ isActive }) =>
                activeTab === "customer"
                  ? `${styles.activeNav} font-inter tablet:text-xl`
                  : "font-inter tablet:text-xl"
              }
            >
              Customer App
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              onClick={() => setActiveTab("rider")}
              className={({ isActive }) =>
                activeTab === "rider"
                  ? `${styles.activeNav} font-inter tablet:text-xl`
                  : "font-inter tablet:text-xl"
              }
            >
              Rider App
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              onClick={() => setActiveTab("restaurant")}
              className={({ isActive }) =>
                activeTab === "restaurant"
                  ? `${styles.activeNav} font-inter tablet:text-xl`
                  : "font-inter tablet:text-xl"
              }
            >
              Restaurant App
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              onClick={() => setActiveTab("webApp")}
              className={({ isActive }) =>
                activeTab === "webApp"
                  ? `${styles.activeNav} font-inter tablet:text-xl`
                  : "font-inter tablet:text-xl"
              }
            >
              Web App
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              onClick={() => setActiveTab("server")}
              className={({ isActive }) =>
                activeTab === "server"
                  ? `${styles.activeNav} font-inter tablet:text-xl`
                  : "font-inter tablet:text-xl "
              }
            >
              Server
            </NavLink>
          </li>
        </ul>

        <div className="mx-auto desktop:mt-10 tablet:px-2 ">
          {activeTab === "AdminWeb" && (
            <div className="sm:mt-4  tablet:flex justify-between items-center tablet:space-x-4">
              <div className="flex tablet:hidden">
                <img
                  src="/Pictures/admindashbaird.jpg"
                  alt=""
                  className="sm:w-64 h-auto mx-auto z-0 desktop:w-72"
                />
              </div>
              <motion.div
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.2 }}
                className="w-[96%] mx-auto tablet:w-[350px] desktop:w-[450px] xll:w-[400px] mb-2 biglap:w-[600px] "
              >
                <p className="text-xl font-inter font-semibold px-1 biglap:text-3xl">
                  1- Admin Web Dashboard
                </p>
                <p className="text-slate-600 mt-4 px-1 biglap:text-xl">
                  Enatega’s Admin Web Dashboard helps the company manage its
                  entire food delivery system easily. It allows admins to
                  control restaurants, riders, and customer orders from one
                  place. The dashboard shows real-time updates for orders and
                  deliveries, making operations smooth.
                </p>
                <div className="sm:mt-5 flex items-center sm:w-54 sm:space-x-4 mymob:space-x-8 mx-auto mymob:mt-7 myiphone:mt-10 tablet:mt-6 tablet:w-60">
                  <span className="text-base font-inter flex border border-slate-300 sm:w-24 mymob:w-30 rounded-xl hover:scale-102">
                    <Link
                      to="https://apps.apple.com/us/app/enatega-multivendor/id1526488093"
                      target="blank"
                      className="flex space-x-2  px-2 py-1 mx-auto my-1 font-semibold"
                    >
                      <FaApple className="w-5 h-5" /> IOS
                    </Link>
                  </span>
                  <span className="text-base font-inter flex border border-slate-300  sm:w-24 mymob:w-30 tablet:w-30 rounded-xl hover:scale-102">
                    <Link
                      to="https://play.google.com/store/apps/details?id=com.enatega.multivendor&pli=1"
                      target="blank"
                      className="flex items-center space-x-2 px-2  py-1 tablet:space-x-4 mx-auto my-1 font-semibold"
                    >
                      <FcAndroidOs className="w-5 h-5" /> Android
                    </Link>
                  </span>
                </div>
              </motion.div>
              <div className="sm:hidden tablet:flex">
                <img
                  src="/Pictures/admindashbaird.jpg"
                  alt=""
                  className="sm:w-64 h-auto mx-auto z-0 desktop:w-72 biglap:w-96"
                />
              </div>
            </div>
          )}

          {/* box 2 */}
          {activeTab === "customer" && (
            <div className="sm:mt-4  tablet:flex justify-between items-center tablet:space-x-4">
              <div className="sm:flex tablet:hidden">
                <img
                  src="/Pictures/Customer-App.jpg"
                  alt=""
                  className="sm:w-64 h-auto mx-auto z-0 desktop:w-72"
                />
              </div>
              <motion.div
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.2 }}
                className=" w-[96%] mx-auto tablet:w-[350px] desktop:w-[450px] xll:w-[400px] mb-2 biglap:w-[600px]"
              >
                <p className="text-xl font-inter font-semibold px-1 biglap:text-3xl">
                  2- Customer App
                </p>
                <p className="text-slate-600 mt-4 px-1 biglap:text-xl">
                  Enatega’s Customer App allows users to order food easily from
                  nearby restaurants. Customers can browse menus, place orders,
                  and track delivery in real time. The app has a simple design
                  for quick navigation and secure payments. It makes food
                  ordering fast, convenient, and reliable for users.
                </p>
                <div className="sm:mt-5 flex items-center sm:w-54 sm:space-x-4 mymob:space-x-8 mx-auto mymob:mt-7 myiphone:mt-10 tablet:mt-6 tablet:w-60">
                  <span className="text-base font-inter flex border border-slate-300 sm:w-24 mymob:w-30 rounded-xl hover:scale-102">
                    <Link
                      to="https://apps.apple.com/us/app/enatega-multivendor/id1526488093"
                      target="blank"
                      className="flex space-x-2  px-2 py-1 mx-auto my-1 font-semibold"
                    >
                      <FaApple className="w-5 h-5" /> IOS
                    </Link>
                  </span>
                  <span className="text-base font-inter flex border border-slate-300  sm:w-24 mymob:w-30 tablet:w-30 rounded-xl hover:scale-102">
                    <Link
                      to="https://play.google.com/store/apps/details?id=com.enatega.multivendor&pli=1"
                      target="blank"
                      className="flex items-center space-x-2 px-2  py-1 tablet:space-x-4 mx-auto my-1 font-semibold"
                    >
                      <FcAndroidOs className="w-5 h-5" /> Android
                    </Link>
                  </span>
                </div>
              </motion.div>
              <div className="hidden tablet:flex">
                <img
                  src="/Pictures/Customer-App.jpg"
                  alt=""
                  className="sm:w-64 h-auto mx-auto z-0 desktop:w-72 biglap:w-96"
                />
              </div>
            </div>
          )}
          {/* box 3 */}
          {activeTab === "rider" && (
            <div className="sm:mt-4  tablet:flex justify-between items-center tablet:space-x-4">
              <div className="sm:flex tablet:hidden">
                <img
                  src="/Pictures/rider-app.jpg"
                  alt=""
                  className="sm:w-64 h-auto mx-auto z-0 desktop:w-72"
                />
              </div>
              <motion.div
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.2 }}
                className=" w-[96%] mx-auto tablet:w-[350px] desktop:w-[450px] xll:w-[400px] mb-2 biglap:w-[600px]"
              >
                <p className="text-xl font-inter font-semibold px-1 biglap:text-3xl">
                  3- Rider App
                </p>
                <p className="text-slate-600 mt-4 px-1 biglap:text-xl">
                  Enatega’s Rider App helps delivery riders manage their orders
                  easily. Riders receive order details, pick-up, and delivery
                  locations in real time. The app shows the best route for fast
                  delivery and updates order status quickly. It makes the
                  delivery process smooth and organized for riders.
                </p>
                <div className="sm:mt-5 flex items-center sm:w-54 sm:space-x-4 mymob:space-x-8 mx-auto mymob:mt-7 myiphone:mt-10 tablet:mt-6 tablet:w-60">
                  <span className="text-base font-inter flex border border-slate-300 sm:w-24 mymob:w-30 rounded-xl hover:scale-102">
                    <Link
                      to="https://apps.apple.com/us/app/enatega-multivendor/id1526488093"
                      target="blank"
                      className="flex space-x-2  px-2 py-1 mx-auto my-1 font-semibold"
                    >
                      <FaApple className="w-5 h-5" /> IOS
                    </Link>
                  </span>
                  <span className="text-base font-inter flex border border-slate-300  sm:w-24 mymob:w-30 tablet:w-30 rounded-xl hover:scale-102">
                    <Link
                      to="https://play.google.com/store/apps/details?id=com.enatega.multivendor&pli=1"
                      target="blank"
                      className="flex items-center space-x-2 px-2  py-1 tablet:space-x-4 mx-auto my-1 font-semibold"
                    >
                      <FcAndroidOs className="w-5 h-5" /> Android
                    </Link>
                  </span>
                </div>
              </motion.div>
              <div className="hidden tablet:flex">
                <img
                  src="/Pictures/rider-app.jpg"
                  alt=""
                  className="sm:w-64 h-auto mx-auto z-0 desktop:w-72 biglap:w-96"
                />
              </div>
            </div>
          )}
          {/* box 4 */}
          {activeTab === "restaurant" && (
            <div className="sm:mt-4  tablet:flex justify-between items-center tablet:space-x-4">
              <div className="sm:flex tablet:hidden">
                <img
                  src="/Pictures/Restaurant-app-1.jpg"
                  alt=""
                  className="sm:w-64 h-auto mx-auto z-0 desktop:w-72"
                />
              </div>
              <motion.div
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.2 }}
                className=" w-[96%] mx-auto tablet:w-[350px] desktop:w-[450px] xll:w-[400px] mb-2 biglap:w-[600px]"
              >
                <p className="text-xl font-inter font-semibold px-1 biglap:text-3xl">
                  4- Restaurant App
                </p>
                <p className="text-slate-600 mt-4 px-1 biglap:text-xl">
                  Enatega’s Restaurant App helps restaurants manage their orders
                  easily. They can see new orders, update order status, and
                  manage their menu from the app. It shows real-time order
                  details to prepare food on time. The app makes restaurant
                  operations smooth and efficient.
                </p>
                <div className="sm:mt-5 flex items-center sm:w-54 sm:space-x-4 mymob:space-x-8 mx-auto mymob:mt-7 myiphone:mt-10 tablet:mt-6 tablet:w-60">
                  <span className="text-base font-inter flex border border-slate-300 sm:w-24 mymob:w-30 rounded-xl hover:scale-102">
                    <Link
                      to="https://apps.apple.com/us/app/enatega-multivendor/id1526488093"
                      target="blank"
                      className="flex space-x-2  px-2 py-1 mx-auto my-1 font-semibold"
                    >
                      <FaApple className="w-5 h-5" /> IOS
                    </Link>
                  </span>
                  <span className="text-base font-inter flex border border-slate-300  sm:w-24 mymob:w-30 tablet:w-30 rounded-xl hover:scale-102">
                    <Link
                      to="https://play.google.com/store/apps/details?id=com.enatega.multivendor&pli=1"
                      target="blank"
                      className="flex items-center space-x-2 px-2  py-1 tablet:space-x-4 mx-auto my-1 font-semibold"
                    >
                      <FcAndroidOs className="w-5 h-5" /> Android
                    </Link>
                  </span>
                </div>
              </motion.div>
              <div className="hidden tablet:flex">
                <img
                  src="/Pictures/Restaurant-app-1.jpg"
                  alt=""
                  className="sm:w-64 h-auto mx-auto z-0 desktop:w-72 biglap:w-96"
                />
              </div>
            </div>
          )}

          {/* box 5 */}
          {activeTab === "webApp" && (
            <div className="sm:mt-4  tablet:flex justify-between items-center tablet:space-x-4">
              <div className="sm:flex tablet:hidden">
                <img
                  src="/Pictures/Web-App.jpg"
                  alt=""
                  className="sm:w-64 h-auto mx-auto z-0 desktop:w-72"
                />
              </div>
              <motion.div
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.2 }}
                className="w-[96%] mx-auto tablet:w-[350px] desktop:w-[450px] xll:w-[400px] biglap:w-[600px] mb-2 "
              >
                <p className="text-xl font-inter font-semibold px-1 biglap:text-3xl">
                  5- Web App
                </p>
                <p className="text-slate-600 mt-4 px-1 biglap:text-xl">
                  Enatega’s Web App allows customers to order food online using
                  their browser. They can view restaurants, browse menus, and
                  place orders easily without downloading an app. The web app
                  shows real-time order tracking and updates.
                </p>
                <div className="sm:mt-5 flex items-center sm:w-54 sm:space-x-4 mymob:space-x-8 mx-auto mymob:mt-7 myiphone:mt-10 tablet:mt-6 tablet:w-60">
                  <span className="text-base font-inter flex border border-slate-300 sm:w-24 mymob:w-30 rounded-xl hover:scale-102">
                    <Link
                      to="https://apps.apple.com/us/app/enatega-multivendor/id1526488093"
                      target="blank"
                      className="flex space-x-2  px-2 py-1 mx-auto my-1 font-semibold"
                    >
                      <FaApple className="w-5 h-5" /> IOS
                    </Link>
                  </span>
                  <span className="text-base font-inter flex border border-slate-300  sm:w-24 mymob:w-30 tablet:w-30 rounded-xl hover:scale-102">
                    <Link
                      to="https://play.google.com/store/apps/details?id=com.enatega.multivendor&pli=1"
                      target="blank"
                      className="flex items-center space-x-2 px-2  py-1 tablet:space-x-4 mx-auto my-1 font-semibold"
                    >
                      <FcAndroidOs className="w-5 h-5" /> Android
                    </Link>
                  </span>
                </div>
              </motion.div>
              <div className="hidden tablet:flex">
                <img
                  src="/Pictures/Web-App.jpg"
                  alt=""
                  className="sm:w-64 h-auto mx-auto z-0 desktop:w-72 biglap:w-96"
                />
              </div>
            </div>
          )}

          {/* box 6 */}
          {activeTab === "server" && (
            <div className="sm:mt-4  tablet:flex justify-between items-center tablet:space-x-4">
              <div className="sm:flex tablet:hidden">
                <img
                  src="/Pictures/Server.png"
                  alt=""
                  className="sm:w-64 h-auto mx-auto z-0 desktop:w-72"
                />
              </div>
              <motion.div
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.2 }}
                className=" w-[96%] mx-auto tablet:w-[350px] desktop:w-[450px] xll:w-[400px] mb-2 biglap:w-[600px] "
              >
                <p className="text-xl font-inter font-semibold px-1 biglap:text-3xl">
                  6- Server
                </p>
                <p className="text-slate-600 mt-4 px-1 biglap:text-xl">
                  Enatega’s Server manages the entire food delivery system in
                  the backend. It handles data for orders, customers,
                  restaurants, and riders securely. The server ensures fast
                  communication between all apps with real-time updates. It
                  keeps the system running smoothly and efficiently.
                </p>
                <div className="sm:mt-5 flex items-center sm:w-54 sm:space-x-4 mymob:space-x-8 mx-auto mymob:mt-7 myiphone:mt-10 tablet:mt-6 tablet:w-60">
                  <span className="text-base font-inter flex border border-slate-300 sm:w-24 mymob:w-30 rounded-xl hover:scale-102">
                    <Link
                      to="https://apps.apple.com/us/app/enatega-multivendor/id1526488093"
                      target="blank"
                      className="flex space-x-2  px-2 py-1 mx-auto my-1 font-semibold"
                    >
                      <FaApple className="w-5 h-5" /> IOS
                    </Link>
                  </span>
                  <span className="text-base font-inter flex border border-slate-300  sm:w-24 mymob:w-30 tablet:w-30 rounded-xl hover:scale-102">
                    <Link
                      to="https://play.google.com/store/apps/details?id=com.enatega.multivendor&pli=1"
                      target="blank"
                      className="flex items-center space-x-2 px-2  py-1 tablet:space-x-4 mx-auto my-1 font-semibold"
                    >
                      <FcAndroidOs className="w-5 h-5" /> Android
                    </Link>
                  </span>
                </div>
              </motion.div>
              <div className="hidden tablet:flex">
                <img
                  src="/Pictures/Server.png"
                  alt=""
                  className="sm:w-64 h-auto mx-auto z-0 desktop:w-72 biglap:w-96"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>,
    document.getElementById("LiveDemo")
  );
}

export default LiveDemoModel;
