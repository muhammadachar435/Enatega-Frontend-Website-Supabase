import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SidebarData from "../Component/Sidebardata";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { GrFormCheckmark } from "react-icons/gr"; // Import Icon CheckMark
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

// Milk
function Milk() {
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
          <div className="relative flex justify-start  items-center text-[8px] border border-white border-t-0   ring-b-white ring-l ring-r sm:h-7 mymob:h-8 desktop:mt-1  tablet:h-[30px] desktop:h-12">
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
      <div className="sm:mt-26 desktop:mt-33 relative w-full sm:h-[490px] mymob:h-[440px] tablet:h-[340px] desktop:h-[440px] iox:h-[460px]">
        <img
          src="/Pictures/MilkbgColor.jpg"
          alt=""
          className="w-full sm:h-[490px] mymob:h-[440px] tablet:h-[340px] desktop:h-[440px] iox:h-[460px]"
        />
        <div className="absolute sm:px-[20px] tablet:px-[20px] desktop:px-8 iox:px-4 sm:w-[320px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[964px] iox:w-[1150px] h-auto font-inter text-[#1A1D1E] iox:left-1/2 iox:-translate-x-1/2 top-1/2 -translate-y-1/2">
          <p className="sm:text-[22px] font-[500] sm:my-2 iox:my-[6px] ">
            Milk Delivery
          </p>
          <p className="sm:text-[32px] mymob:text-[33.5px] capitalize  myiphone:text-[34.5px] tablet:text-[39px] desktop:text-[43.5px] iox:text-[50px] font-bold sm:leading-10 tablet:leading-11 desktop:leading-13.5  myiphone:w-[385px] tablet:w-[728px] desktop:w-[964px] iox:w-[1140px]">
            A Comprehensive Multi Vendor Milk Delivery Solution
          </p>
          <p className="sm:text-base tablet:text-[16.5px] font-[400] sm:my-2 iox:my-[14px]  mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[964px]  iox:w-[1000px]">
            {" "}
            Looking to scale your milk delivery business’s operations? Get
            Enatega’s mobile app for milk delivery and manage every aspect of
            your deliveries seamlessly.
          </p>
          <p className="sm:text-base tablet:text-[16.5px] font-[400] sm:my-4 iox:my-[14px] mymob:w-[335px]  myiphone:w-[385px] tablet:w-[728px] desktop:w-[700px] iox:w-[770px] tablet:my-0 tablet:mt-4">
            {" "}
            Timely deliveries are the best way to stay ahead of the competition
            and we help you do just that by launching your delivery app in just
            five business days.
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
          className="sm:w-[260px] mymob:w-[335px] myiphone:w-[365px] sm:h-[400px] mymob:h-[320px] myiphone:h-[300px] tablet:w-[708px] tablet:h-[166px] desktop:w-[964px] iox:w-[1180px]  mx-auto  rounded-xl "
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <p className="text-white font-[400] font-inter sm:text-base tablet:text-[17px] sm:w-[200px] mymob:w-[255px] myiphone:w-[285px] tablet:w-[650px] desktop:w-[900px] iox:w-[680px]">
            Enatega is a dynamic multi vendor delivery platform initially
            designed for food delivery, yet flexible enough to serve various
            industries. One exciting application of this platform is as a milk
            delivery service app, offering businesses the opportunity to
            efficiently tap into the growing demand for daily milk deliveries.
          </p>
        </div>
      </motion.div>

      {/* Transparent Pricing, Great Value */}

      <div className="mx-auto bg-[#effbf1] my-10 ">
        <div className="sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[964px] iox:w-[1140px] py-[50px] mx-auto">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="sm:text-[28px] tablet:text-[31.5px] desktop:text-[32.5px] iox:text-[35.5px] font-inter font-bold text-center sm:leading-7.5 desktop:leading-10">
              Transparent Pricing, Great Value
            </p>
            <p className="text-base font-inter font-[400] text-center my-[5px] desktop:w-[475px] iox:w-[500px] mx-auto ">
              Why make it more complicated than it needs to be? We’ve made it
              simple with our single, unbeatable price option.
            </p>
          </motion.div>

          {/* LifeTime Licence */}
          <div className="bg-white shadow-lg rounded-2xl sm:mt-4 tablet:mt-8 py-4 desktop:w-[964px] desktop:flex desktop:space-x-2 iox:w-[1140px] mx-auto ">
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
              className="sm:w-[220px] mymob:w-[290px] myiphone:w-[340px] tablet:w-[668px] desktop:w-[300px] iox:w-[310px] mx-auto my-6 "
            >
              <p className="font-inter sm:text-base mymob:text-[16.7px] tablet:text-lg font-bold">
                Lifetime License
              </p>
              <p className="sm:text-[14.5px] text-[#1a1D1ED9] my-[5px] font-medium leading-[1.3em] font-inter">
                Once the purchase has been completed, the full working code can
                be downloaded from the same page used to make the purchase.
              </p>
              <p className="my-6">
                <Link
                  to="/contactus"
                  className=" py-[14px] sm:px-3 mymob:px-4 rounded-md font-inter text-sm font-semibold text-[#000000]   border-t-[#a6d1b6]  border-b-3 border-l border-r border-[#558567]  shadow-[inset_0_4px_6px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(255,255,255,1)]"
                  style={{
                    backgroundImage:
                      " linear-gradient(180deg, #86cba0 0, #6cb487 100%)",
                  }}
                >
                  Schedule a Call Now
                </Link>
              </p>
            </motion.div>

            {/* 2nd box */}
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
              className="sm:w-[220px] mymob:w-[290px]  myiphone:w-[340px] tablet:w-[668px] desktop:w-[600px] iox:w-[700px] tablet:flex tablet:space-x-8 desktop:space-x-10 mx-auto sm:mt-8 desktop:mt-0"
            >
              {/* part 1 */}
              <div className="tablet:w-[324px] desktop:w-[260px] iox:w-[320px]">
                {/* 1st row Start */}
                <div className="flex items-center sm:space-x-2 tablet:space-x-3 mx-auto my-6 ">
                  <div className="rounded-full bg-[#151819] w-[20px] h-[20px] flex items-center">
                    <GrFormCheckmark className="w-5 h-5 mx-auto text-white " />
                  </div>
                  <div>
                    <p className="text-[#1A1D1E] sm:text-[14px] tablet:text-[14.6px] font-sans font-medium ">
                      Full Source Code Included
                    </p>
                  </div>
                </div>
                {/* 1st end */}

                {/* 2nd row Start */}
                <div className="flex items-center sm:space-x-2 tablet:space-x-3  my-6 ">
                  <div className="rounded-full bg-[#151819] w-[20px] h-[20px] flex items-center">
                    <GrFormCheckmark className="w-5 h-5 mx-auto text-white " />
                  </div>
                  <div>
                    <p className="text-[#1A1D1E] sm:text-[14px] tablet:text-[14.6px] font-sans font-medium">
                      Built With the Latest Technologies
                    </p>
                  </div>
                </div>
                {/* 2nd end */}

                {/* 3rd row Start */}
                <div className="flex items-center sm:space-x-2 tablet:space-x-3  my-6 ">
                  <div className="rounded-full bg-[#151819] w-[20px] h-[20px] flex items-center">
                    <GrFormCheckmark className="w-5 h-5 mx-auto text-white " />
                  </div>
                  <div>
                    <p className="text-[#1A1D1E] sm:text-[14px] tablet:text-[14.6px] font-sans font-medium">
                      Includes Admin, Rider, Restaurant and User Apps
                    </p>
                  </div>
                </div>
                {/* 3rd end */}

                {/* 4th row Start */}
                <div className="flex items-center sm:space-x-2 tablet:space-x-3  my-6 ">
                  <div className="rounded-full bg-[#151819] w-[20px] h-[20px] flex items-center">
                    <GrFormCheckmark className="w-5 h-5 mx-auto text-white " />
                  </div>
                  <div>
                    <p className="text-[#1A1D1E] sm:text-[14px] tablet:text-[14.6px] font-sans font-medium">
                      No Subscriptions Needed, One Time Payment Only
                    </p>
                  </div>
                </div>
                {/* 4th end */}

                {/* 5th row Start */}
                <div className="flex items-center sm:space-x-2 tablet:space-x-3  my-6 ">
                  <div className="rounded-full bg-[#151819] w-[20px] h-[20px] flex items-center">
                    <GrFormCheckmark className="w-5 h-5 mx-auto text-white " />
                  </div>
                  <div>
                    <p className="text-[#1A1D1E] sm:text-[14px] tablet:text-[14.6px] font-sans font-medium">
                      No Additional Charges per Delivery
                    </p>
                  </div>
                </div>
                {/* 5th end */}
              </div>
              {/* End part 1 */}

              {/* Part 2 */}
              <div className="tablet:w-[324px] desktop:w-[260px] iox:w-[320px]">
                {/* 6th row Start */}
                <div className="flex items-center sm:space-x-2 tablet:space-x-3  my-6 ">
                  <div className="rounded-full bg-[#151819] w-[20px] h-[20px] flex items-center">
                    <GrFormCheckmark className="w-5 h-5 mx-auto text-white " />
                  </div>
                  <div>
                    <p className="text-[#1A1D1E] sm:text-[14px] tablet:text-[14.6px] font-sans font-medium">
                      Lifetime Access to all Future Updates
                    </p>
                  </div>
                </div>
                {/* 6th end */}

                {/* 7th row Start */}
                <div className="flex items-center sm:space-x-2 tablet:space-x-3  my-6 ">
                  <div className="rounded-full bg-[#151819] w-[20px] h-[20px] flex items-center">
                    <GrFormCheckmark className="w-5 h-5 mx-auto text-white " />
                  </div>
                  <div>
                    <p className="text-[#1A1D1E] sm:text-[14px] tablet:text-[14.6px] font-sans font-medium">
                      Open Source App Repo
                    </p>
                  </div>
                </div>
                {/* 7th end */}

                {/* 8th row Start */}
                <div className="flex items-center sm:space-x-2 tablet:space-x-3  my-6 ">
                  <div className="rounded-full bg-[#151819] w-[20px] h-[20px] flex items-center">
                    <GrFormCheckmark className="w-5 h-5 mx-auto text-white " />
                  </div>
                  <div>
                    <p className="text-[#1A1D1E] sm:text-[14px] tablet:text-[14.6px] font-sans font-medium">
                      Openly Available Documentation and Tutorials
                    </p>
                  </div>
                </div>
                {/* 8th end */}

                {/* 9th row Start */}
                <div className="flex items-center sm:space-x-2 tablet:space-x-3  my-6 ">
                  <div className="rounded-full bg-[#151819] w-[20px] h-[20px] flex items-center">
                    <GrFormCheckmark className="w-5 h-5 mx-auto text-white " />
                  </div>
                  <div>
                    <p className="text-[#1A1D1E] sm:text-[14px] tablet:text-[14.6px] font-sans font-medium">
                      Free 2 hour technical consultation with Enatega developers
                    </p>
                  </div>
                </div>
                {/* 9th end */}
              </div>
              {/* End part 2 */}
            </motion.div>
            {/* end All 9 boxes Parent */}
          </div>
        </div>
      </div>
      {/* End Transparent Pricing ..... */}

      {/* Fully Customizable App for Delivering Milk */}
      <motion.div
        variants={fadeIn("up", 0.2, "in")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[964px] iox:w-[1140px] font-inter mx-auto sm:my-10 tablet:my-20  desktop:flex desktop:justify-evenly desktop:items-center desktop:space-x-14 iox:space-x-36 "
      >
        <div className="desktop:hidden">
          <img
            src="/Pictures/MilkCart.jpg"
            alt=""
            className="mymob:w-[251px] myiphone:w-[288px] tablet:w-[545px] h-auto mx-auto "
          />
        </div>
        <div className="desktop:w-[457px] iox:w-[545px] h-auto sm:mt-2 desktop:mt-0">
          <p className="flex text-[#1A1D1E] sm:text-[28px] tablet:text-[31px] desktop:text-[32px] iox:text-[35px] sm:mb-[12px] iox:mb-4 font-bold capitalize sm:leading-8 desktop:leading-10 ">
            Fully Customizable App for Delivering Milk
          </p>
          <p className="text-[#222222] sm:text-base  iox:text-[17px]  mt-[12px] mb-[20px] leading-5.5 font-[400]  desktop:w-[90%]">
            With Enatega, businesses can create a fully customizable online milk
            delivery app, tailored to the specific needs of their brand and
            customers. Whether you’re managing a dairy business or looking to
            launch a marketplace for multiple vendors, Enatega offers an
            all-in-one solution for handling orders, managing inventory, and
            streamlining deliveries. This scalable platform provides a seamless
            experience for connecting customers to their preferred milk and
            dairy products.
          </p>

          <Link
            to="/contactus"
            className="sm:py-2 tablet:py-3 px-1 text-center sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[472px]  mx-auto  text-wrap align-center inline-block rounded-md font-inter text-base font-semibold text-[#000000]   border-t-[#a6d1b6]  border-b-3 border-l border-r border-[#558567]  shadow-[inset_0_4px_6px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(255,255,255,1)]"
            style={{
              backgroundImage:
                " linear-gradient(180deg, #86cba0 0, #6cb487 100%)",
            }}
          >
            {" "}
            Get Started now with our milk delivery app solution
          </Link>
        </div>
        <div className="sm:hidden desktop:flex desktop:w-[450px] iox:w-[545px] h-auto">
          <img
            src="/Pictures/MilkCart.jpg"
            alt=""
            className=" desktop:w-[354px] iox:w-[420px] h-auto"
          />
        </div>
      </motion.div>
      {/* End Fully Customizable App for Delivering Milk */}

      {/* Section  On-Demand Milk Ordering Apps ..... */}
      <div className="mx-auto relative   ">
        <img
          src="/Pictures/giftbgimg.jpg"
          alt=""
          className="sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] sm:h-[580px] mymob:h-[500px] myiphone:h-[460px] tablet:w-[728px] tablet:h-[300px] desktop:h-[350px] desktop:w-[964px] iox:w-[1140px] mx-auto rounded-xl "
        />
        <motion.div
          variants={fadeIn("up", 0.2, "in")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <p className="font-inter sm:text-[28px] tablet:text-[31px] desktop:text-[33px] iox:text-[35px] text-[#1A1D1E] leading-7.5 sm:w-[250px] mymob:w-[305px] myiphone:w-[355px] tablet:w-[699px] desktop:w-[800px] iox:w-[950px] font-bold mx-auto">
            On-Demand Milk Ordering Apps
          </p>
          <p className="text-[#222222] sm:mt-2 tablet:mt-3 font-[400] font-inter sm:text-base tablet:text-[17px] sm:w-[250px]  mymob:w-[305px]  myiphone:w-[355px] tablet:w-[699px]  desktop:w-[800px] iox:w-[950px] mx-auto leading-[1.3rem]">
            As consumer habits shift towards convenience, the need for reliable
            on-demand milk ordering apps is increasing. Enatega enables
            businesses to offer customers a user-friendly app where they can
            browse a variety of milk options, place orders, and have fresh milk
            delivered straight to their door. By offering an efficient and
            reliable milk delivery service, businesses can stay ahead of the
            competition and meet the needs of their customers who prefer online
            shopping.
          </p>
          <Link
            to="/contactus"
            className=" sm:py-2 tablet:py-3 sm:px-3 tablet:px-0 mt-4 text-center sm:w-[250px] mymob:w-[305px]  myiphone:w-[355px]  tablet:w-[480px]  desktop:w-[472px] mx-auto  text-wrap align-center inline-block rounded-md font-inter text-base font-semibold text-[#000000]   border-t-[#a6d1b6]  border-b-[3px] border-l border-r border-[#558567]  shadow-[inset_0_4px_6px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(255,255,255,1)]"
            style={{
              backgroundImage:
                " linear-gradient(180deg, #86cba0 0, #6cb487 100%)",
            }}
          >
            {" "}
            Get Started now with our milk delivery app solution
          </Link>
        </motion.div>
      </div>
      {/* End Section On-Demand Milk Ordering Apps*/}

      {/*Section A Flexible Platform for Growing Dairy Businesses */}

      <div className="sm:my-10 desktop:my-16 sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] h-auto tablet:w-[728px] desktop:w-[810px] iox:w-[950px] mx-auto rounded-xl  ">
        <motion.div
          variants={fadeIn("up", 0.2, "in")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="font-inter sm:text-[28px] tablet:text-[31px] desktop:text-[33px] iox:text-[35px] text-[#1A1D1E] sm:leading-7.5 desktop:leading-9 desktop:w-[600px] desktop:mx-0 iox:w-[850px] font-bold mx-auto desktop:tracking-wide">
            A Flexible Platform for Growing Dairy Businesses
          </p>
          <p className="text-[#222222] sm:mt-2 tablet:mt-3 font-[400] font-inter sm:text-base tablet:text-[17px]    desktop:w-[800px] iox:w-[850px] desktop:mx-0 mx-auto leading-[1.3rem]">
            Whether you’re transitioning from food delivery or starting fresh
            with a milk delivery app, Enatega’s platform is built for
            flexibility and growth. Its robust backend is capable of supporting
            both small-scale dairies and larger milk distributors, ensuring
            smooth and efficient operations for vendors and a satisfying
            experience for customers. Enatega’s customizable tools allow
            businesses to scale their apps to deliver milk as their customer
            base expands.
          </p>
        </motion.div>
      </div>

      {/* Enabling Your Milk Delivery Service’s Success With Enatega */}

      <div className="mx-auto bg-[#effbf1] my-10 ">
        <div className="sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[964px] iox:w-[1140px] py-[50px] mx-auto">
          <motion.div
            variants={fadeIn("up", 0.2, "in")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="sm:text-[28px] tablet:text-[31.5px] desktop:text-[32.5px] iox:text-[35.5px] font-inter font-bold text-center sm:leading-7.5 desktop:leading-10 tablet:w-[96%] desktop:w-[86%] iox:w-[850px] mx-auto">
              Enabling Your Milk Delivery Service’s Success With Enatega
            </p>
            <p className="sm:text-base tablet:text-[17px] font-inter text-center mt-[5px] desktop:w-[475px] iox:w-[500px] mx-auto text-[#222222] ">
              Launching your own milk delivery app that scales your business
              operations is not an easy task. Here’s what Enatega’s milk
              delivery app offers to help you stay ahead of the competitors:
            </p>
          </motion.div>

          {/*  Enabling Your Milk Delivery Service’s Success With Enatega [Part] */}
          <motion.div
            variants={fadeIn("up", 0.2, "in")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white shadow-lg rounded-2xl sm:mt-4 tablet:mt-8 sm:p-4 tablet:py-6 iox:py-8 iox:w-[1140px]  mx-auto "
          >
            {/* 1st box */}
            <div className="w-full tablet:w-[96%] tablet:grid tablet:grid-cols-3 mx-auto">
              {/* part 1 */}
              <div>
                {/* 1st row Start */}
                <div className="flex items-center  sm:space-x-2 tablet:space-x-3 mx-auto my-3 ">
                  <div className="rounded-full bg-[#151819] w-[20px] h-[20px] flex items-center">
                    <GrFormCheckmark className="w-5 h-5 mx-auto text-white " />
                  </div>
                  <div>
                    <p className="text-[#1A1D1E] sm:text-[14px] tablet:text-[14.6px] font-sans font-medium ">
                      Easy-to-use interface
                    </p>
                  </div>
                </div>
                {/* 1st end */}

                {/* 2nd row Start */}
                <div className="flex items-center sm:space-x-3 tablet:space-x-3  my-3 ">
                  <div className="rounded-full bg-[#151819] w-[20px] h-[20px] flex items-center">
                    <GrFormCheckmark className="w-5 h-5 mx-auto text-white " />
                  </div>
                  <div>
                    <p className="text-[#1A1D1E] sm:text-[14px] tablet:text-[14.6px] font-sans font-medium">
                      No additional delivery charges
                    </p>
                  </div>
                </div>
                {/* 2nd end */}

                {/* 3rd row Start */}
                <div className="flex items-center sm:space-x-3 tablet:space-x-3  my-3 ">
                  <div className="rounded-full bg-[#151819] w-[20px] h-[20px] flex items-center">
                    <GrFormCheckmark className="w-5 h-5 mx-auto text-white " />
                  </div>
                  <div>
                    <p className="text-[#1A1D1E] sm:text-[14px] tablet:text-[14.6px] font-sans font-medium">
                      100% customizable
                    </p>
                  </div>
                </div>
                {/* 3rd end */}
              </div>
              {/* End part 1 */}

              {/* Part 2 */}
              <div className="iox:w-[400px]">
                {/* 4th row Start */}
                <div className="flex items-center sm:space-x-3 tablet:space-x-3  my-3 ">
                  <div className="rounded-full bg-[#151819] w-[20px] h-[20px] flex items-center">
                    <GrFormCheckmark className="w-5 h-5 mx-auto text-white " />
                  </div>
                  <div>
                    <p className="text-[#1A1D1E] sm:text-[14px] tablet:text-[14.6px] font-sans font-medium">
                      Data security
                    </p>
                  </div>
                </div>
                {/* 4th end */}

                {/* 5th row Start */}
                <div className="flex items-center sm:space-x-3 tablet:space-x-3  my-3 ">
                  <div className="rounded-full bg-[#151819] w-[20px] h-[20px] flex items-center">
                    <GrFormCheckmark className="w-5 h-5 mx-auto text-white " />
                  </div>
                  <div>
                    <p className="text-[#1A1D1E] sm:text-[14px] tablet:text-[14.6px] font-sans font-medium desktop:w-[319px]">
                      Source code included
                    </p>
                  </div>
                </div>
                {/* 5th end */}

                {/* 6th row Start */}
                <div className="flex items-center sm:space-x-3 tablet:space-x-3  my-3 ">
                  <div className="rounded-full bg-[#151819] w-[20px] h-[20px] flex items-center">
                    <GrFormCheckmark className="w-5 h-5 mx-auto text-white " />
                  </div>
                  <div>
                    <p className="text-[#1A1D1E] sm:text-[14px] tablet:text-[14.6px] font-sans font-medium">
                      Quick five-days deployment
                    </p>
                  </div>
                </div>
                {/* 6th end */}
              </div>
              {/* End part 2 */}

              {/* Part 3 */}
              <div className="iox:w-[400px]">
                {/* 7th row Start */}
                <div className="flex items-center sm:space-x-3 tablet:space-x-3  my-3 ">
                  <div className="rounded-full bg-[#151819] w-[20px] h-[20px] flex items-center">
                    <GrFormCheckmark className="w-5 h-5 mx-auto text-white " />
                  </div>
                  <div>
                    <p className="text-[#1A1D1E] sm:text-[14px] tablet:text-[14.6px] font-sans font-medium">
                      Unlimited users and listings
                    </p>
                  </div>
                </div>
                {/* 7th end */}

                {/* 8th row Start */}
                <div className="flex items-center sm:space-x-3 tablet:space-x-3  my-3 ">
                  <div className="rounded-full bg-[#151819] w-[20px] h-[20px] flex items-center">
                    <GrFormCheckmark className="w-5 h-5 mx-auto text-white " />
                  </div>
                  <div>
                    <p className="text-[#1A1D1E] sm:text-[14px] tablet:text-[14.6px] font-sans font-medium">
                      24/7 technical support
                    </p>
                  </div>
                </div>
                {/* 8th end */}
              </div>
              {/* End part 3 */}
            </div>
            {/* end All 9 boxes Parent */}
          </motion.div>
          <motion.span
            variants={fadeIn("up", 0.2, "in")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Link
              to="/contactus"
              className=" sm:py-2 tablet:py-3 sm:px-3 tablet:px-0 mt-6 text-center sm:w-[280px] mymob:w-[335px]  myiphone:w-[385px]  tablet:w-[480px]  desktop:w-[472px] mx-auto  text-wrap align-center block rounded-md font-inter text-base font-semibold text-[#000000]   border-t-[#a6d1b6]  border-b-[3px] border-l border-r border-[#558567]  shadow-[inset_0_4px_6px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(255,255,255,1)]"
              style={{
                backgroundImage:
                  " linear-gradient(180deg, #86cba0 0, #6cb487 100%)",
              }}
            >
              {" "}
              Get Started now with our milk delivery app solution
            </Link>
          </motion.span>
        </div>
      </div>
      {/* End Enabling Your Milk Delivery Service’s Success With Enatega.....*/}

      {/*Section Enatega’s On-Demand Milk Ordering App Package*/}

      <div className="sm:my-10 desktop:mt-20 sm:w-[280px] mymob:w-[335px] myiphone:w-[385px]  tablet:w-[708px] desktop:w-[820px] iox:w-[1000px] mx-auto rounded-xl  ">
        <div>
          <motion.p
            variants={fadeIn("up", 0.2, "in")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="font-inter sm:text-[28px] tablet:text-[31px] desktop:text-[33px] iox:text-[35px] text-[#1A1D1E] sm:leading-7 tablet:leading-9 desktop:w-[800px] iox:w-[650px]  font-bold mb-4"
          >
            Enatega’s On-Demand Milk Ordering App Package
          </motion.p>

          <ul>
            <motion.li
              variants={fadeIn("up", 0.2, "in")}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="font-inter sm:text-lg tablet:text-xl text-[#1A1D1E] leading-9 desktop:w-[800px] iox:w-[650px] font-semibold "
            >
              Customer App
            </motion.li>
            <motion.p
              variants={fadeIn("up", 0.2, "in")}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="text-[#222222]  font-[400] font-inter sm:text-base tablet:text-[17px]    desktop:w-[800px] iox:w-[980px] leading-[1.3rem]"
            >
              Enatega’s customer app provides customers with an intuitive
              interface where they can easily place and track orders. Features
              such as real-time delivery tracking, customizable subscription
              plans, and special offers make the app convenient for users who
              rely on regular deliveries.
            </motion.p>

            {/* Rider App */}
            <motion.li
              variants={fadeIn("up", 0.2, "in")}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="font-inter mt-3 sm:text-lg tablet:text-xl text-[#1A1D1E] leading-9 desktop:w-[800px] iox:w-[650px]  font-semibold "
            >
              Rider App
            </motion.li>
            <motion.p
              variants={fadeIn("up", 0.2, "in")}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="text-[#222222]  font-[400] font-inter sm:text-base tablet:text-[17px]    desktop:w-[800px] iox:w-[980px] leading-[1.3rem]"
            >
              Empower your delivery team with Enatega’s dedicated rider app,
              designed to ensure smooth and timely deliveries. The app includes
              route optimization, delivery status updates, and accurate address
              mapping, enabling efficient delivery services.
            </motion.p>

            {/* Admin Dashboard */}
            <motion.li
              variants={fadeIn("up", 0.2, "in")}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="font-inter mt-3 sm:text-lg tablet:text-xl text-[#1A1D1E] leading-9 desktop:w-[800px] iox:w-[650px]  font-semibold "
            >
              Admin Dashboard
            </motion.li>
            <motion.p
              variants={fadeIn("up", 0.2, "in")}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="text-[#222222]  font-[400] font-inter sm:text-base tablet:text-[17px]    desktop:w-[800px] iox:w-[980px] leading-[1.3rem]"
            >
              Enatega’s admin dashboard simplifies overall business management,
              allowing you to oversee delivery zones, schedules, and order
              statuses from one centralized hub. This tool is essential for
              running a successful milk delivery service app, giving businesses
              full control of their operations.
            </motion.p>

            {/* Vendor App*/}
            <motion.li
              variants={fadeIn("up", 0.2, "in")}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="font-inter mt-3 sm:text-lg tablet:text-xl text-[#1A1D1E] leading-9 desktop:w-[800px] iox:w-[650px]  font-semibold "
            >
              Vendor App
            </motion.li>
            <motion.p
              variants={fadeIn("up", 0.2, "in")}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="text-[#222222]  font-[400] font-inter sm:text-base tablet:text-[17px]    desktop:w-[800px] iox:w-[980px] leading-[1.3rem]"
            >
              For dairies and other milk related businesses, Enatega’s vendor
              app makes it easy to manage stock, track orders, and provide
              customers with updates in real time. The platform simplifies
              operations, making it the ideal app for any business aiming to
              thrive in the online market.
            </motion.p>
          </ul>
          <motion.span
            variants={fadeIn("up", 0.2, "in")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Link
              to="/contactus"
              className="sm:mb-10 mb-[80px] sm:py-2 tablet:py-3 sm:px-3 tablet:px-0 mt-4 text-center sm:w-[280px] mymob:w-[335px]  myiphone:w-[385px]  tablet:w-[480px]  desktop:w-[472px] mx-auto  text-wrap align-center inline-block rounded-md font-inter text-base font-semibold text-[#000000]   border-t-[#a6d1b6]  border-b-[3px] border-l border-r border-[#558567]  shadow-[inset_0_4px_6px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(255,255,255,1)]"
              style={{
                backgroundImage:
                  " linear-gradient(180deg, #86cba0 0, #6cb487 100%)",
              }}
            >
              {" "}
              Get Started now with our milk delivery app solution
            </Link>
          </motion.span>
          <motion.p
            variants={fadeIn("up", 0.2, "in")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="font-inter sm:text-[28px] tablet:text-[31px] desktop:text-[33px] iox:text-[35px] text-[#1A1D1E] sm:leading-7.5 tablet:leading-9 desktop:w-[800px] iox:w-[650px]  font-bold"
          >
            Why Choose Enatega for Delivering Milk?
          </motion.p>
          <motion.p
            variants={fadeIn("up", 0.2, "in")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="text-[#222222] my-2 font-[400] font-inter sm:text-base tablet:text-[17px]    desktop:w-[800px] iox:w-[980px] leading-[1.3rem]"
          >
            Enatega offers a flexible, feature-rich platform that’s perfect for
            any business looking to establish or expand a milk delivery
            solution. Whether you’re a local dairy vendor or a larger
            distributor, Enatega supports your needs with tools like real-time
            tracking, subscription management, and customer communication
            features. Start your milk delivery service with Enatega today and
            deliver fresh milk to your customers with ease!
          </motion.p>
          <motion.p
            variants={fadeIn("up", 0.2, "in")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="text-[#222222] font-[400] font-inter sm:text-base tablet:text-[17px]    desktop:w-[800px] iox:w-[980px] leading-[1.3rem]"
          >
            Launch your online gift ordering system with Enatega’s multivendor
            solution and unlock new revenue opportunities today!
          </motion.p>
        </div>
      </div>

      {/* schedule a Call Now */}
      <div className="relative pb-5 mx-auto">
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

      {/* Section 15 Footer */}
      <footer>
        <div className="sm:mt-20 desktop:mt-30 pb-4">
          <div className="desktop:flex desktop:justify-between desktop:mx-5 iox:justify-start iox:space-x-14 iox:w-[86%] iox:mx-auto">
            <div className="mb-8 desktop:mt-[6px]">
              <img
                loading="lazy"
                src="/Pictures/Enatega-Logo.jpg"
                alt=""
                className="mx-auto sm:w-[130px] desktop:w-[180px] h-auto"
              />
            </div>

            <div className="sm:mt-[14px] sm:grid sm:grid-cols-2 sm:gap-y-4 sm:px-4 desktop:w-[600px] iox:grid-cols-4 iox:w-full">
              {/* 1st box Link  */}
              <div className="">
                <p className="font-bold text-[14px] font-inter text-[#1A1D1E]">
                  Resources
                </p>
                <ul className="font-inter text-[#1A1D1ED9]">
                  <li className="py-[5px] sm:text-[12px] mymob:text-[14px] text-[#1A1D1ED9]">
                    {" "}
                    <Link
                      to="/blogs"
                      className="hover:duration-300 hover:text-blue-700 text-[#1a1d1ed9]"
                    >
                      Blog
                    </Link>{" "}
                  </li>
                  <li className="py-[5px] sm:text-[12px] mymob:text-[14px] text-[#1A1D1ED9]">
                    {" "}
                    <Link
                      to="/documentation"
                      className="hover:duration-300 hover:text-blue-700 text-[#1a1d1ed9]"
                    >
                      Documentation
                    </Link>{" "}
                  </li>
                  <li className="py-[5px] sm:text-[12px] mymob:text-[14px] text-[#1A1D1ED9]">
                    {" "}
                    <Link
                      to="/features"
                      className="hover:duration-300 hover:text-blue-700 text-[#1a1d1ed9]"
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
                  <li className="py-[5px] ">
                    {" "}
                    <Link
                      to="/blink"
                      className="hover:duration-300 hover:text-blue-700 text-[#1a1d1ed9]"
                    >
                      Blink
                    </Link>{" "}
                  </li>
                  <li className="py-[5px]">
                    {" "}
                    <Link
                      to="/deonde"
                      className="hover:duration-300 hover:text-blue-700 text-[#1a1d1ed9]"
                    >
                      Deonde
                    </Link>{" "}
                  </li>
                  <li className="py-[5px]">
                    {" "}
                    <Link
                      to="/gloriaFood"
                      className="hover:duration-300 hover:text-blue-700 text-[#1a1d1ed9]"
                    >
                      GloriaFood
                    </Link>{" "}
                  </li>
                  <li className="py-[5px]">
                    {" "}
                    <Link
                      to="/orderingco"
                      className="hover:duration-300 hover:text-blue-700 text-[#1a1d1ed9]"
                    >
                      Ordering.Co
                    </Link>{" "}
                  </li>
                  <li className="py-[5px]">
                    {" "}
                    <Link
                      to="/shipday"
                      className="hover:duration-300 hover:text-blue-700 text-[#1a1d1ed9]"
                    >
                      Shipday
                    </Link>{" "}
                  </li>
                  <li className="py-[5px]">
                    {" "}
                    <Link
                      to="/spotNeats"
                      className="hover:duration-300 hover:text-blue-700 text-[#1a1d1ed9]"
                    >
                      SpotNeats
                    </Link>{" "}
                  </li>
                  <li className="py-[5px]">
                    {" "}
                    <Link
                      to="/yelo"
                      className="hover:duration-300 hover:text-blue-700 text-[#1a1d1ed9]"
                    >
                      Yelo
                    </Link>{" "}
                  </li>
                  <li className="py-[5px]">
                    {" "}
                    <Link
                      to="/zeew"
                      className="hover:duration-300 hover:text-blue-700 text-[#1a1d1ed9]"
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
                  <li className="py-[5px]">
                    {" "}
                    <Link
                      to="/yalladelievery/"
                      className="hover:duration-300 hover:text-blue-700 text-[#1a1d1ed9]"
                    >
                      Yalla Delievery
                    </Link>{" "}
                  </li>
                  <li className="py-[5px]">
                    {" "}
                    <Link
                      to="/stylizenow/"
                      className="hover:duration-300 hover:text-blue-700 text-[#1a1d1ed9]"
                    >
                      Stylizenow
                    </Link>{" "}
                  </li>
                  <li className="py-[5px]">
                    {" "}
                    <Link
                      to="/easyEats/"
                      className="hover:duration-300 hover:text-blue-700 text-[#1a1d1ed9]"
                    >
                      Easy Eats
                    </Link>{" "}
                  </li>
                  <li className="py-[5px]">
                    {" "}
                    <Link
                      to="/vivyied"
                      className="hover:duration-300 hover:text-blue-700 text-[#1a1d1ed9]"
                    >
                      Vinifyed
                    </Link>{" "}
                  </li>
                  <li className="py-[5px]">
                    {" "}
                    <Link
                      to="/snapdelievery/"
                      className="hover:duration-300 hover:text-blue-700 text-[#1a1d1ed9]"
                    >
                      Snap delievery
                    </Link>{" "}
                  </li>
                  <li className="py-[5px]">
                    {" "}
                    <Link
                      to="/borkuDelievery/"
                      className="hover:duration-300 hover:text-blue-700 text-[#1a1d1ed9]"
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
                  <li className="py-1 text-[#1a1d1ed9]">
                    {" "}
                    <Link>
                      1021 E Lincolnway Suite #6581,Cheyenne, Wyoming 82001,
                      United States
                    </Link>{" "}
                  </li>
                  <li className="py-1 text-[#1a1d1ed9]">
                    {" "}
                    <Link>sales@enatega.com</Link>{" "}
                  </li>
                  <li className="py-1 text-[#1a1d1ed9]">
                    {" "}
                    <Link>+1 (307) 776-8999</Link>{" "}
                  </li>
                  <ul className="flex space-x-2 items-center py-1 text-[#1a1d1ed9]">
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

          <div className="sm:hidden desktop:flex justify-between ml-10 w-[630px] iox:hidden">
            {/* 3rd box Link */}
            <div className="w-[150px]">
              <p className="font-bold  text-[14px] font-inter text-[#1A1D1E]">
                Case Studies
              </p>
              <ul className="font-inter text-[#1A1D1ED9] sm:text-[12px] mymob:text-[14px]">
                <li className="py-1">
                  {" "}
                  <Link
                    to="/yalladelievery/"
                    className="hover:duration-300 hover:text-blue-700"
                  >
                    {" "}
                    Yalla Delievery
                  </Link>{" "}
                </li>
                <li className="py-1">
                  {" "}
                  <Link
                    to="/stylizenow/"
                    className="hover:duration-300 hover:text-blue-700"
                  >
                    Stylizenow
                  </Link>{" "}
                </li>
                <li className="py-1">
                  {" "}
                  <Link
                    to="/easyEats/"
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
                    to="/snapdelievery/"
                    className="hover:duration-300 hover:text-blue-700"
                  >
                    Snap delievery
                  </Link>{" "}
                </li>
                <li className="py-1">
                  {" "}
                  <Link
                    to="/borkuDelievery/"
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
            <ul className="flex space-x-6 items-center font-inter text-[#1a1d1ed9] text-[14px]">
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

export default Milk;
