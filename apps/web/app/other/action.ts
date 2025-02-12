"use server";
import { prisma1 } from "../../getPrismaClient";

export async function myAction() {
  const data = await prisma1.form_response.findFirst();
  // const moreData = await prisma2.randomized_user_questions.findFirst({ skip: 5 });
  return [data];
}
