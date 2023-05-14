"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { API_URL } from './Api';

interface AllTopic {
    topic_name: String
    id: Number
}
const Topic: React.FC = ({ }) => {

    const [allTopic, setAllTopic] = useState<AllTopic[]>([])

    useEffect(() => {
        const getAllSubtopic = async () => {
            const response = await axios.get(`${API_URL}/api/topic`)
            setAllTopic(response.data)
        }
        getAllSubtopic()
    }, [])

    return (
        <>
            {allTopic.length > 0 && allTopic.map(item => (
                <Link href={`/pages/subtopic?id=${item.id}`} className='bg-white w-48 cursor-pointer text-2xl h-20 shadow-md rounded-md flex items-center justify-center' key={item.id.toString()}>
                    {item.topic_name}
                </Link>
            ))}
        </>
    );
};

export default Topic;
