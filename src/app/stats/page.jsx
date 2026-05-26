"use client";
import React, { useContext } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { userActionContext } from '../context/ActionContext';


const StatsPage = () => {
    const {actionWhat} = useContext(userActionContext); 
    const textCount = actionWhat.filter((item) => item.action === "text").length;
    const callCount = actionWhat.filter((item) => item.action === "call").length;
    const videoCount = actionWhat.filter((item) => item.action === "video").length;

    const total = textCount + callCount + videoCount;
    if (total === 0) {return (
        <div className='container mx-auto mt-6 sm:mt-10 space-y-6 px-4 sm:px-5 py-8 sm:py-10'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold'>Friendship Analytics</h1>
            <div className='shadow-lg rounded p-4'>
            <h1 className='text-error text-3xl sm:text-4xl lg:text-5xl font-bold'>No Stats Found</h1>
            </div>
        </div>)}

    return (
        <div className='container mx-auto mt-6 sm:mt-10 space-y-6 px-4 sm:px-5 py-8 sm:py-10'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold'>Friendship Analytics</h1>
            <div className='shadow-lg rounded p-4 overflow-x-auto'>
            <h1 className='text-[#244D2F]'>By Interaction Type</h1>
            <PieChart
                series={[
                    {
                    data: [
                        { id: 0, value: textCount, label: 'text' },
                        { id: 1, value: callCount, label: 'call' },
                        { id: 2, value: videoCount, label: 'video' },
                    ],
                    },
                ]}
                width={200}
                height={200}
                />
            </div>
        </div>
    );
};

export default StatsPage;
