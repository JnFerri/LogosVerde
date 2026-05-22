import type z from "zod";
import type { UserRefreshTokensCreateSchema, UserRefreshTokensSchema, UserRefreshTokensUpdateSchema } from "../Schemas/UserRefreshTokens";

export type UserRefreshTokens = z.infer<typeof UserRefreshTokensSchema>;

export type UserRefreshTokensCreate = z.infer<typeof UserRefreshTokensCreateSchema>;

export type UserRefreshTokensUpdate = z.infer<typeof UserRefreshTokensUpdateSchema>;
