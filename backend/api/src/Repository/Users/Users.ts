import type { PrismaClient } from "../../../generated/prisma/client";
import { prisma } from "../../Configs/Prisma";
import mapToPrismaUpdate from "../../Helpers/mapToPrismaUpdate";
import type { User, UserCreate, UserIdParam, UserUpdate } from "../../Types/User";
import type { Prisma } from "../../../generated/prisma/client";

class UsersRepository {
  private db: PrismaClient;

  constructor(db: PrismaClient = prisma) {
    this.db = db;
  }

  async getAll(): Promise<User[]> {
    return this.db.users.findMany();
  }

  async getById(id: UserIdParam): Promise<User | null> {
    return this.db.users.findUnique({
      where: { id },
    });
  }

  async getByEmail(email: string): Promise<User | null> {
    return this.db.users.findUnique({
      where: { email },
    });
  }

  async create(data: UserCreate): Promise<User> {
    return this.db.users.create({
      data: {
        ...data,
        isActive: true,
      },
    });
  }

  async update(id: UserIdParam, data: UserUpdate): Promise<User> {
    const prismaData = mapToPrismaUpdate<
      UserUpdate,
      Prisma.UsersUpdateInput
    >(data);
    
    return this.db.users.update({
      where: { id },
      data: prismaData,
    });
  }

  async inactive(id: UserIdParam): Promise<User> {
    return this.db.users.update({
      where: { id },
      data: {
        isActive: false,
      },
    });
  }
}

export default UsersRepository;
