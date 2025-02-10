import {PrismaClient} from '@prisma/mono-repo-db'

const prismaSingleton = () => {
  return new PrismaClient({
    datasources: { db: { url: process.env.DATABASE_URL! } },
  });
};
declare global {
  // eslint-disable-next-line no-var
  var PRISMA_SINGLETON: ReturnType<typeof prismaSingleton>;
}
export const prisma = globalThis.PRISMA_SINGLETON ?? prismaSingleton();

if (process.env.NODE_ENV !== "production") globalThis.PRISMA_SINGLETON = prisma;
