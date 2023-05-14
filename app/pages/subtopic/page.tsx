import Header from "@/components/Header"
import SubTopic from "@/components/Subtopic"
import React from "react"

interface SubtopicProps {
  searchParams: {
      id: Number
  }
}
const SubtopicPage: React.FC<SubtopicProps>= (params) => {
  const topicID:Number = params.searchParams.id
  return (
    <>
      <Header input={'subtopic'}/>
      <main className="flex flex-col justify-start items-center h-screen mt-28">
        <div className="text-3xl justify-start w-full px-28 mb-5">Select your interested subtopic.</div>
      <div className="flex justify-start items-center px-28 w-full">
    <SubTopic topicID={topicID}/>
      </div>
      </main>
    </>
  )
}

export default SubtopicPage