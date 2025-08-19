import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import SidebarData from "./Sidebardata"; // Import SidebarData JSX file
import { FaqQuestion } from "./FaqQuestion"; //  Import FaqQuestion JSX file
import VideoSlider from "./VideoSlider"; // Import VideoSlider JSX file
import Products from "../LiveDemoComponent/Products"; // Import Products JSX file
import LiveDemoModel from "../UIModel/LiveDemoModel"; // Import LiveDemoModel JSX file
import ProductProvider from "../LiveDemoComponent/ProductProvider"; //Import ProductProvider Jsx File
import { supabase } from "../Database/Supabase"; // Import Supabase Database
import PhoneInput from "react-phone-input-2"; // Import PhoneNumber Library
import "react-phone-input-2/lib/style.css"; // Import PhoneNumber Library
import { motion } from "framer-motion"; // Import Framer Motion
import { TbMessageFilled } from "react-icons/tb";
import { fadeIn } from "../variants"; // Import FadeIn from Variant JSX File
import { GrFormCheckmark } from "react-icons/gr"; // Import Icon CheckMark
import { FaArrowRight, FaInstagram } from "react-icons/fa"; // Import Icon
import { FaGithub, FaCheck, FaPlus } from "react-icons/fa6"; //Import Icon
import {
  TbDeviceAnalytics,
  TbDeviceImacCode,
  TbUserQuestion,
  TbRefresh,
} from "react-icons/tb"; //Import Icon
import { AiOutlineDollar } from "react-icons/ai"; //Import Icon
import { FiMinus, FiMessageCircle } from "react-icons/fi"; //Import Icon
import { IoRefresh } from "react-icons/io5"; //Import Icon
import { BsArrowRight, BsArrowLeft } from "react-icons/bs"; //Import Icon
import {
  IoMdMenu,
  IoMdClose,
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosSend,
} from "react-icons/io"; //Import Icon
import {
  TiArrowSortedDown,
  TiSocialFacebook,
  TiSocialLinkedin,
} from "react-icons/ti"; //Import Icon

