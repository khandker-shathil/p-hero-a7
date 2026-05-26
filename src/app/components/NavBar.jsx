'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoHomeOutline } from "react-icons/io5";
import { MdTimeline } from "react-icons/md";
import { RiTimeLine } from "react-icons/ri";

const NavBar = () => {
    const pathName = usePathname();
    return (
            <div className="navbar bg-base-100 shadow-sm px-4 sm:px-8 lg:px-15 flex-col justify-between sm:flex-row gap-3 sm:gap-0">
                <div className="navbar-start w-full sm:w-auto justify-center sm:justify-start">
                    <Link href="/" className="btn btn-ghost text-xl p-1">
                        <Image alt='logo' height={100} width={100} src="/logo.png" />
                    </Link>
                </div>
                <div className="navbar-end w-full sm:w-auto justify-center sm:justify-end gap-2 sm:gap-4 flex-wrap">
                    <Link href="/" className={pathName === '/' ? "btn btn-sm sm:btn-md bg-[#244D2F] text-white" : 'btn btn-sm sm:btn-md'}><IoHomeOutline/> Home</Link>
                    <Link href="/timeline" className={pathName === '/timeline' ? "btn btn-sm sm:btn-md bg-[#244D2F] text-white" : 'btn btn-sm sm:btn-md'}><RiTimeLine/>Timeline</Link>
                    <Link href="/stats" className={pathName === '/stats' ? "btn btn-sm sm:btn-md bg-[#244D2F] text-white" : 'btn btn-sm sm:btn-md'}><MdTimeline/>Stats</Link>
                </div>
            </div>
    );
};

export default NavBar;
