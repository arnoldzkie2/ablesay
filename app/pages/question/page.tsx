import Activities from '@/components/Activities';
import Header from '@/components/Header';
import Question from '@/components/Question';
import React from 'react';
interface QuestionProps {
    searchParams: {
        id: Number
    }
}

const QuestionPage: React.FC<QuestionProps> = (params) => {
    const subtopicID:Number = params.searchParams.id
    return (
        <>
            <Header input={'activities'} />
            <main className="flex flex-col justify-start pt-24 h-screen p-5">
                <Activities />
                <Question subtopicID={subtopicID}/>
            </main>
        </>
    );
};

export default QuestionPage;
