import React from 'react';

const Banner = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-10 my-20'>
            <h1 className='text-5xl'>Friends to keep close in your life.</h1>
            <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <button className="btn btn-neutral bg-[#244D2F]">+ Add New Friends</button>
        </div>
    );
};

export default Banner;