import type { Prisma } from "../../generated/prisma/client";
import User from "../Models/Entities/User/User.entity";

export class UserMapper {
  static toEntity(data: Prisma.UsersGetPayload<true>): User {
    return new User(
      data.id,
      data.name,
      data.email,
      data.isActive,
      data.createdAt
    );
  }

  static toEntities(data: Prisma.UsersGetPayload<true>[]): User[] {
    return data.map((item) => this.toEntity(item));
  }
}
