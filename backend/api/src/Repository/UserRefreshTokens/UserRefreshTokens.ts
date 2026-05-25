import type { PrismaClient } from "../../../generated/prisma/client";
import { prisma } from "../../Configs/Prisma";
import mapToPrismaUpdate from "../../Helpers/mapToPrismaUpdate";
import type { Prisma } from "../../../generated/prisma/client";
import type { UserRefreshTokens, UserRefreshTokensCreate, UserRefreshTokensUpdate } from "../../Types/UserRefreshToken";
import type { UserIdParam } from "../../Models/Entities/User/User.types";


class UserRefreshTokensRepository {
  private db: PrismaClient;

  constructor(db: PrismaClient = prisma) {
    this.db = db;
  }


  async getByUserId(id: UserIdParam): Promise<UserRefreshTokens | null> {
    return this.db.userRefreshTokens.findUnique({
      where: { userId: id },
    });
  }

  async getActiveByUserId(id: UserIdParam): Promise<UserRefreshTokens[]> {
    return this.db.userRefreshTokens.findMany({
      where: { 
        userId: id ,
        isActive: true
      },
    });
  }

  async getByRefreshToken(token: string) : Promise<UserRefreshTokens | null>{
    return this.db.userRefreshTokens.findUnique({
      where: { token:token },
    });
  }

  async create(data: UserRefreshTokensCreate): Promise<UserRefreshTokens> {
    return this.db.userRefreshTokens.create({
    data
    });
  }

  async update(id: UserIdParam, data: UserRefreshTokensUpdate): Promise<UserRefreshTokens> {
    const prismaData = mapToPrismaUpdate<
      UserRefreshTokensUpdate,
      Prisma.UserRefreshTokensUpdateInput
    >(data);
    
    return this.db.userRefreshTokens.update({
      where: { id },
      data: prismaData,
    });
  }

  async inactive(id: number): Promise<UserRefreshTokens> {
    return this.db.userRefreshTokens.update({
      where: { id },
      data: {
        isActive: false,
        revokedAt: new Date()
      },
    });
  }
}

export default UserRefreshTokensRepository;
