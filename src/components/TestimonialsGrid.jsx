import React, { useState } from "react";
import Facebook from "../assets/facebook.svg";
import Twitter from "../assets/twitter.svg";
import Instagram from "../assets/instagram.svg";
import Youtube from "../assets/youtube.svg";
import ChevronLeft from "../assets/chevron-left.svg";
import ChevronRight from "../assets/chevron-right.svg";
const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      text: "Have been using Setapp for almost two years, and I have to say it's the best and the most cost-effective way of having apps on Mac.",
      author: "Arash Pourhabibi",
      handle: "@ArashPourhabibi",
      platform: "twitter",
      bgColor: "bg-[#7B7A9E]",
    },
    {
      text: "My favorites ❤️ from @Setapp Ulysses, CleanMyMac X, Paste, MindNode, Swift Publisher.",
      author: "Mauricio Sanchez",
      handle: "@m741s",
      platform: "instagram",
      bgColor: "bg-[#D4A574]",
    },
    {
      text: "For those of you that wonder where I discover/get all the awesome apps for my Mac that I use, a lot of them are from Setapp!",
      author: "Meredith Sweet",
      handle: "@meredith.sweet.silberstein",
      platform: "facebook",
      bgColor: "bg-[#7B5B7A]",
    },
  ];

  const totalSlides = 6; // Based on the dots shown

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getSocialIcon = (platform) => {
    switch (platform) {
      case "twitter":
        return <img className="w-5 h-5" src={Twitter} alt="Twitter" />;
      case "instagram":
        return <img className="w-5 h-5" src={Instagram} alt="Instagram" />;
      case "facebook":
        return <img className="w-5 h-5" src={Facebook} alt="Facebook" />;
      default:
        return null;
    }
  };

  return (
    <section className="bg-white  py-16 px-4 ">
      <div className="max-w-7xl mx-auto ">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-3 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-2">
              Setapp in your words.
            </h1>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-10 w-full md:w-auto">
            <p className="text-lg md:text-xl text-gray-600">
              What you say about how Setapp
              <br />
              powers you up.
            </p>
            <div className="flex gap-5">
              <a
                href="#"
                className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white hover:opacity-90 transition"
              >
                <img className="w-12 h-12 md:w-14 md:h-14" src={Facebook} alt="Facebook" />
              </a>
              <a
                href="#"
                className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white hover:opacity-90 transition"
              >
                <img className="w-12 h-12 md:w-14 md:h-14" src={Twitter} alt="Twitter" />
              </a>
              <a
                href="#"
                className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white hover:opacity-90 transition"
              >
                <img className="w-12 h-12 md:w-14 md:h-14" src={Instagram} alt="Instagram" />
              </a>
              <a
                href="#"
                className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white hover:opacity-90 transition"
              >
                <img className="w-12 h-12 md:w-14 md:h-14" src={Youtube} alt="Youtube" />
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-end gap-3 mb-3">
          <button
            onClick={prevSlide}
            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-50 transition"
          >
            <img className="w-6 h-6" src={ChevronLeft} alt="Previous" />
          </button>
          <button
            onClick={nextSlide}
            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-50 transition"
          >
            <img className="w-6 h-6" src={ChevronRight} alt="Next" />
          </button>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col">
              {/* Card */}
              <div className="bg-[#F5F5F5] rounded-3xl mt-6 p-2 flex justify-between items-center flex-col shadow-sm">
                <div
                  className={`${testimonial.bgColor} rounded-3xl p-10 flex-1 min-h-[320px] flex items-center`}
                >
                  <p className="text-white text-2xl leading-relaxed font-normal">
                    {testimonial.text}
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-5 flex justify-between items-center w-full px-4">
                  <div className="">
                    <p className="text-gray-900 font-semibold text-lg">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                      {testimonial.handle}
                    </p>
                  </div>
                <div className="text-pink-500">
                  {getSocialIcon(testimonial.platform)}
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === currentSlide ? "bg-gray-800" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
