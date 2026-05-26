'use client'
import { useContext } from "react";
import friends from "../data/friends.json";
import Card from '../ui/Card';
import { userActionContext } from "../context/ActionContext";

const UsersPage = () => {

    const {actionWhat} = useContext(userActionContext); 

    return (
        <div className="px-4 sm:px-6 lg:px-10">
            <div className='flex flex-col items-center justify-center gap-5 sm:gap-8 my-12 sm:my-20 text-center'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl'>Friends to keep close in your life.</h1>
                <p className='max-w-3xl text-gray-600'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <button className="btn btn-neutral bg-[#244D2F]">+ Add New Friends</button>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10'>
                <div className="card bg-white text-primary-content shadow-lg">
                    <div className="flex text-[#244D3F] card-body justify-center items-center">
                        <h2 className="card-title">{friends.length}</h2>
                        <p className='text-[#244D3F]/80'>Total Friends</p>
                    </div>
                </div>
                <div className="card bg-white text-primary-content shadow-lg">
                    <div className="flex text-[#244D3F] card-body justify-center items-center">
                        <h2 className="card-title">{friends.length}</h2>
                        <p className='text-[#244D3F]/80'>On Track</p>
                    </div>
                </div>
                <div className="card bg-white text-primary-content shadow-lg">
                    <div className="flex text-[#244D3F] card-body justify-center items-center">
                        <h2 className="card-title">{friends.length}</h2>
                        <p className='text-[#244D3F]/80'>Need Attention</p>
                    </div>
                </div>
                <div className="card bg-white text-primary-content shadow-lg">
                    <div className="flex text-[#244D3F] card-body justify-center items-center">
                        <h2 className="card-title">{actionWhat.length}</h2>
                        <p className='text-[#244D3F]/80'>Interaction This Month</p>
                    </div>
                </div>
            </div>
            <hr className=" container mx-auto my-10" />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-10 gap-5'>
                {
                    friends.map((friends, index) => (
                        <Card key={index} friends = {friends}></Card>
                    ))
                }
            </div>
        </div>
    );
};

export default UsersPage;
