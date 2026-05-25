'use client'
import { createContext, useState } from 'react';
import React from 'react';
import { toast } from 'react-toastify';

export const userActionContext = createContext()

const ActionContext = ({children}) => {
    const [actionWhat, setActionWhat] = useState([]);
            const handleActions = (result, action) => {
            const now = new Date ();
            const formatted = now.toLocaleDateString("en-GB"); // dd/mm/yyyy
            setActionWhat(prev => [...prev, {result, action, formatted}]) 
            toast.success(action.toUpperCase() + " " + result + " " + "Inserted")
        }
    const data = {
        actionWhat,
        setActionWhat,
        handleActions
    };
    return <userActionContext.Provider value={data}>{children}</userActionContext.Provider>
};

export default ActionContext;