import { Prisma } from "../../generated/prisma/client";

function isPrismaError(
  err: unknown
): err is Prisma.PrismaClientKnownRequestError {
  return err instanceof Prisma.PrismaClientKnownRequestError;
}

export default isPrismaError;