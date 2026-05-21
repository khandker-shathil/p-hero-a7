import React from 'react';

const Footer = () => {
    return (
        <div className='flex flex-col justify-center items-center pt-15 bg-[#244D3F]'>
            <h1 className='text-6xl text-white'><span className='font-bold'>Keen</span>Keeper</h1>
            <p className='text-gray-300 mt-5'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <p className='mt-5 text-gray-300'>Social Links</p>
            <div className='flex gap-5 mt-5'>
                <p>Insta</p>
                <p>FB</p>
                <p>X</p>
            </div>
            <hr className="w-11/12 border-t border-gray-100 my-10" />
            <div className='flex gap-5 py-5 text-gray-300'>
                <p className=''>© 2026 KeenKeeper. All rights reserved.</p>
                <div className='flex gap-5'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;