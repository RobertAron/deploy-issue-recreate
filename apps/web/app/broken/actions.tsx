"use server";

import { prisma } from "../../other/getPrismaClient";

export async function getData() {
  const data = await prisma.form_response.findFirst();
  return data;
}
