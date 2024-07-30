import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import footerLogo from "../assets/FooterLogo.png";

function Footer() {
    return (
        <div className="w-full bg-white">
            <div className="newsletter-container flex flex-col items-center justify-center gap-6 py-8 md:flex-row md:gap-10">
                <div className="flex flex-col items-center text-center md:text-left md:w-[381px] md:items-start">
                    <h2 className="text-[24px] font-bold md:text-[28px]">
                        Subscribe to our newsletter
                    </h2>
                    <p className="text-gray-600 w-[290px] mb-4">
                        Share your email & phone number to stay updated with our latest news.
                    </p>
                </div>
                <div className="flex flex-col items-center gap-4 w-full px-4 md:flex-row md:w-auto">
                    <div className="flex flex-col w-full max-w-[285px] md:w-[285px]">
                        <label htmlFor="email" className="text-[12px] font-[400]">
                            Your Email
                        </label>
                        <input
                            type="email"
                            placeholder="example@email.com"
                            className="w-full h-[21px] text-[14px] font-[400] py-2 px-2"
                        />
                        <hr className="w-full" />
                    </div>
                    <div className="flex flex-col w-full max-w-[285px] md:w-[285px]">
                        <label htmlFor="phone" className="text-[12px] font-[400]">
                            Your Phone
                        </label>
                        <input
                            type="tel"
                            placeholder="+99 1010 - 000 - 666"
                            className="w-full h-[21px] text-[14px] font-[400] py-2 px-2"
                        />
                        <hr className="w-full" />
                    </div>
                    <button className="bg-[#2D2E80] text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300">
                        Subscribe
                    </button>
                </div>
            </div>
            <div className="flex justify-center gap-12 bg-[#2D2E80] text-white py-8">
                <div className="flex flex-col items-center gap-8 px-8 md:flex-row md:items-start">
                    <div className="flex flex-col items-center text-center md:items-start md:w-[138px]">
                        <img src={footerLogo} alt="Logo" className="h-16 mb-4" />
                        <div className="flex space-x-4">
                            <a href="#" target="_blank" className="text-white hover:text-gray-400">
                                <FaFacebookF />
                            </a>
                            <a href="#" target="_blank" className="text-white hover:text-gray-400">
                                <FaInstagram />
                            </a>
                            <a href="#" target="_blank" className="text-white hover:text-gray-400">
                                <FaYoutube />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col md:items-start md:w-[855px] md:ml-[170px]">
                        <div className="flex flex-wrap justify-center gap-4 md:justify-start md:gap-[100px]">
                            <h3 className="text-lg font-semibold mb-2">Lorem ipsum</h3>
                            <h3 className="text-lg font-semibold mb-2">Lorem ipsum</h3>
                            <h3 className="text-lg font-semibold mb-2">Lorem ipsum</h3>
                            <h3 className="text-lg font-semibold mb-2">Lorem ipsum</h3>
                        </div>
                        <div className="text-[13px] font-[400] text-gray-400 mt-4 md:mt-0">
                            LawExamsPrep is dedicated to providing comprehensive resources and support for law students and professionals preparing for various legal exams. Our mission is to empower aspiring lawyers with the knowledge and tools they need to succeed in their careers.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
