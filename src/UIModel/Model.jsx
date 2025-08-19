import { createPortal } from "react-dom";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import { FcAndroidOs } from "react-icons/fc";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";

function Model({ closeup, children }) {
  return createPortal(
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-opacity-50 z-40"
        style={{ background: "rgba(50%,50%,50%,0.6)" }}
        onClick={closeup}
      ></div>

      {/* Modal Content */}
      <div className="z-[9999] fixed sm:top-75  mymob:top-1/2 tablet:top-[53.5%]  left-1/2  transform -translate-x-1/2 -translate-y-1/2 bg-white p-6  rounded-2xl shadow-lg sm:w-full sm:max-w-[80%] mymob:w-full mymob:max-w-[90%] sm:h-[440px] mymob:h-auto myiphone:h-auto mymob:py-12 tablet:py-6  sm:mt-8 tablet:w-full tablet:max-w-[500px] tablet:h-auto desktop:h-auto desktop:w-full desktop:max-w-[600px] sm:overflow-y-scroll mymob:overflow-hidden ">
        <div className="">
          <button
            onClick={closeup}
            className="absolute top-3 sm:right-2 myiphone:right-3 myiphone:top-3 right-6 z-50 cursor-pointer font-bold text-black rounded"
          >
            <IoCloseSharp className="w-7 h-7 font-bold" />
          </button>
        </div>

        <div className="w-[70px] h-[70px] absolute top-0 left-0 bg-[#d7c0f3] blur-[35px] rounded-full shadow-2xl "></div>
        <div className="w-[70px] h-[70px] absolute top-0 right-0 bg-[#d7c0f3] blur-[50px] rounded-full shadow-2xl "></div>
        <div className="w-[70px] h-[70px] absolute bottom-0 left-0 bg-[#d7c0f3] blur-[35px] rounded-full shadow-2xl "></div>
        <div className="w-[70px] h-[70px] absolute bottom-0 right-0 bg-[#d7c0f3] blur-[35px] rounded-full shadow-2xl "></div>

        {children}
        <p className="text-center font-serif mt-2 text-[#475569]">Demo Links</p>
        <div className="tablet:flex tablet:items-center tablet:justify-evenly tablet:w-[400px] mx-auto">
          <div className="sm:my-5 flex items-center sm:w-54 sm:space-x-4 mymob:space-x-8 mx-auto mymob:mt-7 myiphone:mt-10 tablet:mt-6 ">
            <span className="text-base font-inter flex border border-slate-300 sm:w-28 mymob:w-32 tablet:w-32  rounded-xl hover:scale-102">
              <Link
                to="https://apps.apple.com/us/app/enatega-multivendor/id1526488093"
                target="blank"
                className="flex space-x-2  px-2 py-1 mx-auto my-1 font-semibold"
              >
                <FaApple className="w-5 h-5" /> &nbsp;IOS
              </Link>
            </span>
            <span className="text-base font-inter flex border border-slate-300  sm:w-28 mymob:w-32 tablet:w-32 rounded-xl hover:scale-102">
              <Link
                to="https://play.google.com/store/apps/details?id=com.enatega.multivendor&pli=1"
                target="blank"
                className="flex items-center space-x-2 px-2  py-1 tablet:space-x-4 mx-auto my-1 font-semibold"
              >
                <FcAndroidOs className="w-5 h-5" /> &nbsp;Android
              </Link>
            </span>
          </div>
          <div className="sm:flex sm:justify-center tablet:mt-1">
            <span className="text-base font-inter flex border border-slate-300  sm:w-34 mymob:w-32 tablet:w-32 rounded-xl hover:scale-102">
              <Link
                to="https://play.google.com/store/apps/details?id=com.enatega.multivendor&pli=1"
                target="blank"
                className="flex items-center space-x-2 px-2  py-1 tablet:space-x-4 mx-auto my-1 font-semibold"
              >
                <TbDeviceDesktopAnalytics className="w-5 h-5" />
                &nbsp; Prototype
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("rootmodal")
  );
}

export default Model;
