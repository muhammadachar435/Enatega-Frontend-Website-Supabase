import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SidebarData from "../Component/Sidebardata";
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

// Yalla Delivery
function YallaDelievery() {
  // useState
  const [sidebar, setSidebar] = useState(false);
  const [caseStudiesbar, setCaseStudies] = useState(false);
  const [useCasebar, setUseCase] = useState(false);
  const [caseshow, setcaseshow] = useState(false);
  const [boxShow, setBoxShow] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const [OpenTab, setOpenTab] = useState(true);

  const VideoName = [
    {
      id: 1,
      label: "Video 1",
    },
    {
      id: 2,
      label: "Video 2",
    },
    {
      id: 3,
      label: "Video 3",
    },
    {
      id: 4,
      label: "Video 4",
    },
  ];

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
          <span className="sm:text-[8px] sm:w-20 sm:py-1  mymob:py-[6px] tablet:w-auto sm:text-center  tablet:text-base hover:shadow-2xl bg-white tablet:py-[4.5px] tablet:px-[2px] desktop:py-[8px] desktop:mt-2 rounded-md desktop:border-l-[2px] desktop:border-r-[2px] desktop:border-b-[2px] desktop:border-[#bdc1c3]">
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

      {/* Parent Div */}
      <div className="sm:mt-24 tablet:mt-29 tablet:h-[890px] iox:h-[1000px]  biglap:h-[1177px] relative">
        <div
          className="sm:h-[660px] mymob:h-[639px] myiphone:h-[571px] tablet:h-[623px] desktop:h-[745px] iox:h-[800px] biglap:h-[873px] w-full "
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(124, 108, 228) 0%, rgb(71, 51, 193) 100%)",
          }}
        >
          <div className="absolute sm:top-1/2 tablet:top-[54%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center">
            <p className="font-inter mb-5 font-[600] text-white text-lg  text-center">
              Powered by Enatega
            </p>
            <p className="font-inter  font-[600] text-white capitalize sm:text-[32px] mymob:text-[33.9px] tablet:text-[39px] desktop:text-[43px] iox:text-[50px] biglap:text-[60px] text-center mymob:mx-10 tablet:mx-0 tablet:w-[708px] desktop:w-[964px] iox:w-full iox:max-w-[1150px]">
              Yalla:{" "}
              <span
                className="sm:px-[2px] tablet:px-1 py-[6px] text-center leading-[62px] rounded-xl"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(41, 36, 78, 0.5) 0%, rgba(83, 65, 191, 0.5) 25.38%, rgba(83, 65, 191, 0.5) 58.44%, rgba(41, 36, 78, 0.5) 100%)",
                }}
              >
                Redefining Food and Grocery Delivery
              </span>
            </p>
            <p className="font-inter mb-3 font-[600] text-white capitalize sm:text-[32px] mymob:text-[33.9px] tablet:text-[39px] desktop:text-[43px] iox:text-[50px] biglap:text-[60px] text-center">
              Across the Region
            </p>
            <p className="font-inter text-center text-white text-base mymob:mx-10 tablet:mx-0 tablet:w-[600px] desktop:w-[880px] iox:w-full iox:max-w-[1000px] mx-auto">
              Yalla is a dynamic food and grocery delivery app built on Enatega,
              offering a seamless bilingual experience. Designed for growth, it
              delivers fast, intuitive service across the regional market.
            </p>
            <Link
              to="https://yalla-delivery.com/discovery"
              target="blank"
              className="sm:text-base tablet:text-lg border-2 border-white mt-6 transition-all font-[500] inline-block py-[10px] px-[20px] text-white rounded-lg hover:scale-101 hover:duration-200"
            >
              Visit Website
            </Link>

            <div className="hidden tablet:flex tablet:space-x-8 mt-12 mb-5">
              <div className="tablet:px-8 tablet:py-8 desktop:px-14 desktop:py-10 rounded-3xl flex-1 flex items-center bg-white shadow-xl">
                <img
                  src="/Pictures/yalla-delivey.jpg"
                  alt=""
                  className="tablet:w-[290px] desktop:w-[348px] iox:w-[436px] h-auto"
                />
              </div>
              <div className="tablet:px-8 tablet:py-8 desktop:px-14 desktop:py-10 rounded-3xl flex-1 flex items-center bg-white shadow-xl">
                <img
                  src="/Pictures/yalla-dashborad.jpg"
                  alt=""
                  className="tablet:w-[290px] desktop:w-[348px]  iox:w-[436px]  h-auto"
                />
              </div>
            </div>
            {/* End Images div */}
          </div>
        </div>
      </div>
      {/* Img Only display Mobiles  */}
      <div className="sm:flex tablet:hidden w-[90%] mt-10 px-4 py-4 bg-white shadow-lg rounded-3xl mx-auto">
        <img
          src="/Pictures/yalla-delivey.jpg"
          alt=""
          className="w-auto h-auto"
        />
      </div>
      {/* Images display only Mobiles */}
      <div className="sm:flex tablet:hidden w-[90%] mt-4 px-4 py-4 bg-white shadow-lg rounded-3xl mx-auto">
        <img
          src="/Pictures/yalla-dashborad.jpg"
          alt=""
          className="w-auto h-auto"
        />
      </div>
      <p className="font-inter text-[17px] mt-5 mb-10 text-[#0F172A] text-base sm:w-[90%] tablet:w-[94%] text-center iox:w-[1140px] mx-auto">
        <span className="font-semibold">Yalla </span>is a powerful, all-in-one
        food and grocery delivery app built on top of the Enatega platform.
        Designed to meet the fast-paced demands of a growing customer base,
        Yalla combines intuitive design with modern features to offer a
        world-class delivery experience in both Arabic and English. From concept
        to launch, this case study highlights how Yalla became a standout player
        in the regional market, and how it continues to grow.
      </p>

      <div className="bg-[#f9fafc] py-[50px] px-[20px] mb-10 sm:pb-10 iox:pb-18">
        <p className="text-[#1A1D1E] font-inter leading-7.5 sm:text-[28px] font-semibold tablet:text-[31px] desktop:text-[32px] iox:text-[35px] capitalize sm:w-full tablet:w-full iox:w-[1140px] mx-auto">
          The Challenges Faced by <span className="text-[#624DE3]">Yalla:</span>
        </p>
        <p className="font-inter text-[17px] my-[10px] text-[#222222] sm:w-full tablet:w-full iox:w-[1140px] mx-auto">
          Yalla set out to solve a common frustration in the delivery space:
          juggling multiple apps for different needs. The goal was to build a
          single platform that supports:
        </p>

        {/* The Challenges Faced by Yalla: */}
        <div className="mt-10 relative shadow-lg bg-white sm:px-6 py-6 flex items-center sm:w-[90%] mymob:w-[94%] tablet:w-[90%] desktop:w-[85%] iox:w-[995px] mx-auto rounded-xl">
          {/* Multifunctional Deliveries:  */}
          <div className="absolute left-[-15px]">
            <p
              className="text-[14px] font-inter font-semibold  text-white rounded-full sm:w-7 sm:h-7 tablet:w-[30px] mymob:h-[30px] flex items-center justify-center"
              style={{
                background: "linear-gradient(180deg, #7C6CE4 0%, #624DE3 100%)",
              }}
            >
              1
            </p>
          </div>
          <div className="">
            <p className="text-[#222222] sm:text-base tablet:text-[17px]  font-inter">
              {" "}
              <span className="font-semibold text-[#1A1D1E">
                Multifunctional Deliveries:
              </span>{" "}
              Combining food, grocery, and retail orders into one seamless app.
            </p>
          </div>
        </div>
        {/* 1st end  */}
        {/* 2nd Multi-language Accessibility: */}
        <div className="mt-5 relative shadow-lg bg-white sm:px-6 py-6 flex items-center sm:w-[90%] mymob:w-[94%] tablet:w-[90%] desktop:w-[85%] iox:w-[995px] mx-auto rounded-xl">
          <div className="absolute left-[-15px]">
            <p
              className="text-[14px] font-inter font-semibold  text-white rounded-full sm:w-7 sm:h-7 tablet:w-[30px] mymob:h-[30px] flex items-center justify-center"
              style={{
                background: "linear-gradient(180deg, #7C6CE4 0%, #624DE3 100%)",
              }}
            >
              2
            </p>
          </div>
          <div className="">
            <p className="text-[#222222] sm:text-base tablet:text-[17px]  font-inter">
              {" "}
              <span className="font-semibold text-[#1A1D1E">
                Multi-language Accessibility:
              </span>{" "}
              With a focus on Arabic and English to serve diverse communities.
            </p>
          </div>
        </div>
        {/* 2nd end */}
        {/* 3rd  Feature-Rich Functionality: */}
        <div className="mt-5 relative shadow-lg bg-white sm:px-6 py-6 flex items-center sm:w-[90%] mymob:w-[94%] tablet:w-[90%] desktop:w-[85%] iox:w-[995px] mx-auto rounded-xl">
          <div className="absolute left-[-15px]">
            <p
              className="text-[14px] font-inter font-semibold text-white rounded-full sm:w-7 sm:h-7 tablet:w-[30px] mymob:h-[30px] flex items-center justify-center"
              style={{
                background: "linear-gradient(180deg, #7C6CE4 0%, #624DE3 100%)",
              }}
            >
              3
            </p>
          </div>
          <div className="">
            <p className="text-[#222222] sm:text-base tablet:text-[17px]  font-inter">
              {" "}
              <span className="font-semibold text-[#1A1D1E">
                Feature-Rich Functionality:
              </span>{" "}
              Standing out in a market dominated by giants like Wolt and Haat.
            </p>
          </div>
        </div>
        {/* 3rd end */}
        {/* 4th Localized Payments: */}
        <div className="mt-5 relative shadow-lg bg-white sm:px-6 py-6 flex items-center sm:w-[90%] mymob:w-[94%] tablet:w-[90%] desktop:w-[85%] iox:w-[995px] mx-auto rounded-xl">
          <div className="absolute left-[-15px]">
            <p
              className="text-[14px] font-inter font-semibold  text-white rounded-full sm:w-7 sm:h-7 tablet:w-[30px] mymob:h-[30px] flex items-center justify-center"
              style={{
                background: "linear-gradient(180deg, #7C6CE4 0%, #624DE3 100%)",
              }}
            >
              4
            </p>
          </div>
          <div className="">
            <p className="text-[#222222] sm:text-base tablet:text-[17px]  font-inter">
              {" "}
              <span className="font-semibold text-[#1A1D1E">
                Localized Payments:
              </span>{" "}
              Offering region-specific payment gateways that match local
              expectations.
            </p>
          </div>
        </div>
        {/* End 4th Localized Payments */}

        {/* Some Text */}
        <p className="font-inter mt-14 text-[17px] text-[#222222] text-base sm:w-full tablet:w-full iox:w-[1140px] mx-auto">
          To bring this ambitious vision to life, Yalla needed a flexible,
          scalable solution—and a partner that could deliver quickly without
          compromising quality.
        </p>
      </div>
      {/* End The Challenges Faced by Yalla: */}

      {/* The Development Journey: */}
      <div className="sm:py-[10px] tablet:py-[50px] px-[20px] mb-5 sm:pb-10 iox:pb-18">
        <p className="text-[#1A1D1E] font-inter font-semibold sm:text-[28px] leading-7.5  tablet:text-[31px] desktop:text-[32px] iox:text-[35px] capitalize sm:w-full myiphone:w-[385px] tablet:w-full iox:w-[1140px] mx-auto">
          The <span className="text-[#624DE3]">Development Journey: </span>
        </p>

        {/* All Circle Parent Div */}
        <div className="desktop:grid desktop:grid-cols-4 desktop:mt-7 iox:w-[86%] iox:mx-auto biglap:w-[50%]">
          {/* Circle 1 */}
          <div>
            <div className="relative ">
              <div className="sm:p-5 desktop:p-3 text-[14px] font-inter font-[500] z-50 sm:border-5 desktop:border-6 border-[#8a6ae9] bg-[#624DE3] sm:w-[190px] sm:h-[190px] desktop:w-[220px] desktop:h-[220px] text-white rounded-full flex justify-center items-center sm:mt-14 desktop:mt-[254px] mx-auto">
                <div className="z-50 flex items-center flex-col justify-center font-[500]">
                  <p>PHASE I </p>
                  <p className="text-center mt-2 font-[400]">
                    Adapting Enatega for Multifunctional Delivery
                  </p>
                </div>
                <div className="hidden desktop:flex desktop:w-[400px] biglap:w-[500px] h-[1px] border border-[#6257a3] absolute right-[-180.5px] biglap:right-[-240px] z-[-1]"></div>
              </div>
              {/* Segment Line */}
              <div className="relative sm:h-13 iox:h-15 w-[0.2px] mx-auto">
                <div className="absolute top-[-2px] left-[-1px] h-1 w-[4px] rounded-full bg-[#604fc1]"></div>
                <div className="sm:h-13 iox:h-15 w-[0.2px] border text-[#a59cd1]"></div>
                <div className="absolute sm:bottom-[-2px] left-[-1px] h-1 w-[4px] rounded-full bg-[#604fc1]"></div>{" "}
              </div>
              {/* End Segment Line */}
            </div>
            {/* end Circle 1 */}
            <div className="sm:mx-auto desktop:ml-6 px-[14px] sm:w-[280px] mymob:w-[298px] h-auto py-4  mx-auto border border-[#b3abe4] rounded-2xl text-[#0F172A] font-[500] text-[14px] bg-[#f9fafc]">
              <p>
                Using Enatega’s white-label framework as a foundation, the
                Enatega team customized the platform to support more than just
                food delivery. This included:
              </p>
              <ul className="list-disc px-5 py-2">
                <li>Grocery and retail integration.</li>
                <li>Vendor-side tools for managing complex inventories.</li>
                <li>
                  Support for regional fulfillment models across diverse store
                  types.
                </li>
              </ul>
              <p>
                This gave Yalla an edge from day one, as it could serve both
                restaurants and supermarkets with a unified user experience.
              </p>
            </div>
          </div>
          {/* End circle 1 with content */}

          {/* Circle 2 */}
          <div>
            <div className="hidden desktop:flex px-[14px] py-4  sm:w-[280px] mymob:w-[298px] h-auto  mx-auto border border-[#b3abe4] rounded-2xl text-[#0F172A] font-[500] text-[14px] bg-[#f9fafc] ">
              <p>
                Localization was critical. The UI was designed to support both
                right-to-left (RTL) and left-to-right (LTR) languages, enabling
                seamless toggling between Arabic and English. Every interface
                element—from navigation to product listings—was carefully
                translated and culturally adapted.
              </p>
            </div>

            <div className="relative ">
              <div className="relative sm:h-13 w-[0.2px] mx-auto hidden desktop:flex desktop:flex-col">
                <div className="absolute top-[-2px] left-[-1px] h-1 w-[4px] rounded-full bg-[#604fc1]"></div>
                <div className="sm:h-13 w-[0.2px] border text-[#a59cd1]"></div>
                <div className="absolute bottom-[-2px] left-[-1px] h-1 w-[4px] rounded-full bg-[#604fc1]"></div>{" "}
              </div>
              <div className="sm:p-5 desktop:p-3 text-[14px] font-inter font-[500] sm:border-5 desktop:border-6 border-[#8a6ae9] bg-[#624DE3] sm:w-[190px] sm:h-[190px] desktop:w-[220px] desktop:h-[220px] text-white rounded-full flex justify-center items-center sm:mt-14 desktop:mt-0 mx-auto">
                <div className="z-50 flex items-center flex-col justify-center font-[500]">
                  <p>PHASE II </p>
                  <p className="text-center mt-2 font-[400]">
                    Building a Multi-Language, User-Centric Interface
                  </p>
                </div>
                <div className="hidden desktop:flex desktop:w-[400px] biglap:w-[500px] h-[1px] border border-[#6257a3] absolute right-[-180.5px] biglap:right-[-240px] z-[-1]"></div>
              </div>
              {/* Segment Line */}
              <div className="relative h-13 w-[0.2px] mx-auto desktop:hidden">
                <div className="absolute top-[-2px] left-[-1px] h-1 w-[4px] rounded-full bg-[#604fc1]"></div>
                <div className="h-13 w-[0.2px] border text-[#a59cd1]"></div>
                <div className="absolute bottom-[-2px] left-[-1px] h-1 w-[4px] rounded-full bg-[#604fc1]"></div>{" "}
              </div>
              {/* End Segment Line */}
            </div>
            {/* end Circle 2 */}
            <div className="desktop:hidden px-[14px] py-4  sm:w-[280px] mymob:w-[298px] h-auto  mx-auto border border-[#b3abe4] rounded-2xl text-[#0F172A] font-[500] text-[14px] bg-[#f9fafc] ">
              <p>
                Localization was critical. The UI was designed to support both
                right-to-left (RTL) and left-to-right (LTR) languages, enabling
                seamless toggling between Arabic and English. Every interface
                element—from navigation to product listings—was carefully
                translated and culturally adapted.
              </p>
            </div>
          </div>
          {/* Circle 2 with end content */}

          {/* Circle 3 */}
          <div>
            <div className="relative">
              <div className="sm:p-5 desktop:p-3 text-[14px] font-inter font-[500] sm:border-5 desktop:border-6 border-[#8a6ae9] bg-[#624DE3] sm:w-[190px] sm:h-[190px] desktop:w-[220px] desktop:h-[220px] text-white rounded-full flex justify-center items-center sm:mt-14 desktop:mt-[253px]  mx-auto">
                <div className="z-50 flex items-center flex-col justify-center font-[500]">
                  <p>PHASE III</p>
                  <p className="text-center mt-2 font-[400]">
                    Developing Market-Leading Features
                  </p>
                </div>
                <div className="hidden desktop:flex desktop:w-[400px] biglap:w-[500px] h-[1px] border border-[#6257a3] absolute right-[-180.5px] biglap:right-[-240px] z-[-1]"></div>
              </div>
              {/* Segment Line */}
              <div className="relative sm:h-13 iox:h-15 w-[0.2px] mx-auto">
                <div className="absolute top-[-2px] left-[-1px] h-1 w-[4px] rounded-full bg-[#604fc1]"></div>
                <div className=" sm:h-13 iox:h-15  w-[0.2px] border text-[#a59cd1]"></div>
                <div className="absolute bottom-[-2px] left-[-1px] h-1 w-[4px] rounded-full bg-[#604fc1]"></div>{" "}
              </div>
              {/* End Segment Line */}
            </div>
            {/* end Circle 3 */}
            <div className="px-[14px] py-4  sm:w-[280px] mymob:w-[298px] h-auto mx-auto border border-[#b3abe4] rounded-2xl text-[#0F172A] font-[500] text-[14px] bg-[#f9fafc] ">
              <p>To stand out in a saturated space, Yalla introduced</p>
              <ul className="list-disc px-5 py-2">
                <li>
                  <span className="font-bold">
                    Real-time, interactive map views
                  </span>{" "}
                  for browsing local vendors
                </li>
                <li>
                  <span className="font-bold">Smart search filters</span> for
                  cuisine, price, availability, and dietary needs
                </li>
                <li>
                  <span className="font-bold">
                    {" "}
                    Personalized recommendations
                  </span>{" "}
                  based on user behavior and trends
                </li>
                <li>
                  <span className="font-bold"> Category-based </span> menus for
                  groceries, food, and essentials.
                </li>
              </ul>
            </div>
          </div>
          {/* Circle 3 with end content */}

          {/* Circle 4 */}
          <div>
            <div className="relative desktop:mt-10">
              <div className="relative hidden desktop:flex px-[14px] py-4  sm:w-[280px] mymob:w-[298px] h-auto  right-20 border border-[#b3abe4] rounded-2xl text-[#0F172A] font-[500] text-[14px] bg-[#f9fafc] ">
                <p>
                  Yalla needed flexible, regionally compliant payment solutions.
                  The Enatega team integrated a local payment provider (HYP).
                  This addition allowed customers to use their credit and debit
                  cards to pay for orders.
                </p>
              </div>

              {/* Segment Line */}
              <div className="relative h-13 w-[0.2px] mx-auto sm:hidden desktop:flex desktop:flex-col">
                <div className="absolute top-[-2px] left-[-1px] h-1 w-[4px] rounded-full bg-[#604fc1]"></div>
                <div className="h-13 w-[0.2px] border text-[#a59cd1]"></div>
                <div className="absolute bottom-[-2px] left-[-1px] h-1 w-[4px] rounded-full bg-[#604fc1]"></div>{" "}
              </div>
              {/* End Segment Line */}

              <div className="sm:p-5 desktop:p-3 text-[14px] font-inter font-[500] sm:border-5 desktop:border-6 border-[#8a6ae9] bg-[#624DE3] sm:w-[190px] sm:h-[190px] desktop:w-[220px] desktop:h-[220px] text-white rounded-full flex justify-center items-center sm:mt-14 desktop:mt-0 mx-auto">
                <div className="flex items-center flex-col justify-center font-[500]">
                  <p> PHASE IV</p>
                  <p className="text-center mt-2 font-[400] ">
                    Payment Gateway Customization
                  </p>
                </div>
              </div>
              {/* Segment Line */}
              <div className="relative h-13 w-[0.2px] mx-auto desktop:hidden">
                <div className="absolute top-[-2px] left-[-1px] h-1 w-[4px] rounded-full bg-[#604fc1]"></div>
                <div className="h-13 w-[0.2px] border text-[#a59cd1]"></div>
                <div className="absolute bottom-[-2px] left-[-1px] h-1 w-[4px] rounded-full bg-[#604fc1]"></div>{" "}
              </div>
              {/* End Segment Line */}
            </div>
            {/* end Circle 4 */}
            <div className="desktop:hidden px-[14px] py-4  sm:w-[280px] mymob:w-[298px] h-auto  mx-auto border border-[#b3abe4] rounded-2xl text-[#0F172A] font-[500] text-[14px] bg-[#f9fafc] ">
              <p>
                Yalla needed flexible, regionally compliant payment solutions.
                The Enatega team integrated a local payment provider (HYP). This
                addition allowed customers to use their credit and debit cards
                to pay for orders.
              </p>
            </div>
          </div>
          {/* Circle 4 with end content */}
        </div>
        {/* End Parent Circle Div */}
      </div>
      {/* End Circle Portion/Section */}

      {/* Launch & Results: */}
      <div className="px-[20px] mb-5 sm:pb-10 iox:pb-18 ">
        <p className="text-[#1A1D1E] font-inter sm:text-[28px] font-semibold tablet:text-[31px] desktop:text-[32px] iox:text-[35px] capitalize  sm:w-full tablet:w-full iox:w-[1140px] mx-auto">
          Launch & <span className="text-[#624DE3]">Results: </span>
        </p>
        <p className="font-inter text-[17px] text-[#222222] sm:w-full tablet:w-full iox:w-[1140px] mx-auto">
          With a laser-focused agile approach, Yalla’s MVP was launched within
          just a few months. The results were immediate and impressive:
        </p>

        <div className="my-8 desktop:hidden">
          <img
            src="/Pictures/yalla-app-2.jpg"
            alt=""
            className="sm:w-[280px] mymob:w-[335px] myiphone:w-[360px] mx-auto"
          />
        </div>

        {/* Desktop Use Flex img and points */}
        <div className="flex items-center justify-between desktop:pr-10 iox:pr-20 desktop:mt-8 iox:w-[1140px] mx-auto">
          {/* 2nd box */}
          <div className="sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[472px] iox:w-[550px] h-auto ">
            {/* 1st row Start */}
            <div className="flex sm:space-x-2 sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[472px] iox:w-[550px]">
              <div className="rounded-full bg-[#f5ecfd] w-[28px] h-[28px] flex items-center">
                <img
                  src="/Pictures/Check-icon.png"
                  alt=""
                  className="w-6 h-6 "
                />
              </div>
              <div>
                <p className="text-[#0F172A] sm:text-lg sm:w-61 mymob:w-full mymob:max-w-[340px] tablet:w-full tablet:max-w-[728px]  desktop:w-full desktop:max-w-[440px] font-bold font-inter">
                  60,000+ active monthly users
                </p>
              </div>
            </div>
            {/* 1st end */}

            {/* 2nd row Start */}
            <div className="flex sm:space-x-2 my-4 sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[472px] iox:w-[550px] h-auto">
              <div className="rounded-full bg-[#f5ecfd] w-[28px] h-[28px] flex items-center">
                <img
                  loading="lazy"
                  src="/Pictures/Check-icon.png"
                  alt=""
                  className="w-6 h-6 "
                />
              </div>
              <div>
                <p className="text-[#0F172A] sm:text-lg font-[400] sm:w-61 mymob:w-full mymob:max-w-[340px] tablet:w-full tablet:max-w-[728px]  desktop:w-full desktop:max-w-[540px] font-inter">
                  <span className="font-bold">
                    50+ operational restaurants and vendors{" "}
                  </span>
                  onboarded
                </p>
              </div>
            </div>
            {/* 2nd end */}
            {/* 3rd row Start */}
            <div className="flex sm:space-x-2 my-4 sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[472px] iox:w-[550px] h-auto">
              <div className="rounded-full bg-[#f5ecfd] w-[28px] h-[28px] flex items-center">
                <img
                  loading="lazy"
                  src="/Pictures/Check-icon.png"
                  alt=""
                  className="w-6 h-6 "
                />
              </div>
              <div>
                <p className="text-[#0F172A] sm:text-lg font-[400] sm:w-61 mymob:w-full mymob:max-w-[340px] tablet:w-full tablet:max-w-[728px]  desktop:w-full desktop:max-w-[540px] font-inter">
                  Growing engagement with
                  <span className="font-bold">
                    {" "}
                    daily order volume increasing steadily
                  </span>
                </p>
              </div>
            </div>
            {/* 3rd end */}

            {/* 4th row Start */}
            <div className="flex sm:space-x-2 my-4 sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[472px] iox:w-[550px] h-auto">
              <div className="rounded-full bg-[#f5ecfd] w-[28px] h-[28px] flex items-center">
                <img
                  loading="lazy"
                  src="/Pictures/Check-icon.png"
                  alt=""
                  className="w-6 h-6 "
                />
              </div>
              <div>
                <p className="text-[#0F172A] sm:text-lg  sm:w-61 mymob:w-full mymob:max-w-[340px] tablet:w-full tablet:max-w-[728px] desktop:w-full desktop:max-w-[540px] font-inter font-[400]">
                  Positive reviews citing UI simplicity and multi-functionality
                </p>
              </div>
            </div>
            {/* 4th end */}

            {/* 5th  */}
            <p className="font-inter text-lg font-[400] text-[#0F172A] sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[472px] iox:w-[550px] h-auto my-10 mx-auto ">
              Yalla has quickly cemented its reputation as a go-to app in the
              food and grocery delivery space and it’s only getting started.
            </p>

            {/* End 5th */}
          </div>
          {/* 2nd box end points */}

          {/* Images use desktop */}
          <div className="my-8 hidden desktop:flex ">
            <img
              loading="lazy"
              src="/Pictures/yalla-app-2.jpg"
              alt=""
              className="sm:w-[280px] mymob:w-[335px] myiphone:w-[360px] "
            />
          </div>
        </div>
        {/* End flex box img and points */}
      </div>
      {/* End Section Launch & Results */}

      {/* Section Client Showcase: See Yalla in Action */}
      <div className="px-[20px] mb-12 sm:pb-10 iox:pb-18">
        <p className="text-[#1A1D1E] leading-7.5 font-inter sm:text-[28px] font-semibold tablet:text-[31px] desktop:text-[32px] iox:text-[35px] capitalize sm:w-full tablet:w-full iox:w-[1140px] mx-auto">
          Client Showcase: See{" "}
          <span className="text-[#624DE3]">Yalla in Action</span>
        </p>
        <p className="font-inter text-[17px] text-[#222222] sm:w-full my-[10px] tablet:w-full iox:w-[1140px] mx-auto">
          Explore how Yalla is transforming food and grocery delivery through
          real-world product footage. Swipe through the carousel below to view:
        </p>
        {/* Video Label Map */}
        <div className="sm:mt-10 sm:w-[260px] mymob:w-[335px] myiphone:w-[350px]  sm:grid sm:grid-cols-3 myiphone:grid-cols-4 sm:place-items-center sm:gap-y-3 tablet:w-[600px] desktop:w-[700px] iox:w-[840px] mx-auto border-b border-gray-200 tablet:flex tablet:justify-center items-center tablet:space-x-10 font-inter">
          {VideoName.map((video) => {
            const isFourth = video.id === 4; // 4th item
            return (
              <button
                onClick={() => {
                  setActiveTab(video.id);
                  setOpenTab(true);
                }}
                key={video.id}
                className={`
          ${
            activeTab === video.id
              ? "text-[#624DE3] border-b border-[#624DE3] font-semibold"
              : "text-[#1B2027] font-normal"
          }
          text-base px-2 py-1 cursor-pointer font-[600] font-inter text-[15px] transition-all
          ${
            isFourth ? "sm:col-start-2 myiphone:col-start-auto" : ""
          }  /* This centers the 4th button */
        `}
              >
                {video.label}
              </button>
            );
          })}
        </div>
        {OpenTab && activeTab === 1 && (
          <div className="mt-8 ">
            <video
              src="/Video/yalla-delivery-1.webm"
              controls
              className="h-[500px] rounded-2xl  mx-auto object-cover shadow-lg"
            ></video>
          </div>
        )}
        {OpenTab && activeTab === 2 && (
          <div className="mt-8 ">
            <video
              src="/Video/yalla-delivery-2.webm"
              controls
              className="h-[500px] rounded-2xl  mx-auto object-cover"
            ></video>
          </div>
        )}
        {OpenTab && activeTab === 3 && (
          <div className="mt-8 ">
            <video
              src="/Video/yalla-delivery-3.webm"
              controls
              className="h-[500px] rounded-2xl  mx-auto object-cover"
            ></video>
          </div>
        )}
        {OpenTab && activeTab === 4 && (
          <div className="mt-8 ">
            <video
              src="/Video/Yalla-Client-Review.webm"
              controls
              className="h-[500px] rounded-2xl  mx-auto object-cover"
            ></video>
          </div>
        )}
      </div>
      {/* End Section Client Showcase: See Yalla in Action */}

      {/* Looking Ahead: Scaling Up and Reaching Further*/}
      <div className="px-[20px] sm:pb-10 iox:pb-16 ">
        <p className="text-[#1A1D1E] font-inter sm:text-[28px] font-semibold tablet:text-[31px] desktop:text-[32px] iox:text-[35px] capitalize  sm:w-full tablet:w-full iox:w-[1140px] mx-auto">
          Looking Ahead:
          <span className="text-[#624DE3]">
            {" "}
            Scaling Up and Reaching Further{" "}
          </span>
        </p>
        <p className="font-inter text-[17px] text-[#222222] sm:w-full tablet:w-full iox:w-[1140px] mx-auto">
          With a strong foundation in place, Yalla is not slowing down. The
          roadmap includes:
        </p>

        <div className="my-8 desktop:hidden">
          <img
            loading="lazy"
            src="/Pictures/yalla-app-2.jpg"
            alt=""
            className="sm:w-[280px] mymob:w-[335px] myiphone:w-[360px] mx-auto"
          />
        </div>

        {/* Desktop Use Flex img and points */}
        <div className="flex items-center justify-between desktop:pr-10 iox:pr-20 desktop:mt-8 iox:w-[1140px] mx-auto">
          {/* 2nd box */}
          <div className="sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[472px] iox:w-[550px] h-auto ">
            {/* 1st row Start */}
            <div className="flex sm:space-x-2 sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[472px] iox:w-[550px]">
              <div className="rounded-full bg-[#f5ecfd] w-[28px] h-[28px] flex items-center">
                <img
                  loading="lazy"
                  src="/Pictures/Check-icon.png"
                  alt=""
                  className="w-6 h-6 "
                />
              </div>
              <div>
                <p className="text-[#0F172A] sm:text-lg sm:w-61 mymob:w-full mymob:max-w-[340px] tablet:w-full tablet:max-w-[728px]  desktop:w-full desktop:max-w-[440px] font-[400] font-inter">
                  Expanding to more cities and restaurant partners
                </p>
              </div>
            </div>
            {/* 1st end */}

            {/* 2nd row Start */}
            <div className="flex sm:space-x-2 my-4 sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[472px] iox:w-[550px] h-auto">
              <div className="rounded-full bg-[#f5ecfd] w-[28px] h-[28px] flex items-center">
                <img
                  loading="lazy"
                  src="/Pictures/Check-icon.png"
                  alt=""
                  className="w-6 h-6 "
                />
              </div>
              <div>
                <p className="text-[#0F172A] font-[400] sm:text-lg sm:w-61 mymob:w-full mymob:max-w-[340px] tablet:w-full tablet:max-w-[728px]  desktop:w-full desktop:max-w-[540px] font-inter">
                  Onboarding retail and pharmacy partners
                </p>
              </div>
            </div>
            {/* 2nd end */}
            {/* 3rd row Start */}
            <div className="flex sm:space-x-2 my-4 sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[472px] iox:w-[550px] h-auto">
              <div className="rounded-full bg-[#f5ecfd] w-[28px] h-[28px] flex items-center">
                <img
                  loading="lazy"
                  src="/Pictures/Check-icon.png"
                  alt=""
                  className="w-6 h-6 "
                />
              </div>
              <div>
                <p className="text-[#0F172A] sm:text-lg font-[400] sm:w-61 mymob:w-full mymob:max-w-[340px] tablet:w-full tablet:max-w-[728px]  desktop:w-full desktop:max-w-[540px] font-inter">
                  Enhancing loyalty programs and in-app promotions
                </p>
              </div>
            </div>
            {/* 3rd end */}

            {/* 4th row Start */}
            <div className="flex sm:space-x-2 my-4 sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[472px] iox:w-[550px] h-auto">
              <div className="rounded-full bg-[#f5ecfd] w-[28px] h-[28px] flex items-center">
                <img
                  loading="lazy"
                  src="/Pictures/Check-icon.png"
                  alt=""
                  className="w-6 h-6 "
                />
              </div>
              <div>
                <p className="text-[#0F172A] sm:text-lg  sm:w-61 mymob:w-full mymob:max-w-[340px] tablet:w-full tablet:max-w-[728px] desktop:w-full desktop:max-w-[540px] font-inter font-[400]">
                  Further optimizing performance for low-bandwidth regions
                </p>
              </div>
            </div>
            {/* 4th end */}

            {/* 5th  */}
            <p className="font-inter text-lg font-[400] text-[#0F172A] sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[472px] iox:w-[550px] h-auto my-10 mx-auto ">
              Yalla’s success is a testament to what’s possible with a clear
              vision, strong technology, and the right development team. So are
              you ready to take your delivery business to the next level? Get
              started with us today so that we can discuss your future!
            </p>

            {/* End 5th */}
          </div>
          {/* 2nd box end points */}

          {/* Images use desktop */}
          <div className="my-8 hidden desktop:flex ">
            <img
              loading="lazy"
              src="/Pictures/yalla-app-2.jpg"
              alt=""
              className="sm:w-[280px] mymob:w-[335px] myiphone:w-[360px] "
            />
          </div>
        </div>
        {/* End flex box img and points */}
      </div>
      {/* End Section Looking Ahead: Scaling Up and Reaching Further */}

      {/* schedule a Call Now */}
      <div className="relative pb-5 mx-auto sm:mt-10 tablet:mt-14 iox:mt-20 ">
        <img
          loading="lazy"
          src="/Pictures/div.bg-white.jpg"
          alt=""
          className="w-full sm:h-[300px] tablet:h-[350px] desktop:h-[450px] mx-auto"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-[28px] tablet:text-[31.8px] iox:text-[35px] text-[#1A1D1E] font-bold sm:w-[228px]  sm:mb-6 myiphone:mb-10 mx-auto mymob:w-[268px] myiphone:w-[306px] tablet:w-[582px] desktop:w-[450px] biglap:w-[700px] sm:h-auto text-center leading-9.5 capitalize ">
            Schedule a meeting and get started today
          </p>
          <p
            className="py-3 px-4 shadow inset-shadow-xs  border-2 border-[#968be0] text-white rounded-md drop-shadow-sm inline-block mx-auto"
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

export default YallaDelievery;
