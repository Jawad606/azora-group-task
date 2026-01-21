import React from "react";
import brandIcon from "../assets/brandIcon.svg";
import USAFLAG from "../assets/usa.svg";
import FooterFaceBook from "../assets/footerFacebook.svg";
import FooterTwitter from "../assets/footerTwitter.svg";
import FooterInstagram from "../assets/footerInstagram.svg";
import FooterYoutube from "../assets/footerYoutube.svg";
const Footer = () => {
  const navigationSections = [
    {
      links: [
        { text: "Home", href: "#" },
        { text: "How It Works", href: "#" },
        { text: "All Apps", href: "#" },
        { text: "Pricing", href: "#" },
        { text: "Setapp for Teams", href: "#" },
        { text: "Blog", href: "#" },
        { text: "Podcast", href: "#" },
        { text: "Download", href: "#" },
      ],
    },
    {
      links: [
        { text: "About", href: "#" },
        { text: "Support", href: "#" },
        { text: "Education Discount", href: "#" },
        { text: "Family Plan", href: "#" },
        { text: "For Developers", href: "#" },
        { text: "Gift Cards", href: "#" },
        { text: "Redeem Card or Code", href: "#" },
        { text: "Setapp Reviews", href: "#" },
        { text: "Affiliate Program", href: "#" },
        { text: "Mac Developer Survey 2023", href: "#" },
      ],
    },
    {
      links: [
        { text: "Getting started with Setapp", href: "#" },
        { text: "Remote access to other Mac", href: "#" },
        { text: "Fix macOS Ventura problems", href: "#" },
        { text: "Best productivity apps", href: "#" },
        { text: "Best YouTube downloaders", href: "#" },
        { text: "Uninstall apps", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: FooterFaceBook, href: "#", label: "Facebook" },
    { icon: FooterTwitter, href: "#", label: "Twitter" },
    { icon: FooterInstagram, href: "#", label: "Instagram" },
    { icon: FooterYoutube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-background text-gray-300">
      <div className=" mx-auto px-6 py-16">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left column - Logo and newsletter */}
          <div className="lg:col-span-1">
            <div className="flex items-center  gap-2 mb-8">
              <img
                src={brandIcon}
                alt="Setapp Brand Icon"
                className="w-8 h-8 object-contain"
              />
              <span className="text-white text-xl font-semibold tracking-wider">
                SETAPP
              </span>
            </div>

            <p className="text-sm mb-6">
              Updates from our team, written with love 🧡
            </p>

            <div className="flex w-full md:w-2/4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-[#3a3a3a] text-gray-300 px-4 py-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-500"
              />
              <button className="bg-white text-gray-800 px-4 md:px-6 py-3 rounded-r-md hover:bg-gray-100 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation columns */}
          <div className="lg:col-span-1 grid lg:grid-cols-3 ">
            {navigationSections.map((section, sectionIndex) => (
              <nav key={sectionIndex}>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-sm hover:text-white transition-colors"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 border-b-2 border-gray-500 pb-6 mb-6">
          <div className="flex items-center gap-2 bg-[#3a3a3a] rounded">
            <span className="text-xs p-2 font-semibold bg-[#969799]">DMCA</span>
            <span className="text-xs p-2">PROTECTED</span>
          </div>
          <div className="h-4 border-l border-gray-500 flex gap-2 items-center">
            <img
              src={USAFLAG}
              alt="USA Flag"
              className="w-6 h-4 object-contain"
            />
            <span className="text-xs p-2">English</span>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.63739 7.66782L9.74504 3.56017C9.90557 3.39964 10 3.18245 10 2.94638C10 2.71031 9.90557 2.49312 9.74504 2.33259C9.58451 2.17207 9.36733 2.07764 9.13126 2.07764C8.89518 2.07764 8.678 2.17207 8.51747 2.33259L5.00472 5.84534L1.49197 2.33259C1.33144 2.17207 1.11426 2.07764 0.878187 2.07764C0.642115 2.07764 0.424929 2.17207 0.264401 2.32315C0.0849861 2.49312 0 2.71975 0 2.94638C0 3.16357 0.0849857 3.38075 0.245514 3.56017C1.322 4.6461 4.11709 7.45063 4.30595 7.64893L4.32483 7.66782C4.66478 8.00776 5.29745 8.00776 5.63739 7.66782Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        {/* Bottom section */}
        <div className=" pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Left side - DMCA and copyright */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <p className="text-xs text-gray-400">
                  &copy; 2023 Setapp Limited, 9 Tallow Street, Youghal, Co.
                  Cork, P36YE14, Ireland. Reg. 584165. VAT ID: IE34250016H
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    Terms of Use
                  </a>
                  <a
                    href="#"
                    className="text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>

            {/* Right side - Language selector and social icons */}
            <div className="flex items-center gap-6">
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full  flex items-center justify-center opacity-85 transition-colors"
                  >
                    <img className="text-sm font-semibold" src={social.icon} alt={social.label} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
