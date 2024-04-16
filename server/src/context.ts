import { PrismaClient } from "@prisma/client";
import * as trpcExpress from "@trpc/server/adapters/express";

const prisma = new PrismaClient();

export const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => {
  return {
    prisma,
  };
};
