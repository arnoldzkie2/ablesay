import { PrismaClient } from '@prisma/client';
import { URLSearchParams, URL } from 'url';

const prisma = new PrismaClient();

export const POST = async (req: Request) => {
  const { topic_name } = await req.json()
  try {
    const topic: any = await prisma.topic.create({
      data: {
        topic_name: topic_name
      }
    })
    return new Response(JSON.stringify(topic))
  } catch (error) {
    console.log(error);
  }
}

export const DELETE = async (req: Request) => {
  const { search } = new URL(req.url);
  const params = new URLSearchParams(search);
  const id: any = params.get('id');

  if (!id) {
    return new Response('No topics that contains that id')
  }

  try {
    const response = await prisma.topic.delete({
      where: {
        id: Number(id)
      }
    })
    return new Response(JSON.stringify(`You deleted ${response}`))
  } catch (error) {
    console.log(error);
  }
};


export const PATCH = async (req: Request) => {
  const { topic_name } = await req.json()
  const { search } = new URL(req.url)
  const params = new URLSearchParams(search)
  const id: any = params.get('id')

  if (!id) {
    return new Response('No topics that contains that id')
  }
  if (!topic_name) {
    return new Response('Must provide new topic name')
  }
  try {
    const response = await prisma.topic.update({
      where: {
        id: Number(id)
      },
      data: {
        topic_name: topic_name
      }
    })
    return new Response(JSON.stringify(`You updated ${response}`))
  } catch (error) {
    console.log(error);

  }
}


export const GET = async () => {
  try {
    const response = await prisma.topic.findMany()

    return new Response(JSON.stringify(response))
  } catch (error) {
    console.log(error);

  }
}
