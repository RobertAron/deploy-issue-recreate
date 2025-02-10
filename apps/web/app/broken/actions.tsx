"use server";

console.log('pre import')
import { prisma } from "../../other/getPrismaClient";
console.log('post import')

export async function getData() {
  console.log('did I even here here?')
  try {
    const data = await prisma.form_response.findFirst();
    return data;
  } catch (err) {
    console.log(err);
    return { data: "got an error...", err };
  }
}
