import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='flex flex-col justify-center items-center pt-10 sm:pt-15 px-4 bg-[#244D3F] text-center'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl text-white'><span className='font-bold'>Keen</span>Keeper</h1>
            <p className='text-gray-300 mt-5 max-w-3xl'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <p className='mt-5 text-gray-300'>Social Links</p>
            <div className='flex gap-5 mt-5 text-xl text-white'>
                <FaInstagram/>
                <FaFacebookF/>
                <FaSquareXTwitter/>
            </div>
            <hr className="w-11/12 border-t border-gray-100 my-10" />
            <div className='flex flex-col md:flex-row items-center gap-4 md:gap-5 py-5 text-gray-300'>
                <p className=''>© 2026 KeenKeeper. All rights reserved.</p>
                <div className='flex flex-col sm:flex-row gap-3 sm:gap-5'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
