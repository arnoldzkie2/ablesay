import Link from 'next/link';
import React from 'react';

interface ActivitiesProps {

}

const Activities: React.FC<ActivitiesProps> = ({ }) => {
    return (
        <nav className='flex justify-center gap-8 mb-5 px-12 max-w-full overflow-x'>
            <Link href={`/subtopic/question/sentence-completion`} className='bg-white w-56 flex justify-center h-9 items-center shadow-md text-blue-500 rounded-sm'>
                SENTENCE COMPLETION
            </Link>
            <Link href={`/subtopic/question/contrasting`} className='bg-white w-56 flex justify-center h-9 items-center shadow-md text-blue-500 rounded-sm'>
                CONTRASTING
            </Link>
            <Link href={`/subtopic/question/read-aloud`} className='bg-white w-56 flex justify-center h-9 items-center shadow-md text-blue-500 rounded-sm'>
                READ-ALOUD
            </Link>
            <Link href={`/subtopic/question/role-play`} className='bg-white w-56 flex justify-center h-9 items-center shadow-md text-blue-500 rounded-sm'>
                ROLE-PLAY
            </Link>
            <Link href={`/subtopic/question/unscramble`} className='bg-white w-56 flex justify-center h-9 items-center shadow-md text-blue-500 rounded-sm'>
                UNSCRAMBLE
            </Link>
            <Link href={`/subtopic/question/dialogue-completion`} className='bg-white w-56 flex justify-center h-9 items-center shadow-md text-blue-500 rounded-sm'>
                DIALOGUE COMPLETION
            </Link>
        </nav>
    );
};

export default Activities;
