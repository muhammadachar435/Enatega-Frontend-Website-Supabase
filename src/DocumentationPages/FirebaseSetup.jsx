function FirebaseSetup() {
  return (
    <>
      <div className="flex iox:space-x-16 iox:px-3 iox:mt-1 biglap:-space-y-56 sm:h-[900px] mymob:h-[850px] myiphone:h-[940px] tablet:h-[960px] biglap:h-[1200px] ">
        <div
          key="setup"
          className="text-left desktop:mt-1 iox:mt-0 biglap:mx-44 sm:w-[286px] mymob:w-[335px] myiphone:w-[400px] tablet:w-[690px] desktop:w-[639px] biglap:w-[1000px] border-b-2 border-gray-200 "
        >
          <p className="font-inter text-green-700 text-sm ">Configuration</p>

          <h1 className="sm:text-2xl tablet:text-3xl capitalize font-bold text-[#1A1D1E] font-inter  my-4">
            Firebase Setup{" "}
          </h1>

          <div className="relative mt-4">
            <iframe
              loading="lazy"
              className="sm:w-[285px] sm:h-[300px] mymob:w-[335px] myiphone:w-[381px] myiphone:h-[350px] tablet:w-[690px] desktop:w-[635px]  tablet:h-[360px] biglap:w-[1000px] biglap:h-[460px] h-full max-h-[950px]"
              src="https://www.youtube.com/embed/IpOOhgECBv4?si=DQtqS-1gmhBGwcUa"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>

          <p className="my-6 text-gray-500 text-center ">
            Enatega Multivendor | Firebase Setup Part 1
          </p>

          <div className="relative mt-4">
            <iframe
              loading="lazy"
              className="sm:w-[285px] sm:h-[300px] mymob:w-[335px] myiphone:w-[381px] myiphone:h-[350px] tablet:w-[690px] desktop:w-[635px]  tablet:h-[360px] biglap:w-[1000px] biglap:h-[460px] h-full max-h-[950px]"
              src="https://www.youtube.com/embed/-Wo51aQE2KA?si=Id-FToLzCsm0kY5I"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>

          <p className="my-6 text-gray-500 text-center ">
            Enatega Multivendor | Firebase Setup Part 2
          </p>
        </div>
        {/* end content  */}

        {/* 2nd box button */}
        <div className=" text-[14px] biglap:text-2xl hidden iox:flex iox:flex-col iox:px-12">
          <h1 className="font-inter font-semibold ">On this Page</h1>
        </div>
        {/* End Box button */}
      </div>
    </>
  );
}

export default FirebaseSetup;
