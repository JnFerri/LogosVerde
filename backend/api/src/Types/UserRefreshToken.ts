import type z from "zod";
import type { UserRefreshTokenCreateSchema, UserRefreshTokenSchema, UserRefreshTokenUpdateSchema } from "../Models/DTO/UserRefreshToken";

export type UserRefreshToken = z.infer<typeof UserRefreshTokenSchema>;

export type UserRefreshTokenCreate = z.infer<typeof UserRefreshTokenCreateSchema>;

export type UserRefreshTokenUpdate = z.infer<typeof UserRefreshTokenUpdateSchema>;

export type UserRefreshTokenIdParam = z.infer<typeof UserRefreshTokenSchema>;