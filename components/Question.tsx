"use client"

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_URL } from './Api';

interface QuestionProps {
    subtopicID: Number
}

interface AllQuestion {
    id: Number
    question: String
}

const Question: React.FC<QuestionProps> = ({subtopicID}) => {

    const [allQuestion, setAllQuestion] = useState<AllQuestion[]>([])
    useEffect(() => {
        const getAllQuestion =async () => {
            const response = await axios.get(`${API_URL}/api/question?id=${subtopicID}`)
            setAllQuestion(response.data)
        }
        getAllQuestion()
    }, )
    return (
        <ul className="text-3xl w-full h-full items-center flex justify-start mt-10 flex-col">
            {allQuestion.length > 0 ? allQuestion.map(item => {
                return (
                    <li className='list-decimal font-bold' key={item.id.toString()}><span className='font-normal'>{item.question}</span></li>
                )
            }): <div className='mt-10 text-2xl text-red-500'>This Subtopic contains 0 Questions.</div> }
        </ul>
    );
};

export default Question;
