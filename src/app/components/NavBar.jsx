'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBar = () => {
    const pathName = usePathname();
    return (
            <div className="navbar bg-base-100 shadow-sm px-15">
                <div className="navbar-start">
                    <Link href="/" className="btn btn-ghost text-xl">
                        <Image alt='logo' height={100} width={100} src="/logo.png" />
                    </Link>
                </div>
                <div className="navbar-end gap-4">
                    <Link href="/" className={pathName === '/' ? " btn bg-[#244D2F]" : 'btn'}>Home</Link>
                    <Link href="/timeline" className={pathName === '/timeline' ? " btn bg-[#244D2F]" : 'btn'}>Timeline</Link>
                    <Link href="/stats" className={pathName === '/stats' ? " btn bg-[#244D2F]" : 'btn'}>Stats</Link>
                </div>
            </div>
    );
};

export default NavBar;
