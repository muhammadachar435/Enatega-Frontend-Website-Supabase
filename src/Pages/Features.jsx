import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SidebarData from "../Component/Sidebardata";
import {IoMdMenu,IoMdClose,IoIosArrowDown,IoIosArrowUp,} from "react-icons/io";
import {TiArrowSortedDown,TiSocialFacebook,TiSocialLinkedin,} from "react-icons/ti";
import "react-phone-input-2/lib/style.css";
import { FaInstagram } from "react-icons/fa";

// Features
function Features() {
  // useState
  const [sidebar, setSidebar] = useState(false);
  const [caseStudiesbar, setCaseStudies] = useState(false);
  const [useCasebar, setUseCase] = useState(false);
  const [caseshow, setcaseshow] = useState(false);
  const [boxShow, setBoxShow] = useState(false);
  const [activeTab, setActiveTab] = useState(1); //ActiveTab
  const [openTab, setOpenTab] = useState(true);
  const [activeWeb, setActiveWeb] = useState(1); // Web/Moile
  const [activeRSt, setActiveRSt] = useState(1); // Restaurant
  const [activeRider, setActiveRider] = useState(1); // RiderState
  const [activeAdmin, setActiveAdmin] = useState(1); // Admin

  // Sidebar Label Name
  const Label = [
    {
      id: 1,
      label: "Customer Web/Mobile Application",
    },
    {
      id: 2,
      label: "Restaurant Application",
    },
    {
      id: 3,
      label: "Rider Application",
    },
    {
      id: 4,
      label: "Admin Dashboard",
    },
  ];

  // WebApplication Label Name
  const WebApplication = [
    {
      id: 1,
      label: "Authentication",
    },
    {
      id: 2,
      label: "User Interface",
    },
    {
      id: 3,
      label: "Communication",
    },
    {
      id: 4,
      label: "Analytics and Reporting",
    },
    {
      id: 5,
      label: "Order Management",
    },
    {
      id: 6,
      label: "Promotion and Loyalty",
    },
  ];

  // Restaurant Label Name
  const RestaurantApp = [
    {
      id: 1,
      label: "Order Management",
    },
    {
      id: 2,
      label: "Restaurant status And Invoice Printing Management",
    },
    {
      id: 3,
      label: "Order History And Details",
    },
  ];

  //  RiderApplication Label Name
  const RiderApplication = [
    {
      id: 1,
      label: "Order Management",
    },
    {
      id: 2,
      label: "Location Services",
    },
    {
      id: 3,
      label: "Communication",
    },
    {
      id: 4,
      label: "Order History",
    },
    {
      id: 5,
      label: "Financial Management",
    },
    {
      id: 6,
      label: "Status Management",
    },
  ];

  // Admin Label Name
  const AdminDasboard = [
    {
      id: 1,
      label: "User And Role Oversight",
    },
    {
      id: 2,
      label: "Establishment Management",
    },
    {
      id: 3,
      label: "Financial And Commission Management",
    },
    {
      id: 4,
      label: "Operational Configuration",
    },
    {
      id: 5,
      label: "Menu and Analytics",
    },
  ];

  // One Time scroll you can Refresh the Page
  useEffect(() => {
    window.scroll(0, 0);
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
          <div className="relative flex justify-start  items-center text-[8px] border border-white border-t-0   ring-b-white ring-l ring-r sm:h-7 mymob:h-8 desktop:mt-1 tablet:h-[30px] desktop:h-12 ">
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

      {/* Content */}
      <div className="relative sm:mt-26 iox:mt-[130px] w-full h-[75vh] ">
        <div>
          <img
            src="/Pictures/featuresbg.png"
            alt=""
            className="w-full h-[75vh] "
          />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div>
            <img
              src="/Pictures/enategaLogo.png"
              alt=""
              className="mx-auto sm:w-[72px] sm:h-[72px] "
            />
          </div>

          {/* Text */}
          <div className="font-inter mt-2 text-[#1A1D1E] sm:text-[32px] tablet:text-[39px] desktop:text-[43px] iox:text-[50px]  biglap:text-[60px] sm:w-[300px] myiphone:w-[365px] tablet:w-[708px] desktop:w-[665px] desktop:h-auto desktop:mx-auto iox:w-[786px] iox:h-auto iox:leading-14 capitalize biglap:w-[1280px] biglap:h-auto mb-5 text-center font-bold">
            <p>
              Enatega Multivendor is a full-featured Multivendor{" "}
              <span className="text-[#479F53]"> food delivery solution</span>
            </p>
          </div>
        </div>
      </div>
      {/* End content text & Img*/}

      {/* Heading & Text */}
      <div className=" sm:pb-6 tablet:pb-12 ">
        {/* Button Each Div with respect to id  */}
        <div className="font-inter text-[14px] text-[#1B2027] sm:text-center  text-wrap sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px]  desktop:w-[964px] iox:w-[1160px] biglap:w-[2000px] mx-auto mt-4  border-b border-[#e0e0e0]">
          {Label.map((label) => {
            return (
              <button
                key={label.id}
                onClick={() => {
                  setActiveTab(label.id);
                  setOpenTab(true);
                }}
                className={
                  activeTab === label.id
                    ? `sm:py-[4px] sm:px-[5px] mymob:px-[8px]  desktop:px-5 iox:px-9 biglap:px-28 border-b-2 border-[#000515] cursor-pointer text-[#000515] font-bold `
                    : `sm:py-[4px] sm:px-[5px]  mymob:px-[8px]  desktop:px-5 iox:px-9 biglap:px-28 cursor-pointer `
                }
              >
                {label.label}
              </button>
            );
          })}
        </div>

        {/* *****--------4 Divs Create Each Div its own Button to perform it --------*****  */}

        {/* Web/ Mobile Application */}
        {openTab && activeTab === 1 && (
          <div className="iox:flex  iox:space-x-10  iox:w-[1160px] iox:mx-auto iox:mt-10 biglap:w-[2000px]">
            <div className="font-inter sm:text-[13px] biglap:text-base text-[#1B2027] sm:text-center  text-wrap sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px]  desktop:w-[964px] mx-auto sm:mt-4  iox:mt-0 iox:inline-block border-b border-[#e0e0e0] iox:w-[160px] iox:my-4 iox:text-left biglap:w-[190px] biglap:ml-0 iox:border-none">
              {WebApplication.map((label) => {
                return (
                  <button
                    key={label.id}
                    onClick={() => {
                      setActiveWeb(label.id);
                      setOpenTab(true);
                    }}
                    className={
                      activeWeb === label.id
                        ? `sm:my-1 sm:mx-1 mymob:mx-2 desktop:mx-5 iox:mx-0 iox:mb-5 border-b-2 border-[#000515] cursor-pointer text-[#1B2027] font-semibold iox:inline `
                        : `sm:my-1 sm:mx-1  mymob:mx-2 desktop:mx-5 iox:mx-0 iox:mb-5 cursor-pointer iox:inline `
                    }
                  >
                    {label.label}
                  </button>
                );
              })}
            </div>
            {/* Content Web/Mobile */}
            <div className="">
              {/* Authentication */}
              {openTab && activeWeb === 1 && (
                <div>
                  <div className="bg-[#f7f8f3] py-6 sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px]  desktop:w-[964px] iox:w-[884px] biglap:w-[1500px] mx-auto sm:mt-4 iox:mt-0 rounded-2xl iox:mr-0">
                    <ul className="list-disc sm:px-8 font-inter marker:text-base mx-auto">
                      {/* Email Verification */}
                      <li className="text-2xl text-[#1A1D1E] font-semibold ">
                        Email Verification
                      </li>
                      <p className="text-base text-[#222222] my-3">
                        With the email verification feature in the custom
                        web/mobile application, we guarantee the authenticity of
                        user registrations to lower the risk of fake orders and
                        create a reliable customer base.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        As you can quickly secure the confirmation process via
                        the email verification feature, there’s an enhancement
                        in the delivery information that enables streamlined
                        communication on order updates and delivery details.
                      </p>

                      {/* Multi-Platform Authentication */}
                      <li className="text-2xl text-[#1A1D1E] font-semibold">
                        Multi-Platform Authentication
                      </li>
                      <img
                        src="/Pictures/Multi-Platform-Authentication.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        It is time to simplify the on-boarding process with the
                        multi-platform authentication feature in the custom
                        web/mobile application.
                      </p>
                      <p className="text-base text-[#222222] mt-3">
                        We enable our customers to use their existing Google,
                        Apple, or Facebook credentials, eliminating the need for
                        a separate account creation.
                      </p>
                    </ul>
                  </div>

                  <div className="relative my-12  ">
                    <img
                      src="/Pictures/div.bg-white.jpg"
                      alt=""
                      className="w-full sm:h-[200px] mymob:h-[250px] tablet:h-[350px] desktop:h-[400px] iox:h-[450px]"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto text-center">
                      <p className="text-[28px] tablet:text-[31px] text-[#1A1D1E] font-bold sm:w-[228px]  sm:mb-6 mx-auto mymob:w-[268px] myiphone:w-[306px] tablet:w-[582px] desktop:w-[400px] biglap:w-[700px] sm:h-auto text-center leading-8.5 capitalize ">
                        Schedule a meeting and get started today
                      </p>
                      <p
                        className="py-3 px-4 shadow inset-shadow-sm  text-black border-[1.5px] border-[#558567] rounded-md drop-shadow-sm  inline-block mx-auto"
                        style={{
                          backgroundImage:
                            " linear-gradient(180deg, #86cba0 0, #6cb487 100%)",
                        }}
                      >
                        {/* Link One "Schedule a Call Now" */}
                        <Link
                          to="/contactus"
                          className="text-base font-inter font-semibold "
                        >
                          Schedule a Call Now
                        </Link>
                      </p>
                    </div>
                  </div>
                  {/* End link */}
                </div>
              )}
              {/* End Authentication */}

              {/* User Interface */}
              {openTab && activeWeb === 2 && (
                <div>
                  <div className="bg-[#F7F4F4] py-6 sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px]  desktop:w-[964px] iox:w-[884px] biglap:w-[1500px] mx-auto sm:mt-4 iox:mt-0 rounded-2xl iox:mr-0">
                    <ul className="list-disc sm:px-8 font-inter marker:text-base mx-auto">
                      {/* Geolocation Restaurant Display */}
                      <li className="text-2xl text-[#1A1D1E] font-semibold ">
                        Geolocation Restaurant Display
                      </li>
                      <img
                        src="/Pictures/Geolocation-Restaurant-Display.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        Enhance the overall user experience by incorporating the
                        geolocation restaurant display feature into your
                        interface.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        We display restaurants on both the map and home screen
                        to create a visually intuitive experience for users to
                        discover nearby dining options.
                      </p>
                      <li className="text-2xl text-[#1A1D1E] font-semibold">
                        Comprehensive Restaurant Information
                      </li>
                      <img
                        src="/Pictures/Comprehensive-Restaurant-Information.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        Deliver an immersive restaurant experience through the
                        comprehensive restaurant information feature.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        Users gain access to reviews, ratings, operational
                        hours, delivery schedules, menu details, and the minimum
                        order requirements to make informed decisions.
                      </p>

                      {/* Address Integration */}
                      <li className="text-2xl text-[#1A1D1E] font-semibold">
                        Address Integration
                      </li>
                      <img
                        src="/Pictures/Address-Integration.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        Simplify the process of adding and verifying addresses
                        with our integrated Maps and Google Places functionality
                        for address integration feature.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        Users can easily add their address by leveraging mapping
                        technology and suggestions from Google Places to ensure
                        order placement at the right delivery locations and
                        optimize the overall ordering process.
                      </p>

                      {/* Localization And Theming */}
                      <li className="text-2xl text-[#1A1D1E] font-semibold">
                        Localization And Theming
                      </li>
                      <img
                        src="/Pictures/Localization-And-Theming.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        Personalize the delivery app solution according to your
                        brand image with our multi-language localization and
                        theming feature.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        Users can enjoy a customized experience by opting for
                        their preferred language and theme to create a more
                        engaging and user-friendly interface.
                      </p>

                      {/* Search Functionality*/}
                      <li className="text-2xl text-[#1A1D1E] font-semibold">
                        Search Functionality
                      </li>
                      <img
                        src="/Pictures/Search-Functionality.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        Empower users to find exactly what they crave with our
                        robust search functionality feature present in the
                        custom web/mobile application.
                      </p>
                      <p className="text-base text-[#222222] mt-3">
                        Whether they are looking for specific restaurants or
                        particular menu items, our platform ensures a smooth
                        exploration experience.
                      </p>
                    </ul>
                  </div>
                  {/* End List */}

                  <div className="relative my-12  ">
                    <img
                      src="/Pictures/div.bg-white.jpg"
                      alt=""
                      className="w-full sm:h-[200px] mymob:h-[250px] tablet:h-[350px] desktop:h-[400px] iox:h-[450px]"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto text-center">
                      <p className="text-[28px] tablet:text-[31px] text-[#1A1D1E] font-bold sm:w-[228px]  sm:mb-6 mx-auto mymob:w-[268px] myiphone:w-[306px] tablet:w-[582px] desktop:w-[400px] biglap:w-[700px] sm:h-auto text-center leading-8.5 capitalize ">
                        Schedule a meeting and get started today
                      </p>
                      <p
                        className="py-3 px-4 shadow inset-shadow-sm  text-black border-[1.5px] border-[#558567] rounded-md drop-shadow-sm  inline-block mx-auto"
                        style={{
                          backgroundImage:
                            " linear-gradient(180deg, #86cba0 0, #6cb487 100%)",
                        }}
                      >
                        {/* Link One "Schedule a Call Now" */}
                        <Link
                          to="/contactus"
                          className="text-base font-inter font-semibold "
                        >
                          Schedule a Call Now
                        </Link>
                      </p>
                    </div>
                  </div>
                  {/* End link */}
                </div>
              )}
              {/* End User interface */}

              {/* Communication */}
              {openTab && activeWeb === 3 && (
                <div>
                  <div className="bg-[#F7F4F4] py-6 sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px]  desktop:w-[964px] iox:w-[884px] biglap:w-[1500px] mx-auto sm:mt-4 iox:mt-0 rounded-2xl iox:mr-0">
                    <ul className="list-disc sm:px-8 font-inter marker:text-base mx-auto">
                      {/* Push Notification */}
                      <li className="text-2xl text-[#1A1D1E] font-semibold ">
                        Push Notifications
                      </li>
                      <img
                        src="/Pictures/Push-Notifications.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        Boost customer engagement with our push notification
                        feature.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        Our push notifications and emails provide constant
                        updates about account creation, order status, and
                        important announcements to keep customers informed.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        It enables businesses to send global push notifications
                        to ensure that all customers gain access to important
                        information simultaneously.
                      </p>

                      {/* Real-Time Tracking */}
                      <li className="text-2xl text-[#1A1D1E] font-semibold">
                        Real-Time Tracking
                      </li>
                      <img
                        src="/Pictures/Real-Time-Tracking.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        Experience unparalleled transparency in your delivery
                        process with the real-time tracking feature present in
                        the custom web/mobile application.
                      </p>
                      <p className="text-base text-[#222222] mt-3">
                        Your customers can track the exact location and progress
                        of their delivery in real-time to stay updated with
                        accurate and up-to-the-minute information.
                      </p>
                    </ul>
                  </div>
                  {/* End List */}

                  <div className="relative my-12  ">
                    <img
                      src="/Pictures/div.bg-white.jpg"
                      alt=""
                      className="w-full sm:h-[200px] mymob:h-[250px] tablet:h-[350px] desktop:h-[400px] iox:h-[450px]"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto text-center">
                      <p className="text-[28px] tablet:text-[31px] text-[#1A1D1E] font-bold sm:w-[228px]  sm:mb-6 mx-auto mymob:w-[268px] myiphone:w-[306px] tablet:w-[582px] desktop:w-[400px] biglap:w-[700px] sm:h-auto text-center leading-8.5 capitalize ">
                        Schedule a meeting and get started today
                      </p>
                      <p
                        className="py-3 px-4 shadow inset-shadow-sm  text-black border-[1.5px] border-[#558567] rounded-md drop-shadow-sm  inline-block mx-auto"
                        style={{
                          backgroundImage:
                            " linear-gradient(180deg, #86cba0 0, #6cb487 100%)",
                        }}
                      >
                        {/* Link One "Schedule a Call Now" */}
                        <Link
                          to="/contactus"
                          className="text-base font-inter font-semibold "
                        >
                          Schedule a Call Now
                        </Link>
                      </p>
                    </div>
                  </div>
                  {/* End link */}
                </div>
              )}
              {/* End Communication*/}

              {/* Analytics and Reporting*/}
              {openTab && activeWeb === 4 && (
                <div>
                  <div className="bg-[#F7F4F4] py-6 sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px]  desktop:w-[964px] iox:w-[884px] biglap:w-[1500px] mx-auto sm:mt-4 iox:mt-0 rounded-2xl iox:mr-0">
                    <ul className="list-disc sm:px-8 font-inter marker:text-base mx-auto">
                      {/* Error Tracking*/}
                      <li className="text-2xl text-[#1A1D1E] font-semibold ">
                        Error Tracking
                      </li>
                      <img
                        src="/Pictures/Error-Tracking.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        Improve the robustness of your system with our error
                        tracking feature present in the custom web/mobile
                        application.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        You can promptly resolve the errors by leveraging
                        real-time monitoring and reporting capabilities.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        Our system integrates seamlessly with Sentry to provide
                        you with an insight into errors as they occur.
                      </p>

                      {/*Performance Analytics*/}
                      <li className="text-2xl text-[#1A1D1E] font-semibold">
                        Performance Analytics
                      </li>
                      <img
                        src="/Pictures/Performance-Analytics.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        You get to optimize your web app’s performance with our
                        comprehensive performance analytics feature powered by
                        Amplitude in the custom web/mobile application.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        Gain valuable insights into user behavior, system
                        responsiveness, and overall application efficiency.
                      </p>
                      <p className="text-base text-[#222222] mt-3">
                        With Amplitude, you have the tools to fine-tune your
                        application’s performance and deliver an exceptional
                        user experience.
                      </p>
                    </ul>
                  </div>
                  {/* End List */}

                  <div className="relative my-12  ">
                    <img
                      src="/Pictures/div.bg-white.jpg"
                      alt=""
                      className="w-full sm:h-[200px] mymob:h-[250px] tablet:h-[350px] desktop:h-[400px] iox:h-[450px]"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto text-center">
                      <p className="text-[28px] tablet:text-[31px] text-[#1A1D1E] font-bold sm:w-[228px]  sm:mb-6 mx-auto mymob:w-[268px] myiphone:w-[306px] tablet:w-[582px] desktop:w-[400px] biglap:w-[700px] sm:h-auto text-center leading-8.5 capitalize ">
                        Schedule a meeting and get started today
                      </p>
                      <p
                        className="py-3 px-4 shadow inset-shadow-sm  text-black border-[1.5px] border-[#558567] rounded-md drop-shadow-sm  inline-block mx-auto"
                        style={{
                          backgroundImage:
                            " linear-gradient(180deg, #86cba0 0, #6cb487 100%)",
                        }}
                      >
                        {/* Link One "Schedule a Call Now" */}
                        <Link
                          to="/contactus"
                          className="text-base font-inter font-semibold "
                        >
                          Schedule a Call Now
                        </Link>
                      </p>
                    </div>
                  </div>
                  {/* End link */}
                </div>
              )}
              {/* End Analytics & Reporting*/}

              {/*Order Management*/}
              {openTab && activeWeb === 5 && (
                <div>
                  <div className="bg-[#F7F4F4] py-6 sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px]  desktop:w-[964px] iox:w-[884px] biglap:w-[1500px] mx-auto sm:mt-4 iox:mt-0 rounded-2xl iox:mr-0">
                    <ul className="list-disc sm:px-8 font-inter marker:text-base mx-auto">
                      {/* Order Rating And Reviews*/}
                      <li className="text-2xl text-[#1A1D1E] font-semibold ">
                        Order Rating And Reviews
                      </li>
                      <img
                        src="/Pictures/Order-Rating-And-Reviews.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        Get your customer’s feedback and gain an insight into
                        their experience with our order rating and reviews
                        feature.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        After each order, users can provide ratings and reviews
                        to help you improve your delivery business to enable
                        continuous operations.
                      </p>

                      {/*Payment Integration*/}
                      <li className="text-2xl text-[#1A1D1E] font-semibold">
                        Payment Integration
                      </li>
                      <img
                        src="/Pictures/Payment-Integration.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />

                      <p className="text-base text-[#222222] my-3">
                        Streamline transactions effortlessly with the payment
                        integration feature.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        We support both PayPal and Stripe payment integrations
                        to equip your customers with secure and convenient
                        payment options.
                      </p>

                      {/*Order history*/}
                      <li className="text-2xl text-[#1A1D1E] font-semibold">
                        Order history
                      </li>
                      <img
                        src="/Pictures/Order-History.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        With the order history feature in the custom web/mobile
                        application, you gain access to detailed insights into
                        customer interactions.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        Business owners can track and analyze past orders to
                        enable smarter decision-making and personalized customer
                        interactions.
                      </p>

                      {/* Favorites Management */}
                      <li className="text-2xl text-[#1A1D1E] font-semibold">
                        Favorites Management
                      </li>
                      <img
                        src="/Pictures/Favorites-Management.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        Enhance customer loyalty with the favorites management
                        feature in the custom web/mobile application.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        Your customers can easily mark and manage their favorite
                        restaurants to simplify and speed up the ordering
                        process.
                      </p>

                      {/* Food Customization*/}
                      <li className="text-2xl text-[#1A1D1E] font-semibold">
                        Favorites Management
                      </li>
                      <img
                        src="/Pictures/Food-Customization.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        Cater to individual tastes with our food customization
                        feature.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        Our platform allows users to add different variations of
                        food items and include specific notes for restaurant
                        preferences.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        Give a personalized touch to each order to ensure
                        complete customer satisfaction and build loyalty.
                      </p>

                      {/* Flexible Ordering*/}
                      <li className="text-2xl text-[#1A1D1E] font-semibold">
                        Flexible Ordering
                      </li>
                      <img
                        src="/Pictures/Flexible-Ordering.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        Meet the diverse needs of your customers with the
                        flexible ordering feature.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        By offering pick-up and delivery options with different
                        timings, you provide users with the freedom to choose
                        what suits them best.
                      </p>
                      <p className="text-base text-[#222222] mt-3">
                        Whether it’s a quick pick-up during lunch at home or a
                        scheduled delivery for an official dinner, you can
                        easily adapt to customer preferences to boost overall
                        customer satisfaction with the flexible ordering
                        feature.
                      </p>
                    </ul>
                  </div>
                  {/* End List */}

                  <div className="relative my-12  ">
                    <img
                      src="/Pictures/div.bg-white.jpg"
                      alt=""
                      className="w-full sm:h-[200px] mymob:h-[250px] tablet:h-[350px] desktop:h-[400px] iox:h-[450px]"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto text-center">
                      <p className="text-[28px] tablet:text-[31px] text-[#1A1D1E] font-bold sm:w-[228px]  sm:mb-6 mx-auto mymob:w-[268px] myiphone:w-[306px] tablet:w-[582px] desktop:w-[400px] biglap:w-[700px] sm:h-auto text-center leading-8.5 capitalize ">
                        Schedule a meeting and get started today
                      </p>
                      <p
                        className="py-3 px-4 shadow inset-shadow-sm  text-black border-[1.5px] border-[#558567] rounded-md drop-shadow-sm  inline-block mx-auto"
                        style={{
                          backgroundImage:
                            " linear-gradient(180deg, #86cba0 0, #6cb487 100%)",
                        }}
                      >
                        {/* Link One "Schedule a Call Now" */}
                        <Link
                          to="/contactus"
                          className="text-base font-inter font-semibold "
                        >
                          Schedule a Call Now
                        </Link>
                      </p>
                    </div>
                  </div>
                  {/* End link */}
                </div>
              )}
              {/* End Order Management */}

              {/*Promotion and Loyalty*/}
              {openTab && activeWeb === 6 && (
                <div>
                  <div className="bg-[#F7F4F4] py-6 sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px]  desktop:w-[964px] iox:w-[884px] biglap:w-[1500px] mx-auto sm:mt-4 iox:mt-0 rounded-2xl iox:mr-0">
                    <ul className="list-disc sm:px-8 font-inter marker:text-base mx-auto">
                      {/* Vouchers*/}
                      <li className="text-2xl text-[#1A1D1E] font-semibold ">
                        Vouchers
                      </li>
                      <img
                        src="/Pictures/Vouchers.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        Seamlessly run promotions and loyalty campaigns with our
                        vouchers and promotions feature.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        Whether it’s a special discount for first-time users or
                        a loyalty reward for your loyal customer base, our
                        voucher system can boost customer engagement and build
                        loyal customer relationships.
                      </p>

                      {/*Tipping*/}
                      <li className="text-2xl text-[#1A1D1E] font-semibold">
                        Tipping
                      </li>
                      <img
                        src="/Pictures/Tipping.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        Add a personal touch to the customer experience with the
                        tipping feature in the custom web/mobile application.
                      </p>
                      <p className="text-base text-[#222222] mt-3">
                        Providing users with the option to add tips during the
                        checkout process allows them to express appreciation for
                        excellent service or delivery.
                      </p>
                    </ul>
                  </div>
                  {/* End List */}

                  <div className="relative my-12  ">
                    <img
                      src="/Pictures/div.bg-white.jpg"
                      alt=""
                      className="w-full sm:h-[200px] mymob:h-[250px] tablet:h-[350px] desktop:h-[400px] iox:h-[450px]"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto text-center">
                      <p className="text-[28px] tablet:text-[31px] text-[#1A1D1E] font-bold sm:w-[228px]  sm:mb-6 mx-auto mymob:w-[268px] myiphone:w-[306px] tablet:w-[582px] desktop:w-[400px] biglap:w-[700px] sm:h-auto text-center leading-8.5 capitalize ">
                        Schedule a meeting and get started today
                      </p>
                      <p
                        className="py-3 px-4 shadow inset-shadow-sm  text-black border-[1.5px] border-[#558567] rounded-md drop-shadow-sm  inline-block mx-auto"
                        style={{
                          backgroundImage:
                            " linear-gradient(180deg, #86cba0 0, #6cb487 100%)",
                        }}
                      >
                        {/* Link One "Schedule a Call Now" */}
                        <Link
                          to="/contactus"
                          className="text-base font-inter font-semibold "
                        >
                          Schedule a Call Now
                        </Link>
                      </p>
                    </div>
                  </div>
                  {/* End link */}
                </div>
              )}
              {/* End Promotion and Loyalty */}
            </div>
            {/* End Web Content */}
          </div>
        )}
        {/* 1st box end */}

        {/* *********-------------******** */}

        {/* 2nd Box  Restaurant Application */}
        {openTab && activeTab === 2 && (
          <div className="iox:flex  iox:space-x-10  iox:w-[1160px] iox:mx-auto iox:mt-10 biglap:w-[2000px]">
            <div className="font-inter sm:text-[13px] biglap:text-base text-[#1B2027] sm:text-center  text-wrap sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px]  desktop:w-[964px] mx-auto sm:mt-4  iox:mt-0 iox:inline-block border-b border-[#e0e0e0] iox:w-[265px] border iox:my-4 iox:text-left biglap:w-[190px] biglap:ml-0 iox:border-none">
              {RestaurantApp.map((label) => {
                return (
                  <button
                    key={label.id}
                    onClick={() => {
                      setActiveRSt(label.id);
                      setOpenTab(true);
                    }}
                    className={
                      activeRSt === label.id
                        ? `sm:my-1 sm:mx-1 mymob:mx-2 desktop:mx-5 iox:mx-0 iox:mb-5 border-b-2 border-[#000515] cursor-pointer text-[#1B2027] font-semibold iox:inline iox:text-left`
                        : `sm:my-1 sm:mx-1  mymob:mx-2 desktop:mx-5 iox:mx-0 iox:mb-5 cursor-pointer iox:inline iox:text-left`
                    }
                  >
                    {label.label}
                  </button>
                );
              })}
            </div>
            {/* Content Restaurant App */}
            <div className="">
              {/* Order Management*/}
              {openTab && activeRSt === 1 && (
                <div>
                  <div className="bg-[#f7f8f3] py-6 sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px]  desktop:w-[964px] iox:w-[884px] biglap:w-[1500px] mx-auto sm:mt-4 iox:mt-0 rounded-2xl iox:mr-0">
                    <ul className="list-disc sm:px-8 font-inter marker:text-base mx-auto">
                      {/* Order Notification */}
                      <li className="text-2xl text-[#1A1D1E] font-semibold ">
                        Order Notification
                      </li>
                      <img
                        src="/Pictures/Order-Notification.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />

                      <p className="text-base text-[#222222] my-3">
                        We redefine the way your business handles orders with
                        our advanced order notification feature.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        Stay ahead in real-time and empower your team to respond
                        promptly to new orders and provide customers with the
                        quickest delivery to boost customer satisfaction in no
                        time with our restaurant application features.
                      </p>

                      {/* Time Limiter */}
                      <li className="text-2xl text-[#1A1D1E] font-semibold">
                        Time Limiter
                      </li>
                      <img
                        src="/Pictures/Time-Limiter.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        With our restaurant application features, you get to
                        take complete control of your order processing with
                        Enatega’s time limiter feature.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        Set the pace with our intuitive time limiter feature to
                        tailor the acceptance periods for orders.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        Customize meal preparation times according to your
                        kitchen’s rhythm to optimize workflows for enhanced
                        efficiency.
                      </p>

                      {/* Real-Time Order Receiving*/}
                      <li className="text-2xl text-[#1A1D1E] font-semibold">
                        Real-Time Order Receiving
                      </li>
                      <img
                        src="/Pictures/Real-Time-Order-Receiving.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        Delight your customers with a revolutionary real-time
                        order receiving feature.
                      </p>
                      <p className="text-base text-[#222222] mt-3">
                        As orders move seamlessly through preparation and
                        delivery stages, your team stays coordinated to ensure
                        your orders get delivered on time and create an
                        unparalleled customer experience.
                      </p>
                    </ul>
                  </div>

                  <div className="relative my-12  ">
                    <img
                      src="/Pictures/div.bg-white.jpg"
                      alt=""
                      className="w-full sm:h-[200px] mymob:h-[250px] tablet:h-[350px] desktop:h-[400px] iox:h-[450px]"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto text-center">
                      <p className="text-[28px] tablet:text-[31px] text-[#1A1D1E] font-bold sm:w-[228px]  sm:mb-6 mx-auto mymob:w-[268px] myiphone:w-[306px] tablet:w-[582px] desktop:w-[400px] biglap:w-[700px] sm:h-auto text-center leading-8.5 capitalize ">
                        Schedule a meeting and get started today
                      </p>
                      <p
                        className="py-3 px-4 shadow inset-shadow-sm  text-black border-[1.5px] border-[#558567] rounded-md drop-shadow-sm  inline-block mx-auto"
                        style={{
                          backgroundImage:
                            " linear-gradient(180deg, #86cba0 0, #6cb487 100%)",
                        }}
                      >
                        {/* Link One "Schedule a Call Now" */}
                        <Link
                          to="/contactus"
                          className="text-base font-inter font-semibold "
                        >
                          Schedule a Call Now
                        </Link>
                      </p>
                    </div>
                  </div>
                  {/* End link */}
                </div>
              )}
              {/* End Order Management */}

              {/* Restaurant status And Invoice Printing Management */}
              {openTab && activeRSt === 2 && (
                <div>
                  <div className="bg-[#F7F4F4] py-6 sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px]  desktop:w-[964px] iox:w-[884px] biglap:w-[1500px] mx-auto sm:mt-4 iox:mt-0 rounded-2xl iox:mr-0">
                    <ul className="list-disc sm:px-8 font-inter marker:text-base mx-auto">
                      {/* Restaurant Status Updates */}
                      <li className="text-2xl text-[#1A1D1E] font-semibold ">
                        Restaurant Status Updates
                      </li>
                      <img
                        src="/Pictures/Restaurant-Status-Updates.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        We enable Enatega’s partner restaurants to seamlessly
                        manage their online presence.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        It empowers restaurants to switch their status between
                        online and offline based on their operational
                        availability.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        By keeping the status up-to-date, the restaurant can
                        effectively inform customers about its current
                        operational state.
                      </p>

                      {/* Invoice Print Option */}
                      <li className="text-2xl text-[#1A1D1E] font-semibold">
                        Invoice Print Option
                      </li>
                      <img
                        src="/Pictures/Invoice-Print-Option.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] mt-3">
                        Empowers partner restaurants with the capability to
                        generate and print invoices directly from the Enatega
                        delivery solution app.
                      </p>
                    </ul>
                  </div>

                  {/* End List */}

                  <div className="relative my-12  ">
                    <img
                      src="/Pictures/div.bg-white.jpg"
                      alt=""
                      className="w-full sm:h-[200px] mymob:h-[250px] tablet:h-[350px] desktop:h-[400px] iox:h-[450px]"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto text-center">
                      <p className="text-[28px] tablet:text-[31px] text-[#1A1D1E] font-bold sm:w-[228px]  sm:mb-6 mx-auto mymob:w-[268px] myiphone:w-[306px] tablet:w-[582px] desktop:w-[400px] biglap:w-[700px] sm:h-auto text-center leading-8.5 capitalize ">
                        Schedule a meeting and get started today
                      </p>
                      <p
                        className="py-3 px-4 shadow inset-shadow-sm  text-black border-[1.5px] border-[#558567] rounded-md drop-shadow-sm  inline-block mx-auto"
                        style={{
                          backgroundImage:
                            " linear-gradient(180deg, #86cba0 0, #6cb487 100%)",
                        }}
                      >
                        {/* Link One "Schedule a Call Now" */}
                        <Link
                          to="/contactus"
                          className="text-base font-inter font-semibold "
                        >
                          Schedule a Call Now
                        </Link>
                      </p>
                    </div>
                  </div>
                  {/* End link */}
                </div>
              )}
              {/* End Restaurant status And Invoice Printing Management */}

              {/* Order History And Details*/}
              {openTab && activeRSt === 3 && (
                <div>
                  <div className="bg-[#F7F4F4] py-6 sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px]  desktop:w-[964px] iox:w-[884px] biglap:w-[1500px] mx-auto sm:mt-4 iox:mt-0 rounded-2xl iox:mr-0">
                    <ul className="list-disc sm:px-8 font-inter marker:text-base mx-auto">
                      {/* Delivered Orders History */}
                      <li className="text-2xl text-[#1A1D1E] font-semibold ">
                        Delivered Orders History
                      </li>
                      <img
                        src="/Pictures/Delivered-Orders-History.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        The delivered orders history feature provides a
                        comprehensive history of all delivered orders through
                        Enatega’s delivery solution app.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        As a business you can easily access a detailed record of
                        past orders, consisting of information such as order
                        date, items ordered,delivery status, and any special
                        instructions provided by the customer.
                      </p>

                      {/* Customer Order Details */}
                      <li className="text-2xl text-[#1A1D1E] font-semibold">
                        Customer Order Details
                      </li>
                      <img
                        src="/Pictures/Customer-Order-Details.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        Enatega’s delivery solution app offers a robust customer
                        order details feature that provides users with in-depth
                        insights into their current and past orders.
                      </p>
                      <p className="text-base text-[#222222] mt-3">
                        We allow business to view specific order details which
                        consist of the list of items ordered, pricing, delivery
                        status, and timestamps.
                      </p>
                    </ul>
                  </div>
                  {/* End List */}

                  <div className="relative my-12  ">
                    <img
                      src="/Pictures/div.bg-white.jpg"
                      alt=""
                      className="w-full sm:h-[200px] mymob:h-[250px] tablet:h-[350px] desktop:h-[400px] iox:h-[450px]"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto text-center">
                      <p className="text-[28px] tablet:text-[31px] text-[#1A1D1E] font-bold sm:w-[228px]  sm:mb-6 mx-auto mymob:w-[268px] myiphone:w-[306px] tablet:w-[582px] desktop:w-[400px] biglap:w-[700px] sm:h-auto text-center leading-8.5 capitalize ">
                        Schedule a meeting and get started today
                      </p>
                      <p
                        className="py-3 px-4 shadow inset-shadow-sm  text-black border-[1.5px] border-[#558567] rounded-md drop-shadow-sm  inline-block mx-auto"
                        style={{
                          backgroundImage:
                            " linear-gradient(180deg, #86cba0 0, #6cb487 100%)",
                        }}
                      >
                        {/* Link One "Schedule a Call Now" */}
                        <Link
                          to="/contactus"
                          className="text-base font-inter font-semibold "
                        >
                          Schedule a Call Now
                        </Link>
                      </p>
                    </div>
                  </div>
                  {/* End link */}
                </div>
              )}
              {/* End Order history & Detail*/}
            </div>
            {/* End Restaurant App */}
          </div>
        )}
        {/* 2nd box end */}
        {/* ***************************** */}
        {/* End 2nd Restaurant App  */}

        {/* ****-----------3rd Box Rider Application------------**** */}
        {openTab && activeTab === 3 && (
          <div className="iox:flex  iox:space-x-10  iox:w-[1160px] iox:mx-auto iox:mt-10 biglap:w-[2000px]">
            <div className="font-inter sm:text-[13px] biglap:text-base text-[#1B2027] sm:text-center  text-wrap sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px]  desktop:w-[964px] mx-auto sm:mt-4  iox:mt-0 iox:inline-block border-b border-[#e0e0e0] iox:w-[160px] iox:my-4 iox:text-left biglap:w-[190px] biglap:ml-0 iox:border-none">
              {RiderApplication.map((label) => {
                return (
                  <button
                    key={label.id}
                    onClick={() => {
                      setActiveRider(label.id);
                      setOpenTab(true);
                    }}
                    className={
                      activeRider === label.id
                        ? `sm:my-1 sm:mx-1 mymob:mx-2 desktop:mx-5 iox:mx-0 iox:mb-5 border-b-2 border-[#000515] cursor-pointer text-[#1B2027] font-semibold iox:inline `
                        : `sm:my-1 sm:mx-1  mymob:mx-2 desktop:mx-5 iox:mx-0 iox:mb-5 cursor-pointer iox:inline `
                    }
                  >
                    {label.label}
                  </button>
                );
              })}
            </div>
            {/* Content Rider Application */}
            <div className="">
              {/* Order Management */}
              {openTab && activeRider === 1 && (
                <div>
                  <div className="bg-[#f6f5f3] py-6 sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px]  desktop:w-[964px] iox:w-[884px] biglap:w-[1500px] mx-auto sm:mt-4 iox:mt-0 rounded-2xl iox:mr-0">
                    <ul className="list-disc sm:px-8 font-inter marker:text-base mx-auto">
                      {/* Real-Time Order Status Change */}
                      <li className="text-2xl text-[#1A1D1E] font-semibold ">
                        Real-Time Order Status Change
                        <img
                          src="/Pictures/Real-Time-Order-Status-Change.jpg"
                          alt=""
                          loading="lazy"
                          className="my-3"
                        />
                      </li>
                      <p className="text-base text-[#222222] my-3">
                        Enatega’s rider application features provide business
                        owners with instantaneous updates on the status changes
                        of their delivery orders.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        The moment an order is accepted, out for delivery, or
                        completed, the real-time order status change system
                        updates in real-time.
                      </p>

                      {/* Instant Dual-Alert System */}
                      <li className="text-2xl text-[#1A1D1E] font-semibold">
                        Instant Dual-Alert System
                      </li>
                      <img
                        src="/Pictures/Instant-Dual-Alert-System.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        Never miss a beat with Enatega’s rider application
                        features.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        Business owners receive instant notifications through a
                        combination of push notifications and audible ringers as
                        soon as an order is placed.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        The instant dual-alert system ensures that owners are
                        immediately informed about incoming orders.
                      </p>

                      {/* Time Limiter */}
                      <li className="text-2xl text-[#1A1D1E] font-semibold">
                        Time Limiter
                      </li>
                      <img
                        src="/Pictures/Time-Limiter.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        Enatega’s rider application features consist of a time
                        limiter as well, which allows business owners to set
                        predefined time limits for different stages of the order
                        fulfilment process.
                      </p>
                      <p className="text-base text-[#222222] mt-3">
                        If any stage in the ordering process exceeds the
                        designated time limit, the application will send an
                        alert to enable owners to identify and address potential
                        delays swiftly.
                      </p>
                    </ul>
                  </div>
                  <div className="relative my-12  ">
                    <img
                      src="/Pictures/div.bg-white.jpg"
                      alt=""
                      className="w-full sm:h-[200px] mymob:h-[250px] tablet:h-[350px] desktop:h-[400px] iox:h-[450px]"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto text-center">
                      <p className="text-[28px] tablet:text-[31px] text-[#1A1D1E] font-bold sm:w-[228px]  sm:mb-6 mx-auto mymob:w-[268px] myiphone:w-[306px] tablet:w-[582px] desktop:w-[400px] biglap:w-[700px] sm:h-auto text-center leading-8.5 capitalize ">
                        Schedule a meeting and get started today
                      </p>
                      <p
                        className="py-3 px-4 shadow inset-shadow-sm  text-black border-[1.5px] border-[#558567] rounded-md drop-shadow-sm  inline-block mx-auto"
                        style={{
                          backgroundImage:
                            " linear-gradient(180deg, #86cba0 0, #6cb487 100%)",
                        }}
                      >
                        {/* Link One "Schedule a Call Now" */}
                        <Link
                          to="/contactus"
                          className="text-base font-inter font-semibold "
                        >
                          Schedule a Call Now
                        </Link>
                      </p>
                    </div>
                  </div>
                  {/* End link */}{" "}
                </div>
              )}
              {/* End Order Management */}

              {/* Location Services */}
              {openTab && activeRider === 2 && (
                <div>
                  <div className="bg-[#F7F4F4] py-6 sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px]  desktop:w-[964px] iox:w-[884px] biglap:w-[1500px] mx-auto sm:mt-4 iox:mt-0 rounded-2xl iox:mr-0">
                    <ul className="list-disc sm:px-8 font-inter marker:text-base mx-auto">
                      {/* Address Mapping */}
                      <li className="text-2xl text-[#1A1D1E] font-semibold ">
                        Address Mapping
                      </li>
                      <img
                        src="/Pictures/Address-Mapping.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        Incorporate advanced mapping feature capabilities using
                        Google Maps and precisely map the delivery addresses of
                        customers and restaurants.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        With seamless integration, the application provides a
                        visual representation of the delivery route to ensure
                        efficient navigation for the delivery team.
                      </p>

                      {/* Distance And Travel Time Display */}
                      <li className="text-2xl text-[#1A1D1E] font-semibold">
                        Distance And Travel Time Display
                      </li>
                      <img
                        src="/Pictures/Distance-And-Travel-Time-Display.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        Enatega’s rider application empowers business owners
                        with real-time insights into the distance and travel
                        time display feature.
                      </p>
                      <p className="text-base text-[#222222] mt-3">
                        The application calculates and displays the optimal
                        route, enabling owners to make informed decisions about
                        resource allocation and delivery scheduling.
                      </p>
                    </ul>
                  </div>

                  {/* End List */}
                  <div className="relative my-12  ">
                    <img
                      src="/Pictures/div.bg-white.jpg"
                      alt=""
                      className="w-full sm:h-[200px] mymob:h-[250px] tablet:h-[350px] desktop:h-[400px] iox:h-[450px]"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto text-center">
                      <p className="text-[28px] tablet:text-[31px] text-[#1A1D1E] font-bold sm:w-[228px]  sm:mb-6 mx-auto mymob:w-[268px] myiphone:w-[306px] tablet:w-[582px] desktop:w-[400px] biglap:w-[700px] sm:h-auto text-center leading-8.5 capitalize ">
                        Schedule a meeting and get started today
                      </p>
                      <p
                        className="py-3 px-4 shadow inset-shadow-sm  text-black border-[1.5px] border-[#558567] rounded-md drop-shadow-sm  inline-block mx-auto"
                        style={{
                          backgroundImage:
                            " linear-gradient(180deg, #86cba0 0, #6cb487 100%)",
                        }}
                      >
                        {/* Link One "Schedule a Call Now" */}
                        <Link
                          to="/contactus"
                          className="text-base font-inter font-semibold "
                        >
                          Schedule a Call Now
                        </Link>
                      </p>
                    </div>
                  </div>
                  {/* End link */}
                </div>
              )}
              {/* End User interface */}

              {/* Communication */}
              {openTab && activeRider === 3 && (
                <div>
                  <div className="bg-[#F7F4F4] py-6 sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px]  desktop:w-[964px] iox:w-[884px] biglap:w-[1500px] mx-auto sm:mt-4 iox:mt-0 rounded-2xl iox:mr-0">
                    <ul className="list-disc sm:px-8 font-inter marker:text-base mx-auto">
                      {/* Instant Customer Chat */}
                      <li className="text-2xl text-[#1A1D1E] font-semibold ">
                        Instant Customer Chat
                      </li>
                      <img
                        src="/Pictures/Instant-Customer-Chat.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        Enhance your customer service with the instant customer
                        chat feature present in the Enatega’s rider application
                        features.
                      </p>
                      <p className="text-base text-[#222222] mt-3">
                        Riders can instantly address customer inquiries, provide
                        updates, and ensure a smooth delivery experience.
                      </p>
                    </ul>
                  </div>
                  {/* End List */}

                  <div className="relative my-12  ">
                    <img
                      src="/Pictures/div.bg-white.jpg"
                      alt=""
                      className="w-full sm:h-[200px] mymob:h-[250px] tablet:h-[350px] desktop:h-[400px] iox:h-[450px]"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto text-center">
                      <p className="text-[28px] tablet:text-[31px] text-[#1A1D1E] font-bold sm:w-[228px]  sm:mb-6 mx-auto mymob:w-[268px] myiphone:w-[306px] tablet:w-[582px] desktop:w-[400px] biglap:w-[700px] sm:h-auto text-center leading-8.5 capitalize ">
                        Schedule a meeting and get started today
                      </p>
                      <p
                        className="py-3 px-4 shadow inset-shadow-sm  text-black border-[1.5px] border-[#558567] rounded-md drop-shadow-sm  inline-block mx-auto"
                        style={{
                          backgroundImage:
                            " linear-gradient(180deg, #86cba0 0, #6cb487 100%)",
                        }}
                      >
                        {/* Link One "Schedule a Call Now" */}
                        <Link
                          to="/contactus"
                          className="text-base font-inter font-semibold "
                        >
                          Schedule a Call Now
                        </Link>
                      </p>
                    </div>
                  </div>
                  {/* End link */}
                </div>
              )}
              {/* End Communication*/}

              {/* Order History*/}
              {openTab && activeRider === 4 && (
                <div>
                  <div className="bg-[#F7F4F4] py-6 sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px]  desktop:w-[964px] iox:w-[884px] biglap:w-[1500px] mx-auto sm:mt-4 iox:mt-0 rounded-2xl iox:mr-0">
                    <ul className="list-disc sm:px-8 font-inter marker:text-base mx-auto">
                      {/* Order History And Order Progress*/}
                      <li className="text-2xl text-[#1A1D1E] font-semibold ">
                        Order History And Order Progress
                      </li>
                      <img
                        src="/Pictures/Order-History-And-Order-Progress.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        Gain valuable insights into your delivery operations
                        with the comprehensive order history and progress
                        feature in Enatega’s rider application.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        You get a detailed record of the previous orders
                        including order progress and delivery status.
                      </p>
                      <p className="text-base text-[#222222] mt-3">
                        Business owners can review completed orders, track
                        delivery routes, and assess overall performance.
                      </p>
                    </ul>
                  </div>
                  {/* End List */}

                  <div className="relative my-12  ">
                    <img
                      src="/Pictures/div.bg-white.jpg"
                      alt=""
                      className="w-full sm:h-[200px] mymob:h-[250px] tablet:h-[350px] desktop:h-[400px] iox:h-[450px]"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto text-center">
                      <p className="text-[28px] tablet:text-[31px] text-[#1A1D1E] font-bold sm:w-[228px]  sm:mb-6 mx-auto mymob:w-[268px] myiphone:w-[306px] tablet:w-[582px] desktop:w-[400px] biglap:w-[700px] sm:h-auto text-center leading-8.5 capitalize ">
                        Schedule a meeting and get started today
                      </p>
                      <p
                        className="py-3 px-4 shadow inset-shadow-sm  text-black border-[1.5px] border-[#558567] rounded-md drop-shadow-sm  inline-block mx-auto"
                        style={{
                          backgroundImage:
                            " linear-gradient(180deg, #86cba0 0, #6cb487 100%)",
                        }}
                      >
                        {/* Link One "Schedule a Call Now" */}
                        <Link
                          to="/contactus"
                          className="text-base font-inter font-semibold "
                        >
                          Schedule a Call Now
                        </Link>
                      </p>
                    </div>
                  </div>
                  {/* End link */}
                </div>
              )}
              {/* End Order History*/}

              {/*Financial Management*/}
              {openTab && activeRider === 5 && (
                <div>
                  <div className="bg-[#F7F4F4] py-6 sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px]  desktop:w-[964px] iox:w-[884px] biglap:w-[1500px] mx-auto sm:mt-4 iox:mt-0 rounded-2xl iox:mr-0">
                    <ul className="list-disc sm:px-8 font-inter marker:text-base mx-auto">
                      {/* Online Delivery Fee Access*/}
                      <li className="text-2xl text-[#1A1D1E] font-semibold ">
                        Online Delivery Fee Access
                      </li>
                      <img
                        src="/Pictures/Online-Delivery-Fee-Access.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        Gain control over online delivery fees with Enatega’s
                        comprehensive solution.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        Set, modify, and optimize delivery charges tailored to
                        your business strategy.
                      </p>

                      {/*Quick Money Withdrawal*/}
                      <li className="text-2xl text-[#1A1D1E] font-semibold">
                        Quick Money Withdrawal
                      </li>
                      <img
                        src="/Pictures/Quick-Money-Withdrawal.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        Empower your business with the freedom to withdraw
                        earnings seamlessly with our quick money withdrawal
                        feature.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        With the quick money withdrawal feature, you get quick
                        and secure money withdrawal, giving you immediate access
                        to your hard-earned money.
                      </p>

                      {/*Wallet History*/}
                      <li className="text-2xl text-[#1A1D1E] font-semibold">
                        Wallet History
                      </li>
                      <img
                        src="/Pictures/Wallet-History.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        Dive into the financial journey of your business with
                        our wallet history feature.
                      </p>
                      <p className="text-base text-[#222222] mt-3">
                        To ensure accuracy and transparency in every aspect of
                        the delivery journey, this rider application feature
                        equips you with valuable data to make informed
                        decisions.
                      </p>
                    </ul>
                  </div>
                  {/* End List */}
                  <div className="relative my-12  ">
                    <img
                      src="/Pictures/div.bg-white.jpg"
                      alt=""
                      className="w-full sm:h-[200px] mymob:h-[250px] tablet:h-[350px] desktop:h-[400px] iox:h-[450px]"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto text-center">
                      <p className="text-[28px] tablet:text-[31px] text-[#1A1D1E] font-bold sm:w-[228px]  sm:mb-6 mx-auto mymob:w-[268px] myiphone:w-[306px] tablet:w-[582px] desktop:w-[400px] biglap:w-[700px] sm:h-auto text-center leading-8.5 capitalize ">
                        Schedule a meeting and get started today
                      </p>
                      <p
                        className="py-3 px-4 shadow inset-shadow-sm  text-black border-[1.5px] border-[#558567] rounded-md drop-shadow-sm  inline-block mx-auto"
                        style={{
                          backgroundImage:
                            " linear-gradient(180deg, #86cba0 0, #6cb487 100%)",
                        }}
                      >
                        {/* Link One "Schedule a Call Now" */}
                        <Link
                          to="/contactus"
                          className="text-base font-inter font-semibold "
                        >
                          Schedule a Call Now
                        </Link>
                      </p>
                    </div>
                  </div>
                  {/* End link */}
                </div>
              )}
              {/* End Financial Management*/}

              {/*Status Management*/}
              {openTab && activeWeb === 6 && (
                <div>
                  <div className="bg-[#F7F4F4] py-6 sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px]  desktop:w-[964px] iox:w-[884px] biglap:w-[1500px] mx-auto sm:mt-4 iox:mt-0 rounded-2xl iox:mr-0">
                    <ul className="list-disc sm:px-8 font-inter marker:text-base mx-auto">
                      {/* Rider Status*/}
                      <li className="text-2xl text-[#1A1D1E] font-semibold ">
                        Rider Status
                      </li>
                      <img
                        src="/Pictures/Rider-Status.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        Stay in control of your delivery operations with
                        Enatega’s rider status feature from the rider
                        application feature toolkit.
                      </p>
                      <p className="text-base text-[#222222] mt-3">
                        Monitor the real-time status of your delivery fleet to
                        ensure optimal performance and customer satisfaction.
                      </p>
                    </ul>
                  </div>
                  {/* End List */}
                  <div className="relative my-12  ">
                    <img
                      src="/Pictures/div.bg-white.jpg"
                      alt=""
                      className="w-full sm:h-[200px] mymob:h-[250px] tablet:h-[350px] desktop:h-[400px] iox:h-[450px]"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto text-center">
                      <p className="text-[28px] tablet:text-[31px] text-[#1A1D1E] font-bold sm:w-[228px]  sm:mb-6 mx-auto mymob:w-[268px] myiphone:w-[306px] tablet:w-[582px] desktop:w-[400px] biglap:w-[700px] sm:h-auto text-center leading-8.5 capitalize ">
                        Schedule a meeting and get started today
                      </p>
                      <p
                        className="py-3 px-4 shadow inset-shadow-sm  text-black border-[1.5px] border-[#558567] rounded-md drop-shadow-sm  inline-block mx-auto"
                        style={{
                          backgroundImage:
                            " linear-gradient(180deg, #86cba0 0, #6cb487 100%)",
                        }}
                      >
                        {/* Link One "Schedule a Call Now" */}
                        <Link
                          to="/contactus"
                          className="text-base font-inter font-semibold "
                        >
                          Schedule a Call Now
                        </Link>
                      </p>
                    </div>
                  </div>
                  {/* End link */}
                </div>
              )}
              {/* End Status Management*/}
            </div>
            {/* End Rider Application */}
          </div>
        )}
        {/* 3rd box end Rider Application */}
        {/* ************************* */}

        {/* ************-----4th Box Admin Dashboard--------************* */}

        {openTab && activeTab === 4 && (
          <div className="iox:flex  iox:space-x-10  iox:w-[1160px] iox:mx-auto iox:mt-10 biglap:w-[2000px]">
            <div className="font-inter sm:text-[13px] biglap:text-base text-[#1B2027] sm:text-center  text-wrap sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px]  desktop:w-[964px] mx-auto sm:mt-4  iox:mt-0 iox:inline-block border-b border-[#e0e0e0] iox:w-[280px] iox:my-4 iox:text-left biglap:w-[190px] biglap:ml-0 iox:border-none">
              {AdminDasboard.map((label) => {
                return (
                  <button
                    key={label.id}
                    onClick={() => {
                      setActiveAdmin(label.id);
                      setOpenTab(true);
                    }}
                    className={
                      activeAdmin === label.id
                        ? `sm:my-1 sm:mx-1 mymob:mx-2 desktop:mx-5 iox:mx-0 iox:mb-5 border-b-2 border-[#000515] cursor-pointer text-[#1B2027] font-semibold iox:inline `
                        : `sm:my-1 sm:mx-1  mymob:mx-2 desktop:mx-5 iox:mx-0 iox:mb-5 cursor-pointer iox:inline `
                    }
                  >
                    {label.label}
                  </button>
                );
              })}
            </div>
            {/* Content Admin Application */}
            <div className="">
              {/* User And Role Oversight */}
              {openTab && activeAdmin === 1 && (
                <div>
                  <div className="bg-[#f7f8f3] py-6 sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px]  desktop:w-[964px] iox:w-[884px] biglap:w-[1500px] mx-auto sm:mt-4 iox:mt-0 rounded-2xl iox:mr-0">
                    <ul className="list-disc sm:px-8 font-inter marker:text-base mx-auto">
                      {/* Role-Based Administration */}
                      <li className="text-2xl text-[#1A1D1E] font-semibold ">
                        Role-Based Administration
                        <img
                          src="/Pictures/Role-Based-Administration.jpg"
                          alt=""
                          loading="lazy"
                          className="my-3"
                        />
                      </li>
                      <p className="text-base text-[#222222] my-3">
                        Experience seamless control and precision with our
                        role-based administration feature.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        Tailored for efficient user and role management in the
                        admin dashboard features, this functionality ensures
                        that administrators gain unrestricted access to all
                        platform features.
                      </p>

                      {/* User Management*/}
                      <li className="text-2xl text-[#1A1D1E] font-semibold">
                        User Management
                      </li>
                      <img
                        src="/Pictures/User-Management.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        The user management feature is designed to elevate your
                        customer engagement strategy.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        Seamlessly capture and organize customer data to have
                        personalized interactions with your customers.aced.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        From order history tracking to customized promotions,
                        this feature present in the list of admin panel features
                        enables you to build lasting relationships and enhance
                        customer loyalty.
                      </p>

                      {/* Ratings And Coupon Management */}
                      <li className="text-2xl text-[#1A1D1E] font-semibold">
                        Ratings And Coupon Management
                      </li>
                      <img
                        src="/Pictures/Ratings-And-Coupon-Management.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        Take control of your online reputation with the ratings
                        and coupon management feature present in the admin
                        dashboard features toolkit.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        We help you respond to customer feedback and reviews
                        through the restaurant dashboard to highlight your
                        commitment to customer satisfaction.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        The integrated rating and coupon management feature not
                        only attracts new customers but also retains existing
                        ones to create a win-win scenario for your business.
                      </p>

                      {/* Tipping Option Management */}
                      <li className="text-2xl text-[#1A1D1E] font-semibold">
                        Tipping Option Management
                      </li>
                      <img
                        src="/Pictures/Tipping-Option-Management.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        The tipping option management feature is not just a
                        feature; it’s a way to appreciate and motivate your
                        delivery team.
                      </p>
                      <p className="text-base text-[#222222] mt-3">
                        Enable your customers to show their gratitude and
                        satisfaction with your service through a seamless
                        tipping process present in the admin panel features.
                      </p>
                    </ul>
                  </div>
                  <div className="relative my-12  ">
                    <img
                      src="/Pictures/div.bg-white.jpg"
                      alt=""
                      className="w-full sm:h-[200px] mymob:h-[250px] tablet:h-[350px] desktop:h-[400px] iox:h-[450px]"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto text-center">
                      <p className="text-[28px] tablet:text-[31px] text-[#1A1D1E] font-bold sm:w-[228px]  sm:mb-6 mx-auto mymob:w-[268px] myiphone:w-[306px] tablet:w-[582px] desktop:w-[400px] biglap:w-[700px] sm:h-auto text-center leading-8.5 capitalize ">
                        Schedule a meeting and get started today
                      </p>
                      <p
                        className="py-3 px-4 shadow inset-shadow-sm  text-black border-[1.5px] border-[#558567] rounded-md drop-shadow-sm  inline-block mx-auto"
                        style={{
                          backgroundImage:
                            " linear-gradient(180deg, #86cba0 0, #6cb487 100%)",
                        }}
                      >
                        {/* Link One "Schedule a Call Now" */}
                        <Link
                          to="/contactus"
                          className="text-base font-inter font-semibold "
                        >
                          Schedule a Call Now
                        </Link>
                      </p>
                    </div>
                  </div>
                  {/* End link */}
                </div>
              )}
              {/* End User & Roles OverSight */}

              {/* Establishment Management */}
              {openTab && activeAdmin === 2 && (
                <div>
                  <div className="bg-[#F7F4F4] py-6 sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px]  desktop:w-[964px] iox:w-[884px] biglap:w-[1500px] mx-auto sm:mt-4 iox:mt-0 rounded-2xl iox:mr-0">
                    <ul className="list-disc sm:px-8 font-inter marker:text-base mx-auto">
                      {/* Restaurant Management And Selection */}
                      <li className="text-2xl text-[#1A1D1E] font-semibold ">
                        Restaurant Management And Selection
                      </li>
                      <img
                        src="/Pictures/Restaurant-Management-And-Selection.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        With the restaurant management and selection feature,
                        you get access to a vast range of tools to manage your
                        restaurant business through the admin dashboard
                        features.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        You can easily explore the restaurant list and select
                        the right ones by leveraging the food delivery app admin
                        dashboard features.
                      </p>

                      {/* Vendor Management*/}
                      <li className="text-2xl text-[#1A1D1E] font-semibold">
                        Vendor Management
                      </li>
                      <img
                        src="/Pictures/Vendor-Management.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        We offer robust capabilities to help businesses manage
                        their vendors with our vendor management feature.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        With our restaurant dashboard for admins, you can
                        seamlessly onboard and manage your network of vendors to
                        ensure a streamlined and efficient collaboration.
                      </p>
                      <p className="text-base text-[#222222] mt-3">
                        We help create partnerships to provide vendors with the
                        tools they need to highlight their offerings effectively
                        with the food delivery app admin dashboard features.
                      </p>
                    </ul>
                  </div>
                  {/* End List */}
                  <div className="relative my-12  ">
                    <img
                      src="/Pictures/div.bg-white.jpg"
                      alt=""
                      className="w-full sm:h-[200px] mymob:h-[250px] tablet:h-[350px] desktop:h-[400px] iox:h-[450px]"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto text-center">
                      <p className="text-[28px] tablet:text-[31px] text-[#1A1D1E] font-bold sm:w-[228px]  sm:mb-6 mx-auto mymob:w-[268px] myiphone:w-[306px] tablet:w-[582px] desktop:w-[400px] biglap:w-[700px] sm:h-auto text-center leading-8.5 capitalize ">
                        Schedule a meeting and get started today
                      </p>
                      <p
                        className="py-3 px-4 shadow inset-shadow-sm  text-black border-[1.5px] border-[#558567] rounded-md drop-shadow-sm  inline-block mx-auto"
                        style={{
                          backgroundImage:
                            " linear-gradient(180deg, #86cba0 0, #6cb487 100%)",
                        }}
                      >
                        {/* Link One "Schedule a Call Now" */}
                        <Link
                          to="/contactus"
                          className="text-base font-inter font-semibold "
                        >
                          Schedule a Call Now
                        </Link>
                      </p>
                    </div>
                  </div>
                  {/* End link */}{" "}
                </div>
              )}
              {/* End Establishment Management */}

              {/* Financial And Commission Management */}
              {openTab && activeAdmin === 3 && (
                <div>
                  <div className="bg-[#F7F4F4] py-6 sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px]  desktop:w-[964px] iox:w-[884px] biglap:w-[1500px] mx-auto sm:mt-4 iox:mt-0 rounded-2xl iox:mr-0">
                    <ul className="list-disc sm:px-8 font-inter marker:text-base mx-auto">
                      {/* Withdrawal Requests From Riders Management */}
                      <li className="text-2xl text-[#1A1D1E] font-semibold ">
                        Withdrawal Requests From Riders Management
                      </li>
                      <img
                        src="/Pictures/Withdrawal-Requests-From-Riders-Management.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        We put you in the driver’s seat when it comes to
                        managing withdrawal requests from riders with the
                        withdrawal requests from riders management feature.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        Seamlessly handle financial transactions with our
                        intuitive interface which ensures prompt and secure
                        transactions with the admin dashboard features.
                      </p>

                      {/* Commission Rate Management */}
                      <li className="text-2xl text-[#1A1D1E] font-semibold ">
                        Commission Rate Management
                      </li>
                      <img
                        src="/Pictures/Commission-Rate-Management.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        Take charge of your business’s financial health with the
                        commission rate management feature.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        By leveraging the admin dashboard features, you get to
                        customize and adjust the commission rates effortlessly
                        to align them with your business strategy.
                      </p>

                      {/* Stripe Commission Integration */}
                      <li className="text-2xl text-[#1A1D1E] font-semibold ">
                        Stripe Commission Integration
                      </li>
                      <img
                        src="/Pictures/Stripe-Commission-Integration.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        Elevate your financial operations with the Stripe
                        commission integration feature.
                      </p>
                      <p className="text-base text-[#222222] mt-3">
                        With the Stripe commission integration feature, you can
                        receive commissions directly in your Stripe account to
                        ensure a secure transfer process.
                      </p>
                    </ul>
                  </div>
                  {/* End List */}

                  <div className="relative my-12  ">
                    <img
                      src="/Pictures/div.bg-white.jpg"
                      alt=""
                      className="w-full sm:h-[200px] mymob:h-[250px] tablet:h-[350px] desktop:h-[400px] iox:h-[450px]"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto text-center">
                      <p className="text-[28px] tablet:text-[31px] text-[#1A1D1E] font-bold sm:w-[228px]  sm:mb-6 mx-auto mymob:w-[268px] myiphone:w-[306px] tablet:w-[582px] desktop:w-[400px] biglap:w-[700px] sm:h-auto text-center leading-8.5 capitalize ">
                        Schedule a meeting and get started today
                      </p>
                      <p
                        className="py-3 px-4 shadow inset-shadow-sm  text-black border-[1.5px] border-[#558567] rounded-md drop-shadow-sm  inline-block mx-auto"
                        style={{
                          backgroundImage:
                            " linear-gradient(180deg, #86cba0 0, #6cb487 100%)",
                        }}
                      >
                        {/* Link One "Schedule a Call Now" */}
                        <Link
                          to="/contactus"
                          className="text-base font-inter font-semibold "
                        >
                          Schedule a Call Now
                        </Link>
                      </p>
                    </div>
                  </div>
                  {/* End link */}
                </div>
              )}
              {/* End Financial And Commission Management*/}

              {/* Operational Configuration*/}
              {openTab && activeAdmin === 4 && (
                <div>
                  <div className="bg-[#F7F4F4] py-6 sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px]  desktop:w-[964px] iox:w-[884px] biglap:w-[1500px] mx-auto sm:mt-4 iox:mt-0 rounded-2xl iox:mr-0">
                    <ul className="list-disc sm:px-8 font-inter marker:text-base mx-auto">
                      {/* Geographical Zones Management*/}
                      <li className="text-2xl text-[#1A1D1E] font-semibold ">
                        Geographical Zones Management
                      </li>
                      <img
                        src="/Pictures/Geographical-Zones-Management.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        Elevate your delivery service precision with the
                        geographical zones management feature.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        As a business, you can ensure accurate and efficient
                        deliveries by strategically organizing and managing
                        geographical zones.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        Minimize delivery times and increase customer
                        satisfaction with this cutting-edge geographical zones
                        management feature.
                      </p>

                      {/* Application Configuration*/}
                      <li className="text-2xl text-[#1A1D1E] font-semibold ">
                        Application Configuration
                      </li>
                      <img
                        src="/Pictures/Application-Configuration.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        Tailor your delivery app to meet your specific business
                        needs with Enatega’s Application Configuration.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        Enjoy unparalleled flexibility as you customize the app
                        to reflect your brand identity, set pricing structures,
                        and configure features that align with your unique
                        business model.
                      </p>

                      {/* Order Status Control*/}
                      <li className="text-2xl text-[#1A1D1E] font-semibold ">
                        Order Status Control
                      </li>
                      <img
                        src="/Pictures/Order-Status-Control.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        Maintain complete control over your delivery process
                        with the order status control feature.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        From order placement to delivery, you can always access
                        a holistic overall view of all the operations in this
                        admin dashboard feature.
                      </p>

                      {/* Restaurant Time Management */}
                      <li className="text-2xl text-[#1A1D1E] font-semibold ">
                        Restaurant Time Management
                      </li>
                      <img
                        src="/Pictures/Restaurant-Time-Management.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        Optimize your restaurant’s efficiency with the
                        restaurant time management feature. Seamlessly manage
                        opening hours, order preparation times, and delivery
                        schedules.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        Ensure timely and fresh deliveries with the restaurant
                        time management feature to increase customer loyalty and
                        positive reviews.
                      </p>

                      {/* Delivery Area Definition */}
                      <li className="text-2xl text-[#1A1D1E] font-semibold ">
                        Delivery Area Definition
                      </li>
                      <img
                        src="/Pictures/Delivery-Area-Definition.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        Increase your brand’s reach strategically with our
                        delivery area definition feature.
                      </p>
                      <p className="text-base text-[#222222] mt-3">
                        You can define and adjust your delivery areas as per the
                        demand to ensure you cover the maximum target market.
                      </p>
                    </ul>
                  </div>
                  {/* End List */}

                  <div className="relative my-12  ">
                    <img
                      src="/Pictures/div.bg-white.jpg"
                      alt=""
                      className="w-full sm:h-[200px] mymob:h-[250px] tablet:h-[350px] desktop:h-[400px] iox:h-[450px]"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto text-center">
                      <p className="text-[28px] tablet:text-[31px] text-[#1A1D1E] font-bold sm:w-[228px]  sm:mb-6 mx-auto mymob:w-[268px] myiphone:w-[306px] tablet:w-[582px] desktop:w-[400px] biglap:w-[700px] sm:h-auto text-center leading-8.5 capitalize ">
                        Schedule a meeting and get started today
                      </p>
                      <p
                        className="py-3 px-4 shadow inset-shadow-sm  text-black border-[1.5px] border-[#558567] rounded-md drop-shadow-sm  inline-block mx-auto"
                        style={{
                          backgroundImage:
                            " linear-gradient(180deg, #86cba0 0, #6cb487 100%)",
                        }}
                      >
                        {/* Link One "Schedule a Call Now" */}
                        <Link
                          to="/contactus"
                          className="text-base font-inter font-semibold "
                        >
                          Schedule a Call Now
                        </Link>
                      </p>
                    </div>
                  </div>
                  {/* End link */}
                </div>
              )}
              {/* End Operation Configuration*/}

              {/* Menu and Analytics */}
              {openTab && activeAdmin === 5 && (
                <div>
                  <div className="bg-[#F7F4F4] py-6 sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px]  desktop:w-[964px] iox:w-[884px] biglap:w-[1500px] mx-auto sm:mt-4 iox:mt-0 rounded-2xl iox:mr-0">
                    <ul className="list-disc sm:px-8 font-inter marker:text-base mx-auto">
                      {/* Menu Showcase */}
                      <li className="text-2xl text-[#1A1D1E] font-semibold ">
                        Menu Showcase
                      </li>
                      <img
                        src="/Pictures/Menu-Showcase.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        Elevate your restaurant’s presence with the menu
                        showcase feature.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        Catch your customers’ eye with enticing images, detailed
                        descriptions, and a seamless browsing experience using
                        the menu showcase feature.
                      </p>

                      {/* Versatile Food Option Module */}
                      <li className="text-2xl text-[#1A1D1E] font-semibold">
                        Versatile Food Option Module
                      </li>
                      <img
                        src="/Pictures/Versatile-Food-Option-Module.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        The versatile food option module feature empowers you to
                        show your culinary creativity to your potential
                        customers.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        With the versatile food option module feature, you can
                        add any variety of food effortlessly, from daily
                        specials to seasonal delights.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        Enjoy the flexibility to modify, customize, and expand
                        your menu offerings to cater to evolving customer
                        tastes.
                      </p>

                      {/* Discounted Fare */}
                      <li className="text-2xl text-[#1A1D1E] font-semibold">
                        Discounted Fare
                      </li>
                      <img
                        src="/Pictures/Discounted-Fare.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        Attract and retain customers with the discounted fare
                        feature.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        Implement strategic discounts on food items to attract
                        potential customers to opt for your offerings in the
                        competitive culinary landscape.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        Make every dining experience unforgettable and
                        affordable for your customers with the discount fare
                        feature.
                      </p>

                      {/* Order And Performance Analytics */}
                      <li className="text-2xl text-[#1A1D1E] font-semibold">
                        Order And Performance Analytics
                      </li>
                      <img
                        src="/Pictures/Order-And-Performance-Analytics.jpg"
                        alt=""
                        loading="lazy"
                        className="my-3"
                      />
                      <p className="text-base text-[#222222] my-3">
                        The order and performance analytics feature provide you
                        with invaluable insights into your business operations.
                      </p>
                      <p className="text-base text-[#222222] my-3">
                        You get to stay updated with the current order trends,
                        analyze customer preferences, and optimize your menu
                        based on analytics.
                      </p>
                      <p className="text-base text-[#222222] mt-3">
                        Enhance your operational overall performance and reduce
                        your business costs with this admin dashboard feature.
                      </p>
                    </ul>
                  </div>
                  {/* End List */}

                  <div className="relative my-12  ">
                    <img
                      loading="lazy"
                      src="/Pictures/div.bg-white.jpg"
                      alt=""
                      className="w-full sm:h-[200px] mymob:h-[250px] tablet:h-[350px] desktop:h-[400px] iox:h-[450px]"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto text-center">
                      <p className="text-[28px] tablet:text-[31px] text-[#1A1D1E] font-bold sm:w-[228px]  sm:mb-6 mx-auto mymob:w-[268px] myiphone:w-[306px] tablet:w-[582px] desktop:w-[400px] biglap:w-[700px] sm:h-auto text-center leading-8.5 capitalize ">
                        Schedule a meeting and get started today
                      </p>
                      <p
                        className="py-3 px-4 shadow inset-shadow-sm  text-black border-[1.5px] border-[#558567] rounded-md drop-shadow-sm  inline-block mx-auto"
                        style={{
                          backgroundImage:
                            " linear-gradient(180deg, #86cba0 0, #6cb487 100%)",
                        }}
                      >
                        {/* Link One "Schedule a Call Now" */}
                        <Link
                          to="/contactus"
                          className="text-base font-inter font-semibold "
                        >
                          Schedule a Call Now
                        </Link>
                      </p>
                    </div>
                  </div>
                  {/* End link */}
                </div>
              )}
              {/* End Menu and Analytics*/}
            </div>
            {/* End All Sidebar Label */}
          </div>
        )}

        {/* End 4th Box Admin Dashboard  */}
      </div>
      {/* End Features section with 4 box divs */}

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

export default Features;
