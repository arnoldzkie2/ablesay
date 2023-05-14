"use client"
import { faHome, faArrowRightFromBracket, faUserShield, faPersonChalkboard, faComments } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Link from 'next/link';

interface AdminHeaderProps {
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ }) => {
    return (
        <header className='flex justify-between px-20 h-16 items-center shadow-sm fixed top-0 left-0 w-full bg-sky-50'>
            <Link href='/pages/admin'>
                <h1 className='text-3xl font-black text-sky-950'>Able<span className='text-yellow-500'>Say</span></h1>
            </Link>
            <ul className='flex'>
                <Link href='/pages/admin' className='hover:text-blue-500 text-lg mx-8 text-gray-700 flex items-center justify-center'><FontAwesomeIcon icon={faHome} className='text-xl cursor-pointer mr-2' />
                    Home</Link>
                <Link href='/pages/admin/account' className='hover:text-blue-500 text-lg mx-8 text-gray-700'><FontAwesomeIcon icon={faUserShield} /> Admin</Link>
                <Link href='/' className='hover:text-blue-500 text-lg mx-8 text-gray-700'><FontAwesomeIcon icon={faPersonChalkboard} /> Teacher</Link>
                <Link href='/' className='hover:text-blue-500 text-lg mx-8 text-gray-700'><FontAwesomeIcon icon={faComments} /> Topic</Link>
            </ul>
            <FontAwesomeIcon icon={faArrowRightFromBracket} className='text-2xl cursor-pointer' />
        </header>
    );
};

export default AdminHeader;
