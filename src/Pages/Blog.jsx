import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import SidebarData from "../Component/Sidebardata";
import { IoSearch } from "react-icons/io5";
import { Articles } from "./Blogs";
import { ToastContainer, toast } from "react-toastify";
import {IoMdMenu,IoMdClose,IoIosArrowDown,IoIosArrowUp,} from "react-icons/io";
import "react-phone-input-2/lib/style.css";
import { TiSocialFacebook, TiSocialLinkedin,TiArrowSortedDown } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";

// Blog
function Blog() {
  // useState
  const [sidebar, setSidebar] = useState(false);
  const [caseStudiesbar, setCaseStudies] = useState(false);
  const [useCasebar, setUseCase] = useState(false);
  const [caseshow, setcaseshow] = useState(false);
  const [boxShow, setBoxShow] = useState(false);
  const [inputState, setInputState] = useState("");
  const [SearchItem, setSearchItem] = useState("");
  const SearchRef = useRef(null);
  const [activeTab, setActiveTab] = useState(1);
  const [openTab, setOpenTab] = useState(true);
  const [Load, setLoad] = useState(false);
  // const SearchRef = useRef(null);
  const resultsRef = useRef(null);

  const Label = [
    {
      id: 1,
      label: "All",
    },
    {
      id: 2,
      label: "Food Delivery Apps",
    },
    {
      id: 3,
      label: "On Demand Apps",
    },
    {
      id: 4,
      label: "Open Source Projects",
    },
    {
      id: 5,
      label: "Ordering Platforms",
    },
    {
      id: 6,
      label: "Grocery Delivery",
    },
  ];

  // One Time scroll you can Refresh the Page
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const width = window.innerWidth;
  let scrollTop;

  if (width >= 1280) {
    scrollTop = 1200;
  } else if (width >= 1024 && width <= 1280) {
    scrollTop = 1970;
  } else if (width >= 640) {
    scrollTop = 2740;
  } else {
    scrollTop = 2300;
  }

  // Debounced search triggered on button click
  function HandleSearch(e) {
    e.preventDefault();

    if (SearchRef.current) clearTimeout(SearchRef.current);

    SearchRef.current = setTimeout(() => {
      if (inputState.trim().length === 0) {
        toast.error("Please enter a search term", { autoClose: 500 });
        setSearchItem(""); // Clear searchItem to show all
        return;
      }

      setSearchItem(inputState.trim());
      toast.success("Search completed!", { autoClose: 500 });
      window.scrollTo({ top: scrollTop, behavior: "smooth" });
      setInputState("");
    }, 500);
  }

  // Filter Articles live as user types (inputState), but final filtered list is based on searchItem
  const filteredArticles = Articles.filter((article) => {
    if (SearchItem.trim() === "") return true; // Show all if empty
    return (article.Title || "")
      .toLowerCase()
      .includes(SearchItem.toLowerCase());
  });

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

      {/* Content */}
      <div className="relative sm:mt-26 iox:mt-[130px] w-full h-[75vh] ">
        <div>
          <img
            src="/Pictures/blogpic.png"
            alt=""
            className="w-full h-[75vh] "
          />
        </div>

        {/* content text And Search Bar */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* Text */}
          <div className="font-inter text-[#ffffff] sm:text-[32px] tablet:text-[39px] desktop:text-[43px] iox:text-[50px] biglap:text-[60px] desktop:w-[512px] desktop:h-auto desktop:mx-auto iox:w-[720px] iox:h-[113px] iox:leading-14 capitalize biglap:w-[1280px] biglap:h-auto mb-5 text-center font-bold">
            <p>Stay Informed and Inspired with Our Content</p>
          </div>

          {/* Form Using Serach Bar */}
          <form
            onSubmit={HandleSearch}
            className="bg-[#ffffff] rounded-full  px-2 py-2 flex items-center justify-center desktop:w-[511px] desktop:mx-auto"
          >
            <div className="flex items-center space-x-2">
              <IoSearch className="font-bold " />
              <input
                type="text"
                name=""
                placeholder="Search blog or article..."
                value={inputState}
                onChange={(e) => {
                  setInputState(e.target.value);
                }}
                className="border-none outline-none h-8 sm:w-[190px] mymob:w-[220px] myiphone:w-[250px] tablet:w-[500px] desktop:w-[380px] p-1 placeholder-gray-500 font-inter"
              />
            </div>
            <div>
              <button
                type="submit"
                className=" text-white cursor-pointer font-inter p-[6px] sm:px-1 mymob:px-5 border border-[#9586f5] rounded-full text-sm font-semibold"
                style={{
                  background:
                    "linear-gradient(to right, #7163dc 0%, #7163dc 100%)",
                }}
              >
                Search
              </button>
            </div>
          </form>
          {/* End Form Search Bar */}
        </div>
      </div>
      {/* End content text & Search Bar */}

      {/* Heading & Text */}
      <div className="bg-[#f5f5f5] sm:pb-6 tablet:pb-12 ">
        <div className="font-inter text-[#ffffff] sm:text-[22px] mymob:text-2xl iox:text-[26px] tablet:text-2xl font-bold sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[964px] iox:w-[1160px] biglap:w-[2000px] mx-auto ">
          <p className="text-[#1A1E1A]">Recent Article</p>
        </div>
        <div className="font-inter text-[#ffffff] sm:text-[16px] desktop:text-[17px] biglap:text-[18px] sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px]  desktop:w-[964px] iox:w-[1160px] biglap:w-[2000px] mx-auto">
          <p className="text-[#222222] font-inter">
            Explore Thousands of Expertly Curated Articles with Our Powerful
            Algorithm
          </p>
        </div>
        {/* Button Each Div with respect to id  */}
        <div className="font-inter text-[13px] text-[#858C93] sm:text-center  text-wrap sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px]  desktop:w-[964px] iox:w-[1160px] biglap:w-[2000px] mx-auto mt-4  ">
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
                    ? `sm:p-[14px] desktop:p-[20px] iox:px-9 biglap:px-28 border-b-2 border-blue-800 cursor-pointer text-[#326EE6] font-bold`
                    : `sm:p-[14px] desktop:p-[20px] iox:px-9 biglap:px-28 border-b border-gray-400 cursor-pointer font-bold`
                }
              >
                {label.label}
              </button>
            );
          })}
        </div>
        {/* *********----------6 Divs Create Each Div its own Button to perform it --------*********  */}
        {/* 1st box  Know the Medicine Delivery App Development Cost and Save Big*/}
        {openTab && activeTab === 1 && (
          <div className="iox:w-full iox:max-w-[1080px] iox:h-[522px] iox:flex iox:justify-between mt-4 bg-[#f5f5f5] px-2 iox:mx-auto biglap:w-full biglap:max-w-[2000px] biglap:h-[930px]">
            <div className="p-2 sm:h-[375px] tablet:h-auto sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[860px] iox:w-[460px] iox:h-[515px] biglap:w-[850px] biglap:h-[920px] bg-white rounded-xl mb-6 sm:mx-auto iox:mx-0">
              <div>
                <img
                  loading="lazy"
                  src="/Pictures/medicinedelievery.png"
                  alt=""
                  className="sm:w-[272px] mymob:w-[327px] myiphone:w-[377px] tablet:w-[720px] desktop:w-[850px] iox:w-[450px] biglap:w-full h-auto rounded-lg"
                />
              </div>
              <div>
                <button className="text-[#14151799] bg-[#D3DAE0] p-1 px-2 my-4 rounded-full text-xs font-bold">
                  August 7,2025
                </button>
                <p className="text-[19px] font-inter text-[#141517] font-semibold sm:w-full sm:max-w-[385px] tablet:w-full tablet:max-w-[728px] sm:ml-1">
                  Know the Medicine Delivery App Development Cost and Save Big
                </p>

                <p className="text-sm font-inter text-[#14151799] my-2 sm:ml-1">
                  by Hudaibia Khalid - 5 min read
                </p>
              </div>
            </div>
            {/* 1st box End*/}

            {/* 2nd box*/}
            <div className="sm:mt-4 iox:mt-0 bg-white rounded-xl p-2 sm:w-[280px] sm:h-[1060px] myiphone:h-[1110px] mymob:w-[335px] myiphone:w-[395px] tablet:w-[728px] tablet:h-[1540px] desktop:h-[620px] desktop:w-[860px] iox:w-[580px] iox:h-[515px] biglap:w-[1100px] biglap:h-[920px] mb-6 sm:mx-auto iox:mx-0">
              {/* 1st box  Top 5 Delivery Apps in Russia*/}
              <div className="sm:h-[340px] myiphone:h-[360px] tablet:h-auto sm:mb-2 iox:mb-0 desktop:flex desktop:justify-between desktop:space-x-9 desktop:items-center desktop:px-6 iox:px-1 biglap:h-[300px]">
                <div>
                  <img
                    loading="lazy"
                    src="/Pictures/Top5food.jpg"
                    alt=""
                    className="sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[441px] iox:w-[258px] biglap:w-[500px] object-cover h-auto rounded-lg mx-auto"
                  />
                </div>
                {/* images */}
                <div className="desktop:w-[530px] iox:w-[300px] biglap:w-[500px] ">
                  <button className="text-[#14151799] bg-[#D3DAE0] p-1 px-2 sm:my-4 iox:my-2 biglap:my-6 rounded-full text-xs font-bold">
                    August 4,2025
                  </button>
                  <p className="text-[19px] font-inter text-[#141517] font-semibold  sm:ml-1 ">
                    Food Delivery Apps in Russia That Changed How Russians Eat
                  </p>

                  <p className="text-sm font-inter text-[#14151799] my-2  sm:ml-1">
                    by Hudaibia Khalid - 5 min read
                  </p>
                </div>
                {/* text content */}
              </div>

              {/* 2nd box Meat Delievery*/}
              <div className="sm:p-2 iox:p-1 sm:h-[340px] myiphone:h-[360px] tablet:h-auto desktop:flex desktop:justify-between desktop:space-x-9 desktop:items-center sm:mb-2 iox:mb-0 desktop:px-6 biglap:h-[300px]">
                <div>
                  <img
                    src="/Pictures/MeatDelievery.jpg"
                    alt=""
                    className="sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[441px] iox:w-[258px] biglap:w-[500px] object-cover h-auto rounded-lg mx-auto"
                  />
                </div>

                <div className="desktop:w-[530px] iox:w-[300px] biglap:w-[500px] ">
                  <button className="text-[#14151799] bg-[#D3DAE0] p-1 px-2 sm:my-4 iox:my-2 biglap:my-6 rounded-full text-xs font-bold">
                    JULY 31,2025
                  </button>
                  <p className="text-[19px] font-inter text-[#141517] font-semibold">
                    What is the Best Online Meat Delivery Service? Find Out
                  </p>
                  <p className="text-sm font-inter text-[#14151799] my-2">
                    by Hudaibia Khalid - 6 min read
                  </p>
                </div>
              </div>

              {/* 3rd box Rappi CLone */}
              <div className="sm:p-2 iox:p-1 sm:h-[340px]  myiphone:h-[360px] tablet:h-auto desktop:flex desktop:justify-between desktop:space-x-9 desktop:items-center sm:mb-2 iox:mb-0 desktop:px-6 biglap:h-[300px]">
                <div>
                  <img
                    loading="lazy"
                    src="/Pictures/RappiCLone.jpg"
                    alt=""
                    className="sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[441px] iox:w-[258px] biglap:w-[500px] object-cover h-auto rounded-lg mx-auto"
                  />
                </div>

                <div className="desktop:w-[530px] iox:w-[300px] biglap:w-[500px] ">
                  <button className="text-[#14151799] bg-[#D3DAE0] p-1 px-2 sm:my-4 iox:my-2 biglap:my-6 rounded-full text-xs font-bold">
                    JULY 20,2025
                  </button>
                  <p className="text-[19px] font-inter text-[#141517] font-semibold">
                    Build a Readymade Rappi Clone App Development Solution
                  </p>

                  <p className="text-sm font-inter text-[#14151799] my-2">
                    by Hudaibia Khalid - 5 min read
                  </p>
                </div>
                {/* 3rd box end */}
              </div>
            </div>
            {/* 2nd box  content with 3 Images end  */}
          </div>
        )}{" "}
        {/* 1st box end */}
        {/* ***************************** */}
        {/* ******************-------2nd Box Food Delivery App--------************** */}
        {openTab && activeTab === 2 && (
          <div className="iox:w-full iox:max-w-[1080px] iox:h-[522px] iox:flex iox:justify-between mt-4 bg-[#f5f5f5] px-2 iox:mx-auto biglap:w-full biglap:max-w-[2000px] biglap:h-[930px]">
            <div className="p-2 sm:h-[375px] tablet:h-auto sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[860px] iox:w-[460px] iox:h-[515px] biglap:w-[850px] biglap:h-[920px] bg-white rounded-xl mb-6 sm:mx-auto iox:mx-0">
              <div>
                <img
                  loading="lazy"
                  src="/Pictures/FoodDelievery.jpg"
                  alt=""
                  className="sm:w-[272px] mymob:w-[327px] myiphone:w-[377px] tablet:w-[720px] desktop:w-[850px] iox:w-[450px] biglap:w-full h-auto rounded-lg"
                />
              </div>
              <div>
                <button className="text-[#14151799] bg-[#D3DAE0] p-1 px-2 my-4 rounded-full text-xs font-bold">
                  August 3,2025
                </button>
                <p className="text-[19px] font-inter text-[#141517] font-semibold sm:w-full sm:max-w-[385px] tablet:w-full tablet:max-w-[728px] sm:ml-1">
                  Food Delivery Apps in Russia that Changed How Russians Eat
                </p>

                <p className="text-sm font-inter text-[#14151799] my-2 sm:ml-1">
                  by Hudaibia Khalid - 7 min read
                </p>
              </div>
            </div>
            {/* 1st box end*/}

            {/* 2nd box  Food Delivery App*/}
            <div className="sm:mt-4 iox:mt-0 bg-white rounded-xl p-2 sm:w-[280px] sm:h-[1060px] myiphone:h-[1110px] mymob:w-[335px] myiphone:w-[395px] tablet:w-[728px] tablet:h-[1540px] desktop:h-[620px] desktop:w-[860px] iox:w-[580px] iox:h-[515px] biglap:w-[1100px] biglap:h-[920px] mb-6 sm:mx-auto iox:mx-0">
              {/* 1st box Rappi CLone */}
              <div className="sm:p-2 iox:p-0 sm:h-[340px]  myiphone:h-[360px] tablet:h-auto desktop:flex desktop:justify-between desktop:space-x-9 desktop:items-center sm:mb-2 iox:mb-0 desktop:px-6 iox:h-[170px]  biglap:h-[300px]">
                <div>
                  <img
                    loading="lazy"
                    src="/Pictures/RappiCLone.jpg"
                    alt=""
                    className="sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[441px] iox:w-[258px] biglap:w-[500px] object-cover h-auto rounded-lg mx-auto"
                  />
                </div>

                <div className="desktop:w-[530px] iox:w-[300px] biglap:w-[500px] ">
                  <button className="text-[#14151799] bg-[#D3DAE0] p-1 px-2 sm:my-4 iox:my-2 biglap:my-6 rounded-full text-xs font-bold">
                    JULY 20,2025
                  </button>
                  <p className="text-[19px] font-inter text-[#141517] font-semibold">
                    Build a Readymade Rappi Clone App Development Solution
                  </p>

                  <p className="text-sm font-inter text-[#14151799] my-2">
                    by Hudaibia Khalid - 5 min read
                  </p>
                </div>
              </div>
              {/* 1st box end */}

              {/*2nd box "Industry Trends Food" */}
              <div className="sm:h-[340px] myiphone:h-[360px] tablet:h-auto sm:mb-2 iox:mb-0 desktop:flex desktop:justify-between desktop:space-x-9 desktop:items-center desktop:px-6 iox:px-1 iox:h-[170px]  biglap:h-[300px]">
                <div>
                  <img
                    loading="lazy"
                    src="/Pictures/FoodIndustry.jpg"
                    alt=""
                    className="sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[441px] iox:w-[258px] biglap:w-[500px] object-cover h-auto rounded-lg mx-auto"
                  />
                </div>
                {/* images */}
                <div className="desktop:w-[530px] iox:w-[300px] biglap:w-[500px] ">
                  <button className="text-[#14151799] bg-[#D3DAE0] p-1 px-2 sm:my-4 iox:my-2 biglap:my-6 rounded-full text-xs font-bold">
                    August 4,2025
                  </button>
                  <p className="text-[19px] font-inter text-[#141517] font-semibold  sm:ml-1 ">
                    Food Delivery Industry Trends: Improve Your Sales in 2025
                  </p>

                  <p className="text-sm font-inter text-[#14151799] my-2  sm:ml-1">
                    by Hudaibia Khalid - 5 min read
                  </p>
                </div>
                {/* text content */}
              </div>
              {/* End 2nd Box */}

              {/* 3rd box SaudiArabiafood*/}
              <div className="sm:p-2 iox:p-0 sm:h-[340px] myiphone:h-[360px] tablet:h-auto iox:h-[160px] desktop:flex desktop:justify-between desktop:space-x-9 desktop:items-center sm:mb-2 iox:mb-0 desktop:px-6 biglap:h-[300px]">
                <div>
                  <img
                    src="/Pictures/SaudiArabiafood.jpg"
                    alt=""
                    className="sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[441px] iox:w-[258px] biglap:w-[500px] object-cover h-auto rounded-lg mx-auto"
                  />
                </div>

                <div className="desktop:w-[530px] iox:w-[300px] biglap:w-[500px] ">
                  <button className="text-[#14151799] bg-[#D3DAE0] p-1 px-2 sm:my-4 iox:my-2 biglap:my-6 rounded-full text-xs font-bold">
                    JULY 31,2025
                  </button>
                  <p className="text-[19px] font-inter text-[#141517] font-semibold">
                    How to Start a Food Business In Saudi Arabia? Hidden Secrets
                  </p>
                  <p className="text-sm font-inter text-[#14151799] my-2">
                    by Hudaibia Khalid - 6 min read
                  </p>
                </div>
                {/* text end */}
              </div>
            </div>
            {/* 3rd box end SaudiArabiafood */}
          </div>
        )}{" "}
        {/* End 2nd Box Food Delivery App  */}
        {/* ************************* */}
        {/* ************--------------3rd Box On Demand App----------------********* */}
        {openTab && activeTab === 3 && (
          <div className="iox:w-full iox:max-w-[1080px] iox:h-[522px] iox:flex iox:justify-between mt-4 bg-[#f5f5f5] px-2 iox:mx-auto biglap:w-full biglap:max-w-[2000px] biglap:h-[930px]">
            <div className="p-2 sm:h-[375px] tablet:h-auto sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[860px] iox:w-[460px] iox:h-[515px] biglap:w-[850px] biglap:h-[920px] bg-white rounded-xl mb-6 sm:mx-auto iox:mx-0">
              <div>
                <img
                  loading="lazy"
                  src="Pictures/ChallengesFood.jpg"
                  alt=""
                  className="sm:w-[272px] mymob:w-[327px] myiphone:w-[377px] tablet:w-[720px] desktop:w-[850px] iox:w-[450px] biglap:w-full h-auto rounded-lg"
                />
              </div>
              <div>
                <button className="text-[#14151799] bg-[#D3DAE0] p-1 px-2 my-4 rounded-full text-xs font-bold">
                  August 3,2025
                </button>
                <p className="text-[19px] font-inter text-[#141517] font-semibold sm:w-full sm:max-w-[385px] tablet:w-full tablet:max-w-[728px] sm:ml-1">
                  What Are The Challenges Faced By The Food And Beverage
                  Industry? Know Now{" "}
                </p>

                <p className="text-sm font-inter text-[#14151799] my-2 sm:ml-1">
                  by Hudaibia Khalid - 7 min read
                </p>
              </div>
            </div>
            {/* 1st box */}

            {/* 2nd box content*/}
            <div className="sm:mt-4 iox:mt-0 bg-white rounded-xl p-2 sm:w-[280px] sm:h-[1060px] myiphone:h-[1110px] mymob:w-[335px] myiphone:w-[395px] tablet:w-[728px] tablet:h-[1540px] desktop:h-[620px] desktop:w-[860px] iox:w-[580px] iox:h-[515px] biglap:w-[1100px] biglap:h-[920px] mb-6 sm:mx-auto iox:mx-0">
              {/* 1st Top on Demand Services App*/}
              <div className="sm:p-2 iox:p-2 sm:h-[340px]  myiphone:h-[360px] tablet:h-auto desktop:flex desktop:justify-between desktop:space-x-9 desktop:items-center sm:mb-2 iox:mb-0 desktop:px-6 iox:h-[170px]  biglap:h-[300px]">
                <div>
                  <img
                    loading="lazy"
                    src="/Pictures/PopularfoodStore.jpg"
                    alt=""
                    className="sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[441px] iox:w-[258px] biglap:w-[500px] object-cover h-auto rounded-lg mx-auto"
                  />
                </div>

                <div className="desktop:w-[530px] iox:w-[300px] biglap:w-[500px] ">
                  <button className="text-[#14151799] bg-[#D3DAE0] p-1 px-2 sm:my-4 iox:my-2 biglap:my-6 rounded-full text-xs font-bold">
                    JULY 28,2025
                  </button>
                  <p className="text-[19px] font-inter text-[#141517] font-semibold">
                    Top On Demand Services App with Benefits and Features
                  </p>

                  <p className="text-sm font-inter text-[#14151799] my-2">
                    by Hudaibia Khalid - 5 min read
                  </p>
                </div>
              </div>
              {/* 1st box end */}

              {/* 2nd box On Demand Food*/}
              <div className="sm:p-2 iox:p-2 sm:h-[340px] myiphone:h-[360px] tablet:h-auto desktop:flex desktop:justify-between desktop:space-x-9 desktop:items-center sm:mb-2 iox:mb-0 desktop:px-6 biglap:h-[300px]">
                <div>
                  <img
                    src="/Pictures/OnDemandFood.jpg"
                    alt=""
                    className="sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[441px] iox:w-[258px] biglap:w-[500px] object-cover h-auto rounded-lg mx-auto"
                  />
                </div>

                <div className="desktop:w-[530px] iox:w-[300px] biglap:w-[500px] ">
                  <button className="text-[#14151799] bg-[#D3DAE0] p-1 px-2 sm:my-4 iox:my-2 biglap:my-6 rounded-full text-xs font-bold">
                    JULY 4,2025
                  </button>
                  <p className="text-[19px] font-inter text-[#141517] font-semibold">
                    Top On Demand Food Delivery Services to Use in 2025 -2026
                  </p>
                  <p className="text-sm font-inter text-[#14151799] my-2">
                    by Hudaibia Khalid - 6 min read
                  </p>
                </div>
              </div>

              {/* 3rd Top 15 DemandFood*/}
              <div className="sm:p-2 iox:p-2 sm:h-[340px]  myiphone:h-[360px] tablet:h-auto desktop:flex desktop:justify-between desktop:space-x-9 desktop:items-center sm:mb-2 iox:mb-0 desktop:px-6 biglap:h-[300px]">
                <div>
                  <img
                    loading="lazy"
                    src="/Pictures/Top15DemandFood.jpg"
                    alt=""
                    className="sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[441px] iox:w-[258px] biglap:w-[500px] object-cover h-auto rounded-lg mx-auto"
                  />
                </div>

                <div className="desktop:w-[530px] iox:w-[300px] biglap:w-[500px] ">
                  <button className="text-[#14151799] bg-[#D3DAE0] p-1 px-2 sm:my-4 iox:my-2 biglap:my-6 rounded-full text-xs font-bold">
                    JULY 14,2025
                  </button>
                  <p className="text-[19px] font-inter text-[#141517] font-semibold">
                    On Demand Apps Ideas to Use in 2025 that Upgrade Your Life
                  </p>

                  <p className="text-sm font-inter text-[#14151799] my-2">
                    by Hudaibia Khalid - 8 min read
                  </p>
                </div>
              </div>
              {/* 3rd box end */}
            </div>
            {/* 2nd box content & 3 Images End  */}
          </div>
        )}{" "}
        {/* End 3rd Box On Demand App  */}
        {/* ************************* */}
        {/* ************-----4th Box Open Source Project--------************* */}
        {openTab && activeTab === 4 && (
          <div className="iox:w-full iox:max-w-[1080px] iox:h-[500px]  mt-4 bg-[#f5f5f5] px-2 iox:mx-auto biglap:w-full biglap:max-w-[2000px] biglap:h-[600px]">
            <div className="p-2 sm:h-[375px] tablet:h-auto sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[860px] iox:w-[560px] iox:h-[460px] biglap:w-[850px] biglap:h-[600px] bg-white rounded-xl mb-6 sm:mx-auto iox:mx-0">
              <div>
                <img
                  loading="lazy"
                  src="/Pictures/OpenSourceProject.jpg"
                  alt=""
                  className="sm:w-[272px] mymob:w-[327px] myiphone:w-[377px] tablet:w-[720px] desktop:w-[850px] iox:w-[550px] biglap:w-full h-auto rounded-lg"
                />
              </div>
              <div>
                <button className="text-[#14151799] bg-[#D3DAE0] p-1 px-2 my-4 rounded-full text-xs font-bold">
                  JULY 16,2025
                </button>
                <p className="text-[19px] font-inter text-[#141517] font-semibold sm:w-full sm:max-w-[385px] tablet:w-full tablet:max-w-[728px] sm:ml-1">
                  Which One to Choose Clone Apps vs. Custom Apps? Know Now
                </p>

                <p className="text-sm font-inter text-[#14151799] my-2 sm:ml-1">
                  by Hudaibia Khalid - 6 min read
                </p>
              </div>
            </div>
          </div>
        )}{" "}
        {/* End 4th Box Open Source Project  */}
        {/* ************************* */}
        {/* ************------------5th Box Ordering Platforms------------*********** */}
        {openTab && activeTab === 5 && (
          <div className="iox:w-full iox:max-w-[1080px] iox:h-[522px] iox:flex iox:justify-between mt-4 bg-[#f5f5f5] px-2 iox:mx-auto biglap:w-full biglap:max-w-[2000px] biglap:h-[930px]">
            <div className="p-2 sm:h-[375px] tablet:h-auto sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[860px] iox:w-[460px] iox:h-[515px] biglap:w-[850px] biglap:h-[920px] bg-white rounded-xl mb-6 sm:mx-auto iox:mx-0">
              <div>
                <img
                  loading="lazy"
                  src="/Pictures/Orderingplatforms.jpg"
                  alt=""
                  className="sm:w-[272px] mymob:w-[327px] myiphone:w-[377px] tablet:w-[720px] desktop:w-[850px] iox:w-[450px] biglap:w-full h-auto rounded-lg"
                />
              </div>
              <div>
                <button className="text-[#14151799] bg-[#D3DAE0] p-1 px-2 my-4 rounded-full text-xs font-bold">
                  JULY 24,2025
                </button>
                <p className="text-[19px] font-inter text-[#141517] font-semibold sm:w-full sm:max-w-[385px] tablet:w-full tablet:max-w-[728px] sm:ml-1">
                  How Much Does it Cost to Create a Restaurant App? Find Now
                </p>

                <p className="text-sm font-inter text-[#14151799] my-2 sm:ml-1">
                  by Hudaibia Khalid - 5 min read
                </p>
              </div>
            </div>
            {/* 1st box end */}

            {/* 2nd box content*/}
            <div className="sm:mt-4 iox:mt-0 bg-white rounded-xl p-2 sm:w-[280px] sm:h-[1060px] myiphone:h-[1110px] mymob:w-[335px] myiphone:w-[395px] tablet:w-[728px] tablet:h-[1540px] desktop:h-[620px] desktop:w-[860px] iox:w-[580px] iox:h-[515px] biglap:w-[1100px] biglap:h-[920px] mb-6 sm:mx-auto iox:mx-0">
              {/* 1st box "Blinkit Clone App Development" */}
              <div className="sm:p-2 iox:p-0 sm:h-[340px]  myiphone:h-[360px] tablet:h-auto desktop:flex desktop:justify-between desktop:space-x-9 desktop:items-center sm:mb-2 iox:mb-0 desktop:px-6 iox:h-[170px]  biglap:h-[300px]">
                <div>
                  <img
                    loading="lazy"
                    src="/Pictures/BlinkitOrder.jpg"
                    alt=""
                    className="sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[441px] iox:w-[258px] biglap:w-[500px] object-cover h-auto rounded-lg mx-auto"
                  />
                </div>

                <div className="desktop:w-[530px] iox:w-[300px] biglap:w-[500px] ">
                  <button className="text-[#14151799] bg-[#D3DAE0] p-1 px-2 sm:my-4 iox:my-2 biglap:my-6 rounded-full text-xs font-bold">
                    JULY 15,2025
                  </button>
                  <p className="text-[19px] font-inter text-[#141517] font-semibold">
                    Blinkit Clone App Development to Deliver Groceries and More
                  </p>

                  <p className="text-sm font-inter text-[#14151799] my-2">
                    by Hudaibia Khalid - 6 min read
                  </p>
                </div>
              </div>
              {/* 1st box end */}

              {/* 2nd box "New Year Top Deals" */}
              <div className="sm:p-2 iox:p-0 sm:h-[340px] myiphone:h-[360px] tablet:h-auto desktop:flex desktop:justify-between desktop:space-x-9 desktop:items-center sm:mb-2 iox:mb-0 desktop:px-6 biglap:h-[300px]">
                <div>
                  <img
                    src="/Pictures/RestaurantDealsYear.jpg"
                    alt=""
                    className="sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[441px] iox:w-[258px] biglap:w-[500px] object-cover h-auto rounded-lg mx-auto"
                  />
                </div>

                <div className="desktop:w-[530px] iox:w-[300px] biglap:w-[500px] ">
                  <button className="text-[#14151799] bg-[#D3DAE0] p-1 px-2 sm:my-4 iox:my-2 biglap:my-6 rounded-full text-xs font-bold ">
                    JULY 4,2025
                  </button>
                  <p className="text-[19px] font-inter text-[#141517] font-semibold">
                    7 Exclusive New Year Restaurant Deals You Need to Try
                  </p>
                  <p className="text-sm font-inter text-[#14151799] my-2">
                    by Hudaibia Khalid - 6 min read
                  </p>
                </div>
              </div>

              {/* 3rd Black Friday */}
              <div className="sm:p-2 iox:p-0 sm:h-[340px]  myiphone:h-[360px] tablet:h-auto desktop:flex desktop:justify-between desktop:space-x-9 desktop:items-center sm:mb-2 iox:mb-0 desktop:px-6 biglap:h-[300px]">
                <div>
                  <img
                    loading="lazy"
                    src="/Pictures/BlackFriday.jpg"
                    alt=""
                    className="sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[441px] iox:w-[258px] biglap:w-[500px] object-cover h-auto rounded-lg mx-auto"
                  />
                </div>

                <div className="desktop:w-[530px] iox:w-[300px] biglap:w-[500px] ">
                  <button className="text-[#14151799] bg-[#D3DAE0] p-1 px-2 sm:my-4 iox:my-2 biglap:my-6 rounded-full text-xs font-bold ">
                    NOVEMBER 18,2024
                  </button>
                  <p className="text-[19px] font-inter text-[#141517] font-semibold">
                    Black Friday Restaurant Deals Help to Raise Business Revenue
                  </p>

                  <p className="text-sm font-inter text-[#14151799] my-2">
                    by Hudaibia Khalid - 8 min read
                  </p>
                </div>
              </div>
              {/* 3rd box end */}
            </div>
            {/* 2nd box content & 3 Images End  */}
          </div>
        )}{" "}
        {/* End 6th Box  "Ordering Platforms" */}
        {/* ************************* */}
        {/* ***********------------ 6th Box "Grocery Delivery" ---------************* */}
        {openTab && activeTab === 6 && (
          <div className="iox:w-full iox:max-w-[1080px] iox:h-[522px] iox:flex iox:justify-between mt-4 bg-[#f5f5f5] px-2 iox:mx-auto biglap:w-full biglap:max-w-[2000px] biglap:h-[930px]">
            <div className="p-2 sm:h-[375px] tablet:h-auto sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[860px] iox:w-[460px] iox:h-[515px] biglap:w-[850px] biglap:h-[920px] bg-white rounded-xl mb-6 sm:mx-auto iox:mx-0">
              <div>
                <img
                  loading="lazy"
                  src="/Pictures/Grocerydelivery1.jpg"
                  alt=""
                  className="sm:w-[272px] mymob:w-[327px] myiphone:w-[377px] tablet:w-[720px] desktop:w-[850px] iox:w-[450px] biglap:w-full h-auto rounded-lg"
                />
              </div>
              <div>
                <button className="text-[#14151799] bg-[#D3DAE0] p-1 px-2 my-4 rounded-full text-xs font-bold">
                  JULY 17,2025
                </button>
                <p className="text-[19px] font-inter text-[#141517] font-semibold sm:w-full sm:max-w-[385px] tablet:w-full tablet:max-w-[728px] sm:ml-1">
                  Shipt Clone – Grocery Delivery App Development Solution
                </p>

                <p className="text-sm font-inter text-[#14151799] my-2 sm:ml-1">
                  by Hudaibia Khalid - 5 min read
                </p>
              </div>
            </div>
            {/* 1st box*/}

            {/* 2nd box content*/}
            <div className="sm:mt-4 iox:mt-0 bg-white rounded-xl p-2 sm:w-[280px] sm:h-[1060px] myiphone:h-[1110px] mymob:w-[335px] myiphone:w-[395px] tablet:w-[728px] tablet:h-[1540px] desktop:h-[620px] desktop:w-[860px] iox:w-[580px] iox:h-[515px] biglap:w-[1100px] biglap:h-[920px] mb-6 sm:mx-auto iox:mx-0">
              {/* 1st box Grocery App Work */}
              <div className="sm:p-2 iox:p-0 sm:h-[340px]  myiphone:h-[360px] tablet:h-auto desktop:flex desktop:justify-between desktop:space-x-9 desktop:items-center sm:mb-2 iox:mb-0 desktop:px-6 iox:h-[170px]  biglap:h-[300px]">
                <div>
                  <img
                    loading="lazy"
                    src="/Pictures/groceryAppWork.jpg"
                    alt=""
                    className="sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[441px] iox:w-[258px] biglap:w-[500px] object-cover h-auto rounded-lg mx-auto"
                  />
                </div>

                <div className="desktop:w-[530px] iox:w-[300px] biglap:w-[500px] ">
                  <button className="text-[#14151799] bg-[#D3DAE0] p-1 px-2 sm:my-4 iox:my-2 biglap:my-6 rounded-full text-xs font-bold">
                    JUNE 12,2025
                  </button>
                  <p className="text-[19px] font-inter text-[#141517] font-semibold">
                    How Do Grocery Delivery Apps Work? Secrets You Didn’t Know
                  </p>

                  <p className="text-sm font-inter text-[#14151799] my-2">
                    by Hudaibia Khalid - 7 min read
                  </p>
                </div>
              </div>
              {/* 1st box end */}

              {/* 2nd box Grocery Austrialia */}
              <div className="sm:p-2 iox:p-0 sm:h-[340px] myiphone:h-[360px] tablet:h-auto desktop:flex desktop:justify-between desktop:space-x-9 desktop:items-center sm:mb-2 iox:mb-0 desktop:px-6 biglap:h-[300px]">
                <div>
                  <img
                    src="/Pictures/groceryAustrialia.jpg"
                    alt=""
                    className="sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[441px] iox:w-[258px] biglap:w-[500px] object-cover h-auto rounded-lg mx-auto"
                  />
                </div>

                <div className="desktop:w-[530px] iox:w-[300px] biglap:w-[500px] ">
                  <button className="text-[#14151799] bg-[#D3DAE0] p-1 px-2 sm:my-4 iox:my-2 biglap:my-6 rounded-full text-xs font-bold ">
                    MAY 27,2025
                  </button>
                  <p className="text-[19px] font-inter text-[#141517] font-semibold">
                    Grocery Delivery App in Australia – Which One Delivers Fast?
                  </p>
                  <p className="text-sm font-inter text-[#14151799] my-2">
                    by Hudaibia Khalid - 6 min read
                  </p>
                </div>
              </div>

              {/* 3rd groceryZepto*/}
              <div className="sm:p-2 iox:p-0 sm:h-[340px]  myiphone:h-[360px] tablet:h-auto desktop:flex desktop:justify-between desktop:space-x-9 desktop:items-center sm:mb-2 iox:mb-0 desktop:px-6 biglap:h-[300px]">
                <div>
                  <img
                    loading="lazy"
                    src="/Pictures/groceryZepto.jpg"
                    alt=""
                    className="sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[441px] iox:w-[258px] biglap:w-[500px] object-cover h-auto rounded-lg mx-auto"
                  />
                </div>

                <div className="desktop:w-[530px] iox:w-[300px] biglap:w-[500px] ">
                  <button className="text-[#14151799] bg-[#D3DAE0] p-1 px-2 sm:my-4 iox:my-2 biglap:my-6 rounded-full text-xs font-bold ">
                    March 26,2024
                  </button>
                  <p className="text-[19px] font-inter text-[#141517] font-semibold">
                    Deliver Groceries in 10 Minutes with Zepto Clone App
                  </p>

                  <p className="text-sm font-inter text-[#14151799] my-2">
                    by Hudaibia Khalid - 8 min read
                  </p>
                </div>
              </div>
              {/* 3rd box end */}
            </div>
            {/* 2nd box content & 3 Images End  */}
          </div>
        )}{" "}
        {/* End 6th Grocery Delivery  */}
      </div>
      {/* End article section with 6 box divs */}

      {/* Blogs List */}
      <div className="bg-[white] py-6 ">
        <div className="font-inter text-[#ffffff] sm:text-[22px] mymob:text-2xl iox:text-[26px] tablet:text-2xl font-bold sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[964px] iox:w-[1160px] biglap:w-[2000px] mx-auto mt-">
          <p className="text-[#1A1E1A]">Recommended Article</p>
        </div>
        <div className="font-inter text-[#ffffff] sm:text-[16px] desktop:text-[17px] biglap:text-[18px] sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px]  desktop:w-[964px] iox:w-[1160px] biglap:w-[2000px] mx-auto">
          <p className="text-[#222222] font-inter">
            Explore Thousands of Expertly Curated Articles with Our Powerful
            Algorithm
          </p>
        </div>

        <div className="tablet:grid tablet:grid-cols-2 desktop:grid-cols-3 biglap:grid-cols-5 tablet:w-[728px]  desktop:w-[964px] iox:w-[1160px] biglap:w-[2000px] mx-auto ">
          {filteredArticles.length > 0 ? (
            <>
              {filteredArticles.map((item) => {
                return (
                  <>
                    {item.id < 10 && (
                      <div
                        className="sm:w-[300px] sm:h-full sm:max-h-[420px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[340px] tablet:h-full tablet:max-h-[400px] desktop:h-full desktop:max-h-[420px] desktop:w-[300px] iox:w-[358px] iox:h-full iox:max-h-[400px] biglap:w-[380px]  biglap:h-full biglap:max-h-[420px] border border-[#e4e4e4] rounded-2xl my-8 px-2 py-2  mx-auto"
                        key={item.id}
                      >
                        <img
                          src={item.img}
                          alt=""
                          className="sm:h-[230px] mymob:w-[100%] rounded-lg "
                        />
                        <p className="text-[#14151799] mt-4 bg-[#D3DAE0] p-1 rounded-full text-xs  sm:w-[40%] tablet:w-[33%] desktop:w-[40%] iox:w-full py-[6px] iox:max-w-[33%] iox:mx-1 text-center font-bold ">
                          {item.Date}
                        </p>
                        <Link
                          to="#"
                          className="text-[19px] text-[#141517] font-inter  font-semibold "
                        >
                          <p className="px-1 my-2 iox:mx-1  leading-6.5">
                            {item.Title}
                          </p>
                        </Link>
                        <p className="text-[#14151799] text-[13px] font-semibold px-1 my-2 iox:my-4 iox:mx-1 ">
                          {item.Publisher} - {item.Time}
                        </p>
                      </div>
                    )}
                    {Load && item.id > 9 && (
                      <div
                        className="sm:w-[300px] sm:h-full sm:max-h-[420px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[340px] tablet:h-full tablet:max-h-[400px] desktop:h-full desktop:max-h-[420px] desktop:w-[300px] iox:w-[358px] iox:h-full iox:max-h-[400px] biglap:w-[380px]  biglap:h-full biglap:max-h-[420px] border border-[#e4e4e4] rounded-2xl my-8 px-2 py-2  mx-auto"
                        key={item.id}
                      >
                        <img
                          src={item.img}
                          alt=""
                          className="sm:h-[230px] mymob:w-[100%] rounded-lg "
                        />
                        <p className="text-[#14151799] mt-4 bg-[#D3DAE0] p-1 rounded-full text-xs  sm:w-[40%] tablet:w-[33%] desktop:w-[40%] iox:w-full py-[6px] iox:max-w-[33%] iox:mx-1 text-center font-bold ">
                          {item.Date}
                        </p>
                        <Link
                          to="#"
                          className="text-[19px] text-[#141517] font-inter  font-semibold "
                        >
                          <p className="px-1 my-2 iox:mx-1  leading-6.5">
                            {item.Title}
                          </p>
                        </Link>
                        <p className="text-[#14151799] text-[13px] font-semibold px-1 my-2 iox:my-4 iox:mx-1 ">
                          {item.Publisher} - {item.Time}
                        </p>
                      </div>
                    )}{" "}
                  </>
                );
              })}{" "}
            </>
          ) : (
            <>
              {" "}
              <p className="font-inter my-14 sm:text-2xl tablet:text-3xl capitalize font-semibold  sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px]  desktop:w-[964px] iox:w-[1160px] biglap:w-[2000px] mx-auto text-center ">
                No Items Found
              </p>{" "}
            </>
          )}
        </div>

        <div className="font-inter my-8 cursor-pointer text-[#ffffff] sm:text-base sm:w-[280px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[964px] iox:w-[1160px] biglap:w-[2000px] mx-auto text-center ">
          <button
            onClick={() => {
              setTimeout(() => {
                setLoad(!Load);
              }, 2000);
              toast.info("Please wait, loading...", { autoClose: 1000 });
            }}
            className="text-[#7C6CE4] border border-[#7C6CE4] inline rounded-full px-4 py-2 cursor-pointer"
          >
            {Load ? " Show Less" : "Load More"}
          </button>
        </div>
      </div>
      {/* End Blog List */}

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
      <ToastContainer />
    </>
  );
}

export default Blog;
