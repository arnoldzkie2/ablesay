"use client"
import AdminHeader from '@/components/AdminHeader';
import { API_URL } from '@/components/Api';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface AdminAccountProps {
}

interface AllAdmin {
    id: Number
    name: String
    user_name: String
    password: String
}

const AdminAccount: React.FC<AdminAccountProps> = ({ }) => {

    const [allAdmin, setAllAdmin] = useState<AllAdmin[]>([])

    const getAllAdmin = async() => {
        try {
            const response = await axios.get(`${API_URL}/api/admin`)
            setAllAdmin(response.data)
        } catch (error) {
            console.log(error);
            
        }            
    }
    useEffect(() => {
        getAllAdmin()
    }, [])

    const deleteAdmin = async (id:Number) => {
        try {
            const request = await axios.delete(`${API_URL}/api/admin?id=${id}`)
            getAllAdmin()
        } catch (error) {
            console.log(error);
            
        }
    }
    return (
        <>
            <AdminHeader />
            <main className='flex justify-center flex-col items-start w-screen h-screen pt-12 overflow-hidden'>
                <Link href='/pages/admin/new' className='mx-20 mt-16 p-2 rounded-sm shadow-sm text-l text-white bg-yellow-400'>New Admin </Link>
                <div className="flex flex-col w-full h-full mt-2 p-16 pt-3 overflow-hidden">
                    <div className="overflow-x-auto">
                        <div className="p-1.5 w-full inline-block align-middle">
                            <div className="overflow-hidden border rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-white">
                                     <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-sm font-bold text-left text-gray-500 uppercase "
                                            >
                                                #
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-sm font-bold text-left text-gray-500 uppercase "
                                            >
                                                Name
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-sm font-bold text-left text-gray-500 uppercase "
                                            >
                                                Username
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-sm font-bold text-left text-gray-500 uppercase "
                                            >
                                                Password
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-sm font-bold text-right text-gray-500 uppercase "
                                            >
                                                Update
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-sm font-bold text-right text-gray-500 uppercase "
                                            >
                                                Delete
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                            {allAdmin.length > 0 && allAdmin.map((admin, i) => {
                                                return (
                                        <tr key={admin.id.toString()}>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                                {i + 1}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                {admin.name}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                {admin.user_name}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                {admin.password}
                                            </td>
                                            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                                <Link
                                                    className="text-green-500 hover:text-green-700"
                                                    href={`/pages/admin/update?id=${admin.id}`}
                                                >
                                                    Update
                                                </Link>
                                            </td>
                                            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                                <Link
                                                    className="text-red-500 hover:text-red-700"
                                                    href="/pages/admin/account"
                                                    onClick={() => deleteAdmin(admin.id)}
                                                >
                                                    Delete
                                                </Link>
                                            </td>
                                        </tr>
                                                )
                                            })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </>
    );
};

export default AdminAccount;
