import { z } from "zod";


export const UserRefreshTokensSchema = z.object({
  id: z.number(),

  userId: z.number(),

  token: z.string().max(500),

  isActive: z
    .number()
    .int()
    .transform((v) => v === 1), // transforma em boolean

  createdAt: z.coerce.date(),

  expiresAt: z.coerce.date(),

  revokedAt: z.coerce.date().nullable(),
});

export const UserRefreshTokensCreateSchema = UserRefreshTokensSchema.pick({
  userId: true,
  token: true,
  expiresAt: true,
});

export const UserRefreshTokensUpdateSchema = UserRefreshTokensSchema.pick({
  isActive: true,
  revokedAt: true
});

export const UserRefreshTokensIdUserParamSchema = z.coerce.number().int().positive();