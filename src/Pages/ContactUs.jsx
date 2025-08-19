import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SidebarData from "../Component/Sidebardata";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import {IoMdMenu,IoMdClose,IoIosArrowDown,IoIosArrowUp,} from "react-icons/io";
import { supabase } from "../Database/Supabase";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { TiSocialFacebook, TiSocialLinkedin,TiArrowSortedDown  } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";

// ContactUs
function ContactUs() {
  // useState
  const [sidebar, setSidebar] = useState(false);
  const [caseStudiesbar, setCaseStudies] = useState(false);
  const [useCasebar, setUseCase] = useState(false);
  const [caseshow, setcaseshow] = useState(false);
  const [boxShow, setBoxShow] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [openModel, setopenModel] = useState(false);
  const [userData, setUserData] = useState([]);
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
  const [formHalf1, setFormHalf1] = useState(true);
  const [formHalf2, setFormHalf2] = useState(false);

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

  // Video Play
  const handlePlay = () => {
    setShowVideo(true);
  };

  useEffect(() => {
    if (openModel) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "scroll";
    }
  }, [openModel]);

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

      {/* Section 1 Start Login Form*/}
      <div className="sm:mt-40 sm:mb-30 tablet:mb-40 desktop:mt-50  border border-[#e0e9f2] border-t-[8px] border-t-[#e0e9f2] sm:w-[96%] sm:h-full sm:max-h-[1200px] tablet:h-full tablet:max-h-[1250px] iox:w-[88%] sm:p-2 mx-auto desktop:flex desktop:justify-between desktop:items-center desktop:px-6 iox:px-14 desktop:py-2 biglap:px-72">
        <div className="">
          <div className="mt-6 px-3 ">
            <p className="text-[#212224] font-bold sm:text-3xl tablet:text-4xl">
              <span className="text-[#6b4bdc]">Enatega </span>Strategy Call
            </p>
          </div>
          <div className="w-full desktop:w-[400px] iox:w-[450px] biglap:w-[800px] mt-4 mx-auto relative ">
            {!showVideo ? (
              <div className="">
                <img
                  src="/Pictures/Thumbnail.png"
                  alt="Video Thumbnail"
                  className="sm:w-full sm:max-w-[400px] tablet:w-full tablet:max-w-[98%] desktop:w-full desktop:max-w-[391px] iox:w-full iox:max-w-[467px] iox:h-[346px] biglap:w-full biglap:max-w-[750px] biglap:h-auto desktop:h-auto tablet h-full max-h-[600px]"
                />
                <button
                  onClick={handlePlay}
                  className="absolute cursor-pointer sm:h-5 sm:top-[51%] sm:left-[50.7%] text-[#d0cbe9] transform -translate-x-1/2 -translate-y-1/2 w-[20px] mymob:left-[50.7%] mymob:top-[51.2%] tablet:w-7 tablet:h-7 tablet:top-[51.3%] tablet:left-[49.5%] desktop:top-[51.5%] iox:left-[50.5%] biglap:left-[47.5%] biglap:top-[51%] rounded-full  flex items-center justify-center "
                >
                  ..
                </button>
              </div>
            ) : (
              <iframe
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

export default ContactUs;
