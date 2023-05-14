import { PrismaClient } from '@prisma/client';
import { URLSearchParams, URL } from 'url';

const prisma = new PrismaClient()

export const POST = async (req: Request) => {
  const { name, username, password } = await req.json()
  try {
    const allTeacher = await prisma.teacher.findMany()
    const existTeacher = allTeacher.some((teacher) => teacher.user_name === username)
    if(existTeacher){
      return new Response('Username already exist!')
    }
    const newTeacher = await prisma.teacher.create({
      data: {
        name: name,
        user_name: username,
        password: password
      }
    })
    return new Response(JSON.stringify(newTeacher))
  } catch (error) {
    console.log(error);
  }
}

export const DELETE = async (req: Request) => {
  const { search } = new URL(req.url);
  const params = new URLSearchParams(search);
  const id: any = params.get('id');
  if (!id) {
    return new Response('No teacher that contains that id')
  }

  try {
    const response = await prisma.teacher.delete({
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
  const { name, username, password } = await req.json()
  const { search } = new URL(req.url)
  const params = new URLSearchParams(search)
  const id: any = params.get('id')

  if (!name || !username || !password) {
    return new Response('Fill up the form!')
  }
  try {
    const allTeacher = await prisma.teacher.findMany()
    const existTeacher = allTeacher.some((teacher) => teacher.user_name === username)
    if(existTeacher){
      return new Response('Username already exist!')
    }
    
    const response = await prisma.teacher.update({
      where: {
        id: Number(id)
      },
      data: {
        name: name,
        user_name: username,
        password: password
      }
    })
    if(!response){
      return new Response('Server error')
    }
    return new Response(JSON.stringify(`You updated ${response}`))
  } catch (error) {
    console.log(error);

  }
}


export const GET = async () => {
  try {
    const response:any = await prisma.teacher.findMany()
    return new Response(JSON.stringify(response))
  } catch (error) {
    console.log(error);
  }
}
