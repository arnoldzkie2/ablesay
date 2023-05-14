import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const POST = async (req: Request) => {
    const { search } = new URL(req.url);
    const params = new URLSearchParams(search);
    const subtopicID: any = params.get('id');
    const { question } = await req.json()
    try {
        const subtopic = await prisma.subtopic.findUnique({
            where: { id: Number(subtopicID) }
        })
        if (!subtopic) {
            return new Response(`No subtopic that contains that id...`)
        }
        const newQuestion: any = await prisma.question.create({
            data: {
                question: question,
                subtopic: {
                    connect: {
                        id: Number(subtopicID)
                    }
                }
            }
        })
        return new Response(JSON.stringify(newQuestion))
    } catch (error) {
        console.log(error);
    } finally {
        await prisma.$disconnect()
    }
}

export const GET = async (req: Request) => {
    const { search } = new URL(req.url);
    const params = new URLSearchParams(search);
    const subtopicID: any = params.get('id')
    try {
        const question = await prisma.question.findMany({
            where: {
                subtopic_id: Number(subtopicID)
            }
        })

        return new Response(JSON.stringify(question))
    } catch (error) {
        console.log(error);

    } finally {
        await prisma.$disconnect()
    }
}

export const PATCH = async (req: Request) => {
    const { search } = new URL(req.url);
    const params = new URLSearchParams(search);
    const questionID: any = params.get('id');
    const { question } = await req.json()
    try {

        if (!questionID) {
            return new Response('No subtopics that contains that id')
        }

        const updateQuestion: any = await prisma.question.update({
            data: {
                question: question
            },
            where: {
                id: Number(questionID)
            }
        })
        return new Response(JSON.stringify(updateQuestion))
    } catch (error) {
        console.log(error);
    } finally {
        await prisma.$disconnect()
    }
}

export const DELETE = async (req: Request) => {
    const { search } = new URL(req.url);
    const params = new URLSearchParams(search);
    const questionID: any = params.get('id');
    try {
        if (!questionID) {
            return new Response('No subtopics that contains that id')
        }
        const deletedQuestion = await prisma.question.delete({
            where: {
                id: Number(questionID)
            }
        })
        return new Response(`You deleted ${deletedQuestion}`)
    } catch (error) {
        console.log(error);

    }
}