// Navbar
function Navbar() {
  // useState
  const [sidebar, setSidebar] = useState(false);
  const [caseStudiesbar, setCaseStudies] = useState(false);
  const [useCasebar, setUseCase] = useState(false);
  const [caseshow, setcaseshow] = useState(false);
  const [boxShow, setBoxShow] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showVideo2, setShowVideo2] = useState(false);
  const [openModel, setopenModel] = useState(false);
  const [userData, setUserData] = useState([]); //UserData put Supabase Database Use this State
  const [openIndex, setOpenIndex] = useState(null); // Index Uniques State
  const [formHalf1, setFormHalf1] = useState(true);
  const [formHalf2, setFormHalf2] = useState(false);
  const sectionRefs = useRef([]);
  const location = useLocation(); // Use to Track Current Path Use For Pricing Section
  const [formData, setFormData] = useState({
    UserName: "",
    UserEmail: "",
    CellNo: "",
    Stagedevelop: "",
    Budget: "",
    Region: "",
    Industry: "",
    DecisonMaking: "",
    Aboutus: "",
  });

  // Scrolling
  const scrollToSection = (index) => {
    const offset = 150;
    const element = sectionRefs.current[index];
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Submit Data
  const handleSubmit = async (e) => {
    e.preventDefault();
    await userSubmit(); // wait until data is inserted before reset
    setFormData({
      UserName: "",
      UserEmail: "",
      CellNo: "",
      Stagedevelop: "",
      Budget: "",
      Region: "",
      Industry: "",
      DecisonMaking: "",
      Aboutus: "",
    });
  };

  // Phone number HandleChange
  const handleChangePhone = (value) => {
    setFormData({ ...formData, CellNo: value });
  };

  const handleChange = (e) => {
    setFormData(e.target.value);
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  // Video Play 1
  const handlePlay1 = () => {
    setShowVideo(true);
  };

  // Video Play2
  const handlePlay2 = () => {
    setShowVideo2(true);
  };

  //  UseEffect() Use When you Open Model That can't background Scroll y Axis
  useEffect(() => {
    if (openModel) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "scroll";
    }
  }, [openModel]);

  // Fetch Data One Time Only
  useEffect(() => {
    fetchData();
  }, []);

  // fetchData
  const fetchData = async () => {
    const { data } = await supabase
      .from("Users")
      .select("*")
      .order("id", { ascending: true });
    setUserData(data);
  };

  // User Submit Data
  async function userSubmit() {
    const { data, error } = await supabase.from("Users").insert([formData]);

    if (error) {
      console.log("Insert Error:", error);
    } else {
      console.log("Inserted Data:", data);
      fetchData();
    }
  }

  // useEffect Use When you Can open The Website it is Open top
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  // requestAnimationFrame  is a browser Api for used scrolling smoothly
  // and no any fixed timing to set Like SetTimeout

  useEffect(() => {
    if (location.hash === "#pricing") {
      requestAnimationFrame(() => {
        scrollToSection(0);
      });
    }
  }, [location]);

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
                  onClick={() => {
                    scrollToSection(0);
                  }}
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
                  to="/yalladelievery/"
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
                  to="/stylizenow/"
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
                  to="/easyEats/"
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
                  to="/snapdelievery/"
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
                  to="/borkuDelievery/"
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

      {/* Watsapp Link Add */}
      <a
        href="https://wa.me/923048438299"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-[9999]"
      >
        <TbMessageFilled className="w-14 h-14" />
      </a>

      {/* UsecaseStudies End Box */}

      {/* ***************--------------------------------------***************** */}

      {/* 1st Section  "The Leading Open Source Food Delivery Management Solution for" */}
      <div className=" z-10 desktop:flex desktop:justify-between desktop:mt-40 desktop:mx-2 xll:mx-4 biglap:mx-20">
        <div className="mt-[130px] z-10 sm:w-[318px] mymob:w-[378px] sm:px-6 sm:h-[630px] mymob:h-[590px] myiphone:w-[423px] myiphone:h-[530px] tablet:w-[768px] tablet:h-[450px] desktop:w-[465px] desktop:h-[620px] desktop:mt-0 xll:w-[590px] xll:h-[630px] biglap:w-[1200px] xll:ml-10">
          <p className="font-inter text-[#1A1D1E] font-bold sm:text-3xl tablet:text-4xl iox:text-[40px]  biglap:text-6xl">
            The Leading Open Source Food Delivery Management Solution for
          </p>
          <div className="text-changer sm:h-10 sm:w-[250px] desktop:h-12 desktop:w-[280px]   ">
            {/* Perform Animation */}
            <div className="roles-container">
              <span className="role font-inter font-bold biglap:text-3xl">
                Restaurants
              </span>
              <span className="role font-inter font-bold biglap:text-3xl">
                Grocery Stores
              </span>
              <span className="role font-inter font-bold biglap:text-3xl">
                Cafes
              </span>
              <span className="role font-inter font-bold biglap:text-3xl">
                Food Chains
              </span>
              <span className="role font-inter font-bold biglap:text-3xl">
                Delivery Bussinesses
              </span>
            </div>
          </div>
          <p className="text-[18px] text-[#667085] mt-2 biglap:text-3xl">
            Get full control over your food delivery platform with Enatega’s
            open source solution. Launch in as little as 5 days, customize it to
            your business’s needs, and enjoy lifetime updates — all with
            complete code ownership.
          </p>
          <div className=" sm:w-72 mymob:w-86 myiphone:w-96 h-14 mt-4 flex sm:space-x-4 mymob:space-x-6 myiphone:space-x-8">
            <div className="relative w-34 h-8 flex items-center mt-1 ">
              <img
                loading="lazy"
                src="/Pictures/Profileimg1.png"
                alt=""
                className="absolute top-0 left-0 w-7"
              />
              <img
                loading="lazy"
                src="/Pictures/Profileimg2.png"
                alt=""
                className="absolute top-0 left-[25px] w-7"
              />
              <img
                loading="lazy"
                src="/Pictures/Profileimg3.png"
                alt=""
                className="absolute top-0 left-[50px] w-7"
              />
              <img
                loading="lazy"
                src="/Pictures/Profileimg4.png"
                alt=""
                className="absolute top-0 left-[75px] w-7"
              />
              <img
                loading="lazy"
                src="/Pictures/Profileimg5.png"
                alt=""
                className="absolute top-0 left-[100px] w-7"
              />
            </div>
            <div className="relative leading-6">
              <div className="flex space-x-1">
                <img
                  loading="lazy"
                  src="/Pictures/FullStar.png"
                  alt=""
                  className="w-5 h-5"
                />
                <img
                  loading="lazy"
                  src="/Pictures/FullStar.png"
                  alt=""
                  className="w-5 h-5"
                />
                <img
                  loading="lazy"
                  src="/Pictures/FullStar.png"
                  alt=""
                  className="w-5 h-5"
                />
                <img
                  loading="lazy"
                  src="/Pictures/FullStar.png"
                  alt=""
                  className="w-5 h-5"
                />
                <img
                  loading="lazy"
                  src="/Pictures/Halfstar.png"
                  alt=""
                  className="w-5 h-5"
                />
              </div>
              <p className="sm:text-[12px] mymob:text-base myiphone:text-[18px] font-lato">
                4.7/5 out of 150+ users
              </p>
            </div>
          </div>
          <div className="sm:mt-4 mx  sm:w-[280px]  mymob:w-[335px] myiphone:w-[384px] tablet:w-[200px] sm:h-10 mymob:h-14  ">
            <span
              className=" flex items-center shadow-lg inset-shadow-xl border-t-[#9587f8]  border-2 border-[#6b5dc5] text-center text-white sm:px-6 mymob:px-15  myiphone:px-20 mymob:py-3 tablet:px-2 py-2 rounded-md mx-auto "
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #7c6ce4 0, #624de3 100%)",
              }}
            >
              <Link
                to="/contactus"
                className="mx-auto sm:w-[280px]  text-xl tablet:text-base font-semibold"
              >
                Schedule a Call Now
              </Link>
              <Link>
                <FaArrowRight className="tablet:mt-[2px]" />
              </Link>
            </span>
          </div>
          <div className="relative sm:w-[280px] mymob:w-[345px] myiphone:w-[300px] tablet:w-[300px] tablet:ml-10 h-13 sm:mt-6 tablet:mt-4">
            <img
              loading="lazy"
              src="/Pictures\readylaunch1.png"
              alt=""
              className="absolute right-4 sm:w-48 mymob:w-56 tablet:w-64 h-auto object-cover"
            />
          </div>
        </div>
        {/* 2nd box Image */}
        <div className="desktop:h-[620px] desktop:flex desktop:items-center xll:h-[550px]">
          <div className="Imagecolor sm:w-full sm:max-w-[365px] sm:h-[220px] mymob:w-full mymob:max-w-[428px] mymob:h-[260px] myiphone:h-[270px] mt-6 tablet:w-full tablet:max-w-[768px] tablet:h-[550px] desktop:w-[479px] desktop:h-[365px]  xll:w-[620px] xll:h-[500px] xll:py-[60px] xll:px-[40px] xll:mt-0 biglap:w-[900px] biglap:h-[400px] relative desktop:rounded-xl">
            <div className="  sm:w-[300px] sm:top-6 sm:ml-auto sm:mr-auto sm:h-[170px] rounded-md  h-[562px] mymob:w-[320px] mymob:top-3 mymob:ml-6 myiphone:ml-auto myiphone:mr-auto tablet:w-[728px] tablet:h-[520px] desktop:w-[420px] desktop:h-[325px] desktop:mt-3 desktop:ml-auto desktop:mr-auto xll:w-[563px] xll:h-[350px] xll:top-[38%] xll:-translate-y-1/2  biglap:w-[700px] biglap:h-[400px] biglap:top-[60%] relative ">
              {!showVideo ? (
                <div className="">
                  <img
                    loading="lazy"
                    src="/Pictures/Thumbnail.png"
                    alt="Video Thumbnail"
                    className="sm:w-[280px] sm:h-[160px] mymob:w-[320px]  mymob:h-auto tablet:w-[728px] tablet:h-[500px] desktop:w-[420px] desktop:h-[325px] xll:w-[563px] xll:h-auto rounded-md biglap:w-[700px] biglap:h-[350px] "
                  />
                  <button
                    onClick={handlePlay1}
                    className="absolute cursor-pointer sm:h-4 mymob:h-5 sm:top-[48%] sm:left-[47%] text-[#d4cee4] transform -translate-x-1/2 -translate-y-1/2 w-[20px] mymob:left-[50.5%] mymob:top-[71.5%] tablet:top-[49.5%]  tablet:h-7 tablet:w-7  tablet:left-[50.5%] desktop:top-[51.5%] xll:top-[61.2%] biglap:left-[50.5%] biglap:top-[44.5%] rounded-full  flex items-center justify-center "
                  ></button>
                </div>
              ) : (
                <div className="sm:w-[300px] sm:mx-auto sm:h-[170px] mymob:w-[320px]   mymob:h-[220px] tablet:w-[728px] tablet:h-[500px] desktop:w-[420px] desktop:h-[325px]  xll:w-[563px] xll:h-[416px]  biglap:w-[700px] biglap:h-[400px] aspect-video rounded-md">
                  <iframe
                    loading="lazy"
                    src="https://player.vimeo.com/video/1100632870?h=783a0e36ce&autoplay=1&controls=1"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="vimeo-player"
                    className="sm:w-[295px] sm:h-[160px] mymob:w-[320px] mymob:h-[220px] tablet:w-[728px] tablet:h-[500px] desktop:w-[420px] desktop:h-[325px] xll:w-[563px] xll:h-[422px] biglap:w-[700px] biglap:h-[400px] rounded-md"
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* End 1st Section */}

      {/* Section 2 "Check Out Product Powered by Enatega" */}

      <div className="section2 mt-10 sm:h-[1420px] tablet:h-[950px] desktop:h-[530px] biglap:h-[640px] pt-12 pb-12  mymob:w-full mymob:max-w-7xl xll:w-full xll:max-w-[2560px] ">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.1 }}
          className=" px-5 z-0 "
        >
          <p className="text-[28px] font-inter w-fit sm:w-[280px] sm:h-[63px] font-[650] leading-8 sm:m-auto mymob:w-[335px] mymob:text-center myiphone:w-[385px] myiphone:px-3 tablet:w-[606px] tablet:h-[34px] tablet:mx-[61.5px] tablet:my-0 tablet:text-[31px] tablet:px-0 desktop:w-[639px] desktop:h-[36.61px] desktop:text-[32.5px] desktop:mx-[162.8px] xll:w-[690px] xll:h-[39.5px] xll:text-[35.5px] xll:mx-auto text-[#1A1D1E]  drop-shadow-xs biglap:text-5xl biglap:w-[1000px]">
            Check Out Product Powered by Enatega
          </p>

          <p className="mt-[15px] tablet:mt-1 mr-0 mb-0 ml-0 text-[#667085] font-inter sm:text-base sm:w-[280px] sm:h-[19.5px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[964px] xll:w-full xll:max-w-[2560px] text-center font-[400] biglap:text-4xl">
            For more info, Schedule a Call with us{" "}
          </p>
        </motion.div>

        {/* Boxes Yalla ,Snap Delivery... */}
        <div className="mt-12 relative tablet:grid tablet:grid-cols-2 desktop:grid desktop:grid-cols-5 desktop:px-6 xll:desktop:px-18 biglap:mt-24">
          {/* 1st Start box */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white shadow-md rounded-xl sm:mx-auto sm:w-full sm:max-w-[320px] sm:h-[180px] p-[30px] mb-6 tablet:h-[230px] desktop:w-[177px] desktop:h-[277px] xll:w-[210px] biglap:w-[450px] biglap:h-[350px]"
          >
            <Link to="/yalladelievery/">
              <img
                loading="lazy"
                src="/Pictures/yalla.jpg"
                alt="Yalla delivery app logo"
                style={{ filter: "grayscale(100%)" }}
                className="w-[100px] h-[35px] mx-auto tablet:mt-5 biglap:w-[150px] biglap:h-auto"
              />

              <p className="mt-2 text-xl text-[#101828] font-semibold font-inter sm:w-[220px] text-center h-[22px] sm:ml-4 desktop:w-[120px] desktop:ml-0 desktop:mt-6 xll:w-[140px] biglap:w-[160px] biglap:text-3xl biglap:ml-14">
                Yalla
              </p>

              <p className="mt-4 w-[218px] h-[40px] mx-auto text-center text-[15px] text-[#64748B] desktop:w-[130px] desktop:mt-8 xll:w-[160px] biglap:w-[290px] biglap:text-3xl biglap:mt-16">
                60,000 active users achieved in their first year.
              </p>
            </Link>
          </motion.div>

          {/* 2nd Start box */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className=" bg-white shadow-md rounded-xl sm:mx-auto  sm:w-full sm:max-w-[320px]  sm:h-[230px] p-[30px] mb-6 desktop:w-[177px] desktop:h-[277px] xll:w-[210px] biglap:w-[450px] biglap:h-[350px]"
          >
            <Link to="/snapdelievery/" className="">
              <img
                loading="lazy"
                src="/Pictures/snapDelievery.jpg"
                alt=""
                style={{ filter: "grayscale(100%)" }}
                className="w-[60px] h-[58px] mx-auto biglap:w-[150px ] biglap:h-auto"
              />

              <p className="mt-2 text-xl text-[#101828] font-semibold font-inter sm:w-[220px] mymob:w-[260px] text-center h-[22px] desktop:w-[120px] desktop:ml-0 desktop:mt-6 desktop:leading-5 xll:w-[150px] biglap:w-[260px] biglap:text-3xl biglap:mt-8">
                Snap Delivery
              </p>
              <p className="mt-4 w-[218px] h-[40px] mx-auto text-center text-[15px] text-[#64748B] desktop:w-[130px] desktop:mt-8 biglap:w-[290px] biglap:text-3xl biglap:mt-16">
                Snap Delivery has onboarded over 100 stores so far.
              </p>
            </Link>
          </motion.div>
          {/* 2nd end Box */}

          {/* 3rd Start box */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className=" bg-white shadow-md rounded-xl sm:mx-auto sm:w-full sm:max-w-[320px] sm:h-[230px] p-[30px] mb-6 desktop:w-[177px] desktop:h-[277px] xll:w-[210px] biglap:w-[450px] biglap:h-[350px]"
          >
            <Link to="/easyEats/" className="">
              <img
                loading="lazy"
                src="/Pictures/EasyEats.jpg"
                alt=""
                style={{ filter: "grayscale(100%)" }}
                className="w-[65px] h-[65px] mx-auto biglap:w-[150px ] biglap:h-auto"
              />

              <p className="mt-2 text-xl text-[#101828] font-semibold font-inter w-[220px] text-center h-[22px] mx-auto desktop:w-[120px] desktop:ml-0 desktop:mt-5 xll:w-[160px] xll:mt-3 biglap:w-[260px] biglap:text-3xl biglap:ml-3">
                Easy Eats
              </p>
              <p className="mt-4 w-[218px] h-[40px] mx-auto text-center text-[15px] text-[#64748B] desktop:w-[120px] desktop:mt-6 xll:mt-9 xll:w-[150px] biglap:w-[290px] biglap:text-3xl biglap:mt-16">
                Successfully launched a brand new startup with investors.
              </p>
            </Link>
          </motion.div>
          {/* 3rd end Box */}

          {/* 4th Start box */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className=" bg-white shadow-md rounded-xl sm:mx-auto sm:w-full sm:max-w-[320px] sm:h-[230px] p-[30px] mb-6 desktop:w-[177px] desktop:h-[277px] xll:w-[210px] biglap:w-[450px] biglap:h-[350px]"
          >
            <Link to="/borkuDelievery/" className="">
              <img
                loading="lazy"
                src="/Pictures/Borku.jpg"
                alt=""
                style={{ filter: "grayscale(100%)" }}
                className="w-[50px] h-[58px] mx-auto biglap:w-[150px ] biglap:h-auto"
              />

              <p className="mt-2  text-xl text-[#101828] font-semibold font-inter w-[44px] h-[22px] mx-auto  tablet:mt-[13px] desktop:w-[120px] desktop:mt-6 desktop:ml-8 xll:mt-4 xll:w-[120px] xll:ml-12 biglap:w-[160px] biglap:text-3xl biglap:ml-24">
                Borku
              </p>
              <p className="mt-4 w-[218px] h-[40px] mx-auto text-center text-[15px] text-[#64748B] desktop:w-[130px] desktop:mt-6 xll:mt-9 ll:w-[160px] biglap:w-[290px] biglap:text-3xl biglap:mt-16">
                Borku has saved $100,000 USD in commissions.
              </p>
            </Link>
          </motion.div>
          {/* 4th end Box */}

          {/* 5th Start box */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className=" bg-white shadow-md rounded-xl sm:mx-auto  sm:w-full sm:max-w-[320px]  sm:h-[230px] p-[30px] mb-6 desktop:w-[177px] desktop:h-[277px] xll:w-[210px] biglap:w-[450px] biglap:h-[350px]"
          >
            <Link to="/vivyied" className="">
              <img
                loading="lazy"
                src="/Pictures/Vinifiyed.jpg"
                alt=""
                style={{ filter: "grayscale(100%)" }}
                className="w-[65px] h-[65px] mx-auto xll:w-[60px] xll:h-[60px] biglap:w-[150px ] biglap:h-auto "
              />

              <p className="mt-2 text-xl text-[#101828] font-semibold font-inter mymob:w-20 h-[22px] mx-auto desktop:w-[140px] desktop:ml-4 desktop:mt-4 xll:mt-[10px] xll:ml-8 biglap:w-[160px] biglap:text-3xl biglap:ml-20">
                Vinifyed
              </p>
              <p className="mt-4 w-[218px] h-[40px] mx-auto text-center text-[15px] text-[#64748B] desktop:w-[130px] desktop:mt-6 xll:w-[150px] xll:mt-[37px] biglap:w-[290px] biglap:text-3xl biglap:mt-16">
                The first ever wine delivery solution in the region.
              </p>
            </Link>
          </motion.div>
          {/* 5th end Box */}
        </div>
      </div>
      {/* End Section2  */}

      {/* Section 3 "Check Out Our Live Demos" */}
      <section id="dasboardsection">
        <div className="mt-10 sm:h-[2250px] mymob:h-[2500px] tablet:h-[1400px] desktop:h-[1000px] biglap:h-[1050px] pt-12 pb-12  mymob:w-full mymob:max-w-7xl xll:w-full xll:max-w-[2560px] xll:mx-auto ">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.1 }}
            className=" px-5 z-0 h-[150px] tablet:h-[100px] desktop:h-[80px] biglap:h-[100px] "
          >
            <p className="text-[28px] font-inter w-fit sm:w-[240px]  sm:h-[63px] font-[650] leading-8 sm:m-auto mymob:w-[335px] mymob:text-center myiphone:w-[385px] myiphone:px-3 tablet:w-[606px] tablet:h-[34px] tablet:mx-[61.5px] tablet:my-0 tablet:text-[31px] tablet:px-0 desktop:w-[639px] desktop:h-[36.61px] desktop:text-[32.5px] desktop:mx-[162.8px] xll:w-[690px] xll:h-[39.5px] xll:text-[35.5px] xll:mx-auto text-[#1A1D1E]  drop-shadow-xs biglap:text-5xl biglap:w-[1000px]">
              Check Out Our Live Demos
            </p>

            <p className="mt-[15px] tablet:mt-1 mr-0 mb-0 ml-0 text-[#667085] font-inter sm:text-base sm:w-[280px] sm:h-[19.5px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[964px] xll:w-full xll:max-w-[2560px] text-center font-[400] biglap:text-4xl">
              Preview the complete delivery experience — Customer, Vendor, Rider
              & Admin in action!
            </p>
          </motion.div>
          {/* div parent Grid  */}
          <div className="sm:mt-4 tablet:mt-6 relative tablet:grid tablet:grid-cols-2 desktop:grid desktop:grid-cols-3 desktop:mt-10 biglap:mt-24 xll:w-full xll:max-w-[85%] mx-auto">
            <ProductProvider>
              <Products />
            </ProductProvider>
          </div>

          {/* End box Grid */}
        </div>
      </section>
      {/* End Section3  */}

      {/* Section 4 "Use Cases" */}
      <div className=" sm:h-[1260px] mymob:h-[1260px] tablet:h-[950px] desktop:h-[800px] biglap:h-[850px] pt-12 pb-12  mymob:w-full mymob:max-w-7xl xll:w-full xll:max-w-[2560px] xll:mx-auto ">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.1 }}
          className=" px-5 z-0 h-[180px] mymob:h-[150px] tablet:h-[110px] desktop:h-[120px] biglap:h-[140px] "
        >
          <p className="text-base font-inter w-fit sm:w-[240px]  sm:h-auto font-[650] leading-8 sm:m-auto mymob:w-[335px] mymob:text-center myiphone:w-[385px] myiphone:px-3 tablet:w-[606px] text-center tablet:mx-[61.5px] tablet:my-0 tablet:text-base tablet:px-0 desktop:w-[639px] desktop:h-[36.61px] desktop:text-base desktop:mx-[162.8px] xll:w-[690px] xll:h-[39.5px] xll:text-base xll:mx-auto text-[#6e54ae]  drop-shadow-xs biglap:text-xl biglap:w-[1000px]">
            Use Cases
          </p>
          <p className="text-[28px] font-inter w-fit sm:w-[240px]  sm:h-[63px] font-[650] leading-8 sm:m-auto mymob:w-[335px] mymob:text-center myiphone:w-[385px] myiphone:px-3 tablet:w-[606px] tablet:h-[34px] tablet:mx-[61.5px] tablet:my-0 tablet:text-[26px] tablet:px-0 desktop:w-[639px] desktop:h-[36.61px] desktop:text-[30.5px] desktop:mx-[162.8px] xll:w-[690px] xll:h-[39.5px] xll:mx-auto text-[#1A1D1E]  drop-shadow-xs biglap:text-5xl biglap:w-[1000px]">
            Beyond Delivery: A Smarter Way to Serve
          </p>

          <p className="sm:mt-[35px] mymob:mt-[15px] tablet:mt-1 mr-0 mb-0 ml-0 text-[#667085] font-inter sm:text-base sm:w-[280px] sm:h-[19.5px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[964px] xll:w-full xll:max-w-[2560px] text-center font-[400] biglap:text-4xl">
            More than just a food delivery platform
          </p>
        </motion.div>
        {/* div parent Grid  */}
        <div className=" mx-auto sm:grid sm:grid-cols-2 sm:place-content-center sm:gap-x-2 sm:gap-y-12  sm:mt-9 sm:pt-4 sm:w-[96%] tablet:grid tablet:grid-cols-3 desktop:grid-cols-4 xll:grid-cols-4 mypc:grid-cols-4  mypc:w-[86%]">
          {/* box 1 Food Delivery */}
          <div className="sm:w-[132px] sm:h-[118px] mymob:w-[160px] mymob:h-[118px] myiphone:w-[185px] tablet:w-[232px] tablet:h-[138px] desktop:w-[229px] iox:w-[273px] iox:h-[137px]  bg-white border  drop-shadow-xs border-[#0000000F] rounded-2xl mx-auto hover:scale-102 hover:duration-300 transition-all">
            <div className="mx-auto flex flex-col items-center pt-6 xll:pt-8">
              <img
                loading="lazy"
                src="/Pictures/food-delivery-beverage.jpg"
                alt=""
                fill="blue"
                className="sm:w-10 sm:h-10  mymob:w-10 mymob:h-[42.5px] mx-auto"
              />
              <Link
                to="/fooddelievery"
                className="mt-2 sm:text-sm  mymob:text-base font-inter font-[500] text-[#101828] text-center"
              >
                Food Delivery
              </Link>
            </div>
          </div>
          {/* End Box1 */}

          {/* box 2 Flower Delivery */}
          <div className="sm:w-[132px] sm:h-[118px] mymob:w-[160px] mymob:h-[118px] myiphone:w-[185px] tablet:w-[232px] tablet:h-[138px] desktop:w-[229px] iox:w-[273px] iox:h-[137px] bg-white border  drop-shadow-xs border-[#0000000F]  rounded-2xl mx-auto hover:scale-102 hover:duration-300 transition-all">
            <div className="mx-auto flex flex-col items-center pt-6 xll:pt-8">
              <img
                loading="lazy"
                src="/Pictures/Flower-Delivery.jpg"
                alt=""
                fill="blue"
                className="sm:w-10 sm:h-10  mymob:w-10 mymob:h-[42.5px] mx-auto"
              />
              <Link
                to="/flowerdelivery"
                className="mt-2 sm:text-sm mymob:text-base font-inter text-center  font-[500] text-[#101828] "
              >
                Flower Delivery
              </Link>
            </div>
          </div>
          {/* End Box2 */}

          {/* box 3 Grocery Delivery */}
          <div className="sm:w-[132px] sm:h-[118px] mymob:w-[160px] mymob:h-[118px] myiphone:w-[185px] tablet:w-[232px] tablet:h-[138px] desktop:w-[229px] iox:w-[273px] iox:h-[137px] bg-white border  drop-shadow-xs border-[#0000000F]  rounded-2xl mx-auto hover:scale-102 hover:duration-300 transition-all">
            <div className="mx-auto flex flex-col items-center pt-6 xll:pt-8">
              <img
                loading="lazy"
                src="/Pictures/Grocery-Delivery.jpg"
                alt=""
                fill="blue"
                className="sm:w-10 sm:h-10  mymob:w-10 mymob:h-[41px] mx-auto"
              />
              <Link
                to="/groceryDelievery"
                className="mt-2 sm:text-sm mymob:text-base font-inter text-center  font-[500] text-[#101828] "
              >
                Grocery Delivery
              </Link>
            </div>
          </div>
          {/* End Box3 */}

          {/* box 4 Milk Delivery */}
          <div className="sm:w-[132px] sm:h-[118px] mymob:w-[160px] mymob:h-[118px] myiphone:w-[185px] tablet:w-[232px] tablet:h-[138px] desktop:w-[229px] iox:w-[273px] iox:h-[137px] bg-white border  drop-shadow-xs border-[#0000000F]  rounded-2xl mx-auto hover:scale-102 hover:duration-300 transition-all">
            <div className="mx-auto flex flex-col items-center pt-6 xll:pt-8">
              <img
                loading="lazy"
                src="/Pictures/Milk-Delivery.jpg"
                alt=""
                fill="blue"
                className="sm:w-10 sm:h-10  mymob:w-10 mymob:h-[41px] mx-auto"
              />
              <Link
                to="/milkDelievery"
                className="mt-2 sm:text-sm mymob:text-base font-inter text-center  font-[500] text-[#101828] "
              >
                Milk Delivery
              </Link>
            </div>
          </div>
          {/* End Box4 */}

          {/* box 5 Document Delivery */}
          <div className="sm:w-[132px] sm:h-[118px] mymob:w-[160px] mymob:h-[118px] myiphone:w-[185px] tablet:w-[232px] tablet:h-[138px] desktop:w-[229px] iox:w-[273px] iox:h-[137px] bg-white  border  drop-shadow-xs border-[#0000000F]  rounded-2xl mx-auto hover:scale-102 hover:duration-300 transition-all">
            <div className="mx-auto flex flex-col items-center pt-6 xll:pt-8">
              <img
                loading="lazy"
                src="/Pictures/Document-Delivery.jpg"
                alt=""
                fill="blue"
                className="sm:w-10 sm:h-10  mymob:w-10 mymob:h-[42.5px] mx-auto"
              />
              <Link
                to="/documentDelievery"
                className="mt-2 sm:text-sm mymob:text-base font-inter text-center  font-[500] text-[#101828] "
              >
                Document Delivery
              </Link>
            </div>
          </div>
          {/* End Box5 */}

          {/* box 6 Liquor Delivery */}
          <div className="sm:w-[132px] sm:h-[118px] mymob:w-[160px] mymob:h-[118px] myiphone:w-[185px] tablet:w-[232px] tablet:h-[138px] desktop:w-[229px] iox:w-[273px] iox:h-[137px] bg-white border  drop-shadow-xs border-[#0000000F]  rounded-2xl mx-auto hover:scale-102 hover:duration-300 transition-all">
            <div className="mx-auto flex flex-col items-center pt-6 xll:pt-8">
              <img
                loading="lazy"
                src="/Pictures/Liquor-Delivery.jpg"
                alt=""
                fill="blue"
                className="sm:w-10 sm:h-10  mymob:w-10 mymob:h-[42.5px] mx-auto"
              />
              <Link
                to="/liquorDelievery"
                className="mt-2 sm:text-sm mymob:text-base font-inter text-center  font-[500] text-[#101828] "
              >
                Liquor Delivery
              </Link>
            </div>
          </div>
          {/* End Box6 */}

          {/* box 7 Medicine Delivery */}
          <div className="sm:w-[132px] sm:h-[118px] mymob:w-[160px] mymob:h-[118px] myiphone:w-[185px] tablet:w-[232px] tablet:h-[138px] desktop:w-[229px] iox:w-[273px] iox:h-[137px] bg-white  border  drop-shadow-xs border-[#0000000F] rounded-2xl mx-auto hover:scale-102 hover:duration-300 transition-all">
            <div className="mx-auto flex flex-col items-center pt-6 xll:pt-8">
              <img
                loading="lazy"
                src="/Pictures/Medicine-Delivery.jpg"
                alt=""
                fill="blue"
                className="sm:w-10 sm:h-10  mymob:w-10 mymob:h-[41px] mx-auto"
              />
              <Link
                to="/medicinedelievery"
                className="mt-2 sm:text-sm mymob:text-base font-inter text-center  font-[500] text-[#101828] "
              >
                Medicine Delivery
              </Link>
            </div>
          </div>
          {/* End Box7 */}

          {/* box 8 Courier Delivery */}
          <div className="sm:w-[132px] sm:h-[118px] mymob:w-[160px] mymob:h-[118px] myiphone:w-[185px] tablet:w-[232px] tablet:h-[138px] desktop:w-[229px] iox:w-[273px] iox:h-[137px] bg-white border  drop-shadow-xs border-[#0000000F]  rounded-2xl mx-auto hover:scale-102 hover:duration-300 transition-all">
            <div className="mx-auto flex flex-col items-center pt-6 xll:pt-8">
              <img
                loading="lazy"
                src="/Pictures/Courier-Service.jpg"
                alt=""
                fill="blue"
                className="sm:w-10 sm:h-10  mymob:w-10 mymob:h-[41px] mx-auto"
              />
              <Link
                to="/Courierdelievery"
                className="mt-2 sm:text-sm mymob:text-base font-inter text-center  font-[500] text-[#101828] "
              >
                Courier Service
              </Link>
            </div>
          </div>
          {/* End Box8 */}

          {/* box 9 Beauty Delivery */}
          <div className="sm:w-[132px] sm:h-[118px] mymob:w-[160px] mymob:h-[118px] myiphone:w-[185px] tablet:w-[232px] tablet:h-[138px] desktop:w-[229px] iox:w-[273px] iox:h-[137px] bg-white border drop-shadow-xs border-[#0000000F]  rounded-2xl mx-auto hover:scale-102 hover:duration-300 transition-all">
            <div className="mx-auto flex flex-col items-center pt-6 xll:pt-8">
              <img
                loading="lazy"
                src="/Pictures/BeautyServices.jpg"
                alt=""
                fill="blue"
                className="sm:w-10 sm:h-10  mymob:w-10 mymob:h-[41px] mx-auto"
              />
              <Link
                to="/beautyService"
                className="mt-2 sm:text-sm mymob:text-base font-inter text-center  font-[500] text-[#101828] "
              >
                Beauty Services
              </Link>
            </div>
          </div>
          {/* End Box9 */}

          {/* box 10 Roadside Delivery */}
          <div className="sm:w-[132px] sm:h-[118px] mymob:w-[160px] mymob:h-[118px] myiphone:w-[185px] tablet:w-[232px] tablet:h-[138px] desktop:w-[229px] iox:w-[273px] iox:h-[137px] bg-white drop-shadow-xs border border-[#0000000F]  rounded-2xl mx-auto hover:scale-102 hover:duration-300 transition-all">
            <div className="mx-auto flex flex-col items-center pt-6 xll:pt-8">
              <img
                loading="lazy"
                src="/Pictures/Roadside-Assistance.jpg"
                alt=""
                fill="blue"
                className="sm:w-10 sm:h-10  mymob:w-10 mymob:h-[42.5px] mx-auto"
              />
              <Link
                to="/roadSide"
                className="mt-2 sm:text-sm mymob:text-base font-inter text-center  font-[500] text-[#101828] "
              >
                RoadSideblue.png
              </Link>
            </div>
          </div>
          {/* End Box10 */}

          {/* box 11 Gift Delivery */}
          <div className="sm:w-[132px] sm:h-[135px] mymob:w-[160px] myiphone:w-[185px] tablet:w-[232px] tablet:h-[138px] desktop:w-[229px] iox:w-[273px] iox:h-[137px]  bg-white border border-[#0000000F] rounded-2xl mx-auto hover:scale-102 hover:duration-300 transition-all drop-shadow-xs">
            <div className="mx-auto flex flex-col items-center pt-6 xll:pt-8">
              <img
                loading="lazy"
                src="/Pictures/Gift-Delivery.jpg"
                alt=""
                fill="blue"
                className="sm:w-10 sm:h-10  mymob:w-10 mymob:h-[42.5px] mx-auto"
              />
              <Link
                to="/giftdelievery"
                className="mt-2 sm:text-sm mymob:text-base font-inter text-center  font-[500] text-[#101828] "
              >
                Gift Delivery
              </Link>
            </div>
          </div>
          {/* End Box11 */}

          {/* box 12 Laundary Delivery */}
          <div className="sm:w-[132px] sm:h-[135px] mymob:w-[160px] myiphone:w-[185px] tablet:w-[232px] tablet:h-[138px] desktop:w-[229px] iox:w-[273px] iox:h-[137px] bg-white  border border-[#0000000F]  rounded-2xl mx-auto hover:scale-102 hover:duration-300 transition-all drop-shadow-xs">
            <div className="mx-auto flex flex-col items-center pt-6 xll:pt-8">
              <img
                loading="lazy"
                src="/Pictures/Laundary-on-demand.jpg"
                alt=""
                fill="blue"
                className="sm:w-10 sm:h-10  mymob:w-10 mymob:h-[42.5px] mx-auto"
              />
              <Link
                to="/laundrydelievery"
                className="mt-2 sm:text-sm mymob:text-base font-inter text-center  font-[500] text-[#101828] "
              >
                Laundary On-Demand Services
              </Link>
            </div>
          </div>
          {/* End Box12 */}

          {/* End box Grid */}
        </div>
      </div>
      {/* End Section4  */}

      {/* Section 5  "Who's It For?" */}

      <div className="sm:w-full sm:max-w-[2560px] sm:h-[1150px] mymob:h-[1120px] tablet:h-[980px] desktop:h-[720px] py-12 sm:px-5 desktop:px-0 bg-[#f9fafc] desktop:flex desktop:space-x-9 desktop:items-center xll:space-x-20 biglap:h-[1050px]">
        <div className=" desktop:ml-0">
          <img
            loading="lazy"
            src="/Pictures/dasoard.jpg"
            alt=""
            className="sm:w-[196px] mymob:w-[310px] tablet:w-[509px] desktop:w-[459px] xll:w-[667px] biglap:w-[1200px] object-cover h-auto max-w-[100%] mx-auto"
          />
        </div>

        <div className="mt-5 biglap:ml-32">
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }}
            className="p-1 rounded-full bg-[#f5ecfd] w-[28px] ml-2"
          >
            <TbUserQuestion className="w-5 h-auto mx-auto text-[#8576b7]" />
          </motion.div>
          <div className="flex flex-col desktop:w-[500px] xll:w-[450px] iox:w-[500px] biglap:w-[1000px] biglap:h-[900px]  my-auto ">
            <div className="my-[18px]">
              <motion.p
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.2 }}
                className="text-[#1A1D1E] sm:text-[28.5px] desktop:text-[36px] biglap:text-[48px] font-semibold font-inter"
              >
                Who's It For?
              </motion.p>
            </div>

            {/* 1st row Start */}
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
              className="flex justify-between sm:space-x-2 "
            >
              <motion.div
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-full bg-[#f5ecfd] w-[28px] h-[28px] flex items-center"
              >
                <GrFormCheckmark className="w-6 h-auto mx-auto text-[#45308b]" />
              </motion.div>

              <div>
                <p className="text-[#011D1A] sm:text-[16.5px] biglap:text-[24px] font-semibold font-inter">
                  Flexible Deployment Options
                </p>
                <p className="text-[#667085] sm:text-[16.5px] biglap:text-[24px]  font-inter">
                  You can deploy the platform yourself if you have the required
                  technical expertise, or opt for our professional deployment
                  services at an additional cost.
                </p>
              </div>
            </motion.div>
            {/* 1st end */}

            {/* 2nd Row End */}
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
              className="flex justify-between sm:space-x-2 desktop:mt-2 biglap:mt-8"
            >
              <div className="rounded-full bg-[#f5ecfd] w-[28px] h-[28px] flex items-center">
                <GrFormCheckmark className="w-6 h-auto mx-auto text-[#45308b]" />
              </div>

              <div>
                <p className="text-[#011D1A] sm:text-[16.5px] biglap:text-[24px] font-semibold font-inter ">
                  Fast Platform Launch
                </p>
                <p className="text-[#667085] sm:text-[16.5px] biglap:text-[24px] font-inter">
                  For those looking to launch their own delivery solution in a
                  few days! Get set up and start delivering in under two weeks!
                </p>
              </div>
            </motion.div>
            {/* 2nd Row End */}

            {/* 3rd Row Start */}
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
              className=" flex justify-between sm:space-x-2 desktop:mt-2 biglap:mt-8"
            >
              <div className="rounded-full bg-[#f5ecfd] w-[28px] h-[28px] flex items-center">
                <GrFormCheckmark className="w-6 h-auto mx-auto text-[#45308b]" />
              </div>

              <div>
                <p className="text-[#011D1A] sm:text-[16.5px] biglap:text-[24px] font-semibold font-inter">
                  Technical Familiarity Recommended
                </p>
                <p className="text-[#667085] sm:text-[16.5px] biglap:text-[24px] font-inter">
                  Familiarity with the platform's tech stack and app store
                  compliance guidelines is recommended for a smooth launch.
                </p>
              </div>
            </motion.div>
            {/* 3rd Row End */}

            {/* 4th Row Start */}
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
              className="mt-1 flex justify-between sm:space-x-2 desktop:mt-2 biglap:mt-8"
            >
              <div className="rounded-full bg-[#f5ecfd] w-[28px] h-[28px] flex items-center">
                <GrFormCheckmark className="w-6 h-auto mx-auto text-[#45308b]" />
              </div>

              <div>
                <p className="text-[#011D1A] sm:text-[16.5px]  biglap:text-[24px] font-semibold font-inter">
                  Customization & Deployment Support
                </p>
                <p className="text-[#667085] sm:text-[16.5px] biglap:text-[24px] font-inter">
                  No Dev team or technical skills? Not a problem! We’ve
                  partnered with{" "}
                  <span className="text-[#796bcc]">Ninjas Code</span> to offer
                  expert customization and deployment services.
                </p>
              </div>
            </motion.div>
            {/* 4th Row End */}
            {/* Link Two  */}
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
              className="sm:mt-2 tablet:mt-6 tablet:flex items-center sm:space-x-8 biglap:mt-16 biglap:space-x-16"
            >
              <span className=" bg-[#7a6ae4] flex items-center justify-center space-x-2 shadow inset-shadow-xs  border-2 border-[#968be0] text-center text-white sm:w-[270px] mymob:w-[325px] myiphone:w-[374px] h-auto sm:py-3 tablet:w-[140px] tablet:mt-0 desktop:py-[7px] rounded-md sm:mx-auto tablet:mx-0 drop-shadow-2xl">
                <Link
                  to=""
                  className=" tablet:text-base font-inter text-white"
                  onClick={() => {
                    setopenModel(true);
                  }}
                >
                  Live Demos
                </Link>
                <Link>
                  <FaArrowRight className="sm:mt-[2px] ml-0 " />
                </Link>
              </span>

              <span className="sm:mt-4 bg-white flex items-center justify-center space-x-2 shadow inset-shadow-xs  border-[0.3px] border-[#c0c0c0] text-center text-white sm:w-[270px] mymob:w-[325px] myiphone:w-[374px] h-auto sm:py-3 tablet:w-[183px] tablet:mt-0 desktop:py-2 rounded-md sm:mx-auto tablet:mx-4 biglap:mx-10 drop-shadow-2xl ">
                <Link
                  to="/documentation"
                  className="tablet:text-base font-semibold text-[#252726]"
                >
                  Documentation
                </Link>
                <Link>
                  <FaArrowRight className="sm:mt-[2px] tablet:mt-1 ml-0 text-[#252726]" />
                </Link>
              </span>
            </motion.div>
            {/* Link Two end */}
          </div>
        </div>
        {/* right side section end */}
        {openModel && <LiveDemoModel setopenModel={setopenModel} />}
      </div>
      {/* Section 5 End */}

      {/* Section 6 "Enjoy Free Lifetime Updates" */}
      <div className="sm:w-full sm:max-w-[2560px] bg-[#f9fafc] sm:px-1 desktop:px-4 iox:px-4 ">
        <div className="bg-[#f7f6fd]  sm:h-[820px] mymob:h-[880px] tablet:h-[900px]  desktop:h-[550px] xll:h-[550px] py-12 sm:px-5 desktop:px-0 desktop:flex desktop:space-x-9 desktop:items-center xll:justify-evenly iox:justify-evenly biglap:h-[1050px]">
          <div className="desktop:ml-4  biglap:ml-16">
            <img
              loading="lazy"
              src="/Pictures/viewProject.png"
              alt=""
              className="sm:w-[196px] mymob:w-[310px] tablet:w-[500px] desktop:w-[438px] iox:w-[500px] xll:w-[550px] biglap:w-[1100px] object-cover h-auto max-w-[100%] mx-auto"
            />
          </div>

          <div className="sm:mt-5 tablet:mt-0 biglap:ml-18">
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
              className="p-1 rounded-full bg-[#f5ecfd] w-[28px] ml-2"
            >
              <TbRefresh className="w-5 h-auto mx-auto text-[#8576b7]" />
            </motion.div>
            <div className="flex flex-col desktop:w-[500px]  xll:w-[500px] iox:w-[550px] biglap:w-[1000px] biglap:h-[900px]  my-auto">
              <div className="my-[18px]">
                <motion.p
                  variants={fadeIn("down", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.2 }}
                  className="text-[#1A1D1E] sm:text-[28.5px] desktop:text-[36px] desktop:w-[314px] biglap:text-[48px] biglap:w-full font-semibold font-inter"
                >
                  Enjoy Free Lifetime Updates
                </motion.p>
              </div>

              {/* 1st row Start */}
              <motion.div
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.2 }}
                className="flex justify-between sm:space-x-2 "
              >
                <div>
                  <p className="text-[#667085] sm:text-[16.5px] biglap:text-[24px]  biglap:mt-10 font-inter">
                    Enatega’s frontend is fully open source, giving you the
                    ability to track real-time updates and address any issues
                    with complete transparency. Our backend, though proprietary,
                    is shared with you during every new release, ensuring your
                    system remains updated with the latest technologies for
                    android and iOS app development.
                  </p>
                </div>
              </motion.div>
              {/* 1st end */}

              {/* 4th Row Start */}
              <motion.div
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.2 }}
                className="sm:mt-6 flex items-center sm:space-x-2 desktop:mt-6 biglap:mt-16"
              >
                <div className="rounded-full bg-[#f5ecfd] w-[28px] h-[28px] flex items-center">
                  <FaGithub className="w-6 h-auto mx-auto" />
                </div>

                <div>
                  <p className="text-[#667085] sm:text-[13.5px]  biglap:text-[24px] font-inter">
                    968 user starred this project
                  </p>
                </div>
              </motion.div>
              {/* 4th Row End */}
              {/* Link Two  */}
              <motion.div
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.2 }}
                className="sm:mt-2 tablet:mt-6 tablet:flex items-center sm:space-x-8 biglap:mt-16 biglap:space-x-16"
              >
                <span className="sm:mt-4 bg-white text-black flex items-center justify-center space-x-2 shadow inset-shadow-sm border-gray-400 text-center sm:w-[270px] mymob:w-[325px] myiphone:w-[374px] h-auto sm:py-3 tablet:w-[160px] tablet:mt-0 desktop:py-2 rounded-md sm:mx-auto tablet:mx-0 drop-shadow-lg">
                  <Link>
                    <FaGithub className="w-6 h-6" />
                  </Link>
                  <Link
                    to="https://github.com/muhammadachar435"
                    target="blank"
                    className=" tablet:text-base font-inter text-black font-semibold"
                  >
                    View Projects
                  </Link>
                </span>
              </motion.div>
              {/* Link Two end */}
            </div>
          </div>
        </div>
      </div>
      {/* Section 6 End */}

      {/* Section 7 "Live Demos and Detailed Documentation" */}
      <div className="sm:w-full sm:max-w-[2560px] sm:h-[830px] mymob:h-[820px] tablet:h-[650px] desktop:h-[500px] xll:h-[500px] py-12 sm:px-5 desktop:px-0 bg-[#f9fafc] desktop:flex desktop:space-x-9 desktop:items-center xll:justify-evenly iox:justify-items-start iox:space-x-0 biglap:justify-evenly biglap:h-[1050px]">
        <div className=" desktop:ml-6 iox:ml-0 biglap:ml-16">
          <div className="sm:flex desktop:hidden sm:mb-5  bg-[#f8f9fd]">
            <video
              loading="lazy"
              src="/Video/inshot11.mp4"
              autoPlay
              loop
              muted
              playsInline
              className=" border-none outline-none sm:w-[196px] mymob:w-[280px] object-cover h-auto max-w-[100%] mx-auto"
            ></video>
          </div>

          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }}
            className="p-1 rounded-full bg-[#f5ecfd] w-[28px] ml-2 "
          >
            <TbDeviceAnalytics className="w-5 h-auto mx-auto text-[#8576b7] " />
          </motion.div>

          <div className="flex flex-col desktop:w-[460px] xll:w-[500px] xll:mb-5 iox:w-[500px]  biglap:w-[1000px] biglap:h-[700px] my-auto">
            <div className="my-[18px]">
              <motion.p
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.2 }}
                className="text-[#1A1D1E] sm:text-[28.5px] desktop:text-[36px] biglap:text-[48px] biglap:w-full font-semibold font-inter"
              >
                Live Demos and Detailed Documentation
              </motion.p>
            </div>

            {/* 1st row Start */}
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
              className="flex justify-between sm:space-x-2 "
            >
              <div>
                <p className="text-[#667085] sm:text-[16.5px] biglap:text-[24px] biglap:mt-10 font-inter">
                  Before you commit, we provide live demos and thorough
                  documentation to give you a complete overview of how Enatega
                  works. This ensures you’re fully informed about the deployment
                  process, making it easier to set up your delivery management
                  software with confidence.
                </p>
              </div>
            </motion.div>
            {/* 1st end */}

            {/* 4th Row Start */}
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
              className="sm:mt-6 flex items-center sm:space-x-2 desktop:mt-6 biglap:mt-16"
            ></motion.div>

            {/* Link Two  */}
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
              className="sm:mt-2 tablet:mt-6 tablet:flex items-center sm:space-x-8 biglap:mt-16 biglap:space-x-16"
            >
              <span className="sm:mt-4 bg-[#7a6ae4] flex items-center justify-center space-x-2 shadow-lg inset-shadow-xl  border-2 border-[#968be0] text-center text-white sm:w-[270px] mymob:w-[325px] myiphone:w-[374px] h-auto sm:py-3 tablet:w-[140px] tablet:mt-0 desktop:py-[7px] rounded-md sm:mx-auto tablet:mx-0 drop-shadow-2xl">
                <a
                  href="#dasboardsection"
                  className=" tablet:text-base font-inter text-white"
                >
                  Live Demos
                </a>
                <Link>
                  <FaArrowRight className="sm:mt-[2px] ml-0 " />
                </Link>
              </span>

              <span className="sm:mt-4 bg-white flex items-center justify-center space-x-2 shadow-lg inset-shadow-xl  border-[0.3px] border-[#c0c0c0] text-center text-white sm:w-[270px] mymob:w-[325px] myiphone:w-[374px] h-auto sm:py-3 tablet:w-[183px] tablet:mt-0 desktop:py-2  rounded-md sm:mx-auto tablet:mx-4 biglap:mx-10 drop-shadow-2xl ">
                <Link
                  to="/documentation"
                  className="tablet:text-base font-semibold text-[#252726]"
                >
                  Documentation
                </Link>
                <Link>
                  <FaArrowRight className="sm:mt-[2px] tablet:mt-1 ml-0 text-[#252726]" />
                </Link>
              </span>
            </motion.div>
            {/* Link Two end */}
          </div>
        </div>

        <div className="hidden desktop:flex  bg-[#f8f9fd] desktop:h-auto rounded-md iox:mr-8 biglap:mr-0">
          <video
            loading="lazy"
            src="/Video/inshot11.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="border-none rounded-md outline-none sm:w-[196px] mymob:w-[310px] tablet:w-[400px] desktop:w-[400px] iox:w-[400px] biglap:w-[900px] h-auto  mx-auto"
          ></video>
        </div>
      </div>
      {/* Section 7 End */}

      {/* Section 8 " Latest Technologies, Vast Customizability and Endless Scalability" */}
      <div className="sm:w-full sm:max-w-[2560px] sm:h-[1000px] mymob:h-[1000px] myiphone:h-[980px] tablet:h-[930px] desktop:h-[620px] xll:h-[620px] py-12 sm:px-5 desktop:px-0 bg-[#f9fafc] desktop:flex desktop:space-x-9 desktop:items-center xll:justify-evenly iox:justify-items-start iox:space-x-0 biglap:justify-evenly biglap:h-[1050px]">
        <div className=" desktop:ml-6 iox:ml-0 biglap:ml-16">
          <div className="sm:flex desktop:hidden sm:mb-5  bg-[#f8f9fd]">
            <video
              loading="lazy"
              src="/Video/inreactshot1.mp4"
              autoPlay
              loop
              muted
              playsInline
              className=" border-none outline-none sm:w-[196px] mymob:w-[280px] tablet:w-[500px]  object-cover h-auto max-w-[100%] mx-auto"
            ></video>
          </div>

          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }}
            className="p-1 rounded-full bg-[#f5ecfd] w-[28px] ml-2 "
          >
            <TbDeviceAnalytics className="w-5 h-auto mx-auto text-[#8576b7] " />
          </motion.div>

          <div className="flex flex-col desktop:w-[460px] xll:w-[500px] xll:mb-5 iox:w-[500px]  biglap:w-[1000px] biglap:h-[700px] my-auto">
            <div className="my-[18px]">
              <motion.p
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.2 }}
                className="text-[#1A1D1E] sm:text-[28.5px] desktop:text-[36px] biglap:text-[48px] biglap:w-full font-semibold font-inter"
              >
                Latest Technologies, Vast Customizability and Endless
                Scalability
              </motion.p>
            </div>

            {/* 1st row Start */}
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
              className="flex justify-between sm:space-x-2 "
            >
              <div>
                <p className="text-[#667085] sm:text-[16.5px] biglap:text-[24px] biglap:mt-10 font-inter">
                  Built using the latest technologies, Enatega is a future-proof
                  solution for any delivery business. With its monolithic
                  architecture, server deployment is simplified, offering
                  endless scalability depending on your server choice. Whether
                  you’re building the best delivery app restaurants need or a
                  service tailored to your specific needs, Enatega provides the
                  flexibility and power required to thrive.
                </p>
              </div>
            </motion.div>
            {/* 1st end */}

            {/* 4th Row Start */}
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
              className="sm:mt-6 flex items-center sm:space-x-2 desktop:mt-6 biglap:mt-16"
            ></motion.div>

            {/* Link Two  */}
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
              className="sm:mt-2 tablet:mt-6 tablet:flex items-center sm:space-x-8 biglap:mt-16 biglap:space-x-16"
            >
              <span className="sm:mt-4 bg-[#7a6ae4] flex items-center justify-center space-x-2 shadow-lg inset-shadow-xl  border-2 border-[#968be0] text-center text-white sm:w-[270px] mymob:w-[325px] myiphone:w-[374px] h-auto sm:py-3 tablet:w-[140px] tablet:mt-0 desktop:py-[7px] rounded-md sm:mx-auto tablet:mx-0 drop-shadow-2xl">
                <Link
                  to=""
                  className=" tablet:text-base font-inter text-white"
                  onClick={() => {
                    setopenModel(true);
                  }}
                >
                  Live Demos
                </Link>
                <Link>
                  <FaArrowRight className="sm:mt-[2px] ml-0 " />
                </Link>
              </span>

              <span className="sm:mt-4 bg-white flex items-center justify-center space-x-2 shadow-lg inset-shadow-xl  border-[0.3px] border-[#c0c0c0] text-center text-white sm:w-[270px] mymob:w-[325px] myiphone:w-[374px] h-auto sm:py-3 tablet:w-[183px] tablet:mt-0 desktop:py-2  rounded-md sm:mx-auto tablet:mx-4 biglap:mx-10 drop-shadow-2xl ">
                <Link
                  to="/documentation"
                  className="tablet:text-base font-semibold text-[#252726]"
                >
                  Documentation
                </Link>
                <Link>
                  <FaArrowRight className="sm:mt-[2px] tablet:mt-1 ml-0 text-[#252726]" />
                </Link>
              </span>
            </motion.div>
            {/* Link Two end */}
          </div>
        </div>

        <div className="hidden desktop:flex desktop:h-auto rounded-md iox:mr-8 biglap:mr-0 p-4 ">
          <video
            loading="lazy"
            src="/Video/inreactshot1.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="border-none rounded-md outline-none sm:w-[196px] mymob:w-[310px] tablet:w-[440px] desktop:w-[400px]  iox:w-[400px] iox:h-auto biglap:w-[900px] h-auto max-w-[100%] mx-auto"
          ></video>
        </div>
      </div>
      {/* Section 8 End */}

      {/* Section 9 " How to Get Started" */}
      <div className=" sm:w-full sm:max-w-[2560px] sm:h-[1350px] mymob:h-[1350px] myiphone:h-[1330px] tablet:h-[1280px] desktop:h-[920px] xll:h-[950px] py-12 sm:px-5 desktop:px-0 desktop:flex desktop:space-x-9 desktop:items-center xll:justify-evenly iox:justify-items-start iox:space-x-0 biglap:justify-evenly biglap:h-[1250px]">
        <div className=" desktop:ml-6 iox:ml-[40px] biglap:mr-4 ">
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }}
            className="desktop:w-[460px] tablet:w-[700px] iox:w-[580px] iox:mt-12 biglap:w-[1000px] biglap:h-[300px] biglap:mb-20 "
          >
            <h3 className="text-[#1A1D1E] sm:text-[24.5px] desktop:text-[32px] biglap:text-[48px] biglap:w-full font-semibold font-inter">
              How to Get Started
            </h3>
            <p className="text-[#8f9197] sm:text-[15.5px]  biglap:text-[24px] biglap:mt-10 font-inter">
              Simply purchase, download, and receive expert assistance to launch
              your{" "}
              <span className="font-semibold text-[#6e7185]">Enatega </span>
              solution quickly and easily, leveraging our delivery management
              software to create the best food delivery app for your business.
              If needed, our partners at Ninjas Code can assist with
              customization and deployment, ensuring you have the best food
              delivery apps to work for.
            </p>
          </motion.div>

          <div className="sm:mt-6 desktop:flex desktop:space-x-1 iox:space-x-2 biglap:space-x-52 items-center iox:h-[700px] biglap:mt-8">
            <div className="sm:w-[280px]  tablet:w-[720px] desktop:w-[500px] iox:w-[620px]  biglap:w-[1000px] biglap:h-[700px] ">
              {/* 1st box start */}
              <div className="border-l-4 border-[#f3f4f6]">
                <div className="w-[90%] pt-5 pr-5 pb-[40px]  mx-auto">
                  <p className="text-[#011D1A] sm:text-[16.5px] tablet:text-[20px]  biglap:text-[26px] font-inter  font-[500]">
                    Purchase & Download
                  </p>
                  <p className="text-[#667085] font-inter  sm:text-[14px] tablet:text-[16px] biglap:text-[20px] ">
                    Purchase the{" "}
                    <span className="font-semibold text-[#6e7185]">
                      {" "}
                      Enatega{" "}
                    </span>
                    solution and download the .zip file from the purchase page
                    to set up your Android and iOS app development. This
                    provides the foundation for making a fast and efficient
                    delivery platform.
                  </p>
                </div>
              </div>
              {/* 1st box end */}
              {/* 2nd box */}
              <div className="border-l-4 border-[#7b5bbf]">
                <div className="w-[90%] pt-5 pr-5 pb-[40px] mx-auto">
                  <p className="text-[#011D1A] sm:text-[16.5px] tablet:text-[20px]   biglap:text-[26px] font-inter font-[500]">
                    Free Technical Consultation
                  </p>
                  <p className="text-[#667085] font-inter sm:text-[14px] tablet:text-[16px] biglap:text-[20px]">
                    You will get 2 hours of free technical consultation for
                    deployment or configuration support. Whether you are
                    creating a food delivery app or customizing your platform,
                    their team will help ensure smooth app development.
                  </p>
                </div>
              </div>
              {/* 2nd box */}
              {/* 1st box start */}
              <div className="border-l-4 border-[#f3f4f6]">
                <div className="w-[90%] pt-5 pr-5 pb-[40px] mx-auto">
                  <p className="text-[#011D1A] sm:text-[16.5px] tablet:text-[20px]  biglap:text-[26px] font-inter  font-[500]">
                    Get Support Anytime
                  </p>
                  <p className="text-[#667085] font-inter sm:text-[14px] tablet:text-[16px] biglap:text-[20px]">
                    If you have any urgent questions, you can contact them via
                    email. They are committed to helping you at every step,
                    whether it’s setting up the delivery management software or
                    giving advice on food delivery app solutions.
                  </p>
                </div>
              </div>
              {/* 3rd box end */}
            </div>
            {/* img div */}
            <div className="sm:mt-10 bg-[#f9f3ff] sm:pr-0 sm:py-2 desktop:ml-4 desktop:p-10 desktop:pr-0 iox:ml-6 iox:p-16 iox:pr-0 pr-0">
              <img
                loading="lazy"
                src="/Pictures/fullplatform.jpg"
                alt=""
                className="sm:w-[215px] mymob:w-[270px] tablet:w-[663px] desktop:w-[422px] biglap:w-[700px] object-cover h-auto max-w-[100%] mx-auto"
              />
            </div>
            {/* end img div */}
          </div>
        </div>
      </div>
      {/* Section 9 End */}

      {/* Section 10 "Features" */}
      <div className="mt-10 sm:h-[1700px] mymob:h-[1700px] tablet:h-[920px] desktop:h-[690px]  biglap:h-[760px] pt-12 pb-12  mymob:w-full mymob:max-w-7xl xll:w-full xll:max-w-[2560px] xll:mx-auto ">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className=" px-5 z-0 h-[210px] mymob:h-[190px] tablet:h-[110px] desktop:h-[120px] biglap:h-[140px] "
        >
          <p className="text-base font-inter w-fit sm:w-[240px]  sm:h-auto font-[650] leading-8 sm:m-auto mymob:w-[335px] mymob:text-center myiphone:w-[385px] myiphone:px-3 tablet:w-[606px] text-center tablet:mx-[61.5px] tablet:my-0 tablet:text-base tablet:px-0 desktop:w-[639px] desktop:h-[36.61px] desktop:text-base desktop:mx-[162.8px] xll:w-[690px] xll:h-[39.5px] xll:text-base xll:mx-auto text-[#6e54ae]  drop-shadow-xs biglap:text-xl biglap:w-[1000px]">
            Features
          </p>
          <p className="text-[28px] font-inter w-fit sm:w-[240px]  sm:h-[63px] font-[650] leading-8 sm:m-auto mymob:w-[335px] mymob:text-center myiphone:w-[385px] myiphone:px-3 tablet:w-[606px] tablet:h-[34px] tablet:mx-[61.5px] tablet:my-0 tablet:text-[26px] tablet:px-0 desktop:w-[639px] desktop:h-[36.61px] desktop:text-[30.5px] desktop:mx-[162.8px] xll:w-[690px] xll:h-[39.5px] xll:mx-auto text-[#1A1D1E]  drop-shadow-xs biglap:text-5xl biglap:w-[1000px]">
            What's included? Absolutely everything.
          </p>

          <p className="sm:mt-[35px] mymob:mt-[15px] tablet:mt-1  mr-0 mb-0 ml-0 text-[#667085] font-inter sm:text-base sm:w-[280px] sm:h-[19.5px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[964px] xll:w-full xll:max-w-[2560px] text-center font-[400] biglap:text-4xl">
            Absolutely everything you need to get a fast and efficient delivery
            business off the ground!
          </p>
        </motion.div>
        {/* div parent Grid  */}
        <div className=" mx-auto sm:grid sm:grid-cols-1 sm:place-content-center sm:gap-x-2 sm:gap-y-12  sm:mt-9 sm:pt-4 sm:w-[96%] tablet:grid tablet:grid-cols-2 desktop:grid-cols-3 mypc:w-[86%]">
          {/* box 1 Full Source Code */}
          <div className="sm:w-[300px] sm:h-[190px]  mymob:h-[190px] tablet:w-[320px] tablet:h-[200px] bg-white rounded-2xl mx-auto hover:duration-300 transition-all">
            <div className="mx-auto flex flex-col items-center pt-6 xll:pt-8">
              <TbDeviceImacCode className=" h-13 w-13 p-1 border-[10px] bg-[#f5ecff] border-[#f9f6fe] text-[#6c58c2] rounded-full" />

              <p
                to="/fooddelievery"
                className="mt-2 font-bold sm:text-base tablet:text-base font-inter text-center text-[#1A1D1E] "
              >
                Full Source Code
              </p>
              <p className="text-center text-[#6e757f] sm:text-[15.8px] text-[16px] font-sans w-[90%] mt-1">
                Complete access to the entire code for future updates and
                customizations
              </p>
            </div>
          </div>
          {/* End Box1 */}

          {/* box 2 No Additional Charges */}
          <div className="sm:w-[300px] sm:h-[190px]  mymob:h-[190px] tablet:w-[320px] tablet:h-[200px] bg-white rounded-2xl mx-auto hover:duration-300 transition-all">
            <div className="mx-auto flex flex-col items-center pt-6 xll:pt-8">
              <AiOutlineDollar className=" h-13 w-13 p-1 border-[10px] bg-[#f5ecff] border-[#f9f6fe] text-[#6c58c2] rounded-full" />
              <p
                to="/fooddelievery"
                className="mt-2 font-bold sm:text-base tablet:text-base font-inter text-center text-[#1A1D1E] "
              >
                No Additional Charges
              </p>
              <p className="text-center text-[#6e757f] sm:text-[15.8px] text-[16px] font-sans w-[90%] mt-1">
                What you pay upfront is final - no hidden or extra fees
              </p>
            </div>
          </div>
          {/* End Box2 */}

          {/* box 3 All Essential Apps Included*/}

          <div className="sm:w-[300px] sm:h-[190px]  mymob:h-[190px] tablet:w-[320px] tablet:h-[200px] bg-white rounded-2xl mx-auto hover:duration-300 transition-all">
            <div className="mx-auto flex flex-col items-center pt-6 xll:pt-8">
              <IoIosSend className=" h-13 w-13 p-1 border-[10px] bg-[#f5ecff] border-[#f9f6fe] text-[#6c58c2] rounded-full" />
              <p
                to="/fooddelievery"
                className="mt-2 font-bold sm:text-base tablet:text-base font-inter text-center text-[#1A1D1E] "
              >
                All Essential Apps Included
              </p>
              <p className="text-center text-[#6e757f] sm:text-[15.8px] text-[16px] font-sans w-[90%] mt-1">
                Get full access to the customer,rider and restaurant apps for
                iOS and Android.
              </p>
            </div>
          </div>

          {/* End Box3 */}

          {/* box 4 Powerful Admin Dashboard */}
          <div className="sm:w-[300px] sm:h-[190px]  mymob:h-[190px] tablet:w-[320px] tablet:h-[200px] bg-white rounded-2xl mx-auto hover:duration-300 transition-all">
            <div className="mx-auto flex flex-col items-center pt-6 xll:pt-8">
              <TbDeviceImacCode className=" h-13 w-13 p-1 border-[10px] bg-[#f5ecff] border-[#f9f6fe] text-[#6c58c2] rounded-full" />
              <p
                to="/fooddelievery"
                className="mt-2 font-bold sm:text-base tablet:text-base font-inter text-center text-[#1A1D1E] "
              >
                Powerful Admin Dashboard
              </p>
              <p className="text-center text-[#6e757f] sm:text-[15.8px] text-[16px] font-sans w-[90%] mt-1">
                Manage everything from restaurants, riders and food items - all
                within a single powerful dashboard
              </p>
            </div>
          </div>

          {/* End Box4 */}

          {/* box 5 Lifetime Updates */}
          <div className="sm:w-[300px] sm:h-[190px]  mymob:h-[190px] tablet:w-[320px] tablet:h-[200px] bg-white rounded-2xl mx-auto hover:duration-300 transition-all">
            <div className="mx-auto flex flex-col items-center pt-6 xll:pt-8">
              <IoRefresh className=" h-13 w-13 p-1 border-[10px] bg-[#f5ecff] border-[#f9f6fe] text-[#6c58c2] rounded-full" />
              <p
                to="/fooddelievery"
                className="mt-2 font-bold sm:text-base tablet:text-base font-inter text-center text-[#1A1D1E] "
              >
                Lifetime Updates
              </p>
              <p className="text-center text-[#6e757f] sm:text-[15.8px] text-[16px] font-sans w-[90%] mt-1">
                Enjoy free updates for life, keeping your delivery solution
                always up-to-date
              </p>
            </div>
          </div>

          {/* End Box5 */}

          {/* box 6  "2 hours free technical consultation" */}
          <div className="sm:w-[300px] sm:h-[190px]  mymob:h-[190px] tablet:w-[320px] tablet:h-[200px] bg-white rounded-2xl mx-auto hover:duration-300 transition-all">
            <div className="mx-auto flex flex-col items-center pt-6 xll:pt-8">
              <FiMessageCircle className="h-13 w-13 p-1 border-[10px] bg-[#f5ecff] border-[#f9f6fe] text-[#6c58c2] rounded-full" />
              <p
                to="/fooddelievery"
                className="mt-2 font-bold sm:text-base tablet:text-base font-inter text-center text-[#1A1D1E] "
              >
                2 hours free technical consultation
              </p>
              <p className="text-center text-[#6e757f] sm:text-[15.8px] text-[16px] font-sans w-[90%] mt-1">
                Two hours of expert guidance to address your technical needs
              </p>
            </div>
          </div>

          {/* End Box6 */}

          {/* End box Grid */}
        </div>
      </div>
      {/* End Section 10  */}

      {/* Start Section 11 */}
      <VideoSlider />
      {/* End Section 11 */}

      {/* Section 12 "Transparent, Flexible Pricing" */}
      <section
        ref={(el) => {
          sectionRefs.current[0] = el;
        }}
        id="pricing"
      >
        <div className="mt-10 bg-[#f9fafc] sm:h-[2100px] mymob:h-[1920px] tablet:h-[1510px] desktop:h-[1070px] biglap:h-[1200px] pt-12 pb-12  mymob:w-full mymob:max-w-7xl xll:w-full xll:max-w-[2560px] xll:mx-auto ">
          {/* Heading Start */}
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }}
            className=" px-5 z-0 sm:h-[280px] mymob:h-[235px] tablet:h-[130px] desktop:h-[135px] biglap:h-[210px] "
          >
            <p className="text-base font-inter w-fit sm:w-[240px]  sm:h-auto font-[650] leading-8 sm:m-auto mymob:w-[335px] mymob:text-center myiphone:w-[385px] myiphone:px-3 tablet:w-[606px] text-center tablet:mx-[61.5px] tablet:my-0 tablet:text-base tablet:px-0 desktop:w-[639px] desktop:h-[36.61px] desktop:text-base desktop:mx-[162.8px] xll:w-[690px] xll:h-[39.5px] xll:text-base xll:mx-auto text-[#6e54ae]  drop-shadow-xs biglap:text-xl biglap:w-[1000px]">
              Pricing
            </p>
            <p className="text-[28px] font-inter w-fit sm:w-[240px]  sm:h-[63px] font-[650] leading-8 sm:m-auto mymob:w-[335px] mymob:text-center myiphone:w-[385px] myiphone:px-3 tablet:w-[606px] tablet:h-[34px] tablet:mx-[61.5px] tablet:my-0 tablet:text-[26px] tablet:px-0 desktop:w-[639px] desktop:h-[36.61px] desktop:text-[30.5px] desktop:mx-[162.8px] xll:w-[690px] xll:h-[39.5px] xll:mx-auto text-[#1A1D1E]  drop-shadow-xs biglap:text-5xl biglap:w-[1000px]">
              Transparent, Flexible Pricing
            </p>

            <p className="sm:mt-[35px] mymob:mt-[15px] tablet:mt-1  mr-0 mb-0 ml-0 text-[#667085] font-inter sm:text-base sm:w-[280px] sm:h-[auto] mymob:w-[335px] myiphone:w-[385px] tablet:w-[90%] tablet:mx-auto desktop:w-[964px] xll:w-[50%] xll:mx-auto biglap:w-[60%] text-center font-[400] biglap:text-4xl">
              Enatega has a simple pricing model. No recurring subscriptions and
              no additional charges on delivery.{" "}
              <span className="text-[#6e54ae] font-semibold">
                Just pay once
              </span>{" "}
              and get the whole solution, no strings attached.
            </p>
          </motion.div>
          {/* Headind End */}

          {/* Div Both div Set Like Flex */}
          <div className="sm:mt-4 tablet:mt-8 desktop:flex desktop:items-center desktop:mx-8 iox:mx-40 biglap:mx-96">
            {/* Start Box 1 Most Popular */}
            <div className="border-none ring ring-blue-600 sm:w-[280px] sm:h-[920px] mymob:w-[335px] mymob:h-[850px] tablet:w-[584px] tablet:h-[690px] desktop:w-[449px] desktop:h-[760px] m-2 h-[700px] mx-auto rounded-2xl bg-[#F1F5F9] biglap:w-[584px] biglap:h-[720px]">
              <div className="mx-auto text-center p-2  bg-[#7C6CE4] rounded-t-2xl">
                <p className="font-inter font-bold text-[18px] text-white ">
                  Most Popular
                </p>
              </div>
              <div className=" m-3">
                <p className="py-1 px-[2px] bg-[#e7e9f5] text-[#313139] font-semibold w-[100px] rounded-full text-center text-xs font-inter">
                  Premium Plan
                </p>
                <div className=" mt-3 mb-4">
                  <p className="text-[#2c1d55] font-inter sm:w-[200px] tablet:w-full sm:text-3xl  font-bold">
                    Feature-Rich Delivery Suite
                  </p>
                  <p className="text-[#010203] text-[13px] mt-1 sm:w-[80%]  tablet:w-full desktop:w-[90%] italic font-inter  ">
                    Ideal for growing businesses seeking advanced features,
                    scalability and long-term value.
                  </p>
                </div>

                {/* Whole div 10 Rows */}
                <div className=" flex flex-col sm:space-y-4">
                  {/* 1st row */}
                  <div className="flex items-center space-x-1 px-1 ">
                    <span>
                      <FaCheck className="w-6 rounded-full p-[4px] h-auto mx-auto text-[#44a278] bg-[#d7fee0]" />{" "}
                    </span>
                    <p className="text-[14px] font-inter px-1 leading-[18px] text-[#6f737b]">
                      Modern and beautifully designed UI across all apps
                    </p>
                  </div>
                  {/* 1st row End */}

                  {/* 2nd row */}
                  <div className="flex items-center space-x-1 px-1 ">
                    <span>
                      <FaCheck className="w-6 rounded-full p-[4px] h-auto mx-auto text-[#44a278] bg-[#d7fee0]" />{" "}
                    </span>
                    <p className="text-[14px] font-inter px-1 leading-[18px] text-[#6f737b]">
                      Rich in features for smooth, scalable operations
                    </p>
                  </div>
                  {/* 2nd row End */}

                  {/* 3th row */}
                  <div className="flex items-center space-x-1 px-1 ">
                    <span>
                      <FaCheck className="w-6 rounded-full p-[4px] h-auto mx-auto text-[#44a278] bg-[#d7fee0]" />{" "}
                    </span>
                    <p className="text-[14px] font-inter px-1 leading-[18px] text-[#6f737b]">
                      Built using the latest and most efficient technology stack
                    </p>
                  </div>
                  {/* 3th row End */}

                  {/* 4th row */}
                  <div className="flex items-center space-x-1 px-1 ">
                    <span>
                      <FaCheck className="w-6 rounded-full p-[4px] h-auto mx-auto text-[#44a278] bg-[#d7fee0]" />{" "}
                    </span>
                    <p className="text-[14px] font-inter px-1 leading-[18px] text-[#6f737b]">
                      Includes Admin, Rider, Restaurant,Web and Customer app
                    </p>
                  </div>
                  {/* 4th row End */}

                  {/* 5th row */}
                  <div className="flex items-center space-x-1 px-1 ">
                    <span>
                      <FaCheck className="w-6 rounded-full p-[4px] h-auto mx-auto text-[#44a278] bg-[#d7fee0]" />{" "}
                    </span>
                    <p className="text-[14px] font-inter px-1 leading-[18px] text-[#6f737b]">
                      Full Source Code provided upon purchase.
                    </p>
                  </div>
                  {/* 5th row End */}

                  {/* 6th row */}
                  <div className="flex items-center space-x-1 px-1 ">
                    <span>
                      <FaCheck className="w-6 rounded-full p-[4px] h-auto mx-auto text-[#44a278] bg-[#d7fee0]" />{" "}
                    </span>
                    <p className="text-[14px] font-inter px-1 leading-[18px] text-[#6f737b]">
                      No hidden charges, subscription fees, or delivery-based
                      costs
                    </p>
                  </div>
                  {/* 6th row End */}

                  {/* 7th row */}
                  <div className="flex items-center space-x-1 px-1 ">
                    <span>
                      <FaCheck className="w-6 rounded-full p-[4px] h-auto mx-auto text-[#44a278] bg-[#d7fee0]" />{" "}
                    </span>
                    <p className="text-[14px] font-inter px-1 leading-[18px] text-[#6f737b]">
                      No Additional Charges per Delivery
                    </p>
                  </div>
                  {/* 7th row End */}

                  {/* 8th row */}
                  <div className="flex items-center space-x-1 px-1 ">
                    <span>
                      <FaCheck className="w-6 rounded-full p-[4px] h-auto mx-auto text-[#44a278] bg-[#d7fee0]" />{" "}
                    </span>
                    <p className="text-[14px] font-inter px-1 leading-[18px] text-[#6f737b]">
                      Lifetime Access to all Future Updates
                    </p>
                  </div>
                  {/* 8th row End */}

                  {/* 9th row */}
                  <div className="flex items-center space-x-1 px-1 ">
                    <span>
                      <FaCheck className="w-6 rounded-full p-[4px] h-auto mx-auto text-[#44a278] bg-[#d7fee0]" />{" "}
                    </span>
                    <p className="text-[14px] font-inter px-1 leading-[18px] text-[#6f737b]">
                      Openly Available Documentation and Tutorials
                    </p>
                  </div>
                  {/* 9th row End */}

                  {/* 10th row */}
                  <div className="flex items-center space-x-1 px-1 ">
                    <span>
                      <FaCheck className="w-6 rounded-full p-[4px] h-auto mx-auto text-[#44a278] bg-[#d7fee0]" />{" "}
                    </span>
                    <p className="text-[14px] font-inter px-1 leading-[18px] text-[#6f737b]">
                      Free 2 hours technical consultation with Enatega
                      developers
                    </p>
                  </div>
                  {/* 10th row End */}
                </div>
                {/* WHole 10 Rows End */}
              </div>

              {/* Link Create  */}
              <div className="w-[90%] mx-auto mt-8">
                <span className=" bg-[#7261e3] w-full flex items-center justify-center space-x-2 shadow-lg inset-shadow-xl m-1 sm:py-1 tablet:py-2 border-b-[2.5px] border-b-[#483d9b]  border-[2px] border-[#483d9b] border-t-[#968be0] text-center text-[#e5ddff] rounded-md sm:mx-auto tablet:mx-0 drop-shadow-lg">
                  <Link
                    to="/contactus"
                    className=" tablet:text-sm font-semibold font-inter text-white"
                  >
                    Schedule a Call Now
                  </Link>
                </span>

                {/* View Demo && View Github */}
                <div className="flex items-center justify-between ">
                  {/* 1st Link */}
                  <span className="w-[49%] bg-[#ffffff] flex items-center sm:py-1 tablet:py-2  justify-center space-x-2 shadow-lg inset-shadow-xl m-1 py-1 border-[0.3px] border-[#c0c0c0] text-center text-[#212322] rounded-md sm:mx-auto tablet:mx-0 drop-shadow-lg">
                    <a
                      href="#dasboardsection"
                      className="text-xs p-1 font-semibold font-inter text-[#1A1D1E]"
                    >
                      View Demo
                    </a>
                  </span>

                  {/* 2nd Link */}
                  <span className="w-[49%]  bg-[#ffffff] flex sm:py-1 tablet:py-2  items-center justify-center space-x-2 shadow-lg inset-shadow-xl m-1 py-1 border-[0.3px] border-[#c0c0c0] text-center text-[#1A1D1E] rounded-md sm:mx-auto tablet:mx-0 drop-shadow-lg">
                    <Link
                      to="https://github.com/enatega/food-delivery-multivendor/"
                      className="text-xs p-1 font-semibold font-inter"
                      target="blank"
                    >
                      View Github Repo
                    </Link>
                  </span>
                </div>
              </div>
              {/* End View Demo && View Github */}
            </div>

            {/* 2nd box "Enterprise Plan" */}

            <div className="sm:mt-6 desktop:mt-0 border-none ring-2 ring-blue-700 sm:w-[280px] sm:h-[780px] mymob:w-[335px] mymob:h-[705px] tablet:w-[584px] tablet:h-[540px] desktop:w-[449px] desktop:h-[605px] m-2 h-[700px] mx-auto rounded-2xl bg-[#17114F]  biglap:w-[584px] biglap:h-[560px]">
              {/* Heading */}
              <div className=" m-3 pt-5">
                <p className="py-1 px-[2px] bg-[#e7e9f5] text-[#313139] font-semibold w-[100px] rounded-full text-center text-xs font-inter">
                  Enterprise Plan
                </p>
                <div className=" mt-3 mb-4">
                  <p className="text-white  sm:w-[200px] font-inter tablet:w-full sm:text-3xl font-bold">
                    Custom Plan – Tailored for You
                  </p>
                  <p className="text-white text-[13px] mt-1 sm:w-[80%] tablet:w-full italic font-inter">
                    Best for enterprises that need advanced features and
                    deployment support.
                  </p>
                </div>

                <div className=" flex flex-col sm:space-y-4">
                  <div className="flex items-center space-x-1 px-1 ">
                    <span>
                      <FaCheck className="w-6 rounded-full p-[4px] h-auto mx-auto text-[#44a278] bg-[#d7fee0]" />{" "}
                    </span>
                    <p className="text-[14px] font-inter px-1 leading-[18px] text-white">
                      Everything in Premium Plan + Custom deployment and
                      development
                    </p>
                  </div>
                  {/* 1st row End */}

                  {/* 2nd row */}
                  <div className="flex items-center space-x-1 px-1 ">
                    <span>
                      <FaCheck className="w-6 rounded-full p-[4px] h-auto mx-auto text-[#44a278] bg-[#d7fee0]" />{" "}
                    </span>
                    <p className="text-[14px] font-inter px-1 leading-[18px] text-white">
                      Custom Pricing (Installments Available - Pay only for
                      deployment and modifications upfront)
                    </p>
                  </div>
                  {/* 2nd row End */}

                  {/* 3th row */}
                  <div className="flex items-center space-x-1 px-1 ">
                    <span>
                      <FaCheck className="w-6 rounded-full p-[4px] h-auto mx-auto text-[#44a278] bg-[#d7fee0]" />{" "}
                    </span>
                    <p className="text-[14px] font-inter px-1 leading-[18px] text-white">
                      Feature integration tailored to your business needs
                    </p>
                  </div>
                  {/* 3th row End */}

                  {/* 4th row */}
                  <div className="flex items-center space-x-1 px-1 ">
                    <span>
                      <FaCheck className="w-6 rounded-full p-[4px] h-auto mx-auto text-[#44a278] bg-[#d7fee0]" />{" "}
                    </span>
                    <p className="text-[14px] font-inter px-1 leading-[18px] text-white">
                      Full system modification as per your requirements
                    </p>
                  </div>
                  {/* 4th row End */}

                  {/* 5th row */}
                  <div className="flex items-center space-x-1 px-1 ">
                    <span>
                      <FaCheck className="w-6 rounded-full p-[4px] h-auto mx-auto text-[#44a278] bg-[#d7fee0]" />{" "}
                    </span>
                    <p className="text-[14px] font-inter px-1 leading-[18px] text-white">
                      Continuous collaboration with Enatega developers
                    </p>
                  </div>
                  {/* 5th row End */}

                  {/* 6th row */}
                  <div className="flex items-center space-x-1 px-1 ">
                    <span>
                      <FaCheck className="w-6 rounded-full p-[4px] h-auto mx-auto text-[#44a278] bg-[#d7fee0]" />{" "}
                    </span>
                    <p className="text-[14px] font-inter px-1 leading-[18px] text-white">
                      Advanced support and personalized technical guidance
                    </p>
                  </div>
                  {/* 6th row End */}

                  {/* 7th row */}
                  <div className="flex items-center space-x-1 px-1 ">
                    <span>
                      <FaCheck className="w-6 rounded-full p-[4px] h-auto mx-auto text-[#44a278] bg-[#d7fee0]" />{" "}
                    </span>
                    <p className="text-[14px] font-inter px-1 leading-[18px] text-white">
                      Development handled by Ninjas Code
                    </p>
                  </div>
                  {/* 7th row End */}
                </div>
                {/* Whole 7th rows End */}
              </div>

              {/* Link Create Two  */}
              <div className="w-[90%] mx-auto mt-8">
                <span className=" bg-[#7261e3] w-full flex items-center justify-center space-x-2 shadow-lg inset-shadow-xl m-1 sm:py-1 tablet:py-2 border-[2.5px] border-[#493c9c] border-t-[#968be0] text-center text-[#e5ddff] rounded-md sm:mx-auto tablet:mx-0 drop-shadow-2xl">
                  {/* Link One "Schedule a Call Now" */}
                  <Link
                    to="/contactus"
                    className=" tablet:text-sm font-semibold font-inter text-white"
                  >
                    Schedule a Call Now
                  </Link>
                </span>

                {/* Link Two "Visit NinjasCode"*/}
                <span className="sm:mt-1 w-full bg-[#ffffff] flex items-center justify-center space-x-2 shadow-lg inset-shadow-xl m-1 sm:py-1 tablet:py-2 border-b-2 border-r-2 border-l-2 border-gray-400 text-center text-[#212322] rounded-md sm:mx-auto tablet:mx-0 drop-shadow-2xl">
                  <Link
                    to="https://ninjascode.com/?_gl=1*1neg16o*_gcl_au*MTEzMTAxNDc0OC4xNzUyMTE4MTc0LjI4MjU2MTE4Mi4xNzUzMTA2ODQzLjE3NTMxMDY4NDM."
                    className="tablet:text-sm font-semibold font-inter text-black"
                    target="blank"
                  >
                    Visit NinjasCode
                  </Link>
                </span>
              </div>
              {/* End View Demo && View Github */}
            </div>

            {/* 2nd box "Enterprise Plan"*/}
          </div>
          {/* Div end Set Both Two 1st & 2nd Box */}
        </div>
      </section>
      {/* End Section 12  */}

      {/* Section 13 "User Detail Form" */}
      <div className="sm:mt-10 tablet:mt-20 border border-[#e0e9f2] border-t-[8px] border-t-[#e0e9f2] sm:w-[96%] sm:h-full sm:max-h-[1200px] tablet:h-full tablet:max-h-[1250px] iox:w-[88%] sm:p-2 mx-auto desktop:flex desktop:justify-between desktop:items-center desktop:px-6 iox:px-14 desktop:py-2 biglap:px-72">
        <div className="">
          <div className="mt-6 px-3 ">
            <p className="text-[#212224] font-bold sm:text-3xl tablet:text-4xl">
              <span className="text-[#6b4bdc]">Enatega </span>Strategy Call
            </p>
          </div>
          <div className="w-full desktop:w-[400px] iox:w-[450px] biglap:w-[800px] mt-4 mx-auto relative ">
            {!showVideo2 ? (
              <div className="">
                <img
                  loading="lazy"
                  src="/Pictures/Thumbnail.png"
                  alt="Video Thumbnail"
                  className="sm:w-full sm:max-w-[400px] tablet:w-full tablet:max-w-[98%] desktop:w-full desktop:max-w-[391px] iox:w-full iox:max-w-[467px] iox:h-[346px] biglap:w-full biglap:max-w-[750px] biglap:h-auto desktop:h-auto tablet h-full max-h-[600px]"
                />
                <button
                  onClick={handlePlay2}
                  className="absolute cursor-pointer sm:h-5 sm:top-[51%] sm:left-[50.7%] text-[#d0cbe9] transform -translate-x-1/2 -translate-y-1/2 w-[20px] mymob:left-[50.7%] mymob:top-[51.2%] tablet:w-7 tablet:h-7 tablet:top-[51.3%] tablet:left-[49.5%] desktop:top-[51.5%] iox:left-[50.5%] biglap:left-[47.5%] biglap:top-[51%] rounded-full  flex items-center justify-center "
                ></button>
              </div>
            ) : (
              <iframe
                loading="lazy"
                src="https://player.vimeo.com/video/1100632870?h=783a0e36ce&autoplay=1&controls=1"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="vimeo-player"
                className="sm:w-full sm:max-w-[400px]  sm:h-[215px]  tablet:w-full tablet:max-w-[600px] tablet:h-[400px] mx-auto desktop:w-full desktop:max-w-[391px] desktop:h-[291px] iox:w-full iox:max-w-[467px] iox:h-[346px] biglap:w-full biglap:max-w-[750px] biglap:h-[558px] rounded-md"
              ></iframe>
            )}
          </div>
        </div>
        {/* end box 1 */}

        <div className="sm:w-full sm:max-w-[400px] px-1 tablet:w-full tablet:max-w-[98%] tablet:px-3 desktop:w-full desktop:max-w-[500px] iox:w-full iox:max-w-[600px] biglap:w-full biglap:max-w-[820px] biglap:h-[750px] desktop:h-auto tablet sm:mt-8">
          <div>
            <button
              onClick={() => {
                setFormHalf2(false);

                setFormHalf1(true);
              }}
              className={
                formHalf1
                  ? "bg-[#6c4bfb] w-10 h-[6px]  ml-1 rounded-full"
                  : "bg-[#dddddd]  w-10 h-[6px]  ml-1 rounded-full"
              }
            ></button>
            <button
              onClick={() => {
                if (
                  formData.UserName.trim() === "" ||
                  formData.UserEmail.trim() === "" ||
                  formData.CellNo.trim() === ""
                ) {
                  alert("Please fill all required fields");
                } else {
                  // If filled, move to form half 2
                  setFormHalf1(false);
                  setFormHalf2(true);
                }
              }}
              className={
                formHalf2
                  ? "bg-[#6c4bfb] w-10 h-[6px] ml-3 rounded-full"
                  : "bg-[#dddddd]  w-10 h-[6px] ml-3 rounded-full"
              }
            ></button>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 ">
            {formHalf1 && (
              <>
                <div className="my-4">
                  <label
                    htmlFor=""
                    className="sm:text-sm font-[600] font-inter text-[1A1D1E] biglap:text-xl"
                  >
                    Name
                  </label>{" "}
                  <br />
                  <input
                    type="text"
                    name="UserName"
                    id="UserName"
                    onChange={handleChange}
                    placeholder="Full name"
                    className="sm:w-[250px] sm:h-10 mymob:w-[340px] mymob:h-11 myiphone:w-[380px] tablet:w-[686px] desktop:w-[478px] iox:w-[570px] biglap:w-[800px] h-6 rounded-md border-[0.5px] border-[#d4d3d8] mt-1 sm:px-2 desktop:px-4 biglap:my-2"
                    required
                  />
                </div>

                {/* Email */}
                <div className="my-4">
                  <label
                    htmlFor=""
                    className="sm:text-sm font-[600] font-inter text-[1A1D1E] biglap:text-xl "
                  >
                    Email
                  </label>{" "}
                  <br />
                  <input
                    type="email"
                    name="UserEmail"
                    id="UserEmail"
                    placeholder="you@example.com"
                    onChange={handleChange}
                    className="sm:w-[250px] sm:h-10 mymob:w-[340px] mymob:h-11 myiphone:w-[380px] tablet:w-[686px] desktop:w-[478px] iox:w-[570px] biglap:w-[800px] h-6 rounded-md border-[0.5px] border-[#d4d3d8] mt-1 sm:px-2 desktop:px-4 biglap:my-2"
                    required
                  />
                </div>

                {/* Phone number */}
                <div>
                  <label
                    htmlFor="CellNo"
                    className="sm:text-sm font-[600]  text-[1A1D1E] biglap:text-xl "
                  >
                    Phone Number
                  </label>{" "}
                  <br />
                  <PhoneInput
                    country={"Pakistan"}
                    onChange={handleChangePhone}
                    inputProps={{
                      name: "CellNo",
                      required: true,
                      id: "id",
                    }}
                    containerClass="sm:w-[250px] sm:h-10 mymob:w-[340px] mymob:h-11 tablet:w-[686px] desktop:w-[476px] iox:w-[570px] mt-1 biglap:w-[800px] "
                    inputClass="sm:w-[250px] sm:h-10 mymob:w-[340px] mymob:h-11  myiphone:w-[380px] tablet:w-[686px] desktop:w-[476px] iox:w-[570px] biglap:w-[800px] h-6 rounded-md border-[0.5px] border-[#d4d3d8]"
                  />
                </div>

                {/* Verify  */}
                <div className="mt-4 sm:w-[250px] mymob:w-[320px] myiphone:w-[380px] tablet:flex tablet:items-center tablet:space-x-4 tablet:w-[686px] desktop:block desktop:w-[476px] iox:w-[570px] biglap:w-[800px] biglap:my-8 h-auto">
                  <input
                    type="checkbox"
                    className=" h-3 rounded-md desktop:my-1"
                    required
                  />
                  <br />
                  <label
                    htmlFor=""
                    className="sm:text-[16px] font-inter text-[1A1D1E]"
                  >
                    I agree to receive automated follow-up, reminder, and
                    promotional messages with varying frequency. Text and data
                    rates may apply. Reply{" "}
                    <span className="italic">“Stop”</span> to end. Text{" "}
                    <span className="italic">“Help” </span> for help.
                  </label>{" "}
                </div>

                {/* Verify  */}
                <div className="mt-4 sm:w-[250px] mymob:w-[320px] myiphone:w-[380px] tablet:flex tablet:items-center tablet:space-x-4 tablet:w-[686px] desktop:block desktop:w-[570px] iox:w-[576px]  biglap:w-[800px] biglap:my-8 h-auto">
                  <input
                    type="checkbox"
                    className=" h-3 rounded-md desktop:my-1"
                    required
                  />
                  <br />
                  <label
                    htmlFor=""
                    className="sm:text-[16px] font-inter text-[1A1D1E] "
                  >
                    I have read the{" "}
                    <span className="text-[#0607b9]">Terms of Service</span> and{" "}
                    <span className="text-[#0607b9]"> Privacy Policy</span>.
                  </label>{" "}
                </div>

                {/* Next Step  */}
                <div className="my-6">
                  <span className="sm:mt-4 bg-[#7564e4] cursor-pointer flex items-center justify-center space-x-2 font-semibold shadow-sm  border-2 border-[#968be0] text-center text-white sm:w-[120px]  h-auto sm:py-2 tablet:w-[140px] tablet:mt-0 desktop:py-[7px] rounded-md tablet:mx-0">
                    <button
                      onClick={() => {
                        if (
                          formData.UserName.trim() === "" ||
                          formData.UserEmail.trim() === "" ||
                          formData.CellNo.trim() === ""
                        ) {
                          alert("Please fill all required fields");
                        } else {
                          setFormHalf1(false);
                          setFormHalf2(true);
                        }
                      }}
                      className="sm:text-sm cursor-pointer tablet:text-base font-inter text-white"
                    >
                      Next Step
                    </button>
                    <Link>
                      <BsArrowRight className="sm:mt-[2px] ml-0 " />
                    </Link>
                  </span>
                </div>
              </>
            )}
            {formHalf2 && (
              <>
                {" "}
                <div className="sm:w-[80%] py-2 mymob:w-[95%]">
                  <label
                    htmlFor=""
                    className="sm:text-sm mymob:text-[15px] font-inter text-[1A1D1E] biglap:text-xl"
                  >
                    What stage are you at in the development process?
                  </label>{" "}
                  <br />
                  <select
                    onChange={handleChange}
                    id="Stagedevelop"
                    name="Stagedevelop"
                    className="sm:w-[250px] sm:h-10 mymob:w-[340px] mymob:h-11 myiphone:w-[380px] tablet:w-[686px] desktop:w-[478px] iox:w-[570px] biglap:w-[800px] h-6 rounded-md border-[0.5px] border-[#d4d3d8] mt-1 sm:px-2 desktop:px-4 biglap:my-2"
                    required
                  >
                    <option value="" className="font-inter sm:w-[248px]">
                      Select an option
                    </option>
                    <option value="Just exploring / gathering information">
                      Just exploring / gathering information
                    </option>
                    <option value="Have a clear idea and ready to start">
                      Have a clear idea and ready to start
                    </option>
                    <option value="Already have a design / prototype">
                      Already have a design / prototype
                    </option>
                    <option value="I am ready to launch ASAP and want access to your pre-built app">
                      I am ready to launch ASAP and want access to your
                      pre-built app
                    </option>
                  </select>
                </div>
                <div className="sm:w-[80%] py-2 mymob:w-[95%]">
                  <label
                    htmlFor=""
                    className="sm:text-sm mymob:text-[15px] font-inter text-[1A1D1E] "
                  >
                    Do you have a budget allocated for this project?
                  </label>
                  <br />
                  <select
                    onChange={handleChange}
                    id="Budget"
                    name="Budget"
                    className="sm:w-[248px] mymob:w-[340px] mymob:h-12 myiphone:w-[380px] tablet:w-[686px] desktop:w-[476px] iox:w-[570px] biglap:w-[800px] border-[0.5px] border-[#d4d3d8] mt-1 sm:h-12 sm:p-3 font-inter text-base text-[1A1D1E] h-6 rounded-md "
                    required
                  >
                    <option value="">Select Budget</option>
                    <option value="Yes-Less than $3000">
                      Yes-Less than $3,000
                    </option>
                    <option value="Yes-$3000-$10,000">Yes-$3000-$10,000</option>
                    <option value="Yes-$10,000-$15,000">
                      Yes-$10,000-$15,000
                    </option>
                    <option value="Yes-Over $15000">Yes-Over $15000</option>
                    <option value="Not yet,but exploring option">
                      Not yet,but exploring option
                    </option>
                  </select>
                </div>
                <div className="sm:w-[80%] py-2 mymob:w-[95%]">
                  <label
                    htmlFor=""
                    className="sm:text-sm mymob:text-[15px] font-inter text-[1A1D1E] "
                  >
                    Where are you planning to launch your app?
                  </label>
                  <br />
                  <select
                    onChange={handleChange}
                    id="Region"
                    name="Region"
                    className="sm:w-[248px] mymob:w-[340px] mymob:h-12  myiphone:w-[380px] tablet:w-[686px] desktop:w-[476px] iox:w-[570px]  biglap:w-[800px] border-[0.5px] border-[#d4d3d8] mt-1 sm:h-12 sm:p-3 font-inter text-base text-[1A1D1E] h-6 rounded-md "
                    required
                  >
                    <option value="">Select Region</option>
                    <option value="United States/Canada">
                      United States/Canada
                    </option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Europe (Non-UK)">Europe (Non-UK)</option>
                    <option value="Middle East">Middle East</option>
                    <option value="Asia">Asia</option>
                    <option value="Africa">Africa</option>
                    <option value="Latin America">Latin America</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="sm:w-[80%] py-2 mymob:w-[95%]">
                  <label
                    htmlFor=""
                    className="sm:text-sm mymob:text-[15px] font-inter text-[1A1D1E] "
                  >
                    What industry do you belong to?
                  </label>
                  <br />
                  <select
                    onChange={handleChange}
                    id="Industry"
                    name="Industry"
                    className="sm:w-[248px] mymob:w-[340px] mymob:h-12 myiphone:w-[380px] tablet:w-[686px] desktop:w-[476px] iox:w-[570px] biglap:w-[800px]  border-[0.5px] border-[#d4d3d8] mt-1 sm:h-12 sm:p-3 font-inter text-base text-[1A1D1E] h-6 rounded-md "
                    required
                  >
                    <option defaultValue="">Select Your industry</option>
                    <option value="Food Delivery">Food Delivery</option>
                    <option value="Grocery Delivery">Grocery Delivery</option>
                    <option value="Liquor Delivery">Liquor Delivery</option>
                    <option value="Pharmacy Delivery">Pharmacy Delivery</option>
                    <option value="Courier/Logistics">Courier/Logistics</option>
                    <option value="Laundry Services">Laundry Services</option>
                    <option value="Beauty & Wellness">Beauty & Wellness</option>
                    <option value="Pet Supplies">Pet Supplies</option>
                    <option value="Flower Delivery">Flower Delivery</option>
                    <option value="Landscaping / Gardening">
                      Landscaping / Gardening
                    </option>
                    <option value="Other (please specify)">
                      Other (please specify)
                    </option>
                  </select>
                </div>
                <div className="sm:w-[80%] py-2 mymob:w-[95%]">
                  <label
                    htmlFor=""
                    className="sm:text-sm mymob:text-[15px] font-inter text-[1A1D1E] "
                  >
                    Who will be involved in the decision-making process for this
                    project?
                  </label>
                  <br />
                  <select
                    onChange={handleChange}
                    id="DecisonMaking"
                    name="DecisonMaking"
                    className="sm:w-[248px] mymob:w-[340px] mymob:h-12  myiphone:w-[380px] tablet:w-[686px] desktop:w-[476px] iox:w-[570px] biglap:w-[800px] border-[0.5px] border-[#d4d3d8] mt-1 sm:h-12 sm:p-3 font-inter text-base text-[1A1D1E] h-6 rounded-md "
                    required
                  >
                    <option value="">Select an Option</option>
                    <option value="Just me – I’m the sole decision maker">
                      Just me – I’m the sole decision maker
                    </option>
                    <option value="Me and a business partner">
                      Me and a business partner
                    </option>
                    <option value="Our executive team / company leadership">
                      Our executive team / company leadership
                    </option>
                    <option value="I’m gathering info for someone else">
                      I’m gathering info for someone else
                    </option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>
                <div className="sm:w-[80%] py-2 mymob:w-[95%] ">
                  <label
                    htmlFor=""
                    className="sm:text-sm mymob:text-[15px] font-inter text-[1A1D1E] "
                  >
                    How did you hear about us?
                  </label>
                  <br />
                  <select
                    onChange={handleChange}
                    id="Aboutus"
                    name="Aboutus"
                    className="sm:w-[248px] mymob:w-[340px] mymob:h-12 myiphone:w-[380px] tablet:w-[686px] desktop:w-[476px] iox:w-[570px] biglap:w-[800px] border-[0.5px] border-[#d4d3d8] mt-1 sm:h-12 sm:p-3 font-inter text-base text-[1A1D1E] h-6 rounded-md  "
                    required
                  >
                    <option value="">Select an Option</option>
                    <option value="Google Search">Google Search</option>
                    <option value="GitHub">GitHub</option>
                    <option value="ChatGPT">ChatGPT</option>
                    <option value="Facebook/Instagram">
                      Facebook/Instagram
                    </option>
                    <option value="Referral">Referral</option>
                    <option value="Comparison Site & Blog">
                      Comparison Site & Blog
                    </option>
                    <option value="Product Hunt">Product Hunt</option>
                    <option value="Other (Please Specify)">
                      Other (Please Specify)
                    </option>
                  </select>
                </div>
                {/* end label and input */}
                {/* Back   */}
                <div className=" flex justify-between sm:w-[250px] mymob:w-[320px] myiphone:w-[380px] tablet:w-[686px] desktop:w-[476px] iox:w-[570px] biglap:w-[800px] h-[60px] mt-4 biglap:mt-14">
                  <span className=" bg-white cursor-pointer flex items-center justify-center space-x-2 border-2 border-[#e8e8e8] text-center text-black sm:w-[100px] sm:h-10 mymob:w-[150px] myiphone:w-[180px] tablet:w-[340px] tablet:mt-0 desktop:py-[7px] desktop:w-[230px] iox:w-[280px] biglap:w-[390px] rounded-md tablet:mx-0 ">
                    <Link>
                      <BsArrowLeft className="sm:mt-[2px]  " />
                    </Link>
                    <button
                      onClick={() => {
                        setFormHalf1(true);
                        setFormHalf2(false);
                      }}
                      className="sm:text-sm cursor-pointer mymob:text-base font-inter"
                    >
                      Back
                    </button>
                  </span>

                  {/* Schedule Event */}
                  <span className=" bg-[#7564e4] cursor-pointer flex items-center justify-center space-x-2 border-[2px]  border-[#968be0] text-center text-white sm:w-[120px] sm:h-10 mymob:w-[150px] myiphone:w-[180px] tablet:w-[340px] desktop:w-[230px] iox:w-[280px] biglap:w-[390px] tablet:mt-0 desktop:py-[7px] rounded-md tablet:mx-0 ">
                    <button
                      type="submit"
                      onClick={() => {
                        if (
                          formData.UserName.trim() === "" ||
                          formData.UserEmail.trim() === "" ||
                          formData.CellNo.trim() === "" ||
                          formData.Stagedevelop.trim() === "" ||
                          formData.Budget.trim() === "" ||
                          formData.Region.trim() === "" ||
                          formData.Industry.trim() === "" ||
                          formData.DecisonMaking.trim() === "" ||
                          formData.Aboutus.trim() === ""
                        ) {
                          alert("Please fill all required fields");
                        } else {
                          setFormHalf1(false);
                          setFormHalf2(true);
                        }
                      }}
                      className="sm:text-sm cursor-pointer mymob:text-base font-inter text-white"
                    >
                      Schedule Event
                    </button>
                  </span>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
      {/* Section 13 End */}

      {/*  Section 14 "Frequently Asked Question" */}

      <div className="sm:mt-10 tablet:mt-14 biglap:mt-20 ">
        <div className="sm:my-10 text-[#1A1D1E] desktop:px-6 iox:px-24 biglap:px-42">
          <p className="sm:text-2xl tablet:text-3xl desktop:text-4xl sm:text-center desktop:text-left font-bold  font-inter">
            Frequently Asked Question
          </p>
        </div>

        {FaqQuestion.map((question, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={question.id}
              className="sm:px-1 desktop:px-4 iox:px-24 biglap:px-42 h-full max-h-[500px]"
            >
              <div
                className="flex sm:items-center myiphone:w-[96%] justify-between iox:space-x-10"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <div className="flex items-center">
                  <span className="text-[#949494] font-normal sm:text-[12px] mymob:text-[14px] tablet:text-[16px] biglap:text-3xl font-inter ">
                    {question.title.slice(0, 3)}
                  </span>
                  <p className="sm:text-[12px] mymob:text-[14px] tablet:text-[16px] desktop:text-lg sm:w-[260px] mymob:w-[300px] myiphone:w-[320px] tablet:w-[600px] iox:ml-7 biglap:text-3xl font-inter font-semibold text-[#1A1D1E] cursor-pointer sm:ml-4 tablet:ml-2 desktop:w-[850px] desktop:ml-3 iox:w-[1050px]">
                    {question.title.slice(3)}
                  </p>
                </div>

                {/* Icons */}
                <div className="">
                  <span className={!isOpen ? "flex cursor-pointer" : "hidden"}>
                    <FaPlus />
                  </span>
                  <span className={isOpen ? "flex cursor-pointer" : "hidden"}>
                    <FiMinus />
                  </span>
                </div>
              </div>

              <p
                className={
                  isOpen
                    ? " sm:mx-auto flex my-1 text-[#222222] font-inter sm:px-2 mymob:px-1 tablet:px-1 sm:w-[260px] mymob:w-[300px] myiphone:w-[400px] tablet:w-[700px] desktop:w-[930px] iox:px-0 iox:w-full iox:max-w-[1050px] iox:mx-auto  biglap:text-2xl biglap:w-full biglap:max-w-[2080px] "
                    : "hidden"
                }
              >
                {question.paragraph}
              </p>
              <hr className="text-[#d8d8d8] my-4" />
            </div>
          );
        })}
      </div>

      {/* Section 14 End */}

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

export default Navbar;
