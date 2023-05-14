"use client"
import AdminHeader from '@/components/AdminHeader';
import { API_URL } from '@/components/Api';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface UpdateAdminProps {
    searchParams: {
        id: Number
    }
}

interface AdminData {
    name: string
    username: string
    password: string
}
const UpdateAdmin: React.FC<UpdateAdminProps> = ({searchParams}) => {

    const {id} = searchParams
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

    useEffect(() => {
        const getSingleAdmin =async (id: Number) => {
            try {
                const response = await axios.get(`${API_URL}/api/admin`)
                const data = await response.data
                const selectedAdmin = await data.find((admin:any) => admin.id === Number(id))
                if(selectedAdmin){
                    setAdminForm({
                        name: selectedAdmin.name,
                        username: selectedAdmin.user_name,
                        password: selectedAdmin.password
                    })
                }
                
            } catch (error) {
                console.log(error);
            }
        }
        getSingleAdmin(id)
    }, [])
    
    const updateAdmin =async (e:any) => {
        e.preventDefault()
        const {name, username, password} = adminForm
        console.log(name, username, password);
        
        if(!name || !username || !password){
            return alert('Fill up the form to create a new admin!')
        }
        try {
            const response = await axios.patch(`${API_URL}/api/admin?id=${id}`, {
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
                <h1 className='text-3xl p-5 font-black text-blue-950'>Update admin account.</h1>
                <form className='flex flex-col gap-3 bg-white w-96 p-7 bg--white rounded-sm shadow-sm' onSubmit={updateAdmin}>
                    <label htmlFor="">Full name</label>
                    <input type="text" placeholder='Enter Full name' className='p-2 text-base outline-none border' value={adminForm.name} name='name' onChange={handleChange}/>
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder='Create Username' className='p-2 text-base outline-none border' value={adminForm.username} name='username' onChange={handleChange}/>
                    <label htmlFor="">Password</label>
                    <input type="text" placeholder='Create Password' className='p-2 text-base outline-none border' value={adminForm.password} name='password' onChange={handleChange}/>
                    <button className='bg-yellow-500 mt-3 h-9 text-white text-l rounded-sm'>Update</button>
                </form>
            </main>
        </>
    );
};

export default UpdateAdmin;
