import React from "react";
import featureOne from "../assets/featureOne.svg";
import featureTwo from "../assets/featureTwo.svg";
import featureThree from "../assets/featureThree.svg";

const FeatureItem = ({ image, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-full mb-6">
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500 rounded-2xl"
        />
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="py-20 bg-background relative overflow-hidden"
      >
        <div className=" mx-auto px-32">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-[103px] gap-6">
            <h2 className="text-2xl md:text-3xl lg:text-[36px] font-semibold leading-tight tracking-[1px] text-white mb-2 font-['Avenir_Next',system-ui,-apple-system,'Segoe_UI',Roboto,'Helvetica_Neue',Arial,'Noto_Sans',sans-serif]">
              What you get on Setapp.
            </h2>
            <p className="text-base md:text-lg lg:text-[18px] font-normal leading-tight  max-w-[580px] text-white/80 font-['Avenir_Next',system-ui,-apple-system,'Segoe_UI',Roboto,'Helvetica_Neue',Arial,'Noto_Sans',sans-serif]">
              With a single monthly subscription at $9.99, you get 240+ apps for
              your Mac.
            </p>
          </div>

          {/* First Feature - Full Width */}
          <div >
            <FeatureItem
              image={featureOne}
              title="Keep your Mac clean"
              description="Remove junk with CleanMyMac, save email attachments"
            />
          </div>

          {/* Second and Third Features - Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 mb-[74px]">
            <FeatureItem
              image={featureTwo}
              title="Write code"
              description="Create applications in more than 25 languages"
            />
            <FeatureItem
              image={featureThree}
              title="Join meetings in a click"
              description="Quickly access links to your meetings from menu bar"
            />
          </div>

          {/* View All Link */}
          <div className="text-center mb-20">
            <a
              href="#"
              className="inline-flex items-center text-white/80 leading-10 tracking-normal hover:text-white transition-colors text-[20px] gap-2"
            >
              → View all superpowers
            </a>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-4">
            <h2 className="text-2xl md:text-3xl lg:text-[36px] font-semibold leading-tight tracking-[1px] text-white mb-2 font-['Avenir_Next',system-ui,-apple-system,'Segoe_UI',Roboto,'Helvetica_Neue',Arial,'Noto_Sans',sans-serif]">
              Your Setapp journey.
            </h2>
            <p className="text-base md:text-lg lg:text-[20px] w-full md:w-[600px] font-normal leading-relaxed text-white/60 font-['Avenir_Next',system-ui,-apple-system,'Segoe_UI',Roboto,'Helvetica_Neue',Arial,'Noto_Sans',sans-serif]">
              Type in your task into Setapp search and get instant app
              recommendations.
            </p>
          </div>
        </div>
      </section>
      <div className="border-b-2 bg-white w-3/4 mx-auto"></div>
    </>
  );
};

export default Features;
