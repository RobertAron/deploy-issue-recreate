"use server";
import { prisma } from "@repo/database";

export async function myAction() {
  const data = await prisma.form_response.findFirst();
  return data;
}
