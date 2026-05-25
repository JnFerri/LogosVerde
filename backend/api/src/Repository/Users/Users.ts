import type { PrismaClient } from "../../../generated/prisma/client";
import { prisma } from "../../Configs/Prisma";
import mapToPrismaUpdate from "../../Helpers/mapToPrismaUpdate";
import type { Prisma } from "../../../generated/prisma/client";
import User from "../../Models/Entities/User/User.entity";
import type { UserCreate, UserIdParam, UserUpdate } from "../../Models/Entities/User/User.types";
import { UserMapper } from "../../Mappers/User";

class UsersRepository {
  private db: PrismaClient;

  constructor(db: PrismaClient = prisma) {
    this.db = db;
  }

  async getAll(): Promise<User[]> {
    const users = await this.db.users.findMany();
    return UserMapper.toEntities(users);
  }

  async getById(id: UserIdParam): Promise<User | null> {
    const user = await this.db.users.findUnique({
      where: { id },
    })
    return user ? UserMapper.toEntity(user) : null;
  }

  async getByEmail(email: string): Promise<User | null> {
    const user = await this.db.users.findUnique({
      where: { email },
    });
    return user ? UserMapper.toEntity(user) : null;
  }

  async create(data: UserCreate): Promise<User> {
    const userCreated = await this.db.users.create({
      data: {
        ...data,
        isActive: true,
      },
    });
    return UserMapper.toEntity(userCreated);

  }

  async update(id: UserIdParam, data: UserUpdate): Promise<User> {
    const prismaData = mapToPrismaUpdate<
      UserUpdate,
      Prisma.UsersUpdateInput
    >(data);
    
    const userUpdated = await this.db.users.update({
      where: { id },
      data: prismaData,
    });
    return UserMapper.toEntity(userUpdated);
  }

  async inactive(id: UserIdParam): Promise<User> {
    const userInactive = await this.db.users.update({
      where: { id },
      data: {
        isActive: false,
      },
    });
    return UserMapper.toEntity(userInactive);
  }
}

export default UsersRepository;
