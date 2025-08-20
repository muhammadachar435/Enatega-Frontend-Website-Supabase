import { NavLink, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import SidebarData from "../Component/Sidebardata";
import { FaArrowLeft, FaArrowRight, FaInstagram } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiArrowSortedDown,
} from "react-icons/ti";
import {
  IoMdMenu,
  IoMdClose,
  IoIosArrowDown,
  IoIosArrowUp,
} from "react-icons/io";
import "react-phone-input-2/lib/style.css";
import { Outlet } from "react-router-dom";
import { ul } from "framer-motion/client";

// Documentation
function Documentation() {
  // useState
  const [sidebar, setSidebar] = useState(false);
  const [caseStudiesbar, setCaseStudies] = useState(false);
  const [useCasebar, setUseCase] = useState(false);
  const [caseshow, setcaseshow] = useState(false);
  const [boxShow, setBoxShow] = useState(false);
  const [openModel, setopenModel] = useState(false);
  const [dropDown1, setdropDown1] = useState(false);
  const [dropDown2, setdropDown2] = useState(false);
  const [dropDown3, setdropDown3] = useState(false);
  const [dropDown4, setdropDown4] = useState(false);

  // Pages Path & Names
  const documentationRoutes = [
    { path: "/", label: "Introduction" },
    { path: "HighLevelArchitecture", label: "High Level Architecture" },
    { path: "OvervieApi", label: "Overview Of The API" },
    { path: "Faq", label: "FAQs" },
    { path: "License", label: "License" },
    { path: "PatchNotes", label: "Patch Notes" },
    { path: "PreEquistic", label: "Prerequisites" },
    { path: "Nodejs", label: "NodeJS Setup" },
    { path: "Github", label: "Git and GitHub Setup" },
    { path: "BackendAPi", label: "Setup Backend API" },
    { path: "WebApi", label: "Setup Web Dashboard" },
    { path: "Admin", label: "Setup Admin Dashboard" },
    { path: "Customer", label: "Setup Customer App" },
    { path: "Rider", label: "Setup Rider App" },
    { path: "Restaurant", label: "Setup Restaurant App" },
    { path: "BackendServer", label: "Deploy Backend API server" },
    { path: "DeployAdmin", label: "Deploy Admin Dashboard" },
    { path: "DeployWeb", label: "Deploy Web Dashboard" },
    { path: "DeployMobile", label: "Deploy Mobile Applications" },
    { path: "Map", label: "Google Maps API Keys" },
    { path: "Nodemail", label: "Nodemailer Setup" },
    { path: "PaymentGateway", label: "Configuring Payment Gateways" },
    { path: "TwilioSetup", label: "Twillio Setup" },
    { path: "Sentryintro", label: "Sentry Introduction" },
    { path: "SentryError", label: "Sentry Error Reporting" },
    { path: "ConfigCondinary", label: "Configuring Cloudinary" },
    { path: "AmplitudeIntro", label: "Amplitude Introduction" },
    { path: "AmplitudeIntegration", label: "Amplitude Integration" },
    { path: "FirebaseSetup", label: "Firebase Setup" },
    { path: "PushNotification", label: "Push Notification Keys" },
    { path: "SocialLogin", label: "Social Login" },
    { path: "Database", label: "Configuring Database" },
    { path: "ServerConfig", label: "Server Configurations" },
  ];

  // Add this function before the Documentation component
  function getDocumentationNavigation(currentPath) {
    const docsPath = "/documentation/";
    const currentRoute = currentPath.replace(docsPath, "");

    const currentIndex = documentationRoutes.findIndex(
      (route) => route.path === currentRoute
    );

    // Handle case when route isn't found
    if (currentIndex === -1) {
      return { prevRoute: null, nextRoute: null };
    }

    const prevRoute =
      currentIndex > 0 ? documentationRoutes[currentIndex - 1] : null;

    const nextRoute =
      currentIndex < documentationRoutes.length - 1
        ? documentationRoutes[currentIndex + 1]
        : null;

    return { prevRoute, nextRoute };
  }
  const location = useLocation();

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

      {/* Documentation Page */}
      <div
        className="mt-36 sm:flex justify-center space-x-2 desktop:hidden items-center w-[90%] mx-auto px-2 py-2 text-center text-lg font-inter bg-[#E4E4E4] text-[#222222]"
        onClick={() => {
          setopenModel(!openModel);
        }}
      >
        <button className="text-center font-inter">Documentation</button>
        <IoIosArrowDown />
      </div>

      <div className="sm:w-[90%] desktop:w-full mx-auto sm:mt-6 desktop:space-x-4 desktop:mt-40 desktop:flex">
        <div
          className={
            openModel
              ? `w-full sm:flex desktop:hidden mb-10 border border-gray-400 py-3 `
              : `desktop:w-66 iox:w-85 sm:hidden desktop:flex `
          }
        >
          <ul className="sm:w-full  sm:mx-1 mymob:px-2 desktop:px-5 space-y-3 sm:text-[14px] ">
            {documentationRoutes.map((route, index) => (
              <li key={route.path}>
                {index === 0 && (
                  <ul>
                    <li className="sm:text-[16px] mb-3 font-semibold font-inter">
                      Getting Started
                    </li>
                  </ul>
                )}
                {index === 6 && (
                  <ul>
                    <li className="sm:text-base  mb-3 font-semibold font-inter">
                      Installation
                    </li>
                  </ul>
                )}
                {index === 19 && (
                  <ul>
                    <li className="sm:text-base mb-3 font-semibold font-inter">
                      Configuration
                    </li>
                  </ul>
                )}
                {index > 6 && index < 8 && (
                  <ul>
                    <li
                      className="sm:text-base flex items-center justify-between  mb-3 cursor-pointer text-[#4e5554] font-inter"
                      onClick={() => {
                        setdropDown1(!dropDown1);
                        setdropDown2(false);
                        setdropDown3(false);
                        setdropDown4(false);
                      }}
                    >
                      How to setup locally
                      {dropDown1 ? (
                        <IoIosArrowDown className="w-6 h-6" />
                      ) : (
                        <MdKeyboardArrowRight className="w-6 h-6" />
                      )}
                    </li>
                  </ul>
                )}
                {index > 14 && index < 16 && (
                  <ul>
                    <li
                      className="sm:text-[14px] flex items-center justify-between  mb-3 cursor-pointer text-[#4e5554] font-inter"
                      onClick={() => {
                        setdropDown1(false);
                        setdropDown2(!dropDown2);
                        setdropDown3(false);
                        setdropDown4(false);
                      }}
                    >
                      <span className="w-[90%] font-inter">
                        How to setup/deploy for production
                      </span>
                      {dropDown2 ? (
                        <IoIosArrowDown className="w-6 h-6" />
                      ) : (
                        <MdKeyboardArrowRight className="w-6 h-6" />
                      )}
                    </li>
                  </ul>
                )}

                {index === 23 && (
                  <ul>
                    <li
                      className="sm:text-[14px] flex items-center justify-between   mb-3 cursor-pointer text-[#4e5554] font-inter"
                      onClick={() => {
                        setdropDown1(false);
                        setdropDown2(false);
                        setdropDown3(!dropDown3);
                        setdropDown4(false);
                      }}
                    >
                      Sentry Dashboard
                      {dropDown3 ? (
                        <IoIosArrowDown className="w-6 h-6" />
                      ) : (
                        <MdKeyboardArrowRight className="w-6 h-6" />
                      )}
                    </li>
                  </ul>
                )}

                {index === 26 && (
                  <ul>
                    <li
                      className="sm:text-[14px] flex items-center justify-between  mb-3 cursor-pointer text-[#4e5554] font-inter"
                      onClick={() => {
                        setdropDown1(false);
                        setdropDown2(false);
                        setdropDown3(false);
                        setdropDown4(!dropDown4);
                      }}
                    >
                      Amplitude Dashboard
                      {dropDown4 ? (
                        <IoIosArrowDown className="w-6 h-6" />
                      ) : (
                        <MdKeyboardArrowRight className="w-6 h-6" />
                      )}
                    </li>
                  </ul>
                )}
                {dropDown1 && index > 6 && index < 15 && (
                  <NavLink
                    to={`/documentation/${route.path}`}
                    onClick={() => {
                      openModel ? setopenModel(!openModel) : null;
                    }}
                    className={({ isActive }) =>
                      `ml-2 transition-colors sm:text-[14px] font-inter ${
                        isActive
                          ? "font-medium border-b border-[#4b4b4d] inline font-inter"
                          : "text-gray-600 inline font-inter"
                      }`
                    }
                  >
                    {route.label}
                  </NavLink>
                )}

                {dropDown2 && index > 14 && index < 19 && (
                  <NavLink
                    to={`/documentation/${route.path}`}
                    onClick={() => {
                      openModel ? setopenModel(!openModel) : null;
                    }}
                    className={({ isActive }) =>
                      `ml-2 transition-colors sm:text-[14px]  font-inter ${
                        isActive
                          ? "font-medium border-b-2 border-[#4b4b4d] text-[#4e5554] inline "
                          : "text-[#4e5554] inline"
                      }`
                    }
                  >
                    {route.label}
                  </NavLink>
                )}

                {dropDown3 && index > 22 && index < 25 && (
                  <NavLink
                    to={`/documentation/${route.path}`}
                    onClick={() => {
                      openModel ? setopenModel(!openModel) : null;
                    }}
                    className={({ isActive }) =>
                      `ml-2 transition-colors sm:text-[14px]  font-inter ${
                        isActive
                          ? "font-medium border-b-2 border-[#4b4b4d] text-[#4e5554] inline "
                          : "text-[#4e5554] inline"
                      }`
                    }
                  >
                    {route.label}
                  </NavLink>
                )}

                {dropDown4 && index > 25 && index < 28 && (
                  <NavLink
                    to={`/documentation/${route.path}`}
                    onClick={() => {
                      openModel ? setopenModel(!openModel) : null;
                    }}
                    className={({ isActive }) =>
                      `ml-2 transition-colors sm:text-[14px] font-inter ${
                        isActive
                          ? "font-medium border-b-2 border-[#4b4b4d] text-[#4e5554] inline "
                          : "text-[#4e5554] inline"
                      }`
                    }
                  >
                    {route.label}
                  </NavLink>
                )}

                {(index < 7 ||
                  (index > 18 && index < 23) ||
                  (index > 24 && index < 26) ||
                  index > 27) && (
                  <NavLink
                    to={`/documentation/${route.path}`}
                    onClick={() => {
                      openModel ? setopenModel(!openModel) : null;
                    }}
                    className={({ isActive }) =>
                      `transition-colors sm:text-[14px] font-inter ${
                        isActive
                          ? "font-medium border-b-2 border-[#4b4b4d] text-[#4e5554] inline "
                          : "text-[#4e5554] inline"
                      }`
                    }
                  >
                    {route.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1">
          <Outlet />

          {/* Navigation buttons */}

          <div className="mt-4 flex justify-between desktop:w-[639px] iox:w-[650px] biglap:w-[1000px]  biglap:ml-45">
            {(() => {
              const { prevRoute, nextRoute } = getDocumentationNavigation(
                location.pathname
              );
              return (
                <>
                  {prevRoute ? (
                    <Link
                      to={`/documentation/${prevRoute.path}`}
                      className="rounded-lg leading-4 mymob:px-1 tablet:px-4 py-2 sm:text-xs font-medium transition-colors font-inter"
                    >
                      <span className="flex items-center space-x-2 justify-start cursor-pointer">
                        <FaArrowLeft className="h-4 w-4" />
                        <span className=" tablet:text-[14px] font-inter text-[#7C7C86] cursor-pointer italic font-semibold">
                          Previous
                        </span>
                      </span>
                      <span className="tablet:text-base font-inter text-[#000000] font-bold cursor-pointer">
                        {prevRoute.label}
                      </span>
                    </Link>
                  ) : (
                    <div />
                  )}

                  {nextRoute && (
                    <Link
                      to={`/documentation/${nextRoute.path}`}
                      className="mymob:px-1 leading-4 tablet:px-4 py-2 text-xs font-medium transition-colors sm:ml-auto font-inter "
                    >
                      <span className="flex items-center space-x-2 justify-end cursor-pointer">
                        <span className="tablet:text-[14px] font-inter text-[#7C7C86] cursor-pointer italic font-semibold">
                          Next
                        </span>
                        <FaArrowRight className="h-4 w-4" />
                      </span>
                      <span className="tablet:text-base font-inter text-[#000000] font-bold cursor-pointer inline-block">
                        {" "}
                        {nextRoute.label}
                      </span>
                    </Link>
                  )}
                </>
              );
            })()}
          </div>
        </div>
      </div>

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

export default Documentation;
