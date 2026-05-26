import ConnectionButton from "@/app/components/ConnectionButton";
import friends from "../../data/friends.json";
import Image from "next/image";

const DetailsPage = async ({ params }) => {
    const { usersid } = await params;
    const result = friends.find(({ id }) => id === Number(usersid));
 
    if (!result) return <p className="p-10 text-gray-500">Friend not found.</p>;

    return (
        <div className="bg-gray-100 p-4 sm:p-6 lg:p-8 flex items-center justify-center">
            <div className="w-full max-w-6xl gap-6 grid grid-cols-1 lg:grid-cols-2">
                {/* Left Side */}
                {/* Profile Card */}
                <div className="flex flex-col gap-3 space-y-5">
                    <div className="flex flex-col items-center justify-center shadow rounded-2xl bg-white p-5 gap-5 text-center">
                        <Image className="rounded-full" height={100} width={100} src={result.picture} alt={result.name}></Image>
                        <p className="font-bold text-black text-2xl">{result.name}</p>
                        <div className={result.status === 'Overdue' ? 'bg-red-400 rounded-full text-sm p-1 text-white' : 
                        result.status === 'On-track' ? 'bg-green-900 rounded-full text-sm p-1 text-white' :
                        'bg-orange-300 rounded-full text-sm p-1 text-white'}>
                        {result.status}
                        </div>
                        <div className="flex flex-wrap justify-center gap-2">
                            {
                                result.tags.map((t, ind) => (
                                    <p key={ind} className='rounded-2xl bg-[#CBFADB] p-1 text-sm text-green-950'>{t}</p>
                                ))
                            }
                        </div>
                        <p className="text-gray-500">{result.bio}</p>
                    </div>
                    {/* Buttons Section */}
                    <div className="flex flex-col space-y-4">
                        <button className="btn btn-ghost shadow text-black bg-white">Snooze</button>
                        <button className="btn btn-ghost shadow text-black bg-white">Archieve</button>
                        <button className="btn btn-ghost btn-error bg-white shadow">Delete</button>
                    </div>
                </div>
                {/* Right Section */}
                <div className="space-y-5">
                    {/* Three Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="flex flex-col justify-center items-center shadow bg-white text-[#244D2F] rounded-2xl p-5 min-h-36 sm:min-h-44 lg:min-h-[200px] text-3xl lg:text-4xl text-center">{result.days_since_contact} <span className="text-gray-400 text-xl lg:text-2xl">days</span></div>
                        <div className="flex flex-col justify-center items-center shadow bg-white text-[#244D2F]  rounded-2xl p-5 min-h-36 sm:min-h-44 lg:min-h-[200px] text-3xl lg:text-4xl text-center">{result.goal} <span className="text-gray-400 text-xl lg:text-2xl">days Goal</span></div>
                        <div className="flex flex-col justify-center items-center shadow bg-white text-[#244D2F]  rounded-2xl p-5 min-h-36 sm:min-h-44 lg:min-h-[200px] text-xl lg:text-2xl text-center break-words">{result.next_due_date}<span className="text-gray-400">Next Due</span></div>
                    </div>
                    {/* One Card Relationship */}
                    <div className="shadow rounded-2xl bg-white text-black p-5">
                        <div className="flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center">
                            <p className="text-2xl sm:text-3xl text-[#244D2F]">Relationship Goal</p>
                            <button className="btn btn-soft">Edit</button>
                        </div>
                        <p className="">Connect Every <span className="font-bold">30 Days</span></p>
                    </div>
                    {/* Call Button Section */}
                    <div className="flex flex-col gap-10 shadow bg-white text-black rounded-2xl p-5">
                        <div className="flex justify-between items-center">
                            <p className="font-bold text-[#244D2F]">Quick Check-In</p>
                        </div>
                        {/* <div className="flex space-x-1">
                            <button  className="btn btn-soft h-32 w-1/3 flex flex-col text-2xl"><span><Image src='/call.png' width={30} height={10} alt="call icon"></Image></span>Call</button>
                            <button className="btn btn-soft h-32 w-1/3 flex flex-col text-2xl"><span><Image src='/text.png' width={30} height={10} alt="call icon"></Image></span>Text</button>
                            <button className="btn btn-soft h-32 w-1/3 flex flex-col text-2xl"><span><Image src='/video.png' width={30} height={10} alt="call icon"></Image></span>Video</button>
                        </div> */}
                        <ConnectionButton result ={result.name}></ConnectionButton>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DetailsPage;
