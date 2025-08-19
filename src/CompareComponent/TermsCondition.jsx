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

// TermsCondition;
function TermsCondition() {
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
                    src="/Pictures/Blink.png"
                    alt=""
                    className="object-fit w-[21px] h-[23px]"
                  />
                </div>
                <div>
                  <Link
                    to="/roadSide"
                    className="font-inter text-base font-bold hover:text-sky-600 duration-300"
                  >
                    Blink Assistance Services Solution
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

      <div className="w-full max-w-[1200px] mx-auto sm:mt-26 desktop:mt-34 p-5 h-auto">
        <p className="text-[#1A1D1E] font-inter sm:text-[28px] tablet:text-[31.5px] desktop:text-[32px] iox:text-[35px] sm:leading-8 capitalize font-bold">
          Terms and Conditions
        </p>
        <p className="text-xl font-inter text-[#222222] font-bold h-auto mt-[12px]">
          Scope & Acceptance of Terms of Use
        </p>
        <p className="text-[#1A1D1E] leading-[1.4rem] font-inter my-[10px] text-[16.5px] font-[400] desktop:text-[17.5px]">
          Before using the Enatega website and mobile applications, reading and
          understanding these Terms & Conditions is essential. Your acceptance
          and compliance with these terms will dictate your access to and
          utilization of the Platforms. All users intending to access or use the
          platforms must adhere to these Terms.
        </p>
        <p className="text-[#1A1D1E] leading-[1.4rem] font-inter my-[10px] text-[16.5px] font-[400] desktop:text-[17.5px]">
          You agree to be legally bound by these Terms by accessing or using the
          Platforms. However, if you do not agree with any part of these Terms,
          please refrain from using the Platforms.
        </p>

        <p className="text-xl font-inter text-[#222222] font-bold h-auto my-2">
          Changes to Terms of Use
        </p>
        <p className="text-[#1A1D1E] leading-[1.4rem]  font-inter my-[10px] text-[16.5px] font-[400] desktop:text-[17.5px]">
          Enatega can change these Terms of Use with or without notice. The most
          recent Terms of Use can be found by clicking “Terms & Conditions” on
          our website. The latest Terms of Use replaces all earlier versions.
          Your continued use of the Platforms after the modifications will be
          considered as acceptance of the updated Terms of Service.
        </p>

        <p className="text-xl font-inter text-[#222222] font-bold h-auto ">
          How Does Enatega Work?
        </p>
        <ul className="list-disc px-2">
          <li className="text-[#1A1D1E] font-inter my-[8px] text-[16.5px] font-bold">
            What We Do?
          </li>
          <p className="text-[#1A1D1E] leading-[1.4rem] font-inter my-[10px] text-[16.5px] font-[400] desktop:text-[17.5px]">
            Enatega develops scalable and flexible delivery apps that can handle
            a growing user base and adapt to changing business requirements. The
            Enatega white label delivery software is fully customizable and
            helps you quickly launch your business easily according to your
            business specifications.{" "}
          </p>
          <li className="text-[#1A1D1E] font-inter my-[8px] text-[16.5px] font-bold">
            How to Contact Us?
          </li>
          <p className="text-[#1A1D1E] leading-[1.4rem] font-inter my-[10px] text-[16.5px] font-[400] desktop:text-[17.5px]">
            For customer support, you may contact us via email at
            sales@dev.enatega.com or through our in-app customer support chat
            feature via Whatsapp.
          </p>
        </ul>
        <p className="text-xl font-inter text-[#222222] font-bold h-auto ">
          Payment Terms
        </p>
        <p className="text-[#1A1D1E] leading-[1.4rem] font-inter my-[10px] text-[16.5px] font-[400] desktop:text-[17.5px]">
          The client pays an upfront payment to the service provider through our
          third party payment gateway. After that, the source code is delivered
          to the client within 24 hours. The Client will receive the product in
          a .zip file from the same page that they make the payment.
        </p>
        <p className="text-[#1A1D1E] font-inter leading-[1.4rem]  my-[10px] text-[16.5px] font-[400] desktop:text-[17.5px]">
          Alternatively, the Service Provider can also provide an alternative
          payment method to the client upon request.
        </p>
        <p className="text-[#1A1D1E] font-inter leading-[1.4rem]  my-[10px] text-[16.5px] font-[400] desktop:text-[17.5px]">
          For alternative payment methods, the client must meet two conditions
          for the Service Provider to start service under the agreement:
        </p>
        <ul className="px-2 list-disc my-[10px]">
          <li className="text-[#222222] font-inter text-[16.5px] font-[400] leading-[1.4rem]">
            The Client must provide a receipt as proof of payment once the
            payment has been made.
          </li>
          <li className="text-[#222222] font-inter text-[16.5px] font-[400] leading-[1.4rem] ">
            If using wire transfer, please note that foreign transactions may
            take 1-3 business days to reflect in the service provider’s account;
            the process is complete after this confirmation. The Client must
            make payment and attach the receipt via email.
          </li>
        </ul>
        <p className="text-xl font-inter text-[#222222] font-bold h-auto ">
          Refund Policy
        </p>
        <p className="text-[#1A1D1E] leading-[1.4rem]  font-inter my-[10px] text-[16.5px] desktop:text-[17.5px] font-[400]">
          At Enatega, we maintain a strict{" "}
          <span className="font-bold">no-refund policy </span> for our scalable,
          high-load professional-grade products. Please be aware that our
          software is not designed for DIY installations and requires a minimum
          set of backend and server skills.
        </p>
        <p className="sm:text-base desktop:text-[17.5px] font-inter text-[#222222] font-bold h-auto ">
          Important Information:
        </p>
        <ul className="list-disc px-2 my-[10px]">
          <li className="sm:text-base  leading-[1.4rem] font-inter text-[#222222] h-auto font-[400]">
            <span className="font-bold"> No Refunds:</span> All purchases are
            final. We do not offer refunds since we’re providing the entire
            source-code.
          </li>
          <li className="sm:text-base leading-[1.4rem]  font-inter text-[#222222] h-auto font-[400]">
            <span className="font-bold"> Installation Requirements:</span>{" "}
            Installing our product necessitates proficiency in Javascript
            development and a solid understanding of related tools listed on our
            website. We strongly recommend reviewing our documentation prior to
            purchase, especially if you are not an experienced developer.
          </li>
          <li className="sm:text-base leading-[1.4rem]  font-inter text-[#222222] h-auto font-[400]">
            <span className="font-bold"> Documentation Updates: </span> We are
            continuously improving our documentation. If you find it lacking at
            any point, we encourage you to check back later, as updated
            resources may better meet your installation needs.
          </li>
          <li className="sm:text-base leading-[1.4rem]  font-inter text-[#222222] h-auto font-[400]">
            <span className="font-bold"> Support Options: </span> We provide
            2-hours of consultancy with our developers post purchase, extensive
            installation guidance is not provided. However, we do provide
            deployment and customization services under our parent company
            (Ninjascode). You can check out their packages at{" "}
            <Link
              to="https://www.ninjascode.com/?_gl=1*8fxzo7*_gcl_au*MTEzMTAxNDc0OC4xNzUyMTE4MTc0LjkzOTI0MTMzNy4xNzU0NTU3ODcxLjE3NTQ1NTc4NzA."
              className="text-[#551A8B] active:text-[#FF0000]"
            >
              www.ninjascode.com
            </Link>
          </li>
        </ul>
        <p className="text-xl font-inter text-[#222222] font-bold h-auto my-[10px]">
          Redistribution and Reselling
        </p>
        <p className="sm:text-base leading-[1.4rem]  desktop:text-[17.5px] font-inter text-[#222222] h-auto my-[10px]  font-[400]">
          You are expressly prohibited from redistributing, reselling, or
          otherwise transferring any part of the Enatega product to any third
          party, whether in original form or modified. This includes, but is not
          limited to, offering the product for sale, deploying the platform on
          multiple domains, or distributing it in any format or through any
          medium. Any such unauthorized activity will be considered a violation
          of these terms and may result in the termination of your access to our
          services, as well as legal action.
        </p>
        <p className="text-xl leading-[1.4rem]  font-inter text-[#222222] font-bold h-auto my-[10px]">
          Publicity and Communication
        </p>
        <p className="sm:text-base leading-[1.4rem]  desktop:text-[17.5px] font-inter text-[#222222] h-auto my-[10px]  font-[400]">
          Enatega may be contacted via email at sales@dev.enatega.com or through
          our in-app customer support chat feature via Whatsapp as
          aforementioned in the “How to contact us” section.
        </p>
        <p className="sm:text-base leading-[1.4rem]  desktop:text-[17.5px] font-inter text-[#222222] font-bold h-auto my-[10px]">
          Disclosure of Personal Information
        </p>
        <p className="sm:text-base leading-[1.4rem]  desktop:text-[17.5px] font-inter text-[#222222] h-auto my-[10px]  font-[400]">
          For full disclosure of your personal and identifiable information, see
          our Privacy Policy.{" "}
        </p>
        <p className="text-xl font-inter text-[#222222] font-bold h-auto my-[10px]">
          Confidentiality
        </p>
        <p className="sm:text-base leading-[1.4rem]  desktop:text-[17.5px] font-inter text-[#222222] h-auto my-[10px]  font-[400]">
          The Service Provider and any other contracted staff working with or
          hired by the Service Provider shall keep all information confidential
          at all times during the term of this Agreement and after the Agreement
          has ended.
        </p>
        <p className="sm:text-base leading-[1.4rem]  desktop:text-[17.5px] font-inter text-[#222222] h-auto my-[10px]  font-[400]">
          Non-Solicitation Covenant to Enatega Contractors and Employees
        </p>
        <p className="sm:text-base leading-[1.4rem]  desktop:text-[17.5px] font-inter text-[#222222] h-auto my-[10px]  font-[400]">
          By buying our services and signing the User Service Agreement, you
          agree and understand that you are legally bound not to work with
          Enatega agents, employees, or service providers who provide Enatega
          services for the client for a year.
        </p>
        <p className="sm:text-base leading-[1.4rem]  desktop:text-[17.5px] font-inter text-[#222222] h-auto my-[10px]  font-[400]">
          You agree that you won’t approach, contact, or try to hire any of
          Enatega’s team members. Or service companies outside their working
          relationship during or after working with Enatega for up to a year. By
          accepting this clause, you agree that this is a legally binding deal
          that must be followed. If you don’t, you will face legal action and
          penalties.{" "}
        </p>
        <p className="text-xl font-inter text-[#222222] font-bold h-auto my-[10px]">
          Security
        </p>
        <p className="sm:text-base leading-[1.4rem]  desktop:text-[17.5px] font-inter text-[#222222] h-auto my-[10px]  font-[400]">
          Enatega encrypts some of your messages using an industry-standard
          procedure to protect the personal information you send us during
          sign-up and registration.{" "}
          <span className="text-[#FF0000] leading-[1.4rem] ">
            Enatega does not store any of your payment information as it is
            handled by a third-party client. (Stripe, Wise or Payoneer).
          </span>{" "}
          You must keep your Enatega account details secure and restrict
          computer or mobile device access. Using shared computers or mobile
          devices without security should always log out when done using the
          Enatega account.
        </p>
        <p className="sm:text-base  leading-[1.4rem]  desktop:text-[17.5px] font-inter text-[#222222] h-auto my-[10px]  font-[400]">
          If you want to delete your Enatega account, please email us. We may
          terminate, suspend, or restrict your account. If you are suspected or
          found to have done something that breaks these Terms, our rules, or
          guidelines, or if you have done something that we, in our sole
          discretion, think is an abuse of the Platforms, we reserve the right
          to suspend your user account or temporarily restrict access.
        </p>
        <p className="text-xl font-inter text-[#222222] font-bold h-auto my-[10px]">
          Electronic Communications
        </p>
        <p className="sm:text-base leading-[1.4rem]  desktop:text-[17.5px] font-inter text-[#222222] h-auto my-[10px]  font-[400]">
          Using the Enatega Platforms allows permission to receive electronic
          communications from Enatega. This will include emails, newsletters,
          and information related to new features or updates. You agree that any
          agreements, disclosures, notices, or other information we provide you
          electronically will meet any legal communication requirements,
          including the requirement that they be in writing.
        </p>
        <p className="text-xl font-inter text-[#222222] font-bold h-auto my-[10px]">
          Bugs and Issues
        </p>
        <p className="sm:text-base leading-[1.4rem]  desktop:text-[17.5px] font-inter text-[#222222] h-auto my-[10px]  font-[400]">
          We take the quality and performance of our product very seriously.
          While our backend is thoroughly tested and rarely encounters bugs, we
          acknowledge that issues may occasionally arise, particularly in the
          frontend. Should you encounter any bugs or issues, please report them
          immediately. We prioritize bug fixes and will work diligently to
          resolve any reported issues as quickly as possible.
        </p>
        <p className="sm:text-base desktop:text-[17.5px] leading-[1.4rem]  font-inter text-[#222222] h-auto my-[10px]  font-[400]">
          For transparency, all known frontend issues are openly tracked and
          available on our GitHub repository. We encourage users to review these
          logs and contribute if possible. However, rest assured that our team
          actively monitors and addresses any problems to ensure a smooth user
          experience.
        </p>
        <p className="text-xl font-inter text-[#222222] font-bold h-auto my-[10px]">
          Limitations on Use
        </p>
        <p className="sm:text-base desktop:text-[17.5px] leading-[1.4rem]  font-inter text-[#222222] h-auto my-[10px]  font-[400]">
          Users under 18 must get their parent(s) or legal guardian(s)
          permission. By agreeing to these Terms, your parent(s) or legal
          guardian(s) agree to be responsible for your acts and any fees related
          to your use of the Platforms. If your parents or legal guardians (s)
          don’t give you permission to use or access the Platforms, you must
          stop doing so immediately.
        </p>
        <p className="text-xl font-inter text-[#222222] font-bold h-auto my-[10px]">
          Branding and Marketing
        </p>
        <p className="sm:text-base desktop:text-[17.5px] leading-[1.4rem]  font-inter text-[#222222] h-auto my-[10px]  font-[400]">
          Without our permission, you can’t use framing to enclose any Enatega
          brand, logo, or other private information, like text, images, page
          layout, or forms. You can’t use the Enatega name or logos or other
          “hidden text” without our written permission. If you use the Enatega
          website or its material without permission, you will be subject to
          legal action by the Enatega tea
        </p>
        <p className="text-xl font-inter text-[#222222] font-bold h-auto my-[10px]">
          Links and Pages
        </p>
        <p className="sm:text-base desktop:text-[17.5px] leading-[1.4rem]  font-inter text-[#222222] h-auto my-[10px]  font-[400]">
          The hyperlinks on the Enatega website may take you to other websites
          or apps not affiliated with or controlled by Enatega. Enatega has not
          reviewed these websites and is not responsible or liable for the
          actions of these third parties, the goods, or the content on the
          websites.
        </p>
        <p className="sm:text-base desktop:text-[17.5px] leading-[1.4rem]  font-inter text-[#222222] h-auto my-[10px]  font-[400]">
          Enatega accepts no liability or responsibility for any loss or damage
          you may suffer concerning your access and use of these third-party
          links and websites.
        </p>
        <p className="text-xl font-inter text-[#222222] font-bold h-auto my-[10px]">
          Force Majeure
        </p>
        <p className="sm:text-base desktop:text-[17.5px] leading-[1.4rem] font-inter text-[#222222] h-auto my-[10px]  font-[400]">
          Neither Enatega nor the Client shall be liable to the other for any
          delay in, or failure of performance of the software, any obligation
          under this Agreement caused by a Force Majeure event.
        </p>
        <p className="sm:text-base desktop:text-[17.5px] leading-[1.4rem] font-inter text-[#222222] h-auto my-[10px]  font-[400]">
          A “Force Majeure” event is defined as any act, event, non-happening,
          omission, or accident beyond the reasonable control of the affected
          party, including but not limited to:
        </p>
        <ul className="list-disc px-2 my-[10px]">
          <li className="sm:text-base  leading-[1.4rem] font-inter text-[#000000] h-auto font-[400]">
            Acts of God, such as storms, floods, earthquakes, or other natural
            disasters
          </li>
          <li className="sm:text-base  leading-[1.4rem]  font-inter text-[#000000] h-auto  font-[400]">
            War, civil unrest, military actions, terrorist attacks, or riots
          </li>
          <li className="sm:text-base  leading-[1.4rem]  font-inter text-[#000000] h-auto font-[400]">
            Strikes, lockouts, or other industrial actions
          </li>
          <li className="sm:text-base   leading-[1.4rem]  font-inter text-[#000000] h-auto  font-[400">
            Failure of transportation networks or utilities
          </li>
          <li className="sm:sm:text-base   leading-[1.4rem]  font-inter text-[#000000] h-auto  font-[400]">
            Failure of internet or telecommunications services
          </li>
          <li className="sm:text-base  leading-[1.4rem]  font-inter text-[#000000] h-auto  font-[400]">
            Pandemic, epidemic, or public health emergency{" "}
          </li>
          <li className="sm:text-base  leading-[1.4rem]  font-inter text-[#000000] h-auto  font-[400]">
            Government laws, regulations, or orders
          </li>
          <li className="sm:text-base  leading-[1.4rem]  font-inter text-[#000000] h-auto  font-[400]">
            If a party is affected by a Force Majeure event, they must:
          </li>
        </ul>
        <p className="sm:text-base desktop:text-[17.5px] leading-[1.4rem]  font-inter text-[#222222] h-auto my-[10px] font-[400]">
          Use all reasonable efforts to mitigate the effects of the Force
          Majeure event and resume performance as soon as practicable.
        </p>
        <p className="sm:text-base desktop:text-[17.5px] leading-[1.4rem]  font-inter text-[#222222] h-auto my-[10px]  font-[400] ">
          Not be considered in breach of the Agreement for as long as the Force
          Majeure event continues to prevent or delay performance.
        </p>
        <p className="text-xl font-inter text-[#222222] font-bold h-auto my-[10px]">
          Right to Terminate
        </p>
        <p className="sm:text-base desktop:text-[17.5px] leading-[1.4rem]  font-inter text-[#222222] h-auto my-[10px] font-[400]">
          Enatega has reserved the right to terminate, restrict, or suspend your
          account or use the Platforms if you breach the Terms of Use. Enatega
          may not be obligated to warn you before terminating your use of the
          Platforms.
        </p>
        <p className="text-xl font-inter text-[#222222] font-bold h-auto my-[10px]">
          Governing Law
        </p>
        <p className="sm:text-base desktop:text-[17.5px] leading-[1.4rem]  font-inter text-[#222222] h-auto my-[10px] font-[400] ">
          Both these Terms of Service and any individual agreements we make to
          supply you Services are governed by and constructed under the laws of
          the State of Wyoming and subject to the exclusive jurisdiction of the
          federal and state courts in Cheyenne, Wyoming.
        </p>
      </div>

      {/* End Content */}
      {/* Footer */}
      <footer>
        <div className="sm:mt-13 pb-4 ">
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

export default TermsCondition;
