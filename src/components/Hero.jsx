import React from "react";
import Button from "./Button";
import heroLeft from "../assets/heroLeft.svg";
import heroRight from "../assets/heroRight.svg";
import heroIcon from "../assets/heroIcon.svg";
import AppleIcon from "../assets/apple.svg";
import GoogleIcon from "../assets/google.svg";
const Hero = () => {
  return (
    <>
      <section className="relative flex items-center justify-center pt-0 overflow-hidden bg-background">
        {/* Floating Background Elements */}
        <div className="absolute top-[496px] left-[109px] transform -translate-y-1/2 -translate-x-10 md:translate-x-0 hidden lg:block pointer-events-none">
          <img
            src={heroLeft}
            alt="Decorative element left"
            className="w-[300px] xl:w-[253px] h-auto object-contain "
          />
        </div>
        <div className="absolute top-[506px] right-[58px] transform -translate-y-1/2 translate-x-10 md:translate-x-0 hidden lg:block pointer-events-none">
          <img
            src={heroRight}
            alt="Decorative element right"
            className="w-[300px] xl:w-[308px] h-auto object-contain"
          />
        </div>
        {/* Main Content */}
        <div className="container mx-auto px-6 relative z-10  my-44 text-center">
          <div className="mb-10 flex justify-center">
            <img
              src={heroIcon}
              alt="Setapp Icon"
              className="w-36 h-36 md:w-40 md:h-40 object-contain animate-pulse-slow"
            />
          </div>

          <h1 className="leading-[1.1] text-text-[2.25rem] ml-10 md:text-[3rem] lg:text-[3.94rem] font-bold text-white mb-11 tracking-wide ">
            <span className="block w-full md:w-[45%] mx-auto">
              Dozens of apps. One subscription. <br />
              $9.99
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-8 ml-4 justify-center mb-6 items-center">
            <button
              className="text-lg py-3 px-4 bg-white text-black shadow-md rounded"
            >
              Try free for 7 days
            </button>

            <button
              className="p-3 flex items-center justify-center rounded-md shadow-sm bg-white"
              aria-label="Download on the App Store"
            >
              <img
                src={AppleIcon}
                alt="Apple Store"
                className="w-8 h-8 object-contain"
              />
            </button>

            <button
              className="p-3  flex items-center justify-center rounded-md shadow-sm bg-white"
              aria-label="Get it on Google Play"
            >
              <img
                src={GoogleIcon}
                alt="Google Play Store"
                className="w-8 h-8 object-contain"
              />
            </button>
          </div>
          <p className="text-white/70 max-w-[320px] mx-auto mb-10 font-normal text-lg leading-[32.04px] text-center font-['Avenir_Next',system-ui,-apple-system,'Segoe_UI',Roboto,'Helvetica_Neue',Arial,'Noto_Sans',sans-serif]">
            Power up your workflow with Setapp, a smart way to get apps.
          </p>
        </div>
      </section>
      <div className="border-b-2 bg-white w-3/4 mx-auto"></div>
    </>
  );
};

export default Hero;
