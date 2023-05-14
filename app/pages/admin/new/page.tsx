"use client"
import AdminHeader from '@/components/AdminHeader';
import { API_URL } from '@/components/Api';
import axios from 'axios';
import React, { useState } from 'react';

interface NewAdminProps {
}

interface AdminData {
    name: string
    username: string
    password: string
}
const NewAdmin: React.FC<NewAdminProps> = ({  }) => {
    const [adminForm, setAdminForm] = useState<AdminData>({
        name: "",
        username: "",
        password: ""
    })

    const handleChange = (e: any) => {
        const {value, name} = e.target
        setAdminForm(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const createAdmin =async (e:any) => {
        e.preventDefault()
        const {name, username, password} = adminForm
        if(!name || !username || !password){
            return alert('Fill up the form to create a new admin!')
        }

        try {
            const request = await axios.post(`${API_URL}/api/admin`, {
                name: name,
                user_name: username,
                password: password
            })
            window.location.href = '/pages/admin/account'
        } catch (error) {
            console.log(error);
            
        }
        
    }
    
    return (
        <>
            <AdminHeader />
            <main className='w-screen h-screen flex justify-center items-center pt-16 flex-col'>
                <h1 className='text-3xl p-5 font-black text-blue-950'>Create new admin account.</h1>
                <form className='flex flex-col gap-3 bg-white w-96 p-7 bg--white rounded-sm shadow-sm' onSubmit={createAdmin}>
                    <input type="text" placeholder='Enter Full name' className='p-2 text-base outline-none border' value={adminForm.name} name='name' onChange={handleChange}/>
                    <input type="text" placeholder='Create Username' className='p-2 text-base outline-none border' value={adminForm.username} name='username' onChange={handleChange}/>
                    <input type="text" placeholder='Create Password' className='p-2 text-base outline-none border' value={adminForm.password} name='password' onChange={handleChange}/>
                    <button className='bg-yellow-500 mt-3 h-9 text-white text-l rounded-sm'>Create</button>
                </form>
            </main>
        </>
    );
};

export default NewAdmin;
