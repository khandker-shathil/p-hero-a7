'use client'
import { useContext } from "react";
import { userActionContext } from "../context/ActionContext";
import Image from "next/image";

const TimeLinePage = () => {
    const {actionWhat} = useContext(userActionContext); 

    if (!actionWhat.length) {return (
        <div className='container mx-auto mt-6 sm:mt-10 space-y-6 px-4 sm:px-5 py-8 sm:py-10'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold'>TimeLine</h1>
            <div className='shadow-lg rounded p-4'>
            <h1 className='text-error text-3xl sm:text-4xl lg:text-5xl font-bold'>No Activity Found</h1>
            </div>
        </div>)}

    return (
    <div className="container mx-auto space-y-6 px-4 sm:px-5 py-8 sm:py-10">
        <h1 className="mt-6 sm:mt-10 text-4xl sm:text-5xl lg:text-6xl font-bold">TimeLine</h1>
        <div className="flex flex-col gap-4">
            {actionWhat.map((item, index) => (
            <div key={index} className="w-full shadow-sm">
                <div className="flex flex-col sm:flex-row p-4 gap-3 sm:gap-2 items-start sm:items-center">
                {item.action === 'video' ? (<Image src={"/video.png"} width={50} height={50} alt="video icon"></Image>) :
                item.action === 'text' ? (<Image src={"/text.png"} width={50} height={50} alt="text icon"></Image>) :
                (<Image src={"/call.png"} width={50} height={50} alt="call icon"></Image>)}
                <div>
                    <h2 className="card-title flex flex-wrap">{item.action.toUpperCase()} <span className="font-medium text-gray-500">with {item.result}</span></h2>
                    <p className="text-gray-500">{item.formatted}</p>
                </div>
                </div>
            </div>
            ))}
        </div>
    </div>
    );
};

export default TimeLinePage;
