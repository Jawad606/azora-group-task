import React from 'react';
import personImage from '../assets/testomonial.svg'; // Replace with actual image path
const TestimonialBanner = () => {
    return (
        <section id="testimonials" className="relative overflow-hidden mt-10">
            {/* Two-color background: purple top, white bottom - NO blending */}
            <div className="absolute inset-0">
                <div className="h-1/2 bg-background"></div>
                <div className="h-1/2 bg-white"></div>
            </div>
            
            <div className="container mx-auto px-6 relative z-10 py-20">
                {/* Testimonial Card */}
                <div className="relative w-full  mx-auto">
                    {/* Card with purple background matching the image */}
                    <div className="bg-[#7b4d73] rounded-2xl pt-10 md:pt-20 shadow-2xl">
                        <div className="flex flex-col md:flex-row items-center">
                            {/* Text Content */}
                            <div className="flex-1 text-left px-6 md:px-10 lg:px-20 md:pb-8">
                                <p className="text-white text-lg md:text-xl lg:text-2xl font-medium leading-relaxed mb-6 w-full md:w-4/5">
                                    Musicians like Jason use Setapp to push the limits of their creativity, dancing through task for more time to play.
                                </p>
                                <p className="text-white/80 text-sm md:text-base">
                                    Jason Staczek
                                </p>

                                {/* Play Button */}
                                <button className="mt-10 md:mt-20 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-lg">
                                    <svg 
                                        className="w-5 h-5 md:w-6 md:h-6 text-[#8B6B9E] ml-1" 
                                        fill="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </button>
                            </div>

                            {/* Person Image Placeholder */}
                            <div className="flex-shrink-0 w-full md:w-auto">
                                <div className="w-full md:w-[670px] h-[400px] md:h-[690px] rounded-lg flex items-center justify-center overflow-hidden">
                                    {/* Replace this div with actual image */}
                                    <img 
                                        src={personImage}
                                        alt="Jason Staczek" 
                                        className="w-full h-full object-cover"
                                    />
                                   
                                </div>
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <div className="absolute top-10 right-4 flex gap-2">
                            <button className="w-10 h-10  rounded-lg flex items-center justify-center transition-colors">
                                <svg 
                                    className="w-5 h-5 text-[#b9a6b6]" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button className="w-10 h-10  rounded-lg flex items-center justify-center transition-colors">
                                <svg 
                                    className="w-5 h-5 text-[#b9a6b6]" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        <button className="w-2.5 h-2.5 rounded-full bg-gray-800"></button>
                        <button className="w-2.5 h-2.5 rounded-full bg-gray-300"></button>
                        <button className="w-2.5 h-2.5 rounded-full bg-gray-300"></button>
                        <button className="w-2.5 h-2.5 rounded-full bg-gray-300"></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialBanner;