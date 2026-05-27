import type z from "zod";
import type { UserCreateSchema, UserIdParamSchema, UserSchema, UserUpdateSchema } from "../../../Schemas/User";


export type UserCreate = z.infer<typeof UserCreateSchema>;

export type UserUpdate = z.infer<typeof UserUpdateSchema>;

export type UserLogin = z.infer<typeof UserSchema>;

export type UserIdParam = z.infer<typeof UserIdParamSchema>;