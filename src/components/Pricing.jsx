import React from "react";
import brandImage from "../assets/brandIcon.svg";

const Pricing = () => {
  return (
    <>
      <section id="pricing" className="relative overflow-hidden">
        {/* Two-color background split */}
        <div className="absolute inset-0">
          <div className="h-1/2 bg-white"></div>
          <div className="h-1/2 bg-background"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 sm:py-16 lg:py-20">
          {/* Pricing Card */}
          <div className="relative w-full  mx-auto">
            <div className="bg-[#F5F5F5] rounded-2xl lg:rounded-3xl p-8 sm:p-12 lg:p-16 xl:p-20 shadow-2xl">
              <div className="flex flex-col items-start gap-6 sm:gap-8">
                {/* Brand Icon */}
                <img
                  src={brandImage}
                  alt="Setapps Brand Icon"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                />

                {/* Heading */}
                <div className="text-left w-full">
                  <h2 className="text-black text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight sm:leading-relaxed mb-2 max-w-4xl">
                    Superpowers starting $9.99/month.{" "}
                    <br className="hidden sm:block" />
                    <span className="block sm:inline">Free for 7 days.</span>
                  </h2>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 w-full sm:w-auto">
                  <button
                    className="h-14 sm:h-16 px-8 sm:px-10 bg-background text-white rounded-lg sm:rounded-md flex items-center justify-center hover:scale-105 hover:shadow-xl active:scale-100 transition-all duration-200 shadow-lg text-lg sm:text-xl font-light whitespace-nowrap"
                    aria-label="Start your 7-day free trial"
                  >
                    Get started now
                  </button>
                  <button
                    className="h-14 sm:h-16 px-8 sm:px-10 bg-[#F5F5F5] border-2 border-background text-background rounded-lg sm:rounded-md flex items-center justify-center hover:scale-105 hover:bg-white active:scale-100 transition-all duration-200 shadow-lg text-lg sm:text-xl font-light whitespace-nowrap"
                    aria-label="Learn more about Setapps"
                  >
                    More about Setapps
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="border-b bg-white  mx-auto"></div>
    </>
  );
};

export default Pricing;
