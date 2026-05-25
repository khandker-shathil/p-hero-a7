"use client";
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { userActionContext } from '../context/ActionContext';

const ConnectionButton = ({result}) => {
    const {handleActions} = useContext(userActionContext); 
    return (
    <div className="flex space-x-1">
        <button onClick={()=>{handleActions(result, "call")}} className="btn btn-soft h-32 w-1/3 flex flex-col text-2xl"><span><Image src='/call.png' width={30} height={10} alt="call icon"></Image></span>Call</button>
        <button onClick={()=>{handleActions(result, "text")}} className="btn btn-soft h-32 w-1/3 flex flex-col text-2xl"><span><Image src='/text.png' width={30} height={10} alt="call icon"></Image></span>Text</button>
        <button onClick={()=>{handleActions(result, "video")}} className="btn btn-soft h-32 w-1/3 flex flex-col text-2xl"><span><Image src='/video.png' width={30} height={10} alt="call icon"></Image></span>Video</button>
    </div>
  );
}

export default ConnectionButton;