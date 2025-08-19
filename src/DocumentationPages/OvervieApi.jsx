import { useState, useRef } from "react";

function OvervieApi() {
  const sectionRefs = useRef([]);
  const [activeTab, setActiveTab] = useState(null);

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
      <div className="flex iox:space-x-20 iox:mt-1  biglap:-space-y-56 sm:h-[2150px] mymob:h-[1930px] myiphone:h-[1750px] tablet:h-[1350px] desktop:h-[1430px] iox:h-[1390px] biglap:h-[1300px] ">
        <div
          key="Overview"
          className="text-left desktop:mt-1 iox:mt-0 biglap:mx-44 sm:w-[286px] mymob:w-[335px] myiphone:w-[381px] tablet:w-[690px] desktop:w-[639px] biglap:w-[1000px]   border-b-2 border-gray-200 "
        >
          <p className="font-inter text-green-700 text-sm desktop:w-[639px] biglap:w-[1000px] ">
            Getting Started
          </p>

          <h1 className="sm:text-2xl tablet:text-3xl font-bold text-[#1A1D1E] font-inter desktop:w-[639px] biglap:w-[1000px]  my-4">
            Overview of the API
          </h1>
          <section ref={(el) => (sectionRefs.current[0] = el)} className="">
            <h1 className="text-lg font-bold text-[#1A1D1E] font-inter desktop:w-[639px] biglap:w-[1000px] mx-auto my-4">
              About our API
            </h1>
          </section>
          <div className="mt-1">
            <p className="font-inter text-[#0C0C0C] text-[18px] desktop:w-[639px] biglap:w-[1000px] mx-auto">
              Enatega’s API follows a
              <a
                href="https://www.atlassian.com/microservices/microservices-architecture/microservices-vs-monolith#:~:text=A%20monolithic%20architecture%20is%20a%20singular%2C%20large%20computing%20network%20with,of%20the%20service%2Dside%20interface"
                target="blank"
                className="text-green-600"
              >
                {" "}
                monolithic architecture
              </a>
              ,which means that the entire software application is developed as
              a single, unified codebase. Consequently, any modifications made
              to one section of the code will impact the entire application.
              Various functionalities like logging, caching, and performance
              monitoring are encompassed within a single application. This
              approach simplifies management and facilitates connections with
              other components and applications.
            </p>
            <div className="relative  mt-4">
              <iframe
                loading="lazy"
                className="sm:w-[285px] sm:h-[300px] mymob:w-[335px] myiphone:w-[381px] myiphone:h-[350px] tablet:w-[690px] desktop:w-[636px]  tablet:h-[360px] biglap:w-[1000px] biglap:h-[460px] h-full max-h-[950px] "
                src="https://www.youtube.com/embed/1ncejy6Cv-I?si=O5P2iT47ROc_yUVf"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>

          <p className="font-inter text-[#0C0C0C] text-[18px] desktop:w-[639px] biglap:w-[1000px] mx-auto my-4">
            Enatega uses the
            <a
              href=" https://expressjs.com/"
              target="blank"
              className="text-green-600"
            >
              {" "}
              Express JS
            </a>
            framework and{" "}
            <a
              href="https://graphql.org/"
              target="blank"
              className="text-green-600"
            >
              {" "}
              Graph QL
            </a>
            for building the API. You can view the full Graph QL diagram below:
          </p>

          {/* Resolver Section Start */}
          <section ref={(el) => (sectionRefs.current[1] = el)}>
            <h1 className="font-inter text-[#1A1D1E] text-lg desktop:w-[639px] biglap:w-[1000px] mx-auto my-4 font-bold ">
              Resolvers
            </h1>

            <p className="font-inter text-[#0C0C0C] text-[18px] desktop:w-[639px] biglap:w-[1000px] mx-auto my-4">
              In GraphQL, Resolvers are functions that define how to retrieve or
              mutate data for a specific field in a GraphQL schema.
            </p>

            <p className="font-inter text-[#0C0C0C] text-[18px] desktop:w-[639px] biglap:w-[1000px] mx-auto my-4">
              When a client sends a query or mutation to a GraphQL API, the
              server uses resolvers to determine how to fetch or manipulate the
              requested data. Each field in the schema has a corresponding
              resolver function that knows how to resolve that specific field.
            </p>
          </section>
          {/* End Resolver Section */}

          {/* Dockerization Section Start */}
          <section ref={(el) => (sectionRefs.current[2] = el)}>
            <h1 className="font-inter text-[#1A1D1E] text-lg desktop:w-[639px] biglap:w-[1000px] mx-auto my-4 font-bold ">
              Dockerization
            </h1>

            <p className="font-inter text-[#0C0C0C] text-[18px] desktop:w-[639px] biglap:w-[1000px] mx-auto my-4">
              Dockerization is the process of packaging and deploying software
              applications within isolated containers. By Dockerizing an
              application, it becomes encapsulated within a lightweight,
              portable container that includes all the necessary dependencies
              and libraries. This containerization allows the application to run
              consistently and reliably across different environments, such as
              development, testing, and production.
            </p>
          </section>
          {/* End Dockerization */}

          {/* Database Section Start */}
          <section ref={(el) => (sectionRefs.current[3] = el)}>
            <h1 className="font-inter text-[#1A1D1E] text-lg desktop:w-[639px] biglap:w-[1000px] mx-auto my-4 font-bold ">
              Database
            </h1>

            <p className="font-inter text-[#0C0C0C] text-[18px] desktop:w-[639px] biglap:w-[1000px] mx-auto my-4">
              Enatega uses
              <a
                href="https://www.mongodb.com/"
                target="blank"
                className="text-green-600"
              >
                {" "}
                Mongo DB
              </a>{" "}
              to manage it’s database instead of SQL for database management.
              You can view Mongo DB’s documentation by
              <a
                href="https://www.mongodb.com/"
                target="blank"
                className="text-green-600"
              >
                {" "}
                clicking here.
              </a>
            </p>
          </section>
          {/* End Database */}
        </div>

        {/* Center Context end Overview of the API */}

        {/* 2nd box button */}
        <div className=" text-[14px] biglap:text-2xl hidden iox:flex iox:flex-col">
          <h1 className="font-inter font-semibold ">On this Page</h1>
          {/* 1st box */}
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
              About our API
            </button>
          </div>
          {/* 2nd box */}
          <div className="text-inter font-[500] ">
            <button
              onClick={() => {
                scrollToSection(1);
              }}
              className={
                activeTab === 1
                  ? `border-l-2 border-[#42858d] text-[#42858d] px-2 py-2 text-left cursor-pointer biglap:py-6`
                  : `border-l-2 border-[#dbdbdb] text-[#1A1D1E] px-2 py-2 text-left cursor-pointer biglap:py-6`
              }
            >
              Resolvers
            </button>
          </div>
          {/* 3rd box */}
          <div className="text-inter font-[500] ">
            <button
              onClick={() => {
                scrollToSection(2);
              }}
              className={
                activeTab === 2
                  ? `border-l-2  border-[#42858d] text-[#42858d] px-2 py-2 text-left cursor-pointer biglap:py-6`
                  : `border-l-2 border-[#dbdbdb] text-[#1A1D1E] px-2 py-2 text-left cursor-pointer biglap:py-6`
              }
            >
              Dockerization
            </button>
          </div>
          {/* 4th */}
          <div className="text-inter font-[500] ">
            <button
              onClick={() => {
                scrollToSection(3);
              }}
              className={
                activeTab === 3
                  ? `border-l-2  border-[#42858d] text-[#42858d]  px-2 py-2 text-left cursor-pointer biglap:py-6`
                  : `border-l-2 border-[#dbdbdb] text-[#1A1D1E] px-2 py-2 text-left cursor-pointer biglap:py-6`
              }
            >
              Database
            </button>
          </div>
          {/* end box 4 */}
        </div>
      </div>
    </>
  );
}

export default OvervieApi;
