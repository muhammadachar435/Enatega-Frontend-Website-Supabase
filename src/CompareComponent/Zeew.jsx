import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SidebarData from "../Component/Sidebardata";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import {
  IoMdMenu,
  IoMdClose,
  IoIosArrowDown,
  IoIosArrowUp,
} from "react-icons/io";
import {
  TiArrowSortedDown,
  TiSocialFacebook,
  TiSocialLinkedin,
} from "react-icons/ti";
import "react-phone-input-2/lib/style.css";
import { FaInstagram } from "react-icons/fa";

// Zeew
function Zeew() {
  // useState
  const [sidebar, setSidebar] = useState(false);
  const [caseStudiesbar, setCaseStudies] = useState(false);
  const [useCasebar, setUseCase] = useState(false);
  const [caseshow, setcaseshow] = useState(false);
  const [boxShow, setBoxShow] = useState(false);

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    //Navbar
    <>
      <nav className=" sm:h-[105px] desktop:h-[135px]  border-b-[0.3px] bg-white border-b-gray-300 fixed w-full top-0 left-0  right-0 z-[9999]">
        <div
          className="bg-[#7c6ce4] sm:px-2 sm:h-[60px] desktop:h-[75px] flex justify-between items-center font-inter font-extrabold  tablet:px-4"
          style={{ backgroundImage: `url("/Pictures/navbackground.jpg")` }}
          onMouseEnter={() => {
            setcaseshow(false);
            setBoxShow(false);
          }}
        >
          <div className="flex flex-col leading-4 sm:text-sm desktop:text-2xl  uppercase pt-[6px]">
            <div>
              <span className="">
                <span className="text-white"> Get</span>{" "}
                <span className="bg-[#1a7682] rounded-xs  text-center text-white mx-[2px] ">
                  20%
                </span>
                <span className="bg-[#1a7682] rounded-xs  text-white">
                  {" "}
                  OFF
                </span>
              </span>
            </div>
            <div className="">
              <span className=" text-[#685fb7]  sm:text-xl desktop:text-2xl font-sans text-blue-outline text-4xl p-0 block">
                ENATEGA
              </span>
            </div>
          </div>
          {/* Limited Offer */}
          <div className="relative flex justify-start  items-center text-[8px] border border-white border-t-0   ring-b-white ring-l ring-r sm:h-7 mymob:h-8 desktop:mt-1 tablet:h-[30px] desktop:h-12">
            <span className=" absolute sm:top-[-4px] tablet:top-[-7px] desktop:top-[-11px]  left-[8px] text-[#8d7fe7] tracking-widest block sm:text-[6px] sm:w-[72px] tablet:text-[10px] tablet:w-[120px] desktop:text-[14px] desktop:w-[166px] font-extralight font-zilla text-blue-outline">
              LIMITED TIME OFFER
            </span>
            <span className="text-white sm:text-[10px] tablet:text-sm tablet:font-bold desktop:text-2xl sm:px-1 font-sans font-semibold tablet:px-6">
              OFFER VALID TILL{" "}
              <span className="text-[#7369b0] text-white-outline sm:text-[10px] sm:font-light tablet:text-sm tablet:font-bold  desktop:text-2xl font-sans desktop:font-extrabold ">
                JULY
              </span>
            </span>
            <div className="h-[1px] w-[6px] bg-white absolute top-0 left-0"></div>
            <div className="h-[1px] sm:w-[30px] mymob:w-[34px] myiphone:w-[45px] tablet:w-[74px] desktop:w-[140px] iox:w-[142px] bg-white absolute top-0 right-0"></div>
          </div>
          {/* End Limited Offer... */}
          <span className="sm:text-[8px] sm:w-20 sm:py-1 mymob:py-[6px] tablet:w-auto sm:text-center  tablet:text-base hover:shadow-2xl bg-white tablet:py-[4.5px] tablet:px-[2px] desktop:py-[8px] desktop:mt-2 rounded-md desktop:border-l-[2px] desktop:border-r-[2px] desktop:border-b-[2px] desktop:border-[#bdc1c3]">
            <Link
              to="/contactus"
              className="text-black font-semibold tablet:p-[3px]  iox:px-2"
            >
              Get This Offer Now!
            </Link>
          </span>
        </div>

        <div className="text-sm font-normal sm:px-2 sm:py-0 tablet:px-4 py-1 mt-2 z-[9999] bg-white">
          <ul className="flex justify-between items-center text-[8px] font-normal font-sans text-[1A1D1E]">
            <span>
              <Link to="/" className=" flex space-x-1 items-center ">
                <img
                  loading="lazy"
                  src="/Pictures/Enatega-Logo.jpg"
                  alt="Entega Logo"
                  className=" object-full sm:w-[110px] tablet:w-[160px] h-auto"
                />
              </Link>
            </span>

            <span className=" hidden desktop:flex desktop:space-x-3 iox:space-x-4  items-center mt-1 font-inter font-[400] text-[15px]">
              <li>
                {caseshow ? (
                  <>
                    {" "}
                    <Link
                      className="hover:text-blue-600 text-[#1A1D1E]  flex items-center hover:transform hover:transition-all hover:duration-300"
                      onMouseEnter={() => {
                        setcaseshow(true);
                        setBoxShow(false);
                      }}
                    >
                      Case Studies&nbsp; <IoIosArrowUp className="mt-[2px]" />
                    </Link>
                  </>
                ) : (
                  <>
                    {" "}
                    <Link
                      className="hover:text-blue-600 text-[#1A1D1E]  flex items-center hover:transform hover:transition-all hover:duration-300"
                      onMouseEnter={() => {
                        setcaseshow(true);
                        setBoxShow(false);
                      }}
                    >
                      Case Studies&nbsp; <IoIosArrowDown className="mt-[2px]" />
                    </Link>
                  </>
                )}
              </li>

              <li>
                {boxShow ? (
                  <>
                    <Link
                      className="hover:text-blue-600 text-[#1A1D1E]   flex items-center hover:transform hover:transition-all hover:duration-300"
                      onMouseEnter={() => {
                        setBoxShow(true);
                        setcaseshow(false);
                      }}
                    >
                      Use Cases&nbsp; <IoIosArrowUp className="mt-[2px]" />
                    </Link>{" "}
                  </>
                ) : (
                  <>
                    <Link
                      className="hover:text-blue-600 text-[#1A1D1E]  flex items-center hover:transform hover:transition-all hover:duration-300"
                      onMouseEnter={() => {
                        setBoxShow(true);
                        setcaseshow(false);
                      }}
                    >
                      Use Cases&nbsp; <IoIosArrowDown className="mt-[2px]" />
                    </Link>
                  </>
                )}
              </li>
              <li>
                <Link
                  to="/documentation"
                  className="hover:text-blue-600 text-[#1A1D1E]   hover:transform hover:transition-all hover:duration-300"
                  onMouseEnter={() => {
                    setcaseshow(false);
                    setBoxShow(false);
                  }}
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="hover:text-blue-600 text-[#1A1D1E]  hover:transform hover:transition-all hover:duration-300"
                  onMouseEnter={() => {
                    setcaseshow(false);
                    setBoxShow(false);
                  }}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  className="hover:text-blue-600 text-[#1A1D1E]  hover:transform hover:transition-all hover:duration-300"
                  onMouseEnter={() => {
                    setcaseshow(false);
                    setBoxShow(false);
                  }}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/#pricing"
                  className="hover:text-blue-600 text-[#1A1D1E]  hover:transform hover:transition-all hover:duration-300"
                  onMouseEnter={() => {
                    setcaseshow(false);
                    setBoxShow(false);
                  }}
                >
                  Pricing
                </Link>
              </li>
            </span>

            <span>
              <Link
                to="/contactus"
                className=" hidden desktop:flex border-[2px] border-[#6357aa] font-inter border-t-[#9688ee] text-white text-sm font-bold sm:px-2 tablet:px-4 py-[9px] rounded-[8px] shadow-sm hover:duration-200 transition-all"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #7666e2 0%, #7666e2 100%)",
                }}
              >
                Schedule a Call Now
              </Link>
            </span>
            <span
              onClick={() => {
                setSidebar(!sidebar);
              }}
              className="sm:flex desktop:hidden"
            >
              <IoMdMenu className="h-8 w-10" />
            </span>
          </ul>
        </div>
      </nav>

      {/* Sidebar fixed */}
      {sidebar && (
        <div
          className={`sm:flex desktop:hidden bg-white text-black  border-r-2  border-r-slate-300 shadow-md 
       ${
         sidebar ? "left-0" : "left-[-100%]"
       }  fixed top-[0px] overflow-y-scroll h-screen mymob:pb-18 font-inter  transition-all duration-300 ease-in-out z-[9999] flex flex-col  w-full`}
        >
          <div className="flex justify-between  items-center ml-2 px-2 mt-4 ">
            <span>
              <Link to="/" className=" flex space-x-1 items-center ">
                <img
                  loading="lazy"
                  src="/Pictures/Enatega-Logo.jpg"
                  alt="Entega Logo"
                  className=" object-full w-[130px] h-auto"
                />
              </Link>
            </span>
            <span
              onClick={() => {
                setSidebar(false);
              }}
            >
              <IoMdClose className="w-8 h-6 " />
            </span>
          </div>

          <ul className="flex flex-col mt-8 space-y-0 w-[98%]">
            {SidebarData.map((item, index) => {
              const isActive = location.pathname === item.path;

              return (
                <li key={index} className="w-full">
                  {index === 0 ? (
                    <>
                      <div
                        className={`flex items-center border-b border-[#daacca] m-2 ml-2 sm:text-lg tablet:text-xl font-semibold font-Inter  hover:transform active:bg-blue-500 active:transition-all active:duration-1000 duration-200  py-1 px-4 ${
                          sidebar ? "justify-start" : "justify-center"
                        } ${
                          isActive
                            ? "active:text-blue-500"
                            : "active:text-slate-500"
                        }`}
                        onClick={() => {
                          setCaseStudies(!caseStudiesbar);
                          setUseCase(false);
                        }}
                      >
                        <span className="font-bold">{item.title}</span>
                        <span className="mx-[6px] font-bold">
                          <TiArrowSortedDown />
                        </span>
                      </div>
                    </>
                  ) : index === 7 ? (
                    <>
                      <div
                        className={`flex items-center border-b border-[#daacca] m-2 ml-2 sm:text-lg tablet:text-xl font-semibold font-Roboto  hover:transform active:bg-blue-500 active:transition-all active:duration-1000 duration-200  py-1 px-4 ${
                          sidebar ? "justify-start" : "justify-center"
                        } ${
                          isActive
                            ? "active:text-blue-500"
                            : "active:text-slate-500"
                        }`}
                        onClick={() => {
                          setUseCase(!useCasebar);
                          setCaseStudies(false);
                        }}
                      >
                        <span className="font-bold">{item.title}</span>
                        <span className="mx-[6px] font-bold">
                          <TiArrowSortedDown />
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      {index >= 20 && (
                        <Link
                          to={item.path}
                          className={`flex items-center border-b sm:text-lg tablet:text-xl border-[#daacca] m-2  hover:transform active:bg-blue-500 active:transition-all active:duration-1000 duration-200  py-1 px-4 ${
                            sidebar ? "justify-start" : "justify-center"
                          } ${
                            isActive
                              ? "active:text-blue-500"
                              : "active:text-slate-500"
                          }`}
                          onClick={() => setSidebar(false)} // optional: close on menu click
                        >
                          {sidebar && (
                            <span className="ml-0  font-bold font-Inter ">
                              {item.title === "Pricing" ? (
                                <button
                                  onClick={() => {
                                    scrollToSection(0);
                                  }}
                                >
                                  {item.title}
                                </button>
                              ) : (
                                <>{item.title}</>
                              )}
                            </span>
                          )}
                        </Link>
                      )}
                    </>
                  )}
                  {useCasebar && index >= 8 && index <= 19 && (
                    <Link
                      to={item.path}
                      className={`flex items-center border-b border-[#daacca] m-2  hover:transform active:bg-blue-500 active:transition-all active:duration-1000 duration-200  py-1 px-6 ${
                        sidebar ? "justify-start" : "justify-center"
                      } ${
                        isActive
                          ? "active:text-blue-500"
                          : "active:text-slate-500"
                      }`}
                      onClick={() => setSidebar(false)} // optional: close on menu click
                    >
                      {sidebar && (
                        <span className="ml-0 text-sm font-Inter font-bold">
                          {item.title}
                        </span>
                      )}
                    </Link>
                  )}
                  {caseStudiesbar && index >= 1 && index <= 6 && (
                    <Link
                      to={item.path}
                      className={`flex items-center border-b border-[#daacca] m-2  hover:transform active:bg-blue-500 active:transition-all active:duration-1000 duration-200  py-1 px-6 ${
                        sidebar ? "justify-start" : "justify-center"
                      } ${
                        isActive
                          ? "active:text-blue-500"
                          : "active:text-slate-500"
                      }`}
                      onClick={() => setSidebar(false)} // optional: close on menu click
                    >
                      {sidebar && (
                        <span className="ml-0 text-sm font-Inter font-bold">
                          {item.title}
                        </span>
                      )}
                    </Link>
                  )}
                </li>
              );
            })}
            <div className="shadow-lg drop-shadow-xl font-semibold  rounded-md bg-[#7461e5] text-center font-inter transition-all duration-200  mx-4  p-1 mt-4 ">
              <Link to="/contactus" className="text-white ">
                Schedule a Call Now
              </Link>
            </div>
          </ul>
        </div>
      )}
      {/* UsecaseStudies Start Box */}
      {caseshow && (
        <div
          className="hidden fixed desktop:flex w-[350px] h-[350px] bg-white z-[9999] rounded-2xl border-[0.1px] border-gray-300 top-35 desktop:left-36 xll:left-76 biglap:left-[900px]"
          onMouseLeave={() => {
            setcaseshow(false); // close when mouse leaves
          }}
        >
          <div className="relative m-1 p-2 ">
            {/* box1 */}
            <div className="flex items-center space-x-4 mb-3">
              <div>
                <img
                  loading="lazy"
                  src="/Pictures/caseStudiesStar.png"
                  alt=""
                  className=""
                />
              </div>
              <div>
                <Link
                  to="/yalladelievery"
                  className="font-inter text-base font-bold hover:text-sky-600 duration-300"
                >
                  Yalla Delivery
                </Link>
                <p className="text-xs text-gray-400 font-sans">
                  Food and Grocery,in one Place
                </p>
              </div>
            </div>

            {/* end box1 */}
            {/* box2 */}
            <div className="flex items-center space-x-4 mb-3">
              <div>
                <img
                  loading="lazy"
                  src="/Pictures/caseStudiesStar.png"
                  alt=""
                  className=""
                />
              </div>
              <div>
                <Link
                  to="/stylizenow"
                  className="font-inter text-base font-bold hover:text-sky-600 duration-300"
                >
                  StylizeNOW
                </Link>
                <p className="text-xs text-gray-400 font-sans">
                  Platform that Provides on-demand mobile hair
                </p>
              </div>
            </div>

            {/* end box2 */}
            {/* box3 */}
            <div className="flex items-center space-x-4 mb-3">
              <div>
                <img
                  loading="lazy"
                  src="/Pictures/caseStudiesStar.png"
                  alt=""
                  className="object-fit"
                />
              </div>
              <div>
                <Link
                  to="/easyEats"
                  className="font-inter text-base font-bold hover:text-sky-600 duration-300"
                >
                  Easy Eats
                </Link>
                <p className="text-xs text-gray-400 font-sans">
                  Campus food delivery Company
                </p>
              </div>
            </div>

            {/* end box3 */}
            {/* box4 */}
            <div className="flex items-center space-x-4 mb-3">
              <div>
                <img
                  loading="lazy"
                  src="/Pictures/caseStudiesStar.png"
                  alt=""
                  className=""
                />
              </div>
              <div>
                <Link
                  to="/vivyied"
                  className="font-inter text-base font-bold hover:text-sky-600 duration-300"
                >
                  Vinifyed
                </Link>
                <p className="text-xs text-gray-400 font-sans">
                  Wine retail and delivery bussiness
                </p>
              </div>
            </div>

            {/* end box4 */}
            {/* box5 */}
            <div className="flex items-center space-x-4 mb-3">
              <div>
                <img
                  loading="lazy"
                  src="/Pictures/caseStudiesStar.png"
                  alt=""
                  className=""
                />
              </div>
              <div className="flex flex-col">
                <Link
                  to="/snapdelievery"
                  className="font-inter text-base font-bold hover:text-sky-600 duration-300"
                >
                  Snap Delivery
                </Link>
                <p className="text-xs text-gray-400 font-sans  w-60">
                  Snap Delivered is a food delivery platform powered by Enatega
                </p>
              </div>
            </div>

            {/* end box5 */}
            {/* box6 */}
            <div className="flex items-center space-x-4 mb-3">
              <div>
                <img
                  loading="lazy"
                  src="/Pictures/caseStudiesStar.png"
                  alt=""
                  className=""
                />
              </div>
              <div>
                <Link
                  to="/borkuDelievery"
                  className="font-inter text-base font-bold hover:text-sky-600 duration-300"
                >
                  Borku Delivery
                </Link>
                <p className="text-xs text-gray-400 font-sans">
                  Bringing African Cuisine to Food Delivery
                </p>
              </div>
            </div>

            {/* end box6 */}
          </div>
        </div>
      )}
      {/* UsecaseStudies End Box */}
      {/* Usecase Start Box 2nd */}
      {boxShow && (
        <div
          className="hidden fixed desktop:flex w-[1000px] h-[260px] bg-white z-[9999] rounded-2xl border-[0.1px] border-gray-300 top-35 desktop:left-3 xll:left-32 biglap:left-[700px]"
          onMouseLeave={() => {
            setBoxShow(false);
          }}
        >
          <div className="relative p-2 m-1 w-[318px]">
            {/* start 4 boxes */}
            <div className="m-2 border-r  border-slate-300 pr-1">
              {/* box1 */}
              <div className="flex items-center space-x-4 mb-8">
                <div>
                  <img
                    loading="lazy"
                    src="/Pictures/gift.png"
                    alt=""
                    className="object-fit w-[23px] h-[22px] "
                  />
                </div>
                <div>
                  <Link
                    to="/giftdelievery"
                    className="font-inter text-base font-bold hover:text-sky-600 duration-300"
                  >
                    Gift Delivery Solution
                  </Link>
                </div>
              </div>

              {/* end box1 */}
              {/* box2 */}
              <div className="flex items-center space-x-4 mb-8">
                <div>
                  <img
                    loading="lazy"
                    src="/Pictures/liquor.png"
                    alt=""
                    className="object-fit w-[23px] h-[22px] "
                  />
                </div>
                <div>
                  <Link
                    to="/liquorDelievery"
                    className="font-inter text-base font-bold hover:text-sky-600 duration-300"
                  >
                    Liquor Delivery Solution
                  </Link>
                </div>
              </div>

              {/* end box2 */}
              {/* box3 */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="">
                  <img
                    loading="lazy"
                    src="/Pictures/food.png"
                    alt=""
                    className="object-fit w-[23px] h-[22px] "
                  />
                </div>
                <div>
                  <Link
                    to="/fooddelievery"
                    className="font-inter text-base font-bold hover:text-sky-600 duration-300"
                  >
                    Food and Beverge Solution
                  </Link>
                </div>
              </div>

              {/* end box3 */}
              {/* box4 */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="">
                  <img
                    loading="lazy"
                    src="/Pictures/Laundry.png"
                    alt=""
                    className="object-fit w-[23px] h-[22px]  "
                  />
                </div>
                <div>
                  <Link
                    to="/laundrydelievery"
                    className="font-inter text-base font-bold hover:text-sky-600 duration-300"
                  >
                    Laundry on-Demand Services Solution
                  </Link>
                </div>
              </div>

              {/* end box4 */}
            </div>
            {/* end 4 boxes */}
          </div>
          {/* start 4 box 2nd */}
          <div className="relative m-1 p-2 w-[330px]">
            {/* start 4 boxes */}
            <div className="m-2 pr-1 border-r  border-slate-300">
              {/* box1 */}
              <div className="flex items-center space-x-4 mb-8">
                <div>
                  <img
                    loading="lazy"
                    src="/Pictures/milk.png"
                    alt=""
                    className="object-fit w-[23px] h-[22px]"
                  />
                </div>
                <div>
                  <Link
                    to="/milkDelievery"
                    className="font-inter text-base font-bold hover:text-sky-600 duration-300"
                  >
                    Milk Delivery Solution
                  </Link>
                </div>
              </div>

              {/* end box1 */}
              {/* box2 */}
              <div className="flex items-center space-x-4 mb-8">
                <div>
                  <img
                    loading="lazy"
                    src="/Pictures/flower.png"
                    alt=""
                    className="object-fit w-[23px] h-[22px]"
                  />
                </div>
                <div>
                  <Link
                    to="/flowerdelivery"
                    className="font-inter text-base font-bold hover:text-sky-600 duration-300"
                  >
                    FLower Delivery Solution
                  </Link>
                </div>
              </div>

              {/* end box2 */}
              {/* box3 */}
              <div className="flex items-center space-x-4 mb-8">
                <div>
                  <img
                    loading="lazy"
                    src="/Pictures/courier.png"
                    alt=""
                    className="object-fit w-[23px] h-[22px]"
                  />
                </div>
                <div>
                  <Link
                    to="/Courierdelievery"
                    className="font-inter text-base font-bold hover:text-sky-600 duration-300"
                  >
                    Courier Delivery Solution
                  </Link>
                </div>
              </div>

              {/* end box3 */}
              {/* box4 */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-[23px] h-[22px]">
                  <img
                    loading="lazy"
                    src="/Pictures/RoadSide.png"
                    alt=""
                    className="object-fit w-[21px] h-[23px]"
                  />
                </div>
                <div>
                  <Link
                    to="/roadSide"
                    className="font-inter text-base font-bold hover:text-sky-600 duration-300"
                  >
                        RoadSide Assistance Services Solution
                  </Link>
                </div>
              </div>

              {/* end box4 */}
            </div>
            {/* end 4 boxes */}
          </div>
          {/* 3rd 4th boxes */}

          <div className="relative m-1 p-2 w-[330px] ">
            {/* start 4 boxes */}
            <div className="m-2 pr-1 ">
              {/* box1 */}
              <div className="flex items-center space-x-2 mb-8">
                <div>
                  <img
                    loading="lazy"
                    src="/Pictures/grocery.png"
                    alt=""
                    className="object-fit w-[23px] h-[22px]"
                  />
                </div>
                <div>
                  <Link
                    to="/groceryDelievery"
                    className="font-inter text-base font-bold hover:text-sky-600 duration-300"
                  >
                    Grocery Delivery Solution
                  </Link>
                </div>
              </div>

              {/* end box1 */}
              {/* box2 */}
              <div className="flex items-center space-x-2 mb-8">
                <div>
                  <img
                    loading="lazy"
                    src="/Pictures/medicine.png"
                    alt=""
                    className="object-fit w-[23px] h-[22px]"
                  />
                </div>
                <div>
                  <Link
                    to="/medicinedelievery"
                    className="font-inter text-base font-bold hover:text-sky-600 duration-300"
                  >
                    Medicine Delivery Solution
                  </Link>
                </div>
              </div>

              {/* end box2 */}
              {/* box3 */}
              <div className="flex items-center space-x-4 mb-4">
                <div>
                  <img
                    loading="lazy"
                    src="/Pictures/beautyService.png"
                    alt=""
                    className="object-fit w-[23px] h-[22px]"
                  />
                </div>
                <div>
                  <Link
                    to="/beautyService"
                    className="font-inter text-base font-bold hover:text-sky-600 duration-300"
                  >
                    Beauty Services Scheduling Solution
                  </Link>
                </div>
              </div>

              {/* end box3 */}
              {/* box4 */}
              <div className="flex items-center space-x-4 mb-8">
                <div>
                  <img
                    loading="lazy"
                    src="/Pictures/Document.png"
                    alt=""
                    className="object-fit w-[23px] h-[22px]"
                  />
                </div>
                <div>
                  <Link
                    to="/documentDelievery"
                    className="font-inter text-base font-bold hover:text-sky-600 duration-300"
                  >
                    Document Delivery Solution
                  </Link>
                </div>
              </div>

              {/* end box4 */}
            </div>
            {/* end 4 boxes */}
          </div>

          {/* 3rd 4th box end */}
        </div>
      )}
      {/* UsecaseStudies End Box */}

      {/* ***************--------------------------------------***************** */}

      {/* Content Start  */}
      <div className="sm:mt-26 desktop:mt-33 relative w-full sm:h-[650px] mymob:h-[530px] myiphone:h-[480px] tablet:h-[400px] desktop:h-[380px] iox:h-[370px]">
        <img
          src="/Pictures/ZeewbgColor.jpg"
          alt=""
          className="w-full sm:h-[650px]  mymob:h-[530px]  myiphone:h-[480px] tablet:h-[400px]  desktop:h-[380px] iox:h-[370px]"
        />
        <div className="absolute sm:px-[20px] sm:pb-10 desktop:pb-6 mymob:px-[15px] tablet:px-[20px] desktop:px-8 iox:px-4 sm:w-[290px] mymob:w-[355px] myiphone:w-[420px] tablet:w-[728px] desktop:w-[964px] iox:w-[1150px] h-auto font-inter text-[#1A1D1E] iox:left-1/2 iox:-translate-x-1/2 top-1/2 -translate-y-1/2">
          <div className="flex items-center space-x-1 w-full max-w-[300px] ">
            <div>
              <img
                src="/Pictures/enatega-greenLogo.png"
                alt=""
                className="w-20 h-20"
              />
            </div>
            <p className="text-[17px] font-inter font-bold">VS</p>
            <div>
              <img src="/Pictures/Zeew-logo.png" alt="" className="w-20 h-20" />
            </div>
          </div>

          <p className="sm:text-[32px] font-inter sm:pt-3 desktop:pt-7 mymob:text-[33.5px] myiphone:text-[34.5px] tablet:text-[39px] desktop:text-[43.5px] iox:text-[50px] font-bold sm:leading-9 tablet:leading-11 desktop:leading-13.5 desktop:w-[964px] iox:w-[1140px] ">
            Enatega VS Zeew
          </p>
          <p className="text-lg sm:mt-2 tablet:mt-[14px] font-[600] font-inter capitalize text-[#1a1d1e] leading-5 desktop:w-[964px] iox:w-[1140px] ">
            Selecting the Best Solution for Your On-Demand Delivery Business
          </p>
          <p className="sm:text-base tablet:text-[16.5px] font-[400] sm:my-1 desktop:w-[94%] iox:w-[88%]">
            Choosing the right delivery platform is critical for a successful
            on-demand service. If you’re looking for a complete multivendor
            delivery solution with full customizability, Enatega may just be the
            alternative to Zeew that you’ve been looking for. Below, we compare
            Enatega and Zeew to help you determine whether Enatega could be the
            ideal Zeew alternative for your needs.
          </p>
        </div>
      </div>

      {/* Image 2 */}

      <motion.div
        variants={fadeIn("up", 0.2, "in")}
        initial="hidden"
        animate="show"
        exit="exit"
        className="mx-auto relative "
      >
        <img
          src="/Pictures/giftSpotNeat.jpg"
          alt=""
          className="sm:w-[280px] mymob:w-[335px] myiphone:w-[390px] sm:h-[660px] mymob:h-[520px] myiphone:h-[440px] tablet:w-[708px] tablet:h-[300px] desktop:h-[260px] desktop:w-[964px] iox:w-[1100px]  mx-auto  rounded-xl "
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <p className="sm:text-[28px] tablet:text-[31.5px] iox:text-[35px] font-[500] text-[#ffffff] leading-8 px-2">
            Introducing Enatega and Zeew
          </p>
          <p className="text-white mt-4 font-[400] font-inter sm:text-base tablet:text-[17px] sm:w-[240px] mymob:w-[300px] myiphone:w-[370px] tablet:w-[690px] desktop:w-[850px] iox:w-[1010px] px-2">
            Enatega is a fully customizable, multi-industry platform, adaptable
            for food, grocery, courier, and other on-demand services. With an
            emphasis on white-label solutions, it allows businesses to tailor
            every element of their brand and service offering. Zeew, in
            contrast, is primarily focused on turnkey solutions for food and
            grocery delivery. It offers a straightforward setup but less
            flexibility in customization, making it a practical choice for
            simpler operations without the need for extensive branding control.
          </p>
        </div>
      </motion.div>

      {/* Core Feature Comparison: Enatega vs. Zeew */}

      <div className="mx-auto bg-[#effbf1] sm:mt-16 tablet:mt-20 pb-6">
        <div className="sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[964px] iox:w-[1140px] h-auto py-[50px] mx-auto">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="sm:text-[28px] tablet:text-[31.5px] desktop:text-[32.5px] iox:text-[35.5px] font-inter font-bold text-center sm:leading-7.5 desktop:leading-10">
              Core Feature Comparison: Enatega vs. Zeew
            </p>
          </motion.div>
          <div className="sm:overflow-x-auto tablet:overflow-none mt-10 pb-10 bg-white w-full max-w-[1140px] mx-auto rounded-xl">
            <table className="mx-8 text-base">
              <tbody>
              <tr className="uppercase ">
                <th className="py-8 px-6 text-left sm:w-[250px] desktop:w-[400px] iox:w-[520px]  sm:text-base text-[#959595] font-semibold font-inter">
                  Features
                </th>

                {/* ENATEGA Column */}
                <th className="py-8 px-6 sm:w-[200px] desktop:w-[250px] iox:w-[340px]">
                  <div className="flex items-center justify-center text-[#222222] text-base font-inter font-[500]">
                    <img
                      src="/Pictures/enatega-greenLogo.png"
                      alt=""
                      className="w-8 h-8 mx-1"
                    />
                    ENATEGA
                  </div>
                </th>

                {/* competitor Zeew Column */}
                <th className="py-8 px-6 sm:w-[200px] desktop:w-[250px] iox:w-[340px]">
                  <div className="flex items-center  justify-center text-[#222222] text-base font-inter font-[500]">
                    <img
                      src="/Pictures/blink-logo.png"
                      alt=""
                      className="w-8 h-8 mx-1"
                    />
                    competitor Zeew
                  </div>
                </th>
              </tr>
              <tr className=" border-b border-[#f3f3f3] ">
                <td className="py-5 px-6 text-[#222222] font-[500] uppercase font-inter">
                  Service Types Supported
                </td>
                <td className="text-center py-5 px-6 text-[#222222] font-inter">
                  {" "}
                  Food, grocery, courier, more
                </td>
                <td className="text-center py-5 px-6 text-[#222222] font-inter">
                  Mainly food and grocery delivery
                </td>
              </tr>
              {/* 2nd row */}
              <tr className=" border-b border-[#f3f3f3]">
                <td className="py-5 px-6 text-[#222222] font-[600] uppercase font-inter border-b border-[#f3f3f3]">
                  Customization Options
                </td>
                <td className="text-center py-5 px-6 text-[#222222] font-inter">
                  {" "}
                  High degree of customization
                </td>
                <td className="text-center py-5 px-6 text-[#222222] font-inter">
                  Limited customization
                </td>
              </tr>
              {/* 3rd row */}
              <tr className=" border-b border-[#f3f3f3]">
                <td className="py-5 px-6 text-[#222222] font-[600] uppercase font-inter border-b border-[#f3f3f3]">
                  White-Label Capabilities
                </td>
                <td className="text-center py-5 px-6 text-[#222222] font-inter">
                  {" "}
                  Yes, fully white-labeled
                </td>
                <td className="text-center py-5 px-6 text-[#222222] font-inter">
                  Limited branding options
                </td>
              </tr>
              {/* 4rd row */}
              <tr className=" border-b border-[#f3f3f3]">
                <td className="py-5 px-6 text-[#222222] font-[600] uppercase font-inter border-b border-[#f3f3f3]">
                  Real-Time Tracking and Dispatch
                </td>
                <td className="text-center py-5 px-6 text-[#222222] font-inter">
                  {" "}
                  Advanced, customizable tracking options
                </td>
                <td className="text-center py-5 px-6 text-[#222222] font-inter">
                  Standard real-time tracking
                </td>
              </tr>
              {/* 5th row */}
              <tr className=" border-b border-[#f3f3f3]">
                <td className="py-5 px-6 text-[#222222] font-[600] uppercase font-inter border-b border-[#f3f3f3]">
                  Payment Integrations
                </td>
                <td className="text-center py-5 px-6 text-[#222222] font-inter">
                  {" "}
                  Supports multiple gateways and API setups
                </td>
                <td className="text-center py-5 px-6 text-[#222222] font-inter">
                  Basic payment gateway options
                </td>
              </tr>
              {/* 6th row */}
              <tr className=" border-b border-[#f3f3f3]">
                <td className="py-5 px-6 text-[#222222] font-[600] uppercase font-inter border-b border-[#f3f3f3]">
                  Scalability
                </td>
                <td className="text-center py-5 px-6 text-[#222222] font-inter">
                  {" "}
                  Highly scalable, multi-service support
                </td>
                <td className="text-center py-5 px-6 text-[#222222] font-inter">
                  Limited scalability for additional services
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* End */}

      {/*Section Why Enatega is a Strong Alternative to Zeew*/}

      <div className="sm:my-10 desktop:my-16 sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] h-auto tablet:w-[728px] desktop:w-[964px] iox:w-[1140px] mx-auto rounded-xl  ">
        <motion.div
          variants={fadeIn("up", 0.2, "in")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="font-inter sm:text-[28px] tablet:text-[31px] desktop:text-[33px] iox:text-[35px] text-[#1A1D1E] leading-7.5 desktop:w-[800px] iox:w-[950px] font-bold mx-auto">
            Why Enatega is a Strong Alternative to Zeew
          </p>
          <p className="text-[#222222] sm:mt-2 tablet:mt-5 font-[400] font-inter sm:text-base tablet:text-[17px]    desktop:w-[800px] iox:w-[950px] mx-auto leading-[1.3rem]">
            Enatega’s extensive customization capabilities and versatile
            multi-service options make it an excellent alternative for Zeew,
            especially for businesses seeking a customizable Zeew alternative
            app that grows alongside their needs.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.2, "in")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="font-inter mt-4 sm:text-[28px] tablet:text-[31px] desktop:text-[33px] iox:text-[35px] text-[#1A1D1E] sm:leading-8 tablet:leading-10 desktop:w-[800px] iox:w-[950px] font-bold mx-auto">
            Why Choose Enatega as a Zeew Alternative?
          </p>
          <ul className="list-decimal my-6 desktop:w-[800px] iox:w-[950px] mx-auto px-8">
            <li className="font-bold font-inter text-[#1A1D1E] sm:text-[14px] mymob:text-base leading-5">
              Multi-Service Flexibility
            </li>
            <p className="text-[#222222] font-inter sm:text-[14px] mymob:text-base">
              Unlike Zeew, which is focused on food and grocery delivery,
              Enatega supports a broad array of services, from courier and
              flower delivery to laundry and roadside assistance. This
              flexibility makes it a top choice among zeew competitors.
            </p>
            <li className="font-bold font-inter text-[#1A1D1E] sm:text-[14px] mymob:text-base leading-5">
              Brand Control and Customization
            </li>
            <p className="text-[#222222] font-inter sm:text-[14px] mymob:text-base">
              Enatega’s robust white-label options enable companies to maintain
              brand control across every aspect of the user experience,
              positioning Enatega as a white-label Zeew alternative app for
              companies prioritizing brand identity.
            </p>
            <li className="font-bold font-inter text-[#1A1D1E] sm:text-[14px] mymob:text-base leading-5">
              Scalable and Adaptable Solutions
            </li>
            <p className="text-[#222222] font-inter sm:text-[14px] mymob:text-base">
              With scalable support across various service sectors, Enatega
              offers a zeew similar solution that adapts to changing business
              demands and growth. For businesses that plan to expand their
              service offerings, Enatega’s scalability is a significant
              advantage.
            </p>
            <li className="font-bold font-inter text-[#1A1D1E] sm:text-[14px] mymob:text-base leading-5">
              Advanced Payment and Tracking Options
            </li>
            <p className="text-[#222222] font-inter sm:text-[14px] mymob:text-base">
              Enatega provides a range of payment gateways and API compatibility
              options to fit specific market needs, making it an ideal on-demand
              Zeew alternative app with superior tracking and payment
              customization
            </p>
          </ul>
        </motion.div>
      </div>
      {/* End */}

      {/* Section  "Enatega: One of the Best Apps Like Zeew?" */}
      <div className="mx-auto relative my-2  ">
        <img
          src="/Pictures/giftbgimg.jpg"
          alt=""
          className="sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] sm:h-[400px] mymob:h-[320px] myiphone:h-[300px] tablet:w-[728px] tablet:h-[250px] desktop:h-[240px] desktop:w-[964px] iox:w-[1100px] mx-auto rounded-xl "
        />
        <motion.div
          variants={fadeIn("up", 0.2, "in")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
        >
          <p className="font-inter sm:text-[28px] tablet:text-[31px] desktop:text-[33px] iox:text-[35px] text-[#1A1D1E] sm:leading-8 tablet:leading-9.5 sm:w-[250px] mymob:w-[305px] myiphone:w-[355px] tablet:w-[699px] desktop:w-[850px] iox:w-[1000px] font-bold mx-auto">
            Enatega: One of the Best Apps Like Zeew?
          </p>
          <p className="text-[#222222] sm:mt-2 tablet:mt-3 font-[400] font-inter sm:text-base tablet:text-[17px] sm:w-[250px]  mymob:w-[305px]  myiphone:w-[355px] tablet:w-[699px]  desktop:w-[850px] iox:w-[1000px] mx-auto leading-[1.3rem]">
            Enatega stands out as a top zeew alternative solution for businesses
            looking to expand or diversify their on-demand services. With
            customizable features, robust tracking, and extensive support,
            Enatega is a compelling choice for companies seeking to innovate and
            elevate their delivery offerings.
          </p>
        </motion.div>
      </div>
      {/*  End */}

      {/* schedule a Call Now */}
      <div className="relative pb-5 mx-auto sm:mt-10 tablet:mt-20">
        <img
          src="/Pictures/div.bg-white.jpg"
          alt=""
          className="w-full sm:h-[300px] tablet:h-[350px] desktop:h-[400px] mx-auto "
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center ">
          <p className="text-[28px] tablet:text-[31.8px] iox:text-[35px] text-[#1A1D1E] font-bold sm:w-[228px]  sm:mb-6 mx-auto mymob:w-[268px] myiphone:w-[306px] tablet:w-[582px] desktop:w-[450px]  biglap:w-[700px] sm:h-auto text-center leading-9.5 capitalize ">
            Schedule a meeting and get started today
          </p>
          <p
            className="py-3 px-4 shadow inset-shadow-xs  border-2 border-[#968be0] text-white rounded-md drop-shadow-sm mx-auto inline-block "
            style={{
              backgroundImage:
                "linear-gradient(180deg, #7c6ce4 0, #624de3 100%)",
            }}
          >
            {/* Link One "Schedule a Call Now" */}
            <Link
              to="/contactus"
              className="text-[14px] font-inter font-semibold "
            >
              Schedule a Call Now
            </Link>
          </p>
        </div>
      </div>
      {/* End Schedule a Call Now */}

      {/* Footer */}
      <footer>
        <div className="sm:mt-15 pb-4 ">
          <div className="desktop:flex desktop:justify-between desktop:mx-5 iox:justify-start iox:space-x-14 iox:w-[86%] iox:mx-auto">
            <div className="mb-8 desktop:mt-[6px] iox:mt-2">
              <img
                src="/Pictures/Enatega-Logo.jpg"
                alt=""
                className="mx-auto sm:w-[130px] desktop:w-[160px] h-auto"
              />
            </div>

            <div className="sm:mt-4 sm:grid sm:grid-cols-2 sm:gap-y-4 sm:px-4 desktop:w-[600px] iox:grid-cols-4 iox:w-full">
              {/* 1st box Link  */}
              <div className="">
                <p className="font-bold text-[14px] font-inter text-[#1A1D1E]">
                  Resources
                </p>
                <ul className="font-inter text-[#1A1D1ED9]">
                  <li className="py-1 sm:text-[12px] mymob:text-[14px] text-[#1A1D1ED9]">
                    {" "}
                    <Link
                      to="/blogs"
                      className="hover:duration-300 hover:text-blue-700"
                    >
                      Blog
                    </Link>{" "}
                  </li>
                  <li className="py-1 sm:text-[12px] mymob:text-[14px] text-[#1A1D1ED9]">
                    {" "}
                    <Link
                      to="/documentation"
                      className="hover:duration-300 hover:text-blue-700"
                    >
                      Documentation
                    </Link>{" "}
                  </li>
                  <li className="py-1 sm:text-[12px] mymob:text-[14px] text-[#1A1D1ED9]">
                    {" "}
                    <Link
                      to="/features"
                      className="hover:duration-300 hover:text-blue-700"
                    >
                      Features
                    </Link>{" "}
                  </li>
                </ul>
              </div>

              {/* 2nd box Link */}
              <div className=" ">
                <p className="font-bold  text-[14px] font-inter text-[#1A1D1E]">
                  Compare
                </p>
                <ul className="font-inter sm:text-[12px] mymob:text-[14px]">
                  <li className="py-1 ">
                    {" "}
                    <Link
                      to="/blink"
                      className="hover:duration-300 hover:text-blue-700"
                    >
                      Blink
                    </Link>{" "}
                  </li>
                  <li className="py-1">
                    {" "}
                    <Link
                      to="/deonde"
                      className="hover:duration-300 hover:text-blue-700"
                    >
                      Deonde
                    </Link>{" "}
                  </li>
                  <li className="py-1">
                    {" "}
                    <Link
                      to="/gloriaFood"
                      className="hover:duration-300 hover:text-blue-700"
                    >
                      GloriaFood
                    </Link>{" "}
                  </li>
                  <li className="py-1">
                    {" "}
                    <Link
                      to="/orderingco"
                      className="hover:duration-300 hover:text-blue-700"
                    >
                      Ordering.Co
                    </Link>{" "}
                  </li>
                  <li className="py-1">
                    {" "}
                    <Link
                      to="/shipday"
                      className="hover:duration-300 hover:text-blue-700"
                    >
                      Shipday
                    </Link>{" "}
                  </li>
                  <li className="py-1">
                    {" "}
                    <Link
                      to="/spotNeats"
                      className="hover:duration-300 hover:text-blue-700"
                    >
                      SpotNeats
                    </Link>{" "}
                  </li>
                  <li className="py-1">
                    {" "}
                    <Link
                      to="/yelo"
                      className="hover:duration-300 hover:text-blue-700"
                    >
                      Yelo
                    </Link>{" "}
                  </li>
                  <li className="py-1">
                    {" "}
                    <Link
                      to="/zeew"
                      className="hover:duration-300 hover:text-blue-700"
                    >
                      Zeew
                    </Link>{" "}
                  </li>
                </ul>
              </div>

              {/* 3rd box Link */}
              <div className="desktop:hidden iox:flex ">
                <ul className="font-inter text-[#1A1D1ED9] sm:text-[12px] mymob:text-[14px]">
                  <li>
                    <p className="font-bold  text-[14px] font-inter text-[#1A1D1E]">
                      Case Studies
                    </p>
                  </li>
                  <li className="py-1">
                    {" "}
                    <Link
                      to="/yalladelievery"
                      className="hover:duration-300 hover:text-blue-700"
                    >
                      Yalla Delievery
                    </Link>{" "}
                  </li>
                  <li className="py-1">
                    {" "}
                    <Link
                      to="/stylizenow"
                      className="hover:duration-300 hover:text-blue-700"
                    >
                      Stylizenow
                    </Link>{" "}
                  </li>
                  <li className="py-1">
                    {" "}
                    <Link
                      to="/easyEats"
                      className="hover:duration-300 hover:text-blue-700"
                    >
                      Easy Eats
                    </Link>{" "}
                  </li>
                  <li className="py-1">
                    {" "}
                    <Link
                      to="/vivyied"
                      className="hover:duration-300 hover:text-blue-700"
                    >
                      Vinifyed
                    </Link>{" "}
                  </li>
                  <li className="py-1">
                    {" "}
                    <Link
                      to="/snapdelievery"
                      className="hover:duration-300 hover:text-blue-700"
                    >
                      Snap delievery
                    </Link>{" "}
                  </li>
                  <li className="py-1">
                    {" "}
                    <Link
                      to="/borkuDelievery"
                      className="hover:duration-300 hover:text-blue-700"
                    >
                      Borku Delievery
                    </Link>{" "}
                  </li>
                </ul>
              </div>

              {/* 4th box Link */}
              <div className="desktop:hidden iox:flex ">
                <ul className="font-inter text-[#1A1D1ED9] sm:text-[12px] mymob:text-[14px]">
                  <li>
                    <p className="font-bold  text-[14px] font-inter text-[#1A1D1E]">
                      Get in Touch
                    </p>
                  </li>
                  <li className="py-1">
                    {" "}
                    <Link>
                      1021 E Lincolnway Suite #6581,Cheyenne, Wyoming 82001,
                      United States
                    </Link>{" "}
                  </li>
                  <li className="py-1">
                    {" "}
                    <Link>sales@enatega.com</Link>{" "}
                  </li>
                  <li className="py-1">
                    {" "}
                    <Link>+1 (307) 776-8999</Link>{" "}
                  </li>
                  <ul className="flex space-x-2 items-center py-1">
                    <li>
                      {" "}
                      <Link to="https://www.facebook.com/enategam">
                        <TiSocialFacebook className="w-6 h-6  hover:text-blue-700 rounded-full" />
                      </Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link to="https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F14583783%2F">
                        <TiSocialLinkedin className="w-6 h-6 hover:text-[#0A66C2]" />
                      </Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link to="https://www.instagram.com/enategam/">
                        <FaInstagram className="w-5 h-5 hover:text-[#ff01b6]" />
                      </Link>{" "}
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
          {/* Links End */}

          <div className="sm:hidden desktop:flex  justify-between ml-10 w-[630px] iox:hidden">
            {/* 3rd box Link */}
            <div className="w-[150px]">
              <p className="font-bold  text-[14px] font-inter text-[#1A1D1E]">
                Case Studies
              </p>
              <ul className="font-inter text-[#1A1D1ED9] sm:text-[12px] mymob:text-[14px]">
                <li className="py-1">
                  {" "}
                  <Link
                    to="/yalladelievery"
                    className="hover:duration-300 hover:text-blue-700"
                  >
                    {" "}
                    Yalla Delievery
                  </Link>{" "}
                </li>
                <li className="py-1">
                  {" "}
                  <Link
                    to="/stylizenow"
                    className="hover:duration-300 hover:text-blue-700"
                  >
                    Stylizenow
                  </Link>{" "}
                </li>
                <li className="py-1">
                  {" "}
                  <Link
                    to="/easyEats"
                    className="hover:duration-300 hover:text-blue-700"
                  >
                    Easy Eats
                  </Link>{" "}
                </li>
                <li className="py-1">
                  {" "}
                  <Link
                    to="/vivyied"
                    className="hover:duration-300 hover:text-blue-700"
                  >
                    Vinifyed
                  </Link>{" "}
                </li>
                <li className="py-1">
                  {" "}
                  <Link
                    to="/snapdelievery"
                    className="hover:duration-300 hover:text-blue-700"
                  >
                    Snap delievery
                  </Link>{" "}
                </li>
                <li className="py-1">
                  {" "}
                  <Link
                    to="/borkuDelievery"
                    className="hover:duration-300 hover:text-blue-700"
                  >
                    Borku Delievery
                  </Link>{" "}
                </li>
              </ul>
            </div>

            {/* 4th box Link */}
            <div className="w-313px]">
              <p className="font-bold  text-[14px] font-inter text-[#1A1D1E]">
                Get in Touch
              </p>
              <ul className="font-inter text-[#1A1D1ED9] sm:text-[12px] mymob:text-[14px]">
                <li className="py-1 w-62">
                  {" "}
                  <Link>
                    1021 E Lincolnway Suite #6581,Cheyenne, Wyoming 82001,
                    United States
                  </Link>{" "}
                </li>
                <li className="py-1">
                  {" "}
                  <Link>sales@enatega.com</Link>{" "}
                </li>
                <li className="py-1">
                  {" "}
                  <Link>+1 (307) 776-8999</Link>{" "}
                </li>
                <ul className="flex space-x-2 items-center py-1">
                  <li>
                    {" "}
                    <Link to="https://www.facebook.com/enategam">
                      <TiSocialFacebook className="w-6 h-6  hover:text-blue-700 rounded-full" />
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F14583783%2F">
                      <TiSocialLinkedin className="w-6 h-6 hover:text-[#0A66C2]" />
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="https://www.instagram.com/enategam/">
                      <FaInstagram className="w-5 h-5 hover:text-[#ff01b6]" />
                    </Link>{" "}
                  </li>
                </ul>
              </ul>
            </div>
          </div>

          {/* Images */}
          <div className="flex sm:space-x-2 mymob:space-x-6 items-center justify-center sm:mt-12 ">
            <img
              src="/Pictures/iso02.jpg"
              alt="Image 1"
              className="sm:w-16  h-auto rounded"
            />
            <img
              src="/Pictures/Iso27.jpg"
              alt="Image 2"
              className="sm:w-16 h-auto rounded"
            />
            <img
              src="/Pictures/Gdpr.jpg"
              alt="Image 3"
              className="sm:w-14  h-auto rounded"
            />
            <img
              src="/Pictures/Iso9001.jpg"
              alt="Image 4"
              className="sm:w-16 h-auto rounded"
            />
          </div>

          {/* Line */}
          <div className="w-[94%] my-4 rounded-full h-1 border-b-2 mx-auto text-[#d1d1d1] ">
            {" "}
          </div>

          {/* Privacy Policy */}

          <ul className="font-inter sm:grid sm:place-items-center sm:gap-y-2 sm:mt-1 desktop:flex desktop:justify-between w-[94%] mx-auto">
            <ul className="flex space-x-6 items-center font-inter text-[#1A1D1ED9] text-[14px]">
              <li>
                {" "}
                <Link to="/Policy">Privacy Policy</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/termsCondition">Terms & Conditions</Link>{" "}
              </li>
            </ul>
            <li className="font-inter text-[#1A1D1ED9] text-[14px]">
              {" "}
              <p>©2024 Enatega · All rights reserved.</p>{" "}
            </li>
            <li className="font-inter sm:text-[14px] text-[#1a1d1ed9]">
              {" "}
              <span>
                Powered by:{" "}
                <Link
                  to="https://ninjascode.com/?_gl=1*p2vevt*_gcl_au*MTEzMTAxNDc0OC4xNzUyMTE4MTc0LjY5ODkxODUxOS4xNzUzNDU2ODcwLjE3NTM0NTY4Njk."
                  className="sm:text-[14px] font-bold"
                >
                  {" "}
                  <span>{`{`}</span>{" "}
                  <span className="font-semibold text-[18px] text-[#171717]">
                    ninjas
                  </span>
                  {`Code}`}
                </Link>{" "}
              </span>
            </li>
          </ul>
        </div>
      </footer>
      {/* Section 15 End */}
    </>
  );
}

export default Zeew;
