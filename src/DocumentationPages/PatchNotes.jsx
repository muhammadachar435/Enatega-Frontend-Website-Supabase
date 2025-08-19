import { useState, useRef } from "react";

function PatchNotes() {
  const [activeTab, setActiveTab] = useState(null);

  const sectionRefs = useRef([]);
  const scrollToSection = (index) => {
    const offset = 150; // Customize based on header or margin
    const element = sectionRefs.current[index];
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveTab(index);
    }
  };

  return (
    <>
      <div className="flex iox:space-x-20 iox:mt-1  biglap:-space-y-56 sm:h-[4280px] mymob:h-[3750px] myiphone:h-[3350px] tablet:h-[2300px] desktop:h-[2480px] biglap:h-[2300px]">
        <div
          key="PatchNotes"
          className="text-left desktop:mt-1 iox:mt-0 biglap:mx-44 sm:w-[286px] mymob:w-[335px] myiphone:w-[400px] tablet:w-[690px] desktop:w-[639px] biglap:w-[1000px]  border-b-2 border-gray-200 "
        >
          <p className="font-inter text-green-700 text-sm ">Getting Started</p>

          <h1 className="sm:text-2xl tablet:text-3xl font-bold text-[#1A1D1E] font-inter  my-4">
            Patch Notes
          </h1>

          {/* Section 1 Enatega React Native Food Delivery v4.0.0 */}
          <section
            ref={(el) => {
              sectionRefs.current[0] = el;
            }}
          >
            <h1 className="font-inter text-[#1A1D1E] text-2xl  my-4 font-bold ">
              Enatega React Native Food Delivery v4.0.0
            </h1>
          </section>

          {/* Section 2 New Backend Features */}
          <section
            ref={(el) => {
              sectionRefs.current[1] = el;
            }}
          >
            <h1 className="font-inter text-[#1A1D1E] text-lg  my-4 font-bold ">
              New Backend Features
            </h1>
          </section>

          {/* Start Cancal Features  */}
          <div className=" relative font-inter flex text-[#1A1D1E] text-lg  my-4 font-bold ">
            <img
              src="/Pictures/fire.png"
              alt=""
              className="w-6 h-6 absolute left-0"
            />
            <p className="">
              <span className="pl-7">Cancel Order Feature:</span>
              <span className=" font-inter font-[400] text-[#0C0C0C]">
                {" "}
                Need to make changes? Our cancel order feature allows for easy
                modification or cancellation of orders, providing flexibility
                and convenience.
              </span>
            </p>
          </div>
          {/* end Cancal Order Features */}

          {/* Start Popular Items by Restaurant:*/}
          <div className=" relative font-inter flex text-[#1A1D1E] text-lg  my-4 font-bold ">
            <img
              src="/Pictures/restaurant.png"
              alt=""
              className="w-6 h-6 absolute left-0"
            />
            <p className="">
              <span className="pl-7">Popular Items by Restaurant:</span>
              <span className=" font-inter font-[400] text-[#0C0C0C]">
                {" "}
                Discover the hottest items at your favorite restaurants with our
                new popular items feature, making ordering a breeze.
              </span>
            </p>
          </div>
          {/* end Popular Items by Restaurant: */}

          {/* Start Top Rated Shops and Restaurants:*/}
          <div className=" relative font-inter flex text-[#1A1D1E] text-lg my-4 font-bold ">
            <img
              src="/Pictures/star.png"
              alt=""
              className="w-6 h-6 absolute left-0"
            />
            <p className="">
              <span className="pl-7">Top Rated Shops and Restaurants:</span>
              <span className=" font-inter font-[400] text-[#0C0C0C]">
                {" "}
                Find the best of the best with our top-rated shops and
                restaurants, ensuring quality and satisfaction every time.
              </span>
            </p>
          </div>
          {/* end Top Rated Shops and Restaurants: */}

          {/* Start Verification Toggle for Email and Phone:*/}
          <div className=" relative font-inter flex text-[#1A1D1E] text-lg my-4 font-bold ">
            <img
              src="/Pictures/Lock.jpg"
              alt=""
              className="w-6 h-6 absolute left-0"
            />
            <p className="">
              <span className=" pl-7">
                Verification Toggle for Email and Phone:
              </span>
              <span className=" font-inter font-[400] text-[#0C0C0C]">
                {" "}
                Take control of your account security with verification toggles
                for email and phone, providing added peace of mind.
              </span>
            </p>
          </div>

          {/* end Verification Toggle for Email and Phone:*/}

          {/* Start  Cuisines Added to Restaurants:*/}
          <div className=" relative font-inter flex text-[#1A1D1E] text-lg my-4 font-bold ">
            <img
              src="/Pictures/cuisine.png"
              alt=""
              className="w-6 h-6 absolute left-0"
            />
            <p className="">
              <span className="pl-7"> Cuisines Added to Restaurants:</span>
              <span className=" font-inter font-[400] text-[#0C0C0C]">
                {" "}
                Explore a world of flavors with our new cuisine categories for
                restaurants, making it easier to find your favorite dishes.
              </span>
            </p>
          </div>

          {/* end  Cuisines Added to Restaurants:*/}

          {/* Start Demo Configuration Toggles:*/}
          <div className=" relative font-inter flex text-[#1A1D1E] text-lg my-4 font-bold ">
            <img
              src="/Pictures/Tool.png"
              alt=""
              className="w-6 h-6 absolute left-0"
            />
            <p className="">
              <span className="pl-7">Demo Configuration Toggles:</span>
              <span className=" font-inter font-[400] text-[#0C0C0C]">
                {" "}
                Test and configure with ease using our demo configuration
                toggles, allowing for seamless setup and customization.
              </span>
            </p>
          </div>
          {/* end Demo Configuration Toggles:*/}

          {/* Start ID in Order Delivery Address Fixed*/}
          <div className=" relative font-inter flex text-[#1A1D1E] text-lg my-4 font-bold ">
            <img
              src="/Pictures/Idcard.png"
              alt=""
              className="w-6 h-6 absolute "
            />
            <p className="">
              <span className=" pl-7">
                ID in Order Delivery Address Fixed*:
              </span>
              <span className=" font-inter font-[400] text-[#0C0C0C]">
                {" "}
                Rest easy knowing your order is going to the right place with
                our fixed ID in the order delivery address.
              </span>
            </p>
          </div>
          {/* end  ID in Order Delivery Address Fixed */}

          {/* Start Stripe Integration Fixed*/}
          <div className=" relative font-inter flex text-[#1A1D1E] text-lg my-4 font-bold ">
            <img
              src="/Pictures/Stripe.png"
              alt=""
              className="w-6 h-6 absolute"
            />
            <p className="">
              <span className="pl-7"> Stripe Integration Fixed:</span>
              <span className=" font-inter font-[400] text-[#0C0C0C]">
                {" "}
                Enjoy smooth and secure transactions with our fixed Stripe
                integration, providing a hassle-free payment experience.
              </span>
            </p>
          </div>
          {/* end Stripe */}

          {/* Start Popular Items by Restaurant:*/}
          <div className=" relative font-inter flex text-[#1A1D1E] text-lg my-4 font-bold ">
            <img
              src="/Pictures/Alarm.png"
              alt=""
              className="w-6 h-6 absolute top-[-2px] left-0"
            />
            <p className="">
              <span className=" pl-7">Popular Items by Restaurant:</span>
              <span className=" font-inter font-[400] text-[#0C0C0C]">
                {" "}
                Discover the hottest items at your favorite restaurants with our
                new popular items feature, making ordering a breeze.
              </span>
            </p>
          </div>
          {/* end Popular Items by Restaurant: */}

          {/* End New Backend Features*/}

          {/* Start New Frontend Features */}

          {/* Section 3 Enatega React Native Food Delivery v4.0.0*/}
          <section
            ref={(el) => {
              sectionRefs.current[2] = el;
            }}
          >
            <h1 className="font-inter text-[#1A1D1E] text-2xl my-4 font-bold ">
              Enatega React Native Food Delivery v4.0.0
            </h1>
          </section>

          {/* Section 4  New Frontend Features*/}
          <section
            ref={(el) => {
              sectionRefs.current[3] = el;
            }}
          >
            <h1 className="font-inter text-[#1A1D1E] text-lg my-4 font-bold ">
              New Frontend Features
            </h1>
          </section>

          {/* Start Different Shop Types: */}
          <div className=" relative font-inter flex text-[#1A1D1E] text-lg my-4 font-bold ">
            <img
              src="/Pictures/Shopbag.png"
              alt=""
              className="w-6 h-6 absolute left-0"
            />
            <p className="">
              <span className="pl-7">Different Shop Types:</span>
              <span className=" font-inter font-[400] text-[#0C0C0C]">
                {" "}
                Discover a variety of shop types including Restaurants and
                Groceries, offering you more choices to suit your preferences.
              </span>
            </p>
          </div>
          {/* end Different Shop Types: */}

          {/* Start Onboarding Flow using Maps: */}
          <div className=" relative font-inter flex text-[#1A1D1E] text-lg  my-4 font-bold ">
            <img
              src="/Pictures/map.png"
              alt=""
              className="w-6 h-6 absolute left-0"
            />
            <p className="">
              <span className="pl-7">Onboarding Flow using Maps: </span>
              <span className=" font-inter font-[400] text-[#0C0C0C]">
                {" "}
                Seamlessly onboard with Enatega using our new map-based
                onboarding flow, making your experience even more intuitive.
              </span>
            </p>
          </div>
          {/* end  Onboarding Flow using Maps*/}

          {/* Start Popular Items Section:*/}
          <div className=" relative font-inter flex text-[#1A1D1E] text-lg  my-4 font-bold ">
            <img
              src="/Pictures/fire.png"
              alt=""
              className="w-6 h-6 absolute left-0"
            />
            <p className="">
              <span className="pl-7">Popular Items Section: </span>
              <span className=" font-inter font-[400] text-[#0C0C0C]">
                {" "}
                Explore our new section showcasing the most ordered items,
                helping you discover crowd-favorites effortlessly.
              </span>
            </p>
          </div>
          {/* end Popular Items Section: */}

          {/* Start Top Brands and Restaurants:*/}
          <div className=" relative font-inter flex text-[#1A1D1E] text-lg  my-4 font-bold ">
            <img
              src="/Pictures/star.png"
              alt=""
              className="w-6 h-6 absolute left-0"
            />
            <p className="">
              <span className="pl-7">Top Brands and Restaurants:</span>
              <span className=" font-inter font-[400] text-[#0C0C0C]">
                {" "}
                Find top-rated brands and restaurants easily, ensuring quality
                and satisfaction with every order.
              </span>
            </p>
          </div>

          {/* end Top Brands and Restaurants:*/}

          {/* Start Item Search Functionality: */}
          <div className=" relative font-inter flex text-[#1A1D1E] text-lg  my-4 font-bold ">
            <img
              src="/Pictures/Search.png"
              alt=""
              className="w-6 h-6 absolute left-0"
            />
            <p className="">
              <span className="pl-7">Item Search Functionality: </span>
              <span className=" font-inter font-[400] text-[#0C0C0C]">
                {" "}
                Search for specific items with ease, making your shopping
                experience more efficient than ever before.{" "}
              </span>
            </p>
          </div>

          {/* end  Item Search Functionality: */}

          {/* Start New Checkout Flow:*/}
          <div className=" relative font-inter flex text-[#1A1D1E] text-lg  my-4 font-bold ">
            <img
              src="/Pictures/checkout.png"
              alt=""
              className="w-6 h-6 absolute left-0"
            />
            <p className="">
              <span className="pl-7">New Checkout Flow:</span>
              <span className=" font-inter font-[400] text-[#0C0C0C]">
                {" "}
                Experience a smoother checkout process with our redesigned flow,
                making transactions hassle-free.
              </span>
            </p>
          </div>
          {/* end New Checkout Flow:*/}

          {/* Start Cancel Order Functionality: */}
          <div className=" relative font-inter flex text-[#1A1D1E] text-lg  my-4 font-bold ">
            <img
              src="/Pictures/close.png"
              alt=""
              className="w-6 h-6 absolute "
            />
            <p className="">
              <span className="pl-7">Cancel Order Functionality: </span>
              <span className=" font-inter font-[400] text-[#0C0C0C]">
                {" "}
                Need to cancel? Now you can with our new cancel order feature,
                providing flexibility and convenience.
              </span>
            </p>
          </div>
          {/* end Cancel Order Functionality:  */}

          {/* Start Rate and Review Functionality: */}
          <div className=" relative font-inter flex text-[#1A1D1E] text-lg  my-4 font-bold ">
            <img
              src="/Pictures/FullStar.png"
              alt=""
              className="w-6 h-6 absolute"
            />
            <p className="">
              <span className="pl-7">Rate and Review Functionality: </span>
              <span className=" font-inter font-[400] text-[#0C0C0C]">
                {" "}
                Share your feedback easily with our new rating and review
                feature, helping us improve and serve you better.
              </span>
            </p>
          </div>
          {/* end Rate and Review Functionality: */}

          {/* Start Easy Search through Filters:*/}
          <div className=" relative font-inter flex text-[#1A1D1E] text-lg  my-4 font-bold ">
            <img
              src="/Pictures/Search.png"
              alt=""
              className="w-6 h-6 absolute top-[-2px] left-0"
            />
            <p className="">
              <span className="pl-7">Easy Search through Filters:</span>
              <span className=" font-inter font-[400] text-[#0C0C0C]">
                {" "}
                Find exactly what you’re looking for through our enhanced search
                filters, tailored to your preferences.
              </span>
            </p>
          </div>
          {/* end  Easy Search through Filters:*/}

          {/* Start Rider Tracking Feature: */}
          <div className=" relative font-inter flex text-[#1A1D1E] text-lg  my-4 font-bold ">
            <img
              src="/Pictures/Rider.png"
              alt=""
              className="w-6 h-6 absolute top-[-2px] left-0"
            />
            <p className="">
              <span className="pl-7">Rider Tracking Feature: </span>
              <span className=" font-inter font-[400] text-[#0C0C0C]">
                {" "}
                Track your delivery in real-time with our new rider tracking
                feature, ensuring you’re always in the loop.
              </span>
            </p>
          </div>
          {/* end Rider Tracking Feature: */}

          {/* Start UI/UX Improvements:*/}
          <div className=" relative font-inter flex text-[#1A1D1E] text-lg  my-4 font-bold ">
            <img
              src="/Pictures/ui.png"
              alt=""
              className="w-6 h-6 absolute top-[-2px] left-0"
            />
            <p className="">
              <span className="pl-7"> UI/UX Improvements:</span>
              <span className=" font-inter font-[400] text-[#0C0C0C]">
                {" "}
                Enjoy a more visually appealing and user-friendly interface,
                making your Enatega experience even more enjoyable.{" "}
              </span>
            </p>
          </div>
          {/* end UI/UX Improvements:*/}

          {/* Start Upgraded Packages: */}
          <div className=" relative font-inter flex text-[#1A1D1E] text-lg  my-4 font-bold ">
            <img
              src="/Pictures/package.png"
              alt=""
              className="w-6 h-6 absolute top-[-2px] left-0"
            />
            <p className="">
              <span className="pl-7">Upgraded Packages: </span>
              <span className=" font-inter font-[400] text-[#0C0C0C]">
                {" "}
                We’ve upgraded to the latest version to ensure you have access
                to the most advanced features and technologies.
              </span>
            </p>
          </div>
          {/* end Upgraded Packages: */}

          {/* Section 5 Enatega React Native Food Delivery With Backend v3.0.0 */}
          <section
            ref={(el) => {
              sectionRefs.current[4] = el;
            }}
          >
            <h1 className="font-inter text-[#1A1D1E] text-2xl  my-4 font-bold ">
              Enatega React Native Food Delivery With Backend v3.0.0
            </h1>
          </section>

          {/* Section 6  New Features*/}
          <section
            ref={(el) => {
              sectionRefs.current[5] = el;
            }}
          >
            <h1 className="font-inter text-[#1A1D1E] text-lg  my-4 font-bold ">
              New Features
            </h1>
          </section>

          <ul class="list-disc font-[500] my-2 font-inter text-[16px] sm:w-[300px] px-8 mymob:w-[360px] myiphone:w-[400px]  tablet:w-[728px] desktop:w-[639px] biglap:w-[1000px] mx-auto  ">
            <li>Added a web version of the App</li>
          </ul>

          {/* Section 7 Enatega React Native Food Delivery With Backend v2.0.0 */}
          <section
            ref={(el) => {
              sectionRefs.current[6] = el;
            }}
          >
            <h1 className="font-inter text-[#1A1D1E] text-2xl  my-4 font-bold ">
              Enatega React Native Food Delivery With Backend v2.0.0
            </h1>
          </section>

          {/* Section 8  New Features*/}
          <section
            ref={(el) => {
              sectionRefs.current[7] = el;
            }}
          >
            <h1 className="font-inter text-[#1A1D1E] text-lg sm:w-[300px]  mymob:w-[360px] myiphone:w-[400px] tablet:w-[728px] desktop:w-[639px] biglap:w-[1000px] mx-auto my-4 font-bold ">
              New Features
            </h1>
          </section>

          <ul class="list-disc font-[500] my-2 font-inter text-[16px] sm:w-[300px] px-8 mymob:w-[360px] myiphone:w-[400px]  tablet:w-[728px] desktop:w-[639px] biglap:w-[1000px] mx-auto  ">
            <li>Added rider tracking feature</li>
            <li>Added restaurant timings feature</li>
            <li>UI/UX improved</li>
            <li>Upgraded packages</li>
            <li>Added Taxation and Tipping</li>
            <li>Added sections</li>
            <li>Added favourites</li>
            <li>Added global notification</li>
          </ul>
        </div>
        {/* End Patch Notes Content  */}

        {/* on this Page Button  */}

        {/* 2nd box button */}
        <div className=" text-[14px] biglap:text-2xl hidden iox:flex iox:flex-col">
          <h1 className="font-inter font-semibold ">On this Page</h1>

          {/* 1st button */}
          <div className="text-inter font-[500] mt-2">
            <button
              onClick={() => {
                scrollToSection(0);
              }}
              className={
                activeTab === 0
                  ? `border-l-2 border-[#42858d] text-[#42858d] px-2 py-2 cursor-pointer text-left biglap:py-6`
                  : `border-l-2 border-[#dbdbdb] text-[#1A1D1E] px-2 py-2 cursor-pointer text-left biglap:py-6`
              }
            >
              Enatega React Native Food Delivery v4.0.0
            </button>
          </div>
          {/* 1st button End */}

          {/* 2nd button */}
          <div className="text-inter font-[500]">
            <button
              onClick={() => {
                scrollToSection(1);
              }}
              className={
                activeTab === 1
                  ? `border-l-2 border-[#42858d] text-[#42858d] px-2 py-2 cursor-pointer text-left biglap:py-6`
                  : `border-l-2 border-[#dbdbdb] text-[#1A1D1E] px-2 py-2 cursor-pointer text-left biglap:py-6`
              }
            >
              New Backend Features
            </button>
          </div>
          {/* 2nd button End */}

          {/* 3rd button */}
          <div className="text-inter font-[500]">
            <button
              onClick={() => {
                scrollToSection(2);
              }}
              className={
                activeTab === 2
                  ? `border-l-2 border-[#42858d] text-[#42858d] px-2 py-2 cursor-pointer text-left biglap:py-6`
                  : `border-l-2 border-[#dbdbdb] text-[#1A1D1E] px-2 py-2 cursor-pointer text-left biglap:py-6`
              }
            >
              Enatega React Native Food Delivery v4.0.0
            </button>
          </div>
          {/* 3rd button End */}

          {/* 4th button */}
          <div className="text-inter font-[500]">
            <button
              onClick={() => {
                scrollToSection(3);
              }}
              className={
                activeTab === 3
                  ? `border-l-2 border-[#42858d] text-[#42858d] px-2 py-2 cursor-pointer text-left biglap:py-6`
                  : `border-l-2 border-[#dbdbdb] text-[#1A1D1E] px-2 py-2 cursor-pointer text-left biglap:py-6`
              }
            >
              New Frontend Features
            </button>
          </div>
          {/* 4th button End */}

          {/* 5th button */}
          <div className="text-inter font-[500] ">
            <button
              onClick={() => {
                scrollToSection(4);
              }}
              className={
                activeTab === 4
                  ? `border-l-2 border-[#42858d] text-[#42858d] px-2 py-2 cursor-pointer text-left biglap:py-6`
                  : `border-l-2 border-[#dbdbdb] text-[#1A1D1E] px-2 py-2 cursor-pointer text-left biglap:py-6`
              }
            >
              Enatega React Native Food Delivery With Backend v3.0.0
            </button>
          </div>
          {/* 5th button End */}

          {/* 6th button */}
          <div className="text-inter font-[500]">
            <button
              onClick={() => {
                scrollToSection(5);
              }}
              className={
                activeTab === 5
                  ? `border-l-2 border-[#42858d] text-[#42858d] px-2 py-2 cursor-pointer text-left biglap:py-6`
                  : `border-l-2 border-[#dbdbdb] text-[#1A1D1E] px-2 py-2 cursor-pointer text-left biglap:py-6`
              }
            >
              New Features
            </button>
          </div>
          {/* 6th button End */}

          {/* 7th button */}
          <div className="text-inter font-[500] ">
            <button
              onClick={() => {
                scrollToSection(6);
              }}
              className={
                activeTab === 6
                  ? `border-l-2 border-[#42858d] text-[#42858d] px-2 py-2 cursor-pointer text-left biglap:py-6`
                  : `border-l-2 border-[#dbdbdb] text-[#1A1D1E] px-2 py-2 cursor-pointer text-left biglap:py-6`
              }
            >
              Enatega React Native Food Delivery With Backend v2.0.0
            </button>
          </div>
          {/* 7th button End */}

          {/* 8th button */}
          <div className="text-inter font-[500] ">
            <button
              onClick={() => {
                scrollToSection(7);
              }}
              className={
                activeTab === 7
                  ? `border-l-2 border-[#42858d] text-[#42858d] px-2 py-2 cursor-pointer text-left biglap:py-6`
                  : `border-l-2 border-[#dbdbdb] text-[#1A1D1E] px-2 py-2 cursor-pointer text-left biglap:py-6`
              }
            >
              New Features
            </button>
          </div>
          {/* 8th button End */}
        </div>
      </div>
    </>
  );
}

export default PatchNotes;
