import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const POST = async (req: Request) => {
    const { search } = new URL(req.url);
    const params = new URLSearchParams(search);
    const topicID: any = params.get('id');
    const { subtopic_name } = await req.json()
    try {
        const topic = await prisma.topic.findUnique({
            where: { id: Number(topicID) }
        })
        if (!topic) {
            return new Response(`No topic that contains that id...`)
        }
        const subTopic: any = await prisma.subtopic.create({
            data: {
                subtopic_name: subtopic_name,
                topic: {
                    connect: {
                        id: Number(topicID)
                    }
                }
            }
        })
        return new Response(JSON.stringify(subTopic))
    } catch (error) {
        console.log(error);
    } finally {
        await prisma.$disconnect()
    }
}

export const GET = async (req: Request) => {
    const { search } = new URL(req.url);
    const params = new URLSearchParams(search);
    const topicID: any = params.get('id')
    try {
        const subtopics = await prisma.subtopic.findMany({
            where: {
                topic_id: Number(topicID)
            }
        })

        return new Response(JSON.stringify(subtopics))
    } catch (error) {
        console.log(error);

    } finally {
        await prisma.$disconnect()
    }
}

export const PATCH = async (req: Request) => {
    const { search } = new URL(req.url);
    const params = new URLSearchParams(search);
    const subTopicID: any = params.get('id');
    const { subtopic_name } = await req.json()
    try {

        if (!subTopicID) {
            return new Response('No subtopics that contains that id')
        }

        const subTopic: any = await prisma.subtopic.update({
            data: {
                subtopic_name: subtopic_name
            },
            where: {
                id: Number(subTopicID)
            }
        })
        return new Response(JSON.stringify(subTopic))
    } catch (error) {
        console.log(error);
    } finally {
        await prisma.$disconnect()
    }
}

export const DELETE = async (req: Request) => {
    const { search } = new URL(req.url);
    const params = new URLSearchParams(search);
    const subTopicID: any = params.get('id');

    try {
        if (!subTopicID) {
            return new Response('No subtopics that contains that id')
        }

        const deletedSubtopic = await prisma.subtopic.delete({
            where: {
                id: Number(subTopicID)
            }
        })

        return new Response(`You deleted ${deletedSubtopic}`)
    } catch (error) {
        console.log(error);

    }
}