"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { API_URL } from './Api';
interface SubTopicProps {
    topicID: Number
}

interface allSubtopic {
    subtopic_name: String
    id: Number
}

const SubTopic: React.FC<SubTopicProps> = ({ topicID }: SubTopicProps) => {

    const [allSubtopic, setAllSubtopic] = useState<allSubtopic[]>([])

    useEffect(() => {
        const getAllSubtopic = async () => {
            const response = await axios.get(`${API_URL}/api/subtopic?id=${topicID}`)
            setAllSubtopic(response.data)
        }
        getAllSubtopic()
    }, [])

    return (
        <div className='flex-col flex w-full gap-3'>
            {allSubtopic.length > 0 ? allSubtopic.map((item, i) => {
                return (
                    <Link href={`/pages/question?id=${item.id}`} key={item.id.toString()} className='w-full flex text-xl font-bold'><span className='text-white bg-blue-950 w-7 rounded-sm flex justify-center mr-3'>{i + 1}</span>{item.subtopic_name}</Link>
                )
            }) : <div className='mt-10 text-2xl font-bold text-red-500'>This topic has 0 subtopics.....</div>}
        </div>
    );
};

export default SubTopic;
