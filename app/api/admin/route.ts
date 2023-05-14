import { PrismaClient } from '@prisma/client';
import { URLSearchParams, URL } from 'url';

const prisma = new PrismaClient()

export const POST = async (req: Request) => {
  const { name, user_name, password } = await req.json()
  try {
    const admin = await prisma.adminaccount.findMany()
    const existAdmin = admin.some((account) => account.user_name === user_name)

    if(existAdmin){
      return new Response('Username already exist!')
    }
    const newAdmin = await prisma.adminaccount.create({
      data: {
        name: name,
        user_name: user_name,
        password: password
      }
    })
    return new Response(JSON.stringify(newAdmin))
  } catch (error) {
    console.log(error);
  }
}

export const DELETE = async (req: Request) => {
  const { search } = new URL(req.url);
  const params = new URLSearchParams(search);
  const id: any = params.get('id');
  if (!id) {
    return new Response('No admin that contains that id')
  }

  try {
    const response = await prisma.adminaccount.delete({
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
  const { name, user_name, password } = await req.json()
  const { search } = new URL(req.url)
  const params = new URLSearchParams(search)
  const id: any = params.get('id')
  if (!id) {
    return new Response('No admin that contains that id')
  }
  if (!name || !user_name || !password) {
    return new Response('Fill up the form!')
  }
  try {
    const admin = await prisma.adminaccount.findMany()
    const existAdmin = admin.some((account) => account.user_name === user_name)

    if(existAdmin){
      return new Response('Username already exist!')
    }

    const response = await prisma.adminaccount.update({
      where: {
        id: Number(id)
      },
      data: {
        name: name,
        user_name: user_name,
        password: password
      }
    })
    return new Response(JSON.stringify(`You updated ${response}`))
  } catch (error) {
    console.log(error);

  }
}


export const GET = async () => {
  try {
    const response = await prisma.adminaccount.findMany()
    return new Response(JSON.stringify(response))
  } catch (error) {
    console.log(error);
  }
}
