"use server";
import { prisma1 } from "../../getPrismaClient";

export async function myAction() {
  const data = await prisma1.form_response.findFirst();
  return [data];
}
