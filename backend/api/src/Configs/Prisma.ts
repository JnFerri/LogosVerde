import "dotenv/config";
import { PrismaClient } from "../../generated/prisma/client.js";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";


const DATABASE_HOST = process.env.DATABASE_HOST ?? "localhost";
const DATABASE_USER = process.env.DATABASE_USER ?? "root";
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD ?? "";
const DATABASE_NAME = process.env.DATABASE_NAME ?? "mydb";

const adapter = new PrismaMariaDb({
  host: DATABASE_HOST,
  user: DATABASE_USER,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  connectionLimit: 5,
});
const prisma = new PrismaClient({ adapter });

export { prisma };