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
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
        {/* Floating Background Elements */}
        <div className="absolute top-1/2 left-16 transform -translate-y-1/2 -translate-x-10 md:translate-x-0 hidden lg:block pointer-events-none">
          <img
            src={heroLeft}
            alt="Decorative element left"
            className="w-[300px] xl:w-[200px] h-auto object-contain "
          />
        </div>
        <div className="absolute top-1/2 right-16 transform -translate-y-1/2 translate-x-10 md:translate-x-0 hidden lg:block pointer-events-none">
          <img
            src={heroRight}
            alt="Decorative element right"
            className="w-[300px] xl:w-[200px] h-auto object-contain"
          />
        </div>
        {/* Main Content */}
        <div className="container mx-auto px-6 relative z-10  my-20 text-center">
          <div className="mb-8 flex justify-center">
            <img
              src={heroIcon}
              alt="Setapp Icon"
              className="w-24 h-24 md:w-32 md:h-32 object-contain animate-pulse-slow"
            />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            <span className="block w-full md:w-1/2 mx-auto">
              Dozens of apps. One subscription. <br />
              $9.99
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 items-center">
            <Button variant="white" className="text-lg py-4">
              Try free for 7 days
            </Button>
            <Button
              variant="white"
              className="text-lg py-4 flex justify-center"
            >
              <img
                src={AppleIcon}
                alt="Apple Store"
                className="w-8 h-8 inline-block  object-contain"
              />
            </Button>
            <Button
              variant="white"
              className="text-lg py-4 flex justify-center"
            >
              <img
                src={GoogleIcon}
                alt="Google Play Store"
                className="w-8 h-8 inline-block  object-contain"
              />
            </Button>
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
