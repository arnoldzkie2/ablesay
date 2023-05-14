import Header from "@/components/Header"
import Topic from "@/components/Topic"
import React from "react"

interface TopicProps {

}


const TopicPage:React.FC<TopicProps> = () => {
  return (
    <>
      <Header input={'topic'} />
      <main className="flex-col justify-center items-center h-screen flex">
        <div className="text-3xl">Choose your interested topic.</div>
        <div className="flex justify-evenly items-center p-28 w-full flex-wrap gap-10">
          <Topic />
        </div>
      </main>
    </>
  )
}
export default TopicPage