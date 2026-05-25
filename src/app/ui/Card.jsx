import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = ({friends}) => {
    return (
        <Link href={`/users/${friends.id}`}>
            <div className='shadow-2xl h-full rounded-2xl p-10 flex flex-col items-center justify-center gap-5'>
                <Image className='rounded-full' width={60} height={60} src={friends.picture} quality={50} alt={friends.name}></Image>
                {friends.name}
                <p className='text-gray-500'>{friends.days_since_contact}d ago</p>
                <div className='flex gap-2'>
                    {
                        friends.tags.map((m,index) => (
                            <p key={index} className='rounded-2xl bg-[#CBFADB] p-1 text-sm text-green-950'>{m}</p>
                        ))
                    }
                </div>
                <div className={friends.status === 'Overdue' ? 'bg-red-400 rounded-full text-sm p-1 text-white' : 
                    friends.status === 'On-track' ? 'bg-green-900 rounded-full text-sm p-1 text-white' :
                    'bg-orange-300 rounded-full text-sm p-1 text-white'}>
                    {friends.status}
                </div>
            </div>
        </Link>
    );
};

export default Card;