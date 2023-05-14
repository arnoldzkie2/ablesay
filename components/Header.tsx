"use client"

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Logo from './Logo';

interface HeaderProps {
    input?: String
}

const Header: React.FC<HeaderProps> = ({ input }: HeaderProps) => {

    return (
        <header className='flex justify-between px-20 h-16 items-center shadow-sm fixed top-0 left-0 w-full bg-sky-50'>
            <Logo />
            <input type="text" placeholder={`Search ${input || ''}...`} className='w-2/3 mx-20 p-3 h-10 text-base outline-none rounded-sm shadow' />
            <FontAwesomeIcon icon={faArrowRightFromBracket} className='text-2xl cursor-pointer' />
        </header>
    );
};

export default Header;
