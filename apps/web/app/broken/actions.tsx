"use server";

import { prisma } from "../../other/getPrismaClient";

export async function getData() {
  try {
    const data = await prisma.form_response.findFirst();
    return data;
  } catch (err) {
    console.log(err);
    return { data: "got an error...", err };
  }
}
