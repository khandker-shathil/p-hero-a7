import Link from "next/link";
import friends from "../data/friends.json";
import Card from '../ui/Card';

const UsersPage = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center gap-10 my-20'>
                <h1 className='text-5xl'>Friends to keep close in your life.</h1>
                <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <button className="btn btn-neutral bg-[#244D2F]">+ Add New Friends</button>
            </div>
            <div className='grid grid-cols-4 gap-10 mx-10'>
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
                        <h2 className="card-title">{friends.length}</h2>
                        <p className='text-[#244D3F]/80'>Interaction This Month</p>
                    </div>
                </div>
            </div>
            <hr className="border-gray-100 mx-10 my-10" />
            <div className='grid grid-cols-4 mx-10 my-10 gap-5'>
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