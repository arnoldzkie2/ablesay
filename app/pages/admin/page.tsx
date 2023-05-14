import AdminHeader from '@/components/AdminHeader';
import { FC } from 'react';
interface AdminProps {
}

const Admin: FC<AdminProps> = ({ }) => {
    return (
        <>
            <AdminHeader />
            <main className='h-screen w-screen flex flex-col justify-center items-center pt-32'>
                <p>How many toys do you have?</p>
                <img src="/pic.jpg" alt="" className='h-full p-5 bg-white shadow-md overflow-x-hidden' />
            </main>
        </>
    );
};

export default Admin;